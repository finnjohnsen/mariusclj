// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27051_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27051_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27052 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27053 = null;
var count__27054 = (0);
var i__27055 = (0);
while(true){
if((i__27055 < count__27054)){
var n = cljs.core._nth.call(null,chunk__27053,i__27055);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27056 = seq__27052;
var G__27057 = chunk__27053;
var G__27058 = count__27054;
var G__27059 = (i__27055 + (1));
seq__27052 = G__27056;
chunk__27053 = G__27057;
count__27054 = G__27058;
i__27055 = G__27059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27052);
if(temp__5735__auto__){
var seq__27052__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27052__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__27052__$1);
var G__27060 = cljs.core.chunk_rest.call(null,seq__27052__$1);
var G__27061 = c__4609__auto__;
var G__27062 = cljs.core.count.call(null,c__4609__auto__);
var G__27063 = (0);
seq__27052 = G__27060;
chunk__27053 = G__27061;
count__27054 = G__27062;
i__27055 = G__27063;
continue;
} else {
var n = cljs.core.first.call(null,seq__27052__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27064 = cljs.core.next.call(null,seq__27052__$1);
var G__27065 = null;
var G__27066 = (0);
var G__27067 = (0);
seq__27052 = G__27064;
chunk__27053 = G__27065;
count__27054 = G__27066;
i__27055 = G__27067;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27068){
var vec__27069 = p__27068;
var _ = cljs.core.nth.call(null,vec__27069,(0),null);
var v = cljs.core.nth.call(null,vec__27069,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__27072){
var vec__27073 = p__27072;
var k = cljs.core.nth.call(null,vec__27073,(0),null);
var v = cljs.core.nth.call(null,vec__27073,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27085_27093 = cljs.core.seq.call(null,deps);
var chunk__27086_27094 = null;
var count__27087_27095 = (0);
var i__27088_27096 = (0);
while(true){
if((i__27088_27096 < count__27087_27095)){
var dep_27097 = cljs.core._nth.call(null,chunk__27086_27094,i__27088_27096);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_27097;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27097));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27097,(depth + (1)),state);
} else {
}


var G__27098 = seq__27085_27093;
var G__27099 = chunk__27086_27094;
var G__27100 = count__27087_27095;
var G__27101 = (i__27088_27096 + (1));
seq__27085_27093 = G__27098;
chunk__27086_27094 = G__27099;
count__27087_27095 = G__27100;
i__27088_27096 = G__27101;
continue;
} else {
var temp__5735__auto___27102 = cljs.core.seq.call(null,seq__27085_27093);
if(temp__5735__auto___27102){
var seq__27085_27103__$1 = temp__5735__auto___27102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27085_27103__$1)){
var c__4609__auto___27104 = cljs.core.chunk_first.call(null,seq__27085_27103__$1);
var G__27105 = cljs.core.chunk_rest.call(null,seq__27085_27103__$1);
var G__27106 = c__4609__auto___27104;
var G__27107 = cljs.core.count.call(null,c__4609__auto___27104);
var G__27108 = (0);
seq__27085_27093 = G__27105;
chunk__27086_27094 = G__27106;
count__27087_27095 = G__27107;
i__27088_27096 = G__27108;
continue;
} else {
var dep_27109 = cljs.core.first.call(null,seq__27085_27103__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_27109;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27109));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27109,(depth + (1)),state);
} else {
}


var G__27110 = cljs.core.next.call(null,seq__27085_27103__$1);
var G__27111 = null;
var G__27112 = (0);
var G__27113 = (0);
seq__27085_27093 = G__27110;
chunk__27086_27094 = G__27111;
count__27087_27095 = G__27112;
i__27088_27096 = G__27113;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27089){
var vec__27090 = p__27089;
var seq__27091 = cljs.core.seq.call(null,vec__27090);
var first__27092 = cljs.core.first.call(null,seq__27091);
var seq__27091__$1 = cljs.core.next.call(null,seq__27091);
var x = first__27092;
var xs = seq__27091__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__27076_SHARP_){
return clojure.set.difference.call(null,p1__27076_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27114 = cljs.core.seq.call(null,provides);
var chunk__27115 = null;
var count__27116 = (0);
var i__27117 = (0);
while(true){
if((i__27117 < count__27116)){
var prov = cljs.core._nth.call(null,chunk__27115,i__27117);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27126_27134 = cljs.core.seq.call(null,requires);
var chunk__27127_27135 = null;
var count__27128_27136 = (0);
var i__27129_27137 = (0);
while(true){
if((i__27129_27137 < count__27128_27136)){
var req_27138 = cljs.core._nth.call(null,chunk__27127_27135,i__27129_27137);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27138,prov);


var G__27139 = seq__27126_27134;
var G__27140 = chunk__27127_27135;
var G__27141 = count__27128_27136;
var G__27142 = (i__27129_27137 + (1));
seq__27126_27134 = G__27139;
chunk__27127_27135 = G__27140;
count__27128_27136 = G__27141;
i__27129_27137 = G__27142;
continue;
} else {
var temp__5735__auto___27143 = cljs.core.seq.call(null,seq__27126_27134);
if(temp__5735__auto___27143){
var seq__27126_27144__$1 = temp__5735__auto___27143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27126_27144__$1)){
var c__4609__auto___27145 = cljs.core.chunk_first.call(null,seq__27126_27144__$1);
var G__27146 = cljs.core.chunk_rest.call(null,seq__27126_27144__$1);
var G__27147 = c__4609__auto___27145;
var G__27148 = cljs.core.count.call(null,c__4609__auto___27145);
var G__27149 = (0);
seq__27126_27134 = G__27146;
chunk__27127_27135 = G__27147;
count__27128_27136 = G__27148;
i__27129_27137 = G__27149;
continue;
} else {
var req_27150 = cljs.core.first.call(null,seq__27126_27144__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27150,prov);


var G__27151 = cljs.core.next.call(null,seq__27126_27144__$1);
var G__27152 = null;
var G__27153 = (0);
var G__27154 = (0);
seq__27126_27134 = G__27151;
chunk__27127_27135 = G__27152;
count__27128_27136 = G__27153;
i__27129_27137 = G__27154;
continue;
}
} else {
}
}
break;
}


var G__27155 = seq__27114;
var G__27156 = chunk__27115;
var G__27157 = count__27116;
var G__27158 = (i__27117 + (1));
seq__27114 = G__27155;
chunk__27115 = G__27156;
count__27116 = G__27157;
i__27117 = G__27158;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27114);
if(temp__5735__auto__){
var seq__27114__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27114__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__27114__$1);
var G__27159 = cljs.core.chunk_rest.call(null,seq__27114__$1);
var G__27160 = c__4609__auto__;
var G__27161 = cljs.core.count.call(null,c__4609__auto__);
var G__27162 = (0);
seq__27114 = G__27159;
chunk__27115 = G__27160;
count__27116 = G__27161;
i__27117 = G__27162;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27114__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27130_27163 = cljs.core.seq.call(null,requires);
var chunk__27131_27164 = null;
var count__27132_27165 = (0);
var i__27133_27166 = (0);
while(true){
if((i__27133_27166 < count__27132_27165)){
var req_27167 = cljs.core._nth.call(null,chunk__27131_27164,i__27133_27166);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27167,prov);


var G__27168 = seq__27130_27163;
var G__27169 = chunk__27131_27164;
var G__27170 = count__27132_27165;
var G__27171 = (i__27133_27166 + (1));
seq__27130_27163 = G__27168;
chunk__27131_27164 = G__27169;
count__27132_27165 = G__27170;
i__27133_27166 = G__27171;
continue;
} else {
var temp__5735__auto___27172__$1 = cljs.core.seq.call(null,seq__27130_27163);
if(temp__5735__auto___27172__$1){
var seq__27130_27173__$1 = temp__5735__auto___27172__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27130_27173__$1)){
var c__4609__auto___27174 = cljs.core.chunk_first.call(null,seq__27130_27173__$1);
var G__27175 = cljs.core.chunk_rest.call(null,seq__27130_27173__$1);
var G__27176 = c__4609__auto___27174;
var G__27177 = cljs.core.count.call(null,c__4609__auto___27174);
var G__27178 = (0);
seq__27130_27163 = G__27175;
chunk__27131_27164 = G__27176;
count__27132_27165 = G__27177;
i__27133_27166 = G__27178;
continue;
} else {
var req_27179 = cljs.core.first.call(null,seq__27130_27173__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27179,prov);


var G__27180 = cljs.core.next.call(null,seq__27130_27173__$1);
var G__27181 = null;
var G__27182 = (0);
var G__27183 = (0);
seq__27130_27163 = G__27180;
chunk__27131_27164 = G__27181;
count__27132_27165 = G__27182;
i__27133_27166 = G__27183;
continue;
}
} else {
}
}
break;
}


var G__27184 = cljs.core.next.call(null,seq__27114__$1);
var G__27185 = null;
var G__27186 = (0);
var G__27187 = (0);
seq__27114 = G__27184;
chunk__27115 = G__27185;
count__27116 = G__27186;
i__27117 = G__27187;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27188_27192 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27189_27193 = null;
var count__27190_27194 = (0);
var i__27191_27195 = (0);
while(true){
if((i__27191_27195 < count__27190_27194)){
var ns_27196 = cljs.core._nth.call(null,chunk__27189_27193,i__27191_27195);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27196);


var G__27197 = seq__27188_27192;
var G__27198 = chunk__27189_27193;
var G__27199 = count__27190_27194;
var G__27200 = (i__27191_27195 + (1));
seq__27188_27192 = G__27197;
chunk__27189_27193 = G__27198;
count__27190_27194 = G__27199;
i__27191_27195 = G__27200;
continue;
} else {
var temp__5735__auto___27201 = cljs.core.seq.call(null,seq__27188_27192);
if(temp__5735__auto___27201){
var seq__27188_27202__$1 = temp__5735__auto___27201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27188_27202__$1)){
var c__4609__auto___27203 = cljs.core.chunk_first.call(null,seq__27188_27202__$1);
var G__27204 = cljs.core.chunk_rest.call(null,seq__27188_27202__$1);
var G__27205 = c__4609__auto___27203;
var G__27206 = cljs.core.count.call(null,c__4609__auto___27203);
var G__27207 = (0);
seq__27188_27192 = G__27204;
chunk__27189_27193 = G__27205;
count__27190_27194 = G__27206;
i__27191_27195 = G__27207;
continue;
} else {
var ns_27208 = cljs.core.first.call(null,seq__27188_27202__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27208);


var G__27209 = cljs.core.next.call(null,seq__27188_27202__$1);
var G__27210 = null;
var G__27211 = (0);
var G__27212 = (0);
seq__27188_27192 = G__27209;
chunk__27189_27193 = G__27210;
count__27190_27194 = G__27211;
i__27191_27195 = G__27212;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__27213__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27214__i = 0, G__27214__a = new Array(arguments.length -  0);
while (G__27214__i < G__27214__a.length) {G__27214__a[G__27214__i] = arguments[G__27214__i + 0]; ++G__27214__i;}
  args = new cljs.core.IndexedSeq(G__27214__a,0,null);
} 
return G__27213__delegate.call(this,args);};
G__27213.cljs$lang$maxFixedArity = 0;
G__27213.cljs$lang$applyTo = (function (arglist__27215){
var args = cljs.core.seq(arglist__27215);
return G__27213__delegate(args);
});
G__27213.cljs$core$IFn$_invoke$arity$variadic = G__27213__delegate;
return G__27213;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27216_SHARP_,p2__27217_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27216_SHARP_)),p2__27217_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27218_SHARP_,p2__27219_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27218_SHARP_),p2__27219_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27220 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27220.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__27220.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__27220;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27221){if((e27221 instanceof Error)){
var e = e27221;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27221;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27222){if((e27222 instanceof Error)){
var e = e27222;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27222;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27223 = cljs.core._EQ_;
var expr__27224 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27223.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27224))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27223.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27224))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27223.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27224))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27226,callback){
var map__27227 = p__27226;
var map__27227__$1 = (((((!((map__27227 == null))))?(((((map__27227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27227):map__27227);
var file_msg = map__27227__$1;
var request_url = cljs.core.get.call(null,map__27227__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_27265){
var state_val_27266 = (state_27265[(1)]);
if((state_val_27266 === (7))){
var inst_27261 = (state_27265[(2)]);
var state_27265__$1 = state_27265;
var statearr_27267_27293 = state_27265__$1;
(statearr_27267_27293[(2)] = inst_27261);

(statearr_27267_27293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (1))){
var state_27265__$1 = state_27265;
var statearr_27268_27294 = state_27265__$1;
(statearr_27268_27294[(2)] = null);

(statearr_27268_27294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (4))){
var inst_27231 = (state_27265[(7)]);
var inst_27231__$1 = (state_27265[(2)]);
var state_27265__$1 = (function (){var statearr_27269 = state_27265;
(statearr_27269[(7)] = inst_27231__$1);

return statearr_27269;
})();
if(cljs.core.truth_(inst_27231__$1)){
var statearr_27270_27295 = state_27265__$1;
(statearr_27270_27295[(1)] = (5));

} else {
var statearr_27271_27296 = state_27265__$1;
(statearr_27271_27296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (15))){
var inst_27244 = (state_27265[(8)]);
var inst_27246 = (state_27265[(9)]);
var inst_27248 = inst_27246.call(null,inst_27244);
var state_27265__$1 = state_27265;
var statearr_27272_27297 = state_27265__$1;
(statearr_27272_27297[(2)] = inst_27248);

(statearr_27272_27297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (13))){
var inst_27255 = (state_27265[(2)]);
var state_27265__$1 = state_27265;
var statearr_27273_27298 = state_27265__$1;
(statearr_27273_27298[(2)] = inst_27255);

(statearr_27273_27298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (6))){
var state_27265__$1 = state_27265;
var statearr_27274_27299 = state_27265__$1;
(statearr_27274_27299[(2)] = null);

(statearr_27274_27299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (17))){
var inst_27252 = (state_27265[(2)]);
var state_27265__$1 = state_27265;
var statearr_27275_27300 = state_27265__$1;
(statearr_27275_27300[(2)] = inst_27252);

(statearr_27275_27300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (3))){
var inst_27263 = (state_27265[(2)]);
var state_27265__$1 = state_27265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27265__$1,inst_27263);
} else {
if((state_val_27266 === (12))){
var state_27265__$1 = state_27265;
var statearr_27276_27301 = state_27265__$1;
(statearr_27276_27301[(2)] = null);

(statearr_27276_27301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (2))){
var state_27265__$1 = state_27265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27265__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27266 === (11))){
var inst_27236 = (state_27265[(10)]);
var inst_27242 = figwheel.client.file_reloading.blocking_load.call(null,inst_27236);
var state_27265__$1 = state_27265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27265__$1,(14),inst_27242);
} else {
if((state_val_27266 === (9))){
var inst_27236 = (state_27265[(10)]);
var state_27265__$1 = state_27265;
if(cljs.core.truth_(inst_27236)){
var statearr_27277_27302 = state_27265__$1;
(statearr_27277_27302[(1)] = (11));

} else {
var statearr_27278_27303 = state_27265__$1;
(statearr_27278_27303[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (5))){
var inst_27237 = (state_27265[(11)]);
var inst_27231 = (state_27265[(7)]);
var inst_27236 = cljs.core.nth.call(null,inst_27231,(0),null);
var inst_27237__$1 = cljs.core.nth.call(null,inst_27231,(1),null);
var state_27265__$1 = (function (){var statearr_27279 = state_27265;
(statearr_27279[(11)] = inst_27237__$1);

(statearr_27279[(10)] = inst_27236);

return statearr_27279;
})();
if(cljs.core.truth_(inst_27237__$1)){
var statearr_27280_27304 = state_27265__$1;
(statearr_27280_27304[(1)] = (8));

} else {
var statearr_27281_27305 = state_27265__$1;
(statearr_27281_27305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (14))){
var inst_27236 = (state_27265[(10)]);
var inst_27246 = (state_27265[(9)]);
var inst_27244 = (state_27265[(2)]);
var inst_27245 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27246__$1 = cljs.core.get.call(null,inst_27245,inst_27236);
var state_27265__$1 = (function (){var statearr_27282 = state_27265;
(statearr_27282[(8)] = inst_27244);

(statearr_27282[(9)] = inst_27246__$1);

return statearr_27282;
})();
if(cljs.core.truth_(inst_27246__$1)){
var statearr_27283_27306 = state_27265__$1;
(statearr_27283_27306[(1)] = (15));

} else {
var statearr_27284_27307 = state_27265__$1;
(statearr_27284_27307[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (16))){
var inst_27244 = (state_27265[(8)]);
var inst_27250 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27244);
var state_27265__$1 = state_27265;
var statearr_27285_27308 = state_27265__$1;
(statearr_27285_27308[(2)] = inst_27250);

(statearr_27285_27308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (10))){
var inst_27257 = (state_27265[(2)]);
var state_27265__$1 = (function (){var statearr_27286 = state_27265;
(statearr_27286[(12)] = inst_27257);

return statearr_27286;
})();
var statearr_27287_27309 = state_27265__$1;
(statearr_27287_27309[(2)] = null);

(statearr_27287_27309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (8))){
var inst_27237 = (state_27265[(11)]);
var inst_27239 = eval(inst_27237);
var state_27265__$1 = state_27265;
var statearr_27288_27310 = state_27265__$1;
(statearr_27288_27310[(2)] = inst_27239);

(statearr_27288_27310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__23514__auto__ = null;
var figwheel$client$file_reloading$state_machine__23514__auto____0 = (function (){
var statearr_27289 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27289[(0)] = figwheel$client$file_reloading$state_machine__23514__auto__);

(statearr_27289[(1)] = (1));

return statearr_27289;
});
var figwheel$client$file_reloading$state_machine__23514__auto____1 = (function (state_27265){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_27265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e27290){if((e27290 instanceof Object)){
var ex__23517__auto__ = e27290;
var statearr_27291_27311 = state_27265;
(statearr_27291_27311[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27312 = state_27265;
state_27265 = G__27312;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23514__auto__ = function(state_27265){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23514__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23514__auto____1.call(this,state_27265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23514__auto____0;
figwheel$client$file_reloading$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23514__auto____1;
return figwheel$client$file_reloading$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_27292 = f__23609__auto__.call(null);
(statearr_27292[(6)] = c__23608__auto__);

return statearr_27292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27314 = arguments.length;
switch (G__27314) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27316,callback){
var map__27317 = p__27316;
var map__27317__$1 = (((((!((map__27317 == null))))?(((((map__27317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27317):map__27317);
var file_msg = map__27317__$1;
var namespace = cljs.core.get.call(null,map__27317__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27319){
var map__27320 = p__27319;
var map__27320__$1 = (((((!((map__27320 == null))))?(((((map__27320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27320):map__27320);
var file_msg = map__27320__$1;
var namespace = cljs.core.get.call(null,map__27320__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27322){
var map__27323 = p__27322;
var map__27323__$1 = (((((!((map__27323 == null))))?(((((map__27323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27323):map__27323);
var file_msg = map__27323__$1;
var namespace = cljs.core.get.call(null,map__27323__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27325,callback){
var map__27326 = p__27325;
var map__27326__$1 = (((((!((map__27326 == null))))?(((((map__27326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27326):map__27326);
var file_msg = map__27326__$1;
var request_url = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23608__auto___27376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_27361){
var state_val_27362 = (state_27361[(1)]);
if((state_val_27362 === (1))){
var inst_27335 = cljs.core.seq.call(null,files);
var inst_27336 = cljs.core.first.call(null,inst_27335);
var inst_27337 = cljs.core.next.call(null,inst_27335);
var inst_27338 = files;
var state_27361__$1 = (function (){var statearr_27363 = state_27361;
(statearr_27363[(7)] = inst_27336);

(statearr_27363[(8)] = inst_27338);

(statearr_27363[(9)] = inst_27337);

return statearr_27363;
})();
var statearr_27364_27377 = state_27361__$1;
(statearr_27364_27377[(2)] = null);

(statearr_27364_27377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (2))){
var inst_27338 = (state_27361[(8)]);
var inst_27344 = (state_27361[(10)]);
var inst_27343 = cljs.core.seq.call(null,inst_27338);
var inst_27344__$1 = cljs.core.first.call(null,inst_27343);
var inst_27345 = cljs.core.next.call(null,inst_27343);
var inst_27346 = (inst_27344__$1 == null);
var inst_27347 = cljs.core.not.call(null,inst_27346);
var state_27361__$1 = (function (){var statearr_27365 = state_27361;
(statearr_27365[(11)] = inst_27345);

(statearr_27365[(10)] = inst_27344__$1);

return statearr_27365;
})();
if(inst_27347){
var statearr_27366_27378 = state_27361__$1;
(statearr_27366_27378[(1)] = (4));

} else {
var statearr_27367_27379 = state_27361__$1;
(statearr_27367_27379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (3))){
var inst_27359 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27361__$1,inst_27359);
} else {
if((state_val_27362 === (4))){
var inst_27344 = (state_27361[(10)]);
var inst_27349 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27344);
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27361__$1,(7),inst_27349);
} else {
if((state_val_27362 === (5))){
var inst_27355 = cljs.core.async.close_BANG_.call(null,out);
var state_27361__$1 = state_27361;
var statearr_27368_27380 = state_27361__$1;
(statearr_27368_27380[(2)] = inst_27355);

(statearr_27368_27380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (6))){
var inst_27357 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27369_27381 = state_27361__$1;
(statearr_27369_27381[(2)] = inst_27357);

(statearr_27369_27381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (7))){
var inst_27345 = (state_27361[(11)]);
var inst_27351 = (state_27361[(2)]);
var inst_27352 = cljs.core.async.put_BANG_.call(null,out,inst_27351);
var inst_27338 = inst_27345;
var state_27361__$1 = (function (){var statearr_27370 = state_27361;
(statearr_27370[(8)] = inst_27338);

(statearr_27370[(12)] = inst_27352);

return statearr_27370;
})();
var statearr_27371_27382 = state_27361__$1;
(statearr_27371_27382[(2)] = null);

(statearr_27371_27382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto____0 = (function (){
var statearr_27372 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27372[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto__);

(statearr_27372[(1)] = (1));

return statearr_27372;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto____1 = (function (state_27361){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_27361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e27373){if((e27373 instanceof Object)){
var ex__23517__auto__ = e27373;
var statearr_27374_27383 = state_27361;
(statearr_27374_27383[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27384 = state_27361;
state_27361 = G__27384;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto__ = function(state_27361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto____1.call(this,state_27361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_27375 = f__23609__auto__.call(null);
(statearr_27375[(6)] = c__23608__auto___27376);

return statearr_27375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27385,opts){
var map__27386 = p__27385;
var map__27386__$1 = (((((!((map__27386 == null))))?(((((map__27386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27386):map__27386);
var eval_body = cljs.core.get.call(null,map__27386__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27388){var e = e27388;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__27389_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27389_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27390){
var vec__27391 = p__27390;
var k = cljs.core.nth.call(null,vec__27391,(0),null);
var v = cljs.core.nth.call(null,vec__27391,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27394){
var vec__27395 = p__27394;
var k = cljs.core.nth.call(null,vec__27395,(0),null);
var v = cljs.core.nth.call(null,vec__27395,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27401,p__27402){
var map__27403 = p__27401;
var map__27403__$1 = (((((!((map__27403 == null))))?(((((map__27403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27403):map__27403);
var opts = map__27403__$1;
var before_jsload = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27404 = p__27402;
var map__27404__$1 = (((((!((map__27404 == null))))?(((((map__27404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27404):map__27404);
var msg = map__27404__$1;
var files = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_27558){
var state_val_27559 = (state_27558[(1)]);
if((state_val_27559 === (7))){
var inst_27420 = (state_27558[(7)]);
var inst_27418 = (state_27558[(8)]);
var inst_27421 = (state_27558[(9)]);
var inst_27419 = (state_27558[(10)]);
var inst_27426 = cljs.core._nth.call(null,inst_27419,inst_27421);
var inst_27427 = figwheel.client.file_reloading.eval_body.call(null,inst_27426,opts);
var inst_27428 = (inst_27421 + (1));
var tmp27560 = inst_27420;
var tmp27561 = inst_27418;
var tmp27562 = inst_27419;
var inst_27418__$1 = tmp27561;
var inst_27419__$1 = tmp27562;
var inst_27420__$1 = tmp27560;
var inst_27421__$1 = inst_27428;
var state_27558__$1 = (function (){var statearr_27563 = state_27558;
(statearr_27563[(11)] = inst_27427);

(statearr_27563[(7)] = inst_27420__$1);

(statearr_27563[(8)] = inst_27418__$1);

(statearr_27563[(9)] = inst_27421__$1);

(statearr_27563[(10)] = inst_27419__$1);

return statearr_27563;
})();
var statearr_27564_27647 = state_27558__$1;
(statearr_27564_27647[(2)] = null);

(statearr_27564_27647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (20))){
var inst_27461 = (state_27558[(12)]);
var inst_27469 = figwheel.client.file_reloading.sort_files.call(null,inst_27461);
var state_27558__$1 = state_27558;
var statearr_27565_27648 = state_27558__$1;
(statearr_27565_27648[(2)] = inst_27469);

(statearr_27565_27648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (27))){
var state_27558__$1 = state_27558;
var statearr_27566_27649 = state_27558__$1;
(statearr_27566_27649[(2)] = null);

(statearr_27566_27649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (1))){
var inst_27410 = (state_27558[(13)]);
var inst_27407 = before_jsload.call(null,files);
var inst_27408 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27409 = (function (){return (function (p1__27398_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27398_SHARP_);
});
})();
var inst_27410__$1 = cljs.core.filter.call(null,inst_27409,files);
var inst_27411 = cljs.core.not_empty.call(null,inst_27410__$1);
var state_27558__$1 = (function (){var statearr_27567 = state_27558;
(statearr_27567[(13)] = inst_27410__$1);

(statearr_27567[(14)] = inst_27408);

(statearr_27567[(15)] = inst_27407);

return statearr_27567;
})();
if(cljs.core.truth_(inst_27411)){
var statearr_27568_27650 = state_27558__$1;
(statearr_27568_27650[(1)] = (2));

} else {
var statearr_27569_27651 = state_27558__$1;
(statearr_27569_27651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (24))){
var state_27558__$1 = state_27558;
var statearr_27570_27652 = state_27558__$1;
(statearr_27570_27652[(2)] = null);

(statearr_27570_27652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (39))){
var inst_27511 = (state_27558[(16)]);
var state_27558__$1 = state_27558;
var statearr_27571_27653 = state_27558__$1;
(statearr_27571_27653[(2)] = inst_27511);

(statearr_27571_27653[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (46))){
var inst_27553 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
var statearr_27572_27654 = state_27558__$1;
(statearr_27572_27654[(2)] = inst_27553);

(statearr_27572_27654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (4))){
var inst_27455 = (state_27558[(2)]);
var inst_27456 = cljs.core.List.EMPTY;
var inst_27457 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27456);
var inst_27458 = (function (){return (function (p1__27399_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27399_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27399_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27399_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_27459 = cljs.core.filter.call(null,inst_27458,files);
var inst_27460 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27461 = cljs.core.concat.call(null,inst_27459,inst_27460);
var state_27558__$1 = (function (){var statearr_27573 = state_27558;
(statearr_27573[(17)] = inst_27457);

(statearr_27573[(18)] = inst_27455);

(statearr_27573[(12)] = inst_27461);

return statearr_27573;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27574_27655 = state_27558__$1;
(statearr_27574_27655[(1)] = (16));

} else {
var statearr_27575_27656 = state_27558__$1;
(statearr_27575_27656[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (15))){
var inst_27445 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
var statearr_27576_27657 = state_27558__$1;
(statearr_27576_27657[(2)] = inst_27445);

(statearr_27576_27657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (21))){
var inst_27471 = (state_27558[(19)]);
var inst_27471__$1 = (state_27558[(2)]);
var inst_27472 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27471__$1);
var state_27558__$1 = (function (){var statearr_27577 = state_27558;
(statearr_27577[(19)] = inst_27471__$1);

return statearr_27577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27558__$1,(22),inst_27472);
} else {
if((state_val_27559 === (31))){
var inst_27556 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27558__$1,inst_27556);
} else {
if((state_val_27559 === (32))){
var inst_27511 = (state_27558[(16)]);
var inst_27516 = inst_27511.cljs$lang$protocol_mask$partition0$;
var inst_27517 = (inst_27516 & (64));
var inst_27518 = inst_27511.cljs$core$ISeq$;
var inst_27519 = (cljs.core.PROTOCOL_SENTINEL === inst_27518);
var inst_27520 = ((inst_27517) || (inst_27519));
var state_27558__$1 = state_27558;
if(cljs.core.truth_(inst_27520)){
var statearr_27578_27658 = state_27558__$1;
(statearr_27578_27658[(1)] = (35));

} else {
var statearr_27579_27659 = state_27558__$1;
(statearr_27579_27659[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (40))){
var inst_27533 = (state_27558[(20)]);
var inst_27532 = (state_27558[(2)]);
var inst_27533__$1 = cljs.core.get.call(null,inst_27532,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27534 = cljs.core.get.call(null,inst_27532,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27535 = cljs.core.not_empty.call(null,inst_27533__$1);
var state_27558__$1 = (function (){var statearr_27580 = state_27558;
(statearr_27580[(21)] = inst_27534);

(statearr_27580[(20)] = inst_27533__$1);

return statearr_27580;
})();
if(cljs.core.truth_(inst_27535)){
var statearr_27581_27660 = state_27558__$1;
(statearr_27581_27660[(1)] = (41));

} else {
var statearr_27582_27661 = state_27558__$1;
(statearr_27582_27661[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (33))){
var state_27558__$1 = state_27558;
var statearr_27583_27662 = state_27558__$1;
(statearr_27583_27662[(2)] = false);

(statearr_27583_27662[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (13))){
var inst_27431 = (state_27558[(22)]);
var inst_27435 = cljs.core.chunk_first.call(null,inst_27431);
var inst_27436 = cljs.core.chunk_rest.call(null,inst_27431);
var inst_27437 = cljs.core.count.call(null,inst_27435);
var inst_27418 = inst_27436;
var inst_27419 = inst_27435;
var inst_27420 = inst_27437;
var inst_27421 = (0);
var state_27558__$1 = (function (){var statearr_27584 = state_27558;
(statearr_27584[(7)] = inst_27420);

(statearr_27584[(8)] = inst_27418);

(statearr_27584[(9)] = inst_27421);

(statearr_27584[(10)] = inst_27419);

return statearr_27584;
})();
var statearr_27585_27663 = state_27558__$1;
(statearr_27585_27663[(2)] = null);

(statearr_27585_27663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (22))){
var inst_27474 = (state_27558[(23)]);
var inst_27475 = (state_27558[(24)]);
var inst_27471 = (state_27558[(19)]);
var inst_27479 = (state_27558[(25)]);
var inst_27474__$1 = (state_27558[(2)]);
var inst_27475__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27474__$1);
var inst_27476 = (function (){var all_files = inst_27471;
var res_SINGLEQUOTE_ = inst_27474__$1;
var res = inst_27475__$1;
return (function (p1__27400_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27400_SHARP_));
});
})();
var inst_27477 = cljs.core.filter.call(null,inst_27476,inst_27474__$1);
var inst_27478 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27479__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27478);
var inst_27480 = cljs.core.not_empty.call(null,inst_27479__$1);
var state_27558__$1 = (function (){var statearr_27586 = state_27558;
(statearr_27586[(23)] = inst_27474__$1);

(statearr_27586[(26)] = inst_27477);

(statearr_27586[(24)] = inst_27475__$1);

(statearr_27586[(25)] = inst_27479__$1);

return statearr_27586;
})();
if(cljs.core.truth_(inst_27480)){
var statearr_27587_27664 = state_27558__$1;
(statearr_27587_27664[(1)] = (23));

} else {
var statearr_27588_27665 = state_27558__$1;
(statearr_27588_27665[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (36))){
var state_27558__$1 = state_27558;
var statearr_27589_27666 = state_27558__$1;
(statearr_27589_27666[(2)] = false);

(statearr_27589_27666[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (41))){
var inst_27533 = (state_27558[(20)]);
var inst_27537 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27538 = cljs.core.map.call(null,inst_27537,inst_27533);
var inst_27539 = cljs.core.pr_str.call(null,inst_27538);
var inst_27540 = ["figwheel-no-load meta-data: ",inst_27539].join('');
var inst_27541 = figwheel.client.utils.log.call(null,inst_27540);
var state_27558__$1 = state_27558;
var statearr_27590_27667 = state_27558__$1;
(statearr_27590_27667[(2)] = inst_27541);

(statearr_27590_27667[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (43))){
var inst_27534 = (state_27558[(21)]);
var inst_27544 = (state_27558[(2)]);
var inst_27545 = cljs.core.not_empty.call(null,inst_27534);
var state_27558__$1 = (function (){var statearr_27591 = state_27558;
(statearr_27591[(27)] = inst_27544);

return statearr_27591;
})();
if(cljs.core.truth_(inst_27545)){
var statearr_27592_27668 = state_27558__$1;
(statearr_27592_27668[(1)] = (44));

} else {
var statearr_27593_27669 = state_27558__$1;
(statearr_27593_27669[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (29))){
var inst_27474 = (state_27558[(23)]);
var inst_27477 = (state_27558[(26)]);
var inst_27475 = (state_27558[(24)]);
var inst_27471 = (state_27558[(19)]);
var inst_27511 = (state_27558[(16)]);
var inst_27479 = (state_27558[(25)]);
var inst_27507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27510 = (function (){var all_files = inst_27471;
var res_SINGLEQUOTE_ = inst_27474;
var res = inst_27475;
var files_not_loaded = inst_27477;
var dependencies_that_loaded = inst_27479;
return (function (p__27509){
var map__27594 = p__27509;
var map__27594__$1 = (((((!((map__27594 == null))))?(((((map__27594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27594):map__27594);
var namespace = cljs.core.get.call(null,map__27594__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_27511__$1 = cljs.core.group_by.call(null,inst_27510,inst_27477);
var inst_27513 = (inst_27511__$1 == null);
var inst_27514 = cljs.core.not.call(null,inst_27513);
var state_27558__$1 = (function (){var statearr_27596 = state_27558;
(statearr_27596[(16)] = inst_27511__$1);

(statearr_27596[(28)] = inst_27507);

return statearr_27596;
})();
if(inst_27514){
var statearr_27597_27670 = state_27558__$1;
(statearr_27597_27670[(1)] = (32));

} else {
var statearr_27598_27671 = state_27558__$1;
(statearr_27598_27671[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (44))){
var inst_27534 = (state_27558[(21)]);
var inst_27547 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27534);
var inst_27548 = cljs.core.pr_str.call(null,inst_27547);
var inst_27549 = ["not required: ",inst_27548].join('');
var inst_27550 = figwheel.client.utils.log.call(null,inst_27549);
var state_27558__$1 = state_27558;
var statearr_27599_27672 = state_27558__$1;
(statearr_27599_27672[(2)] = inst_27550);

(statearr_27599_27672[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (6))){
var inst_27452 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
var statearr_27600_27673 = state_27558__$1;
(statearr_27600_27673[(2)] = inst_27452);

(statearr_27600_27673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (28))){
var inst_27477 = (state_27558[(26)]);
var inst_27504 = (state_27558[(2)]);
var inst_27505 = cljs.core.not_empty.call(null,inst_27477);
var state_27558__$1 = (function (){var statearr_27601 = state_27558;
(statearr_27601[(29)] = inst_27504);

return statearr_27601;
})();
if(cljs.core.truth_(inst_27505)){
var statearr_27602_27674 = state_27558__$1;
(statearr_27602_27674[(1)] = (29));

} else {
var statearr_27603_27675 = state_27558__$1;
(statearr_27603_27675[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (25))){
var inst_27475 = (state_27558[(24)]);
var inst_27491 = (state_27558[(2)]);
var inst_27492 = cljs.core.not_empty.call(null,inst_27475);
var state_27558__$1 = (function (){var statearr_27604 = state_27558;
(statearr_27604[(30)] = inst_27491);

return statearr_27604;
})();
if(cljs.core.truth_(inst_27492)){
var statearr_27605_27676 = state_27558__$1;
(statearr_27605_27676[(1)] = (26));

} else {
var statearr_27606_27677 = state_27558__$1;
(statearr_27606_27677[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (34))){
var inst_27527 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
if(cljs.core.truth_(inst_27527)){
var statearr_27607_27678 = state_27558__$1;
(statearr_27607_27678[(1)] = (38));

} else {
var statearr_27608_27679 = state_27558__$1;
(statearr_27608_27679[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (17))){
var state_27558__$1 = state_27558;
var statearr_27609_27680 = state_27558__$1;
(statearr_27609_27680[(2)] = recompile_dependents);

(statearr_27609_27680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (3))){
var state_27558__$1 = state_27558;
var statearr_27610_27681 = state_27558__$1;
(statearr_27610_27681[(2)] = null);

(statearr_27610_27681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (12))){
var inst_27448 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
var statearr_27611_27682 = state_27558__$1;
(statearr_27611_27682[(2)] = inst_27448);

(statearr_27611_27682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (2))){
var inst_27410 = (state_27558[(13)]);
var inst_27417 = cljs.core.seq.call(null,inst_27410);
var inst_27418 = inst_27417;
var inst_27419 = null;
var inst_27420 = (0);
var inst_27421 = (0);
var state_27558__$1 = (function (){var statearr_27612 = state_27558;
(statearr_27612[(7)] = inst_27420);

(statearr_27612[(8)] = inst_27418);

(statearr_27612[(9)] = inst_27421);

(statearr_27612[(10)] = inst_27419);

return statearr_27612;
})();
var statearr_27613_27683 = state_27558__$1;
(statearr_27613_27683[(2)] = null);

(statearr_27613_27683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (23))){
var inst_27474 = (state_27558[(23)]);
var inst_27477 = (state_27558[(26)]);
var inst_27475 = (state_27558[(24)]);
var inst_27471 = (state_27558[(19)]);
var inst_27479 = (state_27558[(25)]);
var inst_27482 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27484 = (function (){var all_files = inst_27471;
var res_SINGLEQUOTE_ = inst_27474;
var res = inst_27475;
var files_not_loaded = inst_27477;
var dependencies_that_loaded = inst_27479;
return (function (p__27483){
var map__27614 = p__27483;
var map__27614__$1 = (((((!((map__27614 == null))))?(((((map__27614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27614):map__27614);
var request_url = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_27485 = cljs.core.reverse.call(null,inst_27479);
var inst_27486 = cljs.core.map.call(null,inst_27484,inst_27485);
var inst_27487 = cljs.core.pr_str.call(null,inst_27486);
var inst_27488 = figwheel.client.utils.log.call(null,inst_27487);
var state_27558__$1 = (function (){var statearr_27616 = state_27558;
(statearr_27616[(31)] = inst_27482);

return statearr_27616;
})();
var statearr_27617_27684 = state_27558__$1;
(statearr_27617_27684[(2)] = inst_27488);

(statearr_27617_27684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (35))){
var state_27558__$1 = state_27558;
var statearr_27618_27685 = state_27558__$1;
(statearr_27618_27685[(2)] = true);

(statearr_27618_27685[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (19))){
var inst_27461 = (state_27558[(12)]);
var inst_27467 = figwheel.client.file_reloading.expand_files.call(null,inst_27461);
var state_27558__$1 = state_27558;
var statearr_27619_27686 = state_27558__$1;
(statearr_27619_27686[(2)] = inst_27467);

(statearr_27619_27686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (11))){
var state_27558__$1 = state_27558;
var statearr_27620_27687 = state_27558__$1;
(statearr_27620_27687[(2)] = null);

(statearr_27620_27687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (9))){
var inst_27450 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
var statearr_27621_27688 = state_27558__$1;
(statearr_27621_27688[(2)] = inst_27450);

(statearr_27621_27688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (5))){
var inst_27420 = (state_27558[(7)]);
var inst_27421 = (state_27558[(9)]);
var inst_27423 = (inst_27421 < inst_27420);
var inst_27424 = inst_27423;
var state_27558__$1 = state_27558;
if(cljs.core.truth_(inst_27424)){
var statearr_27622_27689 = state_27558__$1;
(statearr_27622_27689[(1)] = (7));

} else {
var statearr_27623_27690 = state_27558__$1;
(statearr_27623_27690[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (14))){
var inst_27431 = (state_27558[(22)]);
var inst_27440 = cljs.core.first.call(null,inst_27431);
var inst_27441 = figwheel.client.file_reloading.eval_body.call(null,inst_27440,opts);
var inst_27442 = cljs.core.next.call(null,inst_27431);
var inst_27418 = inst_27442;
var inst_27419 = null;
var inst_27420 = (0);
var inst_27421 = (0);
var state_27558__$1 = (function (){var statearr_27624 = state_27558;
(statearr_27624[(7)] = inst_27420);

(statearr_27624[(8)] = inst_27418);

(statearr_27624[(9)] = inst_27421);

(statearr_27624[(32)] = inst_27441);

(statearr_27624[(10)] = inst_27419);

return statearr_27624;
})();
var statearr_27625_27691 = state_27558__$1;
(statearr_27625_27691[(2)] = null);

(statearr_27625_27691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (45))){
var state_27558__$1 = state_27558;
var statearr_27626_27692 = state_27558__$1;
(statearr_27626_27692[(2)] = null);

(statearr_27626_27692[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (26))){
var inst_27474 = (state_27558[(23)]);
var inst_27477 = (state_27558[(26)]);
var inst_27475 = (state_27558[(24)]);
var inst_27471 = (state_27558[(19)]);
var inst_27479 = (state_27558[(25)]);
var inst_27494 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27496 = (function (){var all_files = inst_27471;
var res_SINGLEQUOTE_ = inst_27474;
var res = inst_27475;
var files_not_loaded = inst_27477;
var dependencies_that_loaded = inst_27479;
return (function (p__27495){
var map__27627 = p__27495;
var map__27627__$1 = (((((!((map__27627 == null))))?(((((map__27627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27627):map__27627);
var namespace = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_27497 = cljs.core.map.call(null,inst_27496,inst_27475);
var inst_27498 = cljs.core.pr_str.call(null,inst_27497);
var inst_27499 = figwheel.client.utils.log.call(null,inst_27498);
var inst_27500 = (function (){var all_files = inst_27471;
var res_SINGLEQUOTE_ = inst_27474;
var res = inst_27475;
var files_not_loaded = inst_27477;
var dependencies_that_loaded = inst_27479;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_27501 = setTimeout(inst_27500,(10));
var state_27558__$1 = (function (){var statearr_27629 = state_27558;
(statearr_27629[(33)] = inst_27499);

(statearr_27629[(34)] = inst_27494);

return statearr_27629;
})();
var statearr_27630_27693 = state_27558__$1;
(statearr_27630_27693[(2)] = inst_27501);

(statearr_27630_27693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (16))){
var state_27558__$1 = state_27558;
var statearr_27631_27694 = state_27558__$1;
(statearr_27631_27694[(2)] = reload_dependents);

(statearr_27631_27694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (38))){
var inst_27511 = (state_27558[(16)]);
var inst_27529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27511);
var state_27558__$1 = state_27558;
var statearr_27632_27695 = state_27558__$1;
(statearr_27632_27695[(2)] = inst_27529);

(statearr_27632_27695[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (30))){
var state_27558__$1 = state_27558;
var statearr_27633_27696 = state_27558__$1;
(statearr_27633_27696[(2)] = null);

(statearr_27633_27696[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (10))){
var inst_27431 = (state_27558[(22)]);
var inst_27433 = cljs.core.chunked_seq_QMARK_.call(null,inst_27431);
var state_27558__$1 = state_27558;
if(inst_27433){
var statearr_27634_27697 = state_27558__$1;
(statearr_27634_27697[(1)] = (13));

} else {
var statearr_27635_27698 = state_27558__$1;
(statearr_27635_27698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (18))){
var inst_27465 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
if(cljs.core.truth_(inst_27465)){
var statearr_27636_27699 = state_27558__$1;
(statearr_27636_27699[(1)] = (19));

} else {
var statearr_27637_27700 = state_27558__$1;
(statearr_27637_27700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (42))){
var state_27558__$1 = state_27558;
var statearr_27638_27701 = state_27558__$1;
(statearr_27638_27701[(2)] = null);

(statearr_27638_27701[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (37))){
var inst_27524 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
var statearr_27639_27702 = state_27558__$1;
(statearr_27639_27702[(2)] = inst_27524);

(statearr_27639_27702[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (8))){
var inst_27418 = (state_27558[(8)]);
var inst_27431 = (state_27558[(22)]);
var inst_27431__$1 = cljs.core.seq.call(null,inst_27418);
var state_27558__$1 = (function (){var statearr_27640 = state_27558;
(statearr_27640[(22)] = inst_27431__$1);

return statearr_27640;
})();
if(inst_27431__$1){
var statearr_27641_27703 = state_27558__$1;
(statearr_27641_27703[(1)] = (10));

} else {
var statearr_27642_27704 = state_27558__$1;
(statearr_27642_27704[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto____0 = (function (){
var statearr_27643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27643[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto__);

(statearr_27643[(1)] = (1));

return statearr_27643;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto____1 = (function (state_27558){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_27558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e27644){if((e27644 instanceof Object)){
var ex__23517__auto__ = e27644;
var statearr_27645_27705 = state_27558;
(statearr_27645_27705[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27706 = state_27558;
state_27558 = G__27706;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto__ = function(state_27558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto____1.call(this,state_27558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_27646 = f__23609__auto__.call(null);
(statearr_27646[(6)] = c__23608__auto__);

return statearr_27646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27709,link){
var map__27710 = p__27709;
var map__27710__$1 = (((((!((map__27710 == null))))?(((((map__27710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27710):map__27710);
var file = cljs.core.get.call(null,map__27710__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__27707_SHARP_,p2__27708_SHARP_){
if(cljs.core._EQ_.call(null,p1__27707_SHARP_,p2__27708_SHARP_)){
return p1__27707_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27713){
var map__27714 = p__27713;
var map__27714__$1 = (((((!((map__27714 == null))))?(((((map__27714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27714):map__27714);
var match_length = cljs.core.get.call(null,map__27714__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27714__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27712_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27712_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27716_SHARP_,p2__27717_SHARP_){
return cljs.core.assoc.call(null,p1__27716_SHARP_,cljs.core.get.call(null,p2__27717_SHARP_,key),p2__27717_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27718 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27718);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27718);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27719,p__27720){
var map__27721 = p__27719;
var map__27721__$1 = (((((!((map__27721 == null))))?(((((map__27721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27721):map__27721);
var on_cssload = cljs.core.get.call(null,map__27721__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27722 = p__27720;
var map__27722__$1 = (((((!((map__27722 == null))))?(((((map__27722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27722):map__27722);
var files_msg = map__27722__$1;
var files = cljs.core.get.call(null,map__27722__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1580245072003
