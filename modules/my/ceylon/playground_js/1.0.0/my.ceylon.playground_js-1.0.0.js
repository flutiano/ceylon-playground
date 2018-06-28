(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('my/ceylon/playground_js/1.0.0/my.ceylon.playground_js-1.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('my/ceylon/playground_js/1.0.0/my.ceylon.playground_js-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.3/ceylon.language-1.3.3');
m$1.$addmod$(m$1,'ceylon.language/1.3.3');
m$1.$addmod$(ex$,'my.ceylon.playground_js/1.0.0');
ex$.$mod$ans$=function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.html/1.3.3':[],
'ceylon.interop.browser/1.3.3':[]
};};

//MethodDef run at run.ceylon (1:0-4:0)
function run(){
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,an:function(){return[m$1.doc$($CCMM$,'my.ceylon.playground_js:run')];},d:['my.ceylon.playground_js','run']};};

//InterfaceDef IXMLHttpRequest at js_interop.ceylon (2:0-9:0)
function IXMLHttpRequest(iXMLHttpRequest$){
}
IXMLHttpRequest.dynmem$=['open','onreadystatechange','send','readyState','getAllResponseHeaders'];IXMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,d:['my.ceylon.playground_js','IXMLHttpRequest']};};
ex$.IXMLHttpRequest=IXMLHttpRequest;
function $init$IXMLHttpRequest(){
if(IXMLHttpRequest.$$===undefined){
m$1.initTypeProtoI(IXMLHttpRequest,'my.ceylon.playground_js::IXMLHttpRequest');
(function(iXMLHttpRequest$){
iXMLHttpRequest$.open={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'method',mt:'prm',$t:{t:m$1.$_String}},{nm:'url',mt:'prm',$t:{t:m$1.$_String}},{nm:'async',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:IXMLHttpRequest,pa:5,d:['my.ceylon.playground_js','IXMLHttpRequest','$m','open']};}};
//AttributeDecl onreadystatechange at js_interop.ceylon (4:1-4:54)
iXMLHttpRequest$.$prop$getOnreadystatechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}}]},$cont:IXMLHttpRequest,pa:1029,d:['my.ceylon.playground_js','IXMLHttpRequest','$at','onreadystatechange']};}};
iXMLHttpRequest$.send={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IXMLHttpRequest,pa:5,d:['my.ceylon.playground_js','IXMLHttpRequest','$m','send']};}};
//AttributeDecl readyState at js_interop.ceylon (6:1-6:33)
iXMLHttpRequest$.$prop$getReadyState={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IXMLHttpRequest,pa:5,d:['my.ceylon.playground_js','IXMLHttpRequest','$at','readyState']};}};
iXMLHttpRequest$.getAllResponseHeaders={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[],$cont:IXMLHttpRequest,pa:5,d:['my.ceylon.playground_js','IXMLHttpRequest','$m','getAllResponseHeaders']};}};iXMLHttpRequest$.toString=function(){return this.string.valueOf();};
})(IXMLHttpRequest.$$.prototype);
}
return IXMLHttpRequest;
}
ex$.$init$IXMLHttpRequest=$init$IXMLHttpRequest;$init$IXMLHttpRequest();
//MethodDef newXMLHttpRequest at js_interop.ceylon (11:0-13:0)
function newXMLHttpRequest(){
/*BEG dynblock*/
return m$1.dre$$(($r=(typeof XMLHttpRequest==='undefined'?m$1.throwexc(m$1.Exception("Undefined type XMLHttpRequest"),'12:18-12:31','js_interop.ceylon'):XMLHttpRequest),$r.$$===undefined?new $r():$r()),{t:$init$IXMLHttpRequest()},'js_interop.ceylon 12:18-12:33');
/*END dynblock*/
};newXMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$IXMLHttpRequest()},ps:[],d:['my.ceylon.playground_js','newXMLHttpRequest']};};
//MethodDef test_js_interop at js_interop.ceylon (15:0-25:0)
function test_js_interop(){
var $s=newXMLHttpRequest();
$s.open("HEAD","https://try.ceylon-lang.org/",true);
($t=$s,$t.onreadystatechange=m$1.jsc$2((function(){
if(($s.readyState==(4))){
m$1.print($s.getAllResponseHeaders());
}
})/*TODO: callable targs 7*/),$t.onreadystatechange);
var $t;
$s.send();
}
ex$.test_js_interop=test_js_interop;
test_js_interop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,d:['my.ceylon.playground_js','test_js_interop']};};
ex$.$pkg$ans$my$ceylon$playground_js=function(){return[m$1.shared()];};
ex$.$pkgunsh$my$ceylon$playground_js={'IXMLHttpRequest':IXMLHttpRequest,'newXMLHttpRequest':newXMLHttpRequest};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
