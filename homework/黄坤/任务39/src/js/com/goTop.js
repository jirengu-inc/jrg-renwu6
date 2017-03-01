define(['jquery'],function($){

	function goTop(id){
		this.id = id || 'go-top';
		this.init();
	}

	goTop.prototype = {
		init:function(){
			var $el = $('#'+this.id);
			if ($el.length===0) {
				this.$el = $('<div id="'+this.id+'">回到顶部</div>');
				$('body').append(this.$el);
			}else{
				this.$el = $el;
			}
			this.$ct = $(document);
			this.bind();
		},
		bind:function(){
			var _this = this;
			this.$ct.on('scroll',function(){
				_this.getShow();
			})
			this.$el.on('click', function() {
				_this.goToTop();
			});
		},
		getShow:function(){
			var scrollTop = this.$ct.scrollTop();
			if (scrollTop>100) {
				this.$el.show();
			}else{
				this.$el.hide();
			}

		},
		goToTop:function(){
			this.$ct.scrollTop(0);
		}
	}
	return goTop;
})