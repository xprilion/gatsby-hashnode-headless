import * as React from "react"
import {PageProps, HeadFC, Link} from "gatsby";
import Layout from "../../components/layout";
import {formatDate} from "../../utils/date";
import {SignupForm} from "../../components/signup-form";


interface PresentationProps {
    presentations: any
}

const PresentationIndex: React.FC<PageProps<{}, PresentationProps>> = ({ pageContext }) => {
    
    const { presentations } = pageContext
    
    return (
        <Layout>
            <ul className={"p-0"}>
                {presentations.map((post: any) => (
                    <li style={{display: "block"}} key={`ppt-${post.node.id}`}>
                        <Link style={{boxShadow: `none`}} to={`/presentations/${post.node.slug}`}>
                            <h2 style={{marginBottom: `0.2rem`}}>
                                {post.node.title.replace("Presentation::", "")}
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

export const Head: HeadFC = () => <title>Presentations | xprilion&apos;s blog</title>

export default PresentationIndex