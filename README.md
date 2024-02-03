<p align="center">
  <a href="https://hashnode.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress">
      <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress" height="128">
    </picture>
  </a>
</p>
<h1 align="center">
  Gatsby + Hashnode Headless CMS Blog Starter
</h1>

Dive into the world of modern web development with this Gatsby-Hashnode-Headless Blog Starter Kit. Built on Gatsby and TypeScript, this starter kit integrates seamlessly with Hashnode's Headless CMS, enabling developers to leverage Hashnode's blogging platform for content management while customizing the blog's frontend with Gatsby.

## 🚀 Quick Start Guide

### Creating Your Gatsby-Hashnode Blog

1. **Initialize Your Gatsby Site**

   Clone the starter kit and install dependencies to set up your Gatsby site integrated with Hashnode's Headless CMS.

    ```shell
    # Clone the Gatsby-Hashnode-Headless starter kit
    git clone https://github.com/xprilion/gatsby-hashnode-headless.git
    cd gatsby-hashnode-headless/
    yarn
    ```

2. **Start Developing**

   Launch your site's development server and begin crafting your blog.

    ```shell
    yarn dev
    ```

   Your blog is now running at `http://localhost:8000`! Navigate there to see your blog live. Edit `src/pages/index.tsx` to customize your site and watch updates in real-time.

3. **Learn More**

   Dive deeper into Gatsby and Hashnode to enhance your blog further:

    - [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
    - [Hashnode Headless CMS](https://hashnode.com/headless)
    - [TypeScript in Gatsby](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/)

### Deploying on GitHub Pages

Prefer GitHub Pages for hosting? Follow these steps to deploy your Gatsby-Hashnode blog:

1. **Prepare Your Site for GitHub Pages**

   Adjust your `gatsby-config.js` to include the `pathPrefix` option set to your GitHub Pages URL segment (e.g., `/blog` for `username.github.io/blog`).

    ```js
    module.exports = {
      // Other config options
      pathPrefix: `/blog`, // Adjust based on your GitHub Pages URL
    };
    ```

2. **Build Your Site**

   Generate a production build of your site, considering the `pathPrefix`.

    ```shell
    yarn build -- --prefix-paths
    ```

3. **Deploy to GitHub Pages**

   Use the `gh-pages` package to deploy your site to GitHub Pages.

    ```shell
    yarn add gh-pages --dev
    yarn deploy
    ```

   This command will build your site and push the generated files to the `gh-pages` branch of your repository.

Congratulations 🎉! You've successfully set up and deployed your Gatsby-Hashnode blog on GitHub Pages. Visit your GitHub Pages URL to see your blog live.

## Found an issue?

If you have found an issue or bug, please create an [issue](https://github.com/xprilion/gatsby-hashnode-headless/issues).

If it's a quick fix, such as a misspelled word or a broken link, feel free to skip creating an issue. You can create a [pull request](https://github.com/xprilion/gatsby-hashnode-headless/pulls) directly.


## 📚 Resources

- **APIs and Custom Development**: Leverage Hashnode's public GraphQL APIs for advanced customizations.
- **Support and Community**: Join the Hashnode community on Discord for discussions, support, and to connect with other bloggers.
- **Feedback and Contributions**: Found an issue or have a suggestion? Open an issue on the GitHub repo or submit a pull request.

Embark on your blogging journey with the Gatsby-Hashnode-Headless Blog Starter Kit, and unlock the full potential of modern web development for your blogging platform.