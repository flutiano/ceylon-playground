(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('my/ceylon/kia/1.0.0/my.ceylon.kia-1.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('my/ceylon/kia/1.0.0/my.ceylon.kia-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.3/ceylon.language-1.3.3');
m$1.$addmod$(m$1,'ceylon.language/1.3.3');
m$1.$addmod$(ex$,'my.ceylon.kia/1.0.0');
ex$.$mod$ans$=[];

//InterfaceDef Clickable at 4-3_interfaceWithADefaultMethodImpl.ceylon (1:0-5:0)
function Clickable(clickable$){
}
Clickable.$crtmm$=function(){return{mod:$CCMM$,d:['my.ceylon.kia','Clickable']};};
ex$.Clickable=Clickable;
function $init$Clickable(){
if(Clickable.$$===undefined){
m$1.initTypeProtoI(Clickable,'my.ceylon.kia::Clickable');
(function(clickable$){
//AttributeDecl label at 4-3_interfaceWithADefaultMethodImpl.ceylon (2:1-2:27)
clickable$.$prop$getLabel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Clickable,pa:5,d:['my.ceylon.kia','Clickable','$at','label']};}};
//MethodDecl click at 4-3_interfaceWithADefaultMethodImpl.ceylon (3:1-3:65)
clickable$.click=function(){var clickable$=this;
return m$1.print((clickable$.label+": I was clicked"));
};
clickable$.click.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Clickable,pa:9,d:['my.ceylon.kia','Clickable','$m','click']};};
clickable$.toString=function(){return this.string.valueOf();};
})(Clickable.$$.prototype);
}
return Clickable;
}
ex$.$init$Clickable=$init$Clickable;$init$Clickable();
//ClassDef Button at 4-3_interfaceWithADefaultMethodImpl.ceylon (7:0-12:0)
function Button(button$){
$init$Button();
if(button$===undefined)button$=new Button.$$;
Clickable(button$);
//AttributeDecl label at 4-3_interfaceWithADefaultMethodImpl.ceylon (8:1-8:38)
button$.$6hdskr$2_="Button";
return button$;
}
Button.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:Clickable}],d:['my.ceylon.kia','Button']};};
ex$.Button=Button;
function $init$Button(){
if(Button.$$===undefined){
m$1.initTypeProto(Button,'my.ceylon.kia::Button',m$1.Basic,$init$Clickable());
(function(button$){
//AttributeDecl label at 4-3_interfaceWithADefaultMethodImpl.ceylon (8:1-8:38)
m$1.atr$(button$,'label',function(){return this.$6hdskr$2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Button,pa:3,d:['my.ceylon.kia','Button','$at','label']};});
button$.click=function(){return m$1.print("Button was clicked");
};button$.toString=function(){return this.string.valueOf();};
})(Button.$$.prototype);
}
return Button;
}
ex$.$init$Button=$init$Button;$init$Button();
//ClassDef Polar at 4-3_interfaceWithADefaultMethodImpl.ceylon (14:0-14:40)
function Polar($6hdskr$3,$6hdskr$4,polar$){
$init$Polar();
if(polar$===undefined)polar$=new Polar.$$;
polar$.$6hdskr$3_=$6hdskr$3;
polar$.$6hdskr$4_=$6hdskr$4;
return polar$;
}
Polar.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'angle',mt:'prm',$t:{t:m$1.Float}},{nm:'radius',mt:'prm',$t:{t:m$1.Float}}],d:['my.ceylon.kia','Polar']};};
ex$.Polar=Polar;
function $init$Polar(){
if(Polar.$$===undefined){
m$1.initTypeProto(Polar,'my.ceylon.kia::Polar',m$1.Basic);
(function(polar$){
m$1.atr$(polar$,'$6hdskr$3',function(){return this.$6hdskr$3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Polar,d:['my.ceylon.kia','Polar','$at','angle$k66b3a']};});
m$1.atr$(polar$,'$6hdskr$4',function(){return this.$6hdskr$4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Polar,d:['my.ceylon.kia','Polar','$at','radius$5uessf']};});
polar$.toString=function(){return this.string.valueOf();};
})(Polar.$$.prototype);
}
return Polar;
}
ex$.$init$Polar=$init$Polar;$init$Polar();
//MethodDef test at 4-3_interfaceWithADefaultMethodImpl.ceylon (16:0-19:0)
function test(){
Button().click();
}
ex$.test=test;
test.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,d:['my.ceylon.kia','test']};};

//ClassDef User at 3-13_localfunctions.ceylon (2:0-2:74)
function User(id,name,address,user$){
$init$User();
if(user$===undefined)user$=new User.$$;
user$.id_=id;
user$.name_=name;
user$.address_=address;
return user$;
}
User.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'id',mt:'prm',$t:{t:m$1.Integer},pa:1},{nm:'name',mt:'prm',$t:{t:m$1.$_String},pa:1},{nm:'address',mt:'prm',$t:{t:m$1.$_String},pa:1}],d:['my.ceylon.kia','User']};};
ex$.User=User;
function $init$User(){
if(User.$$===undefined){
m$1.initTypeProto(User,'my.ceylon.kia::User',m$1.Basic);
(function(user$){
m$1.atr$(user$,'id',function(){return this.id_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:User,pa:1,d:['my.ceylon.kia','User','$at','id']};});
m$1.atr$(user$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:User,pa:1,d:['my.ceylon.kia','User','$at','name']};});
m$1.atr$(user$,'address',function(){return this.address_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:User,pa:1,d:['my.ceylon.kia','User','$at','address']};});
user$.toString=function(){return this.string.valueOf();};
})(User.$$.prototype);
}
return User;
}
ex$.$init$User=$init$User;$init$User();
//MethodDef saveUser at 3-13_localfunctions.ceylon (4:0-17:0)
function saveUser($5){
//MethodDef validate at 3-13_localfunctions.ceylon (6:1-11:1)
function $6($7,$8){
if($7.equals("")){
throw m$1.wrapexc(m$1.Exception(("Can\'t save user "+$5.id.string+" ").plus(("empty "+$8))),'8:3-9:59','my/ceylon/kia/3-13_localfunctions.ceylon');
}
};$6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'fieldValue',mt:'prm',$t:{t:m$1.$_String}},{nm:'fieldName',mt:'prm',$t:{t:m$1.$_String}}],$cont:saveUser,d:['my.ceylon.kia','saveUser','$m','validate$pmgfhw']};};
$6($5.name,"Name");
$6($5.address,"Address");
};saveUser.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'user',mt:'prm',$t:{t:User}}],d:['my.ceylon.kia','saveUser']};};
//MethodDef test_localfunctions at 3-13_localfunctions.ceylon (19:0-25:0)
function test_localfunctions(){
try{
saveUser(User(1,"",""));
}
catch($9){
if(!m$1.is$(($9=$9),{t:m$1.Throwable}))$9=m$1.NatErr($9);
if(m$1.is$($9,{t:m$1.Exception})){
m$1.print($9);
}else{throw $9}
}
}
ex$.test_localfunctions=test_localfunctions;
test_localfunctions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,d:['my.ceylon.kia','test_localfunctions']};};

//MethodDef joinToString at 3-3_joinToString.ceylon (2:0-18:0)
function joinToString($a,$b,$c,$d,$xpkspr$){
if($b===undefined){$b=", ";}
if($c===undefined){$c="";}
if($d===undefined){$d="";}
var $e=m$1.StringBuilder();
$e.append($c);
//'for' statement at 3-3_joinToString.ceylon (8:1-14:1)
var $g;for(var $f=$a.indexed.iterator();($g=$f.next())!==m$1.finished();){
var $h=$g.key,$i=$g.item;
if(($h>(0))){
$e.append($b);
}
$e.append($i.string);
}
$e.append($d);
return $e.string;
}
ex$.joinToString=joinToString;
joinToString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'items',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Item$joinToString',Absent$Iterable:{t:m$1.Null}}}},{nm:'separator',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'prefix',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'postfix',mt:'prm',def:1,$t:{t:m$1.$_String}}],tp:{Item$joinToString:{sts:[{t:m$1.$_Object}]}},pa:1,d:['my.ceylon.kia','joinToString']};};
//MethodDef test_joinToString at 3-3_joinToString.ceylon (20:0-26:0)
function test_joinToString(){
var $j=m$1.tpl$([1,2,3]);
m$1.print(joinToString($j,undefined,undefined,undefined,{Item$joinToString:{t:m$1.Integer}}));
m$1.print(($k=$j,$l="(",$m=")",joinToString($k,undefined,$l,$m,{Item$joinToString:{t:m$1.Integer}})));
var $k,$l,$m;
m$1.print(($n=$j,$o="; ",$p="(",$q=")",joinToString($n,$o,$p,$q,{Item$joinToString:{t:m$1.Integer}})));
var $n,$o,$p,$q;
}
ex$.test_joinToString=test_joinToString;
test_joinToString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,d:['my.ceylon.kia','test_joinToString']};};

//MethodDef run at run.ceylon (1:0-4:0)
function run(){
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,an:function(){return[m$1.doc$($CCMM$,'my.ceylon.kia:run')];},d:['my.ceylon.kia','run']};};
ex$.$pkg$ans$my$ceylon$kia=function(){return[m$1.shared()];};
ex$.$pkgunsh$my$ceylon$kia={'User':User,'saveUser':saveUser,'Clickable':Clickable,'Button':Button,'Polar':Polar};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
