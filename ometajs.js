(function(exports) {

include("./bs-ometa-js-compiler.ometajs.js");

var translateCode = exports.translateCode = function(s) {
  var fail = { toString: function() { return "match failed" } },
      translationError = function(m, i) { alert("Translation error - please tell Alex about this!"); throw fail },
      tree             = BSOMetaJSParser.matchAll(s, "topLevel", undefined, function(m, i) { throw fail.delegated({errorPos: i}) })
  //system.stdout(Util.serialize(tree, true));
  return BSOMetaJSTranslator.match(tree, "topLevel", undefined, translationError)
}

var evalCode = exports.evalCode = function(s) { return eval(translateCode(s)) }

})(typeof exports === 'undefined' ? this : exports);
