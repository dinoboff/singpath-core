SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "singpath-core/": "singpath-core/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.11"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "singpath-core": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.3",
    "angular": "github:angular/bower-angular@1.5.6",
    "angular-animate": "github:angular/bower-angular-animate@1.5.6",
    "angular-loading-bar": "github:chieffancypants/angular-loading-bar@0.8.0",
    "angular-material": "github:angular/bower-material@1.0.6",
    "angular-messages": "github:angular/bower-angular-messages@1.5.6",
    "angular-route": "github:angular/bower-angular-route@1.5.6",
    "angularfire": "github:firebase/angularfire@1.1.4",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "chai": "npm:chai@3.5.0",
    "cryptojs": "github:sytelus/cryptojs@3.1.2",
    "css": "github:systemjs/plugin-css@0.1.22",
    "firebase": "github:firebase/firebase-bower@2.4.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "sinon": "npm:sinon@1.17.4",
    "sinon-chai": "npm:sinon-chai@2.8.0",
    "text": "github:systemjs/plugin-text@0.0.8",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },
  packages: {
    "npm:sinon@1.17.4": {
      "map": {
        "util": "npm:util@0.10.3",
        "formatio": "npm:formatio@1.1.1",
        "samsam": "npm:samsam@1.1.2",
        "lolex": "npm:lolex@1.3.2"
      }
    },
    "npm:chai@3.5.0": {
      "map": {
        "deep-eql": "npm:deep-eql@0.1.3",
        "assertion-error": "npm:assertion-error@1.0.1",
        "type-detect": "npm:type-detect@1.0.0"
      }
    },
    "npm:formatio@1.1.1": {
      "map": {
        "samsam": "npm:samsam@1.1.3"
      }
    },
    "npm:deep-eql@0.1.3": {
      "map": {
        "type-detect": "npm:type-detect@0.1.1"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:firebase/angularfire@1.1.4": {
      "map": {
        "firebase": "github:firebase/firebase-bower@2.4.2",
        "angular": "github:angular/bower-angular@1.5.6"
      }
    },
    "github:chieffancypants/angular-loading-bar@0.8.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.22",
        "angular": "github:angular/bower-angular@1.5.6"
      }
    },
    "github:angular/bower-angular-messages@1.5.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.6"
      }
    },
    "github:angular/bower-angular-route@1.5.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.6"
      }
    },
    "github:angular/bower-angular-animate@1.5.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.6"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:angular/bower-angular-aria@1.5.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.6"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "github:angular/bower-material@1.0.6": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.22",
        "angular-aria": "github:angular/bower-angular-aria@1.5.6",
        "angular-animate": "github:angular/bower-angular-animate@1.5.6",
        "angular": "github:angular/bower-angular@1.5.6"
      }
    }
  }
});
