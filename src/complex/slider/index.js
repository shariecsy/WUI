var Slider = React.createClass({
	getDefaultProps:function(){
		return{
			isShowButton:true,
			isShowPagination:true,
			autoplay:5000,
			isLoop:true,
			direction:'horizontal'
		}
	},
	componentDidMount: function() {
		var mySwiper = new Swiper('.swiper-container', {
			// Optional parameters
			direction: this.props.direction,
			loop: this.props.isLoop,

			// If we need pagination
			pagination: '.swiper-pagination',

			// Navigation arrows
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',

			// And if we need scrollbar
			scrollbar: '.swiper-scrollbar',
			autoplay: this.props.autoplay
		})
	},
	render:function(){
		return (
			<div className="swiper-container">
	                    <div className="swiper-wrapper">             
	                        {this.props.children}
	                    </div>
	                    {
	                    		(this.props.isShowPagination===true)?(<div className="swiper-pagination"></div>):(<div></div>)	
	                    	}
	                    	{	
	                    		(this.props.isShowButton===true)?(<div className="swiper-button-prev"></div>):(<div></div>)
	                    	}
	                    	{
	                    		(this.props.isShowButton===true)?(<div className="swiper-button-next"></div>):(<div></div>)	                    
	                    }
	                    <div className="swiper-scrollbar"></div>
	        </div>
		)
	}
});

Slider.Item = React.createClass({
	render:function(){
		return (
			<div className="swiper-slide">
				{this.props.children}
			</div>
		)
	}
})

module.exports = Slider;
