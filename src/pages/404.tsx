import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";
import {useState} from "react";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const TOTAL_HIDDEN_404s = 5;

const NotFoundPage: React.FC<PageProps> = () => {

  const [found404s, setFound404s] = useState(0);

  const on404Click = () => {
    setFound404s(found404s + 1);
  };

  return (
      <Layout>
        <div style={pageStyles}>
          <h1 style={headingStyles}>Page not found</h1>
          <p style={paragraphStyles}>
            Sorry 😔, we couldn’t find what you were looking for.
            <br/>
            <br/>
            <Link to="/">Go home</Link>. Or play the game below to hunt for the missing page:
          </p>
          <div>
            <h2>Can you find all the '404's?</h2>
            {Array.from({length: TOTAL_HIDDEN_404s}, (_, i) => (
                <span key={i} onClick={on404Click} style={{cursor: 'pointer'}}>
                  404
                </span>
            ))}
            {found404s === TOTAL_HIDDEN_404s && (
                <p>You found them all! But the page is still missing...</p>
            )}
          </div>
        </div>
      </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
