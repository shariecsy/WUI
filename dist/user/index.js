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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IconList = React.createClass({
	displayName: "IconList",

	getDefaultProps: function getDefaultProps() {
		return {
			listData: []
		};
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "icon-list" },
			React.createElement(
				"ul",
				{ className: "am-list" },
				this.props.listData.map(function (obj, index) {
					var leftCls = "icon-list-left " + obj.leftCls;
					var rightCls = "icon-list-right am-icon-angle-right";
					return React.createElement(
						"li",
						{ className: "am-g", key: index, onClick: obj.clickHandler },
						React.createElement("span", { className: leftCls }),
						React.createElement(
							"span",
							{ className: "icon-list-content" },
							obj.title
						),
						React.createElement("span", { className: rightCls })
					);
				})
			)
		);
	}
});

module.exports = IconList;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UserInfo = React.createClass({
	displayName: 'UserInfo',

	getInitialState: function getInitialState() {
		return {
			iconSrc: '../images/camera.png',
			accountNo: '138****8888'
		};
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'user-info-block' },
			React.createElement('img', { className: 'user-info-block-left am-circle', width: '60px', height: '60px', src: this.state.iconSrc }),
			React.createElement(
				'span',
				{ className: 'user-info-block-center' },
				'\u8D26\u53F7: ',
				this.state.accountNo
			),
			React.createElement('i', { className: 'user-info-block-right am-icon-angle-right' })
		);
	}
});

module.exports = UserInfo;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by william on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Footer = __webpack_require__(2);
var Container = __webpack_require__(0);
var MsgList = __webpack_require__(3);
var UserInfo = __webpack_require__(10);
var IconList = __webpack_require__(6);

var Root = React.createClass({
	displayName: 'Root',

	getDefaultProps: function getDefaultProps() {
		return {
			iconList: [{
				leftCls: 'am-icon-users',
				title: '家人管理',
				clickHandler: function clickHandler() {}
			}, {
				leftCls: 'am-icon-credit-card',
				title: '我的就诊卡',
				clickHandler: function clickHandler() {}
			}, {
				leftCls: 'am-icon-bed',
				title: '我的住院号',
				clickHandler: function clickHandler() {}
			}],
			iconList1: [{
				leftCls: 'am-icon-calendar-check-o',
				title: '挂号记录',
				clickHandler: function clickHandler() {}
			}, {
				leftCls: 'am-icon-wpforms',
				title: '缴费记录',
				clickHandler: function clickHandler() {}
			}, {
				leftCls: 'am-icon-bookmark-o',
				title: '我的订单',
				clickHandler: function clickHandler() {}
			}, {
				leftCls: 'am-icon-delicious',
				title: '医保专区',
				clickHandler: function clickHandler() {}
			}],
			iconList2: [{
				leftCls: 'am-icon-credit-card',
				title: '我的钱包',
				clickHandler: function clickHandler() {}
			}, {
				leftCls: 'am-icon-bed',
				title: '收藏医生',
				clickHandler: function clickHandler() {}
			}, {
				leftCls: 'am-icon-users',
				title: '更多服务',
				clickHandler: function clickHandler() {}
			}],
			iconList3: [{
				leftCls: 'am-icon-gear',
				title: '设置',
				clickHandler: function clickHandler() {}
			}]
		};
	},
	componentDidMount: function componentDidMount() {},
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
					React.createElement(
						'h1',
						{ className: 'am-header-title' },
						'\u6211\u7684'
					)
				)
			),
			React.createElement(
				Container,
				null,
				React.createElement(UserInfo, null),
				React.createElement(IconList, { listData: this.props.iconList }),
				React.createElement(IconList, { listData: this.props.iconList1 }),
				React.createElement(IconList, { listData: this.props.iconList2 }),
				React.createElement(IconList, { listData: this.props.iconList3 })
			),
			React.createElement(Footer, { selectIndex: '2' })
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })
/******/ ]);