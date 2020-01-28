// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21706){
var map__21707 = p__21706;
var map__21707__$1 = (((((!((map__21707 == null))))?(((((map__21707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21707):map__21707);
var m = map__21707__$1;
var n = cljs.core.get.call(null,map__21707__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21707__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21709_21741 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21710_21742 = null;
var count__21711_21743 = (0);
var i__21712_21744 = (0);
while(true){
if((i__21712_21744 < count__21711_21743)){
var f_21745 = cljs.core._nth.call(null,chunk__21710_21742,i__21712_21744);
cljs.core.println.call(null,"  ",f_21745);


var G__21746 = seq__21709_21741;
var G__21747 = chunk__21710_21742;
var G__21748 = count__21711_21743;
var G__21749 = (i__21712_21744 + (1));
seq__21709_21741 = G__21746;
chunk__21710_21742 = G__21747;
count__21711_21743 = G__21748;
i__21712_21744 = G__21749;
continue;
} else {
var temp__5735__auto___21750 = cljs.core.seq.call(null,seq__21709_21741);
if(temp__5735__auto___21750){
var seq__21709_21751__$1 = temp__5735__auto___21750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21709_21751__$1)){
var c__4609__auto___21752 = cljs.core.chunk_first.call(null,seq__21709_21751__$1);
var G__21753 = cljs.core.chunk_rest.call(null,seq__21709_21751__$1);
var G__21754 = c__4609__auto___21752;
var G__21755 = cljs.core.count.call(null,c__4609__auto___21752);
var G__21756 = (0);
seq__21709_21741 = G__21753;
chunk__21710_21742 = G__21754;
count__21711_21743 = G__21755;
i__21712_21744 = G__21756;
continue;
} else {
var f_21757 = cljs.core.first.call(null,seq__21709_21751__$1);
cljs.core.println.call(null,"  ",f_21757);


var G__21758 = cljs.core.next.call(null,seq__21709_21751__$1);
var G__21759 = null;
var G__21760 = (0);
var G__21761 = (0);
seq__21709_21741 = G__21758;
chunk__21710_21742 = G__21759;
count__21711_21743 = G__21760;
i__21712_21744 = G__21761;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21762 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21762);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21762)))?cljs.core.second.call(null,arglists_21762):arglists_21762));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21713_21763 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21714_21764 = null;
var count__21715_21765 = (0);
var i__21716_21766 = (0);
while(true){
if((i__21716_21766 < count__21715_21765)){
var vec__21727_21767 = cljs.core._nth.call(null,chunk__21714_21764,i__21716_21766);
var name_21768 = cljs.core.nth.call(null,vec__21727_21767,(0),null);
var map__21730_21769 = cljs.core.nth.call(null,vec__21727_21767,(1),null);
var map__21730_21770__$1 = (((((!((map__21730_21769 == null))))?(((((map__21730_21769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21730_21769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21730_21769):map__21730_21769);
var doc_21771 = cljs.core.get.call(null,map__21730_21770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21772 = cljs.core.get.call(null,map__21730_21770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21768);

cljs.core.println.call(null," ",arglists_21772);

if(cljs.core.truth_(doc_21771)){
cljs.core.println.call(null," ",doc_21771);
} else {
}


var G__21773 = seq__21713_21763;
var G__21774 = chunk__21714_21764;
var G__21775 = count__21715_21765;
var G__21776 = (i__21716_21766 + (1));
seq__21713_21763 = G__21773;
chunk__21714_21764 = G__21774;
count__21715_21765 = G__21775;
i__21716_21766 = G__21776;
continue;
} else {
var temp__5735__auto___21777 = cljs.core.seq.call(null,seq__21713_21763);
if(temp__5735__auto___21777){
var seq__21713_21778__$1 = temp__5735__auto___21777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21713_21778__$1)){
var c__4609__auto___21779 = cljs.core.chunk_first.call(null,seq__21713_21778__$1);
var G__21780 = cljs.core.chunk_rest.call(null,seq__21713_21778__$1);
var G__21781 = c__4609__auto___21779;
var G__21782 = cljs.core.count.call(null,c__4609__auto___21779);
var G__21783 = (0);
seq__21713_21763 = G__21780;
chunk__21714_21764 = G__21781;
count__21715_21765 = G__21782;
i__21716_21766 = G__21783;
continue;
} else {
var vec__21732_21784 = cljs.core.first.call(null,seq__21713_21778__$1);
var name_21785 = cljs.core.nth.call(null,vec__21732_21784,(0),null);
var map__21735_21786 = cljs.core.nth.call(null,vec__21732_21784,(1),null);
var map__21735_21787__$1 = (((((!((map__21735_21786 == null))))?(((((map__21735_21786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21735_21786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21735_21786):map__21735_21786);
var doc_21788 = cljs.core.get.call(null,map__21735_21787__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21789 = cljs.core.get.call(null,map__21735_21787__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21785);

cljs.core.println.call(null," ",arglists_21789);

if(cljs.core.truth_(doc_21788)){
cljs.core.println.call(null," ",doc_21788);
} else {
}


var G__21790 = cljs.core.next.call(null,seq__21713_21778__$1);
var G__21791 = null;
var G__21792 = (0);
var G__21793 = (0);
seq__21713_21763 = G__21790;
chunk__21714_21764 = G__21791;
count__21715_21765 = G__21792;
i__21716_21766 = G__21793;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__21737 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21738 = null;
var count__21739 = (0);
var i__21740 = (0);
while(true){
if((i__21740 < count__21739)){
var role = cljs.core._nth.call(null,chunk__21738,i__21740);
var temp__5735__auto___21794__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___21794__$1)){
var spec_21795 = temp__5735__auto___21794__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21795));
} else {
}


var G__21796 = seq__21737;
var G__21797 = chunk__21738;
var G__21798 = count__21739;
var G__21799 = (i__21740 + (1));
seq__21737 = G__21796;
chunk__21738 = G__21797;
count__21739 = G__21798;
i__21740 = G__21799;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__21737);
if(temp__5735__auto____$1){
var seq__21737__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21737__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__21737__$1);
var G__21800 = cljs.core.chunk_rest.call(null,seq__21737__$1);
var G__21801 = c__4609__auto__;
var G__21802 = cljs.core.count.call(null,c__4609__auto__);
var G__21803 = (0);
seq__21737 = G__21800;
chunk__21738 = G__21801;
count__21739 = G__21802;
i__21740 = G__21803;
continue;
} else {
var role = cljs.core.first.call(null,seq__21737__$1);
var temp__5735__auto___21804__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___21804__$2)){
var spec_21805 = temp__5735__auto___21804__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21805));
} else {
}


var G__21806 = cljs.core.next.call(null,seq__21737__$1);
var G__21807 = null;
var G__21808 = (0);
var G__21809 = (0);
seq__21737 = G__21806;
chunk__21738 = G__21807;
count__21739 = G__21808;
i__21740 = G__21809;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21810 = cljs.core.conj.call(null,via,t);
var G__21811 = cljs.core.ex_cause.call(null,t);
via = G__21810;
t = G__21811;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21814 = datafied_throwable;
var map__21814__$1 = (((((!((map__21814 == null))))?(((((map__21814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21814):map__21814);
var via = cljs.core.get.call(null,map__21814__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21814__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21814__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21815 = cljs.core.last.call(null,via);
var map__21815__$1 = (((((!((map__21815 == null))))?(((((map__21815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21815):map__21815);
var type = cljs.core.get.call(null,map__21815__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21815__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21815__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21816 = data;
var map__21816__$1 = (((((!((map__21816 == null))))?(((((map__21816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21816):map__21816);
var problems = cljs.core.get.call(null,map__21816__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21816__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21816__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21817 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21817__$1 = (((((!((map__21817 == null))))?(((((map__21817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21817):map__21817);
var top_data = map__21817__$1;
var source = cljs.core.get.call(null,map__21817__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21822 = phase;
var G__21822__$1 = (((G__21822 instanceof cljs.core.Keyword))?G__21822.fqn:null);
switch (G__21822__$1) {
case "read-source":
var map__21823 = data;
var map__21823__$1 = (((((!((map__21823 == null))))?(((((map__21823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21823):map__21823);
var line = cljs.core.get.call(null,map__21823__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21823__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21825 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21825__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21825,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21825);
var G__21825__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21825__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21825__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21825__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21825__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21826 = top_data;
var G__21826__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21826,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21826);
var G__21826__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21826__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21826__$1);
var G__21826__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21826__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21826__$2);
var G__21826__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21826__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21826__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21826__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21826__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21827 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21827,(0),null);
var method = cljs.core.nth.call(null,vec__21827,(1),null);
var file = cljs.core.nth.call(null,vec__21827,(2),null);
var line = cljs.core.nth.call(null,vec__21827,(3),null);
var G__21830 = top_data;
var G__21830__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21830,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21830);
var G__21830__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21830__$1);
var G__21830__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__21830__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21830__$2);
var G__21830__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21830__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21830__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21830__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21830__$4;
}

break;
case "execution":
var vec__21831 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21831,(0),null);
var method = cljs.core.nth.call(null,vec__21831,(1),null);
var file = cljs.core.nth.call(null,vec__21831,(2),null);
var line = cljs.core.nth.call(null,vec__21831,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__21813_SHARP_){
var or__4185__auto__ = (p1__21813_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21813_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__21834 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21834__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21834,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21834);
var G__21834__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21834__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21834__$1);
var G__21834__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__21834__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21834__$2);
var G__21834__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21834__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21834__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21834__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21834__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21822__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21838){
var map__21839 = p__21838;
var map__21839__$1 = (((((!((map__21839 == null))))?(((((map__21839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21839):map__21839);
var triage_data = map__21839__$1;
var phase = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21841 = phase;
var G__21841__$1 = (((G__21841 instanceof cljs.core.Keyword))?G__21841.fqn:null);
switch (G__21841__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21842_21851 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21843_21852 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21844_21853 = true;
var _STAR_print_fn_STAR__temp_val__21845_21854 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21844_21853);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21845_21854);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21836_SHARP_){
return cljs.core.dissoc.call(null,p1__21836_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21843_21852);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21842_21851);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21846_21855 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21847_21856 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21848_21857 = true;
var _STAR_print_fn_STAR__temp_val__21849_21858 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21848_21857);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21849_21858);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21837_SHARP_){
return cljs.core.dissoc.call(null,p1__21837_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21847_21856);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21846_21855);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21841__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1580245068539
