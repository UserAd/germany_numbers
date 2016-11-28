exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "js/app.js",

      order: {
        before: [
          "dist/js/jquery.min.js", // I don't think these four are necessary, just old holdovers...
          "dist/js/tether.min.js",
          "dist/js/bootstrap.min.js",
          "dist/js/bootstrap-select.min.js"
        ],
        after: [
          "web/static/js/app.js" // concat app.js last
        ]
      }
      // To use a separate vendor.js bundle, specify two files path
      // http://brunch.io/docs/config#-files-
      // joinTo: {
      //  "js/app.js": /^(web\/static\/js)/,
      //  "js/vendor.js": /^(web\/static\/vendor)|(deps)/
      // }
      //
      // To change the order of concatenation of files, explicitly mention here
      // order: {
      //   before: [
      //     "web/static/vendor/js/jquery-2.1.1.js",
      //     "web/static/vendor/js/bootstrap.min.js"
      //   ]
      // }
    },
    stylesheets: {
      joinTo: "css/app.css",
      order: {

        before: [
          "dist/css/tether.min.css",
          "dist/css/bootstrap.min.css",
          "dist/css/bootstrap-select.min.css",
          "dist/material.min.css",
          "dist/material.cyan-green.min.css",
          "iconfont/material-icons.css"
        ],

        after: ["web/static/css/app.css"] // concat app.css last
      }
    },
    templates: {
      joinTo: "js/app.js"
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/web/static/assets". Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(web\/static\/assets)/
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "web/static",
      "test/static"
    ],

    // Where to compile files to
    public: "priv/static"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/web\/static\/vendor/]
    }
  },

  modules: {
    autoRequire: {
      "js/app.js": ["web/static/js/app"]
    }
  },

  npm: {
    enabled: true,
    whitelist: [
      "jquery",
      "tether",
      "bootstrap",
      "bootstrap-select",
      "material-design-lite",
      "highlight.js",
      //"phoenix",
      "phoenix_html"
    ],
    styles: {
      bootstrap: ["dist/css/bootstrap.min.css"],
      tether: ["dist/css/tether.min.css"],
      "material-design-lite": [
        "dist/material.min.css",
        "dist/material.blue-light_blue.min.css"
      ],
      "material-design-icons": [
        "iconfont/material-icons.css"
      ]
    }
  }
};