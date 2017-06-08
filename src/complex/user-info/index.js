var UserInfo = React.createClass({
	render: function() {
		return(
			<div className="user-info-block">
		   		<div className="am-list-news-bd">
					  <ul className="am-list">
					      <li className="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left user-info-block">
					        <div className="am-u-sm-4 am-list-thumb">
					            <img className="am-circle" width="60px" height="60px" src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"/>
					        </div>			
					        <div className=" am-u-sm-7 am-list-thumb">
					            <h4 className="am-list-item-hd">账号: 138****8888</h4>						
					        </div>
					        <div className="am-u-sm-1">
					        		<i className="am-icon-chevron-right am-icon-fw"/>
					        </div>
					      </li>
  					</ul>
  				</div>
            	</div>
		)
	}
})

module.exports = UserInfo;