import {Link} from "gatsby";
import React from "react";

interface MenuProps {
    title?: string;
    closeBtn?: boolean;
}

export default function Header(menuProps: MenuProps) {

    let title = menuProps.title;
    let closeBtn = menuProps.closeBtn;

    if (!title){
        title = "xprilion's blog"
    }

    if (!closeBtn){
        closeBtn = false;
    }

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <nav className={"flex flow-row justify-between items-center py-4"}>
            {
                closeBtn ? (
                    <div className={"flex flex-row items-center pr-4"}>
                        <Link to={"/"}>
                            <button
                                type="button"
                                className="flex items-center justify-center w-10 h-10 text-3xl rounded-full mr-4"
                                style={{
                                    backgroundImage: "url(/close.png)",
                                    backgroundSize: "120%",
                                    backgroundPosition: "50%",
                                    backgroundRepeat: "no-repeat"
                                }}
                            >
                            </button>
                        </Link>
                        <h1 className="text-xl m-0 lg:text-2xl text-black leading-normal inline-block">
                            {title}
                        </h1>
                    </div>
                ) : (
                    <Link to={"/"}>
                        <h1 className="text-3xl m-0 text-black leading-normal inline-block">
                            { title }
                        </h1>
                    </Link>
                )
            }
            <div>
                {/* Menu for large screens */}
                <div className="hidden lg:flex">
                    <Link to="/posts" className="m-1">Posts</Link>
                    <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                    <Link to="/talks" className="m-1">Talks</Link>
                    <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                    <Link to="/publications" className="m-1">Publications</Link>
                    <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                    <Link to="/codelabs" className="m-1">Codelabs</Link>
                </div>

                <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 lg:hidden text-3xl rounded-full border-2 border-black"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        backgroundImage: "url(/ellipses.png)",
                        backgroundSize: "50%",
                        backgroundPosition: "50%",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                </button>

                {/* Collapsed menu for smaller screens */}
                {menuOpen && (
                    <div className="lg:hidden" id={"small-nav-menu"}>
                        <Link to="/posts" className="m-1">Posts</Link>
                        <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                        <Link to="/talks" className="m-1">Talks</Link>
                        <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                        <Link to="/publications" className="m-1">Publications</Link>
                        <span className={"my-1"}>&nbsp;&middot;&nbsp;</span>
                        <Link to="/codelabs" className="m-1">Codelabs</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}