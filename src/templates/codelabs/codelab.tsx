import React, {useEffect} from "react";
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
import CodelabInterface from '../../components/codelabs/interface';
import CodelabLayout from "../../components/codelabs/layout";
import {Helmet} from "react-helmet";
import Header from "../../components/header";



const Post = ({pageContext}: PostProps) => {
    const {id, title, subtitle, url, publishedAt, coverImage,  content, seo} = pageContext.node

    useEffect(() => {
        Prism.highlightAll();
    }, [content]);

    return (
        <CodelabLayout>
            <Helmet>
                <title>{`${title.replace("Page::", "")} | xprilion's blog`}</title>
                <meta itemProp="name" content={`${title.replace("Page::", "")} | xprilion's blog`}/>

                <meta name="description" content={subtitle}/>
                <meta property="og:description" content={subtitle}/>

                <meta name="twitter:title" content={`${title.replace("Page::", "")} | xprilion's blog`}/>
                <meta name="twitter:description" content={subtitle}/>
            </Helmet>
            <Header closeBtn={true} title={`${title.replace("Page::", "")} | xprilion's blog`} />
            <hr className={"hr-full"}/>
            <CodelabInterface htmlContent={content.html}
               upperContent = {
                    <>
                        <h1>{title.replace("Codelab::", "")}</h1>
                        <p style={{marginTop: "-1rem"}}><small>{formatDate(publishedAt)}</small></p>
                        {coverImage && <img src={coverImage.url} alt={title}/>}
                    </>
                }
               bottomContent={
                <>
                    <br/>
                    <SignupForm/>
                    <br/>
                    {
                        <ReactCusdis
                            attrs={{
                                host: 'https://cusdis.com',
                                appId: 'e9bc0bcb-d463-4f63-8604-34e78a1ec232',
                                pageId: id,
                                pageTitle: title,
                                pageUrl: url
                            }}
                        />
                    }
                </>
            } />
        </CodelabLayout>
    );
};

export default Post;
