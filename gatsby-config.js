require('dotenv').config();

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['feed', 'page', 'post', 'user'],
  singleTypes: ['footer', 'menu'],
};

module.exports = {
  siteMetadata: {
    title: `Sambo Brazil`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ]
};