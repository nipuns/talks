YUI.add("upstage-keyboard",function(a){a.Plugin.UpstageKeyboard=a.Base.create("upstage-keyboard",a.Plugin.Base,[],{initializer:function(b){var c=this.get("host");c.publish("keydown",{emitFacade:true});this.onHostEvent("keydown",a.bind("keydown",this));a.one(a.config.doc).on("key",a.bind("fire",c,"keydown"),"down:");},destructor:function(b){a.one(a.config.doc).detach("key",a.bind("fire",this.get("host"),"keydown"));},keydown:function(c){var b=this.get("host");var d=true;switch(c.keyCode){case 32:case 34:case 39:case 40:b.fire("warp",1);break;case 33:case 37:case 38:b.fire("warp",-1);break;case 36:b.fire("navigate",1);break;case 35:b.fire("navigate",9999);break;default:d=false;break;}if(d){c.halt();}}},{NS:"keyboard"});},"@VERSION@",{requires:["upstage-slideshow","base-build","node","event"]});