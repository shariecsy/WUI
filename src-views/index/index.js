/**
 * Created by william on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Dock = require('../../src/complex/dock');
var Container = require('../../src/complex/container');
var Slider = require('../../src/complex/slider');
var ButtonGroup = require('../../src/complex/button-group');
var ProductList = require('../../src/complex/product-list');
var TabBar = require('../../src/complex/tabbar');

var Root = React.createClass({
	render: function() {
		return(
			<div>
				<Header>
					<Header.CenterItem>
						<input type="text" className="am-form-field am-round" placeholder="搜索医生"/>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="javascript:void(0);" className="">
                            <i className="am-header-icon am-icon-minus-square-o"></i>
                        </a>
					</Header.RightItem>
				</Header>
			  
			   <Container>
			   	   <Slider isShowButton={false}>
			   	   		<Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/></Slider.Item>
			   	   		<Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/></Slider.Item>
			   	   		<Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/></Slider.Item>
			   	   </Slider>
					
				   <ButtonGroup>
				   		<ButtonGroup.Button icon="am-icon-warning" title="挂号"/>
				   		<ButtonGroup.Button icon="am-icon-warning" title="挂号"/>
				   		<ButtonGroup.Button icon="am-icon-warning" title="挂号"/>
				   		<ButtonGroup.Button icon="am-icon-warning" title="挂号"/>
				   		<ButtonGroup.Button icon="am-icon-warning" title="挂号"/>
				   		<ButtonGroup.Button icon="am-icon-warning" title="挂号"/>
				   		<ButtonGroup.Button icon="am-icon-warning" title="挂号"/>
				   </ButtonGroup>
	            	   
	            	   <ProductList title="网上药店（支持医保在线支付）" moreTitle="查看全部">
	            	   		<ProductList.Item icon="am-icon-warning" title="远方有一个地方那里种有我们的梦想" subtitle="¥17.5"/>
	            	   		<ProductList.Item icon="am-icon-warning" title="远方有一个地方那里种有我们的梦想" subtitle="¥17.5"/>
	            	   		<ProductList.Item icon="am-icon-warning" title="远方有一个地方那里种有我们的梦想" subtitle="¥17.5"/>	            	  
	            	   </ProductList>
	            	   <ProductList title="健康服务" 	avgcls="am-avg-sm-4">
	            	   		<ProductList.Button icon="am-icon-warning" title="医保专区" />
	            	   		<ProductList.Button icon="am-icon-warning" title="小熊代办" />
	            	   		<ProductList.Button icon="am-icon-warning" title="医生直播" />
	            	   		<ProductList.Button icon="am-icon-warning" title="咨询医生" />
	            	   		<ProductList.Button icon="am-icon-warning" title="健康秘书" />
	            	   </ProductList>                
	                <TabBar/>
				</Container>
				<Dock>
					<Dock.Item>
						<a href="javascript:void(0)" className="am-active">
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
						<a href="../user/index.html" className="">
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