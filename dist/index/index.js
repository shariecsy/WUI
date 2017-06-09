/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Container = React.createClass({
	displayName: "Container",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "main-body" },
			this.props.children
		);
	}
});

module.exports = Container;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Header = React.createClass({
	displayName: "Header",

	render: function render() {
		return React.createElement(
			"header",
			{ "data-am-widget": "header", className: "am-header am-header-app am-header-fixed" },
			this.props.children
		);
	}
});

Header.LeftItem = React.createClass({
	displayName: "LeftItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-left am-header-nav" },
			this.props.children
		);
	}
});

Header.CenterItem = React.createClass({
	displayName: "CenterItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-nav-center" },
			this.props.children
		);
	}
});

Header.RightItem = React.createClass({
	displayName: "RightItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-right am-header-nav" },
			this.props.children
		);
	}
});

module.exports = Header;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Dock = __webpack_require__(4);
var Footer = React.createClass({
	displayName: 'Footer',

	getInitialState: function getInitialState() {
		return {
			selectIndex: this.props.selectIndex
		};
	},
	_handleClick: function _handleClick(key, url) {
		if (key == this.props.selectIndex) {
			return;
		} else {
			window.location = url;
		}
	},
	render: function render() {
		return React.createElement(
			Dock,
			null,
			React.createElement(
				Dock.Item,
				{ clickHandler: this._handleClick.bind(this, '0', "../index/index.html") },
				React.createElement(
					'a',
					{ href: 'javascript:void(0)', className: this.state.selectIndex == 0 ? "am-active" : "" },
					React.createElement('span', { className: 'am-icon-home' }),
					React.createElement(
						'span',
						{ className: 'am-navbar-label' },
						'\u9996\u9875'
					)
				)
			),
			React.createElement(
				Dock.Item,
				{ clickHandler: this._handleClick.bind(this, '1', "../msg/index.html") },
				React.createElement(
					'a',
					{ href: 'javascript:void(0)', className: this.state.selectIndex == 1 ? "am-active" : "" },
					React.createElement('span', { className: 'am-icon-comments' }),
					React.createElement(
						'span',
						{ className: 'am-navbar-label' },
						'\u6D88\u606F'
					)
				)
			),
			React.createElement(
				Dock.Item,
				{ clickHandler: this._handleClick.bind(this, '2', "../user/index.html") },
				React.createElement(
					'a',
					{ href: 'javascript:void(0)', className: this.state.selectIndex == 2 ? "am-active" : "" },
					React.createElement('span', { className: 'am-icon-user' }),
					React.createElement(
						'span',
						{ className: 'am-navbar-label' },
						'\u6211\u7684'
					)
				)
			)
		);
	}
});

module.exports = Footer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MsgList = React.createClass({
	displayName: "MsgList",

	getInitialState: function getInitialState() {
		return {
			listData: []
		};
	},
	setListData: function setListData(data) {
		this.setState({
			listData: data
		});
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "tab-list-wrap" },
			React.createElement(
				"div",
				{ className: "am-list-news-bd" },
				React.createElement(
					"ul",
					{ className: "am-list" },
					this.state.listData.map(function (obj, index) {
						return React.createElement(
							"li",
							{ className: "am-g am-list-item-desced", key: index },
							React.createElement(
								"div",
								{ className: "am-cf" },
								React.createElement(
									"span",
									{ className: "tab-list-left am-fl" },
									obj.title
								),
								React.createElement(
									"span",
									{ className: "am-list-item-text am-fr" },
									obj.btime
								)
							),
							React.createElement(
								"div",
								{ className: "tab-list-content" },
								obj.content
							),
							React.createElement(
								"div",
								{ className: "am-list-item-text" },
								obj.subtitle
							)
						);
					})
				)
			)
		);
	}
});

module.exports = MsgList;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Dock = React.createClass({
	displayName: "Dock",

	_handleClick: function _handleClick(action) {
		console.log(action);
	},
	render: function render() {
		var length = this.props.children.length;
		var avgCls = 'am-navbar-nav am-cf am-avg-sm-' + length;
		return React.createElement(
			"div",
			{ "data-am-widget": "navbar", className: "am-navbar am-cf am-navbar-app " },
			React.createElement(
				"ul",
				{ className: avgCls },
				this.props.children
			)
		);
	}
});

Dock.Item = React.createClass({
	displayName: "Item",

	render: function render() {
		return React.createElement(
			"li",
			{ onClick: this.props.clickHandler },
			this.props.children
		);
	}
});

module.exports = Dock;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ButtonGroup = React.createClass({
	displayName: "ButtonGroup",

	getDefaultProps: function getDefaultProps() {
		return {
			avgcls: 'am-avg-sm-4'
		};
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "icon-btn-nav-block" },
			React.createElement(
				"ul",
				{ className: this.props.avgcls },
				this.props.children
			)
		);
	}
});

ButtonGroup.Button = React.createClass({
	displayName: "Button",

	render: function render() {
		var _clsname = "am-icon-btn am-warning icon-btn " + this.props.icon;
		return React.createElement(
			"li",
			{ className: "box", onClick: this.props.clickHandler },
			React.createElement(
				"div",
				null,
				React.createElement("span", { className: _clsname }),
				React.createElement(
					"span",
					{ className: "icon-btn-title" },
					this.props.title
				)
			)
		);
	}
});

ButtonGroup.Thumbnail = React.createClass({
	displayName: "Thumbnail",

	render: function render() {
		var _clsname = "am-icon-btn am-warning icon-btn " + this.props.icon;
		return React.createElement(
			"li",
			{ className: "box", onClick: this.props.clickHandler },
			React.createElement(
				"div",
				null,
				React.createElement("span", { className: _clsname }),
				React.createElement(
					"div",
					{ className: "icon-btn-title-left" },
					this.props.title
				),
				React.createElement(
					"div",
					{ className: "icon-btn-title-left-subtitle" },
					this.props.subtitle
				)
			)
		);
	}
});

module.exports = ButtonGroup;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ButtonGroup = __webpack_require__(5);
var ProductList = React.createClass({
	displayName: 'ProductList',

	getDefaultProps: function getDefaultProps() {
		return {
			avgcls: 'am-avg-sm-3'
		};
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ 'data-am-widget': 'titlebar', className: 'am-titlebar am-titlebar-default' },
				React.createElement(
					'h2',
					{ className: 'am-titlebar-title ' },
					React.createElement(
						'span',
						{ className: 'am-titlebar-title-font' },
						this.props.title
					)
				),
				this.props.moreTitle != undefined ? React.createElement(
					'nav',
					{ className: 'am-titlebar-nav' },
					React.createElement(
						'a',
						{ onClick: this.props.moreHandler },
						this.props.moreTitle,
						' \xBB'
					)
				) : React.createElement('div', null)
			),
			React.createElement(
				ButtonGroup,
				{ avgcls: this.props.avgcls },
				this.props.children
			)
		);
	}
});

ProductList.Item = React.createClass({
	displayName: 'Item',

	render: function render() {
		return React.createElement(ButtonGroup.Thumbnail, { icon: this.props.icon, title: this.props.title, subtitle: this.props.subtitle, clickHandler: this.props.clickHandler });
	}
});

ProductList.Button = React.createClass({
	displayName: 'Button',

	render: function render() {
		return React.createElement(ButtonGroup.Button, { icon: this.props.icon, title: this.props.title, clickHandler: this.props.clickHandler });
	}
});

module.exports = ProductList;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Slider = React.createClass({
	displayName: 'Slider',

	getDefaultProps: function getDefaultProps() {
		return {
			isShowButton: true,
			isShowPagination: true,
			autoplay: 5000,
			isLoop: true,
			direction: 'horizontal'
		};
	},
	componentDidMount: function componentDidMount() {
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
		});
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'swiper-container' },
			React.createElement(
				'div',
				{ className: 'swiper-wrapper' },
				this.props.children
			),
			this.props.isShowPagination === true ? React.createElement('div', { className: 'swiper-pagination' }) : React.createElement('div', null),
			this.props.isShowButton === true ? React.createElement('div', { className: 'swiper-button-prev' }) : React.createElement('div', null),
			this.props.isShowButton === true ? React.createElement('div', { className: 'swiper-button-next' }) : React.createElement('div', null),
			React.createElement('div', { className: 'swiper-scrollbar' })
		);
	}
});

Slider.Item = React.createClass({
	displayName: 'Item',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'swiper-slide' },
			this.props.children
		);
	}
});

module.exports = Slider;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MsgList = __webpack_require__(3);
var TabBar = React.createClass({
	displayName: 'TabBar',

	getInitialState: function getInitialState() {
		return {
			tabClasses: { a: 'am-active', b: '', c: '' }
		};
	},
	_handleClick: function _handleClick(index) {
		var cls = this.state.tabClasses;
		for (var i in cls) {
			if (i == index) {
				cls[i] = 'am-active';
			} else {
				cls[i] = '';
			}
		}
		this.setState({ tabClasses: cls });
		this.fetchList(index);
	},
	fetchList: function fetchList(index) {
		//获取记录列表
		var data = [{
			id: 0,
			title: '绑卡成功',
			btime: '2017-01-01 12:01:01',
			content: '广州市XX医院',
			subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
		}, {
			id: 0,
			title: '绑卡成功',
			btime: '2017-01-01 12:01:01',
			content: '广州市XX医院',
			subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
		}];
		this.refs.msglist.setListData(data);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ 'data-am-widget': 'tabs', className: 'am-tabs am-tabs-d2' },
			React.createElement(
				'ul',
				{ className: 'am-tabs-nav am-cf' },
				React.createElement(
					'li',
					{ ref: 'a', className: this.state.tabClasses.a },
					React.createElement(
						'a',
						{ href: 'javascript:void(0)', onClick: this._handleClick.bind(this, 'a') },
						'\u6700\u65B0\u6D88\u606F'
					)
				),
				React.createElement(
					'li',
					{ ref: 'b', className: this.state.tabClasses.b },
					React.createElement(
						'a',
						{ href: 'javascript:void(0)', onClick: this._handleClick.bind(this, 'b') },
						'\u66FE\u6302\u53F7\u533B\u9662'
					)
				),
				React.createElement(
					'li',
					{ ref: 'c', className: this.state.tabClasses.c },
					React.createElement(
						'a',
						{ href: 'javascript:void(0)', onClick: this._handleClick.bind(this, 'c') },
						'\u66FE\u6302\u53F7\u533B\u751F'
					)
				)
			),
			React.createElement(MsgList, { ref: 'msglist' })
		);
	}
});

module.exports = TabBar;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by william on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Footer = __webpack_require__(2);
var Container = __webpack_require__(0);
var Slider = __webpack_require__(8);
var ButtonGroup = __webpack_require__(5);
var ProductList = __webpack_require__(7);
var TabBar = __webpack_require__(9);

var Root = React.createClass({
	displayName: 'Root',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				Header,
				null,
				React.createElement(
					Header.CenterItem,
					null,
					React.createElement('input', { type: 'text', className: 'am-form-field am-round', placeholder: '\u641C\u7D22\u533B\u751F' })
				),
				React.createElement(
					Header.RightItem,
					null,
					React.createElement(
						'a',
						{ href: 'javascript:void(0);', className: '' },
						React.createElement('i', { className: 'am-header-icon am-icon-minus-square-o' })
					)
				)
			),
			React.createElement(
				Container,
				null,
				React.createElement(
					Slider,
					{ isShowButton: false },
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-1.jpg' })
					),
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-2.jpg' })
					),
					React.createElement(
						Slider.Item,
						null,
						React.createElement('img', { src: 'http://s.amazeui.org/media/i/demos/bing-3.jpg' })
					)
				),
				React.createElement(
					ButtonGroup,
					null,
					React.createElement(ButtonGroup.Button, { icon: 'am-icon-warning', title: '\u6302\u53F7' }),
					React.createElement(ButtonGroup.Button, { icon: 'am-icon-warning', title: '\u6302\u53F7' }),
					React.createElement(ButtonGroup.Button, { icon: 'am-icon-warning', title: '\u6302\u53F7' }),
					React.createElement(ButtonGroup.Button, { icon: 'am-icon-warning', title: '\u6302\u53F7' }),
					React.createElement(ButtonGroup.Button, { icon: 'am-icon-warning', title: '\u6302\u53F7' }),
					React.createElement(ButtonGroup.Button, { icon: 'am-icon-warning', title: '\u6302\u53F7' }),
					React.createElement(ButtonGroup.Button, { icon: 'am-icon-warning', title: '\u6302\u53F7' })
				),
				React.createElement(
					ProductList,
					{ title: '\u7F51\u4E0A\u836F\u5E97\uFF08\u652F\u6301\u533B\u4FDD\u5728\u7EBF\u652F\u4ED8\uFF09', moreTitle: '\u67E5\u770B\u5168\u90E8' },
					React.createElement(ProductList.Item, { icon: 'am-icon-warning', title: '\u8FDC\u65B9\u6709\u4E00\u4E2A\u5730\u65B9\u90A3\u91CC\u79CD\u6709\u6211\u4EEC\u7684\u68A6\u60F3', subtitle: '\xA517.5' }),
					React.createElement(ProductList.Item, { icon: 'am-icon-warning', title: '\u8FDC\u65B9\u6709\u4E00\u4E2A\u5730\u65B9\u90A3\u91CC\u79CD\u6709\u6211\u4EEC\u7684\u68A6\u60F3', subtitle: '\xA517.5' }),
					React.createElement(ProductList.Item, { icon: 'am-icon-warning', title: '\u8FDC\u65B9\u6709\u4E00\u4E2A\u5730\u65B9\u90A3\u91CC\u79CD\u6709\u6211\u4EEC\u7684\u68A6\u60F3', subtitle: '\xA517.5' })
				),
				React.createElement(
					ProductList,
					{ title: '\u5065\u5EB7\u670D\u52A1', avgcls: 'am-avg-sm-4' },
					React.createElement(ProductList.Button, { icon: 'am-icon-warning', title: '\u533B\u4FDD\u4E13\u533A' }),
					React.createElement(ProductList.Button, { icon: 'am-icon-warning', title: '\u5C0F\u718A\u4EE3\u529E' }),
					React.createElement(ProductList.Button, { icon: 'am-icon-warning', title: '\u533B\u751F\u76F4\u64AD' }),
					React.createElement(ProductList.Button, { icon: 'am-icon-warning', title: '\u54A8\u8BE2\u533B\u751F' }),
					React.createElement(ProductList.Button, { icon: 'am-icon-warning', title: '\u5065\u5EB7\u79D8\u4E66' })
				),
				React.createElement(TabBar, null)
			),
			React.createElement(Footer, { selectIndex: '0' })
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })
/******/ ]);