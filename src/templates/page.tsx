import React, {useEffect} from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet"
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-python.min.js';
import {SignupForm} from "../components/signup-form";


const StaticPage = ({pageContext}: PostProps) => {
    const {id, brief, title, content} = pageContext.node

    useEffect(() => {
        Prism.highlightAll();
    }, [content]);

    return (
        <Layout>
            <Helmet>
                <title>{`${title.replace("Page::", "")} | xprilion's blog`}</title>
                <meta itemProp="name" content={`${title.replace("Page::", "")} | xprilion's blog`}/>

                <meta name="description" content={brief}/>
                <meta property="og:description" content={brief}/>

                <meta name="twitter:title" content={`${title.replace("Page::", "")} | xprilion's blog`}/>
                <meta name="twitter:description" content={brief}/>
            </Helmet>
            <h1>{title.replace("Page::", "")}</h1>
            <div dangerouslySetInnerHTML={{__html: content.html}}/>
            <br />
            <SignupForm />
            <br />
        </Layout>
    );
};
export default StaticPage;
