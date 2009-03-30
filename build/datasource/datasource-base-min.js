YUI.add("datasource-base",function(C){C.namespace("DataSource");var A=C.Lang,B=function(){B.superclass.constructor.apply(this,arguments);};C.mix(B,{NAME:"DataSource",ATTRS:{source:{value:null}},_tId:0,issueCallback:function(E){if(E.callback){var F=E.callback.scope||window,D=(E.error&&E.callback.failure)||E.callback.success;if(D){D.apply(F,[E]);}}}});C.extend(B,C.Base,{_queue:null,initializer:function(){this._queue={interval:null,conn:null,requests:[]};this._initEvents();},destructor:function(){},_initEvents:function(){this.publish("request",{defaultFn:this._handleRequest});this.publish("data",{defaultFn:this._handleData});this.publish("response",{defaultFn:this._handleResponse});},_handleRequest:function(E,F){var D=this.get("source");if(A.isUndefined(D)){F.error=true;}if(F.error){this.fire("error",null,F);}this.fire("data",null,C.mix(F,{data:D}));},_handleData:function(D,E){E.results=E.data;if(!E.results){E.results=[];}if(!E.meta){E.meta={};}this.fire("response",null,E);},_handleResponse:function(D,E){B.issueCallback(E);},sendRequest:function(D,F){var E=B._tId++;this.fire("request",null,{tId:E,request:D,callback:F});return E;}});C.DataSource=B;},"@VERSION@",{requires:["base"]});