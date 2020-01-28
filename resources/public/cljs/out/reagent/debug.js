// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__34041__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34042__i = 0, G__34042__a = new Array(arguments.length -  0);
while (G__34042__i < G__34042__a.length) {G__34042__a[G__34042__i] = arguments[G__34042__i + 0]; ++G__34042__i;}
  args = new cljs.core.IndexedSeq(G__34042__a,0,null);
} 
return G__34041__delegate.call(this,args);};
G__34041.cljs$lang$maxFixedArity = 0;
G__34041.cljs$lang$applyTo = (function (arglist__34043){
var args = cljs.core.seq(arglist__34043);
return G__34041__delegate(args);
});
G__34041.cljs$core$IFn$_invoke$arity$variadic = G__34041__delegate;
return G__34041;
})()
);

(o.error = (function() { 
var G__34044__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34045__i = 0, G__34045__a = new Array(arguments.length -  0);
while (G__34045__i < G__34045__a.length) {G__34045__a[G__34045__i] = arguments[G__34045__i + 0]; ++G__34045__i;}
  args = new cljs.core.IndexedSeq(G__34045__a,0,null);
} 
return G__34044__delegate.call(this,args);};
G__34044.cljs$lang$maxFixedArity = 0;
G__34044.cljs$lang$applyTo = (function (arglist__34046){
var args = cljs.core.seq(arglist__34046);
return G__34044__delegate(args);
});
G__34044.cljs$core$IFn$_invoke$arity$variadic = G__34044__delegate;
return G__34044;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1580245309375
