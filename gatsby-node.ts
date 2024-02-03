import { GatsbyNode } from 'gatsby';
import path from 'path';
import {Edge, QueryResult} from './src/types/gql-queries'


const fetchPostsQuery = `
  query FetchPosts($after: String) {
    hashnode {
      publication(host: "xprilion.hashnode.dev") {
        posts(first: 15, after: $after) {
          edges {
            node {
              id
              slug
              url
              title
              subtitle
              brief
              coverImage {
                url
              }
              content {
                html
              }
              publishedAt
              seo {
                title
                description
              }
              tags {
                slug
              }     
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }
`;

async function fetchAllItems(graphql: Function): Promise<Edge[]> {
    let items: Edge[] = [];
    let after: string | null = null;

    while (true) {
        const result: QueryResult = await graphql(fetchPostsQuery, { after });
        const newItems = result.data.hashnode.publication.posts.edges;
        items = items.concat(newItems);

        const pageInfo = result.data.hashnode.publication.posts.pageInfo;
        if (!pageInfo.hasNextPage) break;
        after = pageInfo.endCursor;
    }

    return items;
}

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
    const { createPage } = actions;
    
    const allItems = await fetchAllItems(graphql);
    
    const blogs = allItems.filter(({ node }) => node.tags.some(tag => tag.slug === 'blog'));
    const pages = allItems.filter(({ node }) => node.tags.some(tag => tag.slug === 'page'));
    const codelabs = allItems.filter(({ node }) => node.tags.some(tag => tag.slug === 'codelab'));
    const presentations = allItems.filter(({ node }) => node.tags.some(tag => tag.slug === 'ppt'));
    
    createPage({
        path: `posts`,
        component: path.resolve(`./src/templates/blog/index.tsx`),
        context: {
            posts: blogs,
        },
    });

    createPage({
        path: `codelabs`,
        component: path.resolve(`./src/templates/codelabs/index.tsx`),
        context: {
            labs: codelabs,
        },
    });
    
    createPage({
        path: `presentations`,
        component: path.resolve(`./src/templates/presentations/index.tsx`),
        context: {
            presentations: presentations,
        },
    });

    blogs.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/blog/post.tsx`),
            // @ts-ignore
            context: {id: node.id, node: node },
        });
    });

    pages.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/page.tsx`),
            context: { node: node },
        });
    });

    codelabs.forEach(({ node }) => {
        createPage({
            path: `codelabs/${node.slug}`,
            component: path.resolve(`./src/templates/codelabs/codelab.tsx`),
            context: { node: node },
        });
    });
    
    presentations.forEach(({ node }) => {
        createPage({
            path: `presentations/${node.slug}`,
            component: path.resolve(`./src/templates/presentations/presentation.tsx`),
            context: { node: node },
        });
    });
};
