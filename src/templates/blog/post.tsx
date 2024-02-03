import React, {useEffect} from "react";
import { Helmet } from "react-helmet"
import Layout from "../../components/layout";
import Prism from 'prismjs';
import {formatDate} from "../../utils/date";
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-python.min.js';
import {ReactCusdis} from "react-cusdis";
import {SignupForm} from "../../components/signup-form";



const Post = ({pageContext}: PostProps) => {

    const {id, title, brief, url, publishedAt, coverImage, content, seo} = pageContext.node
    useEffect(() => {
        Prism.highlightAll();
    }, [content]);

    return (
        <Layout>
            <Helmet>
                <title>{`${title} | xprilion's blog`}</title>
                <meta itemProp="name" content={`${title} | xprilion's blog`}/>

                <meta name="description" content={brief}/>
                <meta property="og:description" content={brief}/>

                <meta name="twitter:title" content={`${title} | xprilion's blog`}/>
                <meta name="twitter:description" content={brief}/>

                {coverImage && <meta property="image" content={coverImage.url}/>}
                {coverImage && <meta property="og:image" content={coverImage.url}/>}
                {coverImage && <meta property="twitter:image" content={coverImage.url}/>}
            </Helmet>
            <h1>{title}</h1>
            <p style={{marginTop: "-1rem"}}><small>{formatDate(publishedAt)}</small></p>
            {coverImage && <img src={`${coverImage.url}`} alt={title} loading={"lazy"} />}
            <br/>
            <div dangerouslySetInnerHTML={{__html: content.html}}/>
            <br />
            <SignupForm />
            <br />
            {
                (seo?.title || id) && <ReactCusdis
                    attrs={{
                        host: 'https://cusdis.com',
                        appId: 'e9bc0bcb-d463-4f63-8604-34e78a1ec232',
                        pageId: seo?.title ? seo.title : id,
                        pageTitle: title,
                        pageUrl: url
                    }}
                />
            }
        </Layout>
    );
};

export default Post;
