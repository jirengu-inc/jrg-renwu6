    Exposure = (function(){
        var flag = true;

    	function one($target,handler){
    		if (isShow($target) && flag ) {
    			handler.call($target);
    			flag = false;
    		}
    	}

    	function bind($target,handler){
    		if (isShow($target)) {
    			handler.call($target);
    		}
    	}
    	function isShow($el){
    		var scrollH = $(document).scrollTop(),
    			winH = $(window).height(),
    			Top = $el.offset().top;
    		return (Top < scrollH + winH) ? true : false;
    	}
    	
    	return {
    		one: one,
    		bind: bind
    	}
    })();


// Exposure = (function(){
// 	var flag;
// 	var exposure = {
// 		bind:function(target,callback){
// 			if (exposure.isShow(target)) {
// 				typeof callback === 'function'? callback.call(target):console.log('请传入函数')
// 			}
// 		},

// 		one:function(target,callback){
// 			if (!flag) {
// 				if(exposure.isShow(target)){
// 					typeof callback === 'function'? callback.call(target):console.log('请传入函数')
// 					flag = true;
// 				}
// 			}		
// 		},

// 		isShow:function(node){
// 			var scrollTop = $(window).scrollTop(),
// 				nodeH = node.offset().top,
// 				windowH = $(window).height();
// 			if (scrollTop + windowH > nodeH ) {
// 				return true;
// 			}else{
// 				return false;
// 			}
// 		}
// 	}
// 	return exposure;
// })();
