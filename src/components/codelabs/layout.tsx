import React, { ReactNode } from "react";
import "../../styles/global.css";
// import "../../styles/generic.css";


type LayoutProps = {
        children: ReactNode;
};

export const Head = () => (
    <>
        <html lang="en" />
        <title>
                Anubhav Singh | xprilion&apos;s blog
        </title>
        <link rel="icon" href={"/favicon.ico"} />
        <link rel="shortcut icon" type="image/x-icon" href={"/favicon.ico"} />
        <link rel="apple-touch-icon" sizes="180x180" href={"/favicon.png"} />
        <meta name="theme-color" content="#7b46f6" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta itemProp="name" content="xprilion's blog" />
        <meta itemProp="description" content={"Hey, I'm Anubhav Singh. I love building software, mixing stacks and making memes."} />
        <meta itemProp="image" content={"/favicon.png"} />
        <meta name="description" content={"Hey, I'm Anubhav Singh. I love building software, mixing stacks and making memes."} />
        <meta property="og:title" content={"xprilion's blog"} />
        <meta property="og:description" content={"Hey, I'm Anubhav Singh. I love building software, mixing stacks and making memes."} />
        <meta property="og:image" content={"/favicon.png"}/>
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@xprilion" />
        <meta name="twitter:creator" content="@xprilion" />
        <meta name="twitter:title" content={"xprilion's blog"} />
        <meta name="twitter:description" content={"Hey, I'm Anubhav Singh. I love building software, mixing stacks and making memes."} />
        <meta name="twitter:image" content={"/favicon.png"} />
    </>
)

const CodelabLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={"px-4"}>
            {children}
        </div>
    );
};

export default CodelabLayout;
