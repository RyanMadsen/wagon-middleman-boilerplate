/*!
 * VERSION: 1.5
 * DATE: 2015-08-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var o=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(o,e,r){return this._tween=r,!0}}),e=function(o){for(;o;)o.f||o.blob||(o.r=1),o=o._next},r=o.prototype;r._onInitAllProps=function(){for(var o,r,n,t=this._tween,p=t.vars.roundProps.join?t.vars.roundProps:t.vars.roundProps.split(","),s=p.length,_={},i=t._propLookup.roundProps;--s>-1;)_[p[s]]=1;for(s=p.length;--s>-1;)for(o=p[s],r=t._firstPT;r;)n=r._next,r.pg?r.t._roundProps(_,!0):r.n===o&&(2===r.f&&r.t?e(r.t._firstPT):(this._add(r.t,o,r.s,r.c),n&&(n._prev=r._prev),r._prev?r._prev._next=n:t._firstPT===r&&(t._firstPT=n),r._next=r._prev=null,t._propLookup[o]=i)),r=n;return!1},r._add=function(o,e,r,n){this._addTween(o,e,r,r+n,e,!0),this._overwriteProps.push(e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();