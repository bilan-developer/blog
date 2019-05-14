/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
    $('[data-method]').append(function () {
        if (! $(this).find('form').length > 0) {
            return "\n" +
                "<div class='frm' data-action='" + $(this).attr('href') + "' data-name='" + $(this).attr('name') + "' style='display:none'" +
                " data-method='" + $(this).attr('data-method') + "' data-token='" + $('meta[name="_token"]').attr('content') + "'></div>\n";
        } else {
            return "";
        }
    })
        .removeAttr('href')
        .attr('style', 'cursor:pointer;')
        .attr('onclick', 'submitFRM($(this).find(".frm"));');
        //.attr('onclick', '$(this).find("form").send()');
}

function submitFRM(frm){
    var form = $('form');
    form
        .attr('action',frm.attr('data-action'))
        .attr('method',"POST")
        .attr('name',frm.attr('data-name'))
        .append('<input type="hidden" name="_method" value="'+ frm.attr('data-method') +'" />')
        .append('<input type="hidden" name="_token" value="'+ frm.attr('data-token') +'" />');
        if($(form).attr('name')=='delete_perm' || $(form).attr('name')=='delete_item'){
            swal({
                title: "Предупреждение",
                text: "Вы уверены, что хотите удалить этот элемент?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Да, удалить его!",
                cancelButtonText: "Отменить",
                closeOnConfirm: true
            }, function(confirmed) {
                if (confirmed)
                    form.submit();
            });
        }else{
            form.submit();
        }
    //form.submit();
}

/**
 * Place any jQuery/helper plugins in here.
 */
$(function(){
    /**
     * Place the CSRF token as a header on all pages for access in AJAX requests
     */
    $.ajaxSetup({
        headers: { 
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    /**
     * Add the data-method="delete" forms to all delete links
     */
    addDeleteForms();

    /**
     * Generic confirm form delete using Sweet Alert
     */
    $(document).on('submit', 'form[name=delete_perm],form[name=delete_item]', function(e){
        // var form = this;
        // /*title: "Warning",
        //     text: "Are you sure you want to delete this item?",
        //     type: "warning",
        //  confirmButtonText: "Yes, delete it!",*/
        // if($(form).attr('name')=='delete_perm' || $(form).attr('name')=='delete_item'){
        //     swal({
        //         title: "Предупреждение",
        //         text: "Вы уверены, что хотите удалить этот элемент?",
        //         type: "warning",
        //         showCancelButton: true,
        //         confirmButtonColor: "#DD6B55",
        //         confirmButtonText: "Да, удалить его!",
        //         cancelButtonText: "Отменить",
        //         closeOnConfirm: true
        //     }, function(confirmed) {
        //         if (confirmed)
        //             form.submit();
        //     });
        // }else{
        //     form.submit();
        // }

    });

    /**
     * Bind all bootstrap tooltips
     */
    $("[data-toggle=\"tooltip\"]").tooltip();

    /**
     * Bind all bootstrap popovers
     */
    $("[data-toggle=\"popover\"]").popover();

    /**
     * This closes the popover when its clicked away from
     */
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});
/* globals AdminLTEOptions: false */
/* globals FastClick: false */

/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <support@almsaeedstudio.com>
 * @version 2.1.2
 * @license MIT <http://opensource.org/licenses/MIT>
 */

'use strict';

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === 'undefined') {
    throw new Error('AdminLTE requires jQuery');
}

/* AdminLTE
 *
 * @type Object
 * @description $.AdminLTE is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */
$.AdminLTE = {};

/* --------------------
 * - AdminLTE Options -
 * --------------------
 * Modify these options to suit your implementation
 */
$.AdminLTE.options = {
    //Add slimscroll to navbar menus
    //This requires you to load the slimscroll plugin
    //in every page before app.js
    navbarMenuSlimscroll: true,
    navbarMenuSlimscrollWidth: '3px', //The width of the scroll bar
    navbarMenuHeight: '200px', //The height of the inner menu
    //General animation speed for JS animated elements such as box collapse/expand and
    //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
    //'fast', 'normal', or 'slow'
    animationSpeed: 500,
    //Sidebar push menu toggle button selector
    sidebarToggleSelector: '[data-toggle="offcanvas"]',
    //Activate sidebar push menu
    sidebarPushMenu: true,
    //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
    sidebarSlimScroll: true,
    //Enable sidebar expand on hover effect for sidebar mini
    //This option is forced to true if both the fixed layout and sidebar mini
    //are used together
    sidebarExpandOnHover: false,
    //BoxRefresh Plugin
    enableBoxRefresh: true,
    //Bootstrap.js tooltip
    enableBSToppltip: true,
    BSTooltipSelector: '[data-toggle="tooltip"]',
    //Enable Fast Click. Fastclick.js creates a more
    //native touch experience with touch devices. If you
    //choose to enable the plugin, make sure you load the script
    //before AdminLTE's app.js
    enableFastclick: true,
    //Control Sidebar Options
    enableControlSidebar: true,
    controlSidebarOptions: {
        //Which button should trigger the open/close event
        toggleBtnSelector: '[data-toggle="control-sidebar"]',
        //The sidebar selector
        selector: '.control-sidebar',
        //Enable slide over content
        slide: true
    },
    //Box Widget Plugin. Enable this plugin
    //to allow boxes to be collapsed and/or removed
    enableBoxWidget: true,
    //Box Widget plugin options
    boxWidgetOptions: {
        boxWidgetIcons: {
            //Collapse icon
            collapse: 'fa-minus',
            //Open icon
            open: 'fa-plus',
            //Remove icon
            remove: 'fa-times'
        },
        boxWidgetSelectors: {
            //Remove button selector
            remove: '[data-widget="remove"]',
            //Collapse button selector
            collapse: '[data-widget="collapse"]'
        }
    },
    //Direct Chat plugin options
    directChat: {
        //Enable direct chat by default
        enable: true,
        //The button to open and close the chat contacts pane
        contactToggleSelector: '[data-widget="chat-pane-toggle"]'
    },
    //Define the set of colors to use globally around the website
    colors: {
        lightBlue: '#3c8dbc',
        red: '#f56954',
        green: '#00a65a',
        aqua: '#00c0ef',
        yellow: '#f39c12',
        blue: '#0073b7',
        navy: '#001F3F',
        teal: '#39CCCC',
        olive: '#3D9970',
        lime: '#01FF70',
        orange: '#FF851B',
        fuchsia: '#F012BE',
        purple: '#8E24AA',
        maroon: '#D81B60',
        black: '#222222',
        gray: '#d2d6de'
    },
    //The standard screen sizes that bootstrap uses.
    //If you change these in the variables.less file, change
    //them here too.
    screenSizes: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements AdminLTE's
 * functions and plugins as specified by the
 * options above.
 */
$(function () {
    //Extend options if external options exist
    if (typeof AdminLTEOptions !== 'undefined') {
        $.extend(true,
            $.AdminLTE.options,
            AdminLTEOptions);
    }

    //Easy access to options
    var o = $.AdminLTE.options;

    //Set up the object
    _init();

    //Activate the layout maker
    $.AdminLTE.layout.activate();

    //Enable sidebar tree view controls
    $.AdminLTE.tree('.sidebar');

    //Enable control sidebar
    if (o.enableControlSidebar) {
        $.AdminLTE.controlSidebar.activate();
    }

    //Add slimscroll to navbar dropdown
    if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll !== 'undefined') {
        $('.navbar .menu').slimscroll({
            height: o.navbarMenuHeight,
            alwaysVisible: false,
            size: o.navbarMenuSlimscrollWidth
        }).css('width', '100%');
    }

    //Activate sidebar push menu
    if (o.sidebarPushMenu) {
        $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
    }

    //Activate Bootstrap tooltip
    if (o.enableBSToppltip) {
        $('body').tooltip({
            selector: o.BSTooltipSelector
        });
    }

    //Activate box widget
    if (o.enableBoxWidget) {
        $.AdminLTE.boxWidget.activate();
    }

    //Activate fast click
    if (o.enableFastclick && typeof FastClick !== 'undefined') {
        FastClick.attach(document.body);
    }

    //Activate direct chat widget
    if (o.directChat.enable) {
        $(o.directChat.contactToggleSelector).on('click', function () {
            var box = $(this).parents('.direct-chat').first();
            box.toggleClass('direct-chat-contacts-open');
        });
    }

    /*
     * INITIALIZE BUTTON TOGGLE
     * ------------------------
     */
    $('.btn-group[data-toggle="btn-toggle"]').each(function () {
        var group = $(this);
        $(this).find('.btn').on('click', function (e) {
            group.find('.btn.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });

    });
});

/* ----------------------------------
 * - Initialize the AdminLTE Object -
 * ----------------------------------
 * All AdminLTE functions are implemented below.
 */
function _init() {

    /* Layout
     * ======
     * Fixes the layout height in case min-height fails.
     *
     * @type Object
     * @usage $.AdminLTE.layout.activate()
     *        $.AdminLTE.layout.fix()
     *        $.AdminLTE.layout.fixSidebar()
     */
    $.AdminLTE.layout = {
        activate: function () {
            var _this = this;
            _this.fix();
            _this.fixSidebar();
            $(window, '.wrapper').resize(function () {
                _this.fix();
                _this.fixSidebar();
            });
        },
        fix: function () {
            //Get window height and the wrapper height
            var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
            var windowHeight = $(window).height();
            var sidebarHeight = $('.sidebar').height();
            //Set the min-height of the content and sidebar based on the
            //the height of the document.
            if ($('body').hasClass('fixed')) {
                $('.content-wrapper, .right-side').css('min-height', windowHeight - $('.main-footer').outerHeight());
            } else {
                var postSetWidth;
                if (windowHeight >= sidebarHeight) {
                    $('.content-wrapper, .right-side').css('min-height', windowHeight - neg);
                    postSetWidth = windowHeight - neg;
                } else {
                    $('.content-wrapper, .right-side').css('min-height', sidebarHeight);
                    postSetWidth = sidebarHeight;
                }

                //Fix for the control sidebar height
                var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
                if (typeof controlSidebar !== 'undefined') {
                    if (controlSidebar.height() > postSetWidth) {
                        $('.content-wrapper, .right-side').css('min-height', controlSidebar.height());
                    }
                }

            }
        },
        fixSidebar: function () {
            //Make sure the body tag has the .fixed class
            if (!$('body').hasClass('fixed')) {
                if (typeof $.fn.slimScroll !== 'undefined') {
                    $('.sidebar').slimScroll({destroy: true}).height('auto');
                }
                return;
            } else if (typeof $.fn.slimScroll === 'undefined' && console) {
                console.error('Error: the fixed layout requires the slimscroll plugin!');
            }
            //Enable slimscroll for fixed layout
            if ($.AdminLTE.options.sidebarSlimScroll) {
                if (typeof $.fn.slimScroll !== 'undefined') {
                    //Destroy if it exists
                    $('.sidebar').slimScroll({destroy: true}).height('auto');
                    //Add slimscroll
                    $('.sidebar').slimscroll({
                        height: ($(window).height() - $('.main-header').height()) + 'px',
                        color: 'rgba(0,0,0,0.2)',
                        size: '3px'
                    });
                }
            }
        }
    };

    /* PushMenu()
     * ==========
     * Adds the push menu functionality to the sidebar.
     *
     * @type Function
     * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
     */
    $.AdminLTE.pushMenu = {
        activate: function (toggleBtn) {
            //Get the screen sizes
            var screenSizes = $.AdminLTE.options.screenSizes;

            //Enable sidebar toggle
            $(toggleBtn).on('click', function (e) {
                e.preventDefault();

                //Enable sidebar push menu
                if ($(window).width() > (screenSizes.sm - 1)) {
                    $('body').toggleClass('sidebar-collapse');
                }
                //Handle sidebar push menu for small screens
                else {
                    if ($('body').hasClass('sidebar-open')) {
                        $('body').removeClass('sidebar-open');
                        $('body').removeClass('sidebar-collapse');
                    } else {
                        $('body').addClass('sidebar-open');
                    }
                }
            });

            $('.content-wrapper').click(function () {
                //Enable hide menu when clicking on the content-wrapper on small screens
                if ($(window).width() <= (screenSizes.sm - 1) && $('body').hasClass('sidebar-open')) {
                    $('body').removeClass('sidebar-open');
                }
            });

            //Enable expand on hover for sidebar mini
            if ($.AdminLTE.options.sidebarExpandOnHover ||
                ($('body').hasClass('fixed') && $('body').hasClass('sidebar-mini'))) {
                this.expandOnHover();
            }

        },
        expandOnHover: function () {
            var _this = this;
            var screenWidth = $.AdminLTE.options.screenSizes.sm - 1;
            //Expand sidebar on hover
            $('.main-sidebar').hover(function () {
                if ($('body').hasClass('sidebar-mini') &&
                    $('body').hasClass('sidebar-collapse') &&
                    $(window).width() > screenWidth) {
                    _this.expand();
                }
            }, function () {
                if ($('body').hasClass('sidebar-mini') &&
                    $('body').hasClass('sidebar-expanded-on-hover') &&
                    $(window).width() > screenWidth) {
                    _this.collapse();
                }
            });
        },
        expand: function () {
            $('body').removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
        },
        collapse: function () {
            if ($('body').hasClass('sidebar-expanded-on-hover')) {
                $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
            }
        }
    };

    /* Tree()
     * ======
     * Converts the sidebar into a multilevel
     * tree view menu.
     *
     * @type Function
     * @Usage: $.AdminLTE.tree('.sidebar')
     */
    $.AdminLTE.tree = function (menu) {
        var _this = this;
        var animationSpeed = $.AdminLTE.options.animationSpeed;
        $('li a', $(menu)).on('click', function (e) {
            //Get the clicked link and the next element
            var $this = $(this);
            var checkElement = $this.next();

            //Check if the next element is a menu and is visible
            if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
                //Close the menu
                checkElement.slideUp(animationSpeed, function () {
                    checkElement.removeClass('menu-open');
                    //Fix the layout in case the sidebar stretches over the height of the window
                    //_this.layout.fix();
                });
                checkElement.parent('li').removeClass('active');
            }
            //If the menu is not visible
            else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
                //Get the parent menu
                var parent = $this.parents('ul').first();
                //Close all open menus within the parent
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                //Remove the menu-open class from the parent
                ul.removeClass('menu-open');
                //Get the parent li
                var liParent = $this.parent('li');

                //Open the target menu and add the menu-open class
                checkElement.slideDown(animationSpeed, function () {
                    //Add the class active to the parent li
                    checkElement.addClass('menu-open');
                    parent.find('li.active').removeClass('active');
                    liParent.addClass('active');
                    //Fix the layout in case the sidebar stretches over the height of the window
                    _this.layout.fix();
                });
            }
            //if this isn't a link, prevent the page from being redirected
            if (checkElement.is('.treeview-menu')) {
                e.preventDefault();
            }
        });
    };

    /* ControlSidebar
     * ==============
     * Adds functionality to the right sidebar
     *
     * @type Object
     * @usage $.AdminLTE.controlSidebar.activate(options)
     */
    $.AdminLTE.controlSidebar = {
        //instantiate the object
        activate: function () {
            //Get the object
            var _this = this;
            //Update options
            var o = $.AdminLTE.options.controlSidebarOptions;
            //Get the sidebar
            var sidebar = $(o.selector);
            //The toggle button
            var btn = $(o.toggleBtnSelector);

            //Listen to the click event
            btn.on('click', function (e) {
                e.preventDefault();
                //If the sidebar is not open
                if (!sidebar.hasClass('control-sidebar-open') && !$('body').hasClass('control-sidebar-open')) {
                    //Open the sidebar
                    _this.open(sidebar, o.slide);
                } else {
                    _this.close(sidebar, o.slide);
                }
            });

            //If the body has a boxed layout, fix the sidebar bg position
            var bg = $('.control-sidebar-bg');
            _this._fix(bg);

            //If the body has a fixed layout, make the control sidebar fixed
            if ($('body').hasClass('fixed')) {
                _this._fixForFixed(sidebar);
            } else {
                //If the content height is less than the sidebar's height, force max height
                if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
                    _this._fixForContent(sidebar);
                }
            }
        },
        //Open the control sidebar
        open: function (sidebar, slide) {
            // var _this = this;
            //Slide over content
            if (slide) {
                sidebar.addClass('control-sidebar-open');
            } else {
                //Push the content by adding the open class to the body instead
                //of the sidebar itself
                $('body').addClass('control-sidebar-open');
            }
        },
        //Close the control sidebar
        close: function (sidebar, slide) {
            if (slide) {
                sidebar.removeClass('control-sidebar-open');
            } else {
                $('body').removeClass('control-sidebar-open');
            }
        },
        _fix: function (sidebar) {
            var _this = this;
            if ($('body').hasClass('layout-boxed')) {
                sidebar.css('position', 'absolute');
                sidebar.height($('.wrapper').height());
                $(window).resize(function () {
                    _this._fix(sidebar);
                });
            } else {
                sidebar.css({
                    'position': 'fixed',
                    'height': 'auto'
                });
            }
        },
        _fixForFixed: function (sidebar) {
            sidebar.css({
                'position': 'fixed',
                'max-height': '100%',
                'overflow': 'auto',
                'padding-bottom': '50px'
            });
        },
        _fixForContent: function (sidebar) {
            $('.content-wrapper, .right-side').css('min-height', sidebar.height());
        }
    };

    /* BoxWidget
     * =========
     * BoxWidget is a plugin to handle collapsing and
     * removing boxes from the screen.
     *
     * @type Object
     * @usage $.AdminLTE.boxWidget.activate()
     *        Set all your options in the main $.AdminLTE.options object
     */
    $.AdminLTE.boxWidget = {
        selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
        icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
        animationSpeed: $.AdminLTE.options.animationSpeed,
        activate: function (_box) {
            var _this = this;
            if (! _box) {
                _box = document; // activate all boxes per default
            }
            //Listen for collapse event triggers
            $(_box).find(_this.selectors.collapse).on('click', function (e) {
                e.preventDefault();
                _this.collapse($(this));
            });

            //Listen for remove event triggers
            $(_box).find(_this.selectors.remove).on('click', function (e) {
                e.preventDefault();
                _this.remove($(this));
            });
        },
        collapse: function (element) {
            var _this = this;
            //Find the box parent
            var box = element.parents('.box').first();
            //Find the body and the footer
            var boxContent = box.find('> .box-body, > .box-footer');
            if (!box.hasClass('collapsed-box')) {
                //Convert minus into plus
                element.children(':first')
                    .removeClass(_this.icons.collapse)
                    .addClass(_this.icons.open);
                //Hide the content
                boxContent.slideUp(_this.animationSpeed, function () {
                    box.addClass('collapsed-box');
                });
            } else {
                //Convert plus into minus
                element.children(':first')
                    .removeClass(_this.icons.open)
                    .addClass(_this.icons.collapse);
                //Show the content
                boxContent.slideDown(_this.animationSpeed, function () {
                    box.removeClass('collapsed-box');
                });
            }
        },
        remove: function (element) {
            //Find the box parent
            var box = element.parents('.box').first();
            box.slideUp(this.animationSpeed);
        }
    };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $('#box-widget').boxRefresh( options );
 */
(function ($) {

    $.fn.boxRefresh = function (options) {

        // Render options
        var settings = $.extend({
            //Refresh button selector
            trigger: '.refresh-btn',
            //File source to be loaded (e.g: ajax/src.php)
            source: '',
            //Callbacks
            onLoadStart: function (box) {
            }, //Right after the button has been clicked
            onLoadDone: function (box) {
            } //When the source has been loaded

        }, options);

        //The overlay
        var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

        return this.each(function () {
            //if a source is specified
            if (settings.source === '') {
                if (console) {
                    console.log('Please specify a source first - boxRefresh()');
                }
                return;
            }
            //the box
            var box = $(this);
            //the button
            var rBtn = box.find(settings.trigger).first();

            //On trigger click
            rBtn.on('click', function (e) {
                e.preventDefault();
                //Add loading overlay
                start(box);

                //Perform ajax call
                box.find('.box-body').load(settings.source, function () {
                    done(box);
                });
            });
        });

        function start(box) {
            //Add overlay and loading img
            box.append(overlay);

            settings.onLoadStart.call(box);
        }

        function done(box) {
            //Remove overlay and loading img
            box.find(overlay).remove();

            settings.onLoadDone.call(box);
        }

    };

})(jQuery);

/*
 * EXPLICIT BOX ACTIVATION
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded.
 *
 * @type plugin
 * @usage $('#box-widget').activateBox();
 */
(function ($) {

    $.fn.activateBox = function () {
        $.AdminLTE.boxWidget.activate(this);
    };

})(jQuery);

/*
 * TODO LIST CUSTOM PLUGIN
 * -----------------------
 * This plugin depends on iCheck plugin for checkbox and radio inputs
 *
 * @type plugin
 * @usage $('#todo-widget').todolist( options );
 */
(function ($) {

    $.fn.todolist = function (options) {
        // Render options
        var settings = $.extend({
            //When the user checks the input
            onCheck: function (ele) {
            },
            //When the user unchecks the input
            onUncheck: function (ele) {
            }
        }, options);

        return this.each(function () {

            if (typeof $.fn.iCheck !== 'undefined') {
                $('input', this).on('ifChecked', function (event) {
                    var ele = $(this).parents('li').first();
                    ele.toggleClass('done');
                    settings.onCheck.call(ele);
                });

                $('input', this).on('ifUnchecked', function (event) {
                    var ele = $(this).parents('li').first();
                    ele.toggleClass('done');
                    settings.onUncheck.call(ele);
                });
            } else {
                $('input', this).on('change', function (event) {
                    var ele = $(this).parents('li').first();
                    ele.toggleClass('done');
                    settings.onCheck.call(ele);
                });
            }
        });
    };
}(jQuery));
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return f({type:O.error,iconClass:g().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=g()),v=e("#"+t.containerId),v.length?v:(n&&(v=c(t)),v)}function i(e,t,n){return f({type:O.info,iconClass:g().iconClasses.info,message:e,optionsOverride:n,title:t})}function o(e){w=e}function s(e,t,n){return f({type:O.success,iconClass:g().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return f({type:O.warning,iconClass:g().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e){var t=g();v||n(t),l(e,t)||u(t)}function d(t){var i=g();return v||n(i),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function u(t){for(var n=v.children(),i=n.length-1;i>=0;i--)l(e(n[i]),t)}function l(t,n){return t&&0===e(":focus",t).length?(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0):!1}function c(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass).attr("aria-live","polite").attr("role","alert"),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function m(e){w&&w(e)}function f(t){function i(t){return!e(":focus",l).length||t?(clearTimeout(O.intervalId),l[r.hideMethod]({duration:r.hideDuration,easing:r.hideEasing,complete:function(){h(l),r.onHidden&&"hidden"!==b.state&&r.onHidden(),b.state="hidden",b.endTime=new Date,m(b)}})):void 0}function o(){(r.timeOut>0||r.extendedTimeOut>0)&&(u=setTimeout(i,r.extendedTimeOut),O.maxHideTime=parseFloat(r.extendedTimeOut),O.hideEta=(new Date).getTime()+O.maxHideTime)}function s(){clearTimeout(u),O.hideEta=0,l.stop(!0,!0)[r.showMethod]({duration:r.showDuration,easing:r.showEasing})}function a(){var e=(O.hideEta-(new Date).getTime())/O.maxHideTime*100;f.width(e+"%")}var r=g(),d=t.iconClass||r.iconClass;if("undefined"!=typeof t.optionsOverride&&(r=e.extend(r,t.optionsOverride),d=t.optionsOverride.iconClass||d),r.preventDuplicates){if(t.message===C)return;C=t.message}T++,v=n(r,!0);var u=null,l=e("<div/>"),c=e("<div/>"),p=e("<div/>"),f=e("<div/>"),w=e(r.closeHtml),O={intervalId:null,hideEta:null,maxHideTime:null},b={toastId:T,state:"visible",startTime:new Date,options:r,map:t};return t.iconClass&&l.addClass(r.toastClass).addClass(d),t.title&&(c.append(t.title).addClass(r.titleClass),l.append(c)),t.message&&(p.append(t.message).addClass(r.messageClass),l.append(p)),r.closeButton&&(w.addClass("toast-close-button").attr("role","button"),l.prepend(w)),r.progressBar&&(f.addClass("toast-progress"),l.prepend(f)),l.hide(),r.newestOnTop?v.prepend(l):v.append(l),l[r.showMethod]({duration:r.showDuration,easing:r.showEasing,complete:r.onShown}),r.timeOut>0&&(u=setTimeout(i,r.timeOut),O.maxHideTime=parseFloat(r.timeOut),O.hideEta=(new Date).getTime()+O.maxHideTime,r.progressBar&&(O.intervalId=setInterval(a,10))),l.hover(s,o),!r.onclick&&r.tapToDismiss&&l.click(i),r.closeButton&&w&&w.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),i(!0)}),r.onclick&&l.click(function(){r.onclick(),i()}),m(b),r.debug&&console&&console.log(b),l}function g(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),C=void 0))}var v,w,C,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:d,error:t,getContainer:n,info:i,options:{},subscribe:o,success:s,version:"2.1.0",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=/toastr.js.map
/*
	Redactor v9.2.6
	Updated: Jul 19, 2014

	http://imperavi.com/redactor/

	Copyright (c) 2009-2014, Imperavi LLC.
	License: http://imperavi.com/redactor/license/

	Usage: $('#content').redactor();
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(B($){q 7F=0;"lV lX";q bI=B(O){c[0]=O.lW;c[1]=O.kj;c.O=O;F c};bI.5o.iz=B(){F c[0]===c[1]};q 8N=/5n?:\\/\\/(?:[0-9A-Z-]+\\.)?(?:lT\\.be\\/|cO\\.7w\\S*[^\\w\\-\\s])([\\w\\-]{11})(?=[^\\w\\-]|$)(?![?=&+%\\w.-]*(?:[\'"][^<>]*>|<\\/a>))[?=&+%\\w.-]*/ig;q 8Q=/5n?:\\/\\/(aA\\.)?cI.7w\\/(\\d+)($|\\/)/;$.fn.U=B(3R){q 1p=[];q hg=i3.5o.jR.5q(hw,1);if(1E 3R==="8I"){c.1u(B(){q 7l=$.1a(c,"U");if(1E 7l!=="1J"&&$.7z(7l[3R])){q aO=7l[3R].bO(7l,hg);if(aO!==1J&&aO!==7l){1p.3d(aO)}}I{F $.3U(\'lP lS 5l "\'+3R+\'" 3z 3J\')}})}I{c.1u(B(){if(!$.1a(c,"U")){$.1a(c,"U",3J(c,3R))}})}if(1p.1m===0){F c}I{if(1p.1m===1){F 1p[0]}I{F 1p}}};B 3J(el,3R){F 2c 3J.5o.77(el,3R)}$.3J=3J;$.3J.mf="9.2.6";$.3J.C={41:E,1Q:E,4n:E,1f:E,1y:"en",63:"mh",4U:E,7X:E,fO:E,g1:N,gw:N,gQ:N,j7:E,a1:N,iO:N,bV:N,dS:E,kt:E,5N:N,2h:E,7c:E,4Y:N,8R:E,dO:E,6j:{"3x+m, 4w+m":"c.26(\'mb\', E)","3x+b, 4w+b":"c.26(\'3m\', E)","3x+i, 4w+i":"c.26(\'3q\', E)","3x+h, 4w+h":"c.26(\'fm\', E)","3x+l, 4w+l":"c.26(\'fy\', E)","3x+k, 4w+k":"c.9N()","3x+7V+7":"c.26(\'8q\', E)","3x+7V+8":"c.26(\'8k\', E)"},jL:E,7C:E,ah:60,cn:E,8a:"aI://",ky:E,7A:50,ec:E,8i:"8Y",6L:E,fR:N,kC:N,3Y:E,an:"25",gF:N,84:E,e5:"25",9p:N,bT:E,dM:["T/gY","T/hc","T/ha"],5Q:E,3H:E,4T:N,5m:N,fb:N,aW:E,i2:N,30:E,gJ:["6x","3m","3q","5H","6f","6a","7m","6m"],1A:N,6B:E,7T:X,bb:0,as:E,7O:E,h9:E,gK:N,4a:["o","6x","3m","3q","5H","6f","6a","7m","6m","T","3y","25","1n","1r","9R","|","7Q"],cU:[],aY:["5H","3q","3m","4K","6f","6a","cf","bn","bs","dB","1n"],cv:{b:"3m",3V:"3m",i:"3q",em:"3q",56:"5H",5F:"5H",2r:"6f",ol:"6a",u:"4K",3j:"1n",1g:"1n",1n:"1n"},gM:["p","2f","2q","h1","h2","h3","h4","h5","h6"],1N:E,5Y:N,9a:N,7d:N,6l:E,75:E,fz:E,8x:E,5G:E,8y:["o","9U","1r","2v","4w","3n","1o","lq"],6r:"3V",6p:"em",9q:20,3E:[],8A:[],64:E,58:"<p>&#9F;</p>",2i:"&#9F;",cu:/^(P|H[1-6]|3h|9e|9f|9Z|9Y|a4|a0)$/i,5t:["P","it","iC","iF","iw","i9","hM","i6","i7","gf","8K","6h","3F","fJ","cA","9e","9f","9Z","9Y","a4","a0"],bL:["fU","2v","9U","hr","i?2Z","1r","4w","le","1o","3n","1n","8c","3T","di"],bJ:["li","dt","dt","h[1-6]","4b","3n"],jM:["2f","12","dl","fV","2t","nx","gc","ol","p","2q","3s","1g","dN","3j","2r"],bg:["P","it","iC","iF","iw","i9","hM","i6","i7","gf","8K","3h","3F","fJ","cA","6i","9e","9f","9Z","9Y","a4","a0","6h"],jG:{en:{o:"kZ",3y:"6b jn",T:"6b kG",1n:"fc",1r:"l2",cz:"6b 1r",fg:"jV 1r",6F:"mO",6x:"mL",jK:"mW Y",ki:"mV",2k:"kr",kp:"7W 1",kn:"7W 2",k3:"7W 3",k1:"7W 4",kb:"7W 5",3m:"mG",3q:"mt",mC:"mE gg",my:"no gg",6f:"nb g7",6a:"lr g7",7m:"ll",6m:"lN",6H:"mg",4y:"6b",7N:"mj",iv:"7L",cd:"6b fc",c5:"7Y f0 m6",c4:"7Y f0 lm",bX:"7Y eW kJ",bW:"7Y eW kz",c2:"7L eW",c0:"7L f0",dW:"7L fc",aF:"nD",aJ:"n8",bU:"7Y kY",bY:"7L kY",1e:"n0",hP:"n7",3r:"ni",1s:"kJ",4Z:"kz",6O:"j4",ip:"kG mr l2",Y:"mU",eH:"mN",mJ:"gN",hF:"jn mn kr",25:"6b mw",8H:"jE",mB:"mz",eo:"mZ",jB:"np eo",jA:"nr 25 nj",bp:"j1 Y iW iZ 1s",bv:"j4 Y",bo:"j1 Y iW iZ 4Z",bu:"ny Y",7Q:"6b n6 n4",5H:"n9",na:"nc",eB:"lz 1r in 2c 52",4K:"lv",9R:"lE",ed:"m9 (m8)",8p:"jV"}}};3J.fn=$.3J.5o={2O:{a2:8,eC:46,dH:40,b9:13,dY:27,iG:9,lR:17,lU:91,mi:37,fw:91},77:B(el,3R){c.8j=E;c.$2j=c.$1v=$(el);c.7F=7F++;q C=$.4W(N,{},$.3J.C);c.C=$.4W({},C,c.$2j.1a(),3R);c.2y=N;c.lY=[];c.a9=c.$1v.1f("22");c.lL=c.$1v.1f("2p");if(c.C.4n){c.C.1Q=N}if(c.C.1N){c.C.5Y=E}if(c.C.5Y){c.C.1N=E}if(c.C.as){c.C.6B=N}c.X=X;c.42=42;c.5S=E;c.kT=2c 2J("^<(/?"+c.C.bL.5V("|/?")+"|"+c.C.bJ.5V("|")+")[ >]");c.kN=2c 2J("^<(br|/?"+c.C.bL.5V("|/?")+"|/"+c.C.bJ.5V("|/")+")[ >]");c.d7=2c 2J("^</?("+c.C.jM.5V("|")+")[ >]");c.ax=2c 2J("^("+c.C.bg.5V("|")+")$","i");if(c.C.1N===E){if(c.C.5G!==E){q bQ=["3V","em","56"];q jC=["b","i","5F"];if($.4O("p",c.C.5G)==="-1"){c.C.5G.3d("p")}3z(i in bQ){if($.4O(bQ[i],c.C.5G)!="-1"){c.C.5G.3d(jC[i])}}}if(c.C.8y!==E){q 3X=$.4O("p",c.C.8y);if(3X!=="-1"){c.C.8y.ap(3X,3X)}}}if(c.1C("3t")||c.1C("94")){c.C.4a=c.iB(c.C.4a,"7Q")}c.C.1F=c.C.jG[c.C.1y];$.4W(c.C.6j,c.C.jL);c.hj();c.g0()},fN:B(1y){F{o:{1e:1y.o,1H:"d0"},6x:{1e:1y.6x,1H:"2M",1R:{p:{1e:1y.jK,1H:"5I"},2f:{1e:1y.ki,1H:"d9",2S:"m3"},2q:{1e:1y.2k,1H:"5I",2S:"nd"},h1:{1e:1y.kp,1H:"5I",2S:"nf"},h2:{1e:1y.kn,1H:"5I",2S:"n2"},h3:{1e:1y.k3,1H:"5I",2S:"mm"},h4:{1e:1y.k1,1H:"5I",2S:"n3"},h5:{1e:1y.kb,1H:"5I",2S:"nz"}}},3m:{1e:1y.3m,2o:"3m"},3q:{1e:1y.3q,2o:"3q"},5H:{1e:1y.5H,2o:"fC"},4K:{1e:1y.4K,2o:"4K"},6f:{1e:"&nB; "+1y.6f,2o:"8k"},6a:{1e:"1. "+1y.6a,2o:"8q"},7m:{1e:"< "+1y.7m,1H:"cy"},6m:{1e:"> "+1y.6m,1H:"cx"},T:{1e:1y.T,1H:"l4"},3y:{1e:1y.3y,1H:"iI"},25:{1e:1y.25,1H:"jg"},1n:{1e:1y.1n,1H:"2M",1R:{cd:{1e:1y.cd,1H:"ko"},nm:{2m:"aN"},c5:{1e:1y.c5,1H:"j3"},c4:{1e:1y.c4,1H:"iV"},bX:{1e:1y.bX,1H:"iM"},bW:{1e:1y.bW,1H:"iL"},nn:{2m:"aN"},bU:{1e:1y.bU,1H:"j2"},bY:{1e:1y.bY,1H:"ey"},nq:{2m:"aN"},c2:{1e:1y.c2,1H:"iY"},c0:{1e:1y.c0,1H:"k8"},dW:{1e:1y.dW,1H:"ka"}}},1r:{1e:1y.1r,1H:"2M",1R:{1r:{1e:1y.cz,1H:"9N"},6F:{1e:1y.6F,2o:"6F"}}},9R:{1e:1y.9R,1H:"2M",1R:{cf:{1e:1y.bp,1H:"dI"},bn:{1e:1y.bv,1H:"dy"},bs:{1e:1y.bo,1H:"dD"},dB:{1e:1y.bu,1H:"dA"}}},cf:{1e:1y.bp,1H:"dI"},bn:{1e:1y.bv,1H:"dy"},bs:{1e:1y.bo,1H:"dD"},mv:{1e:1y.bu,1H:"dA"},7Q:{2o:"fx",1e:1y.7Q}}},1c:B(1G,67,1a){q 1c=c.C[1G+"ms"];if($.7z(1c)){if(67===E){F 1c.5q(c,1a)}I{F 1c.5q(c,67,1a)}}I{F 1a}},mF:B(){hd(c.ah);$(42).3b(".U");c.$1v.3b("U-5s");c.$2j.3b(".U").mT("U");q o=c.2R();if(c.C.64){c.$2C.2I(c.$1v);c.$2C.1w();c.$1v.1p(o).2M()}I{q $1z=c.$K;if(c.C.1Q){$1z=c.$2j}c.$2C.2I($1z);c.$2C.1w();$1z.3c("4d").3c("fM").2B("3K").o(o).2M()}if(c.C.7O){$(c.C.7O).o("")}if(c.C.30){$("#hb"+c.7F).1w()}},mS:B(){F $.4W({},c)},mX:B(){F c.$K},mQ:B(){F c.$2C},mI:B(){F(c.C.1Q)?c.$2Z:E},mK:B(){F(c.$1A)?c.$1A:E},2R:B(){F c.$1v.1p()},ku:B(){c.$K.2B("3K").2B("69");q o=c.3Z(c.$2Z.1Y().4c());c.$K.1i({3K:N,69:c.C.63});F o},6V:B(o,9g,du){o=o.43();o=o.G(/\\$/g,"&#36;");if(c.C.4n){c.kE(o)}I{c.l3(o,9g)}if(o==""){du=E}if(du!==E){c.hs()}},l3:B(o,9g){if(9g!==E){o=c.de(o);o=c.8d(o);o=c.dR(o);o=c.9S(o,N);if(c.C.1N===E){o=c.dK(o)}I{o=o.G(/<p(.*?)>([\\w\\W]*?)<\\/p>/gi,"$2<br>")}}o=o.G(/&9h;#36;/g,"$");o=c.dJ(o);c.$K.o(o);c.8u();c.92();c.1j()},kE:B(o){q 3C=c.cV();c.$2Z[0].3p="mD:mY";o=c.dR(o);o=c.9S(o);o=c.6Z(o);3C.b7();3C.gW(o);3C.h8();if(c.C.4n){c.$K=c.$2Z.1Y().1b("2v").1i({3K:N,69:c.C.63})}c.8u();c.92();c.1j()},d1:B(o){c.7y=o.1U(/^<\\!kH[^>]*>/i);if(c.7y&&c.7y.1m==1){o=o.G(/^<\\!kH[^>]*>/i,"")}o=c.de(o,N);o=c.dK(o);o=c.dJ(o);c.$K.o(o);c.8u();c.92();c.1j()},kw:B(){if(c.7y&&c.7y.1m==1){q 1v=c.7y[0]+"\\n"+c.$1v.1p();c.$1v.1p(1v)}},92:B(){q b4=c.$K.1b("V");q 76="3W";$.1u(b4,B(){q aD=c.jb;q 5y=2c 2J("<"+c.Q,"gi");q 5K=aD.G(5y,"<"+76);5y=2c 2J("</"+c.Q,"gi");5K=5K.G(5y,"</"+76);$(c).2e(5K)})},ad:B(o){o=o.G(/<V(.*?)>/,"<3W$1>");F o.G(/<\\/V>/,"</3W>")},8u:B(){c.$K.1b(".nk").1i("3K",E)},1j:B(e){q o="";c.g5();if(c.C.4n){o=c.ku()}I{o=c.$K.o()}o=c.eE(o);o=c.dq(o);q 1v=c.6Z(c.$1v.1p(),E);q K=c.6Z(o,E);if(1v==K){F E}o=o.G(/<\\/li><(2r|ol)>([\\w\\W]*?)<\\/(2r|ol)>/gi,"<$1>$2</$1></li>");if($.2b(o)==="<br>"){o=""}if(c.C.kt){q ks=["br","hr","1B","1r","2T","4w"];$.1u(ks,B(i,s){o=o.G(2c 2J("<"+s+"(.*?[^/$]?)>","gi"),"<"+s+"$1 />")})}o=c.1c("nt",E,o);c.$1v.1p(o);c.kw();c.1c("nu",E,o);if(c.2y===E){if(1E e!="1J"){kA(e.5X){5u 37:5f;5u 38:5f;5u 39:5f;5u 40:5f;nC:c.1c("68",E,o)}}I{c.1c("68",E,o)}}},eE:B(o){if(!c.C.4n){o=c.8d(o)}o=$.2b(o);o=c.hq(o);o=o.G(/&#9F;/gi,"");o=o.G(/&#nA;/gi,"");o=o.G(/<\\/a>&3u;/gi,"</a> ");o=o.G(/\\7D/g,"");if(o=="<p></p>"||o=="<p> </p>"||o=="<p>&3u;</p>"){o=""}if(c.C.ky){o=o.G(/<a(.*?)4m="kx"(.*?)>/gi,"<a$1$2>");o=o.G(/<a(.*?)>/gi,\'<a$1 4m="kx">\')}o=o.G("<!--?4I","<?4I");o=o.G("?-->","?>");o=o.G(/<(.*?)1x="kI"(.*?) 3K="E"(.*?)>/gi,\'<$nv="kI"$2$3>\');o=o.G(/ 1a-81=""/gi,"");o=o.G(/<br\\s?\\/?>\\n?<\\/(P|H[1-6]|3h|9e|9f|9Z|9Y|a4|a0)>/gi,"</$1>");o=o.G(/<V(.*?)id="U-T-2C"(.*?)>([\\w\\W]*?)<1B(.*?)><\\/V>/gi,"$3<1B$4>");o=o.G(/<V(.*?)id="U-T-ej"(.*?)>(.*?)<\\/V>/gi,"");o=o.G(/<V(.*?)id="U-T-es"(.*?)>(.*?)<\\/V>/gi,"");o=o.G(/<(2r|ol)>\\s*\\t*\\n*<\\/(2r|ol)>/gi,"");if(c.C.bV){o=o.G(/<2A(.*?)>([\\w\\W]*?)<\\/2A>/gi,"$2")}o=o.G(/<V(.*?)>([\\w\\W]*?)<\\/V>/gi,"$2");o=o.G(/<3W>([\\w\\W]*?)<\\/3W>/gi,"$1");o=o.G(/<3W>/gi,"<V>");o=o.G(/<3W /gi,"<V ");o=o.G(/<\\/3W>/gi,"</V>");if(c.C.a1){o=o.G(/<V>([\\w\\W]*?)<\\/V>/gi,"$1")}o=o.G(/<V(.*?)1x="55"(.*?)>([\\w\\W]*?)<\\/V>/gi,"");o=o.G(/<1B(.*?)3K="E"(.*?)>/gi,"<1B$1$2>");o=o.G(/&/gi,"&");o=o.G(/\\ls/gi,"&lF;");o=o.G(/\\lf/gi,"&lh;");o=o.G(/\\lk/gi,"&ma;");o=o.G(/\\lO/gi,"&lM;");o=o.G(/\\lZ/gi,"&m0;");o=c.fL(o);F o},g0:B(){c.3L="";c.$2C=$(\'<12 1x="lQ" />\');if(c.$1v[0].Q==="m2"){c.C.64=N}if(c.C.g1===E&&c.5a()){c.gb()}I{c.iH();if(c.C.1Q){c.C.4Y=E;c.5j()}I{if(c.C.64){c.fZ()}I{c.fY()}}if(!c.C.1Q){c.cJ();c.cH()}}},gb:B(){if(!c.C.64){c.$K=c.$1v;c.$K.2U();c.$1v=c.bd(c.$K);c.$1v.1p(c.3L)}c.$2C.at(c.$1v).1h(c.$1v)},iH:B(){if(c.C.64){c.3L=$.2b(c.$1v.1p())}I{c.3L=$.2b(c.$1v.o())}},fZ:B(){c.$K=$("<12 />");c.$2C.at(c.$1v).1h(c.$K).1h(c.$1v);c.fQ(c.$K);c.dw()},fY:B(){c.$K=c.$1v;c.$1v=c.bd(c.$K);c.$2C.at(c.$K).1h(c.$K).1h(c.$1v);c.dw()},bd:B($1v){F $("<5s />").1i("2m",$1v.1i("id")).1f("22",c.a9)},fQ:B(el){$.1u(c.$1v.2R(0).2S.4o(/\\s+/),B(i,s){el.2z("lo"+s)})},dw:B(){c.$K.2z("4d").1i({3K:N,69:c.C.63});c.$1v.1i("69",c.C.63).2U();c.6V(c.3L,N,E)},cJ:B(){q $1v=c.$K;if(c.C.1Q){$1v=c.$2Z}if(c.C.7c){$1v.1i("7c",c.C.7c)}if(c.C.8R){$1v.1f("fP-22",c.C.8R+"px")}I{if(c.1C("31")&&c.C.1N){c.$K.1f("fP-22","lH")}}if(c.1C("31")&&c.C.1N){c.$K.1f("8X-ft","8Y")}if(c.C.dO){c.C.4Y=E;c.a9=c.C.dO}if(c.C.fO){c.$K.2z("fM")}if(c.C.7X){c.$K.2z("U-K-7X")}if(!c.C.4Y){$1v.1f("22",c.a9)}},cH:B(){c.2y=E;if(c.C.1A){c.C.1A=c.fN(c.C.1F);c.gI()}c.i5();c.iu();c.d2();if(c.C.7C){c.7C()}2V($.M(c.7H,c),4);if(c.1C("31")){eG{c.X.26("ne",E,E);c.X.26("ng",E,E)}fe(e){}}if(c.C.2h){2V($.M(c.2h,c),3O)}if(!c.C.5N){2V($.M(B(){c.C.5N=N;c.d0(E)},c),5k)}c.1c("77")},d2:B(){c.7P=0;if(c.C.fR&&(c.C.3Y!==E||c.C.5Q!==E)){c.$K.on("6w.U",$.M(c.fT,c))}c.$K.on("23.U",$.M(B(){c.5R=E},c));c.$K.on("2T.U",$.M(c.1j,c));c.$K.on("9v.U",$.M(c.gd,c));c.$K.on("5T.U",$.M(c.go,c));c.$K.on("5d.U",$.M(c.hS,c));if($.7z(c.C.fS)){c.$1v.on("5T.U-5s",$.M(c.C.fS,c))}if($.7z(c.C.fX)){c.$K.on("2h.U",$.M(c.C.fX,c))}q a3;$(X).9J(B(e){a3=$(e.1O)});c.$K.on("cN.U",$.M(B(e){if(!$(a3).3v("cW")&&$(a3).8B(".cW").1V()==0){c.5R=E;if($.7z(c.C.n1)){c.1c("cN",e)}}},c))},fT:B(e){e=e.gE||e;if(42.bw===1J||!e.aX){F N}q 1m=e.aX.7I.1m;if(1m==0){F N}e.2u();q 25=e.aX.7I[0];if(c.C.dM!==E&&c.C.dM.44(25.1G)==-1){F N}c.21();c.8C();if(c.C.5Q===E){c.bF(c.C.3Y,25,N,e,c.C.an)}I{c.e1(25)}},gd:B(e){q dL=E;if(c.1C("4s")&&6n.7k.44("n5")===-1){q 2Q=c.1C("9n").4o(".");if(2Q[0]<nh){dL=N}}if(dL){F N}if(c.1C("94")){F N}if(c.C.9p&&c.gz(e)){F N}if(c.C.gw){c.8j=N;c.28();if(!c.5R){if(c.C.4Y===N&&c.c7!==N){c.$K.22(c.$K.22());c.9t=c.X.2v.3e}I{c.9t=c.$K.3e()}}q 4k=c.cE();2V($.M(B(){q gv=c.cE();c.$K.1h(4k);c.1W();q o=c.fF(gv);c.j8(o);if(c.C.4Y===N&&c.c7!==N){c.$K.1f("22","4l")}},c),1)}},gz:B(e){q 67=e.gE||e;c.gk=E;if(1E(67.dT)==="1J"){F E}if(67.dT.gh){q 25=67.dT.gh[0].mA();if(25!==2G){c.21();c.gk=N;q dC=2c mo();dC.jd=$.M(c.jz,c);dC.mq(25);F N}}F E},go:B(e){if(c.8j){F E}q 1k=e.5X;q 3x=e.9P||e.80;q L=c.2E();q 1t=c.3P();q 1l=c.2N();q 2q=E;c.1c("5T",e);if(c.1C("31")&&"dz"in 42.29()){if((3x)&&(e.2O===37||e.2O===39)){q 1I=c.29();q dE=(e.80?"9I":"mu");if(e.2O===37){1I.dz("4W","1s",dE);if(!e.53){1I.ih()}}if(e.2O===39){1I.dz("4W","4Z",dE);if(!e.53){1I.mR()}}e.2u()}}c.6t(E);if((L&&$(L).2R(0).Q==="6i")||(1t&&$(1t).2R(0).Q==="6i")){2q=N;if(1k===c.2O.dH){c.6U(1l)}}if(1k===c.2O.dH){if(L&&$(L)[0].Q==="3F"){c.6U(L)}if(1t&&$(1t)[0].Q==="3F"){c.6U(1t)}if(L&&$(L)[0].Q==="P"&&$(L).L()[0].Q=="3F"){c.6U(L,$(L).L()[0])}if(1t&&$(1t)[0].Q==="P"&&L&&$(L)[0].Q=="3F"){c.6U(1t,L)}}c.6j(e,1k);if(3x&&1k===90&&!e.53&&!e.fk){e.2u();if(c.C.3E.1m){c.k7()}I{c.X.26("mP",E,E)}F}I{if(3x&&1k===90&&e.53&&!e.fk){e.2u();if(c.C.8A.1m!=0){c.k6()}I{c.X.26("mM",E,E)}F}}if(1k==32){c.21()}if(3x&&1k===65){c.21();c.5R=N}I{if(1k!=c.2O.fw&&!3x){c.5R=E}}if(1k==c.2O.b9&&!e.53&&!e.9P&&!e.80){q O=c.3o();if(O&&O.4F===E){1q=c.29();if(1q.4V){O.aC()}}if(c.1C("3t")&&(L.4D==1&&(L.Q=="6h"||L.Q=="mH"))){e.2u();c.21();c.3B(X.4C("br"));c.1c("7x",e);F E}if(1l&&(1l.Q=="3F"||$(1l).L()[0].Q=="3F")){if(c.ck()){if(c.7P==1){q 2j;q 2W;if(1l.Q=="3F"){2W="br";2j=1l}I{2W="p";2j=$(1l).L()[0]}e.2u();c.bt(2j);c.7P=0;if(2W=="p"){$(1l).L().1b("p").2W().1w()}I{q 2L=$.2b($(1l).o());$(1l).o(2L.G(/<br\\s?\\/?>$/i,""))}F}I{c.7P++}}I{c.7P++}}if(2q===N){F c.hZ(e,1t)}I{if(!c.C.1N){if(1l&&1l.Q=="3h"){q 5P=c.2N();if(5P!==E||5P.Q==="3h"){q 9o=$.2b($(1l).Y());q fA=$.2b($(5P).Y());if(9o==""&&fA==""&&$(5P).4f("li").1V()==0&&$(5P).8B("li").1V()==0){c.21();q $3a=$(5P).2g("ol, 2r");$(5P).1w();q J=$("<p>"+c.C.2i+"</p>");$3a.2I(J);c.4g(J);c.1j();c.1c("7x",e);F E}}}if(1l&&c.C.cu.4e(1l.Q)){c.21();2V($.M(B(){q 5e=c.2N();if(5e.Q==="8K"&&!$(5e).3v("4d")){q J=$("<p>"+c.C.2i+"</p>");$(5e).2e(J);c.4g(J)}},c),1)}I{if(1l===E){c.21();q J=$("<p>"+c.C.2i+"</p>");c.3B(J[0]);c.4g(J);c.1c("7x",e);F E}}}if(c.C.1N){if(1l&&c.C.cu.4e(1l.Q)){c.21();2V($.M(B(){q 5e=c.2N();if((5e.Q==="8K"||5e.Q==="P")&&!$(5e).3v("4d")){c.jr(5e)}},c),1)}I{F c.cl(e)}}if(1l.Q=="3F"||1l.Q=="cA"){F c.cl(e)}}c.1c("7x",e)}I{if(1k===c.2O.b9&&(e.9P||e.53)){c.21();e.2u();c.al()}}if((1k===c.2O.iG||e.80&&1k===hi)&&c.C.6j){F c.hY(e,2q,1k)}if(1k===c.2O.a2){c.i4(e,1t,L)}},hZ:B(e,1t){e.2u();c.21();q o=$(1t).L().Y();c.3B(X.82("\\n"));if(o.4G(/\\s$/)==-1){c.3B(X.82("\\n"))}c.1j();c.1c("7x",e);F E},hY:B(e,2q,1k){if(!c.C.i2){F N}if(c.9B(c.2R())&&c.C.aW===E){F N}e.2u();if(2q===N&&!e.53){c.21();c.3B(X.82("\\t"));c.1j();F E}I{if(c.C.aW!==E){c.21();c.3B(X.82(i3(c.C.aW+1).5V("\\mp")));c.1j();F E}I{if(!e.53){c.cx()}I{c.cy()}}}F E},i4:B(e,1t,L){if(L&&1t&&L.4L.Q=="6h"&&L.Q=="fB"&&1t.Q=="3h"&&$(L).4c("li").1V()==1){q Y=$(1t).Y().G(/[\\7D-\\gs\\gB]/g,"");if(Y==""){q J=L.4L;$(L).1w();c.4g(J);c.1j();F E}}if(1E 1t.Q!=="1J"&&/^(H[1-6])$/i.4e(1t.Q)){q J;if(c.C.1N===E){J=$("<p>"+c.C.2i+"</p>")}I{J=$("<br>"+c.C.2i)}$(1t).2e(J);c.4g(J);c.1j()}if(1E 1t.aH!=="1J"&&1t.aH!==2G){if(1t.1w&&1t.4D===3&&1t.aH.1U(/[^\\7D]/g)==2G){$(1t).4M().1w();c.1j()}}},cl:B(e){c.21();e.2u();c.al();c.1c("7x",e);F},hS:B(e){if(c.8j){F E}q 1k=e.5X;q L=c.2E();q 1t=c.3P();if(!c.C.1N&&1t.4D==3&&(L==E||L.Q=="ee")){q J=$("<p>").1h($(1t).6q());$(1t).2e(J);q 4f=$(J).4f();if(1E(4f[0])!=="1J"&&4f[0].Q=="bC"){4f.1w()}c.7G(J)}if((c.C.7d||c.C.6l||c.C.75)&&1k===c.2O.b9){c.ix()}if(1k===c.2O.eC||1k===c.2O.a2){F c.kP(e)}c.1c("5d",e);c.1j(e)},ix:B(){c.e7(c.C.8a,c.C.7d,c.C.6l,c.C.75,c.C.7A);2V($.M(B(){if(c.C.6l){c.4T()}if(c.C.5m){c.5m()}},c),5)},iu:B(){if(!c.C.cn){F}$.1u(c.C.cn,$.M(B(i,s){if(cq[s]){$.4W(c,cq[s]);if($.7z(cq[s].77)){c.77()}}},c))},5j:B(){c.io();if(c.C.64){c.co(c.$1v)}I{c.$cp=c.$1v.2U();c.$1v=c.bd(c.$cp);c.co(c.$cp)}},co:B(el){c.$1v.1i("69",c.C.63).2U();c.$2C.at(el).1h(c.$2Z).1h(c.$1v)},io:B(){c.$2Z=$(\'<1Q 1o="2p: 3O%;" cS="0" />\').b8("jZ",$.M(B(){if(c.C.4n){c.cV();if(c.3L===""){c.3L=c.C.2i}c.$2Z.1Y()[0].gW(c.3L);c.$2Z.1Y()[0].h8();q gV=gS($.M(B(){if(c.$2Z.1Y().1b("2v").o()){hd(gV);c.cZ()}},c),0)}I{c.cZ()}},c))},bG:B(){F c.$2Z[0].bK.X},cV:B(){q 3C=c.bG();if(3C.aE){3C.ly(3C.aE)}F 3C},cK:B(1f){1f=1f||c.C.1f;if(c.kF(1f)){c.$2Z.1Y().1b("9U").1h(\'<1r 4m="lw" 1S="\'+1f+\'" />\')}if($.lu(1f)){$.1u(1f,$.M(B(i,1K){c.cK(1K)},c))}},cZ:B(){c.$K=c.$2Z.1Y().1b("2v").1i({3K:N,69:c.C.63});if(c.$K[0]){c.X=c.$K[0].lK;c.42=c.X.me||42}c.cK();if(c.C.4n){c.d1(c.$1v.1p())}I{c.6V(c.3L,N,E)}c.cJ();c.cH()},hj:B(){if(c.C.4U!==E){c.cR=c.C.4U;c.C.4U=N}I{if(1E c.$2j.1i("4U")=="1J"||c.$2j.1i("4U")==""){c.C.4U=E}I{c.cR=c.$2j.1i("4U");c.C.4U=N}}},gl:B(o){if(c.C.4U===E){F E}if(c.9B(o)){c.C.2h=E;c.cQ();c.cM();F c.cP()}I{c.cM()}F E},cQ:B(){c.$K.on("2h.55",$.M(c.hm,c))},cM:B(){c.$K.on("cN.55",$.M(c.hh,c))},cP:B(){q ph=$(\'<V 1x="55">\').1a("U","9s").1i("3K",E).Y(c.cR);if(c.C.1N===E){F $("<p>").1h(ph)}I{F ph}},hh:B(){q o=c.2R();if(c.9B(o)){c.cQ();c.$K.o(c.cP())}},hm:B(){c.$K.1b("V.55").1w();q o="";if(c.C.1N===E){o=c.C.58}c.$K.3b("2h.55");c.$K.o(o);if(c.C.1N===E){c.4g(c.$K.4c()[0])}I{c.2h()}c.1j()},hs:B(){c.$K.1b("V.55").1w();c.$K.3b("2h.55")},hq:B(o){F o.G(/<V 1x="55"(.*?)>(.*?)<\\/V>/i,"")},6j:B(e,1k){if(!c.C.6j){if((e.9P||e.80)&&(1k===66||1k===73)){e.2u()}F E}$.1u(c.C.6j,$.M(B(4p,hn){q 54=4p.4o(",");3z(q i in 54){if(1E 54[i]==="8I"){c.ho(e,$.2b(54[i]),$.M(B(){m1(hn)},c))}}},c))},ho:B(e,54,hA){q hu={8:"mk",9:"52",10:"F",13:"F",16:"7V",17:"3x",18:"8n",19:"md",20:"mc",27:"m5",32:"6c",33:"m4",34:"m7",35:"3l",36:"ml",37:"1s",38:"lC",39:"4Z",40:"ln",45:"4y",46:"56",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",3O:"4",lp:"5",lj:"6",lg:"7",lJ:"8",lD:"9",lG:"*",lI:"+",lB:"-",lA:".",lx:"/",mx:"f1",rm:"f2",rk:"f3",rp:"f4",rr:"f5",rc:"f6",qs:"f7",qv:"f8",qy:"f9",qe:"ql",qk:"qi",qj:"qV",qY:"qZ",qQ:"h7",qP:"-",qD:";",qE:"=",qu:",",qL:"-",qK:".",qM:"/",qN:"`",hi:"[",qO:"\\\\",qJ:"]",qI:"\'"};q cL={"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"qF","=":"+",";":": ","\'":\'"\',",":"<",".":">","/":"?","\\\\":"|"};54=54.3N().4o(" ");q aw=hu[e.2O],7S=51.qG(e.5X).3N(),7q="",7u={};$.1u(["8n","3x","4w","7V"],B(2K,az){if(e[az+"qH"]&&aw!==az){7q+=az+"+"}});if(aw){7u[7q+aw]=N}if(7S){7u[7q+7S]=N;7u[7q+cL[7S]]=N;if(7q==="7V+"){7u[cL[7S]]=N}}3z(q i=0,l=54.1m;i<l;i++){if(7u[54[i]]){e.2u();F hA.bO(c,hw)}}},2h:B(){if(!c.1C("94")){c.42.2V($.M(c.aK,c,N),1)}I{c.$K.2h()}},4i:B(){if(c.1C("3t")){q 1T=c.X.aE.3e}c.$K.2h();if(c.1C("3t")){c.X.aE.3e=1T}},cb:B(){if(!c.1C("31")){c.aK()}I{if(c.C.1N===E){q 2W=c.$K.4c().2W();c.$K.2h();c.7G(2W)}I{c.aK()}}},aK:B(5h,2j){c.$K.2h();if(1E 2j=="1J"){2j=c.$K[0]}q O=c.3o();O.aM(2j);O.5h(5h||E);q 1q=c.29();1q.4X();1q.5g(O)},d0:B(aG){if(c.C.5N){c.hz(aG)}I{c.hy()}},hy:B(){q o=c.$1v.2U().1p();if(1E c.6E!=="1J"){q 6E=c.6E.G(/\\n/g,"");q 78=o.G(/\\n/g,"");78=c.6Z(78,E);c.6E=c.6Z(6E,E)!==78}if(c.6E){if(c.C.4n&&o===""){c.d1(o)}I{c.6V(o);if(c.C.4n){c.d2()}}c.1c("68",E,o)}if(c.C.1Q){c.$2Z.2M()}I{c.$K.2M()}if(c.C.4n){c.$K.1i("3K",N)}c.$1v.3b("5T.U-5s-gP");c.$K.2h();c.1W();c.7H();c.hN();c.ct("o");c.C.5N=N},hz:B(aG){if(aG!==E){c.28()}q 22=2G;if(c.C.1Q){22=c.$2Z.22();if(c.C.4n){c.$K.2B("3K")}c.$2Z.2U()}I{22=c.$K.iE();c.$K.2U()}q o=c.$1v.1p();if(o!==""&&c.C.gQ){c.$1v.1p(c.l5(o))}c.6E=o;c.$1v.22(22).2M().2h();c.$1v.on("5T.U-5s-gP",c.gR);c.gG();c.7b("o");c.C.5N=E},gR:B(e){if(e.2O===9){q $el=$(c);q 2y=$el.2R(0).4g;$el.1p($el.1p().aQ(0,2y)+"\\t"+$el.1p().aQ($el.2R(0).7G));$el.2R(0).4g=$el.2R(0).7G=2y+1;F E}},7C:B(){q cY=E;c.ah=gS($.M(B(){q o=c.2R();if(cY!==o){q 2m=c.$1v.1i("2m");$.iU({1K:c.C.7C,1G:"7R",1a:"2m="+2m+"&"+2m+"="+r0(r1(o)),4h:$.M(B(1a){q 1M=$.8J(1a);if(1E 1M.3U=="1J"){c.1c("7C",E,1M)}I{c.1c("r2",E,1M)}cY=o},c)})}},c),c.C.ah*qX)},gI:B(){if(c.5a()&&c.C.cU.1m>0){$.1u(c.C.cU,$.M(B(i,s){q 2K=c.C.4a.44(s);c.C.4a.ap(2K,1)},c))}if(c.C.30){c.C.4a=c.C.gJ}I{if(!c.C.gK){q 2K=c.C.4a.44("o");c.C.4a.ap(2K,1)}}if(c.C.1A){$.1u(c.C.1A.6x.1R,$.M(B(i,s){if($.4O(i,c.C.gM)=="-1"){e9 c.C.1A.6x.1R[i]}},c))}if(c.C.4a.1m===0){F E}c.il();c.$1A=$("<2r>").2z("cW").1i("id","qW"+c.7F);if(c.C.7X){c.$1A.2z("U-1A-7X")}if(c.C.h9&&c.5a()){c.$1A.2z("U-1A-8V")}if(c.C.30){c.$30=$(\'<12 1x="ik">\').1i("id","hb"+c.7F).2U();c.$30.1h(c.$1A);$("2v").1h(c.$30)}I{if(c.C.7O){c.$1A.2z("U-1A-qS");$(c.C.7O).o(c.$1A)}I{c.$2C.6d(c.$1A)}}$.1u(c.C.4a,$.M(B(i,2w){if(c.C.1A[2w]){q 2d=c.C.1A[2w];if(c.C.84===E&&2w==="25"){F N}c.$1A.1h($("<li>").1h(c.7f(2w,2d)))}},c));c.$1A.1b("a").1i("7c","-1");if(c.C.6B){c.cX();$(c.C.7T).on("h7.U",$.M(c.cX,c))}if(c.C.aY){c.$K.on("a8.U 5d.U",$.M(c.8r,c))}},cX:B(){q 3e=$(c.C.7T).3e();q 7M=0;q 1s=0;q 3l=0;if(c.C.7T===X){7M=c.$2C.2Y().1T}I{7M=1}3l=7M+c.$2C.22()+40;if(3e>7M){q 2p="3O%";if(c.C.as){1s=c.$2C.2Y().1s;2p=c.$2C.ic();c.$1A.2z("im")}c.6B=N;if(c.C.7T===X){c.$1A.1f({3k:"ak",2p:2p,9u:h0,1T:c.C.bb+"px",1s:1s})}I{c.$1A.1f({3k:"8T",2p:2p,9u:h0,1T:(c.C.bb+3e)+"px",1s:0})}if(3e<3l){c.$1A.1f("hH","gq")}I{c.$1A.1f("hH","8E")}}I{c.6B=E;c.$1A.1f({3k:"gC",2p:"4l",1T:0,1s:1s});if(c.C.as){c.$1A.3c("im")}}},il:B(){if(!c.C.30){F}c.$K.on("a8.U 5d.U",c,$.M(B(e){q Y=c.aB();if(e.1G==="a8"&&Y!=""){c.cF(e)}if(e.1G==="5d"&&e.53&&Y!=""){q $cG=$(c.8g(c.29().qU)),2Y=$cG.2Y();2Y.22=$cG.22();c.cF(2Y,N)}},c))},cF:B(e,ij){if(!c.C.30){F}c.28();q 1s,1T;$(".ik").2U();if(ij){1s=e.1s;1T=e.1T+e.22+14;if(c.C.1Q){1T+=c.$2C.3k().1T-$(c.X).3e();1s+=c.$2C.3k().1s}}I{q 2p=c.$30.ic();1s=e.jl;if($(c.X).2p()<(1s+2p)){1s-=2p}1T=e.jm+14;if(c.C.1Q){1T+=c.$2C.3k().1T;1s+=c.$2C.3k().1s}I{1T+=$(c.X).3e()}}c.$30.1f({1s:1s+"px",1T:1T+"px"}).2M();c.ie()},ie:B(){if(!c.C.30){F}q 6W=$.M(B(3C){$(3C).on("9J.U",$.M(B(e){if($(e.1O).2g(c.$1A).1m===0){c.$30.6N(3O);c.bA();$(3C).3b(e)}},c)).on("5T.U",$.M(B(e){if(e.5X===c.2O.dY){c.29().ih()}c.$30.6N(3O);$(3C).3b(e)},c))},c);6W(X);if(c.C.1Q){6W(c.X)}},bi:B(){if(!c.C.30){F}q 6W=$.M(B(3C){$(3C).on("l1.U",$.M(B(e){if($(e.1O).2g(c.$1A).1m===0){c.$30.6N(3O);$(3C).3b(e)}},c))},c);6W(X);if(c.C.1Q){6W(c.X)}},hJ:B($1R,ir){$.1u(ir,$.M(B(2w,2d){if(!2d.2S){2d.2S=""}q $6Y;if(2d.2m==="aN"){$6Y=$(\'<a 1x="qC">\')}I{$6Y=$(\'<a 1S="#" 1x="\'+2d.2S+" qB"+2w+\'">\'+2d.1e+"</a>");$6Y.on("23",$.M(B(e){if(c.C.30){c.1W()}if(e.2u){e.2u()}if(c.1C("3t")){e.hU=E}if(2d.1c){2d.1c.5q(c,2w,$6Y,2d,e)}if(2d.2o){c.26(2d.2o,2w)}if(2d.1H){c[2d.1H](2w)}c.8r();if(c.C.30){c.$30.6N(3O)}},c))}$1R.1h($6Y)},c))},cj:B(e,1k){if(!c.C.5N){e.2u();F E}q $1D=c.4q(1k);q $1R=$1D.1a("1R").8P(X.2v);if($1D.3v("7a")){c.bj()}I{c.bj();c.1c("cj",{1R:$1R,1k:1k,1D:$1D});c.7b(1k);$1D.2z("7a");q 7U=$1D.2Y();q cr=$1R.2p();if((7U.1s+cr)>$(X).2p()){7U.1s-=cr}q 1s=7U.1s+"px";q cm=$1D.iE();q 3k="8T";q 1T=(cm+c.C.bb)+"px";if(c.C.6B&&c.6B){3k="ak"}I{1T=7U.1T+cm+"px"}$1R.1f({3k:3k,1s:1s,1T:1T}).2M();c.1c("qm",{1R:$1R,1k:1k,1D:$1D})}q bh=$.M(B(e){c.ci(e,$1R)},c);$(X).b8("23",bh);c.$K.b8("23",bh);c.$K.b8("qh",bh);e.qg();c.4i()},bj:B(){c.$1A.1b("a.7a").3c("8z").3c("7a");$(".hO").2U();c.1c("ci")},ci:B(e,$1R){if(!$(e.1O).3v("7a")){$1R.3c("7a");c.bj()}},7f:B(2w,2d,hT){q $1D=$(\'<a 1S="ab:;" 1e="\'+2d.1e+\'" 7c="-1" 1x="re-aR re-\'+2w+\'"></a>\');if(1E hT!="1J"){$1D.2z("U-2a-T")}$1D.on("23",$.M(B(e){if(e.2u){e.2u()}if(c.1C("3t")){e.hU=E}if($1D.3v("cB")){F E}if(c.7h()===E&&!2d.2o){c.4i()}if(2d.2o){c.4i();c.26(2d.2o,2w);c.bi()}I{if(2d.1H&&2d.1H!=="2M"){c[2d.1H](2w);c.bi()}I{if(2d.1c){2d.1c.5q(c,2w,$1D,2d,e);c.bi()}I{if(2d.1R){c.cj(e,2w)}}}}c.8r(E,2w)},c));if(2d.1R){q $1R=$(\'<12 1x="hO qb\'+2w+\'" 1o="3f: 3r;">\');$1D.1a("1R",$1R);c.hJ($1R,2d.1R)}F $1D},4q:B(1k){if(!c.C.1A){F E}F $(c.$1A.1b("a.re-"+1k))},qa:B(cs,Q){c.C.aY.3d(cs);c.C.cv[Q]=cs},fo:B(1k){q 2a=c.4q(1k);if(2a.3v("8z")){c.ct(1k)}I{c.7b(1k)}},7b:B(1k){q 2a=c.4q(1k);2a.2z("8z")},ct:B(1k){q 2a=c.4q(1k);2a.3c("8z")},fl:B(2w){c.$1A.1b("a.re-aR").ay(".re-"+2w).3c("8z")},hN:B(){c.$1A.1b("a.re-aR").ay("a.re-o").3c("cB")},gG:B(){c.$1A.1b("a.re-aR").ay("a.re-o").2z("cB")},qc:B(1k,aP){c.4q(1k).2z("re-"+aP)},qd:B(1k,aP){c.4q(1k).3c("re-"+aP)},qf:B(1k,2m){q 1D=c.4q(1k);1D.3c("U-2a-T");1D.2z("fa-U-2a");1D.o(\'<i 1x="fa \'+2m+\'"></i>\')},qn:B(1k,1e,1c,1R){if(!c.C.1A){F}q 2a=c.7f(1k,{1e:1e,1c:1c,1R:1R},N);c.$1A.1h($("<li>").1h(2a));F 2a},qo:B(1k,1e,1c,1R){if(!c.C.1A){F}q 2a=c.7f(1k,{1e:1e,1c:1c,1R:1R},N);c.$1A.6d($("<li>").1h(2a))},qx:B(hX,1k,1e,1c,1R){if(!c.C.1A){F}q 2a=c.7f(1k,{1e:1e,1c:1c,1R:1R},N);q $2a=c.4q(hX);if($2a.1V()!==0){$2a.L().2I($("<li>").1h(2a))}I{c.$1A.1h($("<li>").1h(2a))}F 2a},qw:B(i1,1k,1e,1c,1R){if(!c.C.1A){F}q 2a=c.7f(1k,{1e:1e,1c:1c,1R:1R},N);q $2a=c.4q(i1);if($2a.1V()!==0){$2a.L().3S($("<li>").1h(2a))}I{c.$1A.1h($("<li>").1h(2a))}F 2a},qz:B(1k){q $2a=c.4q(1k);$2a.1w()},8r:B(e,2w){q L=c.2E();c.fl(2w);if(e===E&&2w!=="o"){if($.4O(2w,c.C.aY)!=-1){c.fo(2w)}F}if(L&&L.Q==="A"){c.$1A.1b("a.fG").Y(c.C.1F.fg)}I{c.$1A.1b("a.fG").Y(c.C.1F.cz)}$.1u(c.C.cv,$.M(B(1k,2s){if($(L).2g(1k,c.$K.2R()[0]).1m!=0){c.7b(2s)}},c));q $L=$(L).2g(c.C.5t.43().3N(),c.$K[0]);if($L.1m){q 57=$L.1f("Y-57");if(57==""){57="1s"}c.7b("57"+57)}},aL:B(o){q 1q=c.29();if(1q.48&&1q.4V){q O=c.3o();O.aC();q el=c.X.4C("12");el.3Q=o;q 4k=c.X.cD(),J,5v;3w((J=el.8G)){5v=4k.7g(J)}q r4=4k.8G;O.3B(4k);if(5v){O=O.ag();O.ae(5v);O.5h(N)}1q.4X();1q.5g(O)}},2o:B(1P,2F,1j){if(1P==="d8"&&c.1C("3t")){2F="<"+2F+">"}if(1P==="5c"&&c.1C("3t")){if(!c.8L()){c.4i();c.X.1I.5i().do(2F)}I{c.aL(2F)}}I{c.X.26(1P,E,2F)}if(1j!==E){c.1j()}c.1c("26",1P,2F)},26:B(1P,2F,1j){if(!c.C.5N){c.$1v.2h();F E}if(1P==="3m"||1P==="3q"||1P==="4K"||1P==="fC"){c.21()}if(1P==="fm"||1P==="fy"){q L=c.2E();if(L.Q==="qq"||L.Q==="qp"){c.bk(L)}}if(1P==="5c"){c.9i(2F,1j);c.1c("26",1P,2F);F}if(c.74("6i")&&!c.C.fz){F E}if(1P==="8k"||1P==="8q"){F c.fv(1P,2F)}if(1P==="6F"){F c.fu(1P,2F)}c.2o(1P,2F,1j);if(1P==="fx"){c.$K.1b("hr").2B("id")}},fu:B(1P,2F){c.21();q 1r=c.74("A");if(1r){$(1r).2e($(1r).Y());c.1j();c.1c("26",1P,2F);F}},fv:B(1P,2F){c.21();q L=c.2E();q $3a=$(L).2g("ol, 2r");if(!c.4j($3a)&&$3a.1V()!=0){$3a=E}q 1w=E;if($3a&&$3a.1m){1w=N;q 5x=$3a[0].Q;if((1P==="8k"&&5x==="qr")||(1P==="8q"&&5x==="fB")){1w=E}}c.28();if(1w){q 1X=c.7r();q 4t=c.3I(1X);if(1E 1X[0]!="1J"&&1X.1m>1&&1X[0].4D==3){4t.jS(c.2N())}q 1a="",5B="";$.1u(4t,$.M(B(i,s){if(s.Q=="3h"){q $s=$(s);q 7e=$s.6q();7e.1b("2r","ol").1w();if(c.C.1N===E){1a+=c.3Z($("<p>").1h(7e.1Y()))}I{q fH=7e.o().G(/<br\\s?\\/?>$/i,"");1a+=fH+"<br>"}if(i==0){$s.2z("U-5B").6z();5B=c.3Z($s)}I{$s.1w()}}},c));o=c.$K.o().G(5B,"</"+5x+">"+1a+"<"+5x+">");c.$K.o(o);c.$K.1b(5x+":6z").1w()}I{q fh=$(c.2E()).2g("1g");if(c.1C("3t")&&!c.8L()&&c.C.1N){q 3G=c.bx("12");q 9w=$(3G).o();q 7i=$("<2r>");if(1P=="8q"){7i=$("<ol>")}q 8o=$("<li>");if($.2b(9w)==""){8o.1h(9w+\'<V id="1I-1L-1">\'+c.C.2i+"</V>");7i.1h(8o);c.$K.1b("#1I-1L-1").2e(7i)}I{8o.1h(9w);7i.1h(8o);$(3G).2e(7i)}}I{c.X.26(1P)}q L=c.2E();q $3a=$(L).2g("ol, 2r");if(c.C.1N===E){q 9o=$.2b($3a.Y());if(9o==""){$3a.4c("li").1b("br").1w();$3a.4c("li").1h(\'<V id="1I-1L-1">\'+c.C.2i+"</V>")}}if(fh.1V()!=0){$3a.kQ("<1g>")}if($3a.1m){q $7n=$3a.L();if(c.4j($7n)&&$7n[0].Q!="3h"&&c.7v($7n[0])){$7n.2e($7n.1Y())}}if(c.1C("31")){c.$K.2h()}}c.1W();c.$K.1b("#1I-1L-1").2B("id");c.1j();c.1c("26",1P,2F);F},cx:B(){c.d4("6m")},cy:B(){c.d4("7m")},d4:B(1P){c.21();if(1P==="6m"){q 1l=c.2N();c.28();if(1l&&1l.Q=="3h"){q L=c.2E();q $3a=$(L).2g("ol, 2r");q 5x=$3a[0].Q;q 4t=c.3I();$.1u(4t,B(i,s){if(s.Q=="3h"){q $4M=$(s).4M();if($4M.1V()!=0&&$4M[0].Q=="3h"){q $dF=$4M.4c("2r, ol");if($dF.1V()==0){$4M.1h($("<"+5x+">").1h(s))}I{$dF.1h(s)}}}})}I{if(1l===E&&c.C.1N===N){c.2o("6o","2f");q 7j=c.2N();q 1l=$(\'<12 1a-81="">\').o($(7j).o());$(7j).2e(1l);q 1s=c.9M($(1l).1f("2H-1s"))+c.C.9q;$(1l).1f("2H-1s",1s+"px")}I{q 79=c.3I();$.1u(79,$.M(B(i,1z){q $el=E;if(1z.Q==="6h"){F}if($.4O(1z.Q,c.C.5t)!==-1){$el=$(1z)}I{$el=$(1z).2g(c.C.5t.43().3N(),c.$K[0])}q 1s=c.9M($el.1f("2H-1s"))+c.C.9q;$el.1f("2H-1s",1s+"px")},c))}}c.1W()}I{c.28();q 1l=c.2N();if(1l&&1l.Q=="3h"){q 4t=c.3I();q 2K=0;c.dG(1l,2K,4t)}I{q 79=c.3I();$.1u(79,$.M(B(i,1z){q $el=E;if($.4O(1z.Q,c.C.5t)!==-1){$el=$(1z)}I{$el=$(1z).2g(c.C.5t.43().3N(),c.$K[0])}q 1s=c.9M($el.1f("2H-1s"))-c.C.9q;if(1s<=0){if(c.C.1N===N&&1E($el.1a("81"))!=="1J"){$el.2e($el.o()+"<br>")}I{$el.1f("2H-1s","");c.4H($el,"1o")}}I{$el.1f("2H-1s",1s+"px")}},c))}c.1W()}c.1j()},dG:B(li,2K,4t){if(li&&li.Q=="3h"){q $L=$(li).L().L();if($L.1V()!=0&&$L[0].Q=="3h"){$L.2I(li)}I{if(1E 4t[2K]!="1J"){li=4t[2K];2K++;c.dG(li,2K,4t)}I{c.26("8k")}}}},dI:B(){c.8l("","rg")},dD:B(){c.8l("4Z","rA")},dy:B(){c.8l("6O","rz")},dA:B(){c.8l("dB","rB")},8l:B(1G,1P){c.21();if(c.cw()){c.X.26(1P,E,E);F N}c.28();q 1l=c.2N();if(!1l&&c.C.1N){c.2o("d8","12");q 7j=c.2N();q 1l=$(\'<12 1a-81="">\').o($(7j).o());$(7j).2e(1l);$(1l).1f("Y-57",1G);c.4H(1l,"1o");if(1G==""&&1E($(1l).1a("81"))!=="1J"){$(1l).2e($(1l).o())}}I{q 79=c.3I();$.1u(79,$.M(B(i,1z){q $el=E;if($.4O(1z.Q,c.C.5t)!==-1){$el=$(1z)}I{$el=$(1z).2g(c.C.5t.43().3N(),c.$K[0])}if($el){$el.1f("Y-57",1G);c.4H($el,"1o")}},c))}c.1W();c.1j()},dJ:B(o){q ph=c.gl(o);if(ph!==E){F ph}if(c.C.1N===E){if(o===""){o=c.C.58}I{if(o.4G(/^<hr\\s?\\/?>$/gi)!==-1){o="<hr>"+c.C.58}}}F o},dK:B(o){if(c.C.9a&&!c.C.rD){o=o.G(/<12(.*?)>([\\w\\W]*?)<\\/12>/gi,"<p$1>$2</p>")}if(c.C.5Y){o=c.9z(o)}F o},dR:B(o){if(c.C.dS){o=o.G(/\\{\\{(.*?)\\}\\}/gi,"<!-- 9r ge $1 -->");o=o.G(/\\{(.*?)\\}/gi,"<!-- 9r $1 -->")}o=o.G(/<3n(.*?)>([\\w\\W]*?)<\\/3n>/gi,\'<1e 1G="Y/ab" 1o="3f: 3r;" 1x="U-3n-1d"$1>$2</1e>\');o=o.G(/<1o(.*?)>([\\w\\W]*?)<\\/1o>/gi,\'<2l$1 1o="3f: 3r;" 4m="U-1o-1d">$2</2l>\');o=o.G(/<2t(.*?)>([\\w\\W]*?)<\\/2t>/gi,\'<2l$1 4m="U-2t-1d">$2</2l>\');if(c.C.8x){o=o.G(/<\\?4I([\\w\\W]*?)\\?>/gi,\'<2l 1o="3f: 3r;" 4m="U-4I-1d">$1</2l>\')}I{o=o.G(/<\\?4I([\\w\\W]*?)\\?>/gi,"")}F o},fL:B(o){if(c.C.dS){o=o.G(/<!-- 9r ge (.*?) -->/gi,"{{$1}}");o=o.G(/<!-- 9r (.*?) -->/gi,"{$1}")}o=o.G(/<1e 1G="Y\\/ab" 1o="3f: 3r;" 1x="U-3n-1d"(.*?)>([\\w\\W]*?)<\\/1e>/gi,\'<3n$1 1G="Y/ab">$2<\\/3n>\');o=o.G(/<2l(.*?) 1o="3f: 3r;" 4m="U-1o-1d">([\\w\\W]*?)<\\/2l>/gi,"<1o$1>$2</1o>");o=o.G(/<2l(.*?)4m="U-2t-1d"(.*?)>([\\w\\W]*?)<\\/2l>/gi,"<2t$1$2>$3</2t>");if(c.C.8x){o=o.G(/<2l 1o="3f: 3r;" 4m="U-4I-1d">([\\w\\W]*?)<\\/2l>/gi,"<?4I\\r\\n$1\\r\\n?>")}F o},6Z:B(o,3E){if(3E!==E){q 3E=[];q 2x=o.1U(/<(2q|1o|3n|1e)(.*?)>([\\w\\W]*?)<\\/(2q|1o|3n|1e)>/gi);if(2x===2G){2x=[]}if(c.C.8x){q 6X=o.1U(/<\\?4I([\\w\\W]*?)\\?>/gi);if(6X){2x=$.dP(2x,6X)}}if(2x){$.1u(2x,B(i,s){o=o.G(s,"gr"+i);3E.3d(s)})}}o=o.G(/\\n/g," ");o=o.G(/[\\t]*/g,"");o=o.G(/\\n\\s*\\n/g,"\\n");o=o.G(/^[\\s\\n]*/g," ");o=o.G(/[\\s\\n]*$/g," ");o=o.G(/>\\s{2,}</g,"> <");o=c.gj(o,3E);o=o.G(/\\n\\n/g,"\\n");F o},gj:B(o,3E){if(3E===E){F o}$.1u(3E,B(i,s){o=o.G("gr"+i,s)});F o},dq:B(o){o=o.G(/[\\7D-\\gs\\gB]/g,"");q dU=["<b>\\\\s*</b>","<b>&3u;</b>","<em>\\\\s*</em>"];q 70=["<2q></2q>","<2f>\\\\s*</2f>","<dd></dd>","<dt></dt>","<2r></2r>","<ol></ol>","<li></li>","<1n></1n>","<3j></3j>","<V>\\\\s*<V>","<V>&3u;<V>","<p>\\\\s*</p>","<p></p>","<p>&3u;</p>","<p>\\\\s*<br>\\\\s*</p>","<12>\\\\s*</12>","<12>\\\\s*<br>\\\\s*</12>"];if(c.C.a1){70=70.rd(dU)}I{70=dU}q 4P=70.1m;3z(q i=0;i<4P;++i){o=o.G(2c 2J(70[i],"gi"),"")}F o},9z:B(o){o=$.2b(o);if(c.C.1N===N){F o}if(o===""||o==="<p></p>"){F c.C.58}o=o+"\\n";if(c.C.a1===E){F o}q dx=[];q 2x=o.1U(/<(1n|12|2q|3M)(.*?)>([\\w\\W]*?)<\\/(1n|12|2q|3M)>/gi);if(!2x){2x=[]}q dQ=o.1U(/<!--([\\w\\W]*?)-->/gi);if(dQ){2x=$.dP(2x,dQ)}if(c.C.8x){q 6X=o.1U(/<2l(.*?)4m="U-4I-1d">([\\w\\W]*?)<\\/2l>/gi);if(6X){2x=$.dP(2x,6X)}}if(2x){$.1u(2x,B(i,s){dx[i]=s;o=o.G(s,"{G"+i+"}\\n")})}o=o.G(/<br \\/>\\s*<br \\/>/gi,"\\n\\n");o=o.G(/<br><br>/gi,"\\n\\n");B R(4p,gu,r){F o.G(2c 2J(4p,gu),r)}q 3D="(rh|o|2v|9U|1e|4w|1o|3n|1r|1Q|1n|3T|di|ra|r6|r5|8c|3j|1g|dN|12|dl|dd|dt|2r|ol|li|2q|3s|4b|2t|gc|fU|2f|dm|r7|1o|p|h[1-6]|hr|fV|nE|2l|jk|jj|r8|aS|49|r9|ri|rj|rs|rt|ru)";o=R("(<"+3D+"[^>]*>)","gi","\\n$1");o=R("(</"+3D+">)","gi","$1\\n\\n");o=R("\\r\\n","g","\\n");o=R("\\r","g","\\n");o=R("/\\n\\n+/","g","\\n\\n");q 4A=o.4o(2c 2J("\\ns*\\n","g"),-1);o="";3z(q i in 4A){if(4A.rq(i)){if(4A[i].4G("{G")==-1){4A[i]=4A[i].G(/<p>\\n\\t?<\\/p>/gi,"");4A[i]=4A[i].G(/<p><\\/p>/gi,"");if(4A[i]!=""){o+="<p>"+4A[i].G(/^\\n+|\\n+$/g,"")+"</p>"}}I{o+=4A[i]}}}o=R("<p><p>","gi","<p>");o=R("</p></p>","gi","</p>");o=R("<p>s?</p>","gi","");o=R("<p>([^<]+)</(12|dm|2t)>","gi","<p>$1</p></$2>");o=R("<p>(</?"+3D+"[^>]*>)</p>","gi","$1");o=R("<p>(<li.+?)</p>","gi","$1");o=R("<p>s?(</?"+3D+"[^>]*>)","gi","$1");o=R("(</?"+3D+"[^>]*>)s?</p>","gi","$1");o=R("(</?"+3D+"[^>]*>)s?<br />","gi","$1");o=R("<br />(s*</?(?:p|li|12|dl|dd|dt|dN|2q|1g|2r|ol)[^>]*>)","gi","$1");o=R("\\n</p>","gi","</p>");o=R("<li><p>","gi","<li>");o=R("</p></li>","gi","</li>");o=R("</li><p>","gi","</li>");o=R("<p>\\t?\\n?<p>","gi","<p>");o=R("</dt><p>","gi","</dt>");o=R("</dd><p>","gi","</dd>");o=R("<br></p></2f>","gi","</2f>");o=R("<p>\\t*</p>","gi","");$.1u(dx,B(i,s){o=o.G("{G"+i+"}",s)});F $.2b(o)},9S:B(o,6V){q 6r="3V";if(c.C.6r==="b"){6r="b"}q 6p="em";if(c.C.6p==="i"){6p="i"}o=o.G(/<V 1o="2A-1o: 3q;">([\\w\\W]*?)<\\/V>/gi,"<"+6p+">$1</"+6p+">");o=o.G(/<V 1o="2A-7o: 3m;">([\\w\\W]*?)<\\/V>/gi,"<"+6r+">$1</"+6r+">");if(c.C.6r==="3V"){o=o.G(/<b>([\\w\\W]*?)<\\/b>/gi,"<3V>$1</3V>")}I{o=o.G(/<3V>([\\w\\W]*?)<\\/3V>/gi,"<b>$1</b>")}if(c.C.6p==="em"){o=o.G(/<i>([\\w\\W]*?)<\\/i>/gi,"<em>$1</em>")}I{o=o.G(/<em>([\\w\\W]*?)<\\/em>/gi,"<i>$1</i>")}o=o.G(/<V 1o="Y-bZ: 4K;">([\\w\\W]*?)<\\/V>/gi,"<u>$1</u>");if(6V!==N){o=o.G(/<5F>([\\w\\W]*?)<\\/5F>/gi,"<56>$1</56>")}I{o=o.G(/<56>([\\w\\W]*?)<\\/56>/gi,"<5F>$1</5F>")}F o},8d:B(o){if(o==""||1E o=="1J"){F o}q 9T=E;if(c.C.5G!==E){9T=N}q 2Q=9T===N?c.C.5G:c.C.8y;q g8=/<\\/?([a-z][a-eL-9]*)\\b[^>]*>/gi;o=o.G(g8,B($0,$1){if(9T===N){F $.4O($1.3N(),2Q)>"-1"?$0:""}I{F $.4O($1.3N(),2Q)>"-1"?"":$0}});o=c.9S(o);F o},de:B(o,ga){q 2q=o.1U(/<(2q|2k)(.*?)>([\\w\\W]*?)<\\/(2q|2k)>/gi);if(2q!==2G){$.1u(2q,$.M(B(i,s){q 2Q=s.1U(/<(2q|2k)(.*?)>([\\w\\W]*?)<\\/(2q|2k)>/i);2Q[3]=2Q[3].G(/&3u;/g," ");if(ga!==E){2Q[3]=c.ce(2Q[3])}2Q[3]=2Q[3].G(/\\$/g,"&#36;");o=o.G(s,"<"+2Q[1]+2Q[2]+">"+2Q[3]+"</"+2Q[1]+">")},c))}F o},ce:B(4p){4p=51(4p).G(/&9h;/g,"&").G(/&lt;/g,"<").G(/&gt;/g,">").G(/&g6;/g,\'"\');F 4p.G(/&/g,"&9h;").G(/</g,"&lt;").G(/>/g,"&gt;").G(/"/g,"&g6;")},g5:B(){q $1z=c.$K.1b("li, 1B, a, b, 3V, q8, ov, i, em, u, ou, 5F, 56, V, ot");$1z.g2(\'[1o*="8t-6s: g3;"][1o*="9I-22"]\').1f("8t-6s","").1f("9I-22","");$1z.g2(\'[1o*="8t-6s: g3;"]\').1f("8t-6s","");$1z.1f("9I-22","");$.1u($1z,$.M(B(i,s){c.4H(s,"1o")},c));q $cg=c.$K.1b("b, 3V, i, em, u, 5F, 56");$cg.1f("2A-1V","");$.1u($cg,$.M(B(i,s){c.4H(s,"1o")},c));c.$K.1b(\'12[1o="Y-57: -4s-4l;"]\').1Y().l7();c.$K.1b("2r, ol, li").2B("1o")},l5:B(2k){q i=0,9C=2k.1m,3i=0,2y=2G,3l=2G,1d="",1Z="",4N="";c.8v=0;3z(;i<9C;i++){3i=i;if(-1==2k.4R(i).44("<")){1Z+=2k.4R(i);F c.dg(1Z)}3w(3i<9C&&2k.5C(3i)!="<"){3i++}if(i!=3i){4N=2k.4R(i,3i-i);if(!4N.1U(/^\\s{2,}$/g)){if("\\n"==1Z.5C(1Z.1m-1)){1Z+=c.72()}I{if("\\n"==4N.5C(0)){1Z+="\\n"+c.72();4N=4N.G(/^\\s+/,"")}}1Z+=4N}if(4N.1U(/\\n/)){1Z+="\\n"+c.72()}}2y=3i;3w(3i<9C&&">"!=2k.5C(3i)){3i++}1d=2k.4R(2y,3i-2y);i=3i;q t;if("!--"==1d.4R(1,3)){if(!1d.1U(/--$/)){3w("-->"!=2k.4R(3i,3)){3i++}3i+=2;1d=2k.4R(2y,3i-2y);i=3i}if("\\n"!=1Z.5C(1Z.1m-1)){1Z+="\\n"}1Z+=c.72();1Z+=1d+">\\n"}I{if("!"==1d[1]){1Z=c.9L(1d+">",1Z)}I{if("?"==1d[1]){1Z+=1d+">\\n"}I{if(t=1d.1U(/^<(3n|1o|2q)/i)){t[1]=t[1].3N();1d=c.dc(1d);1Z=c.9L(1d,1Z);3l=51(2k.4R(i+1)).3N().44("</"+t[1]);if(3l){4N=2k.4R(i+1,3l);i+=3l;1Z+=4N}}I{1d=c.dc(1d);1Z=c.9L(1d,1Z)}}}}}F c.dg(1Z)},72:B(){q s="";3z(q j=0;j<c.8v;j++){s+="\\t"}F s},dg:B(2k){2k=2k.G(/\\n\\s*\\n/g,"\\n");2k=2k.G(/^[\\s\\n]*/,"");2k=2k.G(/[\\s\\n]*$/,"");2k=2k.G(/<3n(.*?)>\\n<\\/3n>/gi,"<3n$1><\\/3n>");c.8v=0;F 2k},dc:B(1d){q 8w="";1d=1d.G(/\\n/g," ");1d=1d.G(/\\s{2,}/g," ");1d=1d.G(/^\\s+|\\s+$/g," ");q db="";if(1d.1U(/\\/$/)){db="/";1d=1d.G(/\\/+$/,"")}q m;3w(m=/\\s*([^= ]+)(?:=(([\'"\']).*?\\3|[^ ]+))?/.2o(1d)){if(m[2]){8w+=m[1].3N()+"="+m[2]}I{if(m[1]){8w+=m[1].3N()}}8w+=" ";1d=1d.4R(m[0].1m)}F 8w.G(/\\s*$/,"")+db+">"},9L:B(1d,1Z){q nl=1d.1U(c.d7);if(1d.1U(c.kT)||nl){1Z=1Z.G(/\\s*$/,"");1Z+="\\n"}if(nl&&"/"==1d.5C(1)){c.8v--}if("\\n"==1Z.5C(1Z.1m-1)){1Z+=c.72()}if(nl&&"/"!=1d.5C(1)){c.8v++}1Z+=1d;if(1d.1U(c.kN)||1d.1U(c.d7)){1Z=1Z.G(/ *$/,"");1Z+="\\n"}F 1Z},kP:B(e){q o=$.2b(c.$K.o());if(c.C.1N){if(o==""){e.2u();c.$K.o("");c.2h()}}I{o=o.G(/<br\\s?\\/?>/i,"");q 78=o.G(/<p>\\s?<\\/p>/gi,"");if(o===""||78===""){e.2u();q J=$(c.C.58).2R(0);c.$K.o(J);c.2h()}}c.1j()},5I:B(1d){if(c.1C("31")&&c.7h()){c.$K.2h()}c.21();q 1X=c.3I();c.28();$.1u(1X,$.M(B(i,J){if(J.Q!=="3h"){q L=$(J).L();if(1d==="p"){if((J.Q==="P"&&L.1V()!=0&&L[0].Q==="3F")||J.Q==="3F"){c.d9();F}I{if(c.C.1N){if(J&&J.Q.4G(/H[1-6]/)==0){$(J).2e(J.3Q+"<br>")}I{F}}I{c.6o(1d,J)}}}I{c.6o(1d,J)}}},c));c.1W();c.1j()},6o:B(1d,1l){if(1l===E){1l=c.2N()}if(1l===E&&c.C.1N===N){c.26("d8",1d);F N}q 1Y="";if(1d!=="2q"){1Y=$(1l).1Y()}I{1Y=$(1l).o();if($.2b(1Y)===""){1Y=\'<V id="1I-1L-1"></V>\'}}if(1l.Q==="6i"){1d="p"}if(c.C.1N===N&&1d==="p"){$(1l).2e($("<12>").1h(1Y).o()+"<br>")}I{q L=c.2E();q J=$("<"+1d+">").1h(1Y);$(1l).2e(J);if(L&&L.Q=="6h"){$(J).kQ("<1g>")}}},kf:B(kK,kO,7N){if(7N!==E){c.28()}q 8S=$("<"+kO+"/>");$(kK).2e(B(){F 8S.1h($(c).1Y())});if(7N!==E){c.1W()}F 8S},d9:B(){if(c.1C("31")&&c.7h()){c.$K.2h()}c.21();if(c.C.1N===E){c.28();q 3D=c.3I();q 2f=E;q kM=3D.1m;if(3D){q 1a="";q 5B="";q G=E;q da=N;$.1u(3D,B(i,s){if(s.Q!=="P"){da=E}});$.1u(3D,$.M(B(i,s){if(s.Q==="3F"){c.6o("p",s,E)}I{if(s.Q==="P"){2f=$(s).L();if(2f[0].Q=="3F"){q 6G=$(2f).4c("p").1V();if(6G==1){$(2f).2e(s)}I{if(6G==kM){G="2f";1a+=c.3Z(s)}I{G="o";1a+=c.3Z(s);if(i==0){$(s).2z("U-5B").6z();5B=c.3Z(s)}I{$(s).1w()}}}}I{if(da===E||3D.1m==1){c.6o("2f",s,E)}I{G="kS";1a+=c.3Z(s)}}}I{if(s.Q!=="3h"){c.6o("2f",s,E)}}}},c));if(G){if(G=="kS"){$(3D[0]).2e("<2f>"+1a+"</2f>");$(3D).1w()}I{if(G=="2f"){$(2f).2e(1a)}I{if(G=="o"){q o=c.$K.o().G(5B,"</2f>"+1a+"<2f>");c.$K.o(o);c.$K.1b("2f").1u(B(){if($.2b($(c).o())==""){$(c).1w()}})}}}}}c.1W()}I{q 1l=c.2N();if(1l.Q==="3F"){c.28();q o=$.2b($(1l).o());q 1I=$.2b(c.jP());o=o.G(/<V(.*?)id="1I-1L(.*?)<\\/V>/gi,"");if(o==1I){$(1l).2e($(1l).o()+"<br>")}I{c.l6("2L");q 2L=c.$K.1b("2L");2L.6z();q kW=c.$K.o().G("<2L></2L>",\'</2f><V id="1I-1L-1">\'+c.C.2i+"</V>"+1I+"<2f>");c.$K.o(kW);2L.1w();c.$K.1b("2f").1u(B(){if($.2b($(c).o())==""){$(c).1w()}})}c.1W();c.$K.1b("V#1I-1L-1").1i("id",E)}I{q 3G=c.bx("2f");q o=$(3G).o();q kV=["2r","ol","1n","3j","8c","3T","di","dl"];$.1u(kV,B(i,s){o=o.G(2c 2J("<"+s+"(.*?)>","gi"),"");o=o.G(2c 2J("</"+s+">","gi"),"")});q 7p=c.C.bg;$.1u(7p,B(i,s){o=o.G(2c 2J("<"+s+"(.*?)>","gi"),"");o=o.G(2c 2J("</"+s+">","gi"),"<br>")});$(3G).o(o);c.by(3G);q 4f=$(3G).4f();if(4f.1V()!=0&&4f[0].Q==="bC"){4f.1w()}}}c.1j()},oi:B(1i,2s){q 1X=c.3I();$(1X).2B(1i);c.1j()},oh:B(1i,2s){q 1X=c.3I();$(1X).1i(1i,2s);c.1j()},ok:B(5A){q 1X=c.3I();$(1X).1f(5A,"");c.4H(1X,"1o");c.1j()},om:B(5A,2s){q 1X=c.3I();$(1X).1f(5A,2s);c.1j()},oq:B(2S){q 1X=c.3I();$(1X).3c(2S);c.4H(1X,"1x");c.1j()},op:B(2S){q 1X=c.3I();$(1X).2z(2S);c.1j()},oo:B(2S){c.28();c.dr(B(J){$(J).3c(2S);c.4H(J,"1x")});c.1W();c.1j()},q9:B(2S){q 1t=c.3P();if(!$(1t).3v(2S)){c.93("2z",2S)}},oA:B(5A){c.28();c.dr(B(J){$(J).1f(5A,"");c.4H(J,"1o")});c.1W();c.1j()},oB:B(5A,2s){c.93("1f",5A,2s)},oN:B(1i){c.28();q O=c.3o(),J=c.8g(),1X=c.7r();if(O.4F||O.6D===O.8h&&J){1X=$(J)}$(1X).2B(1i);c.ld();c.1W();c.1j()},oM:B(1i,2s){c.93("1i",1i,2s)},93:B(1G,1i,2s){c.21();c.28();q O=c.3o();q el=c.8g();if((O.4F||O.6D===O.8h)&&el&&!c.7v(el)){$(el)[1G](1i,2s)}I{q 1P,dj=2s;kA(1i){5u"2A-1V":1P="8s";dj=4;5f;5u"2A-oP":1P="oQ";5f;5u"6s":1P="oS";5f;5u"8t-6s":1P="oL";5f}c.X.26(1P,E,dj);q aU=c.$K.1b("2A");$.1u(aU,$.M(B(i,s){c.kD(1G,s,1i,2s)},c))}c.1W();c.1j()},kD:B(1G,s,1i,2s){q L=$(s).L(),el;q 9x=c.aB();q 9k=$(L).Y();q 8Z=9x==9k;if(8Z&&L&&L[0].Q==="ds"&&L[0].oK.1m!=0){el=L;$(s).2e($(s).o())}I{el=$("<3W>").1h($(s).1Y());$(s).2e(el)}$(el)[1G](1i,2s);F el},dr:B(1c){q O=c.3o(),J=c.8g(),1X=c.7r(),4F;if(O.4F||O.6D===O.8h&&J){1X=$(J);4F=N}$.1u(1X,$.M(B(i,J){if(!4F&&J.Q!=="ds"){q 9x=c.aB();q 9k=$(J).L().Y();q 8Z=9x==9k;if(8Z&&J.4L.Q==="ds"&&!$(J.4L).3v("4d")){J=J.4L}I{F}}1c.5q(c,J)},c))},ld:B(){q $b4=c.$K.1b("3W");$.1u($b4,$.M(B(i,V){q $V=$(V);if($V.1i("1x")===1J&&$V.1i("1o")===1J){$V.1Y().l7()}},c))},l6:B(1d){c.28();c.X.26("8s",E,4);q aU=c.$K.1b("2A");q 2W;$.1u(aU,B(i,s){q el=$("<"+1d+"/>").1h($(s).1Y());$(s).2e(el);2W=el});c.1W();c.1j()},oE:B(1d){c.28();q dv=1d.oD();q 1X=c.7r();q L=$(c.2E()).L();$.1u(1X,B(i,s){if(s.Q===dv){c.bk(s)}});if(L&&L[0].Q===dv){c.bk(L)}c.1W();c.1j()},bk:B(el){$(el).2e($(el).1Y())},9i:B(o,1j){q 1t=c.3P();q L=1t.4L;c.4i();c.21();q $o=$("<12>").1h($.dn(o));o=$o.o();o=c.dq(o);$o=$("<12>").1h($.dn(o));q dp=c.2N();if($o.1Y().1m==1){q bf=$o.1Y()[0].Q;if(bf!="P"&&bf==dp.Q||bf=="6i"){$o=$("<12>").1h(o)}}if(c.C.1N){o=o.G(/<p(.*?)>([\\w\\W]*?)<\\/p>/gi,"$2<br>")}if(!c.C.1N&&$o.1Y().1m==1&&$o.1Y()[0].4D==3&&(c.cc().1m>2||(!1t||1t.Q=="ee"&&!L||L.Q=="kZ"))){o="<p>"+o+"</p>"}o=c.ad(o);if($o.1Y().1m>1&&dp||$o.1Y().is("p, :aS, 2r, ol, li, 12, 1n, 1g, 2f, 2q, dm, 2l, aS, 49, jj, jk")){if(c.1C("3t")){if(!c.8L()){c.X.1I.5i().do(o)}I{c.aL(o)}}I{c.X.26("5c",E,o)}}I{c.9O(o,E)}if(c.5R){c.42.2V($.M(B(){if(!c.C.1N){c.7G(c.$K.1Y().2W())}I{c.cb()}},c),1)}c.7H();c.8u();if(1j!==E){c.1j()}},9O:B(o,1j){o=c.ad(o);q 1q=c.29();if(1q.48&&1q.4V){q O=1q.48(0);O.aC();q el=X.4C("12");el.3Q=o;q 4k=X.cD(),J,5v;3w((J=el.8G)){5v=4k.7g(J)}O.3B(4k);if(5v){O=O.ag();O.ae(5v);O.5h(N);1q.4X();1q.5g(O)}}if(1j!==E){c.1j()}},oC:B(o){o=c.ad(o);q J=$(o);q 6c=X.4C("V");6c.3Q="\\7D";q O=c.3o();O.3B(6c);O.3B(J[0]);O.5h(E);q 1q=c.29();1q.4X();1q.5g(O);c.1j()},oF:B(o){q $o=$($.dn(o));if($o.1m){o=$o.Y()}c.4i();if(c.1C("3t")){if(!c.8L()){c.X.1I.5i().do(o)}I{c.aL(o)}}I{c.X.26("5c",E,o)}c.1j()},3B:B(J){J=J[0]||J;if(J.Q=="jo"){q 76="3W";q aD=J.jb;q 5y=2c 2J("<"+J.Q,"i");q 5K=aD.G(5y,"<"+76);5y=2c 2J("</"+J.Q,"i");5K=5K.G(5y,"</"+76);J=$(5K)[0]}q 1q=c.29();if(1q.48&&1q.4V){O=1q.48(0);O.aC();O.3B(J);O.oG(J);O.ae(J);1q.4X();1q.5g(O)}F J},js:B(e,J){q O;q x=e.jl,y=e.jm;if(c.X.ju){q 3X=c.X.ju(x,y);O=c.3o();O.86(3X.oJ,3X.2Y);O.5h(N);O.3B(J)}I{if(c.X.jv){O=c.X.jv(x,y);O.3B(J)}I{if(1E X.2v.jw!="1J"){O=c.X.2v.jw();O.jx(x,y);q bq=O.oI();bq.jx(x,y);O.oH("og",bq);O.3s()}}}},6U:B(2j,L){if(1E(L)!="1J"){2j=L}if(c.ck()){if(c.C.1N){q 1Y=$("<12>").1h($.2b(c.$K.o())).1Y();q 2W=1Y.2W()[0];if(2W.Q=="jo"&&2W.3Q==""){2W=1Y.4M()[0]}if(c.3Z(2W)!=c.3Z(2j)){F E}}I{if(c.$K.1Y().2W()[0]!==2j){F E}}c.bt(2j)}},bt:B(2j){c.21();if(c.C.1N===E){q J=$(c.C.58);$(2j).2I(J);c.4g(J)}I{q J=$(\'<V id="1I-1L-1">\'+c.C.2i+"</V>",c.X)[0];$(2j).2I(J);$(J).2I(c.C.2i);c.1W();c.$K.1b("V#1I-1L-1").2B("id")}},al:B(jp){c.28();q br="<br>";if(jp==N){br="<br><br>"}if(c.1C("31")){q V=$("<V>").o(c.C.2i);c.$K.1b("#1I-1L-1").3S(br).3S(V).3S(c.C.2i);c.jF(V[0]);V.1w();c.8b()}I{q L=c.2E();if(L&&L.Q==="A"){q 2Y=c.ch(L);q Y=$.2b($(L).Y()).G(/\\n\\r\\n/g,"");q 4P=Y.1m;if(2Y==4P){c.8b();q J=$(\'<V id="1I-1L-1">\'+c.C.2i+"</V>",c.X)[0];$(L).2I(J);$(J).3S(br+(c.1C("4s")?c.C.2i:""));c.1W();F N}}c.$K.1b("#1I-1L-1").3S(br+(c.1C("4s")?c.C.2i:""));c.1W()}},of:B(){c.al(N)},jr:B(2j){q J=$("<br>"+c.C.2i);$(2j).2e(J);c.4g(J)},j8:B(o){o=c.1c("nR",E,o);if(c.1C("3t")){q 2L=$.2b(o);if(2L.4G(/^<a(.*?)>(.*?)<\\/a>$/i)==0){o=o.G(/^<a(.*?)>(.*?)<\\/a>$/i,"$2")}}if(c.C.j7){q 2L=c.X.4C("12");o=o.G(/<br>|<\\/H[1-6]>|<\\/p>|<\\/12>/gi,"\\n");2L.3Q=o;o=2L.9Q||2L.dh;o=$.2b(o);o=o.G("\\n","<br>");o=c.9z(o);c.8W(o);F E}q 95=E;if(c.74("6h")){95=N;q 7p=c.C.bg;7p.3d("3j");7p.3d("1n");$.1u(7p,B(i,s){o=o.G(2c 2J("<"+s+"(.*?)>","gi"),"");o=o.G(2c 2J("</"+s+">","gi"),"<br>")})}if(c.74("6i")){o=c.j6(o);c.8W(o);F N}o=o.G(/<1B(.*?)v:nQ=(.*?)>/gi,"");o=o.G(/<p(.*?)1x="nP"([\\w\\W]*?)<\\/p>/gi,"<2r><li$2</li>");o=o.G(/<p(.*?)1x="nS"([\\w\\W]*?)<\\/p>/gi,"<li$2</li>");o=o.G(/<p(.*?)1x="nT"([\\w\\W]*?)<\\/p>/gi,"<li$2</li></2r>");o=o.G(/<p(.*?)1x="nV"([\\w\\W]*?)<\\/p>/gi,"<2r><li$2</li></2r>");o=o.G(/·/g,"");o=o.G(/<!--[\\s\\S]*?-->|<\\?(?:4I)?[\\s\\S]*?\\?>/gi,"");if(c.C.iO===N){o=o.G(/(&3u;){2,}/gi,"&3u;");o=o.G(/&3u;/gi," ")}o=o.G(/<b\\nU="iN-1v-1L(.*?)">([\\w\\W]*?)<\\/b>/gi,"$2");o=o.G(/<b(.*?)id="nO-iN-nN(.*?)">([\\w\\W]*?)<\\/b>/gi,"$3");o=o.G(/<V[^>]*(2A-1o: 3q; 2A-7o: 3m|2A-7o: 3m; 2A-1o: 3q)[^>]*>/gi,\'<V 1o="2A-7o: 3m;"><V 1o="2A-1o: 3q;">\');o=o.G(/<V[^>]*2A-1o: 3q[^>]*>/gi,\'<V 1o="2A-1o: 3q;">\');o=o.G(/<V[^>]*2A-7o: 3m[^>]*>/gi,\'<V 1o="2A-7o: 3m;">\');o=o.G(/<V[^>]*Y-bZ: 4K[^>]*>/gi,\'<V 1o="Y-bZ: 4K;">\');o=o.G(/<1g>\\nF*<\\/1g>/gi,"[1g]");o=o.G(/<1g>&3u;<\\/1g>/gi,"[1g]");o=o.G(/<1g><br><\\/1g>/gi,"[1g]");o=o.G(/<1g(.*?)9W="(.*?)"(.*?)>([\\w\\W]*?)<\\/1g>/gi,\'[1g 9W="$2"]$4[/1g]\');o=o.G(/<1g(.*?)9X="(.*?)"(.*?)>([\\w\\W]*?)<\\/1g>/gi,\'[1g 9X="$2"]$4[/1g]\');o=o.G(/<a(.*?)1S="(.*?)"(.*?)>([\\w\\W]*?)<\\/a>/gi,\'[a 1S="$2"]$4[/a]\');o=o.G(/<1Q(.*?)>([\\w\\W]*?)<\\/1Q>/gi,"[1Q$1]$2[/1Q]");o=o.G(/<3y(.*?)>([\\w\\W]*?)<\\/3y>/gi,"[3y$1]$2[/3y]");o=o.G(/<5r(.*?)>([\\w\\W]*?)<\\/5r>/gi,"[5r$1]$2[/5r]");o=o.G(/<4S(.*?)>([\\w\\W]*?)<\\/4S>/gi,"[4S$1]$2[/4S]");o=o.G(/<3M(.*?)>([\\w\\W]*?)<\\/3M>/gi,"[3M$1]$2[/3M]");o=o.G(/<2F(.*?)>/gi,"[2F$1]");o=o.G(/<1B(.*?)>/gi,"[1B$1]");o=o.G(/ 1x="(.*?)"/gi,"");o=o.G(/<(\\w+)([\\w\\W]*?)>/gi,"<$1>");if(c.C.1N){o=o.G(/<3V><\\/3V>/gi,"");o=o.G(/<u><\\/u>/gi,"");if(c.C.bV){o=o.G(/<2A(.*?)>([\\w\\W]*?)<\\/2A>/gi,"$2")}o=o.G(/<[^\\/>][^>]*>(\\s*|\\t*|\\n*|&3u;|<br>)<\\/[^>]+>/gi,"<br>")}I{o=o.G(/<[^\\/>][^>]*>(\\s*|\\t*|\\n*|&3u;|<br>)<\\/[^>]+>/gi,"")}o=o.G(/<12>\\s*?\\t*?\\n*?(<2r>|<ol>|<p>)/gi,"$1");o=o.G(/\\[1g 9W="(.*?)"\\]([\\w\\W]*?)\\[\\/1g\\]/gi,\'<1g 9W="$1">$2</1g>\');o=o.G(/\\[1g 9X="(.*?)"\\]([\\w\\W]*?)\\[\\/1g\\]/gi,\'<1g 9X="$1">$2</1g>\');o=o.G(/\\[1g\\]/gi,"<1g>&3u;</1g>");o=o.G(/\\[a 1S="(.*?)"\\]([\\w\\W]*?)\\[\\/a\\]/gi,\'<a 1S="$1">$2</a>\');o=o.G(/\\[1Q(.*?)\\]([\\w\\W]*?)\\[\\/1Q\\]/gi,"<1Q$1>$2</1Q>");o=o.G(/\\[3y(.*?)\\]([\\w\\W]*?)\\[\\/3y\\]/gi,"<3y$1>$2</3y>");o=o.G(/\\[5r(.*?)\\]([\\w\\W]*?)\\[\\/5r\\]/gi,"<5r$1>$2</5r>");o=o.G(/\\[4S(.*?)\\]([\\w\\W]*?)\\[\\/4S\\]/gi,"<4S$1>$2</4S>");o=o.G(/\\[3M(.*?)\\]([\\w\\W]*?)\\[\\/3M\\]/gi,"<3M$1>$2</3M>");o=o.G(/\\[2F(.*?)\\]/gi,"<2F$1>");o=o.G(/\\[1B(.*?)\\]/gi,"<1B$1>");if(c.C.9a){o=o.G(/<12(.*?)>([\\w\\W]*?)<\\/12>/gi,"<p>$2</p>");o=o.G(/<\\/12><p>/gi,"<p>");o=o.G(/<\\/p><\\/12>/gi,"</p>");o=o.G(/<p><\\/p>/gi,"<br />")}I{o=o.G(/<12><\\/12>/gi,"<br />")}o=c.8d(o);if(c.74("3h")){o=o.G(/<p>([\\w\\W]*?)<\\/p>/gi,"$1<br>")}I{if(95===E){o=c.9z(o)}}o=o.G(/<V(.*?)>([\\w\\W]*?)<\\/V>/gi,"$2");o=o.G(/<1B>/gi,"");o=o.G(/<[^\\/>][^>][^1B|2F|1v|1g][^<]*>(\\s*|\\t*|\\n*| |<br>)<\\/[^>]+>/gi,"");o=o.G(/\\n{3,}/gi,"\\n");o=o.G(/<p><p>/gi,"<p>");o=o.G(/<\\/p><\\/p>/gi,"</p>");o=o.G(/<li>(\\s*|\\t*|\\n*)<p>/gi,"<li>");o=o.G(/<\\/p>(\\s*|\\t*|\\n*)<\\/li>/gi,"</li>");if(c.C.1N===N){o=o.G(/<p(.*?)>([\\w\\W]*?)<\\/p>/gi,"$2<br>")}o=o.G(/<[^\\/>][^>][^1B|2F|1v|1g][^<]*>(\\s*|\\t*|\\n*| |<br>)<\\/[^>]+>/gi,"");o=o.G(/<1B 3p="4s-nJ-1K\\:\\/\\/(.*?)"(.*?)>/gi,"");o=o.G(/<1g(.*?)>(\\s*|\\t*|\\n*)<p>([\\w\\W]*?)<\\/p>(\\s*|\\t*|\\n*)<\\/1g>/gi,"<1g$1>$3</1g>");if(c.C.9a){o=o.G(/<12(.*?)>([\\w\\W]*?)<\\/12>/gi,"$2");o=o.G(/<12(.*?)>([\\w\\W]*?)<\\/12>/gi,"$2")}c.c6=E;if(c.1C("31")){if(c.C.9p){q 2x=o.1U(/<1B 3p="1a:T(.*?)"(.*?)>/gi);if(2x!==2G){c.c6=2x;3z(k in 2x){q 1B=2x[k].G("<1B",\'<1B 1a-31-9v-T="\'+k+\'" \');o=o.G(2x[k],1B)}}}3w(/<br>$/gi.4e(o)){o=o.G(/<br>$/gi,"")}}o=o.G(/<p>•([\\w\\W]*?)<\\/p>/gi,"<li>$1</li>");if(c.1C("3t")){3w(/<2A>([\\w\\W]*?)<\\/2A>/gi.4e(o)){o=o.G(/<2A>([\\w\\W]*?)<\\/2A>/gi,"$1")}}if(95===E){o=o.G(/<1g(.*?)>([\\w\\W]*?)<p(.*?)>([\\w\\W]*?)<\\/1g>/gi,"<1g$1>$2$4</1g>");o=o.G(/<1g(.*?)>([\\w\\W]*?)<\\/p>([\\w\\W]*?)<\\/1g>/gi,"<1g$1>$2$3</1g>");o=o.G(/<1g(.*?)>([\\w\\W]*?)<p(.*?)>([\\w\\W]*?)<\\/1g>/gi,"<1g$1>$2$4</1g>");o=o.G(/<1g(.*?)>([\\w\\W]*?)<\\/p>([\\w\\W]*?)<\\/1g>/gi,"<1g$1>$2$3</1g>")}o=o.G(/\\n/g," ");o=o.G(/<p>\\n?<li>/gi,"<li>");c.8W(o)},j6:B(s){s=s.G(/<br>|<\\/H[1-6]>|<\\/p>|<\\/12>/gi,"\\n");q 2L=c.X.4C("12");2L.3Q=s;F c.ce(2L.9Q||2L.dh)},8W:B(o){o=c.1c("nM",E,o);if(c.5R){c.$K.o(o);c.bA();c.cb();c.1j()}I{c.9i(o)}c.5R=E;2V($.M(B(){c.8j=E;if(c.1C("31")){c.$K.1b("p:6z").1w()}if(c.c6!==E){c.j0()}},c),3O);if(c.C.4Y&&c.c7!==N){$(c.X.2v).3e(c.9t)}I{c.$K.3e(c.9t)}},c9:B(4v){if(c.C.3H!==E&&1E c.C.3H==="3M"){$.1u(c.C.3H,$.M(B(k,v){if(v!=2G&&v.43().44("#")===0){v=$(v).1p()}4v[k]=v},c))}F 4v},j0:B(){q jy=c.$K.1b("1B[1a-31-9v-T]");$.1u(jy,$.M(B(i,s){q $s=$(s);q 2Q=s.3p.4o(",");q 4v={c3:2Q[0].4o(";")[0].4o(":")[1],1a:2Q[1]};4v=c.c9(4v);$.7R(c.C.bT,4v,$.M(B(1a){q 1M=(1E 1a==="8I"?$.8J(1a):1a);$s.1i("3p",1M.6e);$s.2B("1a-31-9v-T");c.1j();c.1c("3Y",$s,1M)},c))},c))},jz:B(e){q 9l=e.1O.9l;q 2Q=9l.4o(",");q 4v={c3:2Q[0].4o(";")[0].4o(":")[1],1a:2Q[1]};if(c.C.9p){4v=c.c9(4v);$.7R(c.C.bT,4v,$.M(B(1a){q 1M=(1E 1a==="8I"?$.8J(1a):1a);q o=\'<1B 3p="\'+1M.6e+\'" id="kc-T-1L" />\';c.26("5c",o,E);q T=$(c.$K.1b("1B#kc-T-1L"));if(T.1m){T.2B("id")}I{T=E}c.1j();if(T){c.1c("3Y",T,1M)}},c))}I{c.9i(\'<1B 3p="\'+9l+\'" />\')}},21:B(28){if(28!==E){c.28()}c.C.3E.3d(c.$K.o());if(28!==E){c.8b("3E")}},k7:B(){if(c.C.3E.1m===0){c.4i();F}c.28();c.C.8A.3d(c.$K.o());c.1W(E,N);c.$K.o(c.C.3E.k2());c.1W();2V($.M(c.7H,c),3O)},k6:B(){if(c.C.8A.1m===0){c.4i();F E}c.28();c.C.3E.3d(c.$K.o());c.1W(E,N);c.$K.o(c.C.8A.k2());c.1W(N);2V($.M(c.7H,c),4)},7H:B(){c.4T();if(c.C.5m){c.5m()}},5m:B(){c.$K.1b("a").on("23",$.M(c.k4,c));c.$K.on("23.U",$.M(B(e){c.7E(e)},c));$(X).on("23.U",$.M(B(e){c.7E(e)},c))},4T:B(){if(c.C.4T===E){F E}c.$K.1b("1B").1u($.M(B(i,1z){if(c.1C("3t")){$(1z).1i("oa","on")}q L=$(1z).L();if(!L.3v("bS")&&!L.3v("bD")){c.kU(1z)}},c));c.$K.1b(".bD, .bS").on("23",$.M(c.o9,c))},k4:B(e){q $1r=$(e.1O);q L=$(e.1O).L();if(L.3v("bS")||L.3v("bD")){F}if($1r.1V()==0||$1r[0].Q!=="A"){F}q 3X=$1r.2Y();if(c.C.1Q){q bE=c.$2Z.2Y();3X.1T=bE.1T+(3X.1T-$(c.X).3e());3X.1s+=bE.1s}q 4E=$(\'<V 1x="U-1r-4E"></V>\');q 1S=$1r.1i("1S");if(1S===1J){1S=""}if(1S.1m>24){1S=1S.aQ(0,24)+"..."}q k5=$(\'<a 1S="\'+$1r.1i("1S")+\'" 1O="6y">\'+1S+"</a>").on("23",$.M(B(e){c.7E(E)},c));q kd=$(\'<a 1S="#">\'+c.C.1F.8p+"</a>").on("23",$.M(B(e){e.2u();c.9N();c.7E(E)},c));q ke=$(\'<a 1S="#">\'+c.C.1F.6F+"</a>").on("23",$.M(B(e){e.2u();c.26("6F");c.7E(E)},c));4E.1h(k5);4E.1h(" | ");4E.1h(kd);4E.1h(" | ");4E.1h(ke);4E.1f({1T:(3X.1T+20)+"px",1s:3X.1s+"px"});$(".U-1r-4E").1w();$("2v").1h(4E)},7E:B(e){if(e!==E&&e.1O.Q=="A"){F E}$(".U-1r-4E").1w()},29:B(){if(!c.C.41){F c.X.29()}I{if(!c.C.1Q){F 41.29()}I{F 41.29(c.$2Z[0])}}},3o:B(){if(!c.C.41){if(c.X.29){q 1q=c.29();if(1q.48&&1q.4V){F 1q.48(0)}}F c.X.5i()}I{if(!c.C.1Q){F 41.5i()}I{F 41.5i(c.bG())}}},by:B(J){c.jH(J)},4g:B(J){c.8e(J[0]||J,0,2G,0)},7G:B(J){c.8e(J[0]||J,1,2G,1)},8e:B(4Q,bB,87,b5){if(87==2G){87=4Q}if(b5==2G){b5=bB}q 1q=c.29();if(!1q){F}if(4Q.Q=="P"&&4Q.3Q==""){4Q.3Q=c.C.2i}if(4Q.Q=="bC"&&c.C.1N===E){q 5U=$(c.C.58)[0];$(4Q).2e(5U);4Q=5U;87=4Q}q O=c.3o();O.86(4Q,bB);O.85(87,b5);eG{1q.4X()}fe(e){}1q.5g(O)},bx:B(1d){1d=1d.3N();q 1l=c.2N();if(1l){q 3G=c.kf(1l,1d);c.1j();F 3G}q 1q=c.29();q O=1q.48(0);q 3G=X.4C(1d);3G.7g(O.oe());O.3B(3G);c.by(3G);F 3G},od:B(){q O=c.3o();O.aM(c.$K[0]);q 1q=c.29();1q.4X();1q.5g(O)},bA:B(){c.29().4X()},ch:B(2j){q bH=0;q O=c.3o();q ba=O.ag();ba.aM(2j);ba.85(O.8h,O.kj);bH=$.2b(ba.43()).1m;F bH},hR:B(){F 2c bI(c.29().48(0))},jH:B(el,2y,3l){if(1E 3l==="1J"){3l=2y}el=el[0]||el;q O=c.3o();O.aM(el);q 4B=c.bN(el);q aq=E;q 7J=0,7K;if(4B.1m==1&&2y){O.86(4B[0],2y);O.85(4B[0],3l)}I{3z(q i=0,88;88=4B[i++];){7K=7J+88.1m;if(!aq&&2y>=7J&&(2y<7K||(2y==7K&&i<4B.1m))){O.86(88,2y-7J);aq=N}if(aq&&3l<=7K){O.85(88,3l-7J);5f}7J=7K}}q 1q=c.29();1q.4X();1q.5g(O)},jF:B(J){c.$K.2h();J=J[0]||J;q O=c.X.5i();q 2y=1;q 3l=-1;O.86(J,2y);O.85(J,3l+2);q 1I=c.42.29();q bR=c.X.5i();q av=c.X.82("\\7D");$(J).2I(av);bR.ae(av);1I.4X();1I.5g(bR);$(av).1w()},bN:B(J){q 4B=[];if(J.4D==3){4B.3d(J)}I{q 4c=J.8F;3z(q i=0,4P=4c.1m;i<4P;++i){4B.3d.bO(4B,c.bN(4c[i]))}}F 4B},3P:B(){q el=E;q 1q=c.29();if(1q&&1q.4V>0){el=1q.48(0).6D}F c.4j(el)},2E:B(1z){1z=1z||c.3P();if(1z){F c.4j($(1z).L()[0])}I{F E}},2N:B(J){if(1E J==="1J"){J=c.3P()}3w(J){if(c.7v(J)){if($(J).3v("4d")){F E}F J}J=J.4L}F E},3I:B(1X){q 89=[];if(1E 1X=="1J"){q O=c.3o();if(O&&O.4F===N){F[c.2N()]}q 1X=c.7r(O)}$.1u(1X,$.M(B(i,J){if(c.C.1Q===E&&$(J).8B("12.4d").1V()==0){F E}if(c.7v(J)){89.3d(J)}},c));if(89.1m===0){89=[c.2N()]}F 89},o5:B(J){if(J.4D!=1){F E}F!c.ax.4e(J.jY)},7v:B(J){F J.4D==1&&c.ax.4e(J.jY)},bM:B(1d){F c.ax.4e(1d)},7r:B(O,1d){if(1E O=="1J"||O==E){q O=c.3o()}if(O&&O.4F===N){if(1E 1d==="1J"&&c.bM(1d)){q 1l=c.2N();if(1l.Q==1d){F[1l]}I{F[]}}I{F[c.3P()]}}q 1X=[],4x=[];q 1q=c.X.29();if(!1q.o4){1X=c.cc(1q.48(0))}$.1u(1X,$.M(B(i,J){if(c.C.1Q===E&&$(J).8B("12.4d").1V()==0){F E}if(1E 1d==="1J"){if($.2b(J.9Q)!=""){4x.3d(J)}}I{if(J.Q==1d){4x.3d(J)}}},c));if(4x.1m==0){if(1E 1d==="1J"&&c.bM(1d)){q 1l=c.2N();if(1l.Q==1d){F 4x.3d(1l)}I{F[]}}I{4x.3d(c.3P())}}q 2W=4x[4x.1m-1];if(c.7v(2W)){4x=4x.jR(0,-1)}F 4x},8g:B(J){if(!J){J=c.3P()}3w(J){if(J.4D==1){if($(J).3v("4d")){F E}F J}J=J.4L}F E},cc:B(O){O=O||c.3o();q J=O.6D;q eK=O.8h;if(J==eK){F[J]}q 9m=[];3w(J&&J!=eK){9m.3d(J=c.jQ(J))}J=O.6D;3w(J&&J!=O.o3){9m.jS(J);J=J.4L}F 9m},jQ:B(J){if(J.oT()){F J.8G}I{3w(J&&!J.jO){J=J.4L}if(!J){F 2G}F J.jO}},aB:B(){F c.29().43()},jP:B(){q o="";q 1q=c.29();if(1q.4V){q eF=c.X.4C("12");q 4P=1q.4V;3z(q i=0;i<4P;++i){eF.7g(1q.48(i).oU())}o=eF.3Q}F c.eE(o)},28:B(){if(!c.7h()){c.4i()}if(!c.C.41){c.jN(c.3o())}I{c.5S=41.pL()}},jN:B(O,1w){if(!O){F}q 5O=$(\'<V id="1I-1L-1" 1x="U-1I-1L">\'+c.C.2i+"</V>",c.X)[0];q 8f=$(\'<V id="1I-1L-2" 1x="U-1I-1L">\'+c.C.2i+"</V>",c.X)[0];if(O.4F===N){c.ai(O,5O,N)}I{c.ai(O,5O,N);c.ai(O,8f,E)}c.5S=c.$K.o();c.1W(E,E)},ai:B(O,J,1G){q ar=O.ag();eG{ar.5h(1G);ar.3B(J);ar.pJ()}fe(e){q o=c.C.58;if(c.C.1N){o="<br>"}c.$K.6d(o);c.2h()}},1W:B(G,1w){if(!c.C.41){if(G===N&&c.5S){c.$K.o(c.5S)}q 5O=c.$K.1b("V#1I-1L-1");q 8f=c.$K.1b("V#1I-1L-2");if(c.1C("31")){c.$K.2h()}I{if(!c.7h()){c.4i()}}if(5O.1m!=0&&8f.1m!=0){c.8e(5O[0],0,8f[0],0)}I{if(5O.1m!=0){c.8e(5O[0],0,2G,0)}}if(1w!==E){c.8b();c.5S=E}}I{41.pN(c.5S)}},8b:B(1G){if(!c.C.41){$.1u(c.$K.1b("V.U-1I-1L"),B(){q o=$.2b($(c).o().G(/[^\\pP-\\pO]/g,""));if(o==""){$(c).1w()}I{$(c).2B("1x").2B("id")}})}I{41.pI(c.5S)}},ko:B(){c.28();c.62(c.C.1F.1n,c.C.hf,pH,$.M(B(){$("#hv").23($.M(c.km,c));2V(B(){$("#eX").2h()},5k)},c))},km:B(){c.21(E);q aF=$("#eX").1p(),aJ=$("#hx").1p(),$e2=$("<12></12>"),ez=4u.kg(4u.kh()*k0),$1n=$(\'<1n id="1n\'+ez+\'"><8c></8c></1n>\'),i,$aZ,z,$b1;3z(i=0;i<aF;i++){$aZ=$("<3j></3j>");3z(z=0;z<aJ;z++){$b1=$("<1g>"+c.C.2i+"</1g>");if(i===0&&z===0){$b1.1h(\'<V id="1I-1L-1">\'+c.C.2i+"</V>")}$($aZ).1h($b1)}$1n.1h($aZ)}$e2.1h($1n);q o=$e2.o();if(c.C.1N===E&&c.1C("31")){o+="<p>"+c.C.2i+"</p>"}c.3g();c.1W();q 1t=c.2N()||c.3P();if(1t&&1t.Q!="ee"){if(1t.Q=="3h"){q 1t=$(1t).2g("2r, ol")}$(1t).2I(o)}I{c.9O(o,E)}c.1W();q 1n=c.$K.1b("#1n"+ez);c.8r();1n.1b("V#1I-1L-1, 3W#1I-1L-1").1w();1n.2B("id");c.1j()},ka:B(){q $1n=$(c.2E()).2g("1n");if(!c.4j($1n)){F E}if($1n.1V()==0){F E}c.21();$1n.1w();c.1j()},k8:B(){q L=c.2E();q $1n=$(L).2g("1n");if(!c.4j($1n)){F E}if($1n.1V()==0){F E}c.21();q $4z=$(L).2g("3j");q $eg=$4z.4M().1m?$4z.4M():$4z.4f();if($eg.1m){q $ek=$eg.4c("1g").j5();if($ek.1m){$ek.6d(\'<V id="1I-1L-1">\'+c.C.2i+"</V>")}}$4z.1w();c.1W();$1n.1b("V#1I-1L-1").1w();c.1j()},iY:B(){q L=c.2E();q $1n=$(L).2g("1n");if(!c.4j($1n)){F E}if($1n.1V()==0){F E}c.21();q $5Z=$(L).2g("1g");if(!($5Z.is("1g"))){$5Z=$5Z.2g("1g")}q 2K=$5Z.2R(0).pC;$1n.1b("3j").1u($.M(B(i,1z){q iX=2K-1<0?2K+1:2K-1;if(i===0){$(1z).1b("1g").eq(iX).6d(\'<V id="1I-1L-1">\'+c.C.2i+"</V>")}$(1z).1b("1g").eq(2K).1w()},c));c.1W();$1n.1b("V#1I-1L-1").1w();c.1j()},j2:B(){q $1n=$(c.2E()).2g("1n");if(!c.4j($1n)){F E}if($1n.1V()==0){F E}c.21();if($1n.1b("3T").1V()!==0){c.ey()}I{q 3j=$1n.1b("3j").j5().6q();3j.1b("1g").o(c.C.2i);$3T=$("<3T></3T>");$3T.1h(3j);$1n.6d($3T);c.1j()}},ey:B(){q $1n=$(c.2E()).2g("1n");if(!c.4j($1n)){F E}q $3T=$1n.1b("3T");if($3T.1V()==0){F E}c.21();$3T.1w();c.1j()},j3:B(){c.ew("3S")},iV:B(){c.ew("2I")},iM:B(){c.e3("3S")},iL:B(){c.e3("2I")},ew:B(1G){q $1n=$(c.2E()).2g("1n");if(!c.4j($1n)){F E}if($1n.1V()==0){F E}c.21();q $4z=$(c.2E()).2g("3j");q 9V=$4z.6q();9V.1b("1g").o(c.C.2i);if(1G==="2I"){$4z.2I(9V)}I{$4z.3S(9V)}c.1j()},e3:B(1G){q L=c.2E();q $1n=$(L).2g("1n");if(!c.4j($1n)){F E}if($1n.1V()==0){F E}c.21();q 2K=0;q 1t=c.3P();q $4z=$(1t).2g("3j");q $5Z=$(1t).2g("1g");$4z.1b("1g").1u($.M(B(i,1z){if($(1z)[0]===$5Z[0]){2K=i}},c));$1n.1b("3j").1u($.M(B(i,1z){q $1t=$(1z).1b("1g").eq(2K);q 1g=$1t.6q();1g.o(c.C.2i);1G==="2I"?$1t.2I(1g):$1t.3S(1g)},c));c.1j()},iI:B(){c.28();c.62(c.C.1F.3y,c.C.hB,pR,$.M(B(){$("#hk").23($.M(c.iJ,c));2V(B(){$("#eD").2h()},5k)},c))},iJ:B(){q 1a=$("#eD").1p();1a=c.8d(1a);q 5j=\'<1Q 2p="cT" 22="hG" 3p="\',7B=\'" cS="0" hE></1Q>\';if(1a.1U(8N)){1a=1a.G(8N,5j+"//aA.cO.7w/4S/$1"+7B)}I{if(1a.1U(8Q)){1a=1a.G(8Q,5j+"//hp.cI.7w/3y/$2"+7B)}}c.1W();q 1t=c.2N()||c.3P();if(1t){$(1t).2I(1a)}I{c.9O(1a,E)}c.1j();c.3g()},9N:B(){c.28();q 1c=$.M(B(){if(c.C.ec!==E){c.9H={};q 4J=c;$.l9(c.C.ec,B(1a){q $3s=$("#U-gU-gL");$3s.o("");$.1u(1a,B(1k,1p){4J.9H[1k]=1p;$3s.1h($("<4b>").1p(1k).o(1p.2m))});$3s.on("68",B(){q 1k=$(c).1p();q 2m="",1K="";if(1k!=0){2m=4J.9H[1k].2m;1K=4J.9H[1k].1K}$("#7Z").1p(1K);$("#aj").1p(2m)});$3s.2M()})}c.6K=E;q 1q=c.29();q 1K="",Y="",1O="";q 1z=c.2E();q 5U=$(1z).L().2R(0);if(5U&&5U.Q==="A"){1z=5U}if(1z&&1z.Q==="A"){1K=1z.1S;Y=$(1z).Y();1O=1z.1O;c.6K=1z}I{Y=1q.43()}$("#aj").1p(Y);q iT=iS.iR.1S.G(/\\/$/i,"");1K=1K.G(iT,"");1K=1K.G(/^\\/#/,"#");1K=1K.G("eH:","");if(c.C.8a===E){q re=2c 2J("^(aI|am|5n)://"+iS.iR.q2,"i");1K=1K.G(re,"")}$("#7Z").1p(1K);if(1O==="6y"){$("#6S").9D("9K",N)}c.eJ=E;$("#he").on("23",$.M(c.iQ,c));2V(B(){$("#7Z").2h()},5k)},c);c.62(c.C.1F.1r,c.C.gX,q1,1c)},iQ:B(){if(c.eJ){F}c.eJ=N;q 1O="",eZ="";q 1r=$("#7Z").1p();q Y=$("#aj").1p();if(1r.4G("@")!=-1&&/(aI|am|5n):\\/\\//i.4e(1r)===E){1r="eH:"+1r}I{if(1r.4G("#")!=0){if($("#6S").9D("9K")){1O=\' 1O="6y"\';eZ="6y"}q eO="((q4--)?[a-eL-9]+(-[a-eL-9]+)*.)+[a-z]{2,}";q re=2c 2J("^(aI|am|5n)://"+eO,"i");q jt=2c 2J("^"+eO,"i");if(1r.4G(re)==-1&&1r.4G(jt)==0&&c.C.8a){1r=c.C.8a+1r}}}Y=Y.G(/<|>/g,"");q eY="&3u;";if(c.1C("31")){eY="&3u;"}c.j9(\'<a 1S="\'+1r+\'"\'+1O+">"+Y+"</a>"+eY,$.2b(Y),1r,eZ)},j9:B(a,Y,1r,1O){c.1W();if(Y!==""){if(c.6K){c.21();$(c.6K).Y(Y).1i("1S",1r);if(1O!==""){$(c.6K).1i("1O",1O)}I{$(c.6K).2B("1O")}}I{q $a=$(a).2z("U-dZ-1r");c.2o("5c",c.3Z($a),E);q 1r=c.$K.1b("a.U-dZ-1r");1r.2B("1o").3c("U-dZ-1r").1u(B(){if(c.2S==""){$(c).2B("1x")}})}c.1j()}2V($.M(B(){if(c.C.5m){c.5m()}},c),5);c.3g()},jg:B(){c.28();q 1c=$.M(B(){q 1q=c.29();q Y="";if(c.cw()){Y=1q.Y}I{Y=1q.43()}$("#e6").1p(Y);if(!c.5a()&&!c.d6()){c.bP("#5p",{1K:c.C.84,3H:c.C.3H,4h:$.M(c.ex,c),3U:$.M(B(71,1M){c.1c("kq",1M)},c),6k:c.C.e5})}c.et("5p",{4l:N,1K:c.C.84,4h:$.M(c.ex,c),3U:$.M(B(71,1M){c.1c("kq",1M)},c)})},c);c.62(c.C.1F.25,c.C.hW,cT,1c)},ex:B(1M){c.1W();if(1M!==E){q Y=$("#e6").1p();if(Y===""){Y=1M.ed}q 1r=\'<a 1S="\'+1M.6e+\'" id="6e-1L">\'+Y+"</a>";if(c.1C("4s")&&!!c.42.d5){1r=1r+"&3u;"}c.26("5c",1r,E);q 83=$(c.$K.1b("a#6e-1L"));if(83.1V()!=0){83.2B("id")}I{83=E}c.1j();c.1c("84",83,1M)}c.3g()},l4:B(){c.28();q 1c=$.M(B(){if(c.C.6L){$.l9(c.C.6L,$.M(B(1a){q 6R={},6G=0;$.1u(1a,$.M(B(1k,1p){if(1E 1p.aV!=="1J"){6G++;6R[1p.aV]=6G}},c));q 9j=E;$.1u(1a,$.M(B(1k,1p){q eh="";if(1E 1p.1e!=="1J"){eh=1p.1e}q b0=0;if(!$.l8(6R)&&1E 1p.aV!=="1J"){b0=6R[1p.aV];if(9j===E){9j=".6T"+b0}}q 1B=$(\'<1B 3p="\'+1p.q6+\'" 1x="6T 6T\'+b0+\'" 4m="\'+1p.T+\'" 1e="\'+eh+\'" />\');$("#eA").1h(1B);$(1B).23($.M(c.fI,c))},c));if(!$.l8(6R)){$(".6T").2U();$(9j).2M();q l0=B(e){$(".6T").2U();$(".6T"+$(e.1O).1p()).2M()};q 3s=$(\'<3s id="q0">\');$.1u(6R,B(k,v){3s.1h($(\'<4b 2s="\'+v+\'">\'+k+"</4b>"))});$("#eA").3S(3s);3s.68(l0)}},c))}I{$("#U-52-6v-2").1w()}if(c.C.3Y||c.C.5Q){if(!c.5a()&&!c.d6()&&c.C.5Q===E){if($("#5p").1m){c.bP("#5p",{1K:c.C.3Y,3H:c.C.3H,4h:$.M(c.eN,c),3U:$.M(B(71,1M){c.1c("dV",1M)},c),6k:c.C.an})}}if(c.C.5Q===E){c.et("5p",{4l:N,1K:c.C.3Y,4h:$.M(c.eN,c),3U:$.M(B(71,1M){c.1c("dV",1M)},c)})}I{$("#5p").on("68.U",$.M(c.gD,c))}}I{$(".5D").2U();if(!c.C.6L){$("#5E").1w();$("#iq").2M()}I{$("#U-52-6v-1").1w();$("#U-52-6v-2").2z("6I");$("#ib").2M()}}if(!c.C.kC&&(c.C.3Y||c.C.6L)){$("#U-52-6v-3").2U()}$("#gZ").23($.M(c.fq,c));if(!c.C.3Y&&!c.C.6L){2V(B(){$("#6C").2h()},5k)}},c);c.62(c.C.1F.T,c.C.iD,pT,1c)},gn:B(T){q $el=T;q L=$el.L().L();q 1c=$.M(B(){$("#e0").1p($el.1i("8n"));$("#pS").1i("1S",$el.1i("3p"));if($el.1f("3f")=="1l"&&$el.1f("5J")=="3r"){$("#bl").1p("6O")}I{$("#bl").1p($el.1f("5J"))}if($(L).2R(0).Q==="A"){$("#6C").1p($(L).1i("1S"));if($(L).1i("1O")=="6y"){$("#6S").9D("9K",N)}}$("#iy").23($.M(B(){c.dX($el)},c));$("#iA").23($.M(B(){c.kL($el)},c))},c);c.62(c.C.1F.8p,c.C.hL,pV,1c)},dX:B(el){q 9b=$(el).L().L();q L=$(el).L();q a7=E;if(9b.1m&&9b[0].Q==="A"){a7=N;$(9b).1w()}I{if(L.1m&&L[0].Q==="A"){a7=N;$(L).1w()}I{$(el).1w()}}if(L.1m&&L[0].Q==="P"){c.4i();if(a7===E){c.4g(L)}}c.1c("pX",el);c.3g();c.1j()},kL:B(el){c.6t(E);q $el=$(el);q L=$el.L();$el.1i("8n",$("#e0").1p());q 9E=$("#bl").1p();q 2H="";if(9E==="1s"){2H="0 "+c.C.8i+" "+c.C.8i+" 0";$el.1f({"5J":"1s",2H:2H})}I{if(9E==="4Z"){2H="0 0 "+c.C.8i+" "+c.C.8i+"";$el.1f({"5J":"4Z",2H:2H})}I{if(9E==="6O"){$el.1f({"5J":"",3f:"1l",2H:"4l"})}I{$el.1f({"5J":"",3f:"",2H:""})}}}q 1r=$.2b($("#6C").1p());if(1r!==""){q 1O=E;if($("#6S").9D("9K")){1O=N}if(L.2R(0).Q!=="A"){q a=$(\'<a 1S="\'+1r+\'">\'+c.3Z(el)+"</a>");if(1O){a.1i("1O","6y")}$el.2e(a)}I{L.1i("1S",1r);if(1O){L.1i("1O","6y")}I{L.2B("1O")}}}I{if(L.2R(0).Q==="A"){L.2e(c.3Z(el))}}c.3g();c.4T();c.1j()},6t:B(e){if(e!==E&&$(e.1O).L().1V()!=0&&$(e.1O).L()[0].id==="U-T-2C"){F E}q 2X=c.$K.1b("#U-T-2C");if(2X.1V()==0){F E}c.$K.1b("#U-T-es, #U-T-ej").1w();2X.1b("1B").1f({5M:2X[0].1o.5M,9c:2X[0].1o.9c,5L:2X[0].1o.5L,9d:2X[0].1o.9d});2X.1f("2H","");2X.1b("1B").1f("gp","");2X.2e(B(){F $(c).1Y()});$(X).3b("23.U-T-8m-2U");c.$K.3b("23.U-T-8m-2U");c.$K.3b("5T.U-T-e9");c.1j()},kU:B(T){q $T=$(T);$T.on("9J",$.M(B(){c.6t(E)},c));$T.on("p6",$.M(B(){c.$K.on("6w.U-T-kv-6w",$.M(B(){2V($.M(B(){c.4T();c.$K.3b("6w.U-T-kv-6w");c.1j()},c),1)},c))},c));$T.on("23",$.M(B(e){if(c.$K.1b("#U-T-2C").1V()!=0){F E}q p5=E,a6,a5,eM=$T.2p()/$T.22(),g9=20,p8=10;q 5z=c.gA($T);q aa=E;if(5z!==E){5z.on("9J",B(e){aa=N;e.2u();eM=$T.2p()/$T.22();a6=4u.6A(e.eS-$T.eq(0).2Y().1s);a5=4u.6A(e.ff-$T.eq(0).2Y().1T)});$(c.X.2v).on("l1",$.M(B(e){if(aa){q p9=4u.6A(e.eS-$T.eq(0).2Y().1s)-a6;q hV=4u.6A(e.ff-$T.eq(0).2Y().1T)-a5;q iP=$T.22();q g4=9y(iP,10)+hV;q 9G=4u.6A(g4*eM);if(9G>g9){$T.2p(9G);if(9G<3O){c.6u.1f({5M:"-aT",5L:"-pb",8s:"pa",8X:"p4 fp"})}I{c.6u.1f({5M:"-8U",5L:"-gm",8s:"8U",8X:"aT 8Y"})}}a6=4u.6A(e.eS-$T.eq(0).2Y().1s);a5=4u.6A(e.ff-$T.eq(0).2Y().1T);c.1j()}},c)).on("a8",B(){aa=E})}c.$K.on("5T.U-T-e9",$.M(B(e){q 1k=e.5X;if(c.2O.a2==1k||c.2O.eC==1k){c.21(E);c.6t(E);c.dX($T)}},c));$(X).on("23.U-T-8m-2U",$.M(c.6t,c));c.$K.on("23.U-T-8m-2U",$.M(c.6t,c))},c))},gA:B($T){q 2X=$(\'<V id="U-T-2C" 1a-U="9s">\');2X.1f({3k:"gC",3f:"3W-1l",ep:0,oX:"fi oW oV(0, 0, 0, .6)","5J":$T.1f("5J")});2X.1i("3K",E);if($T[0].1o.2H!="4l"){2X.1f({5M:$T[0].1o.5M,9c:$T[0].1o.9c,5L:$T[0].1o.5L,9d:$T[0].1o.9d});$T.1f("2H","")}I{2X.1f({3f:"1l",2H:"4l"})}$T.1f("gp",0.5).2I(2X);c.6u=$(\'<V id="U-T-es" 1a-U="9s">\'+c.C.1F.8p+"</V>");c.6u.1f({3k:"8T",9u:5,1T:"50%",1s:"50%",5M:"-8U",5L:"-gm",ep:1,fK:"#fE",6s:"#fj",8s:"8U",8X:"aT 8Y",er:"oZ"});c.6u.1i("3K",E);c.6u.on("23",$.M(B(){c.gn($T)},c));2X.1h(c.6u);if(c.C.gF){q 5z=$(\'<V id="U-T-ej" 1a-U="9s"></V>\');5z.1f({3k:"8T",9u:2,ep:1,er:"nw-8m",ft:"-p1",4Z:"-fp",p0:"fi pc #fj",fK:"#fE",2p:"fD",22:"fD"});5z.1i("3K",E);2X.1h(5z);2X.1h($T);F 5z}I{2X.1h($T);F E}},fI:B(e){q 1B=\'<1B id="T-1L" 3p="\'+$(e.1O).1i("4m")+\'" 8n="\'+$(e.1O).1i("1e")+\'" />\';q L=c.2E();if(c.C.5Y&&$(L).2g("li").1V()==0){1B="<p>"+1B+"</p>"}c.b2(1B,N)},fq:B(){q 1p=$("#6C").1p();if(1p!==""){q 1a=\'<1B id="T-1L" 3p="\'+1p+\'" />\';if(c.C.1N===E){1a="<p>"+1a+"</p>"}c.b2(1a,N)}I{c.3g()}},eN:B(1a){c.b2(1a)},b2:B(1M,1r){c.1W();if(1M!==E){q o="";if(1r!==N){o=\'<1B id="T-1L" 3p="\'+1M.6e+\'" />\';q L=c.2E();if(c.C.5Y&&$(L).2g("li").1V()==0){o="<p>"+o+"</p>"}}I{o=1M}c.26("5c",o,E);q T=$(c.$K.1b("1B#T-1L"));if(T.1m){T.2B("id")}I{T=E}c.1j();1r!==N&&c.1c("3Y",T,1M)}c.3g();c.4T()},i8:B(){if($("#U-8O").1V()!=0){F}c.$i0=$(\'<12 id="U-8O"><V></V></12>\');$(X.2v).1h(c.$i0)},8C:B(){c.i8();$("#U-8O").pr()},b6:B(){$("#U-8O").6N(pq)},i5:B(){$.4W(c.C,{hW:51()+\'<2l id="U-5W-25-4y"><2t id="pp" 5l="7R" 7t="" b3="af/2t-1a"><2D>\'+c.C.1F.ed+\'</2D><2T 1G="Y" id="e6" 1x="6Q" /><12 1o="2H-1T: aT;"><2T 1G="25" id="5p" 2m="\'+c.C.e5+\'" /></12></2t></2l>\',hL:51()+\'<2l id="U-5W-T-8p"><2D>\'+c.C.1F.1e+\'</2D><2T 1G="Y" id="e0" 1x="6Q" /><2D>\'+c.C.1F.1r+\'</2D><2T 1G="Y" id="6C" 1x="6Q" /><2D><2T 1G="gT" id="6S"> \'+c.C.1F.eB+"</2D><2D>"+c.C.1F.hP+\'</2D><3s id="bl"><4b 2s="3r">\'+c.C.1F.3r+\'</4b><4b 2s="1s">\'+c.C.1F.1s+\'</4b><4b 2s="6O">\'+c.C.1F.6O+\'</4b><4b 2s="4Z">\'+c.C.1F.4Z+\'</4b></3s></2l><49><1D id="iy" 1x="4r pt">\'+c.C.1F.iv+\'</1D><1D 1x="4r 6M">\'+c.C.1F.6H+\'</1D><1D id="iA" 1x="4r 6P">\'+c.C.1F.7N+"</1D></49>",iD:51()+\'<2l id="U-5W-T-4y"><12 id="5E"><a 1S="#" id="U-52-6v-1" 1x="6I">\'+c.C.1F.8H+\'</a><a 1S="#" id="U-52-6v-2">\'+c.C.1F.eo+\'</a><a 1S="#" id="U-52-6v-3">\'+c.C.1F.1r+\'</a></12><2t id="pu" 5l="7R" 7t="" b3="af/2t-1a"><12 id="pn" 1x="5D"><2T 1G="25" id="5p" 2m="\'+c.C.an+\'" /></12><12 id="ib" 1x="5D" 1o="3f: 3r;"><12 id="eA"></12></12></2t><12 id="iq" 1x="5D" 1o="3f: 3r;"><2D>\'+c.C.1F.ip+\'</2D><2T 1G="Y" 2m="6C" id="6C" 1x="6Q"  /><br><br></12></2l><49><1D 1x="4r 6M">\'+c.C.1F.6H+\'</1D><1D 1x="4r 6P" id="gZ">\'+c.C.1F.4y+"</1D></49>",gX:51()+\'<2l id="U-5W-1r-4y"><3s id="U-gU-gL" 1o="2p: 99.5%; 3f: 3r;"></3s><2D>gN</2D><2T 1G="Y" 1x="6Q" id="7Z" /><2D>\'+c.C.1F.Y+\'</2D><2T 1G="Y" 1x="6Q" id="aj" /><2D><2T 1G="gT" id="6S"> \'+c.C.1F.eB+\'</2D></2l><49><1D 1x="4r 6M">\'+c.C.1F.6H+\'</1D><1D id="he" 1x="4r 6P">\'+c.C.1F.4y+"</1D></49>",hf:51()+\'<2l id="U-5W-1n-4y"><2D>\'+c.C.1F.aF+\'</2D><2T 1G="Y" 1V="5" 2s="2" id="eX" /><2D>\'+c.C.1F.aJ+\'</2D><2T 1G="Y" 1V="5" 2s="3" id="hx" /></2l><49><1D 1x="4r 6M">\'+c.C.1F.6H+\'</1D><1D id="hv" 1x="4r 6P">\'+c.C.1F.4y+"</1D></49>",hB:51()+\'<2l id="U-5W-3y-4y"><2t id="pf"><2D>\'+c.C.1F.hF+\'</2D><5s id="eD" 1o="2p: 99%; 22: pe;"></5s></2t></2l><49><1D 1x="4r 6M">\'+c.C.1F.6H+\'</1D><1D id="hk" 1x="4r 6P">\'+c.C.1F.4y+"</1D></49>"})},62:B(1e,3L,2p,1c){c.gH();c.$au=2p;c.$2P=$("#eR");if(!c.$2P.1m){c.$2P=$(\'<12 id="eR" 1o="3f: 3r;" />\');c.$2P.1h($(\'<12 id="eP">&pj;</12>\'));c.$2P.1h($(\'<aS id="bc" />\'));c.$2P.1h($(\'<12 id="ac" />\'));c.$2P.8P(X.2v)}$("#eP").on("23",$.M(c.3g,c));$(X).on("5d",$.M(c.8M,c));c.$K.on("5d",$.M(c.8M,c));c.ht(3L);c.hD(1e);c.hI();c.ia();c.gO();c.hC();c.6J=c.X.2v.3e;if(c.C.4Y===E){c.6J=c.$K.3e()}if(c.5a()===E){c.fW()}I{c.hl()}if(1E 1c==="B"){1c()}2V($.M(B(){c.1c("pm",c.$2P)},c),11);$(X).3b("pl.5W");c.$2P.1b("2T[1G=Y]").on("pk",$.M(B(e){if(e.5X===13){c.$2P.1b(".6P").23();e.2u()}},c));F c.$2P},fW:B(){c.$2P.1f({3k:"ak",1T:"-df",1s:"50%",2p:c.$au+"px",5L:"-"+(c.$au/2)+"px"}).2M();c.ei=$(X.2v).1f("8V");$(X.2v).1f("8V","8E");2V($.M(B(){q 22=c.$2P.hQ();c.$2P.1f({1T:"50%",22:"4l",8R:"4l",5M:"-"+(22+10)/2+"px"})},c),15)},hl:B(){c.$2P.1f({3k:"ak",2p:"3O%",22:"3O%",1T:"0",1s:"0",2H:"0",8R:"pi"}).2M()},ht:B(3L){c.6g=E;if(3L.44("#")==0){c.6g=$(3L);$("#ac").6z().1h(c.6g.o());c.6g.o("")}I{$("#ac").6z().1h(3L)}},hD:B(1e){c.$2P.1b("#bc").o(1e)},hC:B(){q 4a=c.$2P.1b("49 1D").ay(".pg");q ea=4a.1V();if(ea>0){$(4a).1f("2p",(c.$au/ea)+"px")}},gO:B(){c.$2P.1b(".6M").on("23",$.M(c.3g,c))},gH:B(){if(c.C.fb){c.$8D=$("#ev");if(!c.$8D.1m){c.$8D=$(\'<12 id="ev" 1o="3f: 3r;"></12>\');$("2v").6d(c.$8D)}c.$8D.2M().on("23",$.M(c.3g,c))}},hI:B(){if(1E $.fn.ii!=="1J"){c.$2P.ii({po:"#bc"});c.$2P.1b("#bc").1f("er","pv")}},ia:B(){q $5E=$("#5E");if(!$5E.1m){F E}q 4J=c;$5E.1b("a").1u(B(i,s){i++;$(s).on("23",B(e){e.2u();$5E.1b("a").3c("6I");$(c).2z("6I");$(".5D").2U();$("#5D"+i).2M();$("#ps").1p(i);if(4J.5a()===E){q 22=4J.$2P.hQ();4J.$2P.1f("2H-1T","-"+(22+10)/2+"px")}})})},8M:B(e){if(e.2O===c.2O.dY){c.3g();F E}},3g:B(){$("#eP").3b("23",c.3g);$("#eR").6N("pd",$.M(B(){q eU=$("#ac");if(c.6g!==E){c.6g.o(eU.o());c.6g=E}eU.o("");if(c.C.fb){$("#ev").2U().3b("23",c.3g)}$(X).3b("5d",c.8M);c.$K.3b("5d",c.8M);c.1W();if(c.C.4Y&&c.6J){$(c.X.2v).3e(c.6J)}I{if(c.C.4Y===E&&c.6J){c.$K.3e(c.6J)}}c.1c("p2")},c));if(c.5a()===E){$(X.2v).1f("8V",c.ei?c.ei:"gq")}F E},oY:B(eu){$(".5D").2U();$("#5E").1b("a").3c("6I").eq(eu-1).2z("6I");$("#5D"+eu).2M()},gD:B(e){q 7I=e.1O.7I;3z(q i=0,f;f=7I[i];i++){c.e1(f)}},e1:B(25){c.gy(25,$.M(B(gx){c.ji(25,gx)},c))},gy:B(25,1c){q 2n=2c la();q eV="?";if(c.C.5Q.4G(/\\?/)!="-1"){eV="&"}2n.b7("p3",c.C.5Q+eV+"2m="+25.2m+"&1G="+25.1G,N);if(2n.kR){2n.kR("Y/p7; pw=x-py-pY")}q 4J=c;2n.pW=B(e){if(c.lc==4&&c.e8==5k){4J.8C();1c(pU(c.pZ))}I{if(c.lc==4&&c.e8!=5k){}}};2n.k9()},ja:B(5l,1K){q 2n=2c la();if("q7"in 2n){2n.b7(5l,1K,N)}I{if(1E lb!="1J"){2n=2c lb();2n.b7(5l,1K)}I{2n=2G}}F 2n},ji:B(25,1K){q 2n=c.ja("q5",1K);if(!2n){}I{2n.jd=$.M(B(){if(2n.e8==5k){c.b6();q eb=1K.4o("?");if(!eb[0]){F E}c.1W();q o="";o=\'<1B id="T-1L" 3p="\'+eb[0]+\'" />\';if(c.C.5Y){o="<p>"+o+"</p>"}c.26("5c",o,E);q T=$(c.$K.1b("1B#T-1L"));if(T.1m){T.2B("id")}I{T=E}c.1j();c.1c("3Y",T,E);c.3g();c.4T()}I{}},c);2n.q3=B(){};2n.8H.pQ=B(e){};2n.iK("pE-pF",25.1G);2n.iK("x-pG-pD","pz-pA");2n.k9(25)}},et:B(el,3R){c.3A={1K:E,4h:E,3U:E,2y:E,ef:E,4l:E,2T:E};$.4W(c.3A,3R);q $el=$("#"+el);if($el.1m&&$el[0].Q==="pB"){c.3A.2T=$el;c.el=$($el[0].2t)}I{c.el=$el}c.jD=c.el.1i("7t");if(c.3A.4l){$(c.3A.2T).68($.M(B(e){c.el.ca(B(e){F E});c.e4(e)},c))}I{if(c.3A.ef){$("#"+c.3A.ef).23($.M(c.e4,c))}}},e4:B(e){c.8C();c.jI(c.2j,c.kl())},kl:B(){c.id="f"+4u.kg(4u.kh()*k0);q d=c.X.4C("12");q 1Q=\'<1Q 1o="3f:3r" id="\'+c.id+\'" 2m="\'+c.id+\'"></1Q>\';d.3Q=1Q;$(d).8P("2v");if(c.3A.2y){c.3A.2y()}$("#"+c.id).jZ($.M(c.jT,c));F c.id},jI:B(f,2m){if(c.3A.2T){q eI="pM"+c.id,jX="pK"+c.id;c.2t=$(\'<2t  7t="\'+c.3A.1K+\'" 5l="c1" 1O="\'+2m+\'" 2m="\'+eI+\'" id="\'+eI+\'" b3="af/2t-1a" />\');if(c.C.3H!==E&&1E c.C.3H==="3M"){$.1u(c.C.3H,$.M(B(k,v){if(v!=2G&&v.43().44("#")===0){v=$(v).1p()}q 8E=$("<2T/>",{1G:"8E",2m:k,2s:v});$(c.2t).1h(8E)},c))}q eT=c.3A.2T;q 8S=$(eT).6q();$(eT).1i("id",jX).3S(8S).8P(c.2t);$(c.2t).1f("3k","8T").1f("1T","-df").1f("1s","-df").8P("2v");c.2t.ca()}I{f.1i("1O",2m).1i("5l","c1").1i("b3","af/2t-1a").1i("7t",c.3A.1K);c.2j.ca()}},jT:B(){q i=$("#"+c.id)[0],d;if(i.jU){d=i.jU}I{if(i.bK){d=i.bK.X}I{d=42.o2[c.id].X}}if(c.3A.4h){c.b6();if(1E d!=="1J"){q jW=d.2v.3Q;q 7s=jW.1U(/\\{(.|\\n)*\\}/)[0];7s=7s.G(/^\\[/,"");7s=7s.G(/\\]$/,"");q 1M=$.8J(7s);if(1E 1M.3U=="1J"){c.3A.4h(1M)}I{c.3A.3U(c,1M);c.3g()}}I{c.3g();o1("jE nY!")}}c.el.1i("7t",c.jD);c.el.1i("1O","")},bP:B(el,3R){c.5w=$.4W({1K:E,4h:E,3U:E,nZ:E,3H:E,Y:c.C.1F.jA,jJ:c.C.1F.jB,6k:E},3R);if(42.bw===1J){F E}c.bz=$(\'<12 1x="o0"></12>\');c.5b=$(\'<12 1x="o6">\'+c.5w.Y+"</12>");c.kk=$(\'<12 1x="o7">\'+c.5w.jJ+"</12>");c.bz.1h(c.5b);$(el).3S(c.bz);$(el).3S(c.kk);c.5b.on("oc",$.M(B(){F c.je()},c));c.5b.on("ob",$.M(B(){F c.jf()},c));c.5b.2R(0).o8=$.M(B(e){e.2u();c.5b.3c("dk").2z("6w");c.8C();c.bF(c.5w.1K,e.aX.7I[0],E,e,c.5w.6k)},c)},bF:B(1K,25,bm,e,6k){if(!bm){q 2n=$.nX.2n();if(2n.8H){2n.8H.nK("8O",$.M(c.jh,c),E)}$.nL({2n:B(){F 2n}})}c.1c("6w",e);q fd=2c bw();if(6k!==E){fd.1h(6k,25)}I{fd.1h("25",25)}if(c.C.3H!==E&&1E c.C.3H==="3M"){$.1u(c.C.3H,$.M(B(k,v){if(v!=2G&&v.43().44("#")===0){v=$(v).1p()}fd.1h(k,v)},c))}$.iU({1K:1K,nI:"o",1a:fd,nG:E,c3:E,nH:E,1G:"c1",4h:$.M(B(1a){1a=1a.G(/^\\[/,"");1a=1a.G(/\\]$/,"");q 1M=(1E 1a==="8I"?$.8J(1a):1a);c.b6();if(bm){q $1B=$("<1B>");$1B.1i("3p",1M.6e).1i("id","jc-T-1L");c.js(e,$1B[0]);q T=$(c.$K.1b("1B#jc-T-1L"));if(T.1m){T.2B("id")}I{T=E}c.1j();c.4T();if(T){c.1c("3Y",T,1M)}if(1E 1M.3U!=="1J"){c.1c("dV",1M)}}I{if(1E 1M.3U=="1J"){c.5w.4h(1M)}I{c.5w.3U(c,1M);c.5w.4h(E)}}},c)})},je:B(){c.5b.2z("dk");F E},jf:B(){c.5b.3c("dk");F E},jh:B(e,Y){q kX=e.kB?9y(e.kB/e.oR*3O,10):e;c.5b.Y("oO "+kX+"% "+(Y||""))},5a:B(){F/(oj|or|os|oy)/.4e(6n.7k)},d6:B(){F/oz/.4e(6n.7k)},9M:B(4p){if(1E(4p)==="1J"){F 0}F 9y(4p.G("px",""),10)},3Z:B(el){F $("<12>").1h($(el).eq(0).6q()).o()},ox:B(o){q 2L=X.4C("8K");2L.3Q=o;F 2L.9Q||2L.dh||""},kF:B(71){F ow.5o.43.5q(71)=="[3M 51]"},9B:B(o){o=o.G(/&#9F;|<br>|<br\\/>|&3u;/gi,"");o=o.G(/\\s/g,"");o=o.G(/^<p>[^\\W\\w\\D\\d]*?<\\/p>$/i,"");F o==""},ro:B(){q rv=E;if(6n.rn=="rl rb rx"){q 47=6n.7k;q re=2c 2J("rf ([0-9]{1,}[.0-9]{0,})");if(re.2o(47)!=2G){rv=rw(2J.$1)}}F rv},8L:B(){F!!6n.7k.1U(/ry\\/7\\./)},1C:B(1C){q 47=6n.7k.3N();q 1U=/(fs)[\\/]([\\w.]+)/.2o(47)||/(d5)[ \\/]([\\w.]+)/.2o(47)||/(4s)[ \\/]([\\w.]+).*(rC)[ \\/]([\\w.]+)/.2o(47)||/(4s)[ \\/]([\\w.]+)/.2o(47)||/(94)(?:.*9n|)[ \\/]([\\w.]+)/.2o(47)||/(3t) ([\\w.]+)/.2o(47)||47.44("r3")>=0&&/(rv)(?::| )([\\w.]+)/.2o(47)||47.44("qt")<0&&/(31)(?:.*? rv:([\\w.]+)|)/.2o(47)||[];if(1C=="9n"){F 1U[2]}if(1C=="4s"){F(1U[1]=="d5"||1U[1]=="4s")}if(1U[1]=="rv"){F 1C=="3t"}if(1U[1]=="fs"){F 1C=="4s"}F 1C==1U[1]},cw:B(){if(c.1C("3t")&&9y(c.1C("9n"),10)<9){F N}F E},fF:B(fr){q 7e=fr.qA(N);q 12=c.X.4C("12");12.7g(7e);F 12.3Q},cE:B(){q J=c.$K[0];q 4k=c.X.cD();q cC;3w((cC=J.8G)){4k.7g(cC)}F 4k},4j:B(el){if(!el){F E}if(c.C.1Q){F el}if($(el).8B("12.4d").1m==0||$(el).3v("4d")){F E}I{F el}},74:B(Q){q L=c.2E(),1t=c.3P();F L&&L.Q===Q?L:1t&&1t.Q===Q?1t:E},ck:B(){q 1t=c.2N();q 2Y=c.ch(1t);q Y=$.2b($(1t).Y()).G(/\\n\\r\\n/g,"");q 4P=Y.1m;if(2Y==4P){F N}I{F E}},7h:B(){q el,1q=c.29();if(1q&&1q.4V&&1q.4V>0){el=1q.48(0).6D}if(!el){F E}if(c.C.1Q){if(c.hR().iz()){F!c.$K.is(el)}I{F N}}F $(el).2g("12.4d").1m!=0},4H:B(el,1i){if($(el).1i(1i)==""){$(el).2B(1i)}},iB:B(ao,2s){q 2K=2G;3w((2K=ao.44(2s))!==-1){ao.ap(2K,1)}F ao}};3J.5o.77.5o=3J.5o;$.3J.fn.e7=B(eQ,7d,6l,75,7A){q 1K=/(((5n?|qT?):\\/\\/)|aA[.][^\\s])(.+?\\..+?)([.),]?)(\\s|\\.\\s+|\\)|$)/gi,hK=/(5n?|am):\\/\\//i,d3=/(5n?:\\/\\/.*\\.(?:gY|qR|hc|ha))/gi;q 8F=(c.$K?c.$K.2R(0):c).8F,i=8F.1m;3w(i--){q n=8F[i];if(n.4D===3){q o=n.aH;if(75&&o){q 5j=\'<1Q 2p="cT" 22="hG" 3p="\',7B=\'" cS="0" hE></1Q>\';if(o.1U(8N)){o=o.G(8N,5j+"//aA.cO.7w/4S/$1"+7B);$(n).2I(o).1w()}I{if(o.1U(8Q)){o=o.G(8Q,5j+"//hp.cI.7w/3y/$2"+7B);$(n).2I(o).1w()}}}if(6l&&o&&o.1U(d3)){o=o.G(d3,\'<1B 3p="$1">\');$(n).2I(o).1w()}if(7d&&o&&o.1U(1K)){q 2x=o.1U(1K);3z(q i in 2x){q 1S=2x[i];q Y=1S;q 6c="";if(1S.1U(/\\s$/)!==2G){6c=" "}q c8=eQ;if(1S.1U(hK)!==2G){c8=""}if(Y.1m>7A){Y=Y.aQ(0,7A)+"..."}Y=Y.G(/&/g,"&9h;").G(/</g,"&lt;").G(/>/g,"&gt;");q jq=Y.G("$","$$$");o=o.G(1S,\'<a 1S="\'+c8+$.2b(1S)+\'">\'+$.2b(jq)+"</a>"+6c)}$(n).2I(o).1w()}}I{if(n.4D===1&&!/^(a|1D|5s)$/i.4e(n.Q)){$.3J.fn.e7.5q(n,eQ,7d,6l,75,7A)}}}}})(nW);',62,1714,'||||||||||||this||||||||||||html||var|||||||||||function|opts||false|return|replace||else|node|editor|parent|proxy|true|range||tagName|||image|redactor|span||document|text||||div||||||||data|find|callback|tag|title|css|td|append|attr|sync|key|block|length|table|style|val|sel|link|left|current|each|source|remove|class|lang|elem|toolbar|img|browser|button|typeof|curLang|type|func|selection|undefined|url|marker|json|linebreaks|target|cmd|iframe|dropdown|href|top|match|size|selectionRestore|nodes|contents|out||bufferSet|height|click||file|execCommand||selectionSave|getSelection|btn|trim|new|btnObject|replaceWith|blockquote|closest|focus|invisibleSpace|element|code|section|name|xhr|exec|width|pre|ul|value|form|preventDefault|body|btnName|matches|start|addClass|font|removeAttr|box|label|getParent|param|null|margin|after|RegExp|index|tmp|show|getBlock|keyCode|redactorModal|arr|get|className|input|hide|setTimeout|last|imageBox|offset|frame|air|mozilla|||||||||list|off|removeClass|push|scrollTop|display|modalClose|LI|point|tr|position|end|bold|script|getRange|src|italic|none|select|msie|nbsp|hasClass|while|ctrl|video|for|uploadOptions|insertNode|doc|blocks|buffer|BLOCKQUOTE|wrapper|uploadFields|getBlocks|Redactor|contenteditable|content|object|toLowerCase|100|getCurrent|innerHTML|options|before|thead|error|strong|inline|pos|imageUpload|outerHtml||rangy|window|toString|indexOf|||ua|getRangeAt|footer|buttons|option|children|redactor_editor|test|next|selectionStart|success|focusWithSaveScroll|isParentRedactor|frag|auto|rel|fullpage|split|str|buttonGet|redactor_modal_btn|webkit|elems|Math|postData|meta|finalnodes|insert|current_tr|htmls|textNodes|createElement|nodeType|tooltip|collapsed|search|removeEmptyAttr|php|that|underline|parentNode|prev|cont|inArray|len|orgn|substr|embed|observeImages|placeholder|rangeCount|extend|removeAllRanges|autoresize|right||String|tab|shiftKey|keys|redactor_placeholder|del|align|emptyHtml||isMobile|dropareabox|inserthtml|keyup|blockElem|break|addRange|collapse|createRange|iframeStart|200|method|observeLinks|https|prototype|redactor_file|call|audio|textarea|alignmentTags|case|lastNode|draguploadOptions|listTag|regex|imageResizer|rule|replaced|charAt|redactor_tab|redactor_tabs|strike|allowedTags|deleted|formatBlocks|float|newTag|marginLeft|marginTop|visual|node1|listCurrent|s3|selectall|savedSel|keydown|par|join|modal|which|paragraphy|current_td|||modalInit|direction|textareamode|||event|change|dir|orderedlist|Insert|space|prepend|filelink|unorderedlist|modalcontent|TD|PRE|shortcuts|uploadParam|convertImageLinks|indent|navigator|formatBlock|italicTag|clone|boldTag|color|imageResizeHide|imageEditter|control|drop|formatting|_blank|empty|round|toolbarFixed|redactor_file_link|startContainer|modified|unlink|count|cancel|redactor_tabs_act|saveModalScroll|insert_link_node|imageGetJson|redactor_btn_modal_close|fadeOut|center|redactor_modal_action_btn|redactor_input|folders|redactor_link_blank|redactorfolder|insertAfterLastElement|set|hideHandler|phpMatches|item|cleanRemoveSpaces|etags|obj|cleanGetTabs||currentOrParentIs|convertVideoLinks|replacementTag|init|thtml|elements|dropact|buttonActive|tabindex|convertLinks|cloned|buttonBuild|appendChild|isFocused|tmpList|newblock|userAgent|instance|outdent|listParent|weight|blocksElems|modif|getNodes|jsonString|action|possible|nodeTestBlocks|com|enter|fullpageDoctype|isFunction|linkSize|iframeEnd|autosave|u200B|linkObserverTooltipClose|uuid|selectionEnd|observeStart|files|charCount|endCharCount|Delete|boxTop|save|toolbarExternal|dblEnter|horizontalrule|post|character|toolbarFixedTarget|keyPosition|shift|Header|typewriter|Add|redactor_link_url|metaKey|tagblock|createTextNode|linkmarker|fileUpload|setEnd|setStart|focn|textNode|newnodes|linkProtocol|selectionRemoveMarkers|tbody|cleanStripTags|selectionSet|node2|getElement|endContainer|imageFloatMargin|rtePaste|insertunorderedlist|alignmentSet|resize|alt|tmpLi|edit|insertorderedlist|buttonActiveObserver|fontSize|background|setNonEditable|cleanlevel|tagout|phpTags|deniedTags|redactor_act|rebuffer|parents|showProgressBar|redactorModalOverlay|hidden|childNodes|firstChild|upload|string|parseJSON|DIV|isIe11|modalCloseHandler|reUrlYoutube|progress|appendTo|reUrlVimeo|minHeight|newElement|absolute|11px|overflow|pasteInsert|padding|10px|selected|||setSpansVerified|inlineMethods|opera|tablePaste|||||convertDivs|parentLink|marginBottom|marginRight|ADDRESS|SECTION|strip|amp|insertHtml|folderclass|parentHtml|result|rangeNodes|version|listText|clipboardUpload|indentValue|template|verified|saveScroll|zIndex|paste|wrapperHtml|selectionHtml|parseInt|cleanParagraphy||isEmpty|codeLength|prop|floating|x200b|new_w|predefinedLinksStorage|line|mousedown|checked|placeTag|normalize|linkShow|insertHtmlAdvanced|ctrlKey|textContent|alignment|cleanConvertInlineTags|allowed|head|new_tr|colspan|rowspan|FOOTER|HEADER|ARTICLE|removeEmptyTags|BACKSPACE|clickedElement|ASIDE|start_y|start_x|parentEl|mouseup|sourceHeight|isResizing|javascript|redactor_modal_inner|setSpansVerifiedHtml|setStartAfter|multipart|cloneRange|autosaveInterval|selectionSetMarker|redactor_link_url_text|fixed|insertLineBreak|ftp|imageUploadParam|array|splice|foundStart|boundaryRange|toolbarFixedBox|insertAfter|redactorModalWidth|emptyElement|special|rTestBlock|not|specialKey|www|getSelectionText|deleteContents|outer|documentElement|rows|direct|nodeValue|http|columns|focusSet|execPasteFrag|selectNodeContents|separator|methodVal|classname|substring|icon|header|7px|fonts|folder|tabSpaces|dataTransfer|activeButtons|row|folderkey|column|imageInsert|enctype|spans|foco|hideProgressBar|open|one|ENTER|preCaretRange|toolbarFixedTopOffset|redactor_modal_header|buildCodearea||htmlTagName|blockLevelElements|hdlHideDropDown|airBindMousemoveHide|dropdownHideAll|inlineRemoveFormatReplace|redactor_form_image_align|directupload|aligncenter|align_right|align_left|endRange||alignright|insertingAfterLastElement|align_justify|align_center|FormData|selectionWrap|selectionElement|droparea|selectionRemove|orgo|BR|fotorama|posFrame|dragUploadAjax|iframeDoc|caretOffset|Range|contOwnLine|contentWindow|ownLine|tagTestBlock|getTextNodesIn|apply|draguploadInit|arrSearch|cursorRange|royalSlider|clipboardUploadUrl|add_head|cleanFontTag|insert_column_right|insert_column_left|delete_head|decoration|delete_row|POST|delete_column|contentType|insert_row_below|insert_row_above|pasteClipboardMozilla|fullscreen|addProtocol|pasteClipboardAppendFields|submit|focusEnd|getRangeSelectedNodes|insert_table|cleanEncodeEntities|alignleft|elem2|getCaretOffset|dropdownHide|dropdownShow|isEndOfElement|buildEventKeydownInsertLineBreak|btnHeight|plugins|iframeAppend|sourceOld|RedactorPlugins|dropdownWidth|buttonName|buttonInactive|rBlockTest|activeButtonsStates|oldIE|indentingIndent|indentingOutdent|link_insert|FIGCAPTION|redactor_button_disabled|child|createDocumentFragment|extractContent|airShow|focusElem|buildAfter|vimeo|buildOptions|iframeAddCss|hotkeysShiftNums|placeholderOnBlur|blur|youtube|placeholderGet|placeholderOnFocus|placeholderText|frameborder|500|buttonsHideOnMobile|iframePage|redactor_toolbar|toolbarObserveScroll|savedHtml|iframeLoad|toggle|setFullpageOnInit|buildBindKeyboard|urlImage|indentingStart|chrome|isIPad|cleannewLevel|formatblock|formatQuote|paragraphsOnly|suffix|cleanTag||cleanSavePreCode|2000px|cleanFinish|innerText|tfoot|arg|hover||address|parseHTML|pasteHTML|currBlock|cleanRemoveEmptyTags|inlineEachNodes|INLINE||placeholderRemove|utag|buildEnable|safes|alignmentCenter|modify|alignmentJustify|justify|reader|alignmentRight|lineOrWord|childList|insideOutdent|DOWN|alignmentLeft|cleanEmpty|cleanConverters|oldsafari|dnbImageTypes|th|maxHeight|merge|commentsMatches|cleanConvertProtected|templateVars|clipboardData|etagsInline|imageUploadError|delete_table|imageRemove|ESC|added|redactor_file_alt|s3uploadFile|table_box|tableAddColumn|uploadSubmit|fileUploadParam|redactor_filename|formatLinkify|status|delete|buttonsSize|s3image|predefinedLinks|filename|BODY|trigger|focus_tr|thumbtitle|modalSaveBodyOveflow|resizer|focus_td||||choose|lineHeight||cursor|editter|uploadInit|num|redactor_modal_overlay|tableAddRow|fileCallback|tableDeleteHead|tableId|redactor_image_box|link_new_tab|DELETE|redactor_insert_video_area|syncClean|container|try|mailto|formId|linkInsertPressed|endNode|z0|ratio|imageCallback|pattern|redactor_modal_close|protocol|redactor_modal|pageX|oldElement|redactorModalInner|mark|Column|redactor_table_rows|extra|targetBlank|Row|||||||||||modalOverlay|Table||catch|pageY|link_edit|firstParent|1px|fff|altKey|buttonInactiveAll|superscript||buttonActiveToggle|5px|imageCallbackLink|fragment|opr|bottom|execUnlink|execLists|LEFT_WIN|inserthorizontalrule|subscript|formattingPre|listCurrentText|UL|strikethrough|8px|000|getFragmentHtml|redactor_dropdown_link|clonedHtml|imageThumbClick|OUTPUT|backgroundColor|cleanReConvertProtected|redactor_editor_wym|toolbarInit|wym|min|buildAddClasses|dragUpload|textareaKeydownCallback|buildEventDrop|area|fieldset|modalShowOnDesktop|focusCallback|buildFromElement|buildFromTextarea|buildStart|mobile|filter|transparent|new_h|cleanUnverified|quot|List|tags|min_w|encode|buildMobile|map|buildEventPaste|double|DT|Color|items||cleanReplacer|clipboardFilePaste|placeholderStart|18px|imageEdit|buildEventKeydown|opacity|visible|buffer_|u200D||mod|pastedFrag|cleanup|signedURL|s3executeOnSignedUrl|buildEventClipboardUpload|imageResizeControls|uFEFF|relative|s3handleFileSelect|originalEvent|imageResizable|buttonInactiveVisual|modalSetOverlay|toolbarBuild|airButtons|buttonSource|links|formattingTags|URL|modalOnCloseButton|indenting|tidyHtml|textareaIndenting|setInterval|checkbox|predefined|timer|write|modal_link|png|redactor_upload_btn|10005|||||||scroll|close|toolbarOverflow|gif|redactor_air_|jpeg|clearInterval|redactor_insert_link_btn|modal_table|args|placeholderBlur|219|placeholderInit|redactor_insert_video_btn|modalShowOnMobile|placeholderFocus|command|shortcutsHandler|player|placeholderRemoveFromCode||placeholderRemoveFromEditor|modalSetContent|hotkeysSpecialKeys|redactor_insert_table_btn|arguments|redactor_table_columns|toggleVisual|toggleCode|origHandler|modal_video|modalSetButtonsWidth|modalSetTitle|allowfullscreen|video_html_code|281|visibility|modalSetDraggable|dropdownBuild|rProtocol|modal_image_edit|H6|buttonActiveVisual|redactor_dropdown|image_position|outerHeight|getCaretOffsetRange|buildEventKeyup|buttonImage|returnValue|mouse_y|modal_file|afterkey|buildEventKeydownTab|buildEventKeydownPre|progressBar|beforekey|tabFocus|Array|buildEventKeydownBackspace|modalTemplatesInit|DD|DL|buildProgressBar|H5|modalLoadTabs|redactor_tab2|innerWidth||airBindHide|||collapseToStart|draggable|keyboard|redactor_air|airEnable|toolbar_fixed_box||iframeCreate|image_web_link|redactor_tab3|dropdownObject||H1|buildPlugins|_delete|H4|buildEventKeyupConverters|redactor_image_delete_btn|equals|redactorSaveBtn|removeFromArrayByValue|H2|modal_image|innerHeight|H3|TAB|buildContent|videoShow|videoInsert|setRequestHeader|tableAddColumnRight|tableAddColumnLeft|internal|cleanSpaces|div_h|linkProcess|location|self|thref|ajax|tableAddRowBelow|to|focusIndex|tableDeleteColumn|the|pasteClipboardUploadMozilla|Align|tableAddHead|tableAddRowAbove|Center|first|pastePre|pastePlainText|pasteClean|linkInsert|s3createCORSRequest|outerHTML|drag|onload|draguploadOndrag|draguploadOndragleave|fileShow|uploadProgress|s3uploadToS3|aside|article|clientX|clientY|Video|SPAN|twice|escapedBackReferences|replaceLineBreak|insertNodeToCaretPositionFromPoint|re2|caretPositionFromPoint|caretRangeFromPoint|createTextRange|moveToPoint|imgs|pasteClipboardUpload|drop_file_here|or_choose|arrAdd|element_action|Upload|setCaretAfter|langs|setCaret|uploadForm|atext|paragraph|shortcutsAdd|newLevel|selectionCreateMarker|nextSibling|getSelectionHtml|nextNode|slice|unshift|uploadLoaded|contentDocument|Edit|rawString|fileId|nodeName|load|99999|header4|pop|header3|linkObserver|aLink|bufferRedo|bufferUndo|tableDeleteRow|send|tableDeleteTable|header5|clipboard|aEdit|aUnlink|formatChangeTag|floor|random|quote|endOffset|dropalternative|uploadFrame|tableInsert|header2|tableShow|header1|fileUploadError|Code|xhtmlTags|xhtml|getCodeIframe|inside|setFullpageDoctype|nofollow|linkNofollow|Right|switch|loaded|imageTabLink|inlineSetMethods|setCodeIframe|isString|Image|doctype|noeditable|Left|fromElement|imageSave|blocksLen|cleanlineAfter|toTagName|formatEmpty|wrapAll|overrideMimeType|paragraphs|cleanlineBefore|imageResize|blocksElemsRemove|newhtml|percent|Head|HTML|onchangeFunc|mousemove|Link|setEditor|imageShow|cleanHtml|inlineFormat|unwrap|isEmptyObject|getJSON|XMLHttpRequest|XDomainRequest|readyState|inlineUnwrapSpan|noscript|u00a9|103|copy||102|u2026|Outdent|Below|down|redactor_|101|applet|Ordered|u2122||isArray|Underline|stylesheet|111|removeChild|Open|110|109|up|105|Alignment|trade|106|45px|107|104|ownerDocument|sourceWidth|mdash|Indent|u2014|No|redactor_box|CTRL|such|youtu|META|use|startOffset|strict|dropdowns|u2010|dash|eval|TEXTAREA|redactor_format_blockquote|pageup|esc|Above|pagedown|optional|Name|hellip|removeFormat|capslock|pause|defaultView|VERSION|Cancel|ltr|LEFT|Save|backspace|home|redactor_format_h3|Embed|FileReader|u00a0|readAsDataURL|Web|Callback|Italic|word|alignjustify|File|112|backcolor|Download|getAsFile|download|fontcolor|about|Font|destroy|Bold|TH|getIframe|web|getToolbar|Formatting|redo|Email|Unlink|undo|getBox|collapseToEnd|getObject|removeData|Text|Quote|Normal|getEditor|blank|Choose|Title|blurCallback|redactor_format_h2|redactor_format_h4|Rule|Chrome|Horizontal|Position|Columns|Deleted|anchor|Unordered|Anchor|redactor_format_pre|enableObjectResizing|redactor_format_h1|enableInlineTableEditing|536|None|here|noneditable||separator_drop1|separator_drop2|Back|Or|separator_drop3|Drop||syncBefore|syncAfter|1class||frameset|Justify|redactor_format_h5|8203|bull|default|Rows|legend|u200b|cache|processData|dataType|fake|addEventListener|ajaxSetup|pasteAfter|guid|docs|MsoListParagraphCxSpFirst|shapes|pasteBefore|MsoListParagraphCxSpMiddle|MsoListParagraphCxSpLast|sid|MsoListParagraph|jQuery|ajaxSettings|failed|preview|redactor_droparea|alert|frames|commonAncestorContainer|isCollapsed|isInlineNode|redactor_dropareabox|redactor_dropalternative|ondrop|editGallery|unselectable|dragleave|dragover|selectionAll|extractContents|insertDoubleLineBreak|EndToEnd|blockSetAttr|blockRemoveAttr|iPhone|blockRemoveStyle||blockSetStyle||inlineRemoveClass|blockSetClass|blockRemoveClass|iPod|BlackBerry|cite|small|sup|Object|stripHtml|Android|iPad|inlineRemoveStyle|inlineSetStyle|insertBeforeCursor|toUpperCase|inlineRemoveFormat|insertText|setEndAfter|setEndPoint|duplicate|offsetNode|attributes|backColor|inlineSetAttr|inlineRemoveAttr|Loading|family|fontName|total|foreColor|hasChildNodes|cloneContents|rgba|dashed|outline|modalSetTab|pointer|border|4px|modalClosed|GET|3px|clicked|dragstart|plain|min_h|mouse_x|9px|13px|solid|fast|160px|redactorInsertVideoForm|redactor_modal_btn_hidden||300px|times|keypress|focusin|modalOpened|redactor_tab1|handle|redactorUploadFileForm|1500|fadeIn|redactor_tab_selected|redactor_modal_delete_btn|redactorInsertImageForm|move|charset||user|public|read|INPUT|cellIndex|acl|Content|Type|amz|300|removeMarkers|detach|redactorUploadFile|saveSelection|redactorUploadForm|restoreSelection|u1C7F|u0000|onprogress|600|redactor_image_edit_src|610|decodeURIComponent|380|onreadystatechange|imageDelete|defined|responseText|redactor_image_box_select|460|host|onerror|xn|PUT|thumb|withCredentials|sub|inlineSetClass|buttonTagToActiveState|redactor_dropdown_box_|buttonChangeIcon|buttonRemoveIcon|121|buttonAwesome|stopPropagation|touchstart|f11|123|122|f10|dropdownShown|buttonAdd|buttonAddFirst|SUB|SUP|OL|118|compatible|188|119|buttonAddBefore|buttonAddAfter|120|buttonRemove|cloneNode|redactor_dropdown_|redactor_separator_drop|186|187|_|fromCharCode|Key|222|221|190|189|191|192|220|173|145|jpg|external|ftps|focusNode|f12|redactor_toolbar_|1000|144|numlock|escape|encodeURIComponent|autosaveError|trident|firstNode|colgroup|col|math|hgroup|nav|caption|Internet|117|concat||MSIE|JustifyLeft|comment|figure|figcaption|114|Microsoft|113|appName|getInternetExplorerVersion|115|hasOwnProperty|116|details|menu|summary||parseFloat|Explorer|Trident|JustifyCenter|JustifyRight|JustifyFull|safari|gallery'.split('|'),0,{}))
// (function ($) {
$.Redactor.opts.langs['ru'] = {
	html: 'Код',
	video: 'Видео',
	image: 'Изображение',
	table: 'Таблица',
	link: 'Ссылка',
	link_insert: 'Вставить ссылку ...',
	link_edit: 'Изменить ссылку',
	unlink: 'Удалить ссылку',
	formatting: 'Форматирование',
	paragraph: 'Обычный текст',
	quote: 'Цитата',
	code: 'Код',
	header1: 'Заголовок 1',
	header2: 'Заголовок 2',
	header3: 'Заголовок 3',
	header4: 'Заголовок 4',
	header5: 'Заголовок 5',
	bold:  'Полужирный',
	italic: 'Наклонный',
	fontcolor: 'Цвет текста',
	backcolor: 'Заливка текста',
	unorderedlist: 'Обычный список',
	orderedlist: 'Нумерованный список',
	outdent: 'Уменьшить отступ',
	indent: 'Увеличить отступ',
	cancel: 'Отменить',
	insert: 'Вставить',
	save: 'Сохранить',
	_delete: 'Удалить',
	insert_table: 'Вставить таблицу',
	insert_row_above: 'Добавить строку сверху',
	insert_row_below: 'Добавить строку снизу',
	insert_column_left: 'Добавить столбец слева',
	insert_column_right: 'Добавить столбец справа',
	delete_column: 'Удалить столбец',
	delete_row: 'Удалить строку',
	delete_table: 'Удалить таблицу',
	rows: 'Строки',
	columns: 'Столбцы',
	add_head: 'Добавить заголовок',
	delete_head: 'Удалить заголовок',
	title: 'Подсказка',
	image_position: 'Обтекание текстом',
	none: 'Нет',
	left: 'Cлева',
	right: 'Cправа',
	image_web_link: 'Cсылка на изображение',
	text: 'Текст',
	mailto: 'Эл. почта',
	web: 'URL',
	video_html_code: 'Код видео ролика',
	file: 'Файл',
	upload: 'Загрузить',
	download: 'Скачать',
	choose: 'Выбрать',
	or_choose: 'Или выберите',
	drop_file_here: 'Перетащите файл сюда',
	align_left:	'По левому краю',
	align_center: 'По центру',
	align_right: 'По правому краю',
	align_justify: 'Выровнять текст по ширине',
	horizontalrule: 'Горизонтальная линейка',
	fullscreen: 'Во весь экран',
	deleted: 'Зачеркнутый',
	anchor: 'Якорь',
	link_new_tab: 'Открывать в новой вкладке',
	underline: 'Подчеркнутый',
	alignment: 'Выравнивание',
	filename: 'Название (необязательно)',
	edit: 'Ред.',
	center: 'По центру'
};
// })( jQuery );

/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 4.2.9
 *
 * File input styled for Bootstrap 3.0 that utilizes HTML5 File Input's advanced features including the FileReader API.
 * 
 * The plugin drastically enhances the HTML file input to preview multiple files on the client before upload. In
 * addition it provides the ability to preview content of images, text, videos, audio, html, flash and other objects.
 * It also offers the ability to upload and delete files using AJAX, and add files in batches (i.e. preview, append,
 * or remove before upload).
 * 
 * Author: Kartik Visweswaran
 * Copyright: 2015, Kartik Visweswaran, Krajee.com
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(e){"use strict";e.fn.fileinputLocales={};var i,t,a,r,n,l,o,s,d,c,p,u,f,v,g,m,h,w,b,C,x,y,T,F,I,E,k,$,P,S,D,U,A,j,L,z,O,R,M,B,N,Z,H,W,q,_,V,K,X,J,Q,Y,G;G=".fileinput",i=function(e){if("Microsoft Internet Explorer"!==navigator.appName)return!1;if(10===e)return new RegExp("msie\\s"+e,"i").test(navigator.userAgent);var i,t=document.createElement("div");return t.innerHTML="<!--[if IE "+e+"]> <i></i> <![endif]-->",i=t.getElementsByTagName("i").length,document.body.appendChild(t),t.parentNode.removeChild(t),i},t=function(){return new RegExp("Edge/[0-9]+","i").test(navigator.userAgent)},a=function(e,i,t,a){var r=a?i:i.split(" ").join(G+" ")+G;e.off(r).on(r,t)},r={data:{},init:function(e){var i=e.initialPreview,t=e.id;i.length>0&&!q(i)&&(i=i.split(e.initialPreviewDelimiter)),r.data[t]={content:i,config:e.initialPreviewConfig,tags:e.initialPreviewThumbTags,delimiter:e.initialPreviewDelimiter,template:e.previewGenericTemplate,msg:function(i){return e.getMsgSelected(i)},initId:e.previewInitId,footer:e.getLayoutTemplate("footer").replace(/\{progress}/g,e.renderThumbProgress()),isDelete:e.initialPreviewShowDelete,caption:e.initialCaption,actions:function(i,t,a,r,n){return e.renderFileActions(i,t,a,r,n)}}},fetch:function(e){return r.data[e].content.filter(function(e){return null!==e})},count:function(e,i){return r.data[e]&&r.data[e].content?i?r.data[e].content.length:r.fetch(e).length:0},get:function(i,t,a){var n,l,o="init_"+t,s=r.data[i],d=s.config[t],c=s.initId+"-"+o,p=" file-preview-initial";return a=void 0===a?!0:a,null===s.content[t]?"":(W(d)||W(d.frameClass)||(p+=" "+d.frameClass),n=s.template.replace(/\{previewId}/g,c).replace(/\{frameClass}/g,p).replace(/\{fileindex}/g,o).replace(/\{content}/g,s.content[t]).replace(/\{footer}/g,r.footer(i,t,a)),s.tags.length&&s.tags[t]&&(n=J(n,s.tags[t])),W(d)||W(d.frameAttr)||(l=e(document.createElement("div")).html(n),l.find(".file-preview-initial").attr(d.frameAttr),n=l.html(),l.remove()),n)},add:function(i,t,a,n,l){var o,s=e.extend(!0,{},r.data[i]);return q(t)||(t=t.split(s.delimiter)),l?(o=s.content.push(t)-1,s.config[o]=a,s.tags[o]=n):(o=t.length,s.content=t,s.config=a,s.tags=n),r.data[i]=s,o},set:function(i,t,a,n,l){var o,s,d=e.extend(!0,{},r.data[i]);if(t&&t.length&&(q(t)||(t=t.split(d.delimiter)),s=t.filter(function(e){return null!==e}),s.length)){if(void 0===d.content&&(d.content=[]),void 0===d.config&&(d.config=[]),void 0===d.tags&&(d.tags=[]),l){for(o=0;o<t.length;o++)t[o]&&d.content.push(t[o]);for(o=0;o<a.length;o++)a[o]&&d.config.push(a[o]);for(o=0;o<n.length;o++)n[o]&&d.tags.push(n[o])}else d.content=t,d.config=a,d.tags=n;r.data[i]=d}},unset:function(e,i){var t=r.count(e);if(t){if(1===t)return r.data[e].content=[],void(r.data[e].config=[]);r.data[e].content[i]=null,r.data[e].config[i]=null}},out:function(e){var i,t="",a=r.data[e],n=r.count(e,!0);if(0===n)return{content:"",caption:""};for(var l=0;n>l;l++)t+=r.get(e,l);return i=a.msg(r.count(e)),{content:t,caption:i}},footer:function(e,i,t){var a=r.data[e];if(t=void 0===t?!0:t,0===a.config.length||W(a.config[i]))return"";var n=a.config[i],l=_("caption",n)?n.caption:"",o=_("width",n)?n.width:"auto",s=_("url",n)?n.url:!1,d=_("key",n)?n.key:null,c=s===!1&&t,p=a.isDelete?a.actions(!1,!0,c,s,d):"",u=a.footer.replace(/\{actions}/g,p);return u.replace(/\{caption}/g,l).replace(/\{width}/g,o).replace(/\{indicator}/g,"").replace(/\{indicatorTitle}/g,"")}},n=function(e,i){return i=i||0,"number"==typeof e?e:("string"==typeof e&&(e=parseFloat(e)),isNaN(e)?i:e)},l=function(){return!(!window.File||!window.FileReader)},o=function(){var e=document.createElement("div");return!i(9)&&!t()&&(void 0!==e.draggable||void 0!==e.ondragstart&&void 0!==e.ondrop)},s=function(){return l()&&window.FormData},d=function(e,i){e.removeClass(i).addClass(i)},c='style="width:{width};height:{height};"',p='      <param name="controller" value="true" />\n      <param name="allowFullScreen" value="true" />\n      <param name="allowScriptAccess" value="always" />\n      <param name="autoPlay" value="false" />\n      <param name="autoStart" value="false" />\n      <param name="quality" value="high" />\n',u='<div class="file-preview-other">\n   <span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',f={removeIcon:'<i class="glyphicon glyphicon-trash text-danger"></i>',removeClass:"btn btn-xs btn-default",removeTitle:"Remove file",uploadIcon:'<i class="glyphicon glyphicon-upload text-info"></i>',uploadClass:"btn btn-xs btn-default",uploadTitle:"Upload file",indicatorNew:'<i class="glyphicon glyphicon-hand-down text-warning"></i>',indicatorSuccess:'<i class="glyphicon glyphicon-ok-sign text-success"></i>',indicatorError:'<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',indicatorLoading:'<i class="glyphicon glyphicon-hand-up text-muted"></i>',indicatorNewTitle:"Not uploaded yet",indicatorSuccessTitle:"Uploaded",indicatorErrorTitle:"Upload Error",indicatorLoadingTitle:"Uploading ..."},v='{preview}\n<div class="kv-upload-progress hide"></div>\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {cancel}\n       {upload}\n       {browse}\n   </div>\n</div>',g='{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n',m='<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>',w='<div class="close fileinput-remove">&times;</div>\n',h='<span class="glyphicon glyphicon-file kv-caption-icon"></span>',b='<div tabindex="500" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>\n',C='<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</button>',x='<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</a>',y='<div tabindex="500" class="{css}" {status}>{icon}{label}</div>',T='<div id="{id}" class="file-preview-detail-modal modal fade" tabindex="-1">\n  <div class="modal-dialog modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h3 class="modal-title">{heading} <small>{title}</small></h3>\n      </div>\n      <div class="modal-body">\n           <pre>{body}</pre>\n      </div>\n    </div>\n  </div>\n</div>',F='<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {percent}%\n     </div>\n</div>',I='<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">{caption}</div>\n    {progress} {actions}\n</div>',E='<div class="file-actions">\n    <div class="file-footer-buttons">\n        {upload}{delete}{other}    </div>\n    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n    <div class="clearfix"></div>\n</div>',k='<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n',$='<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">   {uploadIcon}\n</button>\n',P='<button type="button" class="btn btn-default btn-xs btn-block" title="{zoomTitle}: {caption}" onclick="{dialog}">\n   {zoomInd}\n</button>\n',S='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   {content}\n   {footer}\n</div>\n',D='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n    <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n       '+u+"\n    </object>\n   {footer}\n</div>",U='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <img src="{data}" class="file-preview-image" title="{caption}" alt="{caption}" '+c+">\n   {footer}\n</div>\n",A='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <pre class="file-preview-text" title="{caption}" '+c+">{data}</pre>\n   {zoom}\n   {footer}\n</div>",j='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+c+'>\n   <video width="{width}" height="{height}" controls>\n       <source src="{data}" type="{type}">\n       '+u+"\n   </video>\n   {footer}\n</div>\n",L='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+c+'>\n   <audio controls>\n       <source src="{data}" type="{type}">\n       '+u+"\n   </audio>\n   {footer}\n</div>",z='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+c+'>\n   <object class="file-object" type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n'+p+"       "+u+"\n   </object>\n   {footer}\n</div>\n",O='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+c+'>\n   <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n       <param name="movie" value="{caption}" />\n'+p+"         "+u+"\n   </object>\n   {footer}\n</div>",R='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" '+c+'>\n   <div class="file-preview-other-frame">\n   '+u+'\n   </div>\n   <div class="file-preview-other-footer">{footer}</div>\n</div>',M={main1:v,main2:g,preview:m,close:w,zoom:P,icon:h,caption:b,modal:T,progress:F,footer:I,actions:E,actionDelete:k,actionUpload:$,btnDefault:C,btnLink:x,btnBrowse:y},B={generic:S,html:D,image:U,text:A,video:j,audio:L,flash:z,object:O,other:R},N=["image","html","text","video","audio","flash","object"],Z={image:{width:"auto",height:"160px"},html:{width:"213px",height:"160px"},text:{width:"160px",height:"136px"},video:{width:"213px",height:"160px"},audio:{width:"213px",height:"80px"},flash:{width:"213px",height:"160px"},object:{width:"160px",height:"160px"},other:{width:"160px",height:"160px"}},H={image:function(e,i){return void 0!==e?e.match("image.*"):i.match(/\.(gif|png|jpe?g)$/i)},html:function(e,i){return void 0!==e?"text/html"===e:i.match(/\.(htm|html)$/i)},text:function(e,i){return void 0!==e&&e.match("text.*")||i.match(/\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)},video:function(e,i){return void 0!==e&&e.match(/\.video\/(ogg|mp4|webm|3gp)$/i)||i.match(/\.(og?|mp4|webm|3gp)$/i)},audio:function(e,i){return void 0!==e&&e.match(/\.audio\/(ogg|mp3|wav)$/i)||i.match(/\.(ogg|mp3|wav)$/i)},flash:function(e,i){return void 0!==e&&"application/x-shockwave-flash"===e||i.match(/\.(swf)$/i)},object:function(){return!0},other:function(){return!0}},W=function(i,t){return void 0===i||null===i||0===i.length||t&&""===e.trim(i)},q=function(e){return Array.isArray(e)||"[object Array]"===Object.prototype.toString.call(e)},_=function(e,i){return"object"==typeof i&&e in i},V=function(i,t,a){return W(i)||W(i[t])?a:e(i[t])},K=function(){return Math.round((new Date).getTime()+100*Math.random())},X=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},J=function(i,t){var a=i;return t?(e.each(t,function(e,i){"function"==typeof i&&(i=i()),a=a.split(e).join(i)}),a):a},Q=window.URL||window.webkitURL,Y=function(t,a){var r=this;r.$element=e(t),r.validate()&&(r.isPreviewable=l(),r.isIE9=i(9),r.isIE10=i(10),r.isPreviewable||r.isIE9?(r.init(a),r.listen()):r.$element.removeClass("file-loading"))},Y.prototype={constructor:Y,validate:function(){var e,i=this;return"file"===i.$element.attr("type")?!0:(e='<div class="help-block alert alert-warning"><h4>Invalid Input Type</h4>You must set an input <code>type = file</code> for <b>bootstrap-fileinput</b> plugin to initialize.</div>',i.$element.after(e),!1)},init:function(i){var t,a=this,l=a.$element;e.each(i,function(e,i){switch(e){case"minFileCount":case"maxFileCount":case"maxFileSize":a[e]=n(i);break;default:a[e]=i}}),a.fileInputCleared=!1,a.fileBatchCompleted=!0,a.isPreviewable||(a.showPreview=!1),a.uploadFileAttr=W(l.attr("name"))?"file_data":l.attr("name"),a.reader=null,a.formdata={},a.clearStack(),a.uploadCount=0,a.uploadStatus={},a.uploadLog=[],a.uploadAsyncCount=0,a.loadedImages=[],a.totalImagesCount=0,a.ajaxRequests=[],a.isError=!1,a.ajaxAborted=!1,a.cancelling=!1,t=a.getLayoutTemplate("progress"),a.progressTemplate=t.replace("{class}",a.progressClass),a.progressCompleteTemplate=t.replace("{class}",a.progressCompleteClass),a.dropZoneEnabled=o()&&a.dropZoneEnabled,a.isDisabled=a.$element.attr("disabled")||a.$element.attr("readonly"),a.isUploadable=s()&&!W(a.uploadUrl),a.slug="function"==typeof i.slugCallback?i.slugCallback:a.slugDefault,a.mainTemplate=a.getLayoutTemplate(a.showCaption?"main1":"main2"),a.captionTemplate=a.getLayoutTemplate("caption"),a.previewGenericTemplate=a.getPreviewTemplate("generic"),a.resizeImage&&(a.maxImageWidth||a.maxImageHeight)&&(a.imageCanvas=document.createElement("canvas"),a.imageCanvasContext=a.imageCanvas.getContext("2d")),W(a.$element.attr("id"))&&a.$element.attr("id",K()),void 0===a.$container?a.$container=a.createContainer():a.refreshContainer(),a.$dropZone=a.$container.find(".file-drop-zone"),a.$progress=a.$container.find(".kv-upload-progress"),a.$btnUpload=a.$container.find(".fileinput-upload"),a.$captionContainer=V(i,"elCaptionContainer",a.$container.find(".file-caption")),a.$caption=V(i,"elCaptionText",a.$container.find(".file-caption-name")),a.$previewContainer=V(i,"elPreviewContainer",a.$container.find(".file-preview")),a.$preview=V(i,"elPreviewImage",a.$container.find(".file-preview-thumbnails")),a.$previewStatus=V(i,"elPreviewStatus",a.$container.find(".file-preview-status")),a.$errorContainer=V(i,"elErrorContainer",a.$previewContainer.find(".kv-fileinput-error")),W(a.msgErrorClass)||d(a.$errorContainer,a.msgErrorClass),a.$errorContainer.hide(),a.fileActionSettings=e.extend(!0,f,i.fileActionSettings),a.previewInitId="preview-"+K(),a.id=a.$element.attr("id"),r.init(a),a.initPreview(!0),a.initPreviewDeletes(),a.options=i,a.setFileDropZoneTitle(),a.$element.removeClass("file-loading"),a.$element.attr("disabled")&&a.disable()},parseError:function(i,t,a){var r=this,n=e.trim(t+""),l="."===n.slice(-1)?"":".",o=void 0!==i.responseJSON&&void 0!==i.responseJSON.error?i.responseJSON.error:i.responseText;return r.cancelling&&r.msgUploadAborted&&(n=r.msgUploadAborted),r.showAjaxErrorDetails&&o?(o=e.trim(o.replace(/\n\s*\n/g,"\n")),o=o.length>0?"<pre>"+o+"</pre>":"",n+=l+o):n+=l,r.cancelling=!1,a?"<b>"+a+": </b>"+n:n},raise:function(i,t){var a=this,r=e.Event(i);if(void 0!==t?a.$element.trigger(r,t):a.$element.trigger(r),r.isDefaultPrevented())return!1;if(!r.result)return r.result;switch(i){case"filebatchuploadcomplete":case"filebatchuploadsuccess":case"fileuploaded":case"fileclear":case"filecleared":case"filereset":case"fileerror":case"filefoldererror":case"fileuploaderror":case"filebatchuploaderror":case"filedeleteerror":case"filecustomerror":case"filesuccessremove":break;default:a.ajaxAborted=r.result}return!0},getLayoutTemplate:function(e){var i=this,t=_(e,i.layoutTemplates)?i.layoutTemplates[e]:M[e];return W(i.customLayoutTags)?t:J(t,i.customLayoutTags)},getPreviewTemplate:function(e){var i=this,t=_(e,i.previewTemplates)?i.previewTemplates[e]:B[e];return W(i.customPreviewTags)?t:J(t,i.customPreviewTags)},parseFilePreviewIcon:function(i,t){var a,r=this,n=r.previewFileIcon;return t&&t.indexOf(".")>-1&&(a=t.split(".").pop(),r.previewFileIconSettings&&r.previewFileIconSettings[a]&&(n=r.previewFileIconSettings[a]),r.previewFileExtSettings&&e.each(r.previewFileExtSettings,function(e,i){r.previewFileIconSettings[e]&&i(a)&&(n=r.previewFileIconSettings[e])})),i.indexOf("{previewFileIcon}")>-1?i.replace(/\{previewFileIconClass}/g,r.previewFileIconClass).replace(/\{previewFileIcon}/g,n):i},getOutData:function(e,i,t){var a=this;return e=e||{},i=i||{},t=t||a.filestack.slice(0)||{},{form:a.formdata,files:t,filenames:a.filenames,extra:a.getExtraData(),response:i,reader:a.reader,jqXHR:e}},listen:function(){var i=this,t=i.$element,r=t.closest("form"),n=i.$container;a(t,"change",e.proxy(i.change,i)),a(i.$btnFile,"click",e.proxy(i.browse,i)),a(r,"reset",e.proxy(i.reset,i)),a(n.find(".fileinput-remove:not([disabled])"),"click",e.proxy(i.clear,i)),a(n.find(".fileinput-cancel"),"click",e.proxy(i.cancel,i)),i.initDragDrop(),i.isUploadable||a(r,"submit",e.proxy(i.submitForm,i)),a(i.$container.find(".fileinput-upload"),"click",e.proxy(i.uploadClick,i))},zoneDragDropInit:function(e){e.stopPropagation(),e.preventDefault()},zoneDragEnter:function(i){var t=this,a=e.inArray("Files",i.originalEvent.dataTransfer.types)>-1;return t.zoneDragDropInit(i),t.isDisabled||!a?(i.originalEvent.dataTransfer.effectAllowed="none",void(i.originalEvent.dataTransfer.dropEffect="none")):void d(t.$dropZone,"file-highlighted")},zoneDragLeave:function(e){var i=this;i.zoneDragDropInit(e),i.isDisabled||i.$dropZone.removeClass("file-highlighted")},zoneDrop:function(e){var i=this;e.preventDefault(),i.isDisabled||W(e.originalEvent.dataTransfer.files)||(i.change(e,"dragdrop"),i.$dropZone.removeClass("file-highlighted"))},initDragDrop:function(){var i=this,t=i.$dropZone;i.isUploadable&&i.dropZoneEnabled&&i.showPreview&&(a(t,"dragenter dragover",e.proxy(i.zoneDragEnter,i)),a(t,"dragleave",e.proxy(i.zoneDragLeave,i)),a(t,"drop",e.proxy(i.zoneDrop,i)),a(t,"dragenter dragover drop",i.zoneDragDropInit))},browse:function(e){var i=this;i.raise("filebrowse"),e&&e.isDefaultPrevented()||(i.isError&&!i.isUploadable&&i.clear(),i.$captionContainer.focus())},uploadClick:function(e){var i,t=this,a=t.$container.find(".fileinput-upload"),r=!a.hasClass("disabled")&&W(a.attr("disabled"));if(!e||!e.isDefaultPrevented()){if(!t.isUploadable)return void(r&&"submit"!==a.attr("type")&&(i=a.closest("form"),i.length&&i.trigger("submit"),e.preventDefault()));e.preventDefault(),r&&t.upload()}},submitForm:function(){var e=this,i=e.$element,t=i.get(0).files;return t&&e.minFileCount>0&&e.getFileCount(t.length)<e.minFileCount?(e.noFilesError({}),!1):!e.abort({})},abort:function(i){var t,a=this;return a.ajaxAborted&&"object"==typeof a.ajaxAborted&&void 0!==a.ajaxAborted.message?(t=e.extend(!0,{},a.getOutData(),i),t.abortData=a.ajaxAborted.data||{},t.abortMessage=a.ajaxAborted.message,a.cancel(),a.setProgress(100),a.showUploadError(a.ajaxAborted.message,t,"filecustomerror"),!0):!1},noFilesError:function(e){var i=this,t=i.minFileCount>1?i.filePlural:i.fileSingle,a=i.msgFilesTooLess.replace("{n}",i.minFileCount).replace("{files}",t),r=i.$errorContainer;i.addError(a),i.isError=!0,i.updateFileDetails(0),r.fadeIn(800),i.raise("fileerror",[e]),i.clearFileInput(),d(i.$container,"has-error")},setProgress:function(e,i){var t=this,a=Math.min(e,100),r=100>a?t.progressTemplate:t.progressCompleteTemplate;i=i||t.$progress,W(r)||i.html(r.replace(/\{percent}/g,a))},lock:function(){var e=this;e.resetErrors(),e.disable(),e.showRemove&&d(e.$container.find(".fileinput-remove"),"hide"),e.showCancel&&e.$container.find(".fileinput-cancel").removeClass("hide"),e.raise("filelock",[e.filestack,e.getExtraData()])},unlock:function(e){var i=this;void 0===e&&(e=!0),i.enable(),i.showCancel&&d(i.$container.find(".fileinput-cancel"),"hide"),i.showRemove&&i.$container.find(".fileinput-remove").removeClass("hide"),e&&i.resetFileStack(),i.raise("fileunlock",[i.filestack,i.getExtraData()])},resetFileStack:function(){var i=this,t=0,a=[],r=[];i.getThumbs().each(function(){var n=e(this),l=n.attr("data-fileindex"),o=i.filestack[l];-1!==l&&(void 0!==o?(a[t]=o,r[t]=i.getFileName(o),n.attr({id:i.previewInitId+"-"+t,"data-fileindex":t}),t++):n.attr({id:"uploaded-"+K(),"data-fileindex":"-1"}))}),i.filestack=a,i.filenames=r},destroy:function(){var e=this,i=e.$container;i.find(".file-drop-zone").off(),e.$element.insertBefore(i).off(G).removeData(),i.off().remove()},refresh:function(i){var t=this,a=t.$element;i=i?e.extend(!0,{},t.options,i):t.options,t.destroy(),a.fileinput(i),a.val()&&a.trigger("change.fileinput")},setFileDropZoneTitle:function(){var e=this,i=e.$container.find(".file-drop-zone");i.find("."+e.dropZoneTitleClass).remove(),e.isUploadable&&e.showPreview&&0!==i.length&&!(e.getFileStack().length>0)&&e.dropZoneEnabled&&(0===i.find(".file-preview-frame").length&&W(e.defaultPreviewContent)&&i.prepend('<div class="'+e.dropZoneTitleClass+'">'+e.dropZoneTitle+"</div>"),e.$container.removeClass("file-input-new"),d(e.$container,"file-input-ajax-new"))},errorsExist:function(){var i,t=this;return t.$errorContainer.find("li").length?!0:(i=e(document.createElement("div")).html(t.$errorContainer.html()),i.find("span.kv-error-close").remove(),i.find("ul").remove(),e.trim(i.text()).length?!0:!1)},getMsgSelected:function(e){var i=this,t=1===e?i.fileSingle:i.filePlural;return i.msgSelected.replace("{n}",e).replace("{files}",t)},renderThumbProgress:function(){return'<div class="file-thumb-progress hide">'+this.progressTemplate.replace(/\{percent}/g,"0")+"</div>"},renderFileFooter:function(e,i){var t,a,r=this,n=r.fileActionSettings,l=r.getLayoutTemplate("footer");return r.isUploadable?(t=l.replace(/\{actions}/g,r.renderFileActions(!0,!0,!1,!1,!1)),a=t.replace(/\{caption}/g,e).replace(/\{width}/g,i).replace(/\{progress}/g,r.renderThumbProgress()).replace(/\{indicator}/g,n.indicatorNew).replace(/\{indicatorTitle}/g,n.indicatorNewTitle)):a=l.replace(/\{actions}/g,"").replace(/\{caption}/g,e).replace(/\{progress}/g,"").replace(/\{width}/g,i).replace(/\{indicator}/g,"").replace(/\{indicatorTitle}/g,""),a=J(a,r.previewThumbTags)},renderFileActions:function(e,i,t,a,r){if(!e&&!i)return"";var n=this,l=a===!1?"":' data-url="'+a+'"',o=r===!1?"":' data-key="'+r+'"',s=n.getLayoutTemplate("actionDelete"),d="",c=n.getLayoutTemplate("actions"),p=n.otherActionButtons.replace(/\{dataKey}/g,o),u=n.fileActionSettings,f=t?u.removeClass+" disabled":u.removeClass;return s=s.replace(/\{removeClass}/g,f).replace(/\{removeIcon}/g,u.removeIcon).replace(/\{removeTitle}/g,u.removeTitle).replace(/\{dataUrl}/g,l).replace(/\{dataKey}/g,o),e&&(d=n.getLayoutTemplate("actionUpload").replace(/\{uploadClass}/g,u.uploadClass).replace(/\{uploadIcon}/g,u.uploadIcon).replace(/\{uploadTitle}/g,u.uploadTitle)),c.replace(/\{delete}/g,s).replace(/\{upload}/g,d).replace(/\{other}/g,p)},setThumbStatus:function(e,i){var t=this;if(t.showPreview){var a="indicator"+i,r=a+"Title",n="file-preview-"+i.toLowerCase(),l=e.find(".file-upload-indicator"),o=t.fileActionSettings;e.removeClass("file-preview-success file-preview-error file-preview-loading"),"Error"===i&&e.find(".kv-file-upload").attr("disabled",!0),l.html(o[a]),l.attr("title",o[r]),e.addClass(n)}},clearPreview:function(){var e=this,i=e.$preview.find(e.showUploadedThumbs?".file-preview-frame:not(.file-preview-success)":".file-preview-frame");i.remove(),e.$preview.find(".file-preview-frame").length&&e.showPreview||e.resetUpload(),e.validateDefaultPreview()},initPreview:function(e){var i,t=this,a=t.initialCaption||"";return r.count(t.id)?(i=r.out(t.id),a=e&&t.initialCaption?t.initialCaption:i.caption,t.$preview.html(i.content),t.setCaption(a),void(W(i.content)||t.$container.removeClass("file-input-new"))):(t.clearPreview(),void(e?t.setCaption(a):t.initCaption()))},initPreviewDeletes:function(){var i=this,t=i.deleteExtraData||{},n=function(){var e=i.isUploadable?r.count(i.id):i.$element.get(0).files.length;0!==i.$preview.find(".kv-file-remove").length||e||(i.reset(),i.initialCaption="")};i.$preview.find(".kv-file-remove").each(function(){var l=e(this),o=l.data("url")||i.deleteUrl,s=l.data("key");if(!W(o)&&void 0!==s){var c,p,u,f,v=l.closest(".file-preview-frame"),g=r.data[i.id],m=v.data("fileindex");m=parseInt(m.replace("init_","")),u=W(g.config)&&W(g.config[m])?null:g.config[m],f=W(u)||W(u.extra)?t:u.extra,"function"==typeof f&&(f=f()),p={id:l.attr("id"),key:s,extra:f},c=e.extend(!0,{},{url:o,type:"POST",dataType:"json",data:e.extend(!0,{},{key:s},f),beforeSend:function(e){i.ajaxAborted=!1,i.raise("filepredelete",[s,e,f]),i.ajaxAborted?e.abort():(d(v,"file-uploading"),d(l,"disabled"))},success:function(e,t,a){var o,d;return W(e)||W(e.error)?(r.unset(i.id,m),o=r.count(i.id),d=o>0?i.getMsgSelected(o):"",i.raise("filedeleted",[s,a,f]),i.setCaption(d),v.removeClass("file-uploading").addClass("file-deleted"),void v.fadeOut("slow",function(){i.clearObjects(v),v.remove(),n(),o||0!==i.getFileStack().length||(i.setCaption(""),i.reset())})):(p.jqXHR=a,p.response=e,i.showError(e.error,p,"filedeleteerror"),v.removeClass("file-uploading"),l.removeClass("disabled"),void n())},error:function(e,t,a){var r=i.parseError(e,a);p.jqXHR=e,p.response={},i.showError(r,p,"filedeleteerror"),v.removeClass("file-uploading"),n()}},i.ajaxDeleteSettings),a(l,"click",function(){return i.validateMinCount()?void e.ajax(c):!1})}})},clearObjects:function(i){i.find("video audio").each(function(){this.pause(),e(this).remove()}),i.find("img object div").each(function(){e(this).remove()})},clearFileInput:function(){var i,t,a,r=this,n=r.$element;W(n.val())||(r.isIE9||r.isIE10?(i=n.closest("form"),t=e(document.createElement("form")),a=e(document.createElement("div")),n.before(a),i.length?i.after(t):a.after(t),t.append(n).trigger("reset"),a.before(n).remove(),t.remove()):n.val(""),r.fileInputCleared=!0)},resetUpload:function(){var e=this;e.uploadCache={content:[],config:[],tags:[],append:!0},e.uploadCount=0,e.uploadStatus={},e.uploadLog=[],e.uploadAsyncCount=0,e.loadedImages=[],e.totalImagesCount=0,e.$btnUpload.removeAttr("disabled"),e.setProgress(0),d(e.$progress,"hide"),e.resetErrors(!1),e.ajaxAborted=!1,e.ajaxRequests=[],e.resetCanvas()},resetCanvas:function(){var e=this;e.canvas&&e.imageCanvasContext&&e.imageCanvasContext.clearRect(0,0,e.canvas.width,e.canvas.height)},cancel:function(){var i,t=this,a=t.ajaxRequests,r=a.length;if(r>0)for(i=0;r>i;i+=1)t.cancelling=!0,a[i].abort();t.getThumbs().each(function(){var i=e(this),a=i.attr("data-fileindex");i.removeClass("file-uploading"),void 0!==t.filestack[a]&&(i.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"),i.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")),t.unlock()})},cleanMemory:function(e){var i=e.is("img")?e.attr("src"):e.find("source").attr("src");Q.revokeObjectURL(i)},hasInitialPreview:function(){var e=this;return!e.overwriteInitial&&r.count(e.id)},clear:function(){var i,t=this;t.$btnUpload.removeAttr("disabled"),t.getThumbs().find("video,audio,img").each(function(){t.cleanMemory(e(this))}),t.resetUpload(),t.clearStack(),t.clearFileInput(),t.resetErrors(!0),t.raise("fileclear"),t.hasInitialPreview()?(t.showFileIcon(),t.resetPreview(),t.initPreviewDeletes(),t.$container.removeClass("file-input-new")):(t.getThumbs().each(function(){t.clearObjects(e(this))}),t.isUploadable&&(r.data[t.id]={}),t.$preview.html(""),i=!t.overwriteInitial&&t.initialCaption.length>0?t.initialCaption:"",t.setCaption(i),t.$caption.attr("title",""),d(t.$container,"file-input-new"),t.validateDefaultPreview()),0===t.$container.find(".file-preview-frame").length&&(t.initCaption()||t.$captionContainer.find(".kv-caption-icon").hide()),t.hideFileIcon(),t.raise("filecleared"),t.$captionContainer.focus(),t.setFileDropZoneTitle()},resetPreview:function(){var e,i,t=this;r.count(t.id)?(e=r.out(t.id),t.$preview.html(e.content),i=t.initialCaption?t.initialCaption:e.caption,t.setCaption(i)):(t.clearPreview(),t.initCaption())},clearDefaultPreview:function(){var e=this;e.$preview.find(".file-default-preview").remove()},validateDefaultPreview:function(){var e=this;e.showPreview&&!W(e.defaultPreviewContent)&&(e.$preview.html('<div class="file-default-preview">'+e.defaultPreviewContent+"</div>"),e.$container.removeClass("file-input-new"))},resetPreviewThumbs:function(e){var i,t=this;return e?(t.clearPreview(),void t.clearStack()):void(t.hasInitialPreview()?(i=r.out(t.id),t.$preview.html(i.content),t.setCaption(i.caption),t.initPreviewDeletes()):t.clearPreview())},reset:function(){var e=this;e.resetPreview(),e.$container.find(".fileinput-filename").text(""),e.raise("filereset"),d(e.$container,"file-input-new"),(e.$preview.find(".file-preview-frame").length||e.isUploadable&&e.dropZoneEnabled)&&e.$container.removeClass("file-input-new"),e.setFileDropZoneTitle(),e.clearStack(),e.formdata={}},disable:function(){var e=this;e.isDisabled=!0,e.raise("filedisabled"),e.$element.attr("disabled","disabled"),e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"),e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled",!0),e.initDragDrop()},enable:function(){var e=this;e.isDisabled=!1,e.raise("fileenabled"),e.$element.removeAttr("disabled"),e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"),e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"),e.initDragDrop()},getThumbs:function(e){return e=e||"",this.$preview.find(".file-preview-frame:not(.file-preview-initial)"+e)},getExtraData:function(e,i){var t=this,a=t.uploadExtraData;return"function"==typeof t.uploadExtraData&&(a=t.uploadExtraData(e,i)),a},uploadExtra:function(i,t){var a=this,r=a.getExtraData(i,t);0!==r.length&&e.each(r,function(e,i){a.formdata.append(e,i)})},setAsyncUploadStatus:function(i,t,a){var r=this,n=0;r.setProgress(t,e("#"+i).find(".file-thumb-progress")),r.uploadStatus[i]=t,e.each(r.uploadStatus,function(e,i){n+=i}),r.setProgress(Math.ceil(n/a))},initXhr:function(e,i,t){var a=this;return e.upload&&e.upload.addEventListener("progress",function(e){var r=0,n=e.loaded||e.position,l=e.total;e.lengthComputable&&(r=Math.ceil(n/l*100)),i?a.setAsyncUploadStatus(i,r,t):a.setProgress(Math.ceil(r))},!1),e},ajaxSubmit:function(i,t,a,r,n,l){var o,s=this;s.raise("filepreajax",[n,l]),s.uploadExtra(n,l),o=e.extend(!0,{},{xhr:function(){var i=e.ajaxSettings.xhr();return s.initXhr(i,n,s.getFileStack().length)},url:s.uploadUrl,type:"POST",dataType:"json",data:s.formdata,cache:!1,processData:!1,contentType:!1,beforeSend:i,success:t,complete:a,error:r},s.ajaxSettings),s.ajaxRequests.push(e.ajax(o))},initUploadSuccess:function(i,t,a){var n,l,o,s,d,c,p,u,f=this;f.showPreview&&"object"==typeof i&&!e.isEmptyObject(i)&&void 0!==i.initialPreview&&i.initialPreview.length>0&&(f.hasInitData=!0,d=i.initialPreview||[],c=i.initialPreviewConfig||[],p=i.initialPreviewThumbTags||[],n=void 0===i.append||i.append?!0:!1,f.overwriteInitial=!1,void 0!==t?a?(u=t.attr("data-fileindex"),f.uploadCache.content[u]=d[0],f.uploadCache.config[u]=c[0],f.uploadCache.tags[u]=p[0],f.uploadCache.append=n):(o=r.add(f.id,d,c[0],p[0],n),l=r.get(f.id,o,!1),s=e(l).hide(),t.after(s).fadeOut("slow",function(){s.fadeIn("slow").css("display:inline-block"),f.initPreviewDeletes(),f.clearFileInput(),t.remove()})):(r.set(f.id,d,c,p,n),f.initPreview(),f.initPreviewDeletes()))},initSuccessThumbs:function(){var i=this;i.showPreview&&i.getThumbs(".file-preview-success").each(function(){var t=e(this),r=t.find(".kv-file-remove");r.removeAttr("disabled"),a(r,"click",function(){var e=i.raise("filesuccessremove",[t.attr("id"),t.data("fileindex")]);i.cleanMemory(t),e!==!1&&t.fadeOut("slow",function(){t.remove(),i.$preview.find(".file-preview-frame").length||i.reset()})})})},checkAsyncComplete:function(){var i,t,a=this;for(t=0;t<a.filestack.length;t++)if(a.filestack[t]&&(i=a.previewInitId+"-"+t,-1===e.inArray(i,a.uploadLog)))return!1;return a.uploadAsyncCount===a.uploadLog.length},uploadSingle:function(i,t,a){var n,l,o,s,c,p,u,f,v,g,m=this,h=m.getFileStack().length,w=new FormData,b=m.previewInitId+"-"+i,C=m.filestack.length>0||!e.isEmptyObject(m.uploadExtraData),x={
id:b,index:i};m.formdata=w,m.showPreview&&(l=e("#"+b+":not(.file-preview-initial)"),s=l.find(".kv-file-upload"),c=l.find(".kv-file-remove"),e("#"+b).find(".file-thumb-progress").removeClass("hide")),0===h||!C||s&&s.hasClass("disabled")||m.abort(x)||(g=function(e,i){m.updateStack(e,void 0),m.uploadLog.push(i),m.checkAsyncComplete()&&(m.fileBatchCompleted=!0)},o=function(){m.fileBatchCompleted&&setTimeout(function(){m.showPreview&&(r.set(m.id,m.uploadCache.content,m.uploadCache.config,m.uploadCache.tags,m.uploadCache.append),m.hasInitData&&(m.initPreview(),m.initPreviewDeletes())),m.unlock(),m.clearFileInput(),m.raise("filebatchuploadcomplete",[m.filestack,m.getExtraData()]),m.uploadCount=0,m.uploadStatus={},m.uploadLog=[],m.setProgress(100)},100)},p=function(t){n=m.getOutData(t),m.fileBatchCompleted=!1,m.showPreview&&(l.hasClass("file-preview-success")||(m.setThumbStatus(l,"Loading"),d(l,"file-uploading")),s.attr("disabled",!0),c.attr("disabled",!0)),a||m.lock(),m.raise("filepreupload",[n,b,i]),e.extend(!0,x,n),m.abort(x)&&(t.abort(),m.setProgress(100))},u=function(t,r,o){n=m.getOutData(o,t),e.extend(!0,x,n),setTimeout(function(){W(t)||W(t.error)?(m.showPreview&&(m.setThumbStatus(l,"Success"),s.hide(),m.initUploadSuccess(t,l,a)),m.raise("fileuploaded",[n,b,i]),a?g(i,b):m.updateStack(i,void 0)):(m.showUploadError(t.error,x),m.setPreviewError(l,i),a&&g(i,b))},100)},f=function(){setTimeout(function(){m.showPreview&&(s.removeAttr("disabled"),c.removeAttr("disabled"),l.removeClass("file-uploading")),a?o():(m.unlock(!1),m.clearFileInput()),m.initSuccessThumbs()},100)},v=function(r,n,o){var s=m.parseError(r,o,a?t[i].name:null);setTimeout(function(){a&&g(i,b),m.uploadStatus[b]=100,m.setPreviewError(l,i),e.extend(!0,x,m.getOutData(r)),m.showUploadError(s,x)},100)},w.append(m.uploadFileAttr,t[i],m.filenames[i]),w.append("file_id",i),m.ajaxSubmit(p,u,f,v,b,i))},uploadBatch:function(){var i,t,a,r,n,l=this,o=l.filestack,s=o.length,c={},p=l.filestack.length>0||!e.isEmptyObject(l.uploadExtraData);l.formdata=new FormData,0!==s&&p&&!l.abort(c)&&(n=function(){e.each(o,function(e){l.updateStack(e,void 0)}),l.clearFileInput()},i=function(i){l.lock();var t=l.getOutData(i);l.showPreview&&l.getThumbs().each(function(){var i=e(this),t=i.find(".kv-file-upload"),a=i.find(".kv-file-remove");i.hasClass("file-preview-success")||(l.setThumbStatus(i,"Loading"),d(i,"file-uploading")),t.attr("disabled",!0),a.attr("disabled",!0)}),l.raise("filebatchpreupload",[t]),l.abort(t)&&(i.abort(),l.setProgress(100))},t=function(i,t,a){var r=l.getOutData(a,i),o=l.getThumbs(),s=0,d=W(i)||W(i.errorkeys)?[]:i.errorkeys;W(i)||W(i.error)?(l.raise("filebatchuploadsuccess",[r]),n(),l.showPreview?(o.each(function(){var i=e(this),t=i.find(".kv-file-upload");i.find(".kv-file-upload").hide(),l.setThumbStatus(i,"Success"),i.removeClass("file-uploading"),t.removeAttr("disabled")}),l.initUploadSuccess(i)):l.reset()):(l.showPreview&&(o.each(function(){var i=e(this),t=i.find(".kv-file-remove"),a=i.find(".kv-file-upload");return i.removeClass("file-uploading"),a.removeAttr("disabled"),t.removeAttr("disabled"),0===d.length?void l.setPreviewError(i):(-1!==e.inArray(s,d)?l.setPreviewError(i):(i.find(".kv-file-upload").hide(),l.setThumbStatus(i,"Success"),l.updateStack(s,void 0)),void s++)}),l.initUploadSuccess(i)),l.showUploadError(i.error,r,"filebatchuploaderror"))},r=function(){l.setProgress(100),l.unlock(),l.initSuccessThumbs(),l.clearFileInput(),l.raise("filebatchuploadcomplete",[l.filestack,l.getExtraData()])},a=function(i,t,a){var r=l.getOutData(i),n=l.parseError(i,a);l.showUploadError(n,r,"filebatchuploaderror"),l.uploadFileCount=s-1,l.showPreview&&(l.getThumbs().each(function(){var i=e(this),t=i.attr("data-fileindex");i.removeClass("file-uploading"),void 0!==l.filestack[t]&&l.setPreviewError(i)}),l.getThumbs().removeClass("file-uploading"),l.getThumbs(" .kv-file-upload").removeAttr("disabled"),l.getThumbs(" .kv-file-delete").removeAttr("disabled"))},e.each(o,function(e,i){W(o[e])||l.formdata.append(l.uploadFileAttr,i,l.filenames[e])}),l.ajaxSubmit(i,t,r,a))},uploadExtraOnly:function(){var e,i,t,a,r=this,n={};r.formdata=new FormData,r.abort(n)||(e=function(e){r.lock();var i=r.getOutData(e);r.raise("filebatchpreupload",[i]),r.setProgress(50),n.data=i,n.xhr=e,r.abort(n)&&(e.abort(),r.setProgress(100))},i=function(e,i,t){var a=r.getOutData(t,e);W(e)||W(e.error)?(r.raise("filebatchuploadsuccess",[a]),r.clearFileInput(),r.initUploadSuccess(e)):r.showUploadError(e.error,a,"filebatchuploaderror")},t=function(){r.setProgress(100),r.unlock(),r.clearFileInput(),r.raise("filebatchuploadcomplete",[r.filestack,r.getExtraData()])},a=function(e,i,t){var a=r.getOutData(e),l=r.parseError(e,t);n.data=a,r.showUploadError(l,a,"filebatchuploaderror")},r.ajaxSubmit(e,i,t,a))},upload:function(){var i,t,a,r=this,n=r.getFileStack().length,l={},o=!e.isEmptyObject(r.getExtraData());if(r.minFileCount>0&&r.getFileCount(n)<r.minFileCount)return void r.noFilesError(l);if(r.isUploadable&&!r.isDisabled&&(0!==n||o)){if(r.resetUpload(),r.$progress.removeClass("hide"),r.uploadCount=0,r.uploadStatus={},r.uploadLog=[],r.lock(),r.setProgress(2),0===n&&o)return void r.uploadExtraOnly();if(a=r.filestack.length,r.hasInitData=!1,r.uploadAsync){for(t=r.getOutData(),r.raise("filebatchpreupload",[t]),r.fileBatchCompleted=!1,r.uploadCache={content:[],config:[],tags:[],append:!0},r.uploadAsyncCount=r.getFileStack().length,i=0;a>i;i++)r.uploadCache.content[i]=null,r.uploadCache.config[i]=null,r.uploadCache.tags[i]=null;for(i=0;a>i;i++)void 0!==r.filestack[i]&&r.uploadSingle(i,r.filestack,!0)}else r.uploadBatch()}},initFileActions:function(){var i=this;i.showPreview&&(i.$preview.find(".kv-file-remove").each(function(){var t,n,l,o,s=e(this),d=s.closest(".file-preview-frame"),c=d.attr("id"),p=d.attr("data-fileindex");a(s,"click",function(){return o=i.raise("filepreremove",[c,p]),o!==!1&&i.validateMinCount()?(t=d.hasClass("file-preview-error"),i.cleanMemory(d),void d.fadeOut("slow",function(){i.updateStack(p,void 0),i.clearObjects(d),d.remove(),c&&t&&i.$errorContainer.find('li[data-file-id="'+c+'"]').fadeOut("fast",function(){e(this).remove(),i.errorsExist()||i.resetErrors()});var a=i.getFileStack(!0),o=a.length,s=r.count(i.id),u=i.showPreview&&i.$preview.find(".file-preview-frame").length;i.clearFileInput(),0!==o||0!==s||u?(n=s+o,l=n>1?i.getMsgSelected(n):a[0]?i.getFileNames()[0]:"",i.setCaption(l)):i.reset(),i.raise("fileremoved",[c,p])})):!1})}),i.$preview.find(".kv-file-upload").each(function(){var t=e(this);a(t,"click",function(){var e=t.closest(".file-preview-frame"),a=e.attr("data-fileindex");e.hasClass("file-preview-error")||i.uploadSingle(a,i.filestack,!1)})}))},hideFileIcon:function(){this.overwriteInitial&&this.$captionContainer.find(".kv-caption-icon").hide()},showFileIcon:function(){this.$captionContainer.find(".kv-caption-icon").show()},addError:function(e){var i=this,t=i.$errorContainer;e&&t.length&&(t.html(i.errorCloseButton+e),a(t.find(".kv-error-close"),"click",function(){t.fadeOut("slow")}))},resetErrors:function(e){var i=this,t=i.$errorContainer;i.isError=!1,i.$container.removeClass("has-error"),t.html(""),e?t.fadeOut("slow"):t.hide()},showFolderError:function(e){var i=this,t=i.$errorContainer;e&&(i.addError(i.msgFoldersNotAllowed.replace(/\{n}/g,e)),t.fadeIn(800),d(i.$container,"has-error"),i.raise("filefoldererror",[e]))},showUploadError:function(e,i,t){var a=this,r=a.$errorContainer,n=t||"fileuploaderror",l=i&&i.id?'<li data-file-id="'+i.id+'">'+e+"</li>":"<li>"+e+"</li>";return 0===r.find("ul").length?a.addError("<ul>"+l+"</ul>"):r.find("ul").append(l),r.fadeIn(800),a.raise(n,[i]),a.$container.removeClass("file-input-new"),d(a.$container,"has-error"),!0},showError:function(e,i,t){var a=this,r=a.$errorContainer,n=t||"fileerror";return i=i||{},i.reader=a.reader,a.addError(e),r.fadeIn(800),a.raise(n,[i]),a.isUploadable||a.clearFileInput(),a.$container.removeClass("file-input-new"),d(a.$container,"has-error"),a.$btnUpload.attr("disabled",!0),!0},errorHandler:function(e,i){var t=this,a=e.target.error;t.showError(a.code===a.NOT_FOUND_ERR?t.msgFileNotFound.replace("{name}",i):a.code===a.SECURITY_ERR?t.msgFileSecured.replace("{name}",i):a.code===a.NOT_READABLE_ERR?t.msgFileNotReadable.replace("{name}",i):a.code===a.ABORT_ERR?t.msgFilePreviewAborted.replace("{name}",i):t.msgFilePreviewError.replace("{name}",i))},parseFileType:function(e){var i,t,a,r,n=this;for(r=0;r<N.length;r+=1)if(a=N[r],i=_(a,n.fileTypeSettings)?n.fileTypeSettings[a]:H[a],t=i(e.type,e.name)?a:"",!W(t))return t;return"other"},previewDefault:function(i,t,a){if(this.showPreview){var r=this,n="",l=i?i.name:"",o=Q.createObjectURL(i),s=t.slice(t.lastIndexOf("-")+1),d=r.previewSettings.other||Z.other,c=r.renderFileFooter(i.name,d.width),p=r.parseFilePreviewIcon(r.getPreviewTemplate("other"),l);a===!0&&(r.isUploadable||(c+='<div class="file-other-error" title="'+r.fileActionSettings.indicatorErrorTitle+'">'+r.fileActionSettings.indicatorError+"</div>")),r.clearDefaultPreview(),r.$preview.append("\n"+p.replace(/\{previewId}/g,t).replace(/\{frameClass}/g,n).replace(/\{fileindex}/g,s).replace(/\{caption}/g,r.slug(i.name)).replace(/\{width}/g,d.width).replace(/\{height}/g,d.height).replace(/\{type}/g,i.type).replace(/\{data}/g,o).replace(/\{footer}/g,c)),a===!0&&r.isUploadable&&r.setThumbStatus(e("#"+t),"Error")}},previewFile:function(e,i,t,a,r){if(this.showPreview){var n,l,o,s=this,d=s.parseFileType(i),c=i?i.name:"",p=s.slug(c),u=s.allowedPreviewTypes,f=s.allowedPreviewMimeTypes,v=s.getPreviewTemplate(d),g=u&&u.indexOf(d)>=0,m=_(d,s.previewSettings)?s.previewSettings[d]:Z[d],h=f&&-1!==f.indexOf(i.type),w=s.renderFileFooter(p,m.width),b="",C=a.slice(a.lastIndexOf("-")+1);g||h?(v=s.parseFilePreviewIcon(v,c.split(".").pop()),"text"===d?(l=X(t.target.result),o="text-"+K(),n=v.replace(/\{zoom}/g,s.getLayoutTemplate("zoom")),b=s.getLayoutTemplate("modal").replace("{id}",o).replace(/\{title}/g,p).replace(/\{body}/g,l).replace(/\{heading}/g,s.msgZoomModalHeading),n=n.replace(/\{previewId}/g,a).replace(/\{caption}/g,p).replace(/\{width}/g,m.width).replace(/\{height}/g,m.height).replace(/\{frameClass}/g,"").replace(/\{zoomInd}/g,s.zoomIndicator).replace(/\{footer}/g,w).replace(/\{fileindex}/g,C).replace(/\{type}/g,i.type).replace(/\{zoomTitle}/g,s.msgZoomTitle).replace(/\{dialog}/g,"$('#"+o+"').modal('show')").replace(/\{data}/g,l)+b):n=v.replace(/\{previewId}/g,a).replace(/\{caption}/g,p).replace(/\{frameClass}/g,"").replace(/\{type}/g,i.type).replace(/\{fileindex}/g,C).replace(/\{width}/g,m.width).replace(/\{height}/g,m.height).replace(/\{footer}/g,w).replace(/\{data}/g,r),s.clearDefaultPreview(),s.$preview.append("\n"+n),s.validateImage(e,a,p,i.type)):s.previewDefault(i,a)}},slugDefault:function(e){return W(e)?"":String(e).replace(/[\-\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g,"_")},readFiles:function(i){this.reader=new FileReader;var t,a=this,r=a.$element,n=a.$preview,l=a.reader,o=a.$previewContainer,s=a.$previewStatus,d=a.msgLoading,c=a.msgProgress,p=a.previewInitId,u=i.length,f=a.fileTypeSettings,v=a.filestack.length,g=function(r,n,l,o){var s=e.extend(!0,{},a.getOutData({},{},i),{id:l,index:o}),d={id:l,index:o,file:n,files:i};return a.previewDefault(n,l,!0),a.isUploadable&&a.addToStack(void 0),setTimeout(t(o+1),100),a.initFileActions(),a.removeFromPreviewOnError&&e("#"+l).remove(),a.isUploadable?a.showUploadError(r,s):a.showError(r,d)};a.loadedImages=[],a.totalImagesCount=0,e.each(i,function(e,i){var t=a.fileTypeSettings.image||H.image;t&&t(i.type)&&a.totalImagesCount++}),t=function(e){if(W(r.attr("multiple"))&&(u=1),e>=u)return a.isUploadable&&a.filestack.length>0?a.raise("filebatchselected",[a.getFileStack()]):a.raise("filebatchselected",[i]),o.removeClass("file-thumb-loading"),void s.html("");var m,h,w,b,C,x,y=v+e,T=p+"-"+y,F=i[e],I=a.slug(F.name),E=(F.size||0)/1e3,k="",$=Q.createObjectURL(F),P=0,S=a.allowedFileTypes,D=W(S)?"":S.join(", "),U=a.allowedFileExtensions,A=W(U)?"":U.join(", ");if(W(U)||(k=new RegExp("\\.("+U.join("|")+")$","i")),E=E.toFixed(2),a.maxFileSize>0&&E>a.maxFileSize)return b=a.msgSizeTooLarge.replace("{name}",I).replace("{size}",E).replace("{maxSize}",a.maxFileSize),void(a.isError=g(b,F,T,e));if(!W(S)&&q(S)){for(w=0;w<S.length;w+=1)C=S[w],h=f[C],x=void 0!==h&&h(F.type,I),P+=W(x)?0:x.length;if(0===P)return b=a.msgInvalidFileType.replace("{name}",I).replace("{types}",D),void(a.isError=g(b,F,T,e))}return 0!==P||W(U)||!q(U)||W(k)||(x=I.match(k),P+=W(x)?0:x.length,0!==P)?a.showPreview?(n.length>0&&void 0!==FileReader?(s.html(d.replace("{index}",e+1).replace("{files}",u)),o.addClass("file-thumb-loading"),l.onerror=function(e){a.errorHandler(e,I)},l.onload=function(i){a.previewFile(e,F,i,T,$),a.initFileActions()},l.onloadend=function(){b=c.replace("{index}",e+1).replace("{files}",u).replace("{percent}",50).replace("{name}",I),setTimeout(function(){s.html(b),a.updateFileDetails(u),t(e+1)},100),a.raise("fileloaded",[F,T,e,l])},l.onprogress=function(i){if(i.lengthComputable){var t=i.loaded/i.total*100,a=Math.ceil(t);b=c.replace("{index}",e+1).replace("{files}",u).replace("{percent}",a).replace("{name}",I),setTimeout(function(){s.html(b)},100)}},m=_("text",f)?f.text:H.text,m(F.type,I)?l.readAsText(F,a.textEncoding):l.readAsArrayBuffer(F)):(a.previewDefault(F,T),setTimeout(function(){t(e+1),a.updateFileDetails(u)},100),a.raise("fileloaded",[F,T,e,l])),void a.addToStack(F)):(a.addToStack(F),setTimeout(t(e+1),100),void a.raise("fileloaded",[F,T,e,l])):(b=a.msgInvalidFileExtension.replace("{name}",I).replace("{extensions}",A),void(a.isError=g(b,F,T,e)))},t(0),a.updateFileDetails(u,!1)},updateFileDetails:function(e){var i=this,t=i.$element,a=i.getFileStack(),n=t[0].files[0].name||a.length&&a[0].name||"",l=i.slug(n),o=i.isUploadable?a.length:e,s=r.count(i.id)+o,d=o>1?i.getMsgSelected(s):l;i.isError?(i.$previewContainer.removeClass("file-thumb-loading"),i.$previewStatus.html(""),i.$captionContainer.find(".kv-caption-icon").hide()):i.showFileIcon(),i.setCaption(d,i.isError),i.$container.removeClass("file-input-new file-input-ajax-new"),1===arguments.length&&i.raise("fileselect",[e,l]),r.count(i.id)&&i.initPreviewDeletes()},validateMinCount:function(){var e=this,i=e.isUploadable?e.getFileStack().length:e.$element.get(0).files.length;return e.validateInitialCount&&e.minFileCount>0&&e.getFileCount(i-1)<e.minFileCount?(e.noFilesError({}),!1):!0},getFileCount:function(e){var i=this,t=0;return i.validateInitialCount&&!i.overwriteInitial&&(t=r.count(i.id),e+=t),e},change:function(i){var t=this,a=t.$element;if(!t.isUploadable&&W(a.val())&&t.fileInputCleared)return void(t.fileInputCleared=!1);t.fileInputCleared=!1;var n,l,o,s,d,c,p=arguments.length>1,u=t.isUploadable,f=0,v=p?i.originalEvent.dataTransfer.files:a.get(0).files,g=t.filestack.length,m=W(a.attr("multiple")),h=m&&g>0,w=0,b=function(i,a,r,n){var l=e.extend(!0,{},t.getOutData({},{},v),{id:r,index:n}),o={id:r,index:n,file:a,files:v};return t.isUploadable?t.showUploadError(i,l):t.showError(i,o)};if(t.reader=null,t.resetUpload(),t.hideFileIcon(),t.isUploadable&&t.$container.find(".file-drop-zone ."+t.dropZoneTitleClass).remove(),p)for(n=[];v[f];)s=v[f],s.type||s.size%4096!==0?n.push(s):w++,f++;else n=void 0===i.target.files?i.target&&i.target.value?[{name:i.target.value.replace(/^.+\\/,"")}]:[]:i.target.files;if(W(n)||0===n.length)return u||t.clear(),t.showFolderError(w),void t.raise("fileselectnone");if(t.resetErrors(),c=n.length,o=t.isUploadable?t.getFileStack().length+c:c,o=t.getFileCount(o),t.maxFileCount>0&&o>t.maxFileCount){if(!t.autoReplace||c>t.maxFileCount)return d=t.autoReplace&&c>t.maxFileCount?c:o,l=t.msgFilesTooMany.replace("{m}",t.maxFileCount).replace("{n}",d),t.isError=b(l,null,null,null),t.$captionContainer.find(".kv-caption-icon").hide(),t.setCaption("",!0),void t.$container.removeClass("file-input-new file-input-ajax-new");o>t.maxFileCount&&t.resetPreviewThumbs(u)}else!u||h?(t.resetPreviewThumbs(!1),h&&t.clearStack()):!u||0!==g||r.count(t.id)&&!t.overwriteInitial||t.resetPreviewThumbs(!0);t.isPreviewable?t.readFiles(n):t.updateFileDetails(1),t.showFolderError(w)},getFileName:function(e){return e&&e.name?this.slug(e.name):void 0},getFileNames:function(e){var i=this;return i.filenames.filter(function(i){return e?void 0!==i:void 0!==i&&null!==i})},getFileStack:function(e){var i=this;return i.filestack.filter(function(i){return e?void 0!==i:void 0!==i&&null!==i})},clearStack:function(){var e=this;e.filestack=[],e.filenames=[]},updateStack:function(e,i){var t=this;t.filestack[e]=i,t.filenames[e]=t.getFileName(i)},addToStack:function(e){var i=this;i.filestack.push(e),i.filenames.push(i.getFileName(e))},setPreviewError:function(e,i,t){var a=this;i&&a.updateStack(i,t),a.removeFromPreviewOnError?e.remove():a.setThumbStatus(e,"Error")},checkDimensions:function(e,i,t,a,r,n,l){var o,s,d,c,p=this,u="Small"===i?"min":"max",f=p[u+"Image"+n];!W(f)&&t.length&&(d=t[0],s="Width"===n?d.naturalWidth||d.width:d.naturalHeight||d.height,c="Small"===i?s>=f:f>=s,c||(o=p["msgImage"+n+i].replace("{name}",r).replace("{size}",f),p.showUploadError(o,l),p.setPreviewError(a,e,null)))},validateImage:function(e,i,t,r){var n,l,o,s=this,d=s.$preview,c=d.find("#"+i),p=c.find("img");t=t||"Untitled",p.length&&a(p,"load",function(){l=c.width(),o=d.width(),l>o&&(p.css("width","100%"),c.css("width","97%")),n={ind:e,id:i},s.checkDimensions(e,"Small",p,c,t,"Width",n),s.checkDimensions(e,"Small",p,c,t,"Height",n),s.resizeImage||(s.checkDimensions(e,"Large",p,c,t,"Width",n),s.checkDimensions(e,"Large",p,c,t,"Height",n)),s.raise("fileimageloaded",[i]),s.loadedImages.push({ind:e,img:p,thumb:c,pid:i,typ:r}),s.validateAllImages(),Q.revokeObjectURL(p.attr("src"))})},validateAllImages:function(){var e,i,t,a,r,n,l,o=this,s={};if(o.loadedImages.length===o.totalImagesCount&&(o.raise("fileimagesloaded"),o.resizeImage)){for(l=o.isUploadable?o.showUploadError:o.showError,e=0;e<o.loadedImages.length;e++)i=o.loadedImages[e],t=i.img,a=i.thumb,r=i.pid,n=i.ind,s={id:r,index:n},o.getResizedImage(t[0],i.typ,r,n)||(l(o.msgImageResizeError,s,"fileimageresizeerror"),o.setPreviewError(a,n));o.raise("fileimagesresized")}},getResizedImage:function(e,i,t,a){var r,n,l=this,o=e.naturalWidth,s=e.naturalHeight,d=1,c=l.maxImageWidth||o,p=l.maxImageHeight||s,u=o&&s,f=l.imageCanvas,v=l.imageCanvasContext;if(!u)return!1;if(o===c&&s===p)return!0;i=i||l.resizeDefaultImageType,r=o>c,n=s>p,d="width"===l.resizePreference?r?c/o:n?p/s:1:n?p/s:r?c/o:1,l.resetCanvas(),o*=d,s*=d,f.width=o,f.height=s;try{return v.drawImage(e,0,0,o,s),f.toBlob(function(e){l.raise("fileimageresized",[t,a]),l.filestack[a]=e},i,l.resizeQuality),!0}catch(g){return!1}},initCaption:function(){var e=this,i=e.initialCaption||"";return e.overwriteInitial||W(i)?(e.$caption.html(""),!1):(e.setCaption(i),!0)},setCaption:function(i,t){var a,r,n=this;if(t)a=e("<div>"+n.msgValidationError+"</div>").text(),r='<span class="'+n.msgValidationErrorClass+'">'+n.msgValidationErrorIcon+a+"</span>";else{if(W(i)||0===n.$caption.length)return;a=e("<div>"+i+"</div>").text(),r=n.getLayoutTemplate("icon")+a}n.$caption.html(r),n.$caption.attr("title",a),n.$captionContainer.find(".file-caption-ellipsis").attr("title",a)},initBrowse:function(e){var i=this;i.$btnFile=e.find(".btn-file"),i.$btnFile.append(i.$element)},createContainer:function(){var i=this,t=e(document.createElement("div")).attr({"class":"file-input file-input-new"}).html(i.renderMain());return i.$element.before(t),i.initBrowse(t),t},refreshContainer:function(){var e=this,i=e.$container;i.before(e.$element),i.html(e.renderMain()),e.initBrowse(i)},renderMain:function(){var e=this,i=e.isUploadable&&e.dropZoneEnabled?" file-drop-zone":"file-drop-disabled",t=e.showClose?e.getLayoutTemplate("close"):"",a=e.showPreview?e.getLayoutTemplate("preview").replace(/\{class}/g,e.previewClass).replace(/\{dropClass}/g,i):"",r=e.isDisabled?e.captionClass+" file-caption-disabled":e.captionClass,n=e.captionTemplate.replace(/\{class}/g,r+" kv-fileinput-caption");return e.mainTemplate.replace(/\{class}/g,e.mainClass).replace(/\{preview}/g,a).replace(/\{close}/g,t).replace(/\{caption}/g,n).replace(/\{upload}/g,e.renderButton("upload")).replace(/\{remove}/g,e.renderButton("remove")).replace(/\{cancel}/g,e.renderButton("cancel")).replace(/\{browse}/g,e.renderButton("browse"))},renderButton:function(e){var i=this,t=i.getLayoutTemplate("btnDefault"),a=i[e+"Class"],r=i[e+"Title"],n=i[e+"Icon"],l=i[e+"Label"],o=i.isDisabled?" disabled":"",s="button";switch(e){case"remove":if(!i.showRemove)return"";break;case"cancel":if(!i.showCancel)return"";a+=" hide";break;case"upload":if(!i.showUpload)return"";i.isUploadable&&!i.isDisabled?t=i.getLayoutTemplate("btnLink").replace("{href}",i.uploadUrl):s="submit";break;case"browse":t=i.getLayoutTemplate("btnBrowse");break;default:return""}return a+="browse"===e?" btn-file":" fileinput-"+e+" fileinput-"+e+"-button",W(l)||(l=' <span class="'+i.buttonLabelClass+'">'+l+"</span>"),t.replace("{type}",s).replace("{css}",a).replace("{title}",r).replace("{status}",o).replace("{icon}",n).replace("{label}",l)}},e.fn.fileinput=function(t){if(l()||i(9)){var a=Array.apply(null,arguments),r=[];switch(a.shift(),this.each(function(){var i,n=e(this),l=n.data("fileinput"),o="object"==typeof t&&t,s=o.language||n.data("language")||"en",d={};l||("en"===s||W(e.fn.fileinputLocales[s])||(d=e.fn.fileinputLocales[s]),i=e.extend(!0,{},e.fn.fileinput.defaults,e.fn.fileinputLocales.en,d,o,n.data()),l=new Y(this,i),n.data("fileinput",l)),"string"==typeof t&&r.push(l[t].apply(l,a))}),r.length){case 0:return this;case 1:return r[0];default:return r}}},e.fn.fileinput.defaults={language:"en",showCaption:!0,showPreview:!0,showRemove:!0,showUpload:!0,showCancel:!0,showClose:!0,showUploadedThumbs:!0,autoReplace:!1,mainClass:"",previewClass:"",captionClass:"",mainTemplate:null,initialCaption:"",initialPreview:[],initialPreviewDelimiter:"*$$*",initialPreviewConfig:[],initialPreviewThumbTags:[],previewThumbTags:{},initialPreviewShowDelete:!0,removeFromPreviewOnError:!0,deleteUrl:"",deleteExtraData:{},overwriteInitial:!0,layoutTemplates:M,previewTemplates:B,allowedPreviewTypes:N,allowedPreviewMimeTypes:null,allowedFileTypes:null,allowedFileExtensions:null,defaultPreviewContent:null,customLayoutTags:{},customPreviewTags:{},previewSettings:Z,fileTypeSettings:H,previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',previewFileIconClass:"file-icon-4x",previewFileIconSettings:{},previewFileExtSettings:{},buttonLabelClass:"hidden-xs",browseIcon:'<i class="glyphicon glyphicon-folder-open"></i>',browseClass:"btn btn-primary",removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-default",cancelIcon:'<i class="glyphicon glyphicon-ban-circle"></i>',cancelClass:"btn btn-default",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-default",uploadUrl:null,uploadAsync:!0,uploadExtraData:{},minImageWidth:null,minImageHeight:null,maxImageWidth:null,maxImageHeight:null,resizeImage:!1,resizePreference:"width",resizeQuality:.92,resizeDefaultImageType:"image/jpeg",maxFileSize:0,minFileCount:0,maxFileCount:0,validateInitialCount:!1,msgValidationErrorClass:"text-danger",msgValidationErrorIcon:'<i class="glyphicon glyphicon-exclamation-sign"></i> ',msgErrorClass:"file-error-message",progressThumbClass:"progress-bar progress-bar-success progress-bar-striped active",progressClass:"progress-bar progress-bar-success progress-bar-striped active",progressCompleteClass:"progress-bar progress-bar-success",previewFileType:"image",zoomIndicator:'<i class="glyphicon glyphicon-zoom-in"></i>',elCaptionContainer:null,elCaptionText:null,elPreviewContainer:null,elPreviewImage:null,elPreviewStatus:null,elErrorContainer:null,errorCloseButton:'<span class="close kv-error-close">&times;</span>',slugCallback:null,dropZoneEnabled:!0,dropZoneTitleClass:"file-drop-zone-title",fileActionSettings:{},otherActionButtons:"",textEncoding:"UTF-8",ajaxSettings:{},ajaxDeleteSettings:{},showAjaxErrorDetails:!0},e.fn.fileinputLocales.en={fileSingle:"file",filePlural:"files",browseLabel:"Browse &hellip;",removeLabel:"Remove",removeTitle:"Clear selected files",cancelLabel:"Cancel",cancelTitle:"Abort ongoing upload",uploadLabel:"Upload",uploadTitle:"Upload selected files",msgZoomTitle:"View details",msgZoomModalHeading:"Detailed Preview",msgSizeTooLarge:'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',msgFilesTooLess:"You must select at least <b>{n}</b> {files} to upload.",msgFilesTooMany:"Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",msgFileNotFound:'File "{name}" not found!',msgFileSecured:'Security restrictions prevent reading the file "{name}".',msgFileNotReadable:'File "{name}" is not readable.',msgFilePreviewAborted:'File preview aborted for "{name}".',msgFilePreviewError:'An error occurred while reading the file "{name}".',msgInvalidFileType:'Invalid type for file "{name}". Only "{types}" files are supported.',msgInvalidFileExtension:'Invalid extension for file "{name}". Only "{extensions}" files are supported.',msgUploadAborted:"The file upload was aborted",msgValidationError:"File Upload Error",msgLoading:"Loading file {index} of {files} &hellip;",msgProgress:"Loading file {index} of {files} - {name} - {percent}% completed.",msgSelected:"{n} {files} selected",msgFoldersNotAllowed:"Drag & drop files only! {n} folder(s) dropped were skipped.",msgImageWidthSmall:'Width of image file "{name}" must be at least {size} px.',msgImageHeightSmall:'Height of image file "{name}" must be at least {size} px.',msgImageWidthLarge:'Width of image file "{name}" cannot exceed {size} px.',msgImageHeightLarge:'Height of image file "{name}" cannot exceed {size} px.',msgImageResizeError:"Could not get the image dimensions to resize.",msgImageResizeException:"Error while resizing the image.<pre>{errors}</pre>",dropZoneTitle:"Drag & drop files here &hellip;"},e.fn.fileinput.Constructor=Y,e(document).ready(function(){var i=e("input.file[type=file]");i.length&&i.fileinput()})});
/*!
 * FileInput Russian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author CyanoFresh <cyanofresh@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['ru'] = {
        fileSingle: 'файл',
        filePlural: 'файлы',
        browseLabel: 'Выбрать &hellip;',
        removeLabel: 'Удалить',
        removeTitle: 'Очистить выбранные файлы',
        cancelLabel: 'Отмена',
        cancelTitle: 'Отменить текущую загрузку',
        uploadLabel: 'Загрузить',
        uploadTitle: 'Загрузить выбранные файлы',
        msgZoomTitle: 'посмотреть детали',
        msgZoomModalHeading: 'Подробное превью',
        msgSizeTooLarge: 'Файл "{name}" (<b>{size} KB</b>) превышает максимальный размер <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Вы должны выбрать как минимум <b>{n}</b> {files} для загрузки.',
        msgFilesTooMany: 'Количество выбранных файлов <b>({n})</b> превышает максимально допустимое количество <b>{m}</b>.',
        msgFileNotFound: 'Файл "{name}" не найден!',
        msgFileSecured: 'Ограничения безопасности запрещают читать файл "{name}".',
        msgFileNotReadable: 'Файл "{name}" невозможно прочитать.',
        msgFilePreviewAborted: 'Предпросмотр отменен для файла "{name}".',
        msgFilePreviewError: 'Произошла ошибка при чтении файла "{name}".',
        msgInvalidFileType: 'Запрещенный тип файла для "{name}". Только "{types}" разрешены.',
        msgInvalidFileExtension: 'Запрещенное расширение для файла "{name}". Только "{extensions}" разрешены.',
        msgUploadAborted: 'Выгрузка файла прервана',
        msgValidationError: 'Ошибка при загрузке файла',
        msgLoading: 'Загрузка файла {index} из {files} &hellip;',
        msgProgress: 'Загрузка файла {index} из {files} - {name} - {percent}% завершено.',
        msgSelected: 'Выбрано файлов: {n}',
        msgFoldersNotAllowed: 'Разрешено перетаскивание только файлов! Пропущено {n} папок.',
        msgImageWidthSmall: 'Ширина изображения {name} должна быть не меньше {size} px.',
        msgImageHeightSmall: 'Высота изображения {name} должна быть не меньше {size} px.',
        msgImageWidthLarge: 'Ширина изображения "{name}" не может превышать {size} px.',
        msgImageHeightLarge: 'Высота изображения "{name}" не может превышать {size} px.',
        msgImageResizeError: 'Не удалось получить размеры изображения, чтобы изменить размер.',
        msgImageResizeException: 'Ошибка при изменении размера изображения.<pre>{errors}</pre>',
        dropZoneTitle: 'Перетащите файлы сюда &hellip;',
        fileActionSettings: {
            removeTitle: 'Удалить файл',
            uploadTitle: 'Загрузить файл',
            indicatorNewTitle: 'Еще не загружен',
            indicatorSuccessTitle: 'Загружен',
            indicatorErrorTitle: 'Ошибка загрузки',
            indicatorLoadingTitle: 'Загрузка ...'
        }
    };
})(window.jQuery);

/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(factory);
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window == "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		R_SPACE = /\s+/g,
		R_FLOAT = /left|right|inline/,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = false,

		supportDraggable = !!('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/Trident.*rv[ :]?11\./)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],
		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var _this = rootEl[expando],
					el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollOffsetX,
					scrollOffsetY
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							scrollOffsetY = vy ? vy * speed : 0;
							scrollOffsetX = vx ? vx * speed : 0;

							if ('function' === typeof(scrollCustomFn)) {
								return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
							}

							if (el === win) {
								win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
							} else {
								el.scrollTop += scrollOffsetY;
								el.scrollLeft += scrollOffsetX;
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				if (value === void 0 || value === true) {
					value = group.name;
				}

				if (typeof value === 'function') {
					return value;
				} else {
					return function (to, from) {
						var fromGroup = from.options.group.name;

						return pull
							? value
							: value && (value.join
								? value.indexOf(fromGroup) > -1
								: (fromGroup == value)
							);
					};
				}
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		}
	;


	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0}
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);
		_on(el, 'pointerdown', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0]) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}


			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, startIndex);
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'transform';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, oldIndex);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);
				_on(ownerDocument, 'pointercancel', _this._onDrop);
				_on(ownerDocument, 'selectstart', _this);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
					_on(ownerDocument, 'pointermove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}


			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
			_off(ownerDocument, 'pointermove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					setTimeout(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.ghostClass, true);
				_toggleClass(dragEl, options.dragClass, false);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY),
					parent = target,
					i = touchDragOverListeners.length;

				if (parent) {
					do {
						if (parent[expando]) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var dataTransfer = evt.dataTransfer,
				options = this.options;

			this._offUpEvents();

			if (activeGroup.checkPull(this, this, dragEl, evt)) {
				cloneEl = _clone(dragEl);

				cloneEl.draggable = false;
				cloneEl.style['will-change'] = '';

				_css(cloneEl, 'display', 'none');
				_toggleClass(cloneEl, this.options.chosenClass, false);

				rootEl.insertBefore(cloneEl, dragEl);
				_dispatchEvent(this, rootEl, 'clone', dragEl);
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', this._onTouchMove);
					_on(document, 'touchend', this._onDrop);
					_on(document, 'touchcancel', this._onDrop);
					_on(document, 'pointermove', this._onTouchMove);
					_on(document, 'pointerup', this._onDrop);
				} else {
					// Old brwoser
					_on(document, 'mousemove', this._onTouchMove);
					_on(document, 'mouseup', this._onDrop);
				}

				this._loopId = setInterval(this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(this, dataTransfer, dragEl);
				}

				_on(document, 'drop', this);
				setTimeout(this._dragStarted, 0);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				isMovingBetweenSortable = false,
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			if (dragEl.animated) {
				return;
			}

			moved = true;

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();

				if (putSortable !== this) {
					putSortable = this;
					isMovingBetweenSortable = true;
				}

				if (revert) {
					_cloneHide(activeSortable, true);
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (_ghostIsLast(el, evt))
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = el.lastElementChild;
					}

					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(activeSortable, isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}

					targetRect = target.getBoundingClientRect();

					var width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						after = false
					;

					if (floating) {
						var elTop = dragEl.offsetTop,
							tgTop = target.offsetTop;

						if (elTop === tgTop) {
							after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
						}
						else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
							after = (evt.clientY - targetRect.top) / height > 0.5;
						} else {
							after = tgTop > elTop;
						}
						} else if (!isMovingBetweenSortable) {
						after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
					}

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(activeSortable, isOwner);

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				if (prevRect.nodeType === 1) {
					prevRect = prevRect.getBoundingClientRect();
				}

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'pointercancel', this._onDrop);
			_off(ownerDocument, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, rootEl, oldIndex);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, rootEl, oldIndex, newIndex);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

			}

			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =

			tapEvt =
			touchEvt =

			moved =
			newIndex =

			lastEl =
			lastCSS =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});
			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragover':
				case 'dragenter':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(sortable, state) {
		if (sortable.lastPullMode !== 'clone') {
			state = true;
		}

		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');

			if (!state) {
				if (cloneEl.state) {
					if (sortable.options.group.revertClone) {
						rootEl.insertBefore(cloneEl, nextEl);
						sortable._animate(dragEl, cloneEl);
					} else {
						rootEl.insertBefore(cloneEl, dragEl);
					}
				}
			}

			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector)) {
					return el;
				}
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		var parent = el.host;

		return (parent && parent.nodeType) ? parent : el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, fromEl, startIndex, newIndex) {
		sortable = (sortable || rootEl[expando]);

		var evt = document.createEvent('Event'),
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();
		evt.willInsertAfter = willInsertAfter;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
			rect = lastEl.getBoundingClientRect();

		// 5 — min delta
		// abs — нельзя добавлять, а то глюки при наведении сверху
		return (evt.clientY - (rect.top + rect.height) > 5) ||
			(evt.clientX - (rect.left + rect.width) > 5);
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			return (
				(tag === '' || el.nodeName.toUpperCase() == tag) &&
				(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
			);
		}

		return false;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		return $
			? $(el).clone(true)[0]
			: (Polymer && Polymer.dom
				? Polymer.dom(el).cloneNode(true)
				: el.cloneNode(true)
			);
	}

	function _saveInputCheckedState(root) {
		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	// Fixed #973: 
	_on(document, 'touchmove', function (evt) {
		if (Sortable.active) {
			evt.preventDefault();
		}
	});

	try {
		window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
			get: function () {
				captureMode = {
					capture: false,
					passive: false
				};
			}
		}));
	} catch (err) {}

	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.6.1';
	return Sortable;
});


/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
    var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
        __slice = [].slice,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    noop = function() {};

    Emitter = (function() {
        function Emitter() {}

        Emitter.prototype.addEventListener = Emitter.prototype.on;

        Emitter.prototype.on = function(event, fn) {
            this._callbacks = this._callbacks || {};
            if (!this._callbacks[event]) {
                this._callbacks[event] = [];
            }
            this._callbacks[event].push(fn);
            return this;
        };

        Emitter.prototype.emit = function() {
            var args, callback, callbacks, event, _i, _len;
            event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            this._callbacks = this._callbacks || {};
            callbacks = this._callbacks[event];
            if (callbacks) {
                for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
                    callback = callbacks[_i];
                    callback.apply(this, args);
                }
            }
            return this;
        };

        Emitter.prototype.removeListener = Emitter.prototype.off;

        Emitter.prototype.removeAllListeners = Emitter.prototype.off;

        Emitter.prototype.removeEventListener = Emitter.prototype.off;

        Emitter.prototype.off = function(event, fn) {
            var callback, callbacks, i, _i, _len;
            if (!this._callbacks || arguments.length === 0) {
                this._callbacks = {};
                return this;
            }
            callbacks = this._callbacks[event];
            if (!callbacks) {
                return this;
            }
            if (arguments.length === 1) {
                delete this._callbacks[event];
                return this;
            }
            for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
                callback = callbacks[i];
                if (callback === fn) {
                    callbacks.splice(i, 1);
                    break;
                }
            }
            return this;
        };

        return Emitter;

    })();

    Dropzone = (function(_super) {
        var extend, resolveOption;

        __extends(Dropzone, _super);

        Dropzone.prototype.Emitter = Emitter;


        /*
         This is a list of all available events you can register on a dropzone object.

         You can register an event handler like this:

         dropzone.on("dragEnter", function() { });
         */

        Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

        Dropzone.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: false,
            parallelUploads: 2,
            uploadMultiple: false,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: true,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1000,
            maxFiles: null,
            params: {},
            clickable: true,
            ignoreHiddenFiles: true,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: true,
            autoQueue: true,
            addRemoveLinks: false,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function(file, done) {
                return done();
            },
            init: function() {
                return noop;
            },
            forceFallback: false,
            fallback: function() {
                var child, messageElement, span, _i, _len, _ref;
                this.element.className = "" + this.element.className + " dz-browser-not-supported";
                _ref = this.element.getElementsByTagName("div");
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    child = _ref[_i];
                    if (/(^| )dz-message($| )/.test(child.className)) {
                        messageElement = child;
                        child.className = "dz-message";
                        continue;
                    }
                }
                if (!messageElement) {
                    messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
                    this.element.appendChild(messageElement);
                }
                span = messageElement.getElementsByTagName("span")[0];
                if (span) {
                    if (span.textContent != null) {
                        span.textContent = this.options.dictFallbackMessage;
                    } else if (span.innerText != null) {
                        span.innerText = this.options.dictFallbackMessage;
                    }
                }
                return this.element.appendChild(this.getFallbackForm());
            },
            resize: function(file) {
                var info, srcRatio, trgRatio;
                info = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: file.width,
                    srcHeight: file.height
                };
                srcRatio = file.width / file.height;
                info.optWidth = this.options.thumbnailWidth;
                info.optHeight = this.options.thumbnailHeight;
                if ((info.optWidth == null) && (info.optHeight == null)) {
                    info.optWidth = info.srcWidth;
                    info.optHeight = info.srcHeight;
                } else if (info.optWidth == null) {
                    info.optWidth = srcRatio * info.optHeight;
                } else if (info.optHeight == null) {
                    info.optHeight = (1 / srcRatio) * info.optWidth;
                }
                trgRatio = info.optWidth / info.optHeight;
                if (file.height < info.optHeight || file.width < info.optWidth) {
                    info.trgHeight = info.srcHeight;
                    info.trgWidth = info.srcWidth;
                } else {
                    if (srcRatio > trgRatio) {
                        info.srcHeight = file.height;
                        info.srcWidth = info.srcHeight * trgRatio;
                    } else {
                        info.srcWidth = file.width;
                        info.srcHeight = info.srcWidth / trgRatio;
                    }
                }
                info.srcX = (file.width - info.srcWidth) / 2;
                info.srcY = (file.height - info.srcHeight) / 2;
                return info;
            },

            /*
             Those functions register themselves to the events on init and handle all
             the user interface specific stuff. Overwriting them won't break the upload
             but can break the way it's displayed.
             You can overwrite them if you don't like the default behavior. If you just
             want to add an additional event handler, register it on the dropzone object
             and don't overwrite those options.
             */
            drop: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragstart: noop,
            dragend: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragenter: function(e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragover: function(e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragleave: function(e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            paste: noop,
            reset: function() {
                return this.element.classList.remove("dz-started");
            },
            addedfile: function(file) {
                var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
                if (this.element === this.previewsContainer) {
                    this.element.classList.add("dz-started");
                }
                if (this.previewsContainer) {
                    file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
                    file.previewTemplate = file.previewElement;
                    this.previewsContainer.appendChild(file.previewElement);
                    _ref = file.previewElement.querySelectorAll("[data-dz-name]");
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        node.textContent = this._renameFilename(file.name);
                    }
                    _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
                    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                        node = _ref1[_j];
                        node.innerHTML = this.filesize(file.size);
                    }
                    if (this.options.addRemoveLinks) {
                        file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
                        file.previewElement.appendChild(file._removeLink);
                    }
                    removeFileEvent = (function(_this) {
                        return function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (file.status === Dropzone.UPLOADING) {
                                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                                    return _this.removeFile(file);
                                });
                            } else {
                                if (_this.options.dictRemoveFileConfirmation) {
                                    return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                                        return _this.removeFile(file);
                                    });
                                } else {
                                    return _this.removeFile(file);
                                }
                            }
                        };
                    })(this);
                    _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
                    _results = [];
                    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                        removeLink = _ref2[_k];
                        _results.push(removeLink.addEventListener("click", removeFileEvent));
                    }
                    return _results;
                }
            },
            removedfile: function(file) {
                var _ref;
                if (file.previewElement) {
                    if ((_ref = file.previewElement) != null) {
                        _ref.parentNode.removeChild(file.previewElement);
                    }
                }
                return this._updateMaxFilesReachedClass();
            },
            thumbnail: function(file, dataUrl) {
                var thumbnailElement, _i, _len, _ref;
                if (file.previewElement) {
                    file.previewElement.classList.remove("dz-file-preview");
                    _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        thumbnailElement = _ref[_i];
                        thumbnailElement.alt = file.name;
                        thumbnailElement.src = dataUrl;
                    }
                    return setTimeout(((function(_this) {
                        return function() {
                            return file.previewElement.classList.add("dz-image-preview");
                        };
                    })(this)), 1);
                }
            },
            error: function(file, message) {
                var node, _i, _len, _ref, _results;
                if (file.previewElement) {
                    file.previewElement.classList.add("dz-error");
                    if (typeof message !== "String" && message.error) {
                        message = message.error;
                    }
                    _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        _results.push(node.textContent = message);
                    }
                    return _results;
                }
            },
            errormultiple: noop,
            processing: function(file) {
                if (file.previewElement) {
                    file.previewElement.classList.add("dz-processing");
                    if (file._removeLink) {
                        return file._removeLink.textContent = this.options.dictCancelUpload;
                    }
                }
            },
            processingmultiple: noop,
            uploadprogress: function(file, progress, bytesSent) {
                var node, _i, _len, _ref, _results;
                if (file.previewElement) {
                    _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        if (node.nodeName === 'PROGRESS') {
                            _results.push(node.value = progress);
                        } else {
                            _results.push(node.style.width = "" + progress + "%");
                        }
                    }
                    return _results;
                }
            },
            totaluploadprogress: noop,
            sending: noop,
            sendingmultiple: noop,
            success: function(file) {
                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-success");
                }
            },
            successmultiple: noop,
            canceled: function(file) {
                return this.emit("error", file, "Upload canceled.");
            },
            canceledmultiple: noop,
            complete: function(file) {
                if (file._removeLink) {
                    file._removeLink.textContent = this.options.dictRemoveFile;
                }
                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-complete");
                }
            },
            completemultiple: noop,
            maxfilesexceeded: noop,
            maxfilesreached: noop,
            queuecomplete: noop,
            addedfiles: noop,
            previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
        };

        extend = function() {
            var key, object, objects, target, val, _i, _len;
            target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            for (_i = 0, _len = objects.length; _i < _len; _i++) {
                object = objects[_i];
                for (key in object) {
                    val = object[key];
                    target[key] = val;
                }
            }
            return target;
        };

        function Dropzone(element, options) {
            var elementOptions, fallback, _ref;
            this.element = element;
            this.version = Dropzone.version;
            this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
            this.clickableElements = [];
            this.listeners = [];
            this.files = [];
            if (typeof this.element === "string") {
                this.element = document.querySelector(this.element);
            }
            if (!(this.element && (this.element.nodeType != null))) {
                throw new Error("Invalid dropzone element.");
            }
            if (this.element.dropzone) {
                throw new Error("Dropzone already attached.");
            }
            Dropzone.instances.push(this);
            this.element.dropzone = this;
            elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
            this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
            if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
                return this.options.fallback.call(this);
            }
            if (this.options.url == null) {
                this.options.url = this.element.getAttribute("action");
            }
            if (!this.options.url) {
                throw new Error("No URL provided.");
            }
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
                throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            }
            if (this.options.acceptedMimeTypes) {
                this.options.acceptedFiles = this.options.acceptedMimeTypes;
                delete this.options.acceptedMimeTypes;
            }
            this.options.method = this.options.method.toUpperCase();
            if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
                fallback.parentNode.removeChild(fallback);
            }
            if (this.options.previewsContainer !== false) {
                if (this.options.previewsContainer) {
                    this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
                } else {
                    this.previewsContainer = this.element;
                }
            }
            if (this.options.clickable) {
                if (this.options.clickable === true) {
                    this.clickableElements = [this.element];
                } else {
                    this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
                }
            }
            this.init();
        }

        Dropzone.prototype.getAcceptedFiles = function() {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.accepted) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getRejectedFiles = function() {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (!file.accepted) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getFilesWithStatus = function(status) {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status === status) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getQueuedFiles = function() {
            return this.getFilesWithStatus(Dropzone.QUEUED);
        };

        Dropzone.prototype.getUploadingFiles = function() {
            return this.getFilesWithStatus(Dropzone.UPLOADING);
        };

        Dropzone.prototype.getAddedFiles = function() {
            return this.getFilesWithStatus(Dropzone.ADDED);
        };

        Dropzone.prototype.getActiveFiles = function() {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.init = function() {
            var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
            if (this.element.tagName === "form") {
                this.element.setAttribute("enctype", "multipart/form-data");
            }
            if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
            }
            if (this.clickableElements.length) {
                setupHiddenFileInput = (function(_this) {
                    return function() {
                        if (_this.hiddenFileInput) {
                            _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
                        }
                        _this.hiddenFileInput = document.createElement("input");
                        _this.hiddenFileInput.setAttribute("type", "file");
                        if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
                            _this.hiddenFileInput.setAttribute("multiple", "multiple");
                        }
                        _this.hiddenFileInput.className = "dz-hidden-input";
                        if (_this.options.acceptedFiles != null) {
                            _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
                        }
                        if (_this.options.capture != null) {
                            _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
                        }
                        _this.hiddenFileInput.style.visibility = "hidden";
                        _this.hiddenFileInput.style.position = "absolute";
                        _this.hiddenFileInput.style.top = "0";
                        _this.hiddenFileInput.style.left = "0";
                        _this.hiddenFileInput.style.height = "0";
                        _this.hiddenFileInput.style.width = "0";
                        document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
                        return _this.hiddenFileInput.addEventListener("change", function() {
                            var file, files, _i, _len;
                            files = _this.hiddenFileInput.files;
                            if (files.length) {
                                for (_i = 0, _len = files.length; _i < _len; _i++) {
                                    file = files[_i];
                                    _this.addFile(file);
                                }
                            }
                            _this.emit("addedfiles", files);
                            return setupHiddenFileInput();
                        });
                    };
                })(this);
                setupHiddenFileInput();
            }
            this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
            _ref1 = this.events;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                eventName = _ref1[_i];
                this.on(eventName, this.options[eventName]);
            }
            this.on("uploadprogress", (function(_this) {
                return function() {
                    return _this.updateTotalUploadProgress();
                };
            })(this));
            this.on("removedfile", (function(_this) {
                return function() {
                    return _this.updateTotalUploadProgress();
                };
            })(this));
            this.on("canceled", (function(_this) {
                return function(file) {
                    return _this.emit("complete", file);
                };
            })(this));
            this.on("complete", (function(_this) {
                return function(file) {
                    if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
                        return setTimeout((function() {
                            return _this.emit("queuecomplete");
                        }), 0);
                    }
                };
            })(this));
            noPropagation = function(e) {
                e.stopPropagation();
                if (e.preventDefault) {
                    return e.preventDefault();
                } else {
                    return e.returnValue = false;
                }
            };
            this.listeners = [
                {
                    element: this.element,
                    events: {
                        "dragstart": (function(_this) {
                            return function(e) {
                                return _this.emit("dragstart", e);
                            };
                        })(this),
                        "dragenter": (function(_this) {
                            return function(e) {
                                noPropagation(e);
                                return _this.emit("dragenter", e);
                            };
                        })(this),
                        "dragover": (function(_this) {
                            return function(e) {
                                var efct;
                                try {
                                    efct = e.dataTransfer.effectAllowed;
                                } catch (_error) {}
                                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                                noPropagation(e);
                                return _this.emit("dragover", e);
                            };
                        })(this),
                        "dragleave": (function(_this) {
                            return function(e) {
                                return _this.emit("dragleave", e);
                            };
                        })(this),
                        "drop": (function(_this) {
                            return function(e) {
                                noPropagation(e);
                                return _this.drop(e);
                            };
                        })(this),
                        "dragend": (function(_this) {
                            return function(e) {
                                return _this.emit("dragend", e);
                            };
                        })(this)
                    }
                }
            ];
            this.clickableElements.forEach((function(_this) {
                return function(clickableElement) {
                    return _this.listeners.push({
                        element: clickableElement,
                        events: {
                            "click": function(evt) {
                                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                                    _this.hiddenFileInput.click();
                                }
                                return true;
                            }
                        }
                    });
                };
            })(this));
            this.enable();
            return this.options.init.call(this);
        };

        Dropzone.prototype.destroy = function() {
            var _ref;
            this.disable();
            this.removeAllFiles(true);
            if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
                this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = null;
            }
            delete this.element.dropzone;
            return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
        };

        Dropzone.prototype.updateTotalUploadProgress = function() {
            var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
            totalBytesSent = 0;
            totalBytes = 0;
            activeFiles = this.getActiveFiles();
            if (activeFiles.length) {
                _ref = this.getActiveFiles();
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    file = _ref[_i];
                    totalBytesSent += file.upload.bytesSent;
                    totalBytes += file.upload.total;
                }
                totalUploadProgress = 100 * totalBytesSent / totalBytes;
            } else {
                totalUploadProgress = 100;
            }
            return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
        };

        Dropzone.prototype._getParamName = function(n) {
            if (typeof this.options.paramName === "function") {
                return this.options.paramName(n);
            } else {
                return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
            }
        };

        Dropzone.prototype._renameFilename = function(name) {
            if (typeof this.options.renameFilename !== "function") {
                return name;
            }
            return this.options.renameFilename(name);
        };

        Dropzone.prototype.getFallbackForm = function() {
            var existingFallback, fields, fieldsString, form;
            if (existingFallback = this.getExistingFallback()) {
                return existingFallback;
            }
            fieldsString = "<div class=\"dz-fallback\">";
            if (this.options.dictFallbackText) {
                fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
            }
            fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
            fields = Dropzone.createElement(fieldsString);
            if (this.element.tagName !== "FORM") {
                form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
                form.appendChild(fields);
            } else {
                this.element.setAttribute("enctype", "multipart/form-data");
                this.element.setAttribute("method", this.options.method);
            }
            return form != null ? form : fields;
        };

        Dropzone.prototype.getExistingFallback = function() {
            var fallback, getFallback, tagName, _i, _len, _ref;
            getFallback = function(elements) {
                var el, _i, _len;
                for (_i = 0, _len = elements.length; _i < _len; _i++) {
                    el = elements[_i];
                    if (/(^| )fallback($| )/.test(el.className)) {
                        return el;
                    }
                }
            };
            _ref = ["div", "form"];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                tagName = _ref[_i];
                if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                    return fallback;
                }
            }
        };

        Dropzone.prototype.setupEventListeners = function() {
            var elementListeners, event, listener, _i, _len, _ref, _results;
            _ref = this.listeners;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elementListeners = _ref[_i];
                _results.push((function() {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events;
                    _results1 = [];
                    for (event in _ref1) {
                        listener = _ref1[event];
                        _results1.push(elementListeners.element.addEventListener(event, listener, false));
                    }
                    return _results1;
                })());
            }
            return _results;
        };

        Dropzone.prototype.removeEventListeners = function() {
            var elementListeners, event, listener, _i, _len, _ref, _results;
            _ref = this.listeners;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elementListeners = _ref[_i];
                _results.push((function() {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events;
                    _results1 = [];
                    for (event in _ref1) {
                        listener = _ref1[event];
                        _results1.push(elementListeners.element.removeEventListener(event, listener, false));
                    }
                    return _results1;
                })());
            }
            return _results;
        };

        Dropzone.prototype.disable = function() {
            var file, _i, _len, _ref, _results;
            this.clickableElements.forEach(function(element) {
                return element.classList.remove("dz-clickable");
            });
            this.removeEventListeners();
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                _results.push(this.cancelUpload(file));
            }
            return _results;
        };

        Dropzone.prototype.enable = function() {
            this.clickableElements.forEach(function(element) {
                return element.classList.add("dz-clickable");
            });
            return this.setupEventListeners();
        };

        Dropzone.prototype.filesize = function(size) {
            var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
            selectedSize = 0;
            selectedUnit = "b";
            if (size > 0) {
                units = ['TB', 'GB', 'MB', 'KB', 'b'];
                for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
                    unit = units[i];
                    cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                    if (size >= cutoff) {
                        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                        selectedUnit = unit;
                        break;
                    }
                }
                selectedSize = Math.round(10 * selectedSize) / 10;
            }
            return "<strong>" + selectedSize + "</strong> " + selectedUnit;
        };

        Dropzone.prototype._updateMaxFilesReachedClass = function() {
            if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
                if (this.getAcceptedFiles().length === this.options.maxFiles) {
                    this.emit('maxfilesreached', this.files);
                }
                return this.element.classList.add("dz-max-files-reached");
            } else {
                return this.element.classList.remove("dz-max-files-reached");
            }
        };

        Dropzone.prototype.drop = function(e) {
            var files, items;
            if (!e.dataTransfer) {
                return;
            }
            this.emit("drop", e);
            files = e.dataTransfer.files;
            this.emit("addedfiles", files);
            if (files.length) {
                items = e.dataTransfer.items;
                if (items && items.length && (items[0].webkitGetAsEntry != null)) {
                    this._addFilesFromItems(items);
                } else {
                    this.handleFiles(files);
                }
            }
        };

        Dropzone.prototype.paste = function(e) {
            var items, _ref;
            if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
                return;
            }
            this.emit("paste", e);
            items = e.clipboardData.items;
            if (items.length) {
                return this._addFilesFromItems(items);
            }
        };

        Dropzone.prototype.handleFiles = function(files) {
            var file, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                _results.push(this.addFile(file));
            }
            return _results;
        };

        Dropzone.prototype._addFilesFromItems = function(items) {
            var entry, item, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = items.length; _i < _len; _i++) {
                item = items[_i];
                if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) {
                        _results.push(this.addFile(item.getAsFile()));
                    } else if (entry.isDirectory) {
                        _results.push(this._addFilesFromDirectory(entry, entry.name));
                    } else {
                        _results.push(void 0);
                    }
                } else if (item.getAsFile != null) {
                    if ((item.kind == null) || item.kind === "file") {
                        _results.push(this.addFile(item.getAsFile()));
                    } else {
                        _results.push(void 0);
                    }
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
            var dirReader, errorHandler, readEntries;
            dirReader = directory.createReader();
            errorHandler = function(error) {
                return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
            };
            readEntries = (function(_this) {
                return function() {
                    return dirReader.readEntries(function(entries) {
                        var entry, _i, _len;
                        if (entries.length > 0) {
                            for (_i = 0, _len = entries.length; _i < _len; _i++) {
                                entry = entries[_i];
                                if (entry.isFile) {
                                    entry.file(function(file) {
                                        if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                                            return;
                                        }
                                        file.fullPath = "" + path + "/" + file.name;
                                        return _this.addFile(file);
                                    });
                                } else if (entry.isDirectory) {
                                    _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
                                }
                            }
                            readEntries();
                        }
                        return null;
                    }, errorHandler);
                };
            })(this);
            return readEntries();
        };

        Dropzone.prototype.accept = function(file, done) {
            if (file.size > this.options.maxFilesize * 1024 * 1024) {
                return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
            } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
                return done(this.options.dictInvalidFileType);
            } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
                done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                return this.emit("maxfilesexceeded", file);
            } else {
                return this.options.accept.call(this, file, done);
            }
        };

        Dropzone.prototype.addFile = function(file) {
            file.upload = {
                progress: 0,
                total: file.size,
                bytesSent: 0
            };
            this.files.push(file);
            file.status = Dropzone.ADDED;
            this.emit("addedfile", file);
            this._enqueueThumbnail(file);
            return this.accept(file, (function(_this) {
                return function(error) {
                    if (error) {
                        file.accepted = false;
                        _this._errorProcessing([file], error);
                    } else {
                        file.accepted = true;
                        if (_this.options.autoQueue) {
                            _this.enqueueFile(file);
                        }
                    }
                    return _this._updateMaxFilesReachedClass();
                };
            })(this));
        };

        Dropzone.prototype.enqueueFiles = function(files) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                this.enqueueFile(file);
            }
            return null;
        };

        Dropzone.prototype.enqueueFile = function(file) {
            if (file.status === Dropzone.ADDED && file.accepted === true) {
                file.status = Dropzone.QUEUED;
                if (this.options.autoProcessQueue) {
                    return setTimeout(((function(_this) {
                        return function() {
                            return _this.processQueue();
                        };
                    })(this)), 0);
                }
            } else {
                throw new Error("This file can't be queued because it has already been processed or was rejected.");
            }
        };

        Dropzone.prototype._thumbnailQueue = [];

        Dropzone.prototype._processingThumbnail = false;

        Dropzone.prototype._enqueueThumbnail = function(file) {
            if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                this._thumbnailQueue.push(file);
                return setTimeout(((function(_this) {
                    return function() {
                        return _this._processThumbnailQueue();
                    };
                })(this)), 0);
            }
        };

        Dropzone.prototype._processThumbnailQueue = function() {
            if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                return;
            }
            this._processingThumbnail = true;
            return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
                return function() {
                    _this._processingThumbnail = false;
                    return _this._processThumbnailQueue();
                };
            })(this));
        };

        Dropzone.prototype.removeFile = function(file) {
            if (file.status === Dropzone.UPLOADING) {
                this.cancelUpload(file);
            }
            this.files = without(this.files, file);
            this.emit("removedfile", file);
            if (this.files.length === 0) {
                return this.emit("reset");
            }
        };

        Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
            var file, _i, _len, _ref;
            if (cancelIfNecessary == null) {
                cancelIfNecessary = false;
            }
            _ref = this.files.slice();
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                    this.removeFile(file);
                }
            }
            return null;
        };

        Dropzone.prototype.createThumbnail = function(file, callback) {
            var fileReader;
            fileReader = new FileReader;
            fileReader.onload = (function(_this) {
                return function() {
                    if (file.type === "image/svg+xml") {
                        _this.emit("thumbnail", file, fileReader.result);
                        if (callback != null) {
                            callback();
                        }
                        return;
                    }
                    return _this.createThumbnailFromUrl(file, fileReader.result, callback);
                };
            })(this);
            return fileReader.readAsDataURL(file);
        };

        Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {
            var img;
            img = document.createElement("img");
            if (crossOrigin) {
                img.crossOrigin = crossOrigin;
            }
            img.onload = (function(_this) {
                return function() {
                    var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
                    file.width = img.width;
                    file.height = img.height;
                    resizeInfo = _this.options.resize.call(_this, file);
                    if (resizeInfo.trgWidth == null) {
                        resizeInfo.trgWidth = resizeInfo.optWidth;
                    }
                    if (resizeInfo.trgHeight == null) {
                        resizeInfo.trgHeight = resizeInfo.optHeight;
                    }
                    canvas = document.createElement("canvas");
                    ctx = canvas.getContext("2d");
                    canvas.width = resizeInfo.trgWidth;
                    canvas.height = resizeInfo.trgHeight;
                    drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    thumbnail = canvas.toDataURL("image/png");
                    _this.emit("thumbnail", file, thumbnail);
                    if (callback != null) {
                        return callback();
                    }
                };
            })(this);
            if (callback != null) {
                img.onerror = callback;
            }
            return img.src = imageUrl;
        };

        Dropzone.prototype.processQueue = function() {
            var i, parallelUploads, processingLength, queuedFiles;
            parallelUploads = this.options.parallelUploads;
            processingLength = this.getUploadingFiles().length;
            i = processingLength;
            if (processingLength >= parallelUploads) {
                return;
            }
            queuedFiles = this.getQueuedFiles();
            if (!(queuedFiles.length > 0)) {
                return;
            }
            if (this.options.uploadMultiple) {
                return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
            } else {
                while (i < parallelUploads) {
                    if (!queuedFiles.length) {
                        return;
                    }
                    this.processFile(queuedFiles.shift());
                    i++;
                }
            }
        };

        Dropzone.prototype.processFile = function(file) {
            return this.processFiles([file]);
        };

        Dropzone.prototype.processFiles = function(files) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.processing = true;
                file.status = Dropzone.UPLOADING;
                this.emit("processing", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("processingmultiple", files);
            }
            return this.uploadFiles(files);
        };

        Dropzone.prototype._getFilesWithXhr = function(xhr) {
            var file, files;
            return files = (function() {
                var _i, _len, _ref, _results;
                _ref = this.files;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    file = _ref[_i];
                    if (file.xhr === xhr) {
                        _results.push(file);
                    }
                }
                return _results;
            }).call(this);
        };

        Dropzone.prototype.cancelUpload = function(file) {
            var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
            if (file.status === Dropzone.UPLOADING) {
                groupedFiles = this._getFilesWithXhr(file.xhr);
                for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
                    groupedFile = groupedFiles[_i];
                    groupedFile.status = Dropzone.CANCELED;
                }
                file.xhr.abort();
                for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
                    groupedFile = groupedFiles[_j];
                    this.emit("canceled", groupedFile);
                }
                if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", groupedFiles);
                }
            } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
                file.status = Dropzone.CANCELED;
                this.emit("canceled", file);
                if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", [file]);
                }
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        resolveOption = function() {
            var args, option;
            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (typeof option === 'function') {
                return option.apply(this, args);
            }
            return option;
        };

        Dropzone.prototype.uploadFile = function(file) {
            return this.uploadFiles([file]);
        };

        Dropzone.prototype.uploadFiles = function(files) {
            var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
            xhr = new XMLHttpRequest();
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.xhr = xhr;
            }
            method = resolveOption(this.options.method, files);
            url = resolveOption(this.options.url, files);
            xhr.open(method, url, true);
            xhr.withCredentials = !!this.options.withCredentials;
            response = null;
            handleError = (function(_this) {
                return function() {
                    var _j, _len1, _results;
                    _results = [];
                    for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                        file = files[_j];
                        _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
                    }
                    return _results;
                };
            })(this);
            updateProgress = (function(_this) {
                return function(e) {
                    var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
                    if (e != null) {
                        progress = 100 * e.loaded / e.total;
                        for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                            file = files[_j];
                            file.upload = {
                                progress: progress,
                                total: e.total,
                                bytesSent: e.loaded
                            };
                        }
                    } else {
                        allFilesFinished = true;
                        progress = 100;
                        for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
                            file = files[_k];
                            if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                                allFilesFinished = false;
                            }
                            file.upload.progress = progress;
                            file.upload.bytesSent = file.upload.total;
                        }
                        if (allFilesFinished) {
                            return;
                        }
                    }
                    _results = [];
                    for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
                        file = files[_l];
                        _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
                    }
                    return _results;
                };
            })(this);
            xhr.onload = (function(_this) {
                return function(e) {
                    var _ref;
                    if (files[0].status === Dropzone.CANCELED) {
                        return;
                    }
                    if (xhr.readyState !== 4) {
                        return;
                    }
                    response = xhr.responseText;
                    if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                        try {
                            response = JSON.parse(response);
                        } catch (_error) {
                            e = _error;
                            response = "Invalid JSON response from server.";
                        }
                    }
                    updateProgress();
                    if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
                        return handleError();
                    } else {
                        return _this._finished(files, response, e);
                    }
                };
            })(this);
            xhr.onerror = (function(_this) {
                return function() {
                    if (files[0].status === Dropzone.CANCELED) {
                        return;
                    }
                    return handleError();
                };
            })(this);
            progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
            progressObj.onprogress = updateProgress;
            headers = {
                "Accept": "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            };
            if (this.options.headers) {
                extend(headers, this.options.headers);
            }
            for (headerName in headers) {
                headerValue = headers[headerName];
                if (headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                }
            }
            formData = new FormData();
            if (this.options.params) {
                _ref1 = this.options.params;
                for (key in _ref1) {
                    value = _ref1[key];
                    formData.append(key, value);
                }
            }
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                file = files[_j];
                this.emit("sending", file, xhr, formData);
            }
            if (this.options.uploadMultiple) {
                this.emit("sendingmultiple", files, xhr, formData);
            }
            if (this.element.tagName === "FORM") {
                _ref2 = this.element.querySelectorAll("input, textarea, select, button");
                for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                    input = _ref2[_k];
                    inputName = input.getAttribute("name");
                    inputType = input.getAttribute("type");
                    if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                        _ref3 = input.options;
                        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                            option = _ref3[_l];
                            if (option.selected) {
                                formData.append(inputName, option.value);
                            }
                        }
                    } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
                        formData.append(inputName, input.value);
                    }
                }
            }
            for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
                formData.append(this._getParamName(i), files[i], this._renameFilename(files[i].name));
            }
            return this.submitRequest(xhr, formData, files);
        };

        Dropzone.prototype.submitRequest = function(xhr, formData, files) {
            return xhr.send(formData);
        };

        Dropzone.prototype._finished = function(files, responseText, e) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.status = Dropzone.SUCCESS;
                this.emit("success", file, responseText, e);
                this.emit("complete", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("successmultiple", files, responseText, e);
                this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        Dropzone.prototype._errorProcessing = function(files, message, xhr) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.status = Dropzone.ERROR;
                this.emit("error", file, message, xhr);
                this.emit("complete", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("errormultiple", files, message, xhr);
                this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        return Dropzone;

    })(Emitter);

    Dropzone.version = "4.3.0";

    Dropzone.options = {};

    Dropzone.optionsForElement = function(element) {
        if (element.getAttribute("id")) {
            return Dropzone.options[camelize(element.getAttribute("id"))];
        } else {
            return void 0;
        }
    };

    Dropzone.instances = [];

    Dropzone.forElement = function(element) {
        if (typeof element === "string") {
            element = document.querySelector(element);
        }
        if ((element != null ? element.dropzone : void 0) == null) {
            throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        }
        return element.dropzone;
    };

    Dropzone.autoDiscover = true;

    Dropzone.discover = function() {
        var checkElements, dropzone, dropzones, _i, _len, _results;
        if (document.querySelectorAll) {
            dropzones = document.querySelectorAll(".dropzone");
        } else {
            dropzones = [];
            checkElements = function(elements) {
                var el, _i, _len, _results;
                _results = [];
                for (_i = 0, _len = elements.length; _i < _len; _i++) {
                    el = elements[_i];
                    if (/(^| )dropzone($| )/.test(el.className)) {
                        _results.push(dropzones.push(el));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            };
            checkElements(document.getElementsByTagName("div"));
            checkElements(document.getElementsByTagName("form"));
        }
        _results = [];
        for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
            dropzone = dropzones[_i];
            if (Dropzone.optionsForElement(dropzone) !== false) {
                _results.push(new Dropzone(dropzone));
            } else {
                _results.push(void 0);
            }
        }
        return _results;
    };

    Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

    Dropzone.isBrowserSupported = function() {
        var capableBrowser, regex, _i, _len, _ref;
        capableBrowser = true;
        if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
            if (!("classList" in document.createElement("a"))) {
                capableBrowser = false;
            } else {
                _ref = Dropzone.blacklistedBrowsers;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    regex = _ref[_i];
                    if (regex.test(navigator.userAgent)) {
                        capableBrowser = false;
                        continue;
                    }
                }
            }
        } else {
            capableBrowser = false;
        }
        return capableBrowser;
    };

    without = function(list, rejectedItem) {
        var item, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = list.length; _i < _len; _i++) {
            item = list[_i];
            if (item !== rejectedItem) {
                _results.push(item);
            }
        }
        return _results;
    };

    camelize = function(str) {
        return str.replace(/[\-_](\w)/g, function(match) {
            return match.charAt(1).toUpperCase();
        });
    };

    Dropzone.createElement = function(string) {
        var div;
        div = document.createElement("div");
        div.innerHTML = string;
        return div.childNodes[0];
    };

    Dropzone.elementInside = function(element, container) {
        if (element === container) {
            return true;
        }
        while (element = element.parentNode) {
            if (element === container) {
                return true;
            }
        }
        return false;
    };

    Dropzone.getElement = function(el, name) {
        var element;
        if (typeof el === "string") {
            element = document.querySelector(el);
        } else if (el.nodeType != null) {
            element = el;
        }
        if (element == null) {
            throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
        }
        return element;
    };

    Dropzone.getElements = function(els, name) {
        var e, el, elements, _i, _j, _len, _len1, _ref;
        if (els instanceof Array) {
            elements = [];
            try {
                for (_i = 0, _len = els.length; _i < _len; _i++) {
                    el = els[_i];
                    elements.push(this.getElement(el, name));
                }
            } catch (_error) {
                e = _error;
                elements = null;
            }
        } else if (typeof els === "string") {
            elements = [];
            _ref = document.querySelectorAll(els);
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                el = _ref[_j];
                elements.push(el);
            }
        } else if (els.nodeType != null) {
            elements = [els];
        }
        if (!((elements != null) && elements.length)) {
            throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        }
        return elements;
    };

    Dropzone.confirm = function(question, accepted, rejected) {
        if (window.confirm(question)) {
            return accepted();
        } else if (rejected != null) {
            return rejected();
        }
    };

    Dropzone.isValidFile = function(file, acceptedFiles) {
        var baseMimeType, mimeType, validType, _i, _len;
        if (!acceptedFiles) {
            return true;
        }
        acceptedFiles = acceptedFiles.split(",");
        mimeType = file.type;
        baseMimeType = mimeType.replace(/\/.*$/, "");
        for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
            validType = acceptedFiles[_i];
            validType = validType.trim();
            if (validType.charAt(0) === ".") {
                if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                    return true;
                }
            } else if (/\/\*$/.test(validType)) {
                if (baseMimeType === validType.replace(/\/.*$/, "")) {
                    return true;
                }
            } else {
                if (mimeType === validType) {
                    return true;
                }
            }
        }
        return false;
    };

    if (typeof jQuery !== "undefined" && jQuery !== null) {
        jQuery.fn.dropzone = function(options) {
            return this.each(function() {
                return new Dropzone(this, options);
            });
        };
    }

    if (typeof module !== "undefined" && module !== null) {
        module.exports = Dropzone;
    } else {
        window.Dropzone = Dropzone;
    }

    Dropzone.ADDED = "added";

    Dropzone.QUEUED = "queued";

    Dropzone.ACCEPTED = Dropzone.QUEUED;

    Dropzone.UPLOADING = "uploading";

    Dropzone.PROCESSING = Dropzone.UPLOADING;

    Dropzone.CANCELED = "canceled";

    Dropzone.ERROR = "error";

    Dropzone.SUCCESS = "success";


    /*

     Bugfix for iOS 6 and 7
     Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
     based on the work of https://github.com/stomita/ios-imagefile-megapixel
     */

    detectVerticalSquash = function(img) {
        var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
        iw = img.naturalWidth;
        ih = img.naturalHeight;
        canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = ih;
        ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        data = ctx.getImageData(0, 0, 1, ih).data;
        sy = 0;
        ey = ih;
        py = ih;
        while (py > sy) {
            alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        ratio = py / ih;
        if (ratio === 0) {
            return 1;
        } else {
            return ratio;
        }
    };

    drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        var vertSquashRatio;
        vertSquashRatio = detectVerticalSquash(img);
        return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
    };


    /*
     * contentloaded.js
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     */

    contentLoaded = function(win, fn) {
        var add, doc, done, init, poll, pre, rem, root, top;
        done = false;
        top = true;
        doc = win.document;
        root = doc.documentElement;
        add = (doc.addEventListener ? "addEventListener" : "attachEvent");
        rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
        pre = (doc.addEventListener ? "" : "on");
        init = function(e) {
            if (e.type === "readystatechange" && doc.readyState !== "complete") {
                return;
            }
            (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
            if (!done && (done = true)) {
                return fn.call(win, e.type || e);
            }
        };
        poll = function() {
            var e;
            try {
                root.doScroll("left");
            } catch (_error) {
                e = _error;
                setTimeout(poll, 50);
                return;
            }
            return init("poll");
        };
        if (doc.readyState !== "complete") {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement;
                } catch (_error) {}
                if (top) {
                    poll();
                }
            }
            doc[add](pre + "DOMContentLoaded", init, false);
            doc[add](pre + "readystatechange", init, false);
            return win[add](pre + "load", init, false);
        }
    };

    Dropzone._autoDiscoverFunction = function() {
        if (Dropzone.autoDiscover) {
            return Dropzone.discover();
        }
    };

    contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
$(function() {
    var style = [
            {
                "featureType": "landscape",
                "stylers": [
                    {"hue": "#FFA800"},
                    {"saturation": 0},
                    {"lightness": 0},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    {"hue": "#3E972D"},
                    {"saturation": -73},
                    {"lightness": 40},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {"hue": "#FBFF00"},
                    {"saturation": 0},
                    {"lightness": 0},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {"hue": "#00FFFD"},
                    {"saturation": 0},
                    {"lightness": 30},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {"hue": "#00BFFF"},
                    {"saturation": 6},
                    {"lightness": 8},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {"hue": "#679714"},
                    {"saturation": 33.4},
                    {"lightness": -25.4},
                    {"gamma": 1}
                ]
            }
        ],
        iconBase = '/imgs/';
    $('ul.nav-tabs a[href=' + (window.location.hash || $('ul[role=tablist] li[role=presentation] a').first().attr('href')) + ']').tab('show');
    $('ul.nav-tabs a[role=tab]').click(function (event) {
        var href = $(event.currentTarget).attr('href');
        if (href) window.location.hash = href;
    });
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "onclick": null,
        "showDuration": "400",
        "hideDuration": "1000",
        "timeOut": "2000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    $('.redactor').redactor({
        lang: 'ru',
        wym: true,
        focus: true,
        maxHeight: 500,
        convertVideoLinks: true,
        imageUpload: '/admin/uploadImage',
        formatting: ['p', 'blockquote', 'h1', 'h2'],
        buttons: [
            'html', 'formatting', 'format', 'bold',
            'italic', 'underline', 'deleted', 'lists',
            'unorderedlist', 'orderedlist'
        ]
    });
    $('.redactor_link_only').redactor({
        lang: 'ru',
        wym: true,
        focus: false,
        maxHeight: 70,
        convertVideoLinks: true,
        imageUpload: '/admin/uploadImage',
        buttons: ['link'],
    });
    $('.redactor_link_only_phone').redactor({
        lang: 'ru',
        wym: true,
        focus: false,
        maxHeight: 67,
        convertVideoLinks: true,
        imageUpload: '/admin/uploadImage',
        placeholder: '+380 (00) 000-00-00 (URL tel:380000000000)',
        buttons: ['link'],
    });

});
//# sourceMappingURL=backend.js.map
