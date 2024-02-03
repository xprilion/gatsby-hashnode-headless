import * as React from "react"
import {PageProps, HeadFC, Link} from "gatsby";
import Layout from "../../components/layout";
import {formatDate} from "../../utils/date";
import {SignupForm} from "../../components/signup-form";


interface CodelabsPageProps {
    labs: any
}

const CodelabsIndex: React.FC<PageProps<{}, CodelabsPageProps>> = ({ pageContext }) => {

    const { labs } = pageContext

    return (
        <Layout>
            <ul className={"p-0"}>
                {labs.map((post: any) => (
                    <li style={{display: "block"}} key={post.node.slug}>
                        <Link style={{boxShadow: `none`}} to={`/codelabs/${post.node.slug}`}>
                            <h2 style={{marginBottom: `0.2rem`}}>
                                {post.node.title.replace("Codelab::", "")}
                            </h2>
                        </Link>
                        <small>{formatDate(post.node.publishedAt)}</small>
                        <p style={{marginTop: `0.5rem`}}>{post.node.subtitle}</p>
                    </li>
                ))}
            </ul>
            <br/>
            <SignupForm/>
            <br/>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>Codelabs | xprilion&apos;s blog</title>

export default CodelabsIndex