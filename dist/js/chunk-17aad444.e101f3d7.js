(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17aad444"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"2b19":function(t,e,i){var n=i("23e7"),s=i("129f");n({target:"Object",stat:!0},{is:s})},"4ff9":function(t,e,i){},"621c":function(t,e,i){},"6c20":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex flex-column",staticStyle:{"min-height":"100%",height:"100%","user-select":"none"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"2"}},[i("v-btn",{staticStyle:{"touch-action":"manipulation"},attrs:{color:"cyan",small:""},on:{click:function(e){t.bpm--}}},[i("v-icon",{attrs:{color:"white"}},[t._v(" mdi-minus ")])],1)],1),i("v-col",{attrs:{cols:"3"}},[i("v-text-field",{attrs:{number:"","hide-details":""},model:{value:t.bpm,callback:function(e){t.bpm=e},expression:"bpm"}})],1),i("v-col",{attrs:{cols:"2"}},[i("v-btn",{staticStyle:{"touch-action":"manipulation"},attrs:{color:"cyan",small:""},on:{click:function(e){t.bpm++}}},[i("v-icon",{attrs:{color:"white"}},[t._v(" mdi-plus ")])],1)],1),i("v-col",{attrs:{cols:"5"}},[i("v-btn",{staticClass:"white--text",staticStyle:{"touch-action":"manipulation"},attrs:{color:"green",block:""},on:{mousedown:t.tap}},[t._v("TAP")])],1)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"4"}}),i("v-col",{attrs:{cols:"4"}}),i("v-col",{attrs:{cols:"4"}})],1),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"blink-container"},[i("div",{ref:"blinker",staticClass:"blinker"})])],1)},s=[],r=(i("d3b7"),i("159b"),i("4de4"),{name:"TempoTap",data:function(){return{clicksArray:[],bpm:0,differences:[],timeTaken:0,interval:null}},methods:{tap:function(){var t=this;this.clicksArray.length<6||this.clicksArray.shift(),this.clicksArray.push(Date.now()),this.differences=[],this.clicksArray.forEach((function(e,i){i<t.clicksArray.length-1&&t.differences.push(t.clicksArray[i+1]-t.clicksArray[i])})),this.timeTaken=this.differences.filter((function(t){return null!=t})).reduce((function(t,e){return t+e})),this.bpm=6e4/this.timeTaken*this.differences.length|0},flash:function(){var t=this;clearInterval(this.interval);var e=this.$refs.blinker,i=60/parseInt(this.bpm)*1e3|0,n=function n(){"none"==e.style.display?e.style.display="block":e.style.display="none";var r=Date.now()-s;s+=i,console.log(r),console.log(i-r),t.interval=setTimeout(n,i-r)},s=Date.now()+i;this.interval=setTimeout(n,i)}},watch:{bpm:function(t,e){console.log(t,e),t&&t>0&&this.flash()}}}),a=r,o=(i("ca09"),i("2877")),l=i("6544"),u=i.n(l),h=i("8336"),c=i("62ad"),d=i("ce7e"),f=i("132d"),p=i("0fd9"),v=i("15fd"),g=i("2909"),b=i("5530"),m=(i("a9e3"),i("0481"),i("4069"),i("25f0"),i("caad"),i("2b19"),i("4ff9"),i("c37a")),y=(i("99af"),i("e9b1"),i("7560")),$=i("58df"),x=Object($["a"])(y["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var i=e.props,n=parseInt(i.max,10),s=parseInt(i.value,10),r=n?"".concat(s," / ").concat(n):String(i.value),a=n&&s>n;return t("div",{staticClass:"v-counter",class:Object(b["a"])({"error--text":a},Object(y["b"])(e))},r)}}),V=x,S=i("ba87"),k=i("90a2"),_=i("d9bd"),B=i("2b0e");function C(t){return B["a"].extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){k["a"].inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){k["a"].unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(e,i,n){if(this.isIntersecting=n,n)for(var s=0,r=t.onVisible.length;s<r;s++){var a=this[t.onVisible[s]];"function"!==typeof a?Object(_["c"])(t.onVisible[s]+" method is not available on the instance but referenced in intersectable mixin options"):a()}}}})}var O=i("ade3"),w=(i("c7cd"),i("6ece"),i("0789")),I=i("a9ad"),j=i("fe6c"),z=i("a452"),W=i("80d2"),E=Object($["a"])(I["a"],Object(j["b"])(["absolute","fixed","top","bottom"]),z["a"],y["a"]),L=E.extend({name:"v-progress-linear",directives:{intersect:k["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(W["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(W["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(O["a"])(t,this.isReversed?"right":"left",Object(W["g"])(this.normalizedValue,"%")),Object(O["a"])(t,"width",Object(W["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(b["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?w["c"]:w["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(W["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(W["m"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(O["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},onObserve:function(t,e,i){this.isVisible=i},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(W["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),F=L,P=B["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(F,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),D=i("38cb"),A=i("dc22"),T=i("5607"),M=i("dd89"),R=["title"],N=Object($["a"])(m["a"],C({onVisible:["onResize","tryAutofocus"]}),P),q=["color","file","time","date","datetime-local","week","month"],H=N.extend().extend({name:"v-text-field",directives:{resize:A["a"],ripple:T["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return Object(b["a"])(Object(b["a"])({},m["a"].options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var t=D["a"].options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue:function(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):Object(g["a"])((this.internalValue||"").toString()).length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return m["a"].options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty:function(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||q.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel:function(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue:function(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){this.$attrs.hasOwnProperty("box")&&Object(_["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(_["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(_["c"])("shaped should be used with either filled or outlined",this)},mounted:function(){var t=this;this.$watch((function(){return t.labelValue}),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((function(){t.isBooted=!0,requestAnimationFrame((function(){t.isIntersecting||t.onResize()}))}))},methods:{focus:function(){this.onFocus()},blur:function(t){var e=this;window.requestAnimationFrame((function(){e.$refs.input&&e.$refs.input.blur()}))},clearableCallback:function(){var t=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return t.internalValue=null}))},genAppendSlot:function(){var t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=m["a"].options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon:function(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter:function(){var t,e,i;if(!this.hasCounter)return null;var n=!0===this.counter?this.attrs$.maxlength:this.counter,s={dark:this.dark,light:this.light,max:n,value:this.computedCounterValue};return null!=(t=null==(e=(i=this.$scopedSlots).counter)?void 0:e.call(i,{props:s}))?t:this.$createElement(V,{props:s})},genControl:function(){return m["a"].options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(S["a"],t,this.$slots.label||this.label)},genLegend:function(){var t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(W["g"])(t)}},[e])},genInput:function(){var t=Object.assign({},this.listeners$);delete t.change;var e=this.attrs$,i=(e.title,Object(v["a"])(e,R));return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:Object(b["a"])(Object(b["a"])({},i),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages:function(){if(!this.showDetails)return null;var t=m["a"].options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__".concat(t),ref:t},this[t])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input){var e=Object(M["a"])(this.$el);if(e)return e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))}},onInput:function(t){var e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown:function(t){t.keyCode===W["p"].enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),m["a"].options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),m["a"].options.methods.onMouseUp.call(this,t)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;var t=Object(M["a"])(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize:function(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}}),J=Object(o["a"])(a,n,s,!1,null,"5aa2008f",null);e["default"]=J.exports;u()(J,{VBtn:h["a"],VCol:c["a"],VDivider:d["a"],VIcon:f["a"],VRow:p["a"],VTextField:H})},"6ece":function(t,e,i){},ca09:function(t,e,i){"use strict";i("621c")},e9b1:function(t,e,i){}}]);
//# sourceMappingURL=chunk-17aad444.e101f3d7.js.map