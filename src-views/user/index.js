/**
 * Created by william on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Dock = require('../../src/complex/dock');
var Container = require('../../src/complex/container');
var MsgList = require('../../src/complex/msg-list');
var UserInfo = require('../../src/complex/user-info');
var IconList = require('../../src/complex/icon-list');

var Root = React.createClass({
	getDefaultProps:function(){
		return {
			iconList:[
				{
					leftCls:'am-icon-users',
					title:'家人管理',
					clickHandler:function(){}
				},
				{
					leftCls:'am-icon-credit-card',
					title:'我的就诊卡',
					clickHandler:function(){}
				},
				{
					leftCls:'am-icon-bed',
					title:'我的住院号',
					clickHandler:function(){}
				}
			],
			iconList1:[
				{
					leftCls:'am-icon-calendar-check-o',
					title:'挂号记录',
					clickHandler:function(){}
				},
				{
					leftCls:'am-icon-wpforms',
					title:'缴费记录',
					clickHandler:function(){}
				},
				{
					leftCls:'am-icon-bookmark-o',
					title:'我的订单',
					clickHandler:function(){}
				},
				{
					leftCls:'am-icon-delicious',
					title:'医保专区',
					clickHandler:function(){}
				}
			],
			iconList2:[
				{
					leftCls:'am-icon-credit-card',
					title:'我的钱包',
					clickHandler:function(){}
				},
				{
					leftCls:'am-icon-bed',
					title:'收藏医生',
					clickHandler:function(){}
				},
				{
					leftCls:'am-icon-users',
					title:'更多服务',
					clickHandler:function(){}
				}
			],
			iconList3:[
				{
					leftCls:'am-icon-gear',
					title:'设置',
					clickHandler:function(){}
				}
			]
		}
	},
	componentDidMount:function(){
		
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.CenterItem>
						<h1 className="am-header-title">我的</h1>
					</Header.CenterItem>
				</Header>
			  
			   <Container>
			   		<UserInfo/>
			   		<IconList listData={this.props.iconList}/>
			   		<IconList listData={this.props.iconList1}/>
			   		<IconList listData={this.props.iconList2}/>
			   		<IconList listData={this.props.iconList3}/>
				</Container>
				<Dock>
					<Dock.Item>
						<a href="../index/index.html" className="">
                            <span className="am-icon-home"></span>
                            <span className="am-navbar-label">首页</span>
                        </a>
					</Dock.Item>
					<Dock.Item>
						<a href="../msg/index.html" className="">
                            <span className="am-icon-comments"></span>
                            <span className="am-navbar-label">消息</span>
                        </a>
					</Dock.Item>
					<Dock.Item>
						<a href="javascript:void(0)" className="am-active">
                            <span className="am-icon-user"></span>
                            <span className="am-navbar-label">我的</span>
                        </a>
					</Dock.Item>
				</Dock>
            </div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));