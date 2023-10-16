"use strict";(self.webpackChunk_mbusa_now_aem=self.webpackChunk_mbusa_now_aem||[]).push([[4121],{24121:function(e,t,i){i.d(t,{Z:function(){return W}});var s=i(35101),n=i(68053),a=i(71890),o=i(15671),c=i(43144),l=i(61156),r=i(48218),h=i(14569),d={small:30,large:70,xlarge:100,xxlarge:100},u={small:130,large:160,xlarge:260,xxlarge:260},v=function(){function e(t){(0,o.Z)(this,e),this.element=t,this.currentScreenState=l.sp.getCurrentState(),this.maskHeight=d[this.currentScreenState],this.arcHandle=u[this.currentScreenState],this.init()}return(0,c.Z)(e,[{key:"init",value:function(){this.setBindings(),this.cacheDOM(),this.videoElm&&this.initVideo(),this.attachEvents(),this.updateMaskProps(),this.updateMask(),this.revealMask(),this.videoElm&&this.setVideoAspectRatio()}},{key:"setBindings",value:function(){this.onBreakpointCross=this.onBreakpointCross.bind(this),this.onFocus=this.onFocus.bind(this),this.onFocusObserver=this.onFocusObserver.bind(this),this.onResize=(0,l.P2)(this.onResize.bind(this),10),this.onScroll=(0,l.P2)(this.onScroll.bind(this),5),this.onSticky=this.onSticky.bind(this),this.setVideoAspectRatio=this.setVideoAspectRatio.bind(this)}},{key:"cacheDOM",value:function(){this.focusElms=[].slice.call(this.element.querySelectorAll("".concat("a",", ").concat("button"))),this.maskElm=this.element.parentElement.querySelector(".".concat("maybach-class-hero__mask")),this.pathElm=this.element.parentElement.querySelector(".".concat("maybach-class-hero__mask-path")),this.videoElm=this.element.querySelector(".".concat("maybach-class-hero__video")),this.videoControlElm=this.element.querySelector(".".concat("html5-video-player"))}},{key:"initVideo",value:function(){this.html5VideoPlayer=new h.HTML5VideoPlayer(this.videoControlElm)}},{key:"attachEvents",value:function(){var e=this;this.focusElms.forEach((function(t){t.addEventListener(r.FP.FOCUS,e.onFocus)})),l.sp.addResizeListener(this.onResize),l.sp.addBreakpointListener(this.onBreakpointCross),window.addEventListener(r.FP.SCROLL,this.onScroll),l.Jw.addEventListener(r.fD.STICKY_NAV,this.onSticky)}},{key:"detachEvents",value:function(){var e=this;this.focusElms.forEach((function(t){t.removeEventListener(r.FP.FOCUS,e.onFocus)})),l.sp.removeResizeListener(this.onResize),l.sp.removeBreakpointListener(this.onBreakpointCross),window.removeEventListener(r.FP.SCROLL,this.onScroll),l.Jw.removeEventListener(r.fD.STICKY_NAV,this.onSticky)}},{key:"setVideoAspectRatio",value:function(){this.videoAspectRatio=this.videoElm.videoWidth/this.videoElm.videoHeight,this.videoAspectRatio?this.setDominantVideoDimension():window.requestAnimationFrame(this.setVideoAspectRatio)}},{key:"setDominantVideoDimension",value:function(){var e=window.innerWidth/window.innerHeight>this.videoAspectRatio?"add":"remove";this.videoElm.classList[e]("maybach-class-hero__video--width")}},{key:"updateMaskProps",value:function(){this.arcScrollHeight=.33*window.innerHeight,this.arcWidth=window.innerWidth}},{key:"updateMask",value:function(){var e=Math.min(1,window.scrollY/this.arcScrollHeight);this.pathElm.setAttribute("d","M 0 0\n             C ".concat(this.arcHandle," ").concat(e*this.maskHeight,", ").concat(this.arcWidth-this.arcHandle," ").concat(e*this.maskHeight,", ").concat(this.arcWidth," 0\n             L ").concat(this.arcWidth," ").concat(this.maskHeight,"\n             L 0 ").concat(this.maskHeight,"\n             L 0 0"))}},{key:"revealMask",value:function(){this.maskElm.classList.remove("hide")}},{key:"onScroll",value:function(){this.updateMask()}},{key:"onSticky",value:function(e){var t=e.detail.isIntersecting?"remove":"add";this.element.classList[t]("maybach-class-hero--inactive")}},{key:"onResize",value:function(){this.updateMaskProps(),this.updateMask(),this.videoElm&&(this.setVideoAspectRatio(),this.setDominantVideoDimension())}},{key:"onBreakpointCross",value:function(e){this.currentScreenState=e,this.maskHeight=d[this.currentScreenState],this.arcHandle=u[this.currentScreenState],this.updateMaskProps(),this.updateMask()}},{key:"onFocus",value:function(e){this.focusObserver=l.sw.addObserver(e.target,this.onFocusObserver,{threshold:[1],trackVisibility:!0,delay:200})}},{key:"onFocusObserver",value:function(e){e[0].isVisible||(0,l.X5)(0,100),l.sw.removeObserver(this.focusObserver)}},{key:"destroy",value:function(){this.detachEvents(),this.element.remove(),delete this.element}}]),e}(),m=i(82051),p=i(22209),y="maybach-model-section__item",E="maybach-model-section__cta-view",S="maybach-model-section__specifications--open",f="aria-expanded",k=function(){function e(t){(0,o.Z)(this,e),this.element=t,this.mediaServerApi=m.W.getInstance(),this.init()}return(0,c.Z)(e,[{key:"init",value:function(){this.setBindings(),this.cacheDOM(),this.attachEvents(),this.setRetina(),this.getMediaServerImages()}},{key:"setBindings",value:function(){this.drawerListener=this.drawerListener.bind(this)}},{key:"setRetina",value:function(){l.sp.isRetina()||this.element.classList.add("maybach-model-section--non-retina")}},{key:"cacheDOM",value:function(){this.modelItemElms=[].slice.call(this.element.querySelectorAll(".".concat(y))),this.viewSpecsButtons=[].slice.call(this.element.querySelectorAll(".".concat(E)))}},{key:"attachEvents",value:function(){var e=this;this.viewSpecsButtons.map((function(t){return t.addEventListener(r.FP.CLICK,e.drawerListener)}))}},{key:"detachEvents",value:function(){var e=this;this.viewSpecsButtons.map((function(t){return t.removeEventListener(r.FP.CLICK,e.drawerListener)}))}},{key:"drawerListener",value:function(e){e.preventDefault();var t=e.target,i=(0,l.wr)(t,".".concat(y));this.toggleDrawer(i)}},{key:"toggleDrawer",value:function(e){var t=e.querySelector(".".concat(E)),i=e.querySelector(".".concat("maybach-model-section__specifications"));i.classList.contains(S)?(t.setAttribute(f,"false"),i.classList.remove(S)):(t.setAttribute(f,"true"),i.classList.add(S))}},{key:"getMediaServerImages",value:function(){var e=this;this.modelItemElms.forEach((function(t){var i=t.querySelector(".".concat("maybach-model-section__image-wrapper")),s={bodyStyle:t.dataset.modelBodystyle,class:t.dataset.modelClass,model:t.dataset.modelCode,year:t.dataset.modelYear,vehicleName:""},n=[],a=!1;e.mediaServerApi.getMediaServerType({className:s.class,model:s.model.toUpperCase(),year:s.year}).then((function(t){(a=t!==m.W.MEDIA_SERVER_TYPES.BBD)&&(n=["noglints","shadow"]),e.mediaServerApi.getBuildImage(s,{bkgnd:"transparent",type:"png",sa:n,view:m.W.VIEW_TYPES.EXTERIOR,pov:m.W.POV_TYPES.FRONT,presetCategory:m.W.PRESET_CATEGORIES.BYO}).then((function(t){e.populateTemplate({images:{small:t.respObj.small.retina,large:t.respObj.small.retina},imageWrapperElm:i,nonBBD:a})})).catch((function(){e.populateTemplate({images:{small:i.dataset.fallbackImage,large:i.dataset.fallbackImage},imageWrapperElm:i,nonBBD:!1,fallback:!0})}))}))}))}},{key:"populateTemplate",value:function(e){var t=e.images,i=e.imageWrapperElm,s=e.nonBBD,n=e.fallback,a="".concat("maybach-model-section__image"," ").concat(n?"maybach-model-section__image--fallback":""," ").concat(s?"maybach-model-section__image--non-bbd":""),o=new p.LazyPicture({className:a,media:{alt:"",imgL:t.large,imgS:t.small},role:"presentation"});l.jG.prepend(o.render(),i)}},{key:"destroy",value:function(){this.detachEvents()}}]),e}(),g=i(30168);function b(){var e=(0,g.Z)(['\n    <button class="class-page-maybach-section__slide-on-deck class-page-maybach-section__slide-on-deck--visible" tabindex="-1">\n        <picture class="class-page-maybach-section__slide-on-deck-picture">\n            <source media="(max-width: 767px)" srcset="','" />\n            <img src="','" class="responsive-image" alt="" role="presentation">\n        </picture>\n    </button>\n']);return b=function(){return e},e}var w="aria-disabled",L="tabindex",T="lazySrc",_="img",A="source",C="class-page-maybach-section__slideshow-auto-advance--start",I="class-page-maybach-section__slideshow-auto-advance--stop",O="class-page-maybach-section__slideshow-controls--disabled",D="class-page-maybach-section__slide-on-deck--visible",P="class-page-maybach-section__slide--active",R="class-page-maybach-section__slide-timer-bar--paused",B="class-page-maybach-section__slide-timer-bar--playing",M="class-page-maybach-section__slide--visible",x="next",N="prev",F=function(){function e(t){(0,o.Z)(this,e),this.element=t,this.activeSlideIdx=0,this.pendingSlideIdx=-1,this.inTransition=!1,this.stopped=!1,this.forceFocus=!1,this.onDeck=!1,this.init()}return(0,c.Z)(e,[{key:"init",value:function(){this.setBindings(),this.cacheDOM(),this.slideCount=this.slideElems.length,1===this.slideCount?(this.attachScreenEvents(),this.handleSingleSlide()):this.slideCount>1&&(this.setCountElemValue(),this.attachEvents()),this.onBreakpointCross()}},{key:"setBindings",value:function(){this.beginSlideTimer=this.beginSlideTimer.bind(this),this.onBreakpointCross=this.onBreakpointCross.bind(this),this.onAutoAdvanceClick=this.onAutoAdvanceClick.bind(this),this.onControlClick=this.onControlClick.bind(this),this.onKeydown=this.onKeydown.bind(this),this.onKeyup=this.onKeyup.bind(this),this.onOnDeckClick=this.onOnDeckClick.bind(this),this.onObserver=this.onObserver.bind(this),this.onSwipeLeft=this.onSwipe.bind(this,N),this.onSwipeRight=this.onSwipe.bind(this,x),this.onSlideTransitionEnd=this.onSlideTransitionEnd.bind(this),this.onTimerTransitionEnd=this.onTimerTransitionEnd.bind(this)}},{key:"cacheDOM",value:function(){this.slideshowElem=this.element.querySelector(".".concat("class-page-maybach-section__slideshow")),this.slideElems=[].slice.call(this.element.querySelectorAll(".".concat("class-page-maybach-section__slide"))),this.slideTimerElems=[].slice.call(this.element.querySelectorAll(".".concat("class-page-maybach-section__slide-timer-bar"))),this.controlsElem=this.element.querySelector(".".concat("class-page-maybach-section__slideshow-controls")),this.controlElems=[].slice.call(this.element.querySelectorAll(".".concat("class-page-maybach-section__slideshow-control"))),this.autoAdvanceElem=this.element.querySelector(".".concat("class-page-maybach-section__slideshow-auto-advance")),this.slideIndexElem=this.element.querySelector(".".concat("class-page-maybach-section__slideshow-count-index")),this.slideCountElem=this.element.querySelector(".".concat("class-page-maybach-section__slideshow-count-total"))}},{key:"attachEvents",value:function(){var e=this;this.vObserver=l.sw.addObserver(this.element,this.onObserver,{threshold:.5}),this.slideElems.forEach((function(t){t.addEventListener(r.FP.KEYDOWN,e.onKeydown)})),this.attachScreenEvents(),this.attachTouchEvents()}},{key:"detachEvents",value:function(){var e=this;this.vObserver&&l.sw.removeObserver(this.vObserver),this.slideElems.forEach((function(t){t.removeEventListener(r.FP.KEYDOWN,e.onKeydown),t.removeEventListener(r.FP.KEYUP,e.onKeyup)})),this.detachAutoAdvanceEvents(),this.detachControlEvents(),this.detachScreenEvents(),this.detachOnDeckEvents(),this.detachTouchEvents()}},{key:"attachScreenEvents",value:function(){l.sp.addBreakpointListener(this.onBreakpointCross)}},{key:"detachScreenEvents",value:function(){l.sp.removeBreakpointListener(this.onBreakpointCross)}},{key:"attachAutoAdvanceEvents",value:function(){this.autoAdvanceElem.addEventListener(r.FP.CLICK,this.onAutoAdvanceClick),this.autoAdvanceElem.setAttribute(w,!1),this.autoAdvanceElem.removeAttribute(L)}},{key:"detachAutoAdvanceEvents",value:function(){this.autoAdvanceElem.removeEventListener(r.FP.CLICK,this.onAutoAdvanceClick),this.autoAdvanceElem.setAttribute(w,!0),this.autoAdvanceElem.setAttribute(L,"-1")}},{key:"attachControlEvents",value:function(){var e=this;this.controlElems.forEach((function(t){t.addEventListener(r.FP.CLICK,e.onControlClick)}))}},{key:"detachControlEvents",value:function(){var e=this;this.controlElems.forEach((function(t){t.removeEventListener(r.FP.CLICK,e.onControlClick)}))}},{key:"attachTouchEvents",value:function(){l.Xh.isTouch()&&(this.swipeContainer=new l.Xh(this.slideshowElem),this.swipeContainer.on(l.Xh.EVENTS.SWIPE_LEFT,this.onSwipeLeft),this.swipeContainer.on(l.Xh.EVENTS.SWIPE_RIGHT,this.onSwipeRight))}},{key:"detachTouchEvents",value:function(){this.touchSwipe&&(this.swipeContainer.off(l.Xh.EVENTS.SWIPE_RIGHT,this.onSwipeRight),this.swipeContainer.off(l.Xh.EVENTS.SWIPE_LEFT,this.onSwipeLeft))}},{key:"attachOnDeckEvents",value:function(){this.onDeckElem&&this.onDeckElem.addEventListener(r.FP.CLICK,this.onOnDeckClick)}},{key:"detachOnDeckEvents",value:function(){this.onDeckElem&&this.onDeckElem.removeEventListener(r.FP.CLICK,this.onOnDeckClick)}},{key:"onBreakpointCross",value:function(){if(l.sp.gte(l.sp.SIZES.XLARGE)&&!this.onDeck){var e=this.slideElems[(this.activeSlideIdx+1+this.slideCount)%this.slideCount];this.onDeckElem=(i=(t={srcLarge:e.querySelector(_).dataset[T],srcSmall:e.querySelector(A).dataset[T]}).srcLarge,s=t.srcSmall,(0,l.e2)(b(),s,i))({getNode:!0}),this.onDeck=!0,l.jG.insertAdjacentElement(this.onDeckElem,this.controlsElem,l.jG.POSITIONS.AFTER_END),this.attachOnDeckEvents()}else!l.sp.gte(l.sp.SIZES.XLARGE)&&this.onDeck&&(this.detachOnDeckEvents(),this.onDeckElem.remove(),this.onDeckElem=null,this.onDeck=!1);var t,i,s}},{key:"onObserver",value:function(e){e[0].isIntersecting?this.enableSlideshow():this.disableSlideshow()}},{key:"onKeydown",value:function(e){(e.keyCode===r.sd.TAB&&!e.shiftKey&&this.activeSlideIdx!==this.slideCount-1||e.keyCode===r.sd.TAB&&e.shiftKey&&this.activeSlideIdx>0)&&(e.preventDefault(),e.stopPropagation(),e.currentTarget.addEventListener(r.FP.KEYUP,this.onKeyup))}},{key:"onKeyup",value:function(e){if(e.currentTarget.removeEventListener(r.FP.KEYUP,this.onKeyup),e.keyCode===r.sd.TAB&&!e.shiftKey&&this.activeSlideIdx!==this.slideCount-1||e.keyCode===r.sd.TAB&&e.shiftKey&&this.activeSlideIdx>0){if(e.preventDefault(),e.stopPropagation(),this.inTransition)return;this.forceFocus=!0,this.inTransition=!0,this.setPendingSlide(e.shiftKey?N:x)}}},{key:"onAutoAdvanceClick",value:function(){this.stopped?this.startSlideshow():this.stopSlideshow()}},{key:"onControlClick",value:function(e){if(!this.inTransition){this.inTransition=!0;var t=e.currentTarget.dataset.controlDirection;this.setPendingSlide(t)}}},{key:"onOnDeckClick",value:function(){this.inTransition||(this.inTransition=!0,this.setPendingSlide(x))}},{key:"onSwipe",value:function(e){this.inTransition||(this.inTransition=!0,this.setPendingSlide(e))}},{key:"onSlideTransitionEnd",value:function(e){if(e.target===e.currentTarget){var t=this.slideElems[this.activeSlideIdx];if(t.removeEventListener(r.FP.TRANSITION_END,this.onSlideTransitionEnd),-1!==this.pendingSlideIdx){this.resetSlideTimer();var i=this.slideElems[this.pendingSlideIdx];this.activeSlideIdx=this.pendingSlideIdx,this.pendingSlideIdx=-1,this.setIndexElemValue(),i.addEventListener(r.FP.TRANSITION_END,this.onSlideTransitionEnd),i.classList.add(P),i.classList.add(M),t.classList.remove(P),this.onDeck&&this.onDeckIn()}else this.stopped?this.beginPausedSlideTimer():this.beginSlideTimer(),this.setTabIndex(),this.inTransition=!1}}},{key:"onTimerTransitionEnd",value:function(){this.slideTimerElems[this.activeSlideIdx].removeEventListener(r.FP.TRANSITION_END,this.onTimerTransitionEnd),this.inTransition=!0,this.setPendingSlide(x)}},{key:"handleSingleSlide",value:function(){this.controlsElem.remove(),this.slideTimerElems[0].classList.add(R)}},{key:"setTabIndex",value:function(){var e=this;this.slideElems.forEach((function(t,i){i===e.activeSlideIdx?(t.setAttribute(L,"0"),e.forceFocus&&(t.focus(),e.forceFocus=!1)):t.removeAttribute(L)}))}},{key:"startSlideshow",value:function(){this.beginSlideTimer(),this.autoAdvanceElem.classList.remove(C),this.autoAdvanceElem.classList.add(I),this.stopped=!1}},{key:"stopSlideshow",value:function(){this.beginPausedSlideTimer(),this.autoAdvanceElem.classList.remove(I),this.autoAdvanceElem.classList.add(C),this.stopped=!0}},{key:"enableSlideshow",value:function(){this.resetSlideTimer(),this.enableControls(),this.stopped?this.beginPausedSlideTimer():this.beginSlideTimer()}},{key:"disableSlideshow",value:function(){this.beginPausedSlideTimer(),this.disableControls()}},{key:"enableControls",value:function(){this.controlsElem.classList.remove(O),this.attachControlEvents(),this.attachAutoAdvanceEvents(),this.attachOnDeckEvents(),this.attachTouchEvents()}},{key:"disableControls",value:function(){this.controlsElem.classList.add(O),this.detachControlEvents(),this.detachAutoAdvanceEvents(),this.detachOnDeckEvents(),this.detachTouchEvents()}},{key:"beginSlideTimer",value:function(){var e=this.slideTimerElems[this.activeSlideIdx];e.classList.remove(R),0!==e.getBoundingClientRect().width?window.requestAnimationFrame(this.beginSlideTimer):(e.addEventListener(r.FP.TRANSITION_END,this.onTimerTransitionEnd),e.classList.add(B))}},{key:"beginPausedSlideTimer",value:function(){var e=this.slideTimerElems[this.activeSlideIdx];e.removeEventListener(r.FP.TRANSITION_END,this.onTimerTransitionEnd),e.classList.remove(B),e.classList.add(R)}},{key:"resetSlideTimer",value:function(){var e=this.slideTimerElems[this.activeSlideIdx];e.removeEventListener(r.FP.TRANSITION_END,this.onTimerTransitionEnd),e.classList.remove(B),e.classList.remove(R)}},{key:"setCountElemValue",value:function(){this.slideCountElem.textContent="".concat(this.slideCount<10?"0":"").concat(this.slideCount),this.controlsElem.classList.remove("class-page-maybach-section__slideshow-controls--hidden")}},{key:"setIndexElemValue",value:function(){this.slideIndexElem.textContent="".concat(this.activeSlideIdx+1<10?"0":"").concat(this.activeSlideIdx+1)}},{key:"setPendingSlide",value:function(e){this.slideTimerElems[this.activeSlideIdx].removeEventListener(r.FP.TRANSITION_END,this.onTimerTransitionEnd),e===x?this.pendingSlideIdx=(this.activeSlideIdx+1)%this.slideCount:e===N&&(this.pendingSlideIdx=(this.activeSlideIdx-1+this.slideCount)%this.slideCount),this.updateActiveSlide(),this.onDeck&&this.onDeckOut()}},{key:"updateActiveSlide",value:function(){var e=this.slideElems[this.activeSlideIdx];e.classList.remove(M),e.addEventListener(r.FP.TRANSITION_END,this.onSlideTransitionEnd)}},{key:"onDeckOut",value:function(){this.onDeckElem.classList.remove(D)}},{key:"onDeckIn",value:function(){var e=this,t=this.slideElems[(this.activeSlideIdx+1+this.slideCount)%this.slideCount],i=t.querySelector(_).dataset[T],s=t.querySelector(A).dataset[T],n=this.onDeckElem.querySelector(_),a=this.onDeckElem.querySelector(A);n.setAttribute("src",i),a.setAttribute("srcset",s),window.requestAnimationFrame((function(){e.onDeckElem.classList.add(D)}))}}]),e}(),q=i(21575),K=i(32477),Z=i(49356),V=i(4835),W={ClassModels:s.Z,Gallery:n.Z,InventoryPreferences:a.Z,MaybachClassHero:v,MaybachClassModels:k,MaybachClassSlideshow:F,ClassPageSubNav:q.Z,WaypointNav:K.Z,MultiMediaAsset:Z.Z,MultiMediaYouTube:V.Z}},35101:function(e,t,i){i.d(t,{Z:function(){return h}});var s=i(15671),n=i(43144),a=i(48218),o=i(61156),c="model-section__cta-view",l="model-section__specifications--open",r="aria-expanded",h=function(){function e(t){(0,s.Z)(this,e),this.element=t,this.init()}return(0,n.Z)(e,[{key:"init",value:function(){this.cacheDOM(),this.attachEvents()}},{key:"cacheDOM",value:function(){this.modelSection=document.querySelector(".".concat("model-section")),this.viewSpecsButtons=this.modelSection.querySelectorAll(".".concat(c))}},{key:"attachEvents",value:function(){var e=this;[].slice.call(this.viewSpecsButtons).forEach((function(t,i){e.viewSpecsButtons[i].addEventListener(a.FP.CLICK,e.drawerListener.bind(e))}))}},{key:"drawerListener",value:function(e){e.preventDefault();var t=e.target,i=(0,o.wr)(t,".".concat("model-section__item"));this.toggleDrawer(i)}},{key:"toggleDrawer",value:function(e){var t=e.querySelector(".".concat(c)),i=e.querySelector(".".concat("model-section__specifications"));return"true"===t.getAttribute(r)?(t.setAttribute(r,"false"),i.classList.remove(l)):(t.setAttribute(r,"true"),i.classList.add(l)),this}}]),e}()},21575:function(e,t,i){i.d(t,{Z:function(){return h}});var s=i(15671),n=i(43144),a=i(61156),o=i(48218),c=i(1945),l=i(98243),r={SMALL:61,XLARGE:81},h=function(){function e(t){(0,s.Z)(this,e),this.element=t,this.AMGNavToggle=null,this.init()}return(0,n.Z)(e,[{key:"init",value:function(){this.cacheDOM(),this.initStickyScroll(),this.initScrollToButtons(),this.attachEvents()}},{key:"initStickyScroll",value:function(){return new l.ScrollToSticky(this.element)}},{key:"initScrollToButtons",value:function(){var e=this;return[].slice.call(this.element.querySelectorAll(".scroll-button")).map((function(t){return new c.Z(t,e.getStickyNavOffset.bind(e))}))}},{key:"getStickyNavOffset",value:function(){var e=this.subNavWrapper,t=r[a.sp.gte(a.sp.SIZES.XLARGE)?"XLARGE":"SMALL"];return a.MB.getHeight(e)+t}},{key:"cacheDOM",value:function(){this.AMGNavToggle=document.querySelector(".".concat("amg-toggle")),this.AMGButton=this.element.querySelector(".".concat("sub-nav__item--amg")),this.subNavWrapper=document.querySelector(".".concat("sub-nav__wrapper"))}},{key:"attachEvents",value:function(){window.addEventListener(o.FP.SCROLL,(0,a.Ds)(this.onScroll.bind(this),10))}},{key:"onScroll",value:function(){this.AMGNavToggle&&this.AMGButton.classList[(0,a.io)(this.AMGNavToggle)?"add":"remove"]("sub-nav__item--active")}}]),e}()},32477:function(e,t,i){i.d(t,{Z:function(){return m}});var s=i(15671),n=i(43144),a=i(1945),o=i(10852),c=i(30168),l=i(61156),r=i(61020);function h(){var e=(0,c.Z)(['\n    <ul class="waypoint-nav__container sticky-nav__container">\n        ',"\n    </ul>\n"]);return h=function(){return e},e}var d="waypoint-nav__link--active",u="waypoint-nav__link--active-with-anim",v={SMALL:61,XLARGE:81},m=function(){function e(t){(0,s.Z)(this,e),this.element=t,this.waypointSections=null,this.waypointLinks=null,this.waypointOffset=null,this.init()}return(0,n.Z)(e,[{key:"init",value:function(){this.setBindings(),this.cacheDOM(),this.attachEvents(),this.populateTemplate(),this.initScrollButtons(),this.initWaypoints()}},{key:"setBindings",value:function(){this.getOffset=this.getOffset.bind(this),this.onObserver=this.onObserver.bind(this)}},{key:"cacheDOM",value:function(){this.waypointSections=document.querySelectorAll("[".concat("data-waypoint","]")),this.waypointOffset=document.querySelectorAll("[".concat("data-waypoint-offset","]"))}},{key:"attachEvents",value:function(){this.vObserverTop=l.sw.addObserver(this.element,this.onObserver,{threshold:0,root:this.element.parentElement,rootMargin:"-100px 0px -150px"})}},{key:"populateTemplate",value:function(){var e=Array.prototype.slice.call(this.waypointSections);e=e.map((function(e){var t={};return t.waypointLabel=e.dataset.waypointLabel,t.waypointKey=e.dataset.waypoint,t})),this.element.insertAdjacentHTML("beforeEnd",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,l.dy)(h(),(0,r.Z)(e)).trim()}(e))}},{key:"onObserver",value:function(e){var t=e[0].isIntersecting,i=e[0].boundingClientRect.top-e[0].intersectionRect.top,s=t&&i<=0;this.element.classList.toggle("show",s)}},{key:"initWaypoints",value:function(){var e=this;return[].slice.call(this.waypointSections).map((function(t){var i=new o.Z(t,{callback:e.waypointCallback.bind(e)},!1,e.getOffset,!0);return Object.assign(t,{waypoint:i})}))}},{key:"initScrollButtons",value:function(){var e=this;return this.waypointLinks=this.element.querySelectorAll(".".concat("waypoint-nav__link")),[].slice.call(this.waypointLinks).map((function(t){return new a.Z(t,e.getOffset)}))}},{key:"getOffset",value:function(){var e=0,t=v[l.sp.gte(l.sp.SIZES.XLARGE)?"XLARGE":"SMALL"];return[].slice.call(this.waypointOffset).forEach((function(i){e=l.MB.getHeight(i)+t})),e}},{key:"waypointCallback",value:function(e){[].slice.call(this.waypointLinks).map((function(e){return e.classList.remove(d),e.classList.remove(u),e})).filter((function(t){return t.hash.replace("#","")===e.dataset.waypoint})).map((function(e){return l.sp.getState().small||l.sp.getState().large||e.parentElement.querySelector(":hover")!==e?e.classList.add(u):e.classList.add(d),e}))}}]),e}()},61020:function(e,t){t.Z=function(){return"\n    ".concat((arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){return'\n        <li>\n            <a class="waypoint-nav__link" href="#'.concat(e.waypointKey,'"\n               data-analytics-trigger="').concat(e.dataAnalyticsTrigger?e.dataAnalyticsTrigger:"",'">\n                <span class="waypoint-nav__label">').concat(e.waypointNumber?"".concat(e.waypointNumber):"",'\n                    <span class="waypoint-nav__label-inner" data-qa-id="waypoint-nav-item-label">').concat(e.waypointLabel,'</span>\n                </span>\n                <span class="waypoint-nav__dot"></span>\n            </a>\n        </li>\n    ')})).join(""))}}}]);
//# sourceMappingURL=e1e65e7e4eff44ae0b71.bundle.js.map