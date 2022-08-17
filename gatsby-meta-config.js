/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Dev Thorsten",
  description: `Thorsten's Blog`,
  author: "Thorsten Schminkel",
  siteUrl: "https://schminkel.github.io/gatsbyjs-github-pages/",
  lang: "en",
  utterances: "schminkel/gatsbyjs-github-pages",
  links: {
    github: "https://github.com/schminkel/gatsbyjs-github-pages",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
