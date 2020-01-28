// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e27919){if((e27919 instanceof Error)){
var e = e27919;
return "Error: Unable to stringify";
} else {
throw e27919;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27922 = arguments.length;
switch (G__27922) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27920_SHARP_){
if(typeof p1__27920_SHARP_ === 'string'){
return p1__27920_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27920_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27925 = arguments.length;
var i__4790__auto___27926 = (0);
while(true){
if((i__4790__auto___27926 < len__4789__auto___27925)){
args__4795__auto__.push((arguments[i__4790__auto___27926]));

var G__27927 = (i__4790__auto___27926 + (1));
i__4790__auto___27926 = G__27927;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27924){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27924));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27929 = arguments.length;
var i__4790__auto___27930 = (0);
while(true){
if((i__4790__auto___27930 < len__4789__auto___27929)){
args__4795__auto__.push((arguments[i__4790__auto___27930]));

var G__27931 = (i__4790__auto___27930 + (1));
i__4790__auto___27930 = G__27931;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27928){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27928));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27932){
var map__27933 = p__27932;
var map__27933__$1 = (((((!((map__27933 == null))))?(((((map__27933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27933):map__27933);
var message = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23608__auto___28012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_27984){
var state_val_27985 = (state_27984[(1)]);
if((state_val_27985 === (7))){
var inst_27980 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
var statearr_27986_28013 = state_27984__$1;
(statearr_27986_28013[(2)] = inst_27980);

(statearr_27986_28013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (1))){
var state_27984__$1 = state_27984;
var statearr_27987_28014 = state_27984__$1;
(statearr_27987_28014[(2)] = null);

(statearr_27987_28014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (4))){
var inst_27937 = (state_27984[(7)]);
var inst_27937__$1 = (state_27984[(2)]);
var state_27984__$1 = (function (){var statearr_27988 = state_27984;
(statearr_27988[(7)] = inst_27937__$1);

return statearr_27988;
})();
if(cljs.core.truth_(inst_27937__$1)){
var statearr_27989_28015 = state_27984__$1;
(statearr_27989_28015[(1)] = (5));

} else {
var statearr_27990_28016 = state_27984__$1;
(statearr_27990_28016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (15))){
var inst_27944 = (state_27984[(8)]);
var inst_27959 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27944);
var inst_27960 = cljs.core.first.call(null,inst_27959);
var inst_27961 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27960);
var inst_27962 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27961)].join('');
var inst_27963 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27962);
var state_27984__$1 = state_27984;
var statearr_27991_28017 = state_27984__$1;
(statearr_27991_28017[(2)] = inst_27963);

(statearr_27991_28017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (13))){
var inst_27968 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
var statearr_27992_28018 = state_27984__$1;
(statearr_27992_28018[(2)] = inst_27968);

(statearr_27992_28018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (6))){
var state_27984__$1 = state_27984;
var statearr_27993_28019 = state_27984__$1;
(statearr_27993_28019[(2)] = null);

(statearr_27993_28019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (17))){
var inst_27966 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
var statearr_27994_28020 = state_27984__$1;
(statearr_27994_28020[(2)] = inst_27966);

(statearr_27994_28020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (3))){
var inst_27982 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27984__$1,inst_27982);
} else {
if((state_val_27985 === (12))){
var inst_27943 = (state_27984[(9)]);
var inst_27957 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27943,opts);
var state_27984__$1 = state_27984;
if(inst_27957){
var statearr_27995_28021 = state_27984__$1;
(statearr_27995_28021[(1)] = (15));

} else {
var statearr_27996_28022 = state_27984__$1;
(statearr_27996_28022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (2))){
var state_27984__$1 = state_27984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27984__$1,(4),ch);
} else {
if((state_val_27985 === (11))){
var inst_27944 = (state_27984[(8)]);
var inst_27949 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27950 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27944);
var inst_27951 = cljs.core.async.timeout.call(null,(1000));
var inst_27952 = [inst_27950,inst_27951];
var inst_27953 = (new cljs.core.PersistentVector(null,2,(5),inst_27949,inst_27952,null));
var state_27984__$1 = state_27984;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27984__$1,(14),inst_27953);
} else {
if((state_val_27985 === (9))){
var inst_27944 = (state_27984[(8)]);
var inst_27970 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27971 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27944);
var inst_27972 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27971);
var inst_27973 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27972)].join('');
var inst_27974 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27973);
var state_27984__$1 = (function (){var statearr_27997 = state_27984;
(statearr_27997[(10)] = inst_27970);

return statearr_27997;
})();
var statearr_27998_28023 = state_27984__$1;
(statearr_27998_28023[(2)] = inst_27974);

(statearr_27998_28023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (5))){
var inst_27937 = (state_27984[(7)]);
var inst_27939 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27940 = (new cljs.core.PersistentArrayMap(null,2,inst_27939,null));
var inst_27941 = (new cljs.core.PersistentHashSet(null,inst_27940,null));
var inst_27942 = figwheel.client.focus_msgs.call(null,inst_27941,inst_27937);
var inst_27943 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27942);
var inst_27944 = cljs.core.first.call(null,inst_27942);
var inst_27945 = figwheel.client.autoload_QMARK_.call(null);
var state_27984__$1 = (function (){var statearr_27999 = state_27984;
(statearr_27999[(9)] = inst_27943);

(statearr_27999[(8)] = inst_27944);

return statearr_27999;
})();
if(cljs.core.truth_(inst_27945)){
var statearr_28000_28024 = state_27984__$1;
(statearr_28000_28024[(1)] = (8));

} else {
var statearr_28001_28025 = state_27984__$1;
(statearr_28001_28025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (14))){
var inst_27955 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
var statearr_28002_28026 = state_27984__$1;
(statearr_28002_28026[(2)] = inst_27955);

(statearr_28002_28026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (16))){
var state_27984__$1 = state_27984;
var statearr_28003_28027 = state_27984__$1;
(statearr_28003_28027[(2)] = null);

(statearr_28003_28027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (10))){
var inst_27976 = (state_27984[(2)]);
var state_27984__$1 = (function (){var statearr_28004 = state_27984;
(statearr_28004[(11)] = inst_27976);

return statearr_28004;
})();
var statearr_28005_28028 = state_27984__$1;
(statearr_28005_28028[(2)] = null);

(statearr_28005_28028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (8))){
var inst_27943 = (state_27984[(9)]);
var inst_27947 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27943,opts);
var state_27984__$1 = state_27984;
if(cljs.core.truth_(inst_27947)){
var statearr_28006_28029 = state_27984__$1;
(statearr_28006_28029[(1)] = (11));

} else {
var statearr_28007_28030 = state_27984__$1;
(statearr_28007_28030[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23514__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23514__auto____0 = (function (){
var statearr_28008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28008[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23514__auto__);

(statearr_28008[(1)] = (1));

return statearr_28008;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23514__auto____1 = (function (state_27984){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_27984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e28009){if((e28009 instanceof Object)){
var ex__23517__auto__ = e28009;
var statearr_28010_28031 = state_27984;
(statearr_28010_28031[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28032 = state_27984;
state_27984 = G__28032;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23514__auto__ = function(state_27984){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23514__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23514__auto____1.call(this,state_27984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23514__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23514__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_28011 = f__23609__auto__.call(null);
(statearr_28011[(6)] = c__23608__auto___28012);

return statearr_28011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28033_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28033_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28039 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28035 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28036 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28037 = true;
var _STAR_print_fn_STAR__temp_val__28038 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28037);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28038);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28036);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28035);
}}catch (e28034){if((e28034 instanceof Error)){
var e = e28034;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28039], null));
} else {
var e = e28034;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28040){
var map__28041 = p__28040;
var map__28041__$1 = (((((!((map__28041 == null))))?(((((map__28041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28041):map__28041);
var opts = map__28041__$1;
var build_id = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__28043){
var vec__28044 = p__28043;
var seq__28045 = cljs.core.seq.call(null,vec__28044);
var first__28046 = cljs.core.first.call(null,seq__28045);
var seq__28045__$1 = cljs.core.next.call(null,seq__28045);
var map__28047 = first__28046;
var map__28047__$1 = (((((!((map__28047 == null))))?(((((map__28047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28047):map__28047);
var msg = map__28047__$1;
var msg_name = cljs.core.get.call(null,map__28047__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28045__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28049){
var vec__28050 = p__28049;
var seq__28051 = cljs.core.seq.call(null,vec__28050);
var first__28052 = cljs.core.first.call(null,seq__28051);
var seq__28051__$1 = cljs.core.next.call(null,seq__28051);
var map__28053 = first__28052;
var map__28053__$1 = (((((!((map__28053 == null))))?(((((map__28053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28053):map__28053);
var msg = map__28053__$1;
var msg_name = cljs.core.get.call(null,map__28053__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28051__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28055){
var map__28056 = p__28055;
var map__28056__$1 = (((((!((map__28056 == null))))?(((((map__28056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28056):map__28056);
var on_compile_warning = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__28058){
var vec__28059 = p__28058;
var seq__28060 = cljs.core.seq.call(null,vec__28059);
var first__28061 = cljs.core.first.call(null,seq__28060);
var seq__28060__$1 = cljs.core.next.call(null,seq__28060);
var map__28062 = first__28061;
var map__28062__$1 = (((((!((map__28062 == null))))?(((((map__28062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28062):map__28062);
var msg = map__28062__$1;
var msg_name = cljs.core.get.call(null,map__28062__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28060__$1;
var pred__28064 = cljs.core._EQ_;
var expr__28065 = msg_name;
if(cljs.core.truth_(pred__28064.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28065))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28064.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28065))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_28154){
var state_val_28155 = (state_28154[(1)]);
if((state_val_28155 === (7))){
var inst_28074 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
if(cljs.core.truth_(inst_28074)){
var statearr_28156_28203 = state_28154__$1;
(statearr_28156_28203[(1)] = (8));

} else {
var statearr_28157_28204 = state_28154__$1;
(statearr_28157_28204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (20))){
var inst_28148 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28158_28205 = state_28154__$1;
(statearr_28158_28205[(2)] = inst_28148);

(statearr_28158_28205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (27))){
var inst_28144 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28159_28206 = state_28154__$1;
(statearr_28159_28206[(2)] = inst_28144);

(statearr_28159_28206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (1))){
var inst_28067 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28154__$1 = state_28154;
if(cljs.core.truth_(inst_28067)){
var statearr_28160_28207 = state_28154__$1;
(statearr_28160_28207[(1)] = (2));

} else {
var statearr_28161_28208 = state_28154__$1;
(statearr_28161_28208[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (24))){
var inst_28146 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28162_28209 = state_28154__$1;
(statearr_28162_28209[(2)] = inst_28146);

(statearr_28162_28209[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (4))){
var inst_28152 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28154__$1,inst_28152);
} else {
if((state_val_28155 === (15))){
var inst_28150 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28163_28210 = state_28154__$1;
(statearr_28163_28210[(2)] = inst_28150);

(statearr_28163_28210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (21))){
var inst_28103 = (state_28154[(2)]);
var inst_28104 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28105 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28104);
var state_28154__$1 = (function (){var statearr_28164 = state_28154;
(statearr_28164[(7)] = inst_28103);

return statearr_28164;
})();
var statearr_28165_28211 = state_28154__$1;
(statearr_28165_28211[(2)] = inst_28105);

(statearr_28165_28211[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (31))){
var inst_28133 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28154__$1 = state_28154;
if(inst_28133){
var statearr_28166_28212 = state_28154__$1;
(statearr_28166_28212[(1)] = (34));

} else {
var statearr_28167_28213 = state_28154__$1;
(statearr_28167_28213[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (32))){
var inst_28142 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28168_28214 = state_28154__$1;
(statearr_28168_28214[(2)] = inst_28142);

(statearr_28168_28214[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (33))){
var inst_28129 = (state_28154[(2)]);
var inst_28130 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28131 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28130);
var state_28154__$1 = (function (){var statearr_28169 = state_28154;
(statearr_28169[(8)] = inst_28129);

return statearr_28169;
})();
var statearr_28170_28215 = state_28154__$1;
(statearr_28170_28215[(2)] = inst_28131);

(statearr_28170_28215[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (13))){
var inst_28088 = figwheel.client.heads_up.clear.call(null);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(16),inst_28088);
} else {
if((state_val_28155 === (22))){
var inst_28109 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28110 = figwheel.client.heads_up.append_warning_message.call(null,inst_28109);
var state_28154__$1 = state_28154;
var statearr_28171_28216 = state_28154__$1;
(statearr_28171_28216[(2)] = inst_28110);

(statearr_28171_28216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (36))){
var inst_28140 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28172_28217 = state_28154__$1;
(statearr_28172_28217[(2)] = inst_28140);

(statearr_28172_28217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (29))){
var inst_28120 = (state_28154[(2)]);
var inst_28121 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28122 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28121);
var state_28154__$1 = (function (){var statearr_28173 = state_28154;
(statearr_28173[(9)] = inst_28120);

return statearr_28173;
})();
var statearr_28174_28218 = state_28154__$1;
(statearr_28174_28218[(2)] = inst_28122);

(statearr_28174_28218[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (6))){
var inst_28069 = (state_28154[(10)]);
var state_28154__$1 = state_28154;
var statearr_28175_28219 = state_28154__$1;
(statearr_28175_28219[(2)] = inst_28069);

(statearr_28175_28219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (28))){
var inst_28116 = (state_28154[(2)]);
var inst_28117 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28118 = figwheel.client.heads_up.display_warning.call(null,inst_28117);
var state_28154__$1 = (function (){var statearr_28176 = state_28154;
(statearr_28176[(11)] = inst_28116);

return statearr_28176;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(29),inst_28118);
} else {
if((state_val_28155 === (25))){
var inst_28114 = figwheel.client.heads_up.clear.call(null);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(28),inst_28114);
} else {
if((state_val_28155 === (34))){
var inst_28135 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(37),inst_28135);
} else {
if((state_val_28155 === (17))){
var inst_28094 = (state_28154[(2)]);
var inst_28095 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28096 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28095);
var state_28154__$1 = (function (){var statearr_28177 = state_28154;
(statearr_28177[(12)] = inst_28094);

return statearr_28177;
})();
var statearr_28178_28220 = state_28154__$1;
(statearr_28178_28220[(2)] = inst_28096);

(statearr_28178_28220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (3))){
var inst_28086 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28154__$1 = state_28154;
if(inst_28086){
var statearr_28179_28221 = state_28154__$1;
(statearr_28179_28221[(1)] = (13));

} else {
var statearr_28180_28222 = state_28154__$1;
(statearr_28180_28222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (12))){
var inst_28082 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28181_28223 = state_28154__$1;
(statearr_28181_28223[(2)] = inst_28082);

(statearr_28181_28223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (2))){
var inst_28069 = (state_28154[(10)]);
var inst_28069__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28154__$1 = (function (){var statearr_28182 = state_28154;
(statearr_28182[(10)] = inst_28069__$1);

return statearr_28182;
})();
if(cljs.core.truth_(inst_28069__$1)){
var statearr_28183_28224 = state_28154__$1;
(statearr_28183_28224[(1)] = (5));

} else {
var statearr_28184_28225 = state_28154__$1;
(statearr_28184_28225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (23))){
var inst_28112 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28154__$1 = state_28154;
if(inst_28112){
var statearr_28185_28226 = state_28154__$1;
(statearr_28185_28226[(1)] = (25));

} else {
var statearr_28186_28227 = state_28154__$1;
(statearr_28186_28227[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (35))){
var state_28154__$1 = state_28154;
var statearr_28187_28228 = state_28154__$1;
(statearr_28187_28228[(2)] = null);

(statearr_28187_28228[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (19))){
var inst_28107 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28154__$1 = state_28154;
if(inst_28107){
var statearr_28188_28229 = state_28154__$1;
(statearr_28188_28229[(1)] = (22));

} else {
var statearr_28189_28230 = state_28154__$1;
(statearr_28189_28230[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (11))){
var inst_28078 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28190_28231 = state_28154__$1;
(statearr_28190_28231[(2)] = inst_28078);

(statearr_28190_28231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (9))){
var inst_28080 = figwheel.client.heads_up.clear.call(null);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(12),inst_28080);
} else {
if((state_val_28155 === (5))){
var inst_28071 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28154__$1 = state_28154;
var statearr_28191_28232 = state_28154__$1;
(statearr_28191_28232[(2)] = inst_28071);

(statearr_28191_28232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (14))){
var inst_28098 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28154__$1 = state_28154;
if(inst_28098){
var statearr_28192_28233 = state_28154__$1;
(statearr_28192_28233[(1)] = (18));

} else {
var statearr_28193_28234 = state_28154__$1;
(statearr_28193_28234[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (26))){
var inst_28124 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28154__$1 = state_28154;
if(inst_28124){
var statearr_28194_28235 = state_28154__$1;
(statearr_28194_28235[(1)] = (30));

} else {
var statearr_28195_28236 = state_28154__$1;
(statearr_28195_28236[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (16))){
var inst_28090 = (state_28154[(2)]);
var inst_28091 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28092 = figwheel.client.heads_up.display_exception.call(null,inst_28091);
var state_28154__$1 = (function (){var statearr_28196 = state_28154;
(statearr_28196[(13)] = inst_28090);

return statearr_28196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(17),inst_28092);
} else {
if((state_val_28155 === (30))){
var inst_28126 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28127 = figwheel.client.heads_up.display_warning.call(null,inst_28126);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(33),inst_28127);
} else {
if((state_val_28155 === (10))){
var inst_28084 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28197_28237 = state_28154__$1;
(statearr_28197_28237[(2)] = inst_28084);

(statearr_28197_28237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (18))){
var inst_28100 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28101 = figwheel.client.heads_up.display_exception.call(null,inst_28100);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(21),inst_28101);
} else {
if((state_val_28155 === (37))){
var inst_28137 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28198_28238 = state_28154__$1;
(statearr_28198_28238[(2)] = inst_28137);

(statearr_28198_28238[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (8))){
var inst_28076 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(11),inst_28076);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto____0 = (function (){
var statearr_28199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28199[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto__);

(statearr_28199[(1)] = (1));

return statearr_28199;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto____1 = (function (state_28154){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_28154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e28200){if((e28200 instanceof Object)){
var ex__23517__auto__ = e28200;
var statearr_28201_28239 = state_28154;
(statearr_28201_28239[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28240 = state_28154;
state_28154 = G__28240;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto__ = function(state_28154){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto____1.call(this,state_28154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_28202 = f__23609__auto__.call(null);
(statearr_28202[(6)] = c__23608__auto__);

return statearr_28202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23608__auto___28269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_28255){
var state_val_28256 = (state_28255[(1)]);
if((state_val_28256 === (1))){
var state_28255__$1 = state_28255;
var statearr_28257_28270 = state_28255__$1;
(statearr_28257_28270[(2)] = null);

(statearr_28257_28270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (2))){
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(4),ch);
} else {
if((state_val_28256 === (3))){
var inst_28253 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28255__$1,inst_28253);
} else {
if((state_val_28256 === (4))){
var inst_28243 = (state_28255[(7)]);
var inst_28243__$1 = (state_28255[(2)]);
var state_28255__$1 = (function (){var statearr_28258 = state_28255;
(statearr_28258[(7)] = inst_28243__$1);

return statearr_28258;
})();
if(cljs.core.truth_(inst_28243__$1)){
var statearr_28259_28271 = state_28255__$1;
(statearr_28259_28271[(1)] = (5));

} else {
var statearr_28260_28272 = state_28255__$1;
(statearr_28260_28272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (5))){
var inst_28243 = (state_28255[(7)]);
var inst_28245 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28243);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(8),inst_28245);
} else {
if((state_val_28256 === (6))){
var state_28255__$1 = state_28255;
var statearr_28261_28273 = state_28255__$1;
(statearr_28261_28273[(2)] = null);

(statearr_28261_28273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (7))){
var inst_28251 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28262_28274 = state_28255__$1;
(statearr_28262_28274[(2)] = inst_28251);

(statearr_28262_28274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (8))){
var inst_28247 = (state_28255[(2)]);
var state_28255__$1 = (function (){var statearr_28263 = state_28255;
(statearr_28263[(8)] = inst_28247);

return statearr_28263;
})();
var statearr_28264_28275 = state_28255__$1;
(statearr_28264_28275[(2)] = null);

(statearr_28264_28275[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23514__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23514__auto____0 = (function (){
var statearr_28265 = [null,null,null,null,null,null,null,null,null];
(statearr_28265[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23514__auto__);

(statearr_28265[(1)] = (1));

return statearr_28265;
});
var figwheel$client$heads_up_plugin_$_state_machine__23514__auto____1 = (function (state_28255){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_28255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e28266){if((e28266 instanceof Object)){
var ex__23517__auto__ = e28266;
var statearr_28267_28276 = state_28255;
(statearr_28267_28276[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28277 = state_28255;
state_28255 = G__28277;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23514__auto__ = function(state_28255){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23514__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23514__auto____1.call(this,state_28255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23514__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23514__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_28268 = f__23609__auto__.call(null);
(statearr_28268[(6)] = c__23608__auto___28269);

return statearr_28268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_28283){
var state_val_28284 = (state_28283[(1)]);
if((state_val_28284 === (1))){
var inst_28278 = cljs.core.async.timeout.call(null,(3000));
var state_28283__$1 = state_28283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28283__$1,(2),inst_28278);
} else {
if((state_val_28284 === (2))){
var inst_28280 = (state_28283[(2)]);
var inst_28281 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28283__$1 = (function (){var statearr_28285 = state_28283;
(statearr_28285[(7)] = inst_28280);

return statearr_28285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28283__$1,inst_28281);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23514__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23514__auto____0 = (function (){
var statearr_28286 = [null,null,null,null,null,null,null,null];
(statearr_28286[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23514__auto__);

(statearr_28286[(1)] = (1));

return statearr_28286;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23514__auto____1 = (function (state_28283){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_28283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e28287){if((e28287 instanceof Object)){
var ex__23517__auto__ = e28287;
var statearr_28288_28290 = state_28283;
(statearr_28288_28290[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28291 = state_28283;
state_28283 = G__28291;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23514__auto__ = function(state_28283){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23514__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23514__auto____1.call(this,state_28283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23514__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23514__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_28289 = f__23609__auto__.call(null);
(statearr_28289[(6)] = c__23608__auto__);

return statearr_28289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_28298){
var state_val_28299 = (state_28298[(1)]);
if((state_val_28299 === (1))){
var inst_28292 = cljs.core.async.timeout.call(null,(2000));
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28298__$1,(2),inst_28292);
} else {
if((state_val_28299 === (2))){
var inst_28294 = (state_28298[(2)]);
var inst_28295 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28296 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28295);
var state_28298__$1 = (function (){var statearr_28300 = state_28298;
(statearr_28300[(7)] = inst_28294);

return statearr_28300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28298__$1,inst_28296);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto____0 = (function (){
var statearr_28301 = [null,null,null,null,null,null,null,null];
(statearr_28301[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto__);

(statearr_28301[(1)] = (1));

return statearr_28301;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto____1 = (function (state_28298){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_28298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e28302){if((e28302 instanceof Object)){
var ex__23517__auto__ = e28302;
var statearr_28303_28305 = state_28298;
(statearr_28303_28305[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28306 = state_28298;
state_28298 = G__28306;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto__ = function(state_28298){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto____1.call(this,state_28298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_28304 = f__23609__auto__.call(null);
(statearr_28304[(6)] = c__23608__auto__);

return statearr_28304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28307){
var map__28308 = p__28307;
var map__28308__$1 = (((((!((map__28308 == null))))?(((((map__28308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28308):map__28308);
var file = cljs.core.get.call(null,map__28308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28308__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28308__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28310 = "";
var G__28310__$1 = (cljs.core.truth_(file)?[G__28310,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28310);
var G__28310__$2 = (cljs.core.truth_(line)?[G__28310__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28310__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__28310__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28310__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28311){
var map__28312 = p__28311;
var map__28312__$1 = (((((!((map__28312 == null))))?(((((map__28312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28312):map__28312);
var ed = map__28312__$1;
var exception_data = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28312__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28315 = (function (){var G__28314 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28314)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28314;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28315);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28316){
var map__28317 = p__28316;
var map__28317__$1 = (((((!((map__28317 == null))))?(((((map__28317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);
var w = map__28317__$1;
var message = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4174__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28319 = cljs.core.seq.call(null,plugins);
var chunk__28320 = null;
var count__28321 = (0);
var i__28322 = (0);
while(true){
if((i__28322 < count__28321)){
var vec__28329 = cljs.core._nth.call(null,chunk__28320,i__28322);
var k = cljs.core.nth.call(null,vec__28329,(0),null);
var plugin = cljs.core.nth.call(null,vec__28329,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28335 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28319,chunk__28320,count__28321,i__28322,pl_28335,vec__28329,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28335.call(null,msg_hist);
});})(seq__28319,chunk__28320,count__28321,i__28322,pl_28335,vec__28329,k,plugin))
);
} else {
}


var G__28336 = seq__28319;
var G__28337 = chunk__28320;
var G__28338 = count__28321;
var G__28339 = (i__28322 + (1));
seq__28319 = G__28336;
chunk__28320 = G__28337;
count__28321 = G__28338;
i__28322 = G__28339;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28319);
if(temp__5735__auto__){
var seq__28319__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28319__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__28319__$1);
var G__28340 = cljs.core.chunk_rest.call(null,seq__28319__$1);
var G__28341 = c__4609__auto__;
var G__28342 = cljs.core.count.call(null,c__4609__auto__);
var G__28343 = (0);
seq__28319 = G__28340;
chunk__28320 = G__28341;
count__28321 = G__28342;
i__28322 = G__28343;
continue;
} else {
var vec__28332 = cljs.core.first.call(null,seq__28319__$1);
var k = cljs.core.nth.call(null,vec__28332,(0),null);
var plugin = cljs.core.nth.call(null,vec__28332,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28344 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28319,chunk__28320,count__28321,i__28322,pl_28344,vec__28332,k,plugin,seq__28319__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28344.call(null,msg_hist);
});})(seq__28319,chunk__28320,count__28321,i__28322,pl_28344,vec__28332,k,plugin,seq__28319__$1,temp__5735__auto__))
);
} else {
}


var G__28345 = cljs.core.next.call(null,seq__28319__$1);
var G__28346 = null;
var G__28347 = (0);
var G__28348 = (0);
seq__28319 = G__28345;
chunk__28320 = G__28346;
count__28321 = G__28347;
i__28322 = G__28348;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28350 = arguments.length;
switch (G__28350) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28351_28356 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28352_28357 = null;
var count__28353_28358 = (0);
var i__28354_28359 = (0);
while(true){
if((i__28354_28359 < count__28353_28358)){
var msg_28360 = cljs.core._nth.call(null,chunk__28352_28357,i__28354_28359);
figwheel.client.socket.handle_incoming_message.call(null,msg_28360);


var G__28361 = seq__28351_28356;
var G__28362 = chunk__28352_28357;
var G__28363 = count__28353_28358;
var G__28364 = (i__28354_28359 + (1));
seq__28351_28356 = G__28361;
chunk__28352_28357 = G__28362;
count__28353_28358 = G__28363;
i__28354_28359 = G__28364;
continue;
} else {
var temp__5735__auto___28365 = cljs.core.seq.call(null,seq__28351_28356);
if(temp__5735__auto___28365){
var seq__28351_28366__$1 = temp__5735__auto___28365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28351_28366__$1)){
var c__4609__auto___28367 = cljs.core.chunk_first.call(null,seq__28351_28366__$1);
var G__28368 = cljs.core.chunk_rest.call(null,seq__28351_28366__$1);
var G__28369 = c__4609__auto___28367;
var G__28370 = cljs.core.count.call(null,c__4609__auto___28367);
var G__28371 = (0);
seq__28351_28356 = G__28368;
chunk__28352_28357 = G__28369;
count__28353_28358 = G__28370;
i__28354_28359 = G__28371;
continue;
} else {
var msg_28372 = cljs.core.first.call(null,seq__28351_28366__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28372);


var G__28373 = cljs.core.next.call(null,seq__28351_28366__$1);
var G__28374 = null;
var G__28375 = (0);
var G__28376 = (0);
seq__28351_28356 = G__28373;
chunk__28352_28357 = G__28374;
count__28353_28358 = G__28375;
i__28354_28359 = G__28376;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___28381 = arguments.length;
var i__4790__auto___28382 = (0);
while(true){
if((i__4790__auto___28382 < len__4789__auto___28381)){
args__4795__auto__.push((arguments[i__4790__auto___28382]));

var G__28383 = (i__4790__auto___28382 + (1));
i__4790__auto___28382 = G__28383;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28378){
var map__28379 = p__28378;
var map__28379__$1 = (((((!((map__28379 == null))))?(((((map__28379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28379):map__28379);
var opts = map__28379__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28377){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28377));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28384){if((e28384 instanceof Error)){
var e = e28384;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28384;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__28385){
var map__28386 = p__28385;
var map__28386__$1 = (((((!((map__28386 == null))))?(((((map__28386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28386):map__28386);
var msg_name = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1580245072432
