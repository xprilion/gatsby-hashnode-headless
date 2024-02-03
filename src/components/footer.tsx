import React from "react";
import {Link} from "gatsby";

export default function Footer() {
return (
    <div className={"w-full max-w-[800px] mx-auto py-8"}>
        <div className={"flex justify-between"}>
            <div>&copy; Anubhav Singh {new Date().getFullYear()}</div>
            <div>
                <Link to={"/sitemap.xml"}>Sitemap</Link>&nbsp;&middot;&nbsp;
                <Link to={"/newsletter"}>Newsletter</Link>
            </div>
        </div>
    </div>
)
    }