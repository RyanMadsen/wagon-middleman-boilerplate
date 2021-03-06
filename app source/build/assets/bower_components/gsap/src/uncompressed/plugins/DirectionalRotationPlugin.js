/*!
 * VERSION: beta 0.2.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(e,t,s){"object"!=typeof t&&(t={rotation:t}),this.finals={};var i,n,o,p,r,u,f=t.useRadians===!0?2*Math.PI:360,a=1e-6;for(i in t)"useRadians"!==i&&(u=(t[i]+"").split("_"),n=u[0],o=parseFloat("function"!=typeof e[i]?e[i]:e[i.indexOf("set")||"function"!=typeof e["get"+i.substr(3)]?i:"get"+i.substr(3)]()),p=this.finals[i]="string"==typeof n&&"="===n.charAt(1)?o+parseInt(n.charAt(0)+"1",10)*Number(n.substr(2)):Number(n)||0,r=p-o,u.length&&(n=u.join("_"),-1!==n.indexOf("short")&&(r%=f,r!==r%(f/2)&&(r=0>r?r+f:r-f)),-1!==n.indexOf("_cw")&&0>r?r=(r+9999999999*f)%f-(r/f|0)*f:-1!==n.indexOf("ccw")&&r>0&&(r=(r-9999999999*f)%f-(r/f|0)*f)),(r>a||-a>r)&&(this._addTween(e,i,o,o+r,i),this._overwriteProps.push(i)));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();