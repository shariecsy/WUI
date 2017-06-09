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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by william on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Footer = __webpack_require__(2);
var Container = __webpack_require__(0);
var MsgList = __webpack_require__(3);

var Root = React.createClass({
	displayName: 'Root',

	componentDidMount: function componentDidMount() {
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
						'\u6D88\u606F\u4E2D\u5FC3'
					)
				)
			),
			React.createElement(
				Container,
				null,
				React.createElement(MsgList, { ref: 'msglist' })
			),
			React.createElement(Footer, { selectIndex: '1' })
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })
/******/ ]);