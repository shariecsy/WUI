var UserInfo = React.createClass({
	getInitialState:function(){
		 return {
		 		iconSrc:'../images/camera.png',
		 		accountNo:'138****8888'
		 }
	},
	render: function() {
		return(
			<div className="user-info-block">
				<img className="user-info-block-left am-circle" width="60px" height="60px" src={this.state.iconSrc}/>
				<span className="user-info-block-center">账号: {this.state.accountNo}</span>						
				<i className="user-info-block-right am-icon-angle-right"></i>
            	</div>
		)
	}
})

module.exports = UserInfo;