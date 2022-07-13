require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Sambo Brazil`,
    siteUrl: `https://www.sambo-rio.org.br`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/logo-faserj.jpeg"
      }
    },
  ]
};