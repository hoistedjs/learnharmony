var System = (function() {
  var importer = bitimports.config({
    "paths": {
      "babel": "node_modules/babel-bits/dist/index.min.js"
    }
  });

  importer.ignore({
    match: ["babel"]
  });

  importer.plugin("js", {
    transform: "babel"
  });

  return importer;
})();

var require = System.require;
