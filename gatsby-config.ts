import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    flags: {
        DEV_SSR: true,
        // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    },
    siteMetadata: {
        title: "xprilion's blog",
        author: "Anubhav Singh",
        description: "Anubhav writing about fancy things pretending they're important. Might write about Machine learning or Web development or random tech topics as per mood.",
        siteUrl: "https://xprilion.com"
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "HASHNODE",
                fieldName: "hashnode",
                url: "https://gql.hashnode.com/",
            },
        },
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: [
                    "G-NKJL65V2YL",
                ]
            },
        },
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-advanced-sitemap`,
            options: {
                createLinkInHead: true
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/favicon.png",
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        'gatsby-plugin-react-helmet',
    ]
};

export default config;
