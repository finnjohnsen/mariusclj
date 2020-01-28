// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__34356 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__34357 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__34357);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__34358 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__34359 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__34359);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__34358);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__34356);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__34361 = arguments.length;
switch (G__34361) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__34363_34367 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__34364_34368 = null;
var count__34365_34369 = (0);
var i__34366_34370 = (0);
while(true){
if((i__34366_34370 < count__34365_34369)){
var v_34371 = cljs.core._nth.call(null,chunk__34364_34368,i__34366_34370);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_34371);


var G__34372 = seq__34363_34367;
var G__34373 = chunk__34364_34368;
var G__34374 = count__34365_34369;
var G__34375 = (i__34366_34370 + (1));
seq__34363_34367 = G__34372;
chunk__34364_34368 = G__34373;
count__34365_34369 = G__34374;
i__34366_34370 = G__34375;
continue;
} else {
var temp__5735__auto___34376 = cljs.core.seq.call(null,seq__34363_34367);
if(temp__5735__auto___34376){
var seq__34363_34377__$1 = temp__5735__auto___34376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34363_34377__$1)){
var c__4609__auto___34378 = cljs.core.chunk_first.call(null,seq__34363_34377__$1);
var G__34379 = cljs.core.chunk_rest.call(null,seq__34363_34377__$1);
var G__34380 = c__4609__auto___34378;
var G__34381 = cljs.core.count.call(null,c__4609__auto___34378);
var G__34382 = (0);
seq__34363_34367 = G__34379;
chunk__34364_34368 = G__34380;
count__34365_34369 = G__34381;
i__34366_34370 = G__34382;
continue;
} else {
var v_34383 = cljs.core.first.call(null,seq__34363_34377__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_34383);


var G__34384 = cljs.core.next.call(null,seq__34363_34377__$1);
var G__34385 = null;
var G__34386 = (0);
var G__34387 = (0);
seq__34363_34367 = G__34384;
chunk__34364_34368 = G__34385;
count__34365_34369 = G__34386;
i__34366_34370 = G__34387;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1580245309936
