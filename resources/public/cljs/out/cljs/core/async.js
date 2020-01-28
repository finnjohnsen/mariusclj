// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23668 = arguments.length;
switch (G__23668) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23669 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23669 = (function (f,blockable,meta23670){
this.f = f;
this.blockable = blockable;
this.meta23670 = meta23670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23671,meta23670__$1){
var self__ = this;
var _23671__$1 = this;
return (new cljs.core.async.t_cljs$core$async23669(self__.f,self__.blockable,meta23670__$1));
}));

(cljs.core.async.t_cljs$core$async23669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23671){
var self__ = this;
var _23671__$1 = this;
return self__.meta23670;
}));

(cljs.core.async.t_cljs$core$async23669.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23669.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23670","meta23670",-471345168,null)], null);
}));

(cljs.core.async.t_cljs$core$async23669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23669");

(cljs.core.async.t_cljs$core$async23669.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async23669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23669.
 */
cljs.core.async.__GT_t_cljs$core$async23669 = (function cljs$core$async$__GT_t_cljs$core$async23669(f__$1,blockable__$1,meta23670){
return (new cljs.core.async.t_cljs$core$async23669(f__$1,blockable__$1,meta23670));
});

}

return (new cljs.core.async.t_cljs$core$async23669(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23675 = arguments.length;
switch (G__23675) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23678 = arguments.length;
switch (G__23678) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23681 = arguments.length;
switch (G__23681) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23683 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23683);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_23683);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23685 = arguments.length;
switch (G__23685) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___23687 = n;
var x_23688 = (0);
while(true){
if((x_23688 < n__4666__auto___23687)){
(a[x_23688] = (0));

var G__23689 = (x_23688 + (1));
x_23688 = G__23689;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23690 = (i + (1));
i = G__23690;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23691 = (function (flag,meta23692){
this.flag = flag;
this.meta23692 = meta23692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23693,meta23692__$1){
var self__ = this;
var _23693__$1 = this;
return (new cljs.core.async.t_cljs$core$async23691(self__.flag,meta23692__$1));
}));

(cljs.core.async.t_cljs$core$async23691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23693){
var self__ = this;
var _23693__$1 = this;
return self__.meta23692;
}));

(cljs.core.async.t_cljs$core$async23691.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23692","meta23692",-637265349,null)], null);
}));

(cljs.core.async.t_cljs$core$async23691.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23691");

(cljs.core.async.t_cljs$core$async23691.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async23691");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23691.
 */
cljs.core.async.__GT_t_cljs$core$async23691 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23691(flag__$1,meta23692){
return (new cljs.core.async.t_cljs$core$async23691(flag__$1,meta23692));
});

}

return (new cljs.core.async.t_cljs$core$async23691(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23694 = (function (flag,cb,meta23695){
this.flag = flag;
this.cb = cb;
this.meta23695 = meta23695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23696,meta23695__$1){
var self__ = this;
var _23696__$1 = this;
return (new cljs.core.async.t_cljs$core$async23694(self__.flag,self__.cb,meta23695__$1));
}));

(cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23696){
var self__ = this;
var _23696__$1 = this;
return self__.meta23695;
}));

(cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23695","meta23695",-1261508970,null)], null);
}));

(cljs.core.async.t_cljs$core$async23694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23694");

(cljs.core.async.t_cljs$core$async23694.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async23694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23694.
 */
cljs.core.async.__GT_t_cljs$core$async23694 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23694(flag__$1,cb__$1,meta23695){
return (new cljs.core.async.t_cljs$core$async23694(flag__$1,cb__$1,meta23695));
});

}

return (new cljs.core.async.t_cljs$core$async23694(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23697_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23697_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23698_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23698_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23699 = (i + (1));
i = G__23699;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23705 = arguments.length;
var i__4790__auto___23706 = (0);
while(true){
if((i__4790__auto___23706 < len__4789__auto___23705)){
args__4795__auto__.push((arguments[i__4790__auto___23706]));

var G__23707 = (i__4790__auto___23706 + (1));
i__4790__auto___23706 = G__23707;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23702){
var map__23703 = p__23702;
var map__23703__$1 = (((((!((map__23703 == null))))?(((((map__23703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23703):map__23703);
var opts = map__23703__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23700){
var G__23701 = cljs.core.first.call(null,seq23700);
var seq23700__$1 = cljs.core.next.call(null,seq23700);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23701,seq23700__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23709 = arguments.length;
switch (G__23709) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23608__auto___23755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_23733){
var state_val_23734 = (state_23733[(1)]);
if((state_val_23734 === (7))){
var inst_23729 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
var statearr_23735_23756 = state_23733__$1;
(statearr_23735_23756[(2)] = inst_23729);

(statearr_23735_23756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (1))){
var state_23733__$1 = state_23733;
var statearr_23736_23757 = state_23733__$1;
(statearr_23736_23757[(2)] = null);

(statearr_23736_23757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (4))){
var inst_23712 = (state_23733[(7)]);
var inst_23712__$1 = (state_23733[(2)]);
var inst_23713 = (inst_23712__$1 == null);
var state_23733__$1 = (function (){var statearr_23737 = state_23733;
(statearr_23737[(7)] = inst_23712__$1);

return statearr_23737;
})();
if(cljs.core.truth_(inst_23713)){
var statearr_23738_23758 = state_23733__$1;
(statearr_23738_23758[(1)] = (5));

} else {
var statearr_23739_23759 = state_23733__$1;
(statearr_23739_23759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (13))){
var state_23733__$1 = state_23733;
var statearr_23740_23760 = state_23733__$1;
(statearr_23740_23760[(2)] = null);

(statearr_23740_23760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (6))){
var inst_23712 = (state_23733[(7)]);
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23733__$1,(11),to,inst_23712);
} else {
if((state_val_23734 === (3))){
var inst_23731 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23733__$1,inst_23731);
} else {
if((state_val_23734 === (12))){
var state_23733__$1 = state_23733;
var statearr_23741_23761 = state_23733__$1;
(statearr_23741_23761[(2)] = null);

(statearr_23741_23761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (2))){
var state_23733__$1 = state_23733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23733__$1,(4),from);
} else {
if((state_val_23734 === (11))){
var inst_23722 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
if(cljs.core.truth_(inst_23722)){
var statearr_23742_23762 = state_23733__$1;
(statearr_23742_23762[(1)] = (12));

} else {
var statearr_23743_23763 = state_23733__$1;
(statearr_23743_23763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (9))){
var state_23733__$1 = state_23733;
var statearr_23744_23764 = state_23733__$1;
(statearr_23744_23764[(2)] = null);

(statearr_23744_23764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (5))){
var state_23733__$1 = state_23733;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23745_23765 = state_23733__$1;
(statearr_23745_23765[(1)] = (8));

} else {
var statearr_23746_23766 = state_23733__$1;
(statearr_23746_23766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (14))){
var inst_23727 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
var statearr_23747_23767 = state_23733__$1;
(statearr_23747_23767[(2)] = inst_23727);

(statearr_23747_23767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (10))){
var inst_23719 = (state_23733[(2)]);
var state_23733__$1 = state_23733;
var statearr_23748_23768 = state_23733__$1;
(statearr_23748_23768[(2)] = inst_23719);

(statearr_23748_23768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23734 === (8))){
var inst_23716 = cljs.core.async.close_BANG_.call(null,to);
var state_23733__$1 = state_23733;
var statearr_23749_23769 = state_23733__$1;
(statearr_23749_23769[(2)] = inst_23716);

(statearr_23749_23769[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_23750 = [null,null,null,null,null,null,null,null];
(statearr_23750[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_23750[(1)] = (1));

return statearr_23750;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_23733){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_23733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e23751){if((e23751 instanceof Object)){
var ex__23517__auto__ = e23751;
var statearr_23752_23770 = state_23733;
(statearr_23752_23770[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23771 = state_23733;
state_23733 = G__23771;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_23733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_23733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_23753 = f__23609__auto__.call(null);
(statearr_23753[(6)] = c__23608__auto___23755);

return statearr_23753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__23772){
var vec__23773 = p__23772;
var v = cljs.core.nth.call(null,vec__23773,(0),null);
var p = cljs.core.nth.call(null,vec__23773,(1),null);
var job = vec__23773;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23608__auto___23944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_23780){
var state_val_23781 = (state_23780[(1)]);
if((state_val_23781 === (1))){
var state_23780__$1 = state_23780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23780__$1,(2),res,v);
} else {
if((state_val_23781 === (2))){
var inst_23777 = (state_23780[(2)]);
var inst_23778 = cljs.core.async.close_BANG_.call(null,res);
var state_23780__$1 = (function (){var statearr_23782 = state_23780;
(statearr_23782[(7)] = inst_23777);

return statearr_23782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23780__$1,inst_23778);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0 = (function (){
var statearr_23783 = [null,null,null,null,null,null,null,null];
(statearr_23783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__);

(statearr_23783[(1)] = (1));

return statearr_23783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1 = (function (state_23780){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_23780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e23784){if((e23784 instanceof Object)){
var ex__23517__auto__ = e23784;
var statearr_23785_23945 = state_23780;
(statearr_23785_23945[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23946 = state_23780;
state_23780 = G__23946;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = function(state_23780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1.call(this,state_23780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_23786 = f__23609__auto__.call(null);
(statearr_23786[(6)] = c__23608__auto___23944);

return statearr_23786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23787){
var vec__23788 = p__23787;
var v = cljs.core.nth.call(null,vec__23788,(0),null);
var p = cljs.core.nth.call(null,vec__23788,(1),null);
var job = vec__23788;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___23947 = n;
var __23948 = (0);
while(true){
if((__23948 < n__4666__auto___23947)){
var G__23791_23949 = type;
var G__23791_23950__$1 = (((G__23791_23949 instanceof cljs.core.Keyword))?G__23791_23949.fqn:null);
switch (G__23791_23950__$1) {
case "compute":
var c__23608__auto___23952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23948,c__23608__auto___23952,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async){
return (function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = ((function (__23948,c__23608__auto___23952,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async){
return (function (state_23804){
var state_val_23805 = (state_23804[(1)]);
if((state_val_23805 === (1))){
var state_23804__$1 = state_23804;
var statearr_23806_23953 = state_23804__$1;
(statearr_23806_23953[(2)] = null);

(statearr_23806_23953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23805 === (2))){
var state_23804__$1 = state_23804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23804__$1,(4),jobs);
} else {
if((state_val_23805 === (3))){
var inst_23802 = (state_23804[(2)]);
var state_23804__$1 = state_23804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23804__$1,inst_23802);
} else {
if((state_val_23805 === (4))){
var inst_23794 = (state_23804[(2)]);
var inst_23795 = process.call(null,inst_23794);
var state_23804__$1 = state_23804;
if(cljs.core.truth_(inst_23795)){
var statearr_23807_23954 = state_23804__$1;
(statearr_23807_23954[(1)] = (5));

} else {
var statearr_23808_23955 = state_23804__$1;
(statearr_23808_23955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23805 === (5))){
var state_23804__$1 = state_23804;
var statearr_23809_23956 = state_23804__$1;
(statearr_23809_23956[(2)] = null);

(statearr_23809_23956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23805 === (6))){
var state_23804__$1 = state_23804;
var statearr_23810_23957 = state_23804__$1;
(statearr_23810_23957[(2)] = null);

(statearr_23810_23957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23805 === (7))){
var inst_23800 = (state_23804[(2)]);
var state_23804__$1 = state_23804;
var statearr_23811_23958 = state_23804__$1;
(statearr_23811_23958[(2)] = inst_23800);

(statearr_23811_23958[(1)] = (3));


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
});})(__23948,c__23608__auto___23952,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async))
;
return ((function (__23948,switch__23513__auto__,c__23608__auto___23952,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0 = (function (){
var statearr_23812 = [null,null,null,null,null,null,null];
(statearr_23812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__);

(statearr_23812[(1)] = (1));

return statearr_23812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1 = (function (state_23804){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_23804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e23813){if((e23813 instanceof Object)){
var ex__23517__auto__ = e23813;
var statearr_23814_23959 = state_23804;
(statearr_23814_23959[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23960 = state_23804;
state_23804 = G__23960;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = function(state_23804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1.call(this,state_23804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__;
})()
;})(__23948,switch__23513__auto__,c__23608__auto___23952,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async))
})();
var state__23610__auto__ = (function (){var statearr_23815 = f__23609__auto__.call(null);
(statearr_23815[(6)] = c__23608__auto___23952);

return statearr_23815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(__23948,c__23608__auto___23952,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async))
);


break;
case "async":
var c__23608__auto___23961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23948,c__23608__auto___23961,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async){
return (function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = ((function (__23948,c__23608__auto___23961,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async){
return (function (state_23828){
var state_val_23829 = (state_23828[(1)]);
if((state_val_23829 === (1))){
var state_23828__$1 = state_23828;
var statearr_23830_23962 = state_23828__$1;
(statearr_23830_23962[(2)] = null);

(statearr_23830_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23829 === (2))){
var state_23828__$1 = state_23828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23828__$1,(4),jobs);
} else {
if((state_val_23829 === (3))){
var inst_23826 = (state_23828[(2)]);
var state_23828__$1 = state_23828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23828__$1,inst_23826);
} else {
if((state_val_23829 === (4))){
var inst_23818 = (state_23828[(2)]);
var inst_23819 = async.call(null,inst_23818);
var state_23828__$1 = state_23828;
if(cljs.core.truth_(inst_23819)){
var statearr_23831_23963 = state_23828__$1;
(statearr_23831_23963[(1)] = (5));

} else {
var statearr_23832_23964 = state_23828__$1;
(statearr_23832_23964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23829 === (5))){
var state_23828__$1 = state_23828;
var statearr_23833_23965 = state_23828__$1;
(statearr_23833_23965[(2)] = null);

(statearr_23833_23965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23829 === (6))){
var state_23828__$1 = state_23828;
var statearr_23834_23966 = state_23828__$1;
(statearr_23834_23966[(2)] = null);

(statearr_23834_23966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23829 === (7))){
var inst_23824 = (state_23828[(2)]);
var state_23828__$1 = state_23828;
var statearr_23835_23967 = state_23828__$1;
(statearr_23835_23967[(2)] = inst_23824);

(statearr_23835_23967[(1)] = (3));


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
});})(__23948,c__23608__auto___23961,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async))
;
return ((function (__23948,switch__23513__auto__,c__23608__auto___23961,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0 = (function (){
var statearr_23836 = [null,null,null,null,null,null,null];
(statearr_23836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__);

(statearr_23836[(1)] = (1));

return statearr_23836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1 = (function (state_23828){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_23828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e23837){if((e23837 instanceof Object)){
var ex__23517__auto__ = e23837;
var statearr_23838_23968 = state_23828;
(statearr_23838_23968[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23969 = state_23828;
state_23828 = G__23969;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = function(state_23828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1.call(this,state_23828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__;
})()
;})(__23948,switch__23513__auto__,c__23608__auto___23961,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async))
})();
var state__23610__auto__ = (function (){var statearr_23839 = f__23609__auto__.call(null);
(statearr_23839[(6)] = c__23608__auto___23961);

return statearr_23839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
});})(__23948,c__23608__auto___23961,G__23791_23949,G__23791_23950__$1,n__4666__auto___23947,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23791_23950__$1)].join('')));

}

var G__23970 = (__23948 + (1));
__23948 = G__23970;
continue;
} else {
}
break;
}

var c__23608__auto___23971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_23861){
var state_val_23862 = (state_23861[(1)]);
if((state_val_23862 === (7))){
var inst_23857 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
var statearr_23863_23972 = state_23861__$1;
(statearr_23863_23972[(2)] = inst_23857);

(statearr_23863_23972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (1))){
var state_23861__$1 = state_23861;
var statearr_23864_23973 = state_23861__$1;
(statearr_23864_23973[(2)] = null);

(statearr_23864_23973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (4))){
var inst_23842 = (state_23861[(7)]);
var inst_23842__$1 = (state_23861[(2)]);
var inst_23843 = (inst_23842__$1 == null);
var state_23861__$1 = (function (){var statearr_23865 = state_23861;
(statearr_23865[(7)] = inst_23842__$1);

return statearr_23865;
})();
if(cljs.core.truth_(inst_23843)){
var statearr_23866_23974 = state_23861__$1;
(statearr_23866_23974[(1)] = (5));

} else {
var statearr_23867_23975 = state_23861__$1;
(statearr_23867_23975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (6))){
var inst_23842 = (state_23861[(7)]);
var inst_23847 = (state_23861[(8)]);
var inst_23847__$1 = cljs.core.async.chan.call(null,(1));
var inst_23848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23849 = [inst_23842,inst_23847__$1];
var inst_23850 = (new cljs.core.PersistentVector(null,2,(5),inst_23848,inst_23849,null));
var state_23861__$1 = (function (){var statearr_23868 = state_23861;
(statearr_23868[(8)] = inst_23847__$1);

return statearr_23868;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23861__$1,(8),jobs,inst_23850);
} else {
if((state_val_23862 === (3))){
var inst_23859 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23861__$1,inst_23859);
} else {
if((state_val_23862 === (2))){
var state_23861__$1 = state_23861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23861__$1,(4),from);
} else {
if((state_val_23862 === (9))){
var inst_23854 = (state_23861[(2)]);
var state_23861__$1 = (function (){var statearr_23869 = state_23861;
(statearr_23869[(9)] = inst_23854);

return statearr_23869;
})();
var statearr_23870_23976 = state_23861__$1;
(statearr_23870_23976[(2)] = null);

(statearr_23870_23976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (5))){
var inst_23845 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23861__$1 = state_23861;
var statearr_23871_23977 = state_23861__$1;
(statearr_23871_23977[(2)] = inst_23845);

(statearr_23871_23977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (8))){
var inst_23847 = (state_23861[(8)]);
var inst_23852 = (state_23861[(2)]);
var state_23861__$1 = (function (){var statearr_23872 = state_23861;
(statearr_23872[(10)] = inst_23852);

return statearr_23872;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23861__$1,(9),results,inst_23847);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0 = (function (){
var statearr_23873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__);

(statearr_23873[(1)] = (1));

return statearr_23873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1 = (function (state_23861){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_23861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e23874){if((e23874 instanceof Object)){
var ex__23517__auto__ = e23874;
var statearr_23875_23978 = state_23861;
(statearr_23875_23978[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23979 = state_23861;
state_23861 = G__23979;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = function(state_23861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1.call(this,state_23861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_23876 = f__23609__auto__.call(null);
(statearr_23876[(6)] = c__23608__auto___23971);

return statearr_23876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_23914){
var state_val_23915 = (state_23914[(1)]);
if((state_val_23915 === (7))){
var inst_23910 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
var statearr_23916_23980 = state_23914__$1;
(statearr_23916_23980[(2)] = inst_23910);

(statearr_23916_23980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (20))){
var state_23914__$1 = state_23914;
var statearr_23917_23981 = state_23914__$1;
(statearr_23917_23981[(2)] = null);

(statearr_23917_23981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (1))){
var state_23914__$1 = state_23914;
var statearr_23918_23982 = state_23914__$1;
(statearr_23918_23982[(2)] = null);

(statearr_23918_23982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (4))){
var inst_23879 = (state_23914[(7)]);
var inst_23879__$1 = (state_23914[(2)]);
var inst_23880 = (inst_23879__$1 == null);
var state_23914__$1 = (function (){var statearr_23919 = state_23914;
(statearr_23919[(7)] = inst_23879__$1);

return statearr_23919;
})();
if(cljs.core.truth_(inst_23880)){
var statearr_23920_23983 = state_23914__$1;
(statearr_23920_23983[(1)] = (5));

} else {
var statearr_23921_23984 = state_23914__$1;
(statearr_23921_23984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (15))){
var inst_23892 = (state_23914[(8)]);
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23914__$1,(18),to,inst_23892);
} else {
if((state_val_23915 === (21))){
var inst_23905 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
var statearr_23922_23985 = state_23914__$1;
(statearr_23922_23985[(2)] = inst_23905);

(statearr_23922_23985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (13))){
var inst_23907 = (state_23914[(2)]);
var state_23914__$1 = (function (){var statearr_23923 = state_23914;
(statearr_23923[(9)] = inst_23907);

return statearr_23923;
})();
var statearr_23924_23986 = state_23914__$1;
(statearr_23924_23986[(2)] = null);

(statearr_23924_23986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (6))){
var inst_23879 = (state_23914[(7)]);
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23914__$1,(11),inst_23879);
} else {
if((state_val_23915 === (17))){
var inst_23900 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
if(cljs.core.truth_(inst_23900)){
var statearr_23925_23987 = state_23914__$1;
(statearr_23925_23987[(1)] = (19));

} else {
var statearr_23926_23988 = state_23914__$1;
(statearr_23926_23988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (3))){
var inst_23912 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23914__$1,inst_23912);
} else {
if((state_val_23915 === (12))){
var inst_23889 = (state_23914[(10)]);
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23914__$1,(14),inst_23889);
} else {
if((state_val_23915 === (2))){
var state_23914__$1 = state_23914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23914__$1,(4),results);
} else {
if((state_val_23915 === (19))){
var state_23914__$1 = state_23914;
var statearr_23927_23989 = state_23914__$1;
(statearr_23927_23989[(2)] = null);

(statearr_23927_23989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (11))){
var inst_23889 = (state_23914[(2)]);
var state_23914__$1 = (function (){var statearr_23928 = state_23914;
(statearr_23928[(10)] = inst_23889);

return statearr_23928;
})();
var statearr_23929_23990 = state_23914__$1;
(statearr_23929_23990[(2)] = null);

(statearr_23929_23990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (9))){
var state_23914__$1 = state_23914;
var statearr_23930_23991 = state_23914__$1;
(statearr_23930_23991[(2)] = null);

(statearr_23930_23991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (5))){
var state_23914__$1 = state_23914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23931_23992 = state_23914__$1;
(statearr_23931_23992[(1)] = (8));

} else {
var statearr_23932_23993 = state_23914__$1;
(statearr_23932_23993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (14))){
var inst_23892 = (state_23914[(8)]);
var inst_23892__$1 = (state_23914[(2)]);
var inst_23893 = (inst_23892__$1 == null);
var inst_23894 = cljs.core.not.call(null,inst_23893);
var state_23914__$1 = (function (){var statearr_23933 = state_23914;
(statearr_23933[(8)] = inst_23892__$1);

return statearr_23933;
})();
if(inst_23894){
var statearr_23934_23994 = state_23914__$1;
(statearr_23934_23994[(1)] = (15));

} else {
var statearr_23935_23995 = state_23914__$1;
(statearr_23935_23995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (16))){
var state_23914__$1 = state_23914;
var statearr_23936_23996 = state_23914__$1;
(statearr_23936_23996[(2)] = false);

(statearr_23936_23996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (10))){
var inst_23886 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
var statearr_23937_23997 = state_23914__$1;
(statearr_23937_23997[(2)] = inst_23886);

(statearr_23937_23997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (18))){
var inst_23897 = (state_23914[(2)]);
var state_23914__$1 = state_23914;
var statearr_23938_23998 = state_23914__$1;
(statearr_23938_23998[(2)] = inst_23897);

(statearr_23938_23998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23915 === (8))){
var inst_23883 = cljs.core.async.close_BANG_.call(null,to);
var state_23914__$1 = state_23914;
var statearr_23939_23999 = state_23914__$1;
(statearr_23939_23999[(2)] = inst_23883);

(statearr_23939_23999[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0 = (function (){
var statearr_23940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__);

(statearr_23940[(1)] = (1));

return statearr_23940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1 = (function (state_23914){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_23914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e23941){if((e23941 instanceof Object)){
var ex__23517__auto__ = e23941;
var statearr_23942_24000 = state_23914;
(statearr_23942_24000[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24001 = state_23914;
state_23914 = G__24001;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__ = function(state_23914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1.call(this,state_23914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23514__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_23943 = f__23609__auto__.call(null);
(statearr_23943[(6)] = c__23608__auto__);

return statearr_23943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24003 = arguments.length;
switch (G__24003) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24006 = arguments.length;
switch (G__24006) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24009 = arguments.length;
switch (G__24009) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23608__auto___24058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24035){
var state_val_24036 = (state_24035[(1)]);
if((state_val_24036 === (7))){
var inst_24031 = (state_24035[(2)]);
var state_24035__$1 = state_24035;
var statearr_24037_24059 = state_24035__$1;
(statearr_24037_24059[(2)] = inst_24031);

(statearr_24037_24059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (1))){
var state_24035__$1 = state_24035;
var statearr_24038_24060 = state_24035__$1;
(statearr_24038_24060[(2)] = null);

(statearr_24038_24060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (4))){
var inst_24012 = (state_24035[(7)]);
var inst_24012__$1 = (state_24035[(2)]);
var inst_24013 = (inst_24012__$1 == null);
var state_24035__$1 = (function (){var statearr_24039 = state_24035;
(statearr_24039[(7)] = inst_24012__$1);

return statearr_24039;
})();
if(cljs.core.truth_(inst_24013)){
var statearr_24040_24061 = state_24035__$1;
(statearr_24040_24061[(1)] = (5));

} else {
var statearr_24041_24062 = state_24035__$1;
(statearr_24041_24062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (13))){
var state_24035__$1 = state_24035;
var statearr_24042_24063 = state_24035__$1;
(statearr_24042_24063[(2)] = null);

(statearr_24042_24063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (6))){
var inst_24012 = (state_24035[(7)]);
var inst_24018 = p.call(null,inst_24012);
var state_24035__$1 = state_24035;
if(cljs.core.truth_(inst_24018)){
var statearr_24043_24064 = state_24035__$1;
(statearr_24043_24064[(1)] = (9));

} else {
var statearr_24044_24065 = state_24035__$1;
(statearr_24044_24065[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (3))){
var inst_24033 = (state_24035[(2)]);
var state_24035__$1 = state_24035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24035__$1,inst_24033);
} else {
if((state_val_24036 === (12))){
var state_24035__$1 = state_24035;
var statearr_24045_24066 = state_24035__$1;
(statearr_24045_24066[(2)] = null);

(statearr_24045_24066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (2))){
var state_24035__$1 = state_24035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24035__$1,(4),ch);
} else {
if((state_val_24036 === (11))){
var inst_24012 = (state_24035[(7)]);
var inst_24022 = (state_24035[(2)]);
var state_24035__$1 = state_24035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24035__$1,(8),inst_24022,inst_24012);
} else {
if((state_val_24036 === (9))){
var state_24035__$1 = state_24035;
var statearr_24046_24067 = state_24035__$1;
(statearr_24046_24067[(2)] = tc);

(statearr_24046_24067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (5))){
var inst_24015 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24016 = cljs.core.async.close_BANG_.call(null,fc);
var state_24035__$1 = (function (){var statearr_24047 = state_24035;
(statearr_24047[(8)] = inst_24015);

return statearr_24047;
})();
var statearr_24048_24068 = state_24035__$1;
(statearr_24048_24068[(2)] = inst_24016);

(statearr_24048_24068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (14))){
var inst_24029 = (state_24035[(2)]);
var state_24035__$1 = state_24035;
var statearr_24049_24069 = state_24035__$1;
(statearr_24049_24069[(2)] = inst_24029);

(statearr_24049_24069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (10))){
var state_24035__$1 = state_24035;
var statearr_24050_24070 = state_24035__$1;
(statearr_24050_24070[(2)] = fc);

(statearr_24050_24070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24036 === (8))){
var inst_24024 = (state_24035[(2)]);
var state_24035__$1 = state_24035;
if(cljs.core.truth_(inst_24024)){
var statearr_24051_24071 = state_24035__$1;
(statearr_24051_24071[(1)] = (12));

} else {
var statearr_24052_24072 = state_24035__$1;
(statearr_24052_24072[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_24053 = [null,null,null,null,null,null,null,null,null];
(statearr_24053[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_24053[(1)] = (1));

return statearr_24053;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_24035){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e24054){if((e24054 instanceof Object)){
var ex__23517__auto__ = e24054;
var statearr_24055_24073 = state_24035;
(statearr_24055_24073[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24074 = state_24035;
state_24035 = G__24074;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_24035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_24035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_24056 = f__23609__auto__.call(null);
(statearr_24056[(6)] = c__23608__auto___24058);

return statearr_24056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24095){
var state_val_24096 = (state_24095[(1)]);
if((state_val_24096 === (7))){
var inst_24091 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24097_24115 = state_24095__$1;
(statearr_24097_24115[(2)] = inst_24091);

(statearr_24097_24115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (1))){
var inst_24075 = init;
var state_24095__$1 = (function (){var statearr_24098 = state_24095;
(statearr_24098[(7)] = inst_24075);

return statearr_24098;
})();
var statearr_24099_24116 = state_24095__$1;
(statearr_24099_24116[(2)] = null);

(statearr_24099_24116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (4))){
var inst_24078 = (state_24095[(8)]);
var inst_24078__$1 = (state_24095[(2)]);
var inst_24079 = (inst_24078__$1 == null);
var state_24095__$1 = (function (){var statearr_24100 = state_24095;
(statearr_24100[(8)] = inst_24078__$1);

return statearr_24100;
})();
if(cljs.core.truth_(inst_24079)){
var statearr_24101_24117 = state_24095__$1;
(statearr_24101_24117[(1)] = (5));

} else {
var statearr_24102_24118 = state_24095__$1;
(statearr_24102_24118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (6))){
var inst_24078 = (state_24095[(8)]);
var inst_24075 = (state_24095[(7)]);
var inst_24082 = (state_24095[(9)]);
var inst_24082__$1 = f.call(null,inst_24075,inst_24078);
var inst_24083 = cljs.core.reduced_QMARK_.call(null,inst_24082__$1);
var state_24095__$1 = (function (){var statearr_24103 = state_24095;
(statearr_24103[(9)] = inst_24082__$1);

return statearr_24103;
})();
if(inst_24083){
var statearr_24104_24119 = state_24095__$1;
(statearr_24104_24119[(1)] = (8));

} else {
var statearr_24105_24120 = state_24095__$1;
(statearr_24105_24120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (3))){
var inst_24093 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24095__$1,inst_24093);
} else {
if((state_val_24096 === (2))){
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24095__$1,(4),ch);
} else {
if((state_val_24096 === (9))){
var inst_24082 = (state_24095[(9)]);
var inst_24075 = inst_24082;
var state_24095__$1 = (function (){var statearr_24106 = state_24095;
(statearr_24106[(7)] = inst_24075);

return statearr_24106;
})();
var statearr_24107_24121 = state_24095__$1;
(statearr_24107_24121[(2)] = null);

(statearr_24107_24121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (5))){
var inst_24075 = (state_24095[(7)]);
var state_24095__$1 = state_24095;
var statearr_24108_24122 = state_24095__$1;
(statearr_24108_24122[(2)] = inst_24075);

(statearr_24108_24122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (10))){
var inst_24089 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24109_24123 = state_24095__$1;
(statearr_24109_24123[(2)] = inst_24089);

(statearr_24109_24123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (8))){
var inst_24082 = (state_24095[(9)]);
var inst_24085 = cljs.core.deref.call(null,inst_24082);
var state_24095__$1 = state_24095;
var statearr_24110_24124 = state_24095__$1;
(statearr_24110_24124[(2)] = inst_24085);

(statearr_24110_24124[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__23514__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23514__auto____0 = (function (){
var statearr_24111 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24111[(0)] = cljs$core$async$reduce_$_state_machine__23514__auto__);

(statearr_24111[(1)] = (1));

return statearr_24111;
});
var cljs$core$async$reduce_$_state_machine__23514__auto____1 = (function (state_24095){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e24112){if((e24112 instanceof Object)){
var ex__23517__auto__ = e24112;
var statearr_24113_24125 = state_24095;
(statearr_24113_24125[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24126 = state_24095;
state_24095 = G__24126;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23514__auto__ = function(state_24095){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23514__auto____1.call(this,state_24095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23514__auto____0;
cljs$core$async$reduce_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23514__auto____1;
return cljs$core$async$reduce_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_24114 = f__23609__auto__.call(null);
(statearr_24114[(6)] = c__23608__auto__);

return statearr_24114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24132){
var state_val_24133 = (state_24132[(1)]);
if((state_val_24133 === (1))){
var inst_24127 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24132__$1 = state_24132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24132__$1,(2),inst_24127);
} else {
if((state_val_24133 === (2))){
var inst_24129 = (state_24132[(2)]);
var inst_24130 = f__$1.call(null,inst_24129);
var state_24132__$1 = state_24132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24132__$1,inst_24130);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23514__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23514__auto____0 = (function (){
var statearr_24134 = [null,null,null,null,null,null,null];
(statearr_24134[(0)] = cljs$core$async$transduce_$_state_machine__23514__auto__);

(statearr_24134[(1)] = (1));

return statearr_24134;
});
var cljs$core$async$transduce_$_state_machine__23514__auto____1 = (function (state_24132){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e24135){if((e24135 instanceof Object)){
var ex__23517__auto__ = e24135;
var statearr_24136_24138 = state_24132;
(statearr_24136_24138[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24139 = state_24132;
state_24132 = G__24139;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23514__auto__ = function(state_24132){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23514__auto____1.call(this,state_24132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23514__auto____0;
cljs$core$async$transduce_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23514__auto____1;
return cljs$core$async$transduce_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_24137 = f__23609__auto__.call(null);
(statearr_24137[(6)] = c__23608__auto__);

return statearr_24137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24141 = arguments.length;
switch (G__24141) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24166){
var state_val_24167 = (state_24166[(1)]);
if((state_val_24167 === (7))){
var inst_24148 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
var statearr_24168_24189 = state_24166__$1;
(statearr_24168_24189[(2)] = inst_24148);

(statearr_24168_24189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (1))){
var inst_24142 = cljs.core.seq.call(null,coll);
var inst_24143 = inst_24142;
var state_24166__$1 = (function (){var statearr_24169 = state_24166;
(statearr_24169[(7)] = inst_24143);

return statearr_24169;
})();
var statearr_24170_24190 = state_24166__$1;
(statearr_24170_24190[(2)] = null);

(statearr_24170_24190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (4))){
var inst_24143 = (state_24166[(7)]);
var inst_24146 = cljs.core.first.call(null,inst_24143);
var state_24166__$1 = state_24166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24166__$1,(7),ch,inst_24146);
} else {
if((state_val_24167 === (13))){
var inst_24160 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
var statearr_24171_24191 = state_24166__$1;
(statearr_24171_24191[(2)] = inst_24160);

(statearr_24171_24191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (6))){
var inst_24151 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24151)){
var statearr_24172_24192 = state_24166__$1;
(statearr_24172_24192[(1)] = (8));

} else {
var statearr_24173_24193 = state_24166__$1;
(statearr_24173_24193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (3))){
var inst_24164 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24166__$1,inst_24164);
} else {
if((state_val_24167 === (12))){
var state_24166__$1 = state_24166;
var statearr_24174_24194 = state_24166__$1;
(statearr_24174_24194[(2)] = null);

(statearr_24174_24194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (2))){
var inst_24143 = (state_24166[(7)]);
var state_24166__$1 = state_24166;
if(cljs.core.truth_(inst_24143)){
var statearr_24175_24195 = state_24166__$1;
(statearr_24175_24195[(1)] = (4));

} else {
var statearr_24176_24196 = state_24166__$1;
(statearr_24176_24196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (11))){
var inst_24157 = cljs.core.async.close_BANG_.call(null,ch);
var state_24166__$1 = state_24166;
var statearr_24177_24197 = state_24166__$1;
(statearr_24177_24197[(2)] = inst_24157);

(statearr_24177_24197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (9))){
var state_24166__$1 = state_24166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24178_24198 = state_24166__$1;
(statearr_24178_24198[(1)] = (11));

} else {
var statearr_24179_24199 = state_24166__$1;
(statearr_24179_24199[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (5))){
var inst_24143 = (state_24166[(7)]);
var state_24166__$1 = state_24166;
var statearr_24180_24200 = state_24166__$1;
(statearr_24180_24200[(2)] = inst_24143);

(statearr_24180_24200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (10))){
var inst_24162 = (state_24166[(2)]);
var state_24166__$1 = state_24166;
var statearr_24181_24201 = state_24166__$1;
(statearr_24181_24201[(2)] = inst_24162);

(statearr_24181_24201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24167 === (8))){
var inst_24143 = (state_24166[(7)]);
var inst_24153 = cljs.core.next.call(null,inst_24143);
var inst_24143__$1 = inst_24153;
var state_24166__$1 = (function (){var statearr_24182 = state_24166;
(statearr_24182[(7)] = inst_24143__$1);

return statearr_24182;
})();
var statearr_24183_24202 = state_24166__$1;
(statearr_24183_24202[(2)] = null);

(statearr_24183_24202[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_24184 = [null,null,null,null,null,null,null,null];
(statearr_24184[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_24184[(1)] = (1));

return statearr_24184;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_24166){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e24185){if((e24185 instanceof Object)){
var ex__23517__auto__ = e24185;
var statearr_24186_24203 = state_24166;
(statearr_24186_24203[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24204 = state_24166;
state_24166 = G__24204;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_24166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_24166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_24187 = f__23609__auto__.call(null);
(statearr_24187[(6)] = c__23608__auto__);

return statearr_24187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24205 = (function (ch,cs,meta24206){
this.ch = ch;
this.cs = cs;
this.meta24206 = meta24206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24207,meta24206__$1){
var self__ = this;
var _24207__$1 = this;
return (new cljs.core.async.t_cljs$core$async24205(self__.ch,self__.cs,meta24206__$1));
}));

(cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24207){
var self__ = this;
var _24207__$1 = this;
return self__.meta24206;
}));

(cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async24205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24206","meta24206",-497211263,null)], null);
}));

(cljs.core.async.t_cljs$core$async24205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24205");

(cljs.core.async.t_cljs$core$async24205.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24205.
 */
cljs.core.async.__GT_t_cljs$core$async24205 = (function cljs$core$async$mult_$___GT_t_cljs$core$async24205(ch__$1,cs__$1,meta24206){
return (new cljs.core.async.t_cljs$core$async24205(ch__$1,cs__$1,meta24206));
});

}

return (new cljs.core.async.t_cljs$core$async24205(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__23608__auto___24427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24342){
var state_val_24343 = (state_24342[(1)]);
if((state_val_24343 === (7))){
var inst_24338 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24344_24428 = state_24342__$1;
(statearr_24344_24428[(2)] = inst_24338);

(statearr_24344_24428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (20))){
var inst_24241 = (state_24342[(7)]);
var inst_24253 = cljs.core.first.call(null,inst_24241);
var inst_24254 = cljs.core.nth.call(null,inst_24253,(0),null);
var inst_24255 = cljs.core.nth.call(null,inst_24253,(1),null);
var state_24342__$1 = (function (){var statearr_24345 = state_24342;
(statearr_24345[(8)] = inst_24254);

return statearr_24345;
})();
if(cljs.core.truth_(inst_24255)){
var statearr_24346_24429 = state_24342__$1;
(statearr_24346_24429[(1)] = (22));

} else {
var statearr_24347_24430 = state_24342__$1;
(statearr_24347_24430[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (27))){
var inst_24285 = (state_24342[(9)]);
var inst_24290 = (state_24342[(10)]);
var inst_24210 = (state_24342[(11)]);
var inst_24283 = (state_24342[(12)]);
var inst_24290__$1 = cljs.core._nth.call(null,inst_24283,inst_24285);
var inst_24291 = cljs.core.async.put_BANG_.call(null,inst_24290__$1,inst_24210,done);
var state_24342__$1 = (function (){var statearr_24348 = state_24342;
(statearr_24348[(10)] = inst_24290__$1);

return statearr_24348;
})();
if(cljs.core.truth_(inst_24291)){
var statearr_24349_24431 = state_24342__$1;
(statearr_24349_24431[(1)] = (30));

} else {
var statearr_24350_24432 = state_24342__$1;
(statearr_24350_24432[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (1))){
var state_24342__$1 = state_24342;
var statearr_24351_24433 = state_24342__$1;
(statearr_24351_24433[(2)] = null);

(statearr_24351_24433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (24))){
var inst_24241 = (state_24342[(7)]);
var inst_24260 = (state_24342[(2)]);
var inst_24261 = cljs.core.next.call(null,inst_24241);
var inst_24219 = inst_24261;
var inst_24220 = null;
var inst_24221 = (0);
var inst_24222 = (0);
var state_24342__$1 = (function (){var statearr_24352 = state_24342;
(statearr_24352[(13)] = inst_24220);

(statearr_24352[(14)] = inst_24219);

(statearr_24352[(15)] = inst_24260);

(statearr_24352[(16)] = inst_24222);

(statearr_24352[(17)] = inst_24221);

return statearr_24352;
})();
var statearr_24353_24434 = state_24342__$1;
(statearr_24353_24434[(2)] = null);

(statearr_24353_24434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (39))){
var state_24342__$1 = state_24342;
var statearr_24357_24435 = state_24342__$1;
(statearr_24357_24435[(2)] = null);

(statearr_24357_24435[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (4))){
var inst_24210 = (state_24342[(11)]);
var inst_24210__$1 = (state_24342[(2)]);
var inst_24211 = (inst_24210__$1 == null);
var state_24342__$1 = (function (){var statearr_24358 = state_24342;
(statearr_24358[(11)] = inst_24210__$1);

return statearr_24358;
})();
if(cljs.core.truth_(inst_24211)){
var statearr_24359_24436 = state_24342__$1;
(statearr_24359_24436[(1)] = (5));

} else {
var statearr_24360_24437 = state_24342__$1;
(statearr_24360_24437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (15))){
var inst_24220 = (state_24342[(13)]);
var inst_24219 = (state_24342[(14)]);
var inst_24222 = (state_24342[(16)]);
var inst_24221 = (state_24342[(17)]);
var inst_24237 = (state_24342[(2)]);
var inst_24238 = (inst_24222 + (1));
var tmp24354 = inst_24220;
var tmp24355 = inst_24219;
var tmp24356 = inst_24221;
var inst_24219__$1 = tmp24355;
var inst_24220__$1 = tmp24354;
var inst_24221__$1 = tmp24356;
var inst_24222__$1 = inst_24238;
var state_24342__$1 = (function (){var statearr_24361 = state_24342;
(statearr_24361[(13)] = inst_24220__$1);

(statearr_24361[(14)] = inst_24219__$1);

(statearr_24361[(18)] = inst_24237);

(statearr_24361[(16)] = inst_24222__$1);

(statearr_24361[(17)] = inst_24221__$1);

return statearr_24361;
})();
var statearr_24362_24438 = state_24342__$1;
(statearr_24362_24438[(2)] = null);

(statearr_24362_24438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (21))){
var inst_24264 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24366_24439 = state_24342__$1;
(statearr_24366_24439[(2)] = inst_24264);

(statearr_24366_24439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (31))){
var inst_24290 = (state_24342[(10)]);
var inst_24294 = done.call(null,null);
var inst_24295 = cljs.core.async.untap_STAR_.call(null,m,inst_24290);
var state_24342__$1 = (function (){var statearr_24367 = state_24342;
(statearr_24367[(19)] = inst_24294);

return statearr_24367;
})();
var statearr_24368_24440 = state_24342__$1;
(statearr_24368_24440[(2)] = inst_24295);

(statearr_24368_24440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (32))){
var inst_24285 = (state_24342[(9)]);
var inst_24284 = (state_24342[(20)]);
var inst_24282 = (state_24342[(21)]);
var inst_24283 = (state_24342[(12)]);
var inst_24297 = (state_24342[(2)]);
var inst_24298 = (inst_24285 + (1));
var tmp24363 = inst_24284;
var tmp24364 = inst_24282;
var tmp24365 = inst_24283;
var inst_24282__$1 = tmp24364;
var inst_24283__$1 = tmp24365;
var inst_24284__$1 = tmp24363;
var inst_24285__$1 = inst_24298;
var state_24342__$1 = (function (){var statearr_24369 = state_24342;
(statearr_24369[(9)] = inst_24285__$1);

(statearr_24369[(20)] = inst_24284__$1);

(statearr_24369[(22)] = inst_24297);

(statearr_24369[(21)] = inst_24282__$1);

(statearr_24369[(12)] = inst_24283__$1);

return statearr_24369;
})();
var statearr_24370_24441 = state_24342__$1;
(statearr_24370_24441[(2)] = null);

(statearr_24370_24441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (40))){
var inst_24310 = (state_24342[(23)]);
var inst_24314 = done.call(null,null);
var inst_24315 = cljs.core.async.untap_STAR_.call(null,m,inst_24310);
var state_24342__$1 = (function (){var statearr_24371 = state_24342;
(statearr_24371[(24)] = inst_24314);

return statearr_24371;
})();
var statearr_24372_24442 = state_24342__$1;
(statearr_24372_24442[(2)] = inst_24315);

(statearr_24372_24442[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (33))){
var inst_24301 = (state_24342[(25)]);
var inst_24303 = cljs.core.chunked_seq_QMARK_.call(null,inst_24301);
var state_24342__$1 = state_24342;
if(inst_24303){
var statearr_24373_24443 = state_24342__$1;
(statearr_24373_24443[(1)] = (36));

} else {
var statearr_24374_24444 = state_24342__$1;
(statearr_24374_24444[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (13))){
var inst_24231 = (state_24342[(26)]);
var inst_24234 = cljs.core.async.close_BANG_.call(null,inst_24231);
var state_24342__$1 = state_24342;
var statearr_24375_24445 = state_24342__$1;
(statearr_24375_24445[(2)] = inst_24234);

(statearr_24375_24445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (22))){
var inst_24254 = (state_24342[(8)]);
var inst_24257 = cljs.core.async.close_BANG_.call(null,inst_24254);
var state_24342__$1 = state_24342;
var statearr_24376_24446 = state_24342__$1;
(statearr_24376_24446[(2)] = inst_24257);

(statearr_24376_24446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (36))){
var inst_24301 = (state_24342[(25)]);
var inst_24305 = cljs.core.chunk_first.call(null,inst_24301);
var inst_24306 = cljs.core.chunk_rest.call(null,inst_24301);
var inst_24307 = cljs.core.count.call(null,inst_24305);
var inst_24282 = inst_24306;
var inst_24283 = inst_24305;
var inst_24284 = inst_24307;
var inst_24285 = (0);
var state_24342__$1 = (function (){var statearr_24377 = state_24342;
(statearr_24377[(9)] = inst_24285);

(statearr_24377[(20)] = inst_24284);

(statearr_24377[(21)] = inst_24282);

(statearr_24377[(12)] = inst_24283);

return statearr_24377;
})();
var statearr_24378_24447 = state_24342__$1;
(statearr_24378_24447[(2)] = null);

(statearr_24378_24447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (41))){
var inst_24301 = (state_24342[(25)]);
var inst_24317 = (state_24342[(2)]);
var inst_24318 = cljs.core.next.call(null,inst_24301);
var inst_24282 = inst_24318;
var inst_24283 = null;
var inst_24284 = (0);
var inst_24285 = (0);
var state_24342__$1 = (function (){var statearr_24379 = state_24342;
(statearr_24379[(9)] = inst_24285);

(statearr_24379[(20)] = inst_24284);

(statearr_24379[(21)] = inst_24282);

(statearr_24379[(27)] = inst_24317);

(statearr_24379[(12)] = inst_24283);

return statearr_24379;
})();
var statearr_24380_24448 = state_24342__$1;
(statearr_24380_24448[(2)] = null);

(statearr_24380_24448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (43))){
var state_24342__$1 = state_24342;
var statearr_24381_24449 = state_24342__$1;
(statearr_24381_24449[(2)] = null);

(statearr_24381_24449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (29))){
var inst_24326 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24382_24450 = state_24342__$1;
(statearr_24382_24450[(2)] = inst_24326);

(statearr_24382_24450[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (44))){
var inst_24335 = (state_24342[(2)]);
var state_24342__$1 = (function (){var statearr_24383 = state_24342;
(statearr_24383[(28)] = inst_24335);

return statearr_24383;
})();
var statearr_24384_24451 = state_24342__$1;
(statearr_24384_24451[(2)] = null);

(statearr_24384_24451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (6))){
var inst_24274 = (state_24342[(29)]);
var inst_24273 = cljs.core.deref.call(null,cs);
var inst_24274__$1 = cljs.core.keys.call(null,inst_24273);
var inst_24275 = cljs.core.count.call(null,inst_24274__$1);
var inst_24276 = cljs.core.reset_BANG_.call(null,dctr,inst_24275);
var inst_24281 = cljs.core.seq.call(null,inst_24274__$1);
var inst_24282 = inst_24281;
var inst_24283 = null;
var inst_24284 = (0);
var inst_24285 = (0);
var state_24342__$1 = (function (){var statearr_24385 = state_24342;
(statearr_24385[(30)] = inst_24276);

(statearr_24385[(9)] = inst_24285);

(statearr_24385[(20)] = inst_24284);

(statearr_24385[(29)] = inst_24274__$1);

(statearr_24385[(21)] = inst_24282);

(statearr_24385[(12)] = inst_24283);

return statearr_24385;
})();
var statearr_24386_24452 = state_24342__$1;
(statearr_24386_24452[(2)] = null);

(statearr_24386_24452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (28))){
var inst_24301 = (state_24342[(25)]);
var inst_24282 = (state_24342[(21)]);
var inst_24301__$1 = cljs.core.seq.call(null,inst_24282);
var state_24342__$1 = (function (){var statearr_24387 = state_24342;
(statearr_24387[(25)] = inst_24301__$1);

return statearr_24387;
})();
if(inst_24301__$1){
var statearr_24388_24453 = state_24342__$1;
(statearr_24388_24453[(1)] = (33));

} else {
var statearr_24389_24454 = state_24342__$1;
(statearr_24389_24454[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (25))){
var inst_24285 = (state_24342[(9)]);
var inst_24284 = (state_24342[(20)]);
var inst_24287 = (inst_24285 < inst_24284);
var inst_24288 = inst_24287;
var state_24342__$1 = state_24342;
if(cljs.core.truth_(inst_24288)){
var statearr_24390_24455 = state_24342__$1;
(statearr_24390_24455[(1)] = (27));

} else {
var statearr_24391_24456 = state_24342__$1;
(statearr_24391_24456[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (34))){
var state_24342__$1 = state_24342;
var statearr_24392_24457 = state_24342__$1;
(statearr_24392_24457[(2)] = null);

(statearr_24392_24457[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (17))){
var state_24342__$1 = state_24342;
var statearr_24393_24458 = state_24342__$1;
(statearr_24393_24458[(2)] = null);

(statearr_24393_24458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (3))){
var inst_24340 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24342__$1,inst_24340);
} else {
if((state_val_24343 === (12))){
var inst_24269 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24394_24459 = state_24342__$1;
(statearr_24394_24459[(2)] = inst_24269);

(statearr_24394_24459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (2))){
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24342__$1,(4),ch);
} else {
if((state_val_24343 === (23))){
var state_24342__$1 = state_24342;
var statearr_24395_24460 = state_24342__$1;
(statearr_24395_24460[(2)] = null);

(statearr_24395_24460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (35))){
var inst_24324 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24396_24461 = state_24342__$1;
(statearr_24396_24461[(2)] = inst_24324);

(statearr_24396_24461[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (19))){
var inst_24241 = (state_24342[(7)]);
var inst_24245 = cljs.core.chunk_first.call(null,inst_24241);
var inst_24246 = cljs.core.chunk_rest.call(null,inst_24241);
var inst_24247 = cljs.core.count.call(null,inst_24245);
var inst_24219 = inst_24246;
var inst_24220 = inst_24245;
var inst_24221 = inst_24247;
var inst_24222 = (0);
var state_24342__$1 = (function (){var statearr_24397 = state_24342;
(statearr_24397[(13)] = inst_24220);

(statearr_24397[(14)] = inst_24219);

(statearr_24397[(16)] = inst_24222);

(statearr_24397[(17)] = inst_24221);

return statearr_24397;
})();
var statearr_24398_24462 = state_24342__$1;
(statearr_24398_24462[(2)] = null);

(statearr_24398_24462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (11))){
var inst_24219 = (state_24342[(14)]);
var inst_24241 = (state_24342[(7)]);
var inst_24241__$1 = cljs.core.seq.call(null,inst_24219);
var state_24342__$1 = (function (){var statearr_24399 = state_24342;
(statearr_24399[(7)] = inst_24241__$1);

return statearr_24399;
})();
if(inst_24241__$1){
var statearr_24400_24463 = state_24342__$1;
(statearr_24400_24463[(1)] = (16));

} else {
var statearr_24401_24464 = state_24342__$1;
(statearr_24401_24464[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (9))){
var inst_24271 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24402_24465 = state_24342__$1;
(statearr_24402_24465[(2)] = inst_24271);

(statearr_24402_24465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (5))){
var inst_24217 = cljs.core.deref.call(null,cs);
var inst_24218 = cljs.core.seq.call(null,inst_24217);
var inst_24219 = inst_24218;
var inst_24220 = null;
var inst_24221 = (0);
var inst_24222 = (0);
var state_24342__$1 = (function (){var statearr_24403 = state_24342;
(statearr_24403[(13)] = inst_24220);

(statearr_24403[(14)] = inst_24219);

(statearr_24403[(16)] = inst_24222);

(statearr_24403[(17)] = inst_24221);

return statearr_24403;
})();
var statearr_24404_24466 = state_24342__$1;
(statearr_24404_24466[(2)] = null);

(statearr_24404_24466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (14))){
var state_24342__$1 = state_24342;
var statearr_24405_24467 = state_24342__$1;
(statearr_24405_24467[(2)] = null);

(statearr_24405_24467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (45))){
var inst_24332 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24406_24468 = state_24342__$1;
(statearr_24406_24468[(2)] = inst_24332);

(statearr_24406_24468[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (26))){
var inst_24274 = (state_24342[(29)]);
var inst_24328 = (state_24342[(2)]);
var inst_24329 = cljs.core.seq.call(null,inst_24274);
var state_24342__$1 = (function (){var statearr_24407 = state_24342;
(statearr_24407[(31)] = inst_24328);

return statearr_24407;
})();
if(inst_24329){
var statearr_24408_24469 = state_24342__$1;
(statearr_24408_24469[(1)] = (42));

} else {
var statearr_24409_24470 = state_24342__$1;
(statearr_24409_24470[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (16))){
var inst_24241 = (state_24342[(7)]);
var inst_24243 = cljs.core.chunked_seq_QMARK_.call(null,inst_24241);
var state_24342__$1 = state_24342;
if(inst_24243){
var statearr_24410_24471 = state_24342__$1;
(statearr_24410_24471[(1)] = (19));

} else {
var statearr_24411_24472 = state_24342__$1;
(statearr_24411_24472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (38))){
var inst_24321 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24412_24473 = state_24342__$1;
(statearr_24412_24473[(2)] = inst_24321);

(statearr_24412_24473[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (30))){
var state_24342__$1 = state_24342;
var statearr_24413_24474 = state_24342__$1;
(statearr_24413_24474[(2)] = null);

(statearr_24413_24474[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (10))){
var inst_24220 = (state_24342[(13)]);
var inst_24222 = (state_24342[(16)]);
var inst_24230 = cljs.core._nth.call(null,inst_24220,inst_24222);
var inst_24231 = cljs.core.nth.call(null,inst_24230,(0),null);
var inst_24232 = cljs.core.nth.call(null,inst_24230,(1),null);
var state_24342__$1 = (function (){var statearr_24414 = state_24342;
(statearr_24414[(26)] = inst_24231);

return statearr_24414;
})();
if(cljs.core.truth_(inst_24232)){
var statearr_24415_24475 = state_24342__$1;
(statearr_24415_24475[(1)] = (13));

} else {
var statearr_24416_24476 = state_24342__$1;
(statearr_24416_24476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (18))){
var inst_24267 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24417_24477 = state_24342__$1;
(statearr_24417_24477[(2)] = inst_24267);

(statearr_24417_24477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (42))){
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24342__$1,(45),dchan);
} else {
if((state_val_24343 === (37))){
var inst_24301 = (state_24342[(25)]);
var inst_24210 = (state_24342[(11)]);
var inst_24310 = (state_24342[(23)]);
var inst_24310__$1 = cljs.core.first.call(null,inst_24301);
var inst_24311 = cljs.core.async.put_BANG_.call(null,inst_24310__$1,inst_24210,done);
var state_24342__$1 = (function (){var statearr_24418 = state_24342;
(statearr_24418[(23)] = inst_24310__$1);

return statearr_24418;
})();
if(cljs.core.truth_(inst_24311)){
var statearr_24419_24478 = state_24342__$1;
(statearr_24419_24478[(1)] = (39));

} else {
var statearr_24420_24479 = state_24342__$1;
(statearr_24420_24479[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (8))){
var inst_24222 = (state_24342[(16)]);
var inst_24221 = (state_24342[(17)]);
var inst_24224 = (inst_24222 < inst_24221);
var inst_24225 = inst_24224;
var state_24342__$1 = state_24342;
if(cljs.core.truth_(inst_24225)){
var statearr_24421_24480 = state_24342__$1;
(statearr_24421_24480[(1)] = (10));

} else {
var statearr_24422_24481 = state_24342__$1;
(statearr_24422_24481[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__23514__auto__ = null;
var cljs$core$async$mult_$_state_machine__23514__auto____0 = (function (){
var statearr_24423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24423[(0)] = cljs$core$async$mult_$_state_machine__23514__auto__);

(statearr_24423[(1)] = (1));

return statearr_24423;
});
var cljs$core$async$mult_$_state_machine__23514__auto____1 = (function (state_24342){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e24424){if((e24424 instanceof Object)){
var ex__23517__auto__ = e24424;
var statearr_24425_24482 = state_24342;
(statearr_24425_24482[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24483 = state_24342;
state_24342 = G__24483;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23514__auto__ = function(state_24342){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23514__auto____1.call(this,state_24342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23514__auto____0;
cljs$core$async$mult_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23514__auto____1;
return cljs$core$async$mult_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_24426 = f__23609__auto__.call(null);
(statearr_24426[(6)] = c__23608__auto___24427);

return statearr_24426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24485 = arguments.length;
switch (G__24485) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___24497 = arguments.length;
var i__4790__auto___24498 = (0);
while(true){
if((i__4790__auto___24498 < len__4789__auto___24497)){
args__4795__auto__.push((arguments[i__4790__auto___24498]));

var G__24499 = (i__4790__auto___24498 + (1));
i__4790__auto___24498 = G__24499;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24491){
var map__24492 = p__24491;
var map__24492__$1 = (((((!((map__24492 == null))))?(((((map__24492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24492):map__24492);
var opts = map__24492__$1;
var statearr_24494_24500 = state;
(statearr_24494_24500[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_24495_24501 = state;
(statearr_24495_24501[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24496_24502 = state;
(statearr_24496_24502[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24487){
var G__24488 = cljs.core.first.call(null,seq24487);
var seq24487__$1 = cljs.core.next.call(null,seq24487);
var G__24489 = cljs.core.first.call(null,seq24487__$1);
var seq24487__$2 = cljs.core.next.call(null,seq24487__$1);
var G__24490 = cljs.core.first.call(null,seq24487__$2);
var seq24487__$3 = cljs.core.next.call(null,seq24487__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24488,G__24489,G__24490,seq24487__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24503 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24504){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24504 = meta24504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24505,meta24504__$1){
var self__ = this;
var _24505__$1 = this;
return (new cljs.core.async.t_cljs$core$async24503(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24504__$1));
}));

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24505){
var self__ = this;
var _24505__$1 = this;
return self__.meta24504;
}));

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24503.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async24503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24504","meta24504",1505794464,null)], null);
}));

(cljs.core.async.t_cljs$core$async24503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24503");

(cljs.core.async.t_cljs$core$async24503.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24503.
 */
cljs.core.async.__GT_t_cljs$core$async24503 = (function cljs$core$async$mix_$___GT_t_cljs$core$async24503(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24504){
return (new cljs.core.async.t_cljs$core$async24503(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24504));
});

}

return (new cljs.core.async.t_cljs$core$async24503(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23608__auto___24667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24607){
var state_val_24608 = (state_24607[(1)]);
if((state_val_24608 === (7))){
var inst_24522 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24609_24668 = state_24607__$1;
(statearr_24609_24668[(2)] = inst_24522);

(statearr_24609_24668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (20))){
var inst_24534 = (state_24607[(7)]);
var state_24607__$1 = state_24607;
var statearr_24610_24669 = state_24607__$1;
(statearr_24610_24669[(2)] = inst_24534);

(statearr_24610_24669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (27))){
var state_24607__$1 = state_24607;
var statearr_24611_24670 = state_24607__$1;
(statearr_24611_24670[(2)] = null);

(statearr_24611_24670[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (1))){
var inst_24509 = (state_24607[(8)]);
var inst_24509__$1 = calc_state.call(null);
var inst_24511 = (inst_24509__$1 == null);
var inst_24512 = cljs.core.not.call(null,inst_24511);
var state_24607__$1 = (function (){var statearr_24612 = state_24607;
(statearr_24612[(8)] = inst_24509__$1);

return statearr_24612;
})();
if(inst_24512){
var statearr_24613_24671 = state_24607__$1;
(statearr_24613_24671[(1)] = (2));

} else {
var statearr_24614_24672 = state_24607__$1;
(statearr_24614_24672[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (24))){
var inst_24581 = (state_24607[(9)]);
var inst_24567 = (state_24607[(10)]);
var inst_24558 = (state_24607[(11)]);
var inst_24581__$1 = inst_24558.call(null,inst_24567);
var state_24607__$1 = (function (){var statearr_24615 = state_24607;
(statearr_24615[(9)] = inst_24581__$1);

return statearr_24615;
})();
if(cljs.core.truth_(inst_24581__$1)){
var statearr_24616_24673 = state_24607__$1;
(statearr_24616_24673[(1)] = (29));

} else {
var statearr_24617_24674 = state_24607__$1;
(statearr_24617_24674[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (4))){
var inst_24525 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24525)){
var statearr_24618_24675 = state_24607__$1;
(statearr_24618_24675[(1)] = (8));

} else {
var statearr_24619_24676 = state_24607__$1;
(statearr_24619_24676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (15))){
var inst_24552 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24552)){
var statearr_24620_24677 = state_24607__$1;
(statearr_24620_24677[(1)] = (19));

} else {
var statearr_24621_24678 = state_24607__$1;
(statearr_24621_24678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (21))){
var inst_24557 = (state_24607[(12)]);
var inst_24557__$1 = (state_24607[(2)]);
var inst_24558 = cljs.core.get.call(null,inst_24557__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24559 = cljs.core.get.call(null,inst_24557__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24560 = cljs.core.get.call(null,inst_24557__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24607__$1 = (function (){var statearr_24622 = state_24607;
(statearr_24622[(11)] = inst_24558);

(statearr_24622[(12)] = inst_24557__$1);

(statearr_24622[(13)] = inst_24559);

return statearr_24622;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24607__$1,(22),inst_24560);
} else {
if((state_val_24608 === (31))){
var inst_24589 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24589)){
var statearr_24623_24679 = state_24607__$1;
(statearr_24623_24679[(1)] = (32));

} else {
var statearr_24624_24680 = state_24607__$1;
(statearr_24624_24680[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (32))){
var inst_24566 = (state_24607[(14)]);
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24607__$1,(35),out,inst_24566);
} else {
if((state_val_24608 === (33))){
var inst_24557 = (state_24607[(12)]);
var inst_24534 = inst_24557;
var state_24607__$1 = (function (){var statearr_24625 = state_24607;
(statearr_24625[(7)] = inst_24534);

return statearr_24625;
})();
var statearr_24626_24681 = state_24607__$1;
(statearr_24626_24681[(2)] = null);

(statearr_24626_24681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (13))){
var inst_24534 = (state_24607[(7)]);
var inst_24541 = inst_24534.cljs$lang$protocol_mask$partition0$;
var inst_24542 = (inst_24541 & (64));
var inst_24543 = inst_24534.cljs$core$ISeq$;
var inst_24544 = (cljs.core.PROTOCOL_SENTINEL === inst_24543);
var inst_24545 = ((inst_24542) || (inst_24544));
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24545)){
var statearr_24627_24682 = state_24607__$1;
(statearr_24627_24682[(1)] = (16));

} else {
var statearr_24628_24683 = state_24607__$1;
(statearr_24628_24683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (22))){
var inst_24567 = (state_24607[(10)]);
var inst_24566 = (state_24607[(14)]);
var inst_24565 = (state_24607[(2)]);
var inst_24566__$1 = cljs.core.nth.call(null,inst_24565,(0),null);
var inst_24567__$1 = cljs.core.nth.call(null,inst_24565,(1),null);
var inst_24568 = (inst_24566__$1 == null);
var inst_24569 = cljs.core._EQ_.call(null,inst_24567__$1,change);
var inst_24570 = ((inst_24568) || (inst_24569));
var state_24607__$1 = (function (){var statearr_24629 = state_24607;
(statearr_24629[(10)] = inst_24567__$1);

(statearr_24629[(14)] = inst_24566__$1);

return statearr_24629;
})();
if(cljs.core.truth_(inst_24570)){
var statearr_24630_24684 = state_24607__$1;
(statearr_24630_24684[(1)] = (23));

} else {
var statearr_24631_24685 = state_24607__$1;
(statearr_24631_24685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (36))){
var inst_24557 = (state_24607[(12)]);
var inst_24534 = inst_24557;
var state_24607__$1 = (function (){var statearr_24632 = state_24607;
(statearr_24632[(7)] = inst_24534);

return statearr_24632;
})();
var statearr_24633_24686 = state_24607__$1;
(statearr_24633_24686[(2)] = null);

(statearr_24633_24686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (29))){
var inst_24581 = (state_24607[(9)]);
var state_24607__$1 = state_24607;
var statearr_24634_24687 = state_24607__$1;
(statearr_24634_24687[(2)] = inst_24581);

(statearr_24634_24687[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (6))){
var state_24607__$1 = state_24607;
var statearr_24635_24688 = state_24607__$1;
(statearr_24635_24688[(2)] = false);

(statearr_24635_24688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (28))){
var inst_24577 = (state_24607[(2)]);
var inst_24578 = calc_state.call(null);
var inst_24534 = inst_24578;
var state_24607__$1 = (function (){var statearr_24636 = state_24607;
(statearr_24636[(15)] = inst_24577);

(statearr_24636[(7)] = inst_24534);

return statearr_24636;
})();
var statearr_24637_24689 = state_24607__$1;
(statearr_24637_24689[(2)] = null);

(statearr_24637_24689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (25))){
var inst_24603 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24638_24690 = state_24607__$1;
(statearr_24638_24690[(2)] = inst_24603);

(statearr_24638_24690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (34))){
var inst_24601 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24639_24691 = state_24607__$1;
(statearr_24639_24691[(2)] = inst_24601);

(statearr_24639_24691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (17))){
var state_24607__$1 = state_24607;
var statearr_24640_24692 = state_24607__$1;
(statearr_24640_24692[(2)] = false);

(statearr_24640_24692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (3))){
var state_24607__$1 = state_24607;
var statearr_24641_24693 = state_24607__$1;
(statearr_24641_24693[(2)] = false);

(statearr_24641_24693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (12))){
var inst_24605 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24607__$1,inst_24605);
} else {
if((state_val_24608 === (2))){
var inst_24509 = (state_24607[(8)]);
var inst_24514 = inst_24509.cljs$lang$protocol_mask$partition0$;
var inst_24515 = (inst_24514 & (64));
var inst_24516 = inst_24509.cljs$core$ISeq$;
var inst_24517 = (cljs.core.PROTOCOL_SENTINEL === inst_24516);
var inst_24518 = ((inst_24515) || (inst_24517));
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24518)){
var statearr_24642_24694 = state_24607__$1;
(statearr_24642_24694[(1)] = (5));

} else {
var statearr_24643_24695 = state_24607__$1;
(statearr_24643_24695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (23))){
var inst_24566 = (state_24607[(14)]);
var inst_24572 = (inst_24566 == null);
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24572)){
var statearr_24644_24696 = state_24607__$1;
(statearr_24644_24696[(1)] = (26));

} else {
var statearr_24645_24697 = state_24607__$1;
(statearr_24645_24697[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (35))){
var inst_24592 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
if(cljs.core.truth_(inst_24592)){
var statearr_24646_24698 = state_24607__$1;
(statearr_24646_24698[(1)] = (36));

} else {
var statearr_24647_24699 = state_24607__$1;
(statearr_24647_24699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (19))){
var inst_24534 = (state_24607[(7)]);
var inst_24554 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24534);
var state_24607__$1 = state_24607;
var statearr_24648_24700 = state_24607__$1;
(statearr_24648_24700[(2)] = inst_24554);

(statearr_24648_24700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (11))){
var inst_24534 = (state_24607[(7)]);
var inst_24538 = (inst_24534 == null);
var inst_24539 = cljs.core.not.call(null,inst_24538);
var state_24607__$1 = state_24607;
if(inst_24539){
var statearr_24649_24701 = state_24607__$1;
(statearr_24649_24701[(1)] = (13));

} else {
var statearr_24650_24702 = state_24607__$1;
(statearr_24650_24702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (9))){
var inst_24509 = (state_24607[(8)]);
var state_24607__$1 = state_24607;
var statearr_24651_24703 = state_24607__$1;
(statearr_24651_24703[(2)] = inst_24509);

(statearr_24651_24703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (5))){
var state_24607__$1 = state_24607;
var statearr_24652_24704 = state_24607__$1;
(statearr_24652_24704[(2)] = true);

(statearr_24652_24704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (14))){
var state_24607__$1 = state_24607;
var statearr_24653_24705 = state_24607__$1;
(statearr_24653_24705[(2)] = false);

(statearr_24653_24705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (26))){
var inst_24567 = (state_24607[(10)]);
var inst_24574 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24567);
var state_24607__$1 = state_24607;
var statearr_24654_24706 = state_24607__$1;
(statearr_24654_24706[(2)] = inst_24574);

(statearr_24654_24706[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (16))){
var state_24607__$1 = state_24607;
var statearr_24655_24707 = state_24607__$1;
(statearr_24655_24707[(2)] = true);

(statearr_24655_24707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (38))){
var inst_24597 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24656_24708 = state_24607__$1;
(statearr_24656_24708[(2)] = inst_24597);

(statearr_24656_24708[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (30))){
var inst_24567 = (state_24607[(10)]);
var inst_24558 = (state_24607[(11)]);
var inst_24559 = (state_24607[(13)]);
var inst_24584 = cljs.core.empty_QMARK_.call(null,inst_24558);
var inst_24585 = inst_24559.call(null,inst_24567);
var inst_24586 = cljs.core.not.call(null,inst_24585);
var inst_24587 = ((inst_24584) && (inst_24586));
var state_24607__$1 = state_24607;
var statearr_24657_24709 = state_24607__$1;
(statearr_24657_24709[(2)] = inst_24587);

(statearr_24657_24709[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (10))){
var inst_24509 = (state_24607[(8)]);
var inst_24530 = (state_24607[(2)]);
var inst_24531 = cljs.core.get.call(null,inst_24530,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24532 = cljs.core.get.call(null,inst_24530,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24533 = cljs.core.get.call(null,inst_24530,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24534 = inst_24509;
var state_24607__$1 = (function (){var statearr_24658 = state_24607;
(statearr_24658[(16)] = inst_24531);

(statearr_24658[(17)] = inst_24532);

(statearr_24658[(7)] = inst_24534);

(statearr_24658[(18)] = inst_24533);

return statearr_24658;
})();
var statearr_24659_24710 = state_24607__$1;
(statearr_24659_24710[(2)] = null);

(statearr_24659_24710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (18))){
var inst_24549 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24660_24711 = state_24607__$1;
(statearr_24660_24711[(2)] = inst_24549);

(statearr_24660_24711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (37))){
var state_24607__$1 = state_24607;
var statearr_24661_24712 = state_24607__$1;
(statearr_24661_24712[(2)] = null);

(statearr_24661_24712[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (8))){
var inst_24509 = (state_24607[(8)]);
var inst_24527 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24509);
var state_24607__$1 = state_24607;
var statearr_24662_24713 = state_24607__$1;
(statearr_24662_24713[(2)] = inst_24527);

(statearr_24662_24713[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__23514__auto__ = null;
var cljs$core$async$mix_$_state_machine__23514__auto____0 = (function (){
var statearr_24663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24663[(0)] = cljs$core$async$mix_$_state_machine__23514__auto__);

(statearr_24663[(1)] = (1));

return statearr_24663;
});
var cljs$core$async$mix_$_state_machine__23514__auto____1 = (function (state_24607){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e24664){if((e24664 instanceof Object)){
var ex__23517__auto__ = e24664;
var statearr_24665_24714 = state_24607;
(statearr_24665_24714[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24715 = state_24607;
state_24607 = G__24715;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23514__auto__ = function(state_24607){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23514__auto____1.call(this,state_24607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23514__auto____0;
cljs$core$async$mix_$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23514__auto____1;
return cljs$core$async$mix_$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_24666 = f__23609__auto__.call(null);
(statearr_24666[(6)] = c__23608__auto___24667);

return statearr_24666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24717 = arguments.length;
switch (G__24717) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24721 = arguments.length;
switch (G__24721) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__24719_SHARP_){
if(cljs.core.truth_(p1__24719_SHARP_.call(null,topic))){
return p1__24719_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24719_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24722 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24723){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24723 = meta24723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24724,meta24723__$1){
var self__ = this;
var _24724__$1 = this;
return (new cljs.core.async.t_cljs$core$async24722(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24723__$1));
}));

(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24724){
var self__ = this;
var _24724__$1 = this;
return self__.meta24723;
}));

(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24722.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24723","meta24723",38318593,null)], null);
}));

(cljs.core.async.t_cljs$core$async24722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24722");

(cljs.core.async.t_cljs$core$async24722.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24722.
 */
cljs.core.async.__GT_t_cljs$core$async24722 = (function cljs$core$async$__GT_t_cljs$core$async24722(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24723){
return (new cljs.core.async.t_cljs$core$async24722(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24723));
});

}

return (new cljs.core.async.t_cljs$core$async24722(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23608__auto___24842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24796){
var state_val_24797 = (state_24796[(1)]);
if((state_val_24797 === (7))){
var inst_24792 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24798_24843 = state_24796__$1;
(statearr_24798_24843[(2)] = inst_24792);

(statearr_24798_24843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (20))){
var state_24796__$1 = state_24796;
var statearr_24799_24844 = state_24796__$1;
(statearr_24799_24844[(2)] = null);

(statearr_24799_24844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (1))){
var state_24796__$1 = state_24796;
var statearr_24800_24845 = state_24796__$1;
(statearr_24800_24845[(2)] = null);

(statearr_24800_24845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (24))){
var inst_24775 = (state_24796[(7)]);
var inst_24784 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24775);
var state_24796__$1 = state_24796;
var statearr_24801_24846 = state_24796__$1;
(statearr_24801_24846[(2)] = inst_24784);

(statearr_24801_24846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (4))){
var inst_24727 = (state_24796[(8)]);
var inst_24727__$1 = (state_24796[(2)]);
var inst_24728 = (inst_24727__$1 == null);
var state_24796__$1 = (function (){var statearr_24802 = state_24796;
(statearr_24802[(8)] = inst_24727__$1);

return statearr_24802;
})();
if(cljs.core.truth_(inst_24728)){
var statearr_24803_24847 = state_24796__$1;
(statearr_24803_24847[(1)] = (5));

} else {
var statearr_24804_24848 = state_24796__$1;
(statearr_24804_24848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (15))){
var inst_24769 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24805_24849 = state_24796__$1;
(statearr_24805_24849[(2)] = inst_24769);

(statearr_24805_24849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (21))){
var inst_24789 = (state_24796[(2)]);
var state_24796__$1 = (function (){var statearr_24806 = state_24796;
(statearr_24806[(9)] = inst_24789);

return statearr_24806;
})();
var statearr_24807_24850 = state_24796__$1;
(statearr_24807_24850[(2)] = null);

(statearr_24807_24850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (13))){
var inst_24751 = (state_24796[(10)]);
var inst_24753 = cljs.core.chunked_seq_QMARK_.call(null,inst_24751);
var state_24796__$1 = state_24796;
if(inst_24753){
var statearr_24808_24851 = state_24796__$1;
(statearr_24808_24851[(1)] = (16));

} else {
var statearr_24809_24852 = state_24796__$1;
(statearr_24809_24852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (22))){
var inst_24781 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
if(cljs.core.truth_(inst_24781)){
var statearr_24810_24853 = state_24796__$1;
(statearr_24810_24853[(1)] = (23));

} else {
var statearr_24811_24854 = state_24796__$1;
(statearr_24811_24854[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (6))){
var inst_24777 = (state_24796[(11)]);
var inst_24775 = (state_24796[(7)]);
var inst_24727 = (state_24796[(8)]);
var inst_24775__$1 = topic_fn.call(null,inst_24727);
var inst_24776 = cljs.core.deref.call(null,mults);
var inst_24777__$1 = cljs.core.get.call(null,inst_24776,inst_24775__$1);
var state_24796__$1 = (function (){var statearr_24812 = state_24796;
(statearr_24812[(11)] = inst_24777__$1);

(statearr_24812[(7)] = inst_24775__$1);

return statearr_24812;
})();
if(cljs.core.truth_(inst_24777__$1)){
var statearr_24813_24855 = state_24796__$1;
(statearr_24813_24855[(1)] = (19));

} else {
var statearr_24814_24856 = state_24796__$1;
(statearr_24814_24856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (25))){
var inst_24786 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24815_24857 = state_24796__$1;
(statearr_24815_24857[(2)] = inst_24786);

(statearr_24815_24857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (17))){
var inst_24751 = (state_24796[(10)]);
var inst_24760 = cljs.core.first.call(null,inst_24751);
var inst_24761 = cljs.core.async.muxch_STAR_.call(null,inst_24760);
var inst_24762 = cljs.core.async.close_BANG_.call(null,inst_24761);
var inst_24763 = cljs.core.next.call(null,inst_24751);
var inst_24737 = inst_24763;
var inst_24738 = null;
var inst_24739 = (0);
var inst_24740 = (0);
var state_24796__$1 = (function (){var statearr_24816 = state_24796;
(statearr_24816[(12)] = inst_24738);

(statearr_24816[(13)] = inst_24762);

(statearr_24816[(14)] = inst_24737);

(statearr_24816[(15)] = inst_24739);

(statearr_24816[(16)] = inst_24740);

return statearr_24816;
})();
var statearr_24817_24858 = state_24796__$1;
(statearr_24817_24858[(2)] = null);

(statearr_24817_24858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (3))){
var inst_24794 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24796__$1,inst_24794);
} else {
if((state_val_24797 === (12))){
var inst_24771 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24818_24859 = state_24796__$1;
(statearr_24818_24859[(2)] = inst_24771);

(statearr_24818_24859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (2))){
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24796__$1,(4),ch);
} else {
if((state_val_24797 === (23))){
var state_24796__$1 = state_24796;
var statearr_24819_24860 = state_24796__$1;
(statearr_24819_24860[(2)] = null);

(statearr_24819_24860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (19))){
var inst_24777 = (state_24796[(11)]);
var inst_24727 = (state_24796[(8)]);
var inst_24779 = cljs.core.async.muxch_STAR_.call(null,inst_24777);
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24796__$1,(22),inst_24779,inst_24727);
} else {
if((state_val_24797 === (11))){
var inst_24751 = (state_24796[(10)]);
var inst_24737 = (state_24796[(14)]);
var inst_24751__$1 = cljs.core.seq.call(null,inst_24737);
var state_24796__$1 = (function (){var statearr_24820 = state_24796;
(statearr_24820[(10)] = inst_24751__$1);

return statearr_24820;
})();
if(inst_24751__$1){
var statearr_24821_24861 = state_24796__$1;
(statearr_24821_24861[(1)] = (13));

} else {
var statearr_24822_24862 = state_24796__$1;
(statearr_24822_24862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (9))){
var inst_24773 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24823_24863 = state_24796__$1;
(statearr_24823_24863[(2)] = inst_24773);

(statearr_24823_24863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (5))){
var inst_24734 = cljs.core.deref.call(null,mults);
var inst_24735 = cljs.core.vals.call(null,inst_24734);
var inst_24736 = cljs.core.seq.call(null,inst_24735);
var inst_24737 = inst_24736;
var inst_24738 = null;
var inst_24739 = (0);
var inst_24740 = (0);
var state_24796__$1 = (function (){var statearr_24824 = state_24796;
(statearr_24824[(12)] = inst_24738);

(statearr_24824[(14)] = inst_24737);

(statearr_24824[(15)] = inst_24739);

(statearr_24824[(16)] = inst_24740);

return statearr_24824;
})();
var statearr_24825_24864 = state_24796__$1;
(statearr_24825_24864[(2)] = null);

(statearr_24825_24864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (14))){
var state_24796__$1 = state_24796;
var statearr_24829_24865 = state_24796__$1;
(statearr_24829_24865[(2)] = null);

(statearr_24829_24865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (16))){
var inst_24751 = (state_24796[(10)]);
var inst_24755 = cljs.core.chunk_first.call(null,inst_24751);
var inst_24756 = cljs.core.chunk_rest.call(null,inst_24751);
var inst_24757 = cljs.core.count.call(null,inst_24755);
var inst_24737 = inst_24756;
var inst_24738 = inst_24755;
var inst_24739 = inst_24757;
var inst_24740 = (0);
var state_24796__$1 = (function (){var statearr_24830 = state_24796;
(statearr_24830[(12)] = inst_24738);

(statearr_24830[(14)] = inst_24737);

(statearr_24830[(15)] = inst_24739);

(statearr_24830[(16)] = inst_24740);

return statearr_24830;
})();
var statearr_24831_24866 = state_24796__$1;
(statearr_24831_24866[(2)] = null);

(statearr_24831_24866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (10))){
var inst_24738 = (state_24796[(12)]);
var inst_24737 = (state_24796[(14)]);
var inst_24739 = (state_24796[(15)]);
var inst_24740 = (state_24796[(16)]);
var inst_24745 = cljs.core._nth.call(null,inst_24738,inst_24740);
var inst_24746 = cljs.core.async.muxch_STAR_.call(null,inst_24745);
var inst_24747 = cljs.core.async.close_BANG_.call(null,inst_24746);
var inst_24748 = (inst_24740 + (1));
var tmp24826 = inst_24738;
var tmp24827 = inst_24737;
var tmp24828 = inst_24739;
var inst_24737__$1 = tmp24827;
var inst_24738__$1 = tmp24826;
var inst_24739__$1 = tmp24828;
var inst_24740__$1 = inst_24748;
var state_24796__$1 = (function (){var statearr_24832 = state_24796;
(statearr_24832[(17)] = inst_24747);

(statearr_24832[(12)] = inst_24738__$1);

(statearr_24832[(14)] = inst_24737__$1);

(statearr_24832[(15)] = inst_24739__$1);

(statearr_24832[(16)] = inst_24740__$1);

return statearr_24832;
})();
var statearr_24833_24867 = state_24796__$1;
(statearr_24833_24867[(2)] = null);

(statearr_24833_24867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (18))){
var inst_24766 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24834_24868 = state_24796__$1;
(statearr_24834_24868[(2)] = inst_24766);

(statearr_24834_24868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (8))){
var inst_24739 = (state_24796[(15)]);
var inst_24740 = (state_24796[(16)]);
var inst_24742 = (inst_24740 < inst_24739);
var inst_24743 = inst_24742;
var state_24796__$1 = state_24796;
if(cljs.core.truth_(inst_24743)){
var statearr_24835_24869 = state_24796__$1;
(statearr_24835_24869[(1)] = (10));

} else {
var statearr_24836_24870 = state_24796__$1;
(statearr_24836_24870[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_24837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24837[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_24837[(1)] = (1));

return statearr_24837;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_24796){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e24838){if((e24838 instanceof Object)){
var ex__23517__auto__ = e24838;
var statearr_24839_24871 = state_24796;
(statearr_24839_24871[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24872 = state_24796;
state_24796 = G__24872;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_24796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_24796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_24840 = f__23609__auto__.call(null);
(statearr_24840[(6)] = c__23608__auto___24842);

return statearr_24840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24874 = arguments.length;
switch (G__24874) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24877 = arguments.length;
switch (G__24877) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24880 = arguments.length;
switch (G__24880) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__23608__auto___24947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24919){
var state_val_24920 = (state_24919[(1)]);
if((state_val_24920 === (7))){
var state_24919__$1 = state_24919;
var statearr_24921_24948 = state_24919__$1;
(statearr_24921_24948[(2)] = null);

(statearr_24921_24948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (1))){
var state_24919__$1 = state_24919;
var statearr_24922_24949 = state_24919__$1;
(statearr_24922_24949[(2)] = null);

(statearr_24922_24949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (4))){
var inst_24883 = (state_24919[(7)]);
var inst_24885 = (inst_24883 < cnt);
var state_24919__$1 = state_24919;
if(cljs.core.truth_(inst_24885)){
var statearr_24923_24950 = state_24919__$1;
(statearr_24923_24950[(1)] = (6));

} else {
var statearr_24924_24951 = state_24919__$1;
(statearr_24924_24951[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (15))){
var inst_24915 = (state_24919[(2)]);
var state_24919__$1 = state_24919;
var statearr_24925_24952 = state_24919__$1;
(statearr_24925_24952[(2)] = inst_24915);

(statearr_24925_24952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (13))){
var inst_24908 = cljs.core.async.close_BANG_.call(null,out);
var state_24919__$1 = state_24919;
var statearr_24926_24953 = state_24919__$1;
(statearr_24926_24953[(2)] = inst_24908);

(statearr_24926_24953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (6))){
var state_24919__$1 = state_24919;
var statearr_24927_24954 = state_24919__$1;
(statearr_24927_24954[(2)] = null);

(statearr_24927_24954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (3))){
var inst_24917 = (state_24919[(2)]);
var state_24919__$1 = state_24919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24919__$1,inst_24917);
} else {
if((state_val_24920 === (12))){
var inst_24905 = (state_24919[(8)]);
var inst_24905__$1 = (state_24919[(2)]);
var inst_24906 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24905__$1);
var state_24919__$1 = (function (){var statearr_24928 = state_24919;
(statearr_24928[(8)] = inst_24905__$1);

return statearr_24928;
})();
if(cljs.core.truth_(inst_24906)){
var statearr_24929_24955 = state_24919__$1;
(statearr_24929_24955[(1)] = (13));

} else {
var statearr_24930_24956 = state_24919__$1;
(statearr_24930_24956[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (2))){
var inst_24882 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24883 = (0);
var state_24919__$1 = (function (){var statearr_24931 = state_24919;
(statearr_24931[(9)] = inst_24882);

(statearr_24931[(7)] = inst_24883);

return statearr_24931;
})();
var statearr_24932_24957 = state_24919__$1;
(statearr_24932_24957[(2)] = null);

(statearr_24932_24957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (11))){
var inst_24883 = (state_24919[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24919,(10),Object,null,(9));
var inst_24892 = chs__$1.call(null,inst_24883);
var inst_24893 = done.call(null,inst_24883);
var inst_24894 = cljs.core.async.take_BANG_.call(null,inst_24892,inst_24893);
var state_24919__$1 = state_24919;
var statearr_24933_24958 = state_24919__$1;
(statearr_24933_24958[(2)] = inst_24894);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24919__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (9))){
var inst_24883 = (state_24919[(7)]);
var inst_24896 = (state_24919[(2)]);
var inst_24897 = (inst_24883 + (1));
var inst_24883__$1 = inst_24897;
var state_24919__$1 = (function (){var statearr_24934 = state_24919;
(statearr_24934[(10)] = inst_24896);

(statearr_24934[(7)] = inst_24883__$1);

return statearr_24934;
})();
var statearr_24935_24959 = state_24919__$1;
(statearr_24935_24959[(2)] = null);

(statearr_24935_24959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (5))){
var inst_24903 = (state_24919[(2)]);
var state_24919__$1 = (function (){var statearr_24936 = state_24919;
(statearr_24936[(11)] = inst_24903);

return statearr_24936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24919__$1,(12),dchan);
} else {
if((state_val_24920 === (14))){
var inst_24905 = (state_24919[(8)]);
var inst_24910 = cljs.core.apply.call(null,f,inst_24905);
var state_24919__$1 = state_24919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24919__$1,(16),out,inst_24910);
} else {
if((state_val_24920 === (16))){
var inst_24912 = (state_24919[(2)]);
var state_24919__$1 = (function (){var statearr_24937 = state_24919;
(statearr_24937[(12)] = inst_24912);

return statearr_24937;
})();
var statearr_24938_24960 = state_24919__$1;
(statearr_24938_24960[(2)] = null);

(statearr_24938_24960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (10))){
var inst_24887 = (state_24919[(2)]);
var inst_24888 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24919__$1 = (function (){var statearr_24939 = state_24919;
(statearr_24939[(13)] = inst_24887);

return statearr_24939;
})();
var statearr_24940_24961 = state_24919__$1;
(statearr_24940_24961[(2)] = inst_24888);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24919__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24920 === (8))){
var inst_24901 = (state_24919[(2)]);
var state_24919__$1 = state_24919;
var statearr_24941_24962 = state_24919__$1;
(statearr_24941_24962[(2)] = inst_24901);

(statearr_24941_24962[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_24942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24942[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_24942[(1)] = (1));

return statearr_24942;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_24919){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e24943){if((e24943 instanceof Object)){
var ex__23517__auto__ = e24943;
var statearr_24944_24963 = state_24919;
(statearr_24944_24963[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24964 = state_24919;
state_24919 = G__24964;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_24919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_24919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_24945 = f__23609__auto__.call(null);
(statearr_24945[(6)] = c__23608__auto___24947);

return statearr_24945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24967 = arguments.length;
switch (G__24967) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_24999){
var state_val_25000 = (state_24999[(1)]);
if((state_val_25000 === (7))){
var inst_24979 = (state_24999[(7)]);
var inst_24978 = (state_24999[(8)]);
var inst_24978__$1 = (state_24999[(2)]);
var inst_24979__$1 = cljs.core.nth.call(null,inst_24978__$1,(0),null);
var inst_24980 = cljs.core.nth.call(null,inst_24978__$1,(1),null);
var inst_24981 = (inst_24979__$1 == null);
var state_24999__$1 = (function (){var statearr_25001 = state_24999;
(statearr_25001[(7)] = inst_24979__$1);

(statearr_25001[(9)] = inst_24980);

(statearr_25001[(8)] = inst_24978__$1);

return statearr_25001;
})();
if(cljs.core.truth_(inst_24981)){
var statearr_25002_25022 = state_24999__$1;
(statearr_25002_25022[(1)] = (8));

} else {
var statearr_25003_25023 = state_24999__$1;
(statearr_25003_25023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (1))){
var inst_24968 = cljs.core.vec.call(null,chs);
var inst_24969 = inst_24968;
var state_24999__$1 = (function (){var statearr_25004 = state_24999;
(statearr_25004[(10)] = inst_24969);

return statearr_25004;
})();
var statearr_25005_25024 = state_24999__$1;
(statearr_25005_25024[(2)] = null);

(statearr_25005_25024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (4))){
var inst_24969 = (state_24999[(10)]);
var state_24999__$1 = state_24999;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24999__$1,(7),inst_24969);
} else {
if((state_val_25000 === (6))){
var inst_24995 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25006_25025 = state_24999__$1;
(statearr_25006_25025[(2)] = inst_24995);

(statearr_25006_25025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (3))){
var inst_24997 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24999__$1,inst_24997);
} else {
if((state_val_25000 === (2))){
var inst_24969 = (state_24999[(10)]);
var inst_24971 = cljs.core.count.call(null,inst_24969);
var inst_24972 = (inst_24971 > (0));
var state_24999__$1 = state_24999;
if(cljs.core.truth_(inst_24972)){
var statearr_25008_25026 = state_24999__$1;
(statearr_25008_25026[(1)] = (4));

} else {
var statearr_25009_25027 = state_24999__$1;
(statearr_25009_25027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (11))){
var inst_24969 = (state_24999[(10)]);
var inst_24988 = (state_24999[(2)]);
var tmp25007 = inst_24969;
var inst_24969__$1 = tmp25007;
var state_24999__$1 = (function (){var statearr_25010 = state_24999;
(statearr_25010[(10)] = inst_24969__$1);

(statearr_25010[(11)] = inst_24988);

return statearr_25010;
})();
var statearr_25011_25028 = state_24999__$1;
(statearr_25011_25028[(2)] = null);

(statearr_25011_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (9))){
var inst_24979 = (state_24999[(7)]);
var state_24999__$1 = state_24999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24999__$1,(11),out,inst_24979);
} else {
if((state_val_25000 === (5))){
var inst_24993 = cljs.core.async.close_BANG_.call(null,out);
var state_24999__$1 = state_24999;
var statearr_25012_25029 = state_24999__$1;
(statearr_25012_25029[(2)] = inst_24993);

(statearr_25012_25029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (10))){
var inst_24991 = (state_24999[(2)]);
var state_24999__$1 = state_24999;
var statearr_25013_25030 = state_24999__$1;
(statearr_25013_25030[(2)] = inst_24991);

(statearr_25013_25030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25000 === (8))){
var inst_24979 = (state_24999[(7)]);
var inst_24969 = (state_24999[(10)]);
var inst_24980 = (state_24999[(9)]);
var inst_24978 = (state_24999[(8)]);
var inst_24983 = (function (){var cs = inst_24969;
var vec__24974 = inst_24978;
var v = inst_24979;
var c = inst_24980;
return (function (p1__24965_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24965_SHARP_);
});
})();
var inst_24984 = cljs.core.filterv.call(null,inst_24983,inst_24969);
var inst_24969__$1 = inst_24984;
var state_24999__$1 = (function (){var statearr_25014 = state_24999;
(statearr_25014[(10)] = inst_24969__$1);

return statearr_25014;
})();
var statearr_25015_25031 = state_24999__$1;
(statearr_25015_25031[(2)] = null);

(statearr_25015_25031[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_25016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25016[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_25016[(1)] = (1));

return statearr_25016;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_24999){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_24999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e25017){if((e25017 instanceof Object)){
var ex__23517__auto__ = e25017;
var statearr_25018_25032 = state_24999;
(statearr_25018_25032[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25033 = state_24999;
state_24999 = G__25033;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_24999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_24999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_25019 = f__23609__auto__.call(null);
(statearr_25019[(6)] = c__23608__auto___25021);

return statearr_25019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25035 = arguments.length;
switch (G__25035) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_25059){
var state_val_25060 = (state_25059[(1)]);
if((state_val_25060 === (7))){
var inst_25041 = (state_25059[(7)]);
var inst_25041__$1 = (state_25059[(2)]);
var inst_25042 = (inst_25041__$1 == null);
var inst_25043 = cljs.core.not.call(null,inst_25042);
var state_25059__$1 = (function (){var statearr_25061 = state_25059;
(statearr_25061[(7)] = inst_25041__$1);

return statearr_25061;
})();
if(inst_25043){
var statearr_25062_25081 = state_25059__$1;
(statearr_25062_25081[(1)] = (8));

} else {
var statearr_25063_25082 = state_25059__$1;
(statearr_25063_25082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (1))){
var inst_25036 = (0);
var state_25059__$1 = (function (){var statearr_25064 = state_25059;
(statearr_25064[(8)] = inst_25036);

return statearr_25064;
})();
var statearr_25065_25083 = state_25059__$1;
(statearr_25065_25083[(2)] = null);

(statearr_25065_25083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (4))){
var state_25059__$1 = state_25059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25059__$1,(7),ch);
} else {
if((state_val_25060 === (6))){
var inst_25054 = (state_25059[(2)]);
var state_25059__$1 = state_25059;
var statearr_25066_25084 = state_25059__$1;
(statearr_25066_25084[(2)] = inst_25054);

(statearr_25066_25084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (3))){
var inst_25056 = (state_25059[(2)]);
var inst_25057 = cljs.core.async.close_BANG_.call(null,out);
var state_25059__$1 = (function (){var statearr_25067 = state_25059;
(statearr_25067[(9)] = inst_25056);

return statearr_25067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25059__$1,inst_25057);
} else {
if((state_val_25060 === (2))){
var inst_25036 = (state_25059[(8)]);
var inst_25038 = (inst_25036 < n);
var state_25059__$1 = state_25059;
if(cljs.core.truth_(inst_25038)){
var statearr_25068_25085 = state_25059__$1;
(statearr_25068_25085[(1)] = (4));

} else {
var statearr_25069_25086 = state_25059__$1;
(statearr_25069_25086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (11))){
var inst_25036 = (state_25059[(8)]);
var inst_25046 = (state_25059[(2)]);
var inst_25047 = (inst_25036 + (1));
var inst_25036__$1 = inst_25047;
var state_25059__$1 = (function (){var statearr_25070 = state_25059;
(statearr_25070[(10)] = inst_25046);

(statearr_25070[(8)] = inst_25036__$1);

return statearr_25070;
})();
var statearr_25071_25087 = state_25059__$1;
(statearr_25071_25087[(2)] = null);

(statearr_25071_25087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (9))){
var state_25059__$1 = state_25059;
var statearr_25072_25088 = state_25059__$1;
(statearr_25072_25088[(2)] = null);

(statearr_25072_25088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (5))){
var state_25059__$1 = state_25059;
var statearr_25073_25089 = state_25059__$1;
(statearr_25073_25089[(2)] = null);

(statearr_25073_25089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (10))){
var inst_25051 = (state_25059[(2)]);
var state_25059__$1 = state_25059;
var statearr_25074_25090 = state_25059__$1;
(statearr_25074_25090[(2)] = inst_25051);

(statearr_25074_25090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (8))){
var inst_25041 = (state_25059[(7)]);
var state_25059__$1 = state_25059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25059__$1,(11),out,inst_25041);
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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_25075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25075[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_25075[(1)] = (1));

return statearr_25075;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_25059){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_25059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e25076){if((e25076 instanceof Object)){
var ex__23517__auto__ = e25076;
var statearr_25077_25091 = state_25059;
(statearr_25077_25091[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25092 = state_25059;
state_25059 = G__25092;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_25059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_25059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_25078 = f__23609__auto__.call(null);
(statearr_25078[(6)] = c__23608__auto___25080);

return statearr_25078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25094 = (function (f,ch,meta25095){
this.f = f;
this.ch = ch;
this.meta25095 = meta25095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25096,meta25095__$1){
var self__ = this;
var _25096__$1 = this;
return (new cljs.core.async.t_cljs$core$async25094(self__.f,self__.ch,meta25095__$1));
}));

(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25096){
var self__ = this;
var _25096__$1 = this;
return self__.meta25095;
}));

(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25097 = (function (f,ch,meta25095,_,fn1,meta25098){
this.f = f;
this.ch = ch;
this.meta25095 = meta25095;
this._ = _;
this.fn1 = fn1;
this.meta25098 = meta25098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25099,meta25098__$1){
var self__ = this;
var _25099__$1 = this;
return (new cljs.core.async.t_cljs$core$async25097(self__.f,self__.ch,self__.meta25095,self__._,self__.fn1,meta25098__$1));
}));

(cljs.core.async.t_cljs$core$async25097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25099){
var self__ = this;
var _25099__$1 = this;
return self__.meta25098;
}));

(cljs.core.async.t_cljs$core$async25097.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25097.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25093_SHARP_){
return f1.call(null,(((p1__25093_SHARP_ == null))?null:self__.f.call(null,p1__25093_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25095","meta25095",-603552230,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25094","cljs.core.async/t_cljs$core$async25094",397066060,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25098","meta25098",-2006572161,null)], null);
}));

(cljs.core.async.t_cljs$core$async25097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25097");

(cljs.core.async.t_cljs$core$async25097.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25097.
 */
cljs.core.async.__GT_t_cljs$core$async25097 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25097(f__$1,ch__$1,meta25095__$1,___$2,fn1__$1,meta25098){
return (new cljs.core.async.t_cljs$core$async25097(f__$1,ch__$1,meta25095__$1,___$2,fn1__$1,meta25098));
});

}

return (new cljs.core.async.t_cljs$core$async25097(self__.f,self__.ch,self__.meta25095,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25095","meta25095",-603552230,null)], null);
}));

(cljs.core.async.t_cljs$core$async25094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25094");

(cljs.core.async.t_cljs$core$async25094.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25094.
 */
cljs.core.async.__GT_t_cljs$core$async25094 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25094(f__$1,ch__$1,meta25095){
return (new cljs.core.async.t_cljs$core$async25094(f__$1,ch__$1,meta25095));
});

}

return (new cljs.core.async.t_cljs$core$async25094(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25100 = (function (f,ch,meta25101){
this.f = f;
this.ch = ch;
this.meta25101 = meta25101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25102,meta25101__$1){
var self__ = this;
var _25102__$1 = this;
return (new cljs.core.async.t_cljs$core$async25100(self__.f,self__.ch,meta25101__$1));
}));

(cljs.core.async.t_cljs$core$async25100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25102){
var self__ = this;
var _25102__$1 = this;
return self__.meta25101;
}));

(cljs.core.async.t_cljs$core$async25100.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25100.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25100.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25101","meta25101",1183296916,null)], null);
}));

(cljs.core.async.t_cljs$core$async25100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25100");

(cljs.core.async.t_cljs$core$async25100.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25100.
 */
cljs.core.async.__GT_t_cljs$core$async25100 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25100(f__$1,ch__$1,meta25101){
return (new cljs.core.async.t_cljs$core$async25100(f__$1,ch__$1,meta25101));
});

}

return (new cljs.core.async.t_cljs$core$async25100(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25103 = (function (p,ch,meta25104){
this.p = p;
this.ch = ch;
this.meta25104 = meta25104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25105,meta25104__$1){
var self__ = this;
var _25105__$1 = this;
return (new cljs.core.async.t_cljs$core$async25103(self__.p,self__.ch,meta25104__$1));
}));

(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25105){
var self__ = this;
var _25105__$1 = this;
return self__.meta25104;
}));

(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25104","meta25104",1859199118,null)], null);
}));

(cljs.core.async.t_cljs$core$async25103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25103");

(cljs.core.async.t_cljs$core$async25103.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async25103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25103.
 */
cljs.core.async.__GT_t_cljs$core$async25103 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25103(p__$1,ch__$1,meta25104){
return (new cljs.core.async.t_cljs$core$async25103(p__$1,ch__$1,meta25104));
});

}

return (new cljs.core.async.t_cljs$core$async25103(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25107 = arguments.length;
switch (G__25107) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_25128){
var state_val_25129 = (state_25128[(1)]);
if((state_val_25129 === (7))){
var inst_25124 = (state_25128[(2)]);
var state_25128__$1 = state_25128;
var statearr_25130_25148 = state_25128__$1;
(statearr_25130_25148[(2)] = inst_25124);

(statearr_25130_25148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25129 === (1))){
var state_25128__$1 = state_25128;
var statearr_25131_25149 = state_25128__$1;
(statearr_25131_25149[(2)] = null);

(statearr_25131_25149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25129 === (4))){
var inst_25110 = (state_25128[(7)]);
var inst_25110__$1 = (state_25128[(2)]);
var inst_25111 = (inst_25110__$1 == null);
var state_25128__$1 = (function (){var statearr_25132 = state_25128;
(statearr_25132[(7)] = inst_25110__$1);

return statearr_25132;
})();
if(cljs.core.truth_(inst_25111)){
var statearr_25133_25150 = state_25128__$1;
(statearr_25133_25150[(1)] = (5));

} else {
var statearr_25134_25151 = state_25128__$1;
(statearr_25134_25151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25129 === (6))){
var inst_25110 = (state_25128[(7)]);
var inst_25115 = p.call(null,inst_25110);
var state_25128__$1 = state_25128;
if(cljs.core.truth_(inst_25115)){
var statearr_25135_25152 = state_25128__$1;
(statearr_25135_25152[(1)] = (8));

} else {
var statearr_25136_25153 = state_25128__$1;
(statearr_25136_25153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25129 === (3))){
var inst_25126 = (state_25128[(2)]);
var state_25128__$1 = state_25128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25128__$1,inst_25126);
} else {
if((state_val_25129 === (2))){
var state_25128__$1 = state_25128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25128__$1,(4),ch);
} else {
if((state_val_25129 === (11))){
var inst_25118 = (state_25128[(2)]);
var state_25128__$1 = state_25128;
var statearr_25137_25154 = state_25128__$1;
(statearr_25137_25154[(2)] = inst_25118);

(statearr_25137_25154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25129 === (9))){
var state_25128__$1 = state_25128;
var statearr_25138_25155 = state_25128__$1;
(statearr_25138_25155[(2)] = null);

(statearr_25138_25155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25129 === (5))){
var inst_25113 = cljs.core.async.close_BANG_.call(null,out);
var state_25128__$1 = state_25128;
var statearr_25139_25156 = state_25128__$1;
(statearr_25139_25156[(2)] = inst_25113);

(statearr_25139_25156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25129 === (10))){
var inst_25121 = (state_25128[(2)]);
var state_25128__$1 = (function (){var statearr_25140 = state_25128;
(statearr_25140[(8)] = inst_25121);

return statearr_25140;
})();
var statearr_25141_25157 = state_25128__$1;
(statearr_25141_25157[(2)] = null);

(statearr_25141_25157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25129 === (8))){
var inst_25110 = (state_25128[(7)]);
var state_25128__$1 = state_25128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25128__$1,(11),out,inst_25110);
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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_25142 = [null,null,null,null,null,null,null,null,null];
(statearr_25142[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_25142[(1)] = (1));

return statearr_25142;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_25128){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_25128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e25143){if((e25143 instanceof Object)){
var ex__23517__auto__ = e25143;
var statearr_25144_25158 = state_25128;
(statearr_25144_25158[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25159 = state_25128;
state_25128 = G__25159;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_25128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_25128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_25145 = f__23609__auto__.call(null);
(statearr_25145[(6)] = c__23608__auto___25147);

return statearr_25145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25161 = arguments.length;
switch (G__25161) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_25224){
var state_val_25225 = (state_25224[(1)]);
if((state_val_25225 === (7))){
var inst_25220 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25226_25264 = state_25224__$1;
(statearr_25226_25264[(2)] = inst_25220);

(statearr_25226_25264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (20))){
var inst_25190 = (state_25224[(7)]);
var inst_25201 = (state_25224[(2)]);
var inst_25202 = cljs.core.next.call(null,inst_25190);
var inst_25176 = inst_25202;
var inst_25177 = null;
var inst_25178 = (0);
var inst_25179 = (0);
var state_25224__$1 = (function (){var statearr_25227 = state_25224;
(statearr_25227[(8)] = inst_25201);

(statearr_25227[(9)] = inst_25178);

(statearr_25227[(10)] = inst_25177);

(statearr_25227[(11)] = inst_25179);

(statearr_25227[(12)] = inst_25176);

return statearr_25227;
})();
var statearr_25228_25265 = state_25224__$1;
(statearr_25228_25265[(2)] = null);

(statearr_25228_25265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (1))){
var state_25224__$1 = state_25224;
var statearr_25229_25266 = state_25224__$1;
(statearr_25229_25266[(2)] = null);

(statearr_25229_25266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (4))){
var inst_25165 = (state_25224[(13)]);
var inst_25165__$1 = (state_25224[(2)]);
var inst_25166 = (inst_25165__$1 == null);
var state_25224__$1 = (function (){var statearr_25230 = state_25224;
(statearr_25230[(13)] = inst_25165__$1);

return statearr_25230;
})();
if(cljs.core.truth_(inst_25166)){
var statearr_25231_25267 = state_25224__$1;
(statearr_25231_25267[(1)] = (5));

} else {
var statearr_25232_25268 = state_25224__$1;
(statearr_25232_25268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (15))){
var state_25224__$1 = state_25224;
var statearr_25236_25269 = state_25224__$1;
(statearr_25236_25269[(2)] = null);

(statearr_25236_25269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (21))){
var state_25224__$1 = state_25224;
var statearr_25237_25270 = state_25224__$1;
(statearr_25237_25270[(2)] = null);

(statearr_25237_25270[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (13))){
var inst_25178 = (state_25224[(9)]);
var inst_25177 = (state_25224[(10)]);
var inst_25179 = (state_25224[(11)]);
var inst_25176 = (state_25224[(12)]);
var inst_25186 = (state_25224[(2)]);
var inst_25187 = (inst_25179 + (1));
var tmp25233 = inst_25178;
var tmp25234 = inst_25177;
var tmp25235 = inst_25176;
var inst_25176__$1 = tmp25235;
var inst_25177__$1 = tmp25234;
var inst_25178__$1 = tmp25233;
var inst_25179__$1 = inst_25187;
var state_25224__$1 = (function (){var statearr_25238 = state_25224;
(statearr_25238[(14)] = inst_25186);

(statearr_25238[(9)] = inst_25178__$1);

(statearr_25238[(10)] = inst_25177__$1);

(statearr_25238[(11)] = inst_25179__$1);

(statearr_25238[(12)] = inst_25176__$1);

return statearr_25238;
})();
var statearr_25239_25271 = state_25224__$1;
(statearr_25239_25271[(2)] = null);

(statearr_25239_25271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (22))){
var state_25224__$1 = state_25224;
var statearr_25240_25272 = state_25224__$1;
(statearr_25240_25272[(2)] = null);

(statearr_25240_25272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (6))){
var inst_25165 = (state_25224[(13)]);
var inst_25174 = f.call(null,inst_25165);
var inst_25175 = cljs.core.seq.call(null,inst_25174);
var inst_25176 = inst_25175;
var inst_25177 = null;
var inst_25178 = (0);
var inst_25179 = (0);
var state_25224__$1 = (function (){var statearr_25241 = state_25224;
(statearr_25241[(9)] = inst_25178);

(statearr_25241[(10)] = inst_25177);

(statearr_25241[(11)] = inst_25179);

(statearr_25241[(12)] = inst_25176);

return statearr_25241;
})();
var statearr_25242_25273 = state_25224__$1;
(statearr_25242_25273[(2)] = null);

(statearr_25242_25273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (17))){
var inst_25190 = (state_25224[(7)]);
var inst_25194 = cljs.core.chunk_first.call(null,inst_25190);
var inst_25195 = cljs.core.chunk_rest.call(null,inst_25190);
var inst_25196 = cljs.core.count.call(null,inst_25194);
var inst_25176 = inst_25195;
var inst_25177 = inst_25194;
var inst_25178 = inst_25196;
var inst_25179 = (0);
var state_25224__$1 = (function (){var statearr_25243 = state_25224;
(statearr_25243[(9)] = inst_25178);

(statearr_25243[(10)] = inst_25177);

(statearr_25243[(11)] = inst_25179);

(statearr_25243[(12)] = inst_25176);

return statearr_25243;
})();
var statearr_25244_25274 = state_25224__$1;
(statearr_25244_25274[(2)] = null);

(statearr_25244_25274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (3))){
var inst_25222 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25224__$1,inst_25222);
} else {
if((state_val_25225 === (12))){
var inst_25210 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25245_25275 = state_25224__$1;
(statearr_25245_25275[(2)] = inst_25210);

(statearr_25245_25275[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (2))){
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25224__$1,(4),in$);
} else {
if((state_val_25225 === (23))){
var inst_25218 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25246_25276 = state_25224__$1;
(statearr_25246_25276[(2)] = inst_25218);

(statearr_25246_25276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (19))){
var inst_25205 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25247_25277 = state_25224__$1;
(statearr_25247_25277[(2)] = inst_25205);

(statearr_25247_25277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (11))){
var inst_25190 = (state_25224[(7)]);
var inst_25176 = (state_25224[(12)]);
var inst_25190__$1 = cljs.core.seq.call(null,inst_25176);
var state_25224__$1 = (function (){var statearr_25248 = state_25224;
(statearr_25248[(7)] = inst_25190__$1);

return statearr_25248;
})();
if(inst_25190__$1){
var statearr_25249_25278 = state_25224__$1;
(statearr_25249_25278[(1)] = (14));

} else {
var statearr_25250_25279 = state_25224__$1;
(statearr_25250_25279[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (9))){
var inst_25212 = (state_25224[(2)]);
var inst_25213 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25224__$1 = (function (){var statearr_25251 = state_25224;
(statearr_25251[(15)] = inst_25212);

return statearr_25251;
})();
if(cljs.core.truth_(inst_25213)){
var statearr_25252_25280 = state_25224__$1;
(statearr_25252_25280[(1)] = (21));

} else {
var statearr_25253_25281 = state_25224__$1;
(statearr_25253_25281[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (5))){
var inst_25168 = cljs.core.async.close_BANG_.call(null,out);
var state_25224__$1 = state_25224;
var statearr_25254_25282 = state_25224__$1;
(statearr_25254_25282[(2)] = inst_25168);

(statearr_25254_25282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (14))){
var inst_25190 = (state_25224[(7)]);
var inst_25192 = cljs.core.chunked_seq_QMARK_.call(null,inst_25190);
var state_25224__$1 = state_25224;
if(inst_25192){
var statearr_25255_25283 = state_25224__$1;
(statearr_25255_25283[(1)] = (17));

} else {
var statearr_25256_25284 = state_25224__$1;
(statearr_25256_25284[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (16))){
var inst_25208 = (state_25224[(2)]);
var state_25224__$1 = state_25224;
var statearr_25257_25285 = state_25224__$1;
(statearr_25257_25285[(2)] = inst_25208);

(statearr_25257_25285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25225 === (10))){
var inst_25177 = (state_25224[(10)]);
var inst_25179 = (state_25224[(11)]);
var inst_25184 = cljs.core._nth.call(null,inst_25177,inst_25179);
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25224__$1,(13),out,inst_25184);
} else {
if((state_val_25225 === (18))){
var inst_25190 = (state_25224[(7)]);
var inst_25199 = cljs.core.first.call(null,inst_25190);
var state_25224__$1 = state_25224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25224__$1,(20),out,inst_25199);
} else {
if((state_val_25225 === (8))){
var inst_25178 = (state_25224[(9)]);
var inst_25179 = (state_25224[(11)]);
var inst_25181 = (inst_25179 < inst_25178);
var inst_25182 = inst_25181;
var state_25224__$1 = state_25224;
if(cljs.core.truth_(inst_25182)){
var statearr_25258_25286 = state_25224__$1;
(statearr_25258_25286[(1)] = (10));

} else {
var statearr_25259_25287 = state_25224__$1;
(statearr_25259_25287[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23514__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23514__auto____0 = (function (){
var statearr_25260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25260[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23514__auto__);

(statearr_25260[(1)] = (1));

return statearr_25260;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23514__auto____1 = (function (state_25224){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_25224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e25261){if((e25261 instanceof Object)){
var ex__23517__auto__ = e25261;
var statearr_25262_25288 = state_25224;
(statearr_25262_25288[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25289 = state_25224;
state_25224 = G__25289;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23514__auto__ = function(state_25224){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23514__auto____1.call(this,state_25224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23514__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23514__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_25263 = f__23609__auto__.call(null);
(statearr_25263[(6)] = c__23608__auto__);

return statearr_25263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));

return c__23608__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25291 = arguments.length;
switch (G__25291) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25294 = arguments.length;
switch (G__25294) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25297 = arguments.length;
switch (G__25297) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_25321){
var state_val_25322 = (state_25321[(1)]);
if((state_val_25322 === (7))){
var inst_25316 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25323_25345 = state_25321__$1;
(statearr_25323_25345[(2)] = inst_25316);

(statearr_25323_25345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (1))){
var inst_25298 = null;
var state_25321__$1 = (function (){var statearr_25324 = state_25321;
(statearr_25324[(7)] = inst_25298);

return statearr_25324;
})();
var statearr_25325_25346 = state_25321__$1;
(statearr_25325_25346[(2)] = null);

(statearr_25325_25346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (4))){
var inst_25301 = (state_25321[(8)]);
var inst_25301__$1 = (state_25321[(2)]);
var inst_25302 = (inst_25301__$1 == null);
var inst_25303 = cljs.core.not.call(null,inst_25302);
var state_25321__$1 = (function (){var statearr_25326 = state_25321;
(statearr_25326[(8)] = inst_25301__$1);

return statearr_25326;
})();
if(inst_25303){
var statearr_25327_25347 = state_25321__$1;
(statearr_25327_25347[(1)] = (5));

} else {
var statearr_25328_25348 = state_25321__$1;
(statearr_25328_25348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (6))){
var state_25321__$1 = state_25321;
var statearr_25329_25349 = state_25321__$1;
(statearr_25329_25349[(2)] = null);

(statearr_25329_25349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (3))){
var inst_25318 = (state_25321[(2)]);
var inst_25319 = cljs.core.async.close_BANG_.call(null,out);
var state_25321__$1 = (function (){var statearr_25330 = state_25321;
(statearr_25330[(9)] = inst_25318);

return statearr_25330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25321__$1,inst_25319);
} else {
if((state_val_25322 === (2))){
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(4),ch);
} else {
if((state_val_25322 === (11))){
var inst_25301 = (state_25321[(8)]);
var inst_25310 = (state_25321[(2)]);
var inst_25298 = inst_25301;
var state_25321__$1 = (function (){var statearr_25331 = state_25321;
(statearr_25331[(7)] = inst_25298);

(statearr_25331[(10)] = inst_25310);

return statearr_25331;
})();
var statearr_25332_25350 = state_25321__$1;
(statearr_25332_25350[(2)] = null);

(statearr_25332_25350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (9))){
var inst_25301 = (state_25321[(8)]);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25321__$1,(11),out,inst_25301);
} else {
if((state_val_25322 === (5))){
var inst_25301 = (state_25321[(8)]);
var inst_25298 = (state_25321[(7)]);
var inst_25305 = cljs.core._EQ_.call(null,inst_25301,inst_25298);
var state_25321__$1 = state_25321;
if(inst_25305){
var statearr_25334_25351 = state_25321__$1;
(statearr_25334_25351[(1)] = (8));

} else {
var statearr_25335_25352 = state_25321__$1;
(statearr_25335_25352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (10))){
var inst_25313 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25336_25353 = state_25321__$1;
(statearr_25336_25353[(2)] = inst_25313);

(statearr_25336_25353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (8))){
var inst_25298 = (state_25321[(7)]);
var tmp25333 = inst_25298;
var inst_25298__$1 = tmp25333;
var state_25321__$1 = (function (){var statearr_25337 = state_25321;
(statearr_25337[(7)] = inst_25298__$1);

return statearr_25337;
})();
var statearr_25338_25354 = state_25321__$1;
(statearr_25338_25354[(2)] = null);

(statearr_25338_25354[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_25339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25339[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_25339[(1)] = (1));

return statearr_25339;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_25321){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_25321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e25340){if((e25340 instanceof Object)){
var ex__23517__auto__ = e25340;
var statearr_25341_25355 = state_25321;
(statearr_25341_25355[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25356 = state_25321;
state_25321 = G__25356;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_25321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_25321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_25342 = f__23609__auto__.call(null);
(statearr_25342[(6)] = c__23608__auto___25344);

return statearr_25342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25358 = arguments.length;
switch (G__25358) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_25396){
var state_val_25397 = (state_25396[(1)]);
if((state_val_25397 === (7))){
var inst_25392 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25398_25425 = state_25396__$1;
(statearr_25398_25425[(2)] = inst_25392);

(statearr_25398_25425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (1))){
var inst_25359 = (new Array(n));
var inst_25360 = inst_25359;
var inst_25361 = (0);
var state_25396__$1 = (function (){var statearr_25399 = state_25396;
(statearr_25399[(7)] = inst_25360);

(statearr_25399[(8)] = inst_25361);

return statearr_25399;
})();
var statearr_25400_25426 = state_25396__$1;
(statearr_25400_25426[(2)] = null);

(statearr_25400_25426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (4))){
var inst_25364 = (state_25396[(9)]);
var inst_25364__$1 = (state_25396[(2)]);
var inst_25365 = (inst_25364__$1 == null);
var inst_25366 = cljs.core.not.call(null,inst_25365);
var state_25396__$1 = (function (){var statearr_25401 = state_25396;
(statearr_25401[(9)] = inst_25364__$1);

return statearr_25401;
})();
if(inst_25366){
var statearr_25402_25427 = state_25396__$1;
(statearr_25402_25427[(1)] = (5));

} else {
var statearr_25403_25428 = state_25396__$1;
(statearr_25403_25428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (15))){
var inst_25386 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25404_25429 = state_25396__$1;
(statearr_25404_25429[(2)] = inst_25386);

(statearr_25404_25429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (13))){
var state_25396__$1 = state_25396;
var statearr_25405_25430 = state_25396__$1;
(statearr_25405_25430[(2)] = null);

(statearr_25405_25430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (6))){
var inst_25361 = (state_25396[(8)]);
var inst_25382 = (inst_25361 > (0));
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25382)){
var statearr_25406_25431 = state_25396__$1;
(statearr_25406_25431[(1)] = (12));

} else {
var statearr_25407_25432 = state_25396__$1;
(statearr_25407_25432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (3))){
var inst_25394 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25396__$1,inst_25394);
} else {
if((state_val_25397 === (12))){
var inst_25360 = (state_25396[(7)]);
var inst_25384 = cljs.core.vec.call(null,inst_25360);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25396__$1,(15),out,inst_25384);
} else {
if((state_val_25397 === (2))){
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(4),ch);
} else {
if((state_val_25397 === (11))){
var inst_25376 = (state_25396[(2)]);
var inst_25377 = (new Array(n));
var inst_25360 = inst_25377;
var inst_25361 = (0);
var state_25396__$1 = (function (){var statearr_25408 = state_25396;
(statearr_25408[(10)] = inst_25376);

(statearr_25408[(7)] = inst_25360);

(statearr_25408[(8)] = inst_25361);

return statearr_25408;
})();
var statearr_25409_25433 = state_25396__$1;
(statearr_25409_25433[(2)] = null);

(statearr_25409_25433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (9))){
var inst_25360 = (state_25396[(7)]);
var inst_25374 = cljs.core.vec.call(null,inst_25360);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25396__$1,(11),out,inst_25374);
} else {
if((state_val_25397 === (5))){
var inst_25364 = (state_25396[(9)]);
var inst_25360 = (state_25396[(7)]);
var inst_25361 = (state_25396[(8)]);
var inst_25369 = (state_25396[(11)]);
var inst_25368 = (inst_25360[inst_25361] = inst_25364);
var inst_25369__$1 = (inst_25361 + (1));
var inst_25370 = (inst_25369__$1 < n);
var state_25396__$1 = (function (){var statearr_25410 = state_25396;
(statearr_25410[(11)] = inst_25369__$1);

(statearr_25410[(12)] = inst_25368);

return statearr_25410;
})();
if(cljs.core.truth_(inst_25370)){
var statearr_25411_25434 = state_25396__$1;
(statearr_25411_25434[(1)] = (8));

} else {
var statearr_25412_25435 = state_25396__$1;
(statearr_25412_25435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (14))){
var inst_25389 = (state_25396[(2)]);
var inst_25390 = cljs.core.async.close_BANG_.call(null,out);
var state_25396__$1 = (function (){var statearr_25414 = state_25396;
(statearr_25414[(13)] = inst_25389);

return statearr_25414;
})();
var statearr_25415_25436 = state_25396__$1;
(statearr_25415_25436[(2)] = inst_25390);

(statearr_25415_25436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (10))){
var inst_25380 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25416_25437 = state_25396__$1;
(statearr_25416_25437[(2)] = inst_25380);

(statearr_25416_25437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (8))){
var inst_25360 = (state_25396[(7)]);
var inst_25369 = (state_25396[(11)]);
var tmp25413 = inst_25360;
var inst_25360__$1 = tmp25413;
var inst_25361 = inst_25369;
var state_25396__$1 = (function (){var statearr_25417 = state_25396;
(statearr_25417[(7)] = inst_25360__$1);

(statearr_25417[(8)] = inst_25361);

return statearr_25417;
})();
var statearr_25418_25438 = state_25396__$1;
(statearr_25418_25438[(2)] = null);

(statearr_25418_25438[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_25419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25419[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_25419[(1)] = (1));

return statearr_25419;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_25396){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_25396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e25420){if((e25420 instanceof Object)){
var ex__23517__auto__ = e25420;
var statearr_25421_25439 = state_25396;
(statearr_25421_25439[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25440 = state_25396;
state_25396 = G__25440;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_25396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_25396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_25422 = f__23609__auto__.call(null);
(statearr_25422[(6)] = c__23608__auto___25424);

return statearr_25422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25442 = arguments.length;
switch (G__25442) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23608__auto___25512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23609__auto__ = (function (){var switch__23513__auto__ = (function (state_25484){
var state_val_25485 = (state_25484[(1)]);
if((state_val_25485 === (7))){
var inst_25480 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25486_25513 = state_25484__$1;
(statearr_25486_25513[(2)] = inst_25480);

(statearr_25486_25513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (1))){
var inst_25443 = [];
var inst_25444 = inst_25443;
var inst_25445 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25484__$1 = (function (){var statearr_25487 = state_25484;
(statearr_25487[(7)] = inst_25445);

(statearr_25487[(8)] = inst_25444);

return statearr_25487;
})();
var statearr_25488_25514 = state_25484__$1;
(statearr_25488_25514[(2)] = null);

(statearr_25488_25514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (4))){
var inst_25448 = (state_25484[(9)]);
var inst_25448__$1 = (state_25484[(2)]);
var inst_25449 = (inst_25448__$1 == null);
var inst_25450 = cljs.core.not.call(null,inst_25449);
var state_25484__$1 = (function (){var statearr_25489 = state_25484;
(statearr_25489[(9)] = inst_25448__$1);

return statearr_25489;
})();
if(inst_25450){
var statearr_25490_25515 = state_25484__$1;
(statearr_25490_25515[(1)] = (5));

} else {
var statearr_25491_25516 = state_25484__$1;
(statearr_25491_25516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (15))){
var inst_25474 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25492_25517 = state_25484__$1;
(statearr_25492_25517[(2)] = inst_25474);

(statearr_25492_25517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (13))){
var state_25484__$1 = state_25484;
var statearr_25493_25518 = state_25484__$1;
(statearr_25493_25518[(2)] = null);

(statearr_25493_25518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (6))){
var inst_25444 = (state_25484[(8)]);
var inst_25469 = inst_25444.length;
var inst_25470 = (inst_25469 > (0));
var state_25484__$1 = state_25484;
if(cljs.core.truth_(inst_25470)){
var statearr_25494_25519 = state_25484__$1;
(statearr_25494_25519[(1)] = (12));

} else {
var statearr_25495_25520 = state_25484__$1;
(statearr_25495_25520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (3))){
var inst_25482 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25484__$1,inst_25482);
} else {
if((state_val_25485 === (12))){
var inst_25444 = (state_25484[(8)]);
var inst_25472 = cljs.core.vec.call(null,inst_25444);
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25484__$1,(15),out,inst_25472);
} else {
if((state_val_25485 === (2))){
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25484__$1,(4),ch);
} else {
if((state_val_25485 === (11))){
var inst_25448 = (state_25484[(9)]);
var inst_25452 = (state_25484[(10)]);
var inst_25462 = (state_25484[(2)]);
var inst_25463 = [];
var inst_25464 = inst_25463.push(inst_25448);
var inst_25444 = inst_25463;
var inst_25445 = inst_25452;
var state_25484__$1 = (function (){var statearr_25496 = state_25484;
(statearr_25496[(7)] = inst_25445);

(statearr_25496[(11)] = inst_25462);

(statearr_25496[(12)] = inst_25464);

(statearr_25496[(8)] = inst_25444);

return statearr_25496;
})();
var statearr_25497_25521 = state_25484__$1;
(statearr_25497_25521[(2)] = null);

(statearr_25497_25521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (9))){
var inst_25444 = (state_25484[(8)]);
var inst_25460 = cljs.core.vec.call(null,inst_25444);
var state_25484__$1 = state_25484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25484__$1,(11),out,inst_25460);
} else {
if((state_val_25485 === (5))){
var inst_25448 = (state_25484[(9)]);
var inst_25445 = (state_25484[(7)]);
var inst_25452 = (state_25484[(10)]);
var inst_25452__$1 = f.call(null,inst_25448);
var inst_25453 = cljs.core._EQ_.call(null,inst_25452__$1,inst_25445);
var inst_25454 = cljs.core.keyword_identical_QMARK_.call(null,inst_25445,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25455 = ((inst_25453) || (inst_25454));
var state_25484__$1 = (function (){var statearr_25498 = state_25484;
(statearr_25498[(10)] = inst_25452__$1);

return statearr_25498;
})();
if(cljs.core.truth_(inst_25455)){
var statearr_25499_25522 = state_25484__$1;
(statearr_25499_25522[(1)] = (8));

} else {
var statearr_25500_25523 = state_25484__$1;
(statearr_25500_25523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (14))){
var inst_25477 = (state_25484[(2)]);
var inst_25478 = cljs.core.async.close_BANG_.call(null,out);
var state_25484__$1 = (function (){var statearr_25502 = state_25484;
(statearr_25502[(13)] = inst_25477);

return statearr_25502;
})();
var statearr_25503_25524 = state_25484__$1;
(statearr_25503_25524[(2)] = inst_25478);

(statearr_25503_25524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (10))){
var inst_25467 = (state_25484[(2)]);
var state_25484__$1 = state_25484;
var statearr_25504_25525 = state_25484__$1;
(statearr_25504_25525[(2)] = inst_25467);

(statearr_25504_25525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25485 === (8))){
var inst_25448 = (state_25484[(9)]);
var inst_25452 = (state_25484[(10)]);
var inst_25444 = (state_25484[(8)]);
var inst_25457 = inst_25444.push(inst_25448);
var tmp25501 = inst_25444;
var inst_25444__$1 = tmp25501;
var inst_25445 = inst_25452;
var state_25484__$1 = (function (){var statearr_25505 = state_25484;
(statearr_25505[(7)] = inst_25445);

(statearr_25505[(8)] = inst_25444__$1);

(statearr_25505[(14)] = inst_25457);

return statearr_25505;
})();
var statearr_25506_25526 = state_25484__$1;
(statearr_25506_25526[(2)] = null);

(statearr_25506_25526[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__23514__auto__ = null;
var cljs$core$async$state_machine__23514__auto____0 = (function (){
var statearr_25507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25507[(0)] = cljs$core$async$state_machine__23514__auto__);

(statearr_25507[(1)] = (1));

return statearr_25507;
});
var cljs$core$async$state_machine__23514__auto____1 = (function (state_25484){
while(true){
var ret_value__23515__auto__ = (function (){try{while(true){
var result__23516__auto__ = switch__23513__auto__.call(null,state_25484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23516__auto__;
}
break;
}
}catch (e25508){if((e25508 instanceof Object)){
var ex__23517__auto__ = e25508;
var statearr_25509_25527 = state_25484;
(statearr_25509_25527[(5)] = ex__23517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25528 = state_25484;
state_25484 = G__25528;
continue;
} else {
return ret_value__23515__auto__;
}
break;
}
});
cljs$core$async$state_machine__23514__auto__ = function(state_25484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23514__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23514__auto____1.call(this,state_25484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23514__auto____0;
cljs$core$async$state_machine__23514__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23514__auto____1;
return cljs$core$async$state_machine__23514__auto__;
})()
})();
var state__23610__auto__ = (function (){var statearr_25510 = f__23609__auto__.call(null);
(statearr_25510[(6)] = c__23608__auto___25512);

return statearr_25510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23610__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1580245070276
