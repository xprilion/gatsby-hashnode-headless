import * as React from "react"
import {graphql, Link} from "gatsby";
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../../components/layout";
import {formatDate} from "../../utils/date";
import {SignupForm} from "../../components/signup-form";

interface PostContext {
    posts: any
}

const Index: React.FC<PageProps<{}, PostContext>> = ({ pageContext }) => {
    const { posts } = pageContext;

    return (
        <Layout>
            <ul className={"p-0"}>
                {posts.map((post: any) => (
                    <li style={{display: "block"}} key={post.node.slug}>
                        <Link style={{ boxShadow: `none` }} to={`/${post.node.slug}`}>
                            <h2 style={{ marginBottom: `0.2rem` }}>
                            {post.node.title}
                            </h2>
                        </Link>
                        <small>{formatDate(post.node.publishedAt)}</small>
                        <p style={{ marginTop: `0.5rem` }}>{post.node.brief}</p>
                    </li>
                ))}
            </ul>
            <br />
            <SignupForm />
            <br />
        </Layout>
    )
}

export default Index

export const Head: HeadFC = () => <title>Posts | xprilion&apos;s blog</title>