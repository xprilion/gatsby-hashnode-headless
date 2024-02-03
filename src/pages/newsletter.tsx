import * as React from "react"
import Layout from "../components/layout";
import {SignupForm} from "../components/signup-form";

const NewsletterPage = () => {
    return (
        <Layout>
            <h1>🚀 Join My AI, Cloud & Web Tech Newsletter! </h1>
            <p>
                Stay ahead with exclusive insights into AI breakthroughs, cloud advancements, and unique opportunities. Subscribe for a monthly dose of inspiration and innovation. 🌐✨
            </p>
            <br />
            <SignupForm />
            <br />
        </Layout>
    )
}

export default NewsletterPage