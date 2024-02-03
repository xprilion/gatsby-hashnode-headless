import * as React from "react"
import {graphql, Link} from "gatsby";
import type {HeadFC, PageProps} from "gatsby"
import Layout from "../components/layout";
import {formatDate} from "../utils/date";
import {SignupForm} from "../components/signup-form";

interface IndexPageProps {
    data: {
        hashnode: {
            publication: {
                posts: {
                    edges: Array<{
                        node: {
                            title: string;
                            slug: string;
                            publishedAt: string;
                        }
                    }>
                }
            }
        }
    }
}

const IndexPage = ({data}: IndexPageProps) => {
    const posts = data.hashnode.publication.posts.edges;

    return (
        <Layout>
            <div className={"flex mt-8 flex-col border-b-2"}>
                <div className={"flex flex-row justify-start items-start"}>
                    <img className={"rounded-full h-12 w-12 m-0"} src={`/favicon.png`} alt={"Anubhav Singh"} />
                    <div className={"ml-4"}>
                        Hey, I'm <strong>Anubhav Singh</strong>. I love building software, mixing stacks and making memes.
                        <br></br>
                        Co-founder @ <a href={`https://dynopii.com/anubhav`} target="blank">Dynopii</a>
                        &nbsp; & <a href={`https://developers.google.com/community/experts/directory/profile/profile-anubhav-singh`} target="blank">Google Dev Expert</a> in GCP
                        <p>
                            <a href={`https://twitter.com/xprilion`} target="blank">Twitter</a>
                            <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                            <a href={`https://github.com/xprilion`} target="blank">GitHub</a>
                            <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                            <a href={`https://linkedin.com/in/xprilion`} target="blank">LinkedIn</a>
                            <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                            <a href={`https://instagram.com/xprilion`} target="blank">Instagram</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={"mt-8 border-b-2"}>
                I used to lead the volunteer team at <a href={`https://gdg.community.dev/gdg-cloud-kolkata/`} target="blank">GDG Cloud Kolkata</a> and co-led the team at <a href={`https://tfug.kolkata.dev`} target="blank">TFUG Kolkata</a><br />
                I established <a href={`https://dscnsec.com`} target="blank">DSC NSEC</a> and <a href={`https://winterofcode.com`} target="blank">Winter of Code</a>.<br />
                I run a support channel for GSoC aspirants at <a href={`https://t.me/fossflow`} target="blank">FossFlow</a> since 2020. <br /><br />
            </div>
            <ul className={"mt-8 p-0"}>
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
            <Link
                style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                    padding: "0.5em 1em",
                    border: "2px solid #5c5c5c",
                    borderRadius: "4px",
                }}
                to={`/posts/`}
            >
                More →
            </Link>
            <br />
            <br />
            <SignupForm />
            <br />
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Anubhav Singh | xprilion&apos;s blog</title>


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hashnode {
      publication(host: "xprilion.hashnode.dev") {
        isTeam
        title
        posts(first: 3, filter: {tagSlugs: "blog"}) {
          edges {
            node {
                id
                slug
                title
                brief
                url
                publishedAt
            }
          }
        }
      }
    }
  }
`