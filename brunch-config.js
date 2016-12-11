exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "js/app.js",

      order: {
        before: [
          "dist/js/jquery.min.js",
          "dist/js/tether.min.js",
          "dist/js/bootstrap.min.js",
          "dist/js/bootstrap-select.min.js",
          "material.js"
        ],
        after: [
          "web/static/js/app.js" // concat app.js last
        ]
      }
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
      presets: ['es2015', 'es2016', 'react', 'stage-2'],
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
      "phoenix",
      "phoenix_html",
      "react",
      "react-dom",
      "react-addons-perf"
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
