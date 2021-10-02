module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "maisiecrossdesigns",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "templates",
    //     path: `${__dirname}/src/templates/`,
    //   },
    // },
  ],
  siteMetadata: {
    title: 'Maisie Cross Designs',
    description: 'graphic designer portfolio',
    copyright: 'This site is copyright 2021 Maisie Cross Designs'
  }
};
