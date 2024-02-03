export interface Tag {
    slug: string;
}
export interface Node {
    id: string;
    slug: string;
    title: string;
    brief?: string;
    url?: string;
    publishedAt?: string;
    tags: Tag[];
}

export interface Edge {
    node: Node;
}

export interface PageInfo {
    hasNextPage: boolean;
    endCursor: string | null;
}

export interface PostsResult {
    edges: Edge[];
    pageInfo: PageInfo;
}

export interface QueryResult {
    data: {
        hashnode: {
            publication: {
                posts: PostsResult;
            };
        };
    };
}

