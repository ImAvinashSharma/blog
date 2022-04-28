const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true,
      topLevelAwait: true,
    }
    // Fixes npm packages (mdx) that depend on `fs` module
    if (isServer) {
      return {
        ...config,
        // This is what allows us to add a node script via NextJS's server
        entry() {
          return config.entry().then((entry) => {
            return Object.assign({}, entry, {
              cache: "./cache/cache.js",
            })
          })
        },
      }
    }
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
})
