(function(exports){include("./bs-ometa-optimizer.ometajs.js");exports["OMeta"]=OMeta;exports["Parser"]=Parser;exports["BSJSParser"]=BSJSParser;exports["BSJSTranslator"]=BSJSTranslator;exports["BSOMetaParser"]=BSOMetaParser;exports["BSOMetaTranslator"]=BSOMetaTranslator;exports["BSOMetaOptimizer"]=BSOMetaOptimizer;var BSOMetaJSParser=exports.BSOMetaJSParser=BSJSParser.delegated({"srcElem":function(){var $elf=this,r;return $elf._or((function(){return (function(){$elf._apply("spaces");r=$elf._applyWithArgs("foreign",BSOMetaParser,"grammar");$elf._apply("sc");return r})()}),(function(){return BSJSParser._superApplyWithArgs($elf,"srcElem")}))}});var BSOMetaJSTranslator=exports.BSOMetaJSTranslator=BSJSTranslator.delegated({"Grammar":function(){var $elf=this;return $elf._applyWithArgs("foreign",BSOMetaTranslator,"Grammar")}})})(typeof exports === 'undefined' ? this : exports);
