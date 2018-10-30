(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control19_s257i7: function (elem) {
      if (!elem) {
        return [];
      }
      if (elem) {
        var data = {
          tabs: [],
          tabsNum: [],
          key: {}
        };
        var _tabs = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');
        [].map.call(_tabs, function (item, i) {
          var key = item.parentElement.classList.contains('mini-tab-active');
          var num = item.parentElement.getAttribute("index");
          if (item.innerHTML != '流程监控') {
            if (key == true) {
              data.tabs.push(item.innerHTML);
              data.tabsNum.push(num);
              data.key = i;
            } else {
              data.tabs.push(item.innerHTML);
              data.tabsNum.push(num);
            }
          }
        });
        return data;
      }
    },
    doAction_uiControl20_HR4ggS: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;
        if (d[0] == 'ysp-tabs') {
          var _tab = elem.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');
          _tab[d[1]].click();
        }
        ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl20_HR4ggS: function () {
      var selfTemplate = "import {Tabs} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n      show:this.props.customData.key\n    }\n  }\n   componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper')\n    \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n    if(this.state.show!=e.dataset.id){\n    \tthis.setState({\n      \tshow: parseInt(e.dataset.id)\n    \t})\n     if(handler) {                                    \n       handler({\n        data:[e.className,e.dataset.id],\n        eventType:'click'                         \n       })\n     \t}\n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    if(data){\n    \treturn(\n      \t<div ref=\"outerWrapper\">\n      \t\t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t</div>\n    \t)  \n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }  \n  }\n} ";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: _this.props.customData.key\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector(\'.view-wrapper\');\n\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \'tabsClick\',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (this.state.show != e.dataset.id) {\n        this.setState({\n          show: parseInt(e.dataset.id)\n        });\n        if (handler) {\n          handler({\n            data: [e.className, e.dataset.id],\n            eventType: \'click\'\n          });\n        }\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          \'div\',\n          { ref: \'outerWrapper\' },\n          React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show })\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },

    getData_control21_GeryA0: function (elem) {
      if (!elem) {
        return;
      }
      if (elem && elem.contentWindow && elem.contentWindow.document) {
        var data = { onePartTitle: [], onePartCont: [], twoPart: {}, twoPartTitle: [], twoPartCont: [], threePartTitle: [], threePartCont: [], twoPartAdd: [], Agree: [], total: [], totalTitle: [], totalTF: {}, btns: { btn: [], btnID: [] }, file: [], rejectsStatus: { Retit: [], Recont: [] }, belowKsPeice: { Retit: [], Recont: [] }, tishi: { title: [], cont: [] }, receiveType: [], XTHJG: { DetailTitle: [], title: [], cont: [], total: [] }, THJL: { DetailTitle: [], title: [], cont: [], total: [] }, KCBJ: { DetailTitle: [], title: [], cont: [], total: [] }, ZDJL: { DetailTitle: [], title: [], cont: [], total: [] }, QQTHBC: { DetailTitle: [], title: [], cont: [], total: [] }, FGSCGFK: { title: [], cont: [], second: [] } }; /****B2B销售订单流程里receiveType选择收款方式****/ //PC 为伪装  select ，PC点击id为receiveType下.mini-buttonedit-icon id为mini-38x下table td为所选内容，点击receiveType内容更新。
        //对应模板里  EssentialInformation组件 中 attr 为RECEIVETYPE标识里的 receiveType 部分。
        var receiveType = elem.contentWindow.document.querySelector('#receiveType');
        var _receiveType = elem.contentWindow.document.querySelector('#mini-38');
        if (receiveType && _receiveType && _receiveType.style.display != 'none') {
          var sheep = _receiveType.querySelectorAll('.mini-listbox-items	tr');
          sheep && [].forEach.call(sheep, function (item, i) {
            data.receiveType.push(item.textContent.trim()); //receiveType里push收款方式的文本内容。
          });
        } //此部分receiveType存的内容为收款方式。
        /****B2B销售订单流程A链接按钮****/
        var Summary = elem.contentWindow.document.querySelector('#Summary');
        var btbSummary = elem.contentWindow.document.querySelector('#btbSummary');
        var Addr = elem.contentWindow.document.querySelector('#Addr');
        var btbAddr = elem.contentWindow.document.querySelectorAll('#btbAddr')[0]; //data.btns 保存按钮标记 B2B销售订单A链接按钮  PC存在四个id的情况 故 取四种情况。
        var btbBatch = elem.contentWindow.document.querySelectorAll('#btbBatch')[0];
        var btbDetail = elem.contentWindow.document.querySelectorAll('#btbAddr')[1]; // 保存按钮文本内容及id,对应模板 EssentialInformation 中 btns。
        /*************付款申请单的增加删除按钮3.8***************/
        var detail2 = elem.contentWindow.document.querySelector("#detail2");
        var addRow = elem.contentWindow.document.querySelector("#addRow");
        var removeRow = elem.contentWindow.document.querySelector("#removeRow");
        var div1 = elem.contentWindow.document.querySelector("#div1");
        var gridAdd2 = elem.contentWindow.document.querySelector("#gridAdd2");
        if (Summary && Summary.textContent != '') {
          data.btns.btn.push(Summary.textContent);
          data.btns.btnID.push('Summary');
        }
        if (btbSummary && btbSummary.textContent != '') {
          data.btns.btn.push(btbSummary.textContent);
          data.btns.btnID.push('btbSummary');
        }
        if (btbAddr && btbAddr.textContent != '') {
          data.btns.btn.push(btbAddr.textContent);
          data.btns.btnID.push('btbAddr');
        }
        if (btbBatch && btbBatch.style.display !== "none" && btbBatch.textContent != '') {
          data.btns.btn.push(btbBatch.textContent);
          data.btns.btnID.push('btbBatch');
        }
        if (btbDetail && btbDetail.textContent != '') {
          data.btns.btn.push(btbDetail.textContent);
          data.btns.btnID.push('btbAddr');
        }
        if (Addr && Addr.textContent != '') {
          data.btns.btn.push(Addr.textContent);
          data.btns.btnID.push('Addr');
        } //3.8
        if (detail2 && detail2.style.display != "none" && addRow && addRow.textContent != '') {
          data.btns.btn.push(addRow.textContent);
          data.btns.btnID.push('addRow');
        }
        if (detail2 && detail2.style.display != "none" && removeRow && removeRow.textContent != '') {
          data.btns.btn.push(removeRow.textContent);
          data.btns.btnID.push('removeRow');
        }
        if (div1 && div1.style.display != "none" && gridAdd2 && gridAdd2.style.display != "none" && div1.querySelectorAll("a")[0] && div1.querySelectorAll("a")[0].textContent != "") {
          data.btns.btn.push(div1.querySelectorAll("a")[0].textContent);
          data.btns.btnID.push('icon-add');
        }
        if (div1 && div1.style.display != "none" && gridAdd2 && gridAdd2.style.display != "none" && div1.querySelectorAll("a")[1] && div1.querySelectorAll("a")[1].textContent != "") {
          data.btns.btn.push(div1.querySelectorAll("a")[1].textContent);
          data.btns.btnID.push('icon-remove');
        } /****提示，内容****/
        var cue = elem.contentWindow.document.querySelector('#tishi'); // 当存在 提示 且 提示的为 block 才 在data.tishi里给 标记 ，对应模板里  EssentialInformation组件  中tishi。 
        // 多为合同流程存在。
        if (cue && cue.style.display == 'block') {
          var _cue = cue.querySelectorAll('td');
          _cue[0] && data.tishi.title.push(_cue[0].innerHTML);
          _cue[1] && data.tishi.cont.push(_cue[1].innerHTML); //data.tishi push 提示的标题和提示内容的innerHTML。
        } /****不良品特价申请里流程请确认状态（rejectsStatus）****/ //对应模板里 RejectsStatus 组件  里   attr    为   radio 。
        var rejectsStatus = elem.contentWindow.document.querySelector('#rejectsStatus');
        if (rejectsStatus && rejectsStatus.style.display == 'block') {
          //如果存在 id 为 rejectsStatus 的 table 切为 block 时 rejectsStatus.Retit 保存 标题 rejectsStatus.attr 保存 单选类型标识，Recont 保存内容和是否被选中标识。
          var sheep = elem.contentWindow.document.querySelectorAll('#rejectsStatus>tbody>tr>td'); // sheep 保存 table 里所有 td，遍历 td，单数位置为标题，复数为内容。
          sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
            if (i % 2 == 0 && item.parentElement.style != 'none' && item.style.display != 'none') {
              var star = item.querySelector('span'); //star 保存为标题 * 提示，当存在切不为 display：none 时 key 保存标识 *。
              if (star && star.style.display != 'none') {
                var children = {};
                _title = item.childNodes[0];
                _title && (children.title = _title.textContent.trim());
                children.key = '*';
              } else {
                var children = {};
                _title = item.childNodes[0];
                _title && (children.title = _title.textContent.trim());
              }
              data.rejectsStatus.Retit.push(children);
            } else if (i % 2 == 1 && item.parentElement.style != 'none' && item.style.display != 'none') {
              //此部分为内容。
              var rejectsStatusInput = item.querySelector('#rejectsStatuss');
              if (rejectsStatusInput) {
                var _input = item.querySelectorAll("input[type='radio']");
                var children = {};
                children.cont = [];
                children.checked = [];
                _input.length > 0 && [].forEach.call(_input, function (val, i) {
                  var _cont = val.nextElementSibling;
                  var _checked = val.checked;
                  children.cont.push(_cont.textContent.trim());
                  children.checked.push(_checked);
                });
                var hidden = item.querySelector('div').classList.contains('mini-disabled');
                hidden ? data.rejectsStatus.attr = 'radio' : data.rejectsStatus.attr = 'canRadio'; //属性标识为radio。		
                data.rejectsStatus.id = 'rejectsStatus';
                data.rejectsStatus.Recont.push(children); //保存内容文本内容等标识。
              }
            }
          });
        } /****续借申请流程(是否影响二次销售)****/ //对应模板里 RejectsStatus 组件 对应 attr 为 input 部分。
        var newTable = elem.contentWindow.document.querySelector('#newTable'); //当ID有newTable时二次销售等字段显示
        var isTwoSale = elem.contentWindow.document.querySelector('#isTwoSale'); //当id为isTwoSale存在时且为block时。
        if (newTable && isTwoSale && isTwoSale.style.display != 'none') {
          var children = {};
          children.title = '是否接受影响二次销售的还机';
          var star = isTwoSale.parentElement.previousElementSibling.querySelector('span'); //star 保存为标题*提示，当存在切不为display：none 时 key 保存标识 *。
          star && star.style.display != 'none' && (children.key = '*');
          var child = {};
          child.cont = []; //if(isTwoSale.querySelector('input').disabled){
          var _isTwoSale = isTwoSale.querySelector('input').value;
          child.attr = 'input'; //属性标识为 input。 
          child.cont.push(_isTwoSale); //     }else{
          //     }
          data.belowKsPeice.Recont.push(child); //保存标题文本内容。
          data.belowKsPeice.Retit.push(children); //保存内容文本内容等标识。
        } /****续借申请流程（翻新费用承担方）****/ //对应模板里 RejectsStatus 组件 对应 attr 为 input 部分。
        var renovationCostBear = elem.contentWindow.document.querySelector('#renovationCostBear'); //当id为 renovationCostBear 存在时且为block时。
        if (newTable && renovationCostBear && renovationCostBear.style.display != 'none') {
          var children = {};
          children.title = '翻新费用承担方';
          var star = isTwoSale.parentElement.previousElementSibling.querySelector('span'); //star 保存为标题*提示，当存在切不为display：none 时 key 保存标识 *。
          star && star.style.display != 'none' && (children.key = '*');
          var _renovationCostBear = renovationCostBear.querySelector('input').value;
          var child = {};
          child.cont = [];
          child.cont.push(_renovationCostBear);
          child.attr = 'input'; //属性表示为 input。
          data.belowKsPeice.Recont.push(child); //保存标题文本内容。
          data.belowKsPeice.Retit.push(children); //保存内容文本内容等标识。
        } /****续借申请流程（其他）****/
        var other = elem.contentWindow.document.querySelector('#other');
        if (newTable && other && other.style.display !== "none") {
          var children = {};
          children.title = '其他';
          var star = other.parentElement.previousElementSibling.querySelector('span'); //star 保存为标题*提示，当存在切不为display：none 时 key 保存标识 *。
          star && star.style.display != 'none' && (children.key = '*');
          var _other = other.querySelector('input').value;
          var child = {};
          child.cont = [];
          child.cont.push(_other);
          child.attr = 'input'; //属性表示为 input。
          data.belowKsPeice.Recont.push(child); //保存标题文本内容。
          data.belowKsPeice.Retit.push(children); //保存内容文本内容等标识。
        } /**********************belowKsPeice********************/
        var belowKsPeice = elem.contentWindow.document.querySelector('#belowKsPeice');
        if (belowKsPeice && belowKsPeice.style.display == 'block') {
          var sheep = elem.contentWindow.document.querySelectorAll('#belowKsPeice>tbody>tr>td');
          sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
            if (i % 2 == 0 && item.parentElement.style != 'none' && item.style.display != 'none') {
              var label = item.querySelector('label');
              if (!label) {
                var star = item.childNodes[1];
                if (typeof star != 'undefined' && star.nodeName == 'SPAN' && star.style.display != 'none') {
                  var children = {};
                  children.title = item.childNodes[0].textContent.trim();
                  children.key = item.childNodes[1].textContent.trim();
                } else {
                  var children = {};
                  children.title = item.childNodes[0].textContent.trim();
                }
              }
              data.belowKsPeice.Retit.push(children);
            } else if (i % 2 == 1 && item.parentElement.style != 'none' && item.style.display != 'none') {
              var isBelowKsPrice = item.querySelector('#isBelowKsPrice');
              var ksPrice = item.querySelector('#ksPrice');
              if (isBelowKsPrice) {
                //不良品折价销售选择是否亏损
                var hidden = isBelowKsPrice.classList.contains('mini-disabled');
                var _input = item.querySelectorAll("input[type='radio']");
                var children = {};
                children.cont = [];
                children.checked = [];
                if (hidden) {
                  _input.length > 0 && [].forEach.call(_input, function (val, i) {
                    var _cont = val.nextElementSibling;
                    var _checked = val.checked;
                    children.cont.push(_cont.textContent.trim());
                    children.checked.push(_checked);
                    children.attr = 'radio';
                  });
                } else {
                  _input.length > 0 && [].forEach.call(_input, function (val, i) {
                    var _cont = val.nextElementSibling;
                    var _checked = val.checked;
                    children.cont.push(_cont.textContent.trim());
                    children.checked.push(_checked);
                    children.attr = 'radio';
                    children.change = 'true';
                    children.id = 'isBelowKsPrice';
                    var err = item.querySelector('.mini-errorIcon');
                    var _value = err.nextElementSibling;
                    var _err = err.getAttribute('title');
                    err && _err != null && _value.value == '' ? children.err = true : children.err = false;
                  });
                }
                data.belowKsPeice.Recont.push(children);
              } else if (ksPrice) {
                var _input = item.querySelectorAll('.mini-textbox-input');
                var hidden = ksPrice.classList.contains('mini-textbox-disabled');
                if (hidden) {
                  _input.length > 0 && [].forEach.call(_input, function (item, i) {
                    var children = {};
                    children.cont = [];
                    children.attr = 'input';
                    children.cont.push(item.value);
                    data.belowKsPeice.Recont.push(children);
                  });
                } else {
                  _input.length > 0 && [].forEach.call(_input, function (item, i) {
                    var children = {};
                    children.cont = [];
                    children.attr = 'input';
                    children.cont.push(item.value);
                    children.change = 'true';
                    children.id = 'ksPrice';
                    var err = ksPrice.querySelector('.mini-errorIcon');
                    err ? children.err = true : children.err = false;
                    data.belowKsPeice.Recont.push(children);
                  });
                }
              }
            }
          });
        } /************************end****************************/
        var signOne = elem.contentWindow.document.querySelector('#form1');
        if (signOne) {
          var form = elem.contentWindow.document.querySelector('#form');
          if (form) {
            /*******针对与付款申请单********/
            var sheep = elem.contentWindow.document.querySelectorAll('#form>table>tbody>tr>td');
            var payNum = elem.contentWindow.document.querySelector('#form>div');
            if (payNum) {
              var children = {};
              children.title = payNum.textContent.trim();
              data.onePartTitle.push(children);
              var child = {};
              var _value = payNum.querySelector('input');
              child.cont = [];
              child.cont.push(_value.value);
              child.err = false;
              child.attr = 'INPUT';
              data.onePartCont.push(child);
            }
          } else {
            var sheep = elem.contentWindow.document.querySelectorAll('#form1>table>tbody>tr>td');
          }
          sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
            if (i % 2 == 0 && item.parentElement.style.display != 'none' && item.style.display != 'none') {
              var a = item.querySelector('a');
              if (a) {
                var btn = item.querySelector('a');
                data.btns.btn.push(btn.textContent);
                btn.id ? data.btns.btnID.push(btn.id) : (data.btns.btnID.push(btn.className), data.btns.class = true);
              } else if (item.childNodes[1] && item.childNodes[1].nodeName == 'LABEL') {
                var star = item.querySelector('span');
                var btn = item.querySelector('a');
                if (star) {
                  var children = {};
                  var _h4 = item.querySelector('h4');
                  if (item.querySelector('label').childNodes[0].nodeName == '#text' && !_h4) {
                    var _label = item.querySelector('label').childNodes[0];
                    _label && (children.title = _label.textContent.trim().replace(/：/g, ''));
                    children.title = children.title.replace(/:/g, '');
                    star.style.display != 'none' && (children.key = '*');
                  } else {
                    var _label = item.textContent.trim();
                    children.title = _label;
                  }
                } else if (typeof btn != 'undefined' && btn) {
                  data.btns.btn.push(btn.textContent);
                  data.btns.title = 'form1';
                } else {
                  var children = {};
                  var _item = item.textContent;
                  children.title = _item.trim().replace(/：/g, '');
                  children.title = children.title.replace(/:/g, '');
                }
                data.onePartTitle.push(children);
              } else if (item.childNodes[0] && item.childNodes[0].nodeName == 'LABEL') {
                var star = item.querySelector('span');
                if (star && star.style.display != 'none') {
                  var children = {};
                  var _value = item.childNodes[0].childNodes[0].textContent;
                  children.title = _value.trim().replace(/：/g, '');
                  children.key = item.querySelector('span').textContent.trim();
                  children.title = children.title.replace(/:/g, '');
                } else {
                  var children = {};
                  var _value = item.childNodes[0].textContent;
                  _value && (children.title = _value.trim().replace(/：/g, ''));
                  children.title = children.title.replace(/:/g, '');
                }
                data.onePartTitle.push(children);
              } else {
                //报错地方
                var star = item.querySelectorAll('span');
                if (star && star.length > 0) {
                  var children = {};
                  var _value = item.childNodes[0].textContent;
                  var _key = item.childNodes[1].textContent;
                  children.title = _value.trim().replace(/：/g, '');
                  children.key = item.childNodes[1].textContent.trim();
                  children.title = children.title.replace(/:/g, '');
                } else {
                  if (item.childNodes.length > 0) {
                    var children = {};
                    var _value = item.childNodes[0].textContent;
                    _value && (children.title = _value.trim().replace(/：/g, ''));
                    children.title = children.title.replace(/:/g, '');
                  } else {
                    var children = {};
                    var _value = item.textContent; // _value && (children.title = _value.trim().replace(/：/g, ''));
                    children.title = _value;
                  }
                }
                data.onePartTitle.push(children);
              }
            } else if (i % 2 == 1 && item.parentElement.style.display != 'none' && item.style.display != 'none') {
              var bridge = item.querySelectorAll('span')[0];
              var zero = item.childNodes[1];
              var download = item.querySelector('#Filelist');
              var usedAmount = item.querySelector('#usedAmount');
              var _label = item.querySelector('label');
              var goodproId = item.querySelector('#goodproId');
              var cancelOrderNum = item.querySelector('#cancelOrderNum');
              var usedAmount = item.querySelector('#usedAmount');
              var usedDiscountAmount = item.querySelector('#usedDiscountAmount');
              var isFinish = item.querySelector("#isFinish");
              var inputRadio = item.querySelectorAll("input[type='radio']"); //是否特殊项目-input的type是radio
              var _br = item.querySelectorAll('br');
              var _zero = item.querySelectorAll('.mini-list-inner');
              var orderedDate = item.querySelector('#orderedDate');
              var isSignUp = item.querySelector('#isSignUp'); //是否需要签办功能（公司收文审批单流程）
              var isReturn = item.querySelector("#isReturn"); //营业执照、法人身份证使用：到达最后一步审批，“归还”时，“是否归还复选框”元素
              var returnDate = item.querySelector("#returnDate"); //营业执照、法人身份证使用：到达最后一步审批，“归还”时，日期
              var isContersign = item.querySelector("#isContersign"); //商务物流临时操作，物流部总经理，是否加签
              var isPresidentApprove = item.querySelector("#isPresidentApprove"); //商务物流临时操作，财务总监，是否需要总裁审批
              if (item.childNodes.length == 1 && item.childNodes[0].nodeName == 'SPAN') {
                var children = {};
                var _bridge = bridge.childNodes[0].firstChild;
                var err = item.querySelectorAll('.mini-errorIcon');
                children.cont = [];
                _bridge && children.cont.push(_bridge.value);
                _bridge && (children.attr = 'INPUT');
                err.length > 0 ? children.err = true : children.err = false;
              } else if (isFinish) {
                var children = {};
                children.cont = [];
                children.checked = [];
                children.cont.push(isFinish.textContent);
                children.attr = "isFinish";
                if (isFinish.querySelector("input").checked) {
                  children.checked.push(true);
                } else {
                  children.checked.push(false);
                }
                var err = item.querySelector('.mini-errorIcon');
                var _value = err.nextElementSibling;
                var _err = err.getAttribute('title');
                err && _err != null && _value.value == '' ? children.err = true : children.err = false;
              } else if (isReturn) {
                var children = {};
                var check = isReturn.querySelector("input[type='checkbox']");
                var disable = isReturn.querySelector(".mini-checkboxlist-item-selected");
                var returnDate = item.ownerDocument.querySelector("#returnDate");
                children.cont = [];
                children.cont.push(isReturn.textContent);
                if (isReturn && check && check.checked) {
                  children.check = true;
                } else {
                  children.check = false;
                }
                if (returnDate && returnDate.querySelectorAll("input")[0] && returnDate.querySelectorAll("input")[0].disabled) {
                  children.disable = true;
                  children.attr = "INPUT";
                } else {
                  children.disable = false;
                  children.attr = "isReturn";
                }
                var err = item.querySelector('.mini-errorIcon');
                var _value = err.nextElementSibling;
                var _err = err.getAttribute('title');
                err && _err != null && _value.value == '' ? children.err = true : children.err = false;
              } else if (returnDate) {
                var children = {};
                children.cont = [];
                children.cont.push(returnDate.querySelector("input[name='returnDate']").value);
                if (returnDate.querySelectorAll("input")[0] && returnDate.querySelectorAll("input")[0].disabled) {
                  children.disable = true;
                  children.attr = "INPUT";
                } else {
                  children.disable = false;
                  children.attr = "returnDate";
                }
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (inputRadio.length > 0 && !isSignUp && !isContersign && !isPresidentApprove) {
                //非主营合同-是否特殊项目
                var children = {};
                children.cont = [];
                children.checked = [];
                children.attr = "inputRadio"; //var inputRadio=isSpecialItem.parentElement.querySelectorAll("input[type='radio']");
                if (item.querySelector(".mini-disabled")) {
                  children.disabled = "disabled";
                  [].forEach.call(inputRadio, function (d, i) {
                    if (d.checked) {
                      children.cont.push(d.value);
                    }
                  });
                } else {
                  children.disabled = "abled";
                  [].forEach.call(inputRadio, function (d, i) {
                    if (d.checked) {
                      children.checked.push(true);
                    } else {
                      children.checked.push(false);
                    }
                    children.cont.push(d.value);
                  });
                }
                children.id = item.children[0].getAttribute("id");
              } else if (isSignUp) {
                var hidden = isSignUp.classList.contains('mini-disabled');
                var _input = item.querySelectorAll("input[type='radio']");
                var children = {};
                children.cont = [];
                children.checked = [];
                if (hidden) {
                  _input.length > 0 && [].forEach.call(_input, function (val, i) {
                    var _cont = val.nextElementSibling;
                    var _checked = val.checked;
                    if (_checked == true) {
                      children.cont.push(_cont.textContent.trim());
                    }
                    children.attr = 'INPUT';
                  });
                } else {
                  _input.length > 0 && [].forEach.call(_input, function (val, i) {
                    var _cont = val.nextElementSibling;
                    var _checked = val.checked;
                    children.cont.push(_cont.textContent.trim());
                    children.checked.push(_checked);
                    children.attr = 'radio';
                    children.change = 'true';
                    children.id = 'isSignUp';
                    var err = item.querySelector('.mini-errorIcon');
                    var _value = err.nextElementSibling;
                    var _err = err.getAttribute('title');
                    err && _err != null && _value.value == '' ? children.err = true : children.err = false;
                  });
                }
              } else if (isContersign) {
                var hidden = isContersign.classList.contains('mini-disabled');
                var _input = item.querySelectorAll("input[type='radio']");
                var children = {};
                children.cont = [];
                children.checked = [];
                if (hidden) {
                  _input.length > 0 && [].forEach.call(_input, function (val, i) {
                    var _cont = val.nextElementSibling;
                    var _checked = val.checked;
                    if (_checked == true) {
                      children.cont.push(_cont.textContent.trim());
                    }
                    children.attr = 'INPUT';
                  });
                } else {
                  _input.length > 0 && [].forEach.call(_input, function (val, i) {
                    var _cont = val.nextElementSibling;
                    var _checked = val.checked;
                    children.cont.push(_cont.textContent.trim());
                    children.checked.push(_checked);
                    children.attr = 'radio';
                    children.change = 'true';
                    children.id = 'isContersign';
                    var err = item.querySelector('.mini-errorIcon');
                    var _value = err.nextElementSibling;
                    var _err = err.getAttribute('title');
                    err && _err != null && _value.value == '' ? children.err = true : children.err = false;
                  });
                }
              } else if (isPresidentApprove) {
                var hidden = isPresidentApprove.classList.contains('mini-disabled');
                var _input = item.querySelectorAll("input[type='radio']");
                var children = {};
                children.cont = [];
                children.checked = [];
                if (hidden) {
                  _input.length > 0 && [].forEach.call(_input, function (val, i) {
                    var _cont = val.nextElementSibling;
                    var _checked = val.checked;
                    if (_checked == true) {
                      children.cont.push(_cont.textContent.trim());
                    }
                    children.attr = 'INPUT';
                  });
                } else {
                  _input.length > 0 && [].forEach.call(_input, function (val, i) {
                    var _cont = val.nextElementSibling;
                    var _checked = val.checked;
                    children.cont.push(_cont.textContent.trim());
                    children.checked.push(_checked);
                    children.attr = 'radio';
                    children.change = 'true';
                    children.id = 'isPresidentApprove';
                    var err = item.querySelector('.mini-errorIcon');
                    var _value = err.nextElementSibling;
                    var _err = err.getAttribute('title');
                    err && _err != null && _value.value == '' ? children.err = true : children.err = false;
                  });
                }
              } else if (download) {
                var children = {};
                children.cont = [];
                children.memory = [];
                if (download.querySelector("table") && download.querySelectorAll("table").length > 0) {
                  var value = item.querySelectorAll('#Filelist	tr'); /**原变量所在处**/
                  value.length > 0 && [].forEach.call(value, function (val, index) {
                    var _value = val.querySelectorAll('td');
                    _value.length > 0 && [].forEach.call(_value, function (item, i) {
                      if (item.childNodes[0] && item.childNodes[0].nodeName == 'A' && item.childNodes[0].innerHTML != '删除') {
                        children.cont.push(item.textContent);
                      } else if (item.childNodes[0] && item.childNodes[0].nodeName == 'A' && item.childNodes[0].innerHTML == '删除') {
                        children.delete = true;
                      } else if (item.childNodes[0] && item.innerHTML != '&nbsp;') {
                        children.memory.push(item.textContent);
                      }
                    });
                  });
                  children.attr = 'A';
                  children.parent = 'form1';
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else {
                  children.cont.push(download.textContent);
                  children.attr = 'INPUT';
                  children.parent = 'form1';
                }
              } else if (item.childNodes.length == 3 && item.childNodes[1].nodeName == 'TABLE') {
                var children = {};
                children.cont = [];
                var _table = item.querySelectorAll('table');
                if (_table.length > 1) {
                  var sheep = item.childNodes[1].querySelectorAll('tbody>tr')[0].querySelectorAll('table .mini-radiobuttonlist-table input');
                  var key = item.childNodes[1].querySelectorAll('tbody>tr')[0].querySelectorAll('table .mini-radiobuttonlist-table label');
                  if (sheep[0] && sheep[0].checked == true) {
                    children.cont.push(key[0].textContent.trim());
                    children.attr = 'THREE';
                    var keyValue = item.childNodes[1].querySelectorAll('tr')[0].childNodes[3].childNodes[1];
                    var value = item.childNodes[1].querySelectorAll('tr')[0].childNodes[3];
                    if (keyValue) {
                      var _keyValue = item.childNodes[1].querySelectorAll('tr')[0].childNodes[3].childNodes[1].childNodes[0].firstChild;
                      children.cont.push(_keyValue.value);
                      children.cont.push(value.textContent.trim());
                    }
                  } else if (sheep[1] && sheep[1].checked == true) {
                    children.cont.push(key[1].textContent.trim());
                    children.attr = 'THREE';
                    var keyValue_ = item.childNodes[1].querySelector('tbody').childNodes[2].querySelectorAll('span>span>input')[0];
                    var _keyValue = item.childNodes[1].querySelector('tbody').childNodes[2];
                    children.cont.push(keyValue_.value);
                    children.cont.push(_keyValue.textContent.trim());
                  } else {
                    children.attr = 'THREE';
                  }
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else if (sheep[1].checked == true) {
                  children.cont.push(key[1].textContent.trim());
                  children.attr = 'THREE';
                  var keyValue = item.childNodes[1].querySelector('tbody').childNodes[2].querySelectorAll('span>span>input')[0];
                  var _keyValue = item.childNodes[1].querySelector('tbody').childNodes[2];
                  keyValue && children.cont.push(keyValue.value);
                  _keyValue && children.cont.push(_keyValue.textContent.trim());
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else {
                  var keyValue = item.querySelectorAll('td');
                  if (keyValue && keyValue.length > 0) {
                    var _keyValue = item.querySelectorAll('td')[0].childNodes[0].textContent;
                    var _input = item.querySelectorAll('td')[0].childNodes[1].childNodes[0].firstChild;
                    var keyValue_ = item.querySelectorAll('td')[0].childNodes[2].textContent;
                    children.cont.push(_keyValue.trim());
                    children.cont.push(_input.value);
                    children.cont.push(keyValue_.trim());
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  }
                }
              } else if (cancelOrderNum) {
                var children = {};
                children.cont = [];
                children.attr = 'INPUT';
                var _value = item.querySelector(".mini-buttonedit-input");
                children.cont.push(_value.value);
                var err = item.querySelector('.mini-errorIcon');
                err && err.nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (usedAmount || usedDiscountAmount) {
                var children = {};
                children.cont = [];
                children.attr = 'USEDAMOUNT';
                var _value = item.querySelector('.mini-buttonedit-input').value;
                children.cont.push(_value);
                usedAmount ? children.id = 'usedAmount' : children.id = 'usedDiscountAmount';
                var err = item.querySelector('.mini-errorIcon');
                err && err.nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (goodproId) {
                var children = {};
                children.cont = [];
                children.attr = 'INPUT';
                var _value = item.querySelector("input[name='goodproId']");
                children.cont.push(_value.value);
                var err = item.querySelector('.mini-errorIcon');
                err && err.nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (item.childNodes.length == 3 && item.childNodes[1].nodeName == 'A') {
                var children = {};
                children.cont = [];
                children.attr = 'INPUT';
                var _value = item.querySelector('a').textContent;
                var err = item.querySelector('.mini-errorIcon');
                err && err.nodeName == 'SPAN' ? children.err = true : children.err = false;
                children.cont.push(_value); //合同号
              } else if (_label && item.childNodes.length == 3) {
                var red = item.querySelector('label	span');
                var children = {};
                children.cont = []; //红色退款理由注意事项提示（销售退货申请流程）
                if (red && red.style.color == 'red') {
                  children.cont.push(red.textContent.trim());
                  children.attr = 'RED';
                  var err = item.querySelector('.mini-errorIcon');
                  err && err.nodeName == 'SPAN' ? children.err = true : children.err = false;
                }
              } else if (bridge && zero && zero.nodeName != 'DIV') {
                var one = item.childNodes[1];
                var three = item.childNodes[3];
                var two = item.childNodes[2];
                if (one.nodeName == 'SPAN' && item.childNodes.length == 2) {
                  var children = {};
                  var _bridge = bridge.childNodes[0].firstChild;
                  children.cont = [];
                  _bridge && children.cont.push(_bridge.value);
                  _bridge && (children.attr = 'INPUT');
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 ? children.err = true : children.err = false;
                } else if (item.childNodes.length == 3 && item.childNodes[0].nodeName == 'INPUT' && item.childNodes[2].nodeName == 'SPAN' && _zero.length == 0) {
                  var children = {};
                  children.cont = [];
                  children.attr = 'INPUT';
                  var _value = item.querySelector('span').textContent.trim();
                  children.cont.push(_value);
                  var err = item.querySelector('.mini-errorIcon');
                  err && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else if (item.childNodes.length == 3 && item.childNodes[0].nodeName == 'SPAN' && item.childNodes[2].nodeName == 'INPUT' && _zero.length == 0) {
                  var children = {};
                  children.cont = [];
                  var _value = item.querySelector('span').textContent.trim();
                  children.attr = 'INPUT';
                  children.cont.push(_value);
                  var err = item.querySelector('.mini-errorIcon');
                  err && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else if (one.nodeName == 'SPAN' && item.childNodes.length == 3) {
                  if (typeof bridge != 'undefined') {
                    var date = item.querySelectorAll('#contractSealDate');
                    var backStatus = item.querySelectorAll('#backStatus');
                    var shenpiMoney = item.querySelector('#shenpiMoney');
                    var yesNo = item.querySelector('#yesNo');
                    var customerCrdInfo = item.querySelector('#customerCrdInfo'); /*铺货会签单客户信用资料情况*/
                    var customerConSin = item.querySelector('#customerConSin'); /*铺货会签单客户合同签订*/
                    var hidden = item.querySelector('span').classList.contains('mini-buttonedit-disabled');
                    var svpCfo = item.querySelector(' #svpCfo '); /*公司收文里的选择高级副总裁或财务总监*/
                    var deptHead = item.querySelector(' #deptHead '); /*公司收文里的选择部門負責人*/
                    var deptApprover = item.querySelector(' #deptApprover '); /*商业物流临时操作 物流部总经理 相关部门人员选择*/
                    var _hidden = item.querySelector('span').classList.contains('mini-textbox-disabled');
                    if (date.length > 0) {
                      if (hidden || _hidden) {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        var err = item.querySelectorAll('.mini-errorIcon');
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'INPUT');
                        err.length > 0 ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'SEALDATE');
                        _bridge && (children.parent = 'form1');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (deptHead) {
                      if (hidden || _hidden) {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        var err = item.querySelectorAll('.mini-errorIcon');
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'INPUT');
                        err.length > 0 ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'SVPCFO');
                        _bridge && (children.id = 'deptHead');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (svpCfo) {
                      if (hidden || _hidden) {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        var err = item.querySelectorAll('.mini-errorIcon');
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'INPUT');
                        err.length > 0 ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'SVPCFO');
                        _bridge && (children.id = 'svpCfo');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (deptApprover) {
                      if (hidden || _hidden) {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        var err = item.querySelectorAll('.mini-errorIcon');
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'INPUT');
                        err.length > 0 ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'SVPCFO');
                        _bridge && (children.id = 'deptApprover');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (customerCrdInfo) {
                      if (hidden || _hidden) {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'INPUT');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        children.cont = [];
                        var _bridge = bridge.childNodes[0].firstChild;
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'OTHER');
                        _bridge && (children.id = 'customerCrdInfo');
                        _bridge && (children.parent = 'form1');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (customerConSin) {
                      if (hidden || _hidden) {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'INPUT');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        children.cont = [];
                        var _bridge = bridge.childNodes[0].firstChild;
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'OTHER');
                        _bridge && (children.parent = 'form1');
                        _bridge && (children.id = 'customerConSin');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (backStatus.length > 0) {
                      if (hidden || _hidden) {
                        var children = {};
                        var _bridge = bridge.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'INPUT');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        children.cont = [];
                        var _bridge = bridge.childNodes[0].firstChild;
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'BACKSTATUS');
                        _bridge && (children.parent = 'form1');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (shenpiMoney) {
                      if (shenpiMoney.style.display == 'none') {
                        var children = {};
                        _bridge && (children.attr = 'HIDDEN');
                        var _bridge = bridge.childNodes[0].firstChild;
                        _bridge && children.cont.push(_bridge.value);
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 ? children.err = true : children.err = false;
                      } else {
                        if (hidden || _hidden) {
                          var children = {};
                          var _bridge = bridge.childNodes[0].firstChild;
                          var err = item.querySelectorAll('.mini-errorIcon');
                          children.cont = [];
                          _bridge && children.cont.push(_bridge.value);
                          _bridge && (children.attr = 'INPUT');
                          err.length > 0 ? children.err = true : children.err = false;
                        } else {
                          var children = {};
                          var _bridge = bridge.childNodes[0].firstChild;
                          children.cont = [];
                          _bridge && children.cont.push(_bridge.value);
                          _bridge && (children.attr = 'SHENPIMONEY');
                          _bridge && (children.parent = 'form1');
                          var err = item.querySelectorAll('.mini-errorIcon');
                          children.id = 'mini-33';
                          children.sign = 'shenpiMoney';
                          err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                        }
                      }
                    } else if (yesNo) {
                      if (yesNo.style.display != 'none') {
                        if (hidden || _hidden) {
                          var children = {};
                          var _bridge = bridge.childNodes[0].firstChild;
                          var err = item.querySelectorAll('.mini-errorIcon');
                          children.cont = [];
                          _bridge && children.cont.push(_bridge.value);
                          _bridge && (children.attr = 'INPUT');
                          err.length > 0 ? children.err = true : children.err = false;
                        } else {
                          var children = {};
                          var _bridge = bridge.childNodes[0].firstChild;
                          children.cont = [];
                          _bridge && children.cont.push(_bridge.value);
                          _bridge && (children.attr = 'SHENPIMONEY');
                          _bridge && (children.parent = 'form1');
                          var err = item.querySelectorAll('.mini-errorIcon');
                          err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          children.id = 'mini-36';
                          children.sign = 'yesNo';
                        }
                      } else {
                        var children = {};
                        _bridge && (children.attr = 'HIDDEN');
                        var _bridge = bridge.childNodes[0].firstChild;
                        _bridge && children.cont.push(_bridge.value);
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 ? children.err = true : children.err = false;
                      }
                    } else {
                      var children = {};
                      var _bridge = bridge.childNodes[0].firstChild;
                      children.cont = [];
                      _bridge && children.cont.push(_bridge.value);
                      _bridge && (children.attr = _bridge.nodeName);
                      var err = item.querySelectorAll('.mini-errorIcon');
                      err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                    }
                  }
                } else if (item.childNodes.length == 4 && one.nodeName == 'SPAN' && item.childNodes[3].nodeName == 'INPUT') {
                  var children = {};
                  var _bridge = bridge.childNodes[0].firstChild;
                  children.cont = [];
                  _bridge && children.cont.push(_bridge.value);
                  _bridge && (children.attr = _bridge.nodeName);
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else if (item.childNodes.length == 4 && one.nodeName == 'SPAN' && two.nodeName == 'A') {
                  var children = {};
                  children.cont = [];
                  var _input = item.querySelector('.mini-textbox-input');
                  var _a = item.querySelector('a');
                  children.cont.push(_input.value);
                  children.cont.push(_a.textContent.trim());
                  children.attr = 'TWO';
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else if (item.childNodes.length == 4 && item.childNodes[0].nodeName == 'INPUT' && item.childNodes[2].nodeName == 'SPAN') {
                  var children = {};
                  var _bridge = item.querySelector('.mini-textbox-input');
                  children.cont = [];
                  _bridge && children.cont.push(_bridge.value);
                  _bridge && (children.attr = _bridge.nodeName);
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else if (item.childNodes.length == 5 && one.nodeName == 'SPAN' && three.nodeName == 'A') {
                  var date = item.querySelector('#backDate');
                  var hidden = item.querySelector('span').classList.contains('mini-buttonedit-disabled');
                  if (date && !hidden) {
                    var children = {};
                    var _bridge = bridge.childNodes[0].firstChild;
                    children.cont = [];
                    _bridge && children.cont.push(_bridge.value);
                    _bridge && (children.attr = 'BACKDATE');
                    _bridge && (children.parent = 'form1');
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  } else {
                    var children = {};
                    var _bridge = bridge.childNodes[0].firstChild;
                    children.cont = [];
                    _bridge && children.cont.push(_bridge.value);
                    _bridge && (children.attr = 'INPUT');
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  }
                } else if (one.nodeName == 'INPUT' && three.nodeName == 'SPAN' && item.childNodes.length == 5) {
                  if (bridge.childNodes.length > 1) {
                    var children = {};
                    var _bridge = bridge.childNodes[0].firstChild;
                    children.cont = [];
                    _bridge && children.cont.push(_bridge.value);
                    _bridge && (children.attr = _bridge.nodeName);
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  } else {
                    var children = {};
                    children.cont = [];
                    children.cont.push(bridge.textContent);
                    children.attr = bridge.nodeName;
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  }
                } else if (one.nodeName == 'SPAN' && three.nodeName == 'INPUT' && item.childNodes.length == 5) {
                  if (bridge.childNodes.length > 1) {
                    var children = {};
                    var _bridge = bridge.childNodes[0].firstChild;
                    children.cont = [];
                    _bridge && children.cont.push(_bridge.value);
                    _bridge && (children.attr = _bridge.nodeName);
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  } else {
                    var children = {};
                    children.cont = [];
                    children.cont.push(bridge.textContent);
                    children.attr = bridge.nodeName;
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  }
                } else if (item.childNodes.length == 5 && one.nodeName == 'SPAN' && three.nodeName == 'SPAN') {
                  var children = {};
                  children.cont = [];
                  var sheep = item.childNodes[1].childNodes[0].firstChild;
                  var _sheep = item.childNodes[3].childNodes[0].firstChild;
                  sheep && children.cont.push(sheep.value);
                  sheep && children.cont.push(_sheep.value);
                  children.attr = 'TIME';
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                } else if (_br.length > 0) {
                  var children = {};
                  children.cont = [];
                  var pushCont = item.innerHTML;
                  pushCont && children.cont.push(pushCont);
                  children.attr = 'REMARKS';
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                }
              } else if (typeof item.childNodes[1] == 'undefined') {
                var children = {};
                children.cont = [];
                children.cont.push(item.textContent.trim());
                children.attr = 'TD';
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (typeof item.childNodes[1] != 'undefined' && item.childNodes[1].nodeName == 'DIV' && _zero) {
                var _sheep = item.querySelectorAll('.mini-list-inner table td');
                var hidden = item.querySelectorAll('div')[0].classList.contains('mini-disabled');
                if (typeof _sheep != 'undefined' && _sheep.length > 0) {
                  var children = {};
                  children.cont = [];
                  var cont = [];
                  _sheep.length > 0 && [].forEach.call(_sheep, function (val, index) {
                    var key = val.querySelector('input');
                    if (key && key.type == 'radio') {
                      if (key.checked == true) {
                        children.cont.push(val.querySelector('label').textContent);
                        children.attr = 'TD';
                      } else {
                        cont.push(0);
                      }
                    }
                  });
                  if (cont.length == 2) {
                    children.attr = 'td';
                  }
                  var err = item.querySelectorAll('.mini-errorIcon');
                  err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                }
              } else if (_br.length > 0) {
                var children = {};
                children.cont = [];
                var pushCont = item.innerHTML;
                children.cont.push(pushCont);
                children.attr = 'REMARKS';
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              }
              data.onePartCont.push(children);
            }
          });
        } /*******************#form1-end****************************/ /**************付款申请单-出纳及资金管理步骤里应填功能(id form2)****************/
        var form2 = elem.contentWindow.document.querySelector('	#form2	');
        if (form2 && form2.style.display != 'none') {
          var sheep = elem.contentWindow.document.querySelectorAll('#form2>table>tbody>tr>td');
          sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
            if (i % 2 == 0 && item.parentElement.style != 'none' && item.style.display != 'none') {
              var children = {};
              var _span = item.querySelector('span');
              children.title = item.querySelector('label').childNodes[0].textContent.trim().replace(/：/g, '');
              var _span = item.querySelector('span');
              if (_span && _span.style.display != 'none') {
                children.key = '*';
              }
              data.onePartTitle.push(children);
            } else if (i % 2 == 1 && item.parentElement.style != 'none' && item.style.display != 'none') {
              var datepicker = item.querySelector('.mini-datepicker');
              var _span = item.querySelector('span');
              var paymentMethod = item.querySelector("input[name='paymentMethod']");
              var paymentBank = item.querySelector("input[name='paymentBank']");
              var spinner = item.querySelector('.mini-spinner');
              var hidden = item.querySelector('span').classList.contains('mini-buttonedit-disabled');
              var _hidden = item.querySelector('span').classList.contains('mini-textbox-disabled');
              if (datepicker) {
                var children = {};
                children.cont = [];
                var _bridge = _span.childNodes[0].firstChild;
                _bridge && children.cont.push(_bridge.value);
                if (hidden || _hidden) {
                  _bridge && (children.attr = 'INPUT');
                } else {
                  _bridge && (children.attr = 'DATEPICKER');
                }
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (paymentMethod) {
                var children = {};
                children.cont = [];
                var _bridge = _span.childNodes[0].firstChild;
                if (hidden || _hidden) {
                  _bridge && (children.attr = 'INPUT');
                } else {
                  _bridge && (children.attr = 'PAYMENT');
                }
                _bridge && children.cont.push(_bridge.value);
                _bridge && (children.parent = 'form1');
                _bridge && (children.name = 'paymentMethod');
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (paymentBank) {
                var children = {};
                children.cont = [];
                var _bridge = _span.childNodes[0].firstChild;
                _bridge && children.cont.push(_bridge.value);
                if (hidden || _hidden) {
                  _bridge && (children.attr = 'INPUT');
                } else {
                  _bridge && (children.attr = 'PAYMENT');
                }
                _bridge && (children.parent = 'form1');
                _bridge && (children.name = 'paymentBank');
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (spinner) {
                var children = {};
                children.cont = [];
                var _bridge = _span.childNodes[0].firstChild;
                if (hidden || _hidden) {
                  _bridge && (children.attr = 'INPUT');
                } else {
                  _bridge && (children.attr = 'SPINNER');
                }
                _bridge && children.cont.push(_bridge.value);
                _bridge && (children.class = 'spinner');
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              }
              data.onePartCont.push(children);
            }
          });
        } /*****************************end*******************************************/ /*****明细列表方阵(分为id为datagridsub和id为datagrid1两种情况)*******/ /**************明细列表下数据***************/
        function detailed(_id) {
          var viewPort = _id.querySelector('.mini-panel-viewport');
          if (viewPort) {
            var gridColumnsV = _id.querySelector('.mini-panel-viewport	.mini-grid-columns-view .mini-grid-table');
            var gridRowsV = _id.querySelector('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table');
            if (gridColumnsV) {
              var _tr = gridColumnsV.querySelectorAll('tr');
              var _trLength = _tr.length;
              var _TitleCont = elem.contentWindow.document.querySelector('.mini-toolbar');
              if (_TitleCont) {
                var _titleCont = _TitleCont.textContent.trim();
              }
              switch (_trLength) {
                case 2:
                  var _td = _tr[1].querySelectorAll('td');
                  var _inputArr = [];
                  _td.length > 0 && [].forEach.call(_td, function (item, i) {
                    var _input = item.querySelectorAll("input[type='checkbox']");
                    if (item.childNodes.length > 0 && _input.length == 0) {
                      var children = {};
                      var _sheep = item.querySelector('.mini-grid-headerCell-inner').childNodes[0];
                      var star = item.querySelector('.mini-grid-headerCell-inner span');
                      star && star.style.display != 'none' ? (children.title = _sheep.textContent.trim(), children.key = '*') : children.title = _sheep.textContent.trim();
                      switch (_id.id) {
                        case 'XTHJG':
                          data.XTHJG.title.push(children);
                          break;
                        case 'THJL':
                          data.THJL.title.push(children);
                          break;
                        case 'KCBJ':
                          data.KCBJ.title.push(children);
                          break;
                        case 'ZDJL':
                          data.ZDJL.title.push(children);
                          break;
                        case 'QQTHBC':
                          data.QQTHBC.title.push(children);
                          break;
                        default:
                          data.twoPartTitle.push(children);
                          break;
                      }
                    }
                    _input.length > 0 && _inputArr.push('i');
                  });
                  _inputArr.length > 0 ? data.twoPart.checked = true : data.twoPart.checked = false;
                  if (gridRowsV) {
                    if (_id.id == 'datagridsub' && _id.classList.contains('mini-disabled') == false && _titleCont == '铺货会签单明细') {
                      var sheep = _id.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table	.mini-grid-row');
                      data.twoPartContCanInput = true;
                      sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
                        var bridge = item.querySelectorAll('td');
                        var children = [];
                        bridge.length > 0 && [].forEach.call(bridge, function (val, index) {
                          if (val.childNodes.length > 0) {
                            var _bridge = val.textContent;
                            _bridge && children.push(_bridge);
                          }
                        });
                        data.twoPartCont.push(children);
                      });
                    } else if (_id.id == 'datagridsub' && _id.classList.contains('mini-disabled') == false && _id.querySelector(".mini-grid-columns-view").textContent.indexOf("付款银行") !== -1) {
                      //付款申请单明细（奖金管理、出纳、分公司出纳）3.8
                      var sheep = _id.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table	.mini-grid-row');
                      var datagridsub = elem.querySelector("#datagridsub");
                      sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
                        //item.classList.contains("mini-grid-newRow") == false
                        if (datagridsub && datagridsub.classList.contains("mini-disabled")) {
                          var bridge = item.querySelectorAll('td');
                          var children = [];
                          bridge.length > 0 && [].forEach.call(bridge, function (val, index) {
                            if (val.childNodes.length > 0) {
                              var _bridge = val.textContent;
                              _bridge && children.push(_bridge);
                            }
                          });
                          children.push("");
                          data.twoPartCont.push(children); //data.twoPartContCanInput = true;
                        } else {
                          var bridge = item.querySelectorAll('td.mini-grid-cell');
                          var children = [];
                          if (item.childNodes.length > 0) {
                            children.push(item.childNodes[1].textContent);
                            children.push(item.childNodes[2].textContent);
                            children.push(item.childNodes[3].textContent);
                            children.push(item.childNodes[4].textContent);
                            children.push(item.childNodes[5].textContent);
                            children.push("payOffDetail");
                          } //付款申请单特有的明细表标识
                          data.twoPartCont.push(children);
                        }
                      });
                      data.type = "payOffDetail";
                    } else {
                      var sheep = _id.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table	.mini-grid-row');
                      sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
                        var bridge = item.querySelectorAll('td');
                        var children = [];
                        bridge.length > 0 && [].forEach.call(bridge, function (val, index) {
                          if (val.childNodes.length > 0) {
                            var _bridge = val.textContent;
                            _bridge && children.push(_bridge);
                          }
                        });
                        switch (_id.id) {
                          case 'XTHJG':
                            data.XTHJG.cont.push(children);
                            break;
                          case 'THJL':
                            data.THJL.cont.push(children);
                            break;
                          case 'KCBJ':
                            data.KCBJ.cont.push(children);
                            break;
                          case 'ZDJL':
                            data.ZDJL.cont.push(children);
                            break;
                          case 'QQTHBC':
                            data.QQTHBC.cont.push(children);
                            break;
                          default:
                            data.twoPartCont.push(children);
                            break;
                        }
                      });
                    }
                  }
                  break;
                case 3:
                  data.twoPart.title = 'MultipleHeader';
                  data.twoPart.checked = false;
                  data.twoPart.titleCont = [];
                  data.twoPart.titleNum = [];
                  var oneTitle = _id.querySelectorAll('.mini-grid-columns-view tr')[1].children;
                  oneTitle.length > 0 && [].forEach.call(oneTitle, function (item, i) {
                    i != 0 && data.twoPart.titleCont.push(item.textContent.trim());
                    i != 0 && data.twoPart.titleNum.push(parseInt(item.getAttribute('colspan')));
                  });
                  var twoTitle = _id.querySelectorAll('.mini-grid-columns-view tr')[2].children;
                  var twoCont = _id.querySelectorAll('.mini-grid-rows-view	tr');
                  twoTitle.length > 0 && [].forEach.call(twoTitle, function (item, i) {
                    if (!item.style.width) {
                      var children = {};
                      var start = item.querySelector('span');
                      if (start && start.style.display != 'none') {
                        children.key = '*';
                        children.title = item.textContent.trim().replace(/\*/g, '');
                      } else {
                        children.title = item.textContent.trim().replace(/\*/g, '');
                      }
                      data.twoPartTitle.push(children);
                    }
                  });
                  twoCont.length > 0 && [].forEach.call(twoCont, function (item, i) {
                    if (i > 0) {
                      var array = [];
                      var _td = item.children;
                      _td.length > 0 && [].forEach.call(_td, function (val, index) {
                        index > 0 && array.push(val.textContent.trim());
                      });
                      data.twoPartCont.push(array);
                    }
                  });
                  break;
                case 4:
                  data.twoPart.title = 'ThreeStageHeader';
                  data.twoPart.checked = false; //zyt
                  data.twoPart.oneTitle = [];
                  data.twoPart.oneTitleRow = [];
                  data.twoPart.twoTitle = [];
                  data.twoPart.twoTitleRow = [];
                  var _oneTitle = _id.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view	.mini-grid-table	tr:nth-child(2) td');
                  var _twoTitle = _id.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view	.mini-grid-table	tr:nth-child(3)	td');
                  _oneTitle.length > 0 && [].forEach.call(_oneTitle, function (item, i) {
                    if (i > 0 && _oneTitle.length == 4) {
                      data.twoPart.oneTitle.push(item.textContent.trim());
                      if (i == 1) {
                        data.twoPart.oneTitleRow.push("4");
                      } else {
                        data.twoPart.oneTitleRow.push(item.getAttribute('colspan'));
                      }
                    } else if (i > 2 && _oneTitle.length !== 4) {
                      data.twoPart.oneTitle.push(item.textContent.trim());
                      data.twoPart.oneTitleRow.push(item.getAttribute('colspan'));
                    }
                  });
                  _twoTitle.length > 0 && [].forEach.call(_twoTitle, function (item, i) {
                    var _true = item.hasAttribute('rowspan');
                    _true == false && item.textContent != '' && data.twoPart.twoTitle.push(item.textContent.trim()) && data.twoPart.twoTitleRow.push(item.getAttribute('colspan'));
                  });
                  var one = elem.contentWindow.document.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view	.mini-grid-table	tr:nth-child(2) td')[2];
                  var div1 = elem.contentWindow.document.querySelector("#div1"); //分子公司采购付款管理流程
                  if (one && div1 && div1.style.display !== "none") {
                    var children = {};
                    children.title = one.textContent.trim();
                    data.twoPartTitle.push(children);
                  }
                  if (_oneTitle.length !== 4) {
                    data.twoPartTitle.push({
                      "title": "序号"
                    });
                  }
                  var _sheep = _id.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view	.mini-grid-table	tr:nth-child(3) td');
                  _sheep.length > 0 && [].forEach.call(_sheep, function (item, i) {
                    if (item.childNodes.length > 0 && i < 5 && _oneTitle.length !== 4 || item.childNodes.length > 0 && i < 7 && _oneTitle.length == 4) {
                      var children = {};
                      var _sheep = item.querySelector('.mini-grid-headerCell-inner').childNodes[0];
                      var star = item.querySelector('.mini-grid-headerCell-inner span');
                      star ? (children.title = _sheep.textContent.trim(), children.key = '*') : children.title = _sheep.textContent.trim();
                      data.twoPartTitle.push(children);
                    }
                  });
                  var sheep = _id.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view	.mini-grid-table	tr:nth-child(4) td');
                  sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
                    if (item.childNodes.length > 0) {
                      var children = {};
                      var _sheep = item.querySelector('.mini-grid-headerCell-inner').childNodes[0];
                      var star = item.querySelector('.mini-grid-headerCell-inner span');
                      star ? (children.title = _sheep.textContent.trim(), children.key = '*') : children.title = _sheep.textContent.trim();
                      data.twoPartTitle.push(children);
                    }
                  });
                  var sheep_ = _id.querySelectorAll('.mini-panel-viewport	.mini-grid-columns-view	.mini-grid-table	tr:nth-child(3) td');
                  sheep_.length > 0 && [].forEach.call(sheep_, function (item, i) {
                    if (i > 5 && _oneTitle.length !== 4 || i > 7 && _oneTitle.length == 4) {
                      var children = {};
                      var _sheep = item.querySelector('.mini-grid-headerCell-inner').childNodes[0];
                      var star = item.querySelector('.mini-grid-headerCell-inner span');
                      star && star.style.display != 'none' ? (children.title = _sheep.textContent.trim(), children.key = '*') : children.title = _sheep.textContent.trim();
                      data.twoPartTitle.push(children);
                    }
                  });
                  if (gridRowsV) {
                    var sheep = _id.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table	.mini-grid-row');
                    sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
                      var bridge = item.querySelectorAll('td');
                      var children = [];
                      bridge.length > 0 && [].forEach.call(bridge, function (val, index) {
                        var _bridge = val.textContent;
                        _bridge && children.push(_bridge);
                      });
                      data.twoPartCont.push(children);
                    });
                  }
                  break;
              }
            }
          }
        }
        var sign = elem.contentWindow.document.querySelector('#approval');
        if (sign && !sign.style.display) {
          var signOne = elem.contentWindow.document.querySelectorAll('#approval	.nui-form-table	tr td')[0];
          if (signOne && signOne.childNodes.length == 1) {
            data.Agree.push(signOne.innerHTML);
            var signTwo = elem.contentWindow.document.querySelectorAll('#approval .nui-form-table textarea');
            if (signTwo && signTwo.length > 0) {
              data.Agree.push(signTwo[0].value);
            }
          }
        } else if (sign && sign.style.display == 'block') {
          var signOne = elem.contentWindow.document.querySelectorAll('#approval	.nui-form-table	tr td')[0];
          if (signOne && signOne.childNodes.length == 1) {
            data.Agree.push(signOne.innerHTML);
            var signTwo = elem.contentWindow.document.querySelectorAll('#approval .nui-form-table textarea');
            if (signTwo && signTwo.length > 0) {
              data.Agree.push(signTwo[0].value);
            }
          }
        } /******************明细列表标题*******************/
        function detailTitle(_id) {
          var toolbar = _id.querySelector('.mini-toolbar');
          if (toolbar && toolbar.style.display != 'none') {
            var title = toolbar.querySelector('tr');
            var _td = title.querySelectorAll('td');
            if (_td.length > 1) {
              if (!_td[0].querySelector('a') && _td[0].textContent.trim() != '') {
                switch (_id.id) {
                  default:
                    data.totalTitle.push(_td[0].textContent.trim());
                    break;
                }
              } else if (_td[0].querySelector('a') && _td[1].textContent.trim() != '') {
                switch (_id.id) {
                  default:
                    data.totalTitle.push(_td[1].textContent.trim());
                    break;
                }
              } else {
                switch (_id.id) {
                  default:
                    data.totalTitle.push(title.textContent.trim());
                    break;
                }
              }
            } else if (_td.length == 1 && !_td[0].querySelector('a') && _td[0].textContent.trim() != '') {
              switch (_id.id) {
                case 'XTHJG':
                  data.XTHJG.DetailTitle.push(title.textContent.trim());
                  break;
                case 'THJL':
                  data.THJL.DetailTitle.push(title.textContent.trim());
                  break;
                case 'KCBJ':
                  data.KCBJ.DetailTitle.push(title.textContent.trim());
                  break;
                case 'ZDJL':
                  data.ZDJL.DetailTitle.push(title.textContent.trim());
                  break;
                case 'QQTHBC':
                  data.QQTHBC.DetailTitle.push(title.textContent.trim());
                  break;
                default:
                  data.totalTitle.push(title.textContent.trim());
                  break;
              }
            }
          }
        } /*******明细列表里的总计（不同ID）********/
        function addUpTo(_id) {
          var gridSummRow = _id.querySelector('.mini-grid-summaryRow');
          var gridSummRowView = _id.querySelector('.mini-grid-summaryRow .mini-grid-summaryRow-view');
          if (gridSummRow && gridSummRow.style.display == 'block' && gridSummRowView) {
            var sheep = _id.querySelectorAll('.mini-grid-summaryRow-view table tbody tr:nth-child(2) td');
            sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
              switch (_id.id) {
                case 'XTHJG':
                  data.XTHJG.total.push(item.innerHTML.replace(/总计/, ' '));
                  break;
                case 'THJL':
                  data.THJL.total.push(item.innerHTML.replace(/总计/, ' '));
                  break;
                case 'KCBJ':
                  data.KCBJ.total.push(item.innerHTML.replace(/总计/, ' '));
                  break;
                case 'ZDJL':
                  data.ZDJL.total.push(item.innerHTML.replace(/总计/, ' '));
                  break;
                case 'QQTHBC':
                  data.QQTHBC.total.push(item.innerHTML.replace(/总计/, ' '));
                  break;
                default:
                  data.total.push(item.innerHTML.replace(/总计/, ' '));
                  break;
              }
            });
          }
        }
        var datagrid1 = elem.contentWindow.document.querySelector('#datagrid1');
        var datagrid2 = elem.contentWindow.document.querySelector('#datagrid2');
        var datagridsub = elem.contentWindow.document.querySelector('#datagridsub');
        var XTHJG = elem.contentWindow.document.querySelector('#XTHJG');
        var THJL = elem.contentWindow.document.querySelector('#THJL');
        var KCBJ = elem.contentWindow.document.querySelector('#KCBJ');
        var ZDJL = elem.contentWindow.document.querySelector('#ZDJL');
        var QQTHBC = elem.contentWindow.document.querySelector('#QQTHBC');
        var _body = elem.contentWindow.document;
        if (datagrid1) {
          detailTitle(_body);
          detailed(datagrid1);
          addUpTo(datagrid1);
        } else if (datagridsub) {
          detailTitle(_body);
          detailed(datagridsub);
          addUpTo(datagridsub);
        } else {
          if (XTHJG && XTHJG.style.display != 'none') {
            detailTitle(XTHJG);
            addUpTo(XTHJG);
            detailed(XTHJG);
          }
          if (THJL && THJL.style.display != 'none') {
            detailTitle(THJL);
            addUpTo(THJL);
            detailed(THJL);
          }
          if (KCBJ && KCBJ.style.display != 'none') {
            detailTitle(KCBJ);
            addUpTo(KCBJ);
            detailed(KCBJ);
          }
          if (ZDJL && ZDJL.style.display != 'none') {
            detailTitle(ZDJL);
            addUpTo(ZDJL);
            detailed(ZDJL);
          }
          if (QQTHBC && QQTHBC.style.display != 'none') {
            detailTitle(QQTHBC);
            addUpTo(QQTHBC);
            detailed(QQTHBC);
          }
        } /*************取销售合同里的按钮***************/
        var signBtn = elem.contentWindow && elem.contentWindow.document.querySelector('#report');
        if (signBtn && signBtn.style.display && signBtn.style.display == 'block') {
          var sheep = elem.contentWindow.document.querySelectorAll('#report	a');
          sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
            if (item.style.display != 'none') {
              data.btns.btn.push(item.textContent);
              data.btns.btnID.push(item.getAttribute("id"));
              data.btns.title = 'report';
            }
          });
        } /********************end**********************/ /************************#dataform1*************************/
        var dataform1 = elem.contentWindow.document.querySelector('#dataform1');
        var dataform = elem.contentWindow.document.querySelector('#dataform');
        if (dataform1) {
          var _sign = elem.contentWindow.document.querySelector('#dataform1');
        } else if (dataform) {
          var _sign = elem.contentWindow.document.querySelector('#dataform');
        } //console.log(signTwo)
        if (_sign) {
          var sign = _sign.querySelector('table');
          if (sign) {
            var sheep = sign.querySelector("tbody").children;
            sheep.length > 0 && [].forEach.call(sheep, function (val, index) {
              var _sheep = val.children;
              _sheep.length > 0 && [].forEach.call(_sheep, function (item, i) {
                if (i % 2 == 0 && item.parentElement.style.display != 'none' && item.style.display != 'none') {
                  if (typeof item.childNodes[1] != 'undefined' && item.childNodes[1].nodeName == 'LABEL') {
                    var star = item.querySelector('span');
                    var btn = item.querySelector('a');
                    if (star) {
                      var children = {};
                      if (item.querySelector('label').childNodes[0].nodeName == '#text') {
                        var _label = item.querySelector('label').childNodes[0];
                        _label && (children.title = _label.textContent.trim().replace(/：/g, ''));
                        star.style.display != 'none' && (children.key = '*');
                      }
                    } else if (typeof btn != 'undefined' && btn) {
                      data.btns.btn.push(btn.textContent);
                    } else {
                      var children = {};
                      var _item = item.textContent;
                      _item && (children.title = _item.trim().replace(/：/g, ''));
                    }
                  } else {
                    var star = item.childNodes[1];
                    if (star && star.nodeName == 'SPAN') {
                      var children = {};
                      var _title = item.childNodes[0].textContent;
                      _title && (children.title = _title.trim().replace(/：/g, ''));
                      var _key = item.childNodes[1].textContent;
                      var _star = item.childNodes[1];
                      _key && _star.style.display != 'none' && (children.key = _key);
                    } else {
                      var children = {};
                      var _title = item.textContent;
                      children.title = _title.trim().replace(/：/g, '');
                    }
                  }
                  data.onePartTitle.push(children);
                } else if (i % 2 == 1 && item.parentElement.style.display != 'none' && item.style.display != 'none') {
                  var _span = item.querySelectorAll('span')[0];
                  var _childNodesOne = item.childNodes[1];
                  var download = item.querySelector('#Filelist');
                  var policyType = item.querySelector('#policyType');
                  var _zero = item.querySelectorAll('.mini-list-inner');
                  var _br = item.querySelectorAll('br');
                  var deptName = item.querySelector('#deptName');
                  if (typeof _span != 'undefined' && _span && _childNodesOne && _childNodesOne.nodeName != 'DIV') {
                    var one = item.childNodes[1];
                    var three = item.childNodes[3];
                    var _spanChild = _span.childNodes[0].firstChild;
                    if (one.nodeName == 'SPAN' && item.childNodes.length == 3) {
                      if (typeof _span != 'undefined') {
                        var date = item.querySelector('#contractSealDate');
                        var backStatus = item.querySelector('#backStatus');
                        var contractSignStatus = item.querySelector('#contractSignStatus');
                        var contractSealStatus = item.querySelector('#contractSealStatus');
                        var advanceBalance = item.querySelector('#advanceBalance');
                        var other = item.querySelector('#other');
                        var shenpiMoney = item.querySelector('#shenpiMoney');
                        var yesNo = item.querySelector('#yesNo');
                        var overdue = item.querySelector('#overdue');
                        var confirmAmount = item.querySelector('#confirmAmount');
                        var applyPaymentDays = item.querySelector("input[name='applyPaymentDays']");
                        var hidden = item.querySelector('span').classList.contains('mini-textbox-disabled');
                        var paymentFollowupPerson = item.querySelector('#paymentFollowupPerson');
                        var _hidden = item.querySelector('span').classList.contains('mini-buttonedit-disabled');
                        var receiveTime = item.querySelector('#receiveTime');
                        var receiveType = item.querySelector('#receiveType');
                        if (date) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'SEALDATE');
                            _bridge && (children.parent = 'dataform1');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else if (paymentFollowupPerson) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            var err = item.querySelectorAll('.mini-errorIcon');
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            err.length > 0 ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            var _name = item.querySelector('span').id;
                            _bridge && _name && (children.id = _name);
                            _bridge && (children.attr = 'OTHER');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else if (overdue) {
                          if (overdue.style.display != 'none') {
                            if (hidden || _hidden) {
                              var children = {};
                              var _bridge = _span.childNodes[0].firstChild;
                              var err = item.querySelectorAll('.mini-errorIcon');
                              children.cont = [];
                              _bridge && children.cont.push(_bridge.value);
                              _bridge && (children.attr = 'INPUT');
                              err.length > 0 ? children.err = true : children.err = false;
                            } else {
                              var children = {};
                              var _bridge = _span.childNodes[0].firstChild;
                              children.cont = [];
                              _bridge && children.cont.push(_bridge.value);
                              _bridge && (children.attr = 'SHENPIMONEY');
                              _bridge && (children.parent = 'dataform1');
                              var err = item.querySelectorAll('.mini-errorIcon');
                              err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                              children.id = 'mini-26';
                              children.sign = 'overdue';
                            }
                          } else {
                            var children = {};
                            children.cont = [];
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'HIDDEN');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 ? children.err = true : children.err = false;
                          }
                        } else if (yesNo) {
                          if (yesNo.style.display != 'none') {
                            if (hidden || _hidden) {
                              var children = {};
                              var _bridge = _span.childNodes[0].firstChild;
                              var err = item.querySelectorAll('.mini-errorIcon');
                              children.cont = [];
                              _bridge && children.cont.push(_bridge.value);
                              _bridge && (children.attr = 'INPUT');
                              err.length > 0 ? children.err = true : children.err = false;
                            } else {
                              var children = {};
                              var _bridge = _span.childNodes[0].firstChild;
                              children.cont = [];
                              _bridge && children.cont.push(_bridge.value);
                              _bridge && (children.attr = 'SHENPIMONEY');
                              _bridge && (children.parent = 'dataform1');
                              var err = item.querySelectorAll('.mini-errorIcon');
                              err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                              children.id = 'mini-36';
                              children.sign = 'yesNo';
                            }
                          } else {
                            var children = {};
                            children.cont = [];
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'HIDDEN');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 ? children.err = true : children.err = false;
                          }
                        } else if (applyPaymentDays) {
                          //临时额度-申请额度账期
                          var children = {};
                          children.cont = [];
                          var err = item.querySelectorAll('.mini-errorIcon');
                          err.length > 0 ? children.err = true : children.err = false;
                          if (hidden || _hidden) {
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                          } else {
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'REQUIRED'); //console.log(required)
                            var _name = item.querySelector('.mini-textbox-input').name;
                            _bridge && _name && (children.name = _name);
                          }
                        } else if (receiveType) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            var err = item.querySelectorAll('.mini-errorIcon');
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            err.length > 0 ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'RECEIVETYPE');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else if (shenpiMoney) {
                          if (shenpiMoney.style.display == 'none') {
                            var children = {};
                            children.cont = [];
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'HIDDEN');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 ? children.err = true : children.err = false;
                          } else {
                            if (hidden || _hidden) {
                              var children = {};
                              var _bridge = _span.childNodes[0].firstChild;
                              var err = item.querySelectorAll('.mini-errorIcon');
                              children.cont = [];
                              _bridge && children.cont.push(_bridge.value);
                              _bridge && (children.attr = 'INPUT');
                              err.length > 0 ? children.err = true : children.err = false;
                            } else {
                              var children = {};
                              var _bridge = _span.childNodes[0].firstChild;
                              children.cont = [];
                              _bridge && children.cont.push(_bridge.value);
                              _bridge && (children.attr = 'SHENPIMONEY');
                              _bridge && (children.parent = 'dataform1');
                              var err = item.querySelectorAll('.mini-errorIcon');
                              children.id = 'mini-33';
                              children.sign = 'shenpiMoney';
                              err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                            }
                          }
                        } else if (backStatus) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            children.cont = [];
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'BACKSTATUS');
                            _bridge && (children.parent = 'dataform1');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else if (contractSignStatus || contractSealStatus) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            children.cont = [];
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'CONTRACTSIGNSTATUS');
                            _bridge && (children.parent = 'dataform1');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else if (confirmAmount) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            children.cont = [];
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'OTHER');
                            _bridge && (children.id = 'confirmAmount');
                            _bridge && (children.parent = 'dataform1');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else if (other) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            children.cont = [];
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'OTHER');
                            _bridge && (children.id = 'other');
                            _bridge && (children.parent = 'dataform1');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else if (receiveTime) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'RECEIVETIME');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else if (advanceBalance) {
                          if (hidden || _hidden) {
                            var children = {};
                            var _bridge = _span.childNodes[0].firstChild;
                            children.cont = [];
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'INPUT');
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          } else {
                            var children = {};
                            children.cont = [];
                            var _bridge = _span.childNodes[0].firstChild;
                            _bridge && children.cont.push(_bridge.value);
                            _bridge && (children.attr = 'ADVANCE');
                            _bridge && (children.parent = 'dataform1');
                            _bridge && children.cont.push(item.textContent.trim());
                            var err = item.querySelectorAll('.mini-errorIcon');
                            err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                          }
                        } else {
                          var children = {};
                          var _bridge = _span.childNodes[0].firstChild;
                          children.cont = [];
                          _bridge && children.cont.push(_bridge.value);
                          _bridge && (children.attr = _bridge.nodeName);
                          var err = item.querySelectorAll('.mini-errorIcon');
                          err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                        }
                      }
                    } else if (deptName) {
                      var children = {};
                      var _bridge = _span.childNodes[0].firstChild;
                      children.cont = [];
                      _bridge && children.cont.push(_bridge.value);
                      _bridge && (children.attr = _bridge.nodeName);
                      var err = item.querySelectorAll('.mini-errorIcon');
                      err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                    } else if (item.childNodes.length == 5 && one.nodeName == 'SPAN' && three.nodeName == 'A') {
                      var date = item.querySelectorAll('#backDate');
                      var hidden = item.querySelectorAll('#backDate')[0].classList.contains('mini-buttonedit-disabled');
                      if (date.length > 0 && !hidden) {
                        var children = {};
                        var _bridge = _span.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'BACKDATE');
                        _bridge && (children.parent = 'dataform1');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        var _bridge = _span.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = 'INPUT');
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (item.childNodes.length == 5 && one.nodeName == 'SPAN' && three.nodeName == 'INPUT') {
                      if (_span.childNodes.length > 1) {
                        var children = {};
                        var _bridge = _span.childNodes[0].firstChild;
                        children.cont = [];
                        _bridge && children.cont.push(_bridge.value);
                        _bridge && (children.attr = _bridge.nodeName);
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (item.childNodes.length == 5 && one.nodeName == 'INPUT' && three.nodeName == 'SPAN') {
                      if (_span.childNodes.length > 1) {
                        var children = {};
                        children.cont = [];
                        _spanChild && children.cont.push(_spanChild.value);
                        _spanChild && (children.attr = _spanChild.nodeName);
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      } else {
                        var children = {};
                        children.cont = [];
                        children.cont.push(_span.textContent);
                        children.attr = _span.nodeName;
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      }
                    } else if (item.childNodes.length == 5 && one.nodeName == 'SPAN' && three.nodeName == 'SPAN') {
                      var children = {};
                      children.cont = [];
                      var sheep = item.childNodes[1].childNodes[0].firstChild;
                      var _sheep = item.childNodes[3].childNodes[0].firstChild;
                      var storageModel = item.querySelector('#storageModel');
                      var storageModelNumber = item.querySelector('#storageModelNumber');
                      if (storageModel && storageModelNumber) {
                        children.cont.push(item.childNodes[0].textContent.trim());
                        children.cont.push(item.childNodes[1].querySelector('input').value);
                        children.cont.push(item.childNodes[2].textContent.trim());
                        children.cont.push(item.childNodes[3].querySelector('input').value);
                        children.attr = 'STORAGEMODEL';
                      } else {
                        sheep && children.cont.push(sheep.value);
                        sheep && children.cont.push(_sheep.value);
                        children.attr = 'TIME';
                      }
                      var err = item.querySelectorAll('.mini-errorIcon');
                      err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                    } else if (one.nodeName == 'TABLE' && item.childNodes.length == 3) {
                      var children = {};
                      children.cont = [];
                      var trLength = item.childNodes[1].querySelectorAll('tbody')[0].childNodes.length;
                      if (trLength == 2) {
                        var tdCont = item.childNodes[1].querySelectorAll('tbody>tr>td')[0].childNodes.length;
                        if (tdCont == 3) {
                          var first = item.childNodes[1].querySelectorAll('tbody>tr>td')[0].childNodes[0];
                          var _input = item.childNodes[1].querySelector('tbody>tr>td').childNodes[1].querySelector('.mini-buttonedit-input');
                          var second = item.childNodes[1].querySelectorAll('tbody>tr>td')[0].childNodes[2];
                          first && children.cont.push(first.textContent.trim());
                          _input && children.cont.push(_input.value);
                          second && children.cont.push(second.textContent.trim());
                        }
                      } else if (trLength == 4) {
                        var first = item.querySelectorAll('.mini-radiobuttonlist-item	input');
                        var second = item.querySelectorAll('.mini-textbox	.mini-textbox-input');
                        var third = item.querySelectorAll('.mini-textbox')[0].parentElement;
                        var _third = item.querySelectorAll('.mini-textbox')[1].parentElement;
                        var _label = item.querySelectorAll('.mini-radiobuttonlist-item	label');
                        if (first[0].checked == true) {
                          _label[0] && children.cont.push(_label[0].textContent);
                          second[0] && children.cont.push(second[0].value);
                          third && children.cont.push(third.textContent.trim());
                          children.attr = 'THREE';
                        } else if (first[1].checked == true) {
                          _label[1] && children.cont.push(_label[1].textContent);
                          second[1] && children.cont.push(second[1].value);
                          _third && children.cont.push(_third.textContent.trim());
                          children.attr = 'THREE';
                        } else {
                          children.cont.push('');
                          children.attr = 'INPUT';
                        }
                      }
                      var err = item.querySelectorAll('.mini-errorIcon');
                      err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                    } else if (item.childNodes.length == 5 && one.nodeName == 'SPAN' && three.nodeName == 'SPAN') {
                      var children = {};
                      children.cont = [];
                      var sheep = item.childNodes[1].childNodes[0].firstChild;
                      var _sheep = item.childNodes[3].childNodes[0].firstChild;
                      sheep && children.cont.push(sheep.value);
                      sheep && children.cont.push(_sheep.value);
                      children.attr = 'TIME';
                      var err = item.querySelectorAll('.mini-errorIcon');
                      err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                    } else if (_br.length > 0) {
                      var children = {};
                      children.cont = [];
                      var pushCont = item.innerHTML;
                      pushCont && children.cont.push(pushCont);
                      children.attr = 'REMARKS';
                      var err = item.querySelectorAll('.mini-errorIcon');
                      err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                    } else if (item.childNodes.length == 7 && one.nodeName == 'SPAN' && three.nodeName == 'INPUT') {
                      var children = {};
                      children.cont = [];
                      var value = item.querySelector('textarea');
                      value && children.cont.push(value.value);
                      children.attr = 'TEXTAREA';
                      var err = item.querySelectorAll('.mini-errorIcon');
                      err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                    }
                  } else if (item.id == 'pay' && item.querySelector('a')) {
                    var children = {};
                    children.cont = [];
                    var _a = item.querySelector('a');
                    children.cont.push(_a.textContent);
                    children.attr = 'RETURN';
                    children.parent = 'pay';
                  } else if (item.querySelector('a') && item.id == 'sale') {
                    //console.log('1');
                    var children = {};
                    children.cont = [];
                    var _a = item.querySelector('a');
                    children.cont.push(_a.textContent);
                    children.attr = 'RETURN';
                    children.parent = 'sale';
                  } else if (item.id == 'a') {
                    if (item.childNodes.length == 4) {
                      var children = {};
                      children.cont = [];
                      var _a = item.querySelector('a');
                      children.cont.push(_a.textContent);
                      children.attr = 'RETURN';
                      children.parent = 'a';
                    } else {
                      var children = {};
                      children.cont = [];
                      children.cont.push('');
                      children.attr = 'INPUT';
                    }
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  } else if (typeof item.childNodes[1] == 'undefined') {
                    var children = {};
                    children.cont = [];
                    children.cont.push(item.textContent.trim());
                    children.attr = 'TD';
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  } else if (policyType) {
                    //政策类别
                    var children = {};
                    children.cont = [];
                    var checkedBox = item.querySelectorAll('.mini-checkboxlist-item');
                    checkedBox.length > 0 && [].forEach.call(checkedBox, function (val, i) {
                      var _checked = val.querySelector('input');
                      if (_checked.checked) {
                        children.cont.push(val.textContent.trim());
                      }
                    });
                    children.attr = 'POlICY';
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  } else if (typeof item.childNodes[1] != 'undefined' && item.childNodes[1].nodeName == 'DIV' && _zero) {
                    var _sheep = item.querySelectorAll('.mini-list-inner table td');
                    var _input = item.querySelectorAll(".mini-list-inner	.mini-radiobuttonlist-item input[type='radio']");
                    var hidden = item.querySelectorAll('div')[0].classList.contains('mini-disabled');
                    var oneNodenName = item.childNodes[1];
                    var threeNodeName = item.childNodes[3]; // if (hidden) {
                    if (item.childNodes.length == 3 && oneNodenName.nodeName == 'DIV') {
                      var children = {};
                      children.cont = [];
                      var add = 0;
                      var _input = item.querySelectorAll('.mini-list-inner input');
                      _input.length > 0 && [].forEach.call(_input, function (val, idx) {
                        val.checked == true ? children.cont.push(val.nextElementSibling.textContent) : add++;
                      });
                      add == _input.length ? children.cont.push('') : null;
                      children.attr = 'INPUT';
                      var err = item.querySelectorAll('.mini-errorIcon');
                      err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                    } else if (item.childNodes.length == 5 && oneNodenName.nodeName == 'DIV' && threeNodeName.nodeName == 'SPAN') {
                      var radios = item.querySelectorAll('div input');
                      var children = {};
                      children.cont = [];
                      var _input = item.querySelector('span input');
                      var text1 = radios[0].nextElementSibling;
                      var text2 = radios[1].nextElementSibling; // console.log(radios)
                      if (radios[0].checked == true) {
                        children.cont.push(text1.textContent.trim());
                        children.attr = 'BADSALE';
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                        if (_input.value == '') {
                          children.number = 0;
                        } else {
                          children.cont.push(_input.value);
                          children.cont.push(item.childNodes[4].textContent.trim());
                          children.number = 1;
                        }
                      } else if (radios[1].checked == true) {
                        // console.log('2');
                        children.cont.push(text2.textContent.trim());
                        children.attr = 'BADSALE';
                        if (_input.value == '') {
                          children.number = 0;
                        } else {
                          children.cont.push(_input.value);
                          children.cont.push(item.childNodes[4].textContent.trim());
                          children.number = 1;
                        }
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      } else if (item.querySelector('.mini-list-inner')) {
                        var children = {};
                        children.cont = [''];
                        children.attr = 'INPUT';
                        var err = item.querySelectorAll('.mini-errorIcon');
                        err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      } else {
                        if (typeof _sheep != 'undefined' && _sheep.length > 0) {
                          var children = {};
                          children.cont = [];
                          var cont = [];
                          _sheep.length > 0 && [].forEach.call(_sheep, function (val, index) {
                            var key = val.querySelector('input');
                            if (key && key.type == 'radio') {
                              if (key.checked == true) {
                                children.cont.push(val.querySelector('label').textContent);
                                children.attr = 'TD';
                              } else {
                                cont.push(0);
                              }
                            }
                          });
                          if (cont.length == 2) {
                            children.attr = 'td';
                          }
                          var err = item.querySelectorAll('.mini-errorIcon');
                          err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                        } else if (_input.length > 0) {
                          var children = {};
                          children.cont = [];
                          var add = 0;
                          _input.length > 0 && [].forEach.call(_input, function (item, i) {
                            item.checked == true ? (children.cont.push(item.nextElementSibling.textContent.trim()), add++) : null;
                          });
                          children.attr = 'INPUT';
                          var err = item.querySelectorAll('.mini-errorIcon');
                          err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                        }
                      }
                      //               } else {
                      //                 if (typeof _sheep != 'undefined' && _sheep.length > 0) {
                      //                   var cont = [];
                      //                   var children = {};
                      //                   children.cont = [];
                      //                   children.checked = [];
                      //                   _sheep.length > 0 && [].forEach.call(_sheep, function (val, index) {
                      //                     var key = val.querySelector('input');
                      //                     var _id = item.querySelectorAll('div')[0];
                      //                     children.son = _id.id;
                      //                     if (key && key.type == 'radio') {
                      //                       if (key.checked == true) {
                      //                         children.cont.push(val.querySelector('label').textContent);
                      //                         children.attr = 'RADIO';
                      //                         children.checked.push(true);
                      //                         children.parent = 'dataform1';
                      //                       } else {
                      //                         cont.push(0);
                      //                         children.cont.push(val.querySelector('label').textContent);
                      //                         children.attr = 'RADIO';
                      //                         children.checked.push(false);
                      //                         children.parent = 'dataform1';
                      //                       }
                      //                       var err = item.querySelectorAll('.mini-errorIcon');
                      //                       err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                      //                     }
                      //                   });
                      //                 }
                    }
                  } else if (download) {
                    var value = item.querySelectorAll('#Filelist	tr');
                    var children = {};
                    children.cont = [];
                    children.memory = [];
                    value.length > 0 && [].forEach.call(value, function (val, index) {
                      var _value = val.querySelectorAll('td');
                      _value.length > 0 && [].forEach.call(_value, function (item, i) {
                        if (item.childNodes[0] && item.childNodes[0].nodeName == 'A' && item.childNodes[0].innerHTML != '删除') {
                          children.cont.push(item.textContent);
                        } else if (item.childNodes[0] && item.childNodes[0].nodeName == 'A' && item.childNodes[0].innerHTML == '删除') {
                          children.delete = true;
                        } else if (item.childNodes[0] && item.innerHTML != '&nbsp;') {
                          children.memory.push(item.textContent);
                        }
                      });
                    });
                    children.attr = 'A';
                    children.parent = 'dataform1';
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  } else if (_childNodesOne.nodeName == 'INPUT' && _childNodesOne.type == 'hidden') {
                    var children = {};
                    children.attr = 'HIDDEN';
                    var err = item.querySelectorAll('.mini-errorIcon');
                    err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
                  }
                  data.onePartCont.push(children);
                }
              });
            });
          } //**********分公司采购付款管理流程******************//
          var div1 = _sign.querySelector("#div1");
          var newTable = _sign.querySelector("#newTable");
          var datagrid2 = _sign.querySelector("#datagrid2"); //付款银行表格
          var cw = _sign.querySelector("#cw");
          if (newTable) {
            var formLabel = newTable.querySelectorAll(".form_label");
          }
          if (cw && cw.style.display != "none") {
            var cwForm = cw.querySelectorAll(".form_label");
            [].forEach.call(cwForm, function (d, i) {
              data.FGSCGFK.second = {};
              var next = d.nextElementSibling;
              data.FGSCGFK.second.title = d.textContent.trim();
              data.FGSCGFK.second.cont = [];
              if (next.nextElementSibling.querySelector("input").disabled) {
                data.FGSCGFK.second.disable = true;
                data.FGSCGFK.second.cont.push(next.childNodes[0].textContent.trim() + next.querySelector("input").value + next.childNodes[next.childNodes.length - 1].textContent.trim());
                data.FGSCGFK.second.cont.push(next.nextElementSibling.childNodes[0].textContent.trim() + next.nextElementSibling.querySelector("input").value);
              } else {
                data.FGSCGFK.second.disable = false;
                var dispart = {};
                dispart.title = next.childNodes[0].textContent.trim();
                dispart.cont = next.querySelector("input").value;
                var err = next.querySelector(".mini-errorIcon");
                err ? dispart.err = true : dispart.err = false;
                var other = {};
                var secondErr = next.nextElementSibling.querySelector(".mini-errorIcon");
                other.title = next.nextElementSibling.childNodes[0].textContent.trim();
                other.cont = next.nextElementSibling.querySelector("input").value;
                secondErr ? other.err = true : other.err = false;
                data.FGSCGFK.second.cont.push(dispart);
                data.FGSCGFK.second.cont.push(other);
              } // data.FGSCGFK.second.push(obj);
            });
          }
          formLabel && formLabel.length > 0 && [].forEach.call(formLabel, function (d, i) {
            data.FGSCGFK.title.push(d.childNodes[0].textContent);
            data.FGSCGFK.cont.push(d.nextElementSibling.querySelectorAll("input")[0].value);
          });
          if (div1 && div1.style.display != "none" && datagrid2 && datagrid2.classList.contains('mini-disabled') == false && datagrid2.querySelector(".mini-grid-columns-view") && datagrid2.querySelector(".mini-grid-columns-view").textContent.indexOf("付款银行") !== -1) {
            //付款申请单明细（奖金管理、出纳、分公司出纳）3.8
            data.FGSCGFK.twoPartCont = [];
            data.FGSCGFK.twoPartTitle = []; //表头
            var head = datagrid2.querySelectorAll('.mini-panel-viewport .mini-grid-columns-view .mini-grid-table	.mini-grid-headerCell');
            head && head.length > 0 && [].forEach.call(head, function (item, i) {
              var title = {};
              title.title = item.querySelector(".mini-grid-headerCell-inner").childNodes[0].textContent.trim();
              data.FGSCGFK.twoPartTitle.push(title);
            }); //下面的表格
            var sheep = datagrid2.querySelectorAll('.mini-panel-viewport .mini-grid-rows-view .mini-grid-table	.mini-grid-row');
            var datagridsub = elem.querySelector("#datagridsub");
            sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
              //item.classList.contains("mini-grid-newRow") == false
              if (item.classList.contains("mini-grid-newRow")) {
                var bridge = item.querySelectorAll('td.mini-grid-cell');
                var children = [];
                if (item.childNodes.length > 0) {
                  children.push(item.childNodes[1].textContent);
                  children.push(item.childNodes[2].textContent);
                  children.push(item.childNodes[3].textContent);
                  children.push(item.childNodes[4].textContent);
                  children.push(item.childNodes[5].textContent);
                  children.push("payOffDetail");
                } //付款申请单特有的明细表标识
                data.FGSCGFK.twoPartCont.push(children);
              } else {
                var bridge = item.querySelectorAll('td');
                var children = [];
                bridge.length > 0 && [].forEach.call(bridge, function (val, index) {
                  if (val.childNodes.length > 0) {
                    var _bridge = val.textContent;
                    _bridge && children.push(_bridge);
                  }
                });
                children.push("");
                data.FGSCGFK.twoPartCont.push(children);
              }
            });
            data.FGSCGFK.type = "payOffDetail";
          }
        } //dataform2下内容(临时额度流程)
        var dataform2 = elem.contentWindow.document.querySelector('#dataform2');
        var tableC = elem.contentWindow.document.querySelectorAll('.table-c');
        if (elem.contentWindow.document.querySelectorAll('.table-c')[1]) {
          var nuiFormTable = elem.contentWindow.document.querySelectorAll('.table-c')[1].previousElementSibling.classList.contains('nui-form-table');
        }
        if (nuiFormTable) {
          var table = elem.contentWindow.document.querySelectorAll('.table-c')[1].previousElementSibling.querySelectorAll('table tr td');
          table.length > 0 && [].forEach.call(table, function (item, i) {
            if (i % 2 == 0 && item.parentElement.style.display != 'none' && item.style.display != 'none' && item.parentElement.parentElement.parentElement.style.display != 'none' && item.childNodes.length >= 1) {
              var children = {};
              var star = item.querySelector('span');
              if (star && star.style.display != 'none') {
                var _title = item.textContent;
                children.key = '*';
                children.title = _title.trim().replace(/：/g, '');
              } else {
                var _title = item.textContent;
                children.title = _title.trim().replace(/：/g, '');
              }
              data.threePartTitle.push(children);
            } else if (i % 2 == 1 && item.parentElement.style.display != 'none' && item.style.display != 'none' && item.parentElement.parentElement.parentElement.style.display != 'none' && item.childNodes.length > 1) {
              var children = {};
              children.cont = [];
              if (item.childNodes.length == 3 && item.childNodes[1].nodeName == 'SPAN') {
                var _input = item.querySelector('.mini-textbox-input');
                var hidden = item.querySelector('span').classList.contains('mini-textbox-disabled');
                var _hidden = item.querySelector('span').classList.contains('mini-buttonedit-disabled');
                var textarea = item.querySelector('textarea');
                if (textarea) {
                  if (hidden || _hidden) {
                    var _input = item.querySelector('span>span>textarea').value;
                    children.cont.push(_input);
                    children.attr = 'TEXTAREA';
                  } else {
                    var _input = item.querySelector('span>span>textarea').value;
                    children.cont.push(_input);
                    children.attr = 'CANTEXTAREA';
                    var _id = item.querySelector('span').id;
                    _id && (children.parenID = _id);
                  }
                } else {
                  if (hidden || _hidden) {
                    var _input = item.querySelector('span>span>input').value;
                    children.cont.push(_input);
                    children.attr = 'INPUT';
                  } else {
                    var _up = item.querySelector('.mini-buttonedit-up');
                    if (_up) {
                      var _input = item.querySelector('span>span>input').value;
                      children.cont.push(_input);
                      children.attr = 'CANINPUTADDNUM';
                      var _id = item.querySelector('span').id;
                      _id && (children.parenID = _id);
                    } else {
                      var _input = item.querySelector('span>span>input').value;
                      children.cont.push(_input);
                      children.attr = 'CANINPUTNUM';
                      var _id = item.querySelector('span').id;
                      _id && (children.parenID = _id);
                    }
                  }
                }
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (item.childNodes[1].nodeName == 'INPUT' && item.childNodes[1].type == 'hidden') {
                children.attr = 'HIDDEN';
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              }
              data.threePartCont.push(children);
            }
          });
        }
        if (dataform2 || tableC.length == 2) {
          if (dataform2) {
            var table = dataform2.querySelectorAll('table tr td');
          } else if (tableC.length == 2) {
            var table = elem.contentWindow.document.querySelectorAll('.table-c')[1].querySelectorAll('table tr td');
          }
          table.length > 0 && [].forEach.call(table, function (item, i) {
            if (i % 2 == 0 && item.parentElement.style.display != 'none' && item.style.display != 'none' && item.parentElement.parentElement.parentElement.style.display != 'none' && item.childNodes.length >= 1) {
              var star = item.querySelector('span');
              if (star && star.style.display != 'none') {
                var children = {};
                var _title = item.textContent;
                children.key = '*';
                _title.trim() != '' && (children.title = _title.trim().replace(/：/g, ''));
              } else {
                var _title = item.textContent;
                var children = {};
                _title.trim() != '' && (children.title = _title.trim().replace(/：/g, ''));
              }
              data.threePartTitle.push(children);
            } else if (i % 2 == 1 && item.parentElement.style.display != 'none' && item.style.display != 'none' && item.parentElement.parentElement.parentElement.style.display != 'none' && item.childNodes.length > 1) {
              var children = {};
              children.cont = [];
              if (item.childNodes.length == 3 && item.childNodes[1].nodeName == 'SPAN') {
                var _input = item.querySelector('.mini-textbox-input'); //console.log(_input);
                var hidden = item.querySelector('span').classList.contains('mini-textbox-disabled');
                var _hidden = item.querySelector('span').classList.contains('mini-buttonedit-disabled');
                var textarea = item.querySelector('textarea');
                if (textarea) {
                  var _textarea = item.querySelector('span>span>textarea').value;
                  if (hidden || _hidden) {
                    children.cont.push(_textarea);
                    children.attr = 'TEXTAREA';
                  } else {
                    children.cont.push(_textarea);
                    children.attr = 'CANTEXTAREA';
                    var _id = item.querySelector('span').id;
                    _id && (children.parenID = _id);
                  }
                } else {
                  var _input = item.querySelector('span>span>input').value;
                  if (hidden || _hidden) {
                    children.cont.push(_input);
                    children.attr = 'INPUT';
                  } else {
                    children.cont.push(_input);
                    children.attr = 'CANINPUT';
                    var _id = item.querySelector('span').id;
                    _id && (children.parenID = _id);
                  }
                }
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              } else if (item.childNodes[1].nodeName == 'INPUT' && item.childNodes[1].type == 'hidden') {
                children.attr = 'HIDDEN';
                var err = item.querySelectorAll('.mini-errorIcon');
                err.length > 0 && err[0].nodeName == 'SPAN' ? children.err = true : children.err = false;
              }
              data.threePartCont.push(children);
            }
          });
        } /********良品 是否低于月度决策价格等操作 烦********/
        var cause = elem.contentWindow.document.querySelector('#cause');
        if (cause && cause.style.display == 'block') {
          var sheep = cause.querySelectorAll('.form_label');
          sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
            if (item.parentElement.style.display != 'none' && item.style.display != 'none' && item.parentElement.parentElement.parentElement.style.display != 'none') {
              var children = {};
              var star = item.querySelector('span');
              if (star && star.style.display != 'none') {
                var _title = item.textContent;
                children.key = '*';
                children.title = _title.trim().replace(/：/g, '');
              } else {
                var _title = item.textContent;
                children.title = _title.trim().replace(/：/g, '');
              }
              data.threePartTitle.push(children);
            }
          });

          function radio(n1) {
            var children = {};
            children.cont = [];
            var _n1 = n1.classList.contains('mini-disabled');
            if (_n1) {
              var sheep = n1.querySelectorAll('.mini-radiobuttonlist-item input');
              sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
                item.checked ? children.cont.push(item.nextElementSibling.textContent.trim()) : null;
              });
              children.attr = 'INPUT';
            } else {
              var sheep = n1.querySelectorAll('.mini-radiobuttonlist-item input');
              children.checked = [];
              sheep.length > 0 && [].forEach.call(sheep, function (item, i) {
                var _cont = item.nextElementSibling.textContent.trim();
                children.cont.push(_cont);
                children.checked.push(item.checked);
              });
              children.parenID = n1.id;
              children.attr = 'RADIO';
            }
            var err = n1.querySelector("div[title='This field is required.']");
            err ? children.err = true : children.err = false;
            data.threePartCont.push(children);
          };

          function canInput(n1) {
            var children = {};
            children.cont = [];
            var hidden = n1.classList.contains('mini-textbox-disabled');
            var _hidden = n1.classList.contains('mini-buttonedit-disabled');
            var _input = n1.querySelector('input');
            if (hidden || _hidden) {
              _input && children.cont.push(_input.value);
              children.attr = 'INPUT';
            } else {
              _input && children.cont.push(_input.value);
              children.parenID = n1.id;
              children.attr = 'CANINPUT';
            }
            var err = n1.querySelector("div[title='This field is required.']");
            err ? children.err = true : children.err = false;
            n1.nextSibling && n1.nextSibling.textContent.trim() != "" && children.cont.push(n1.nextSibling.textContent.trim());
            data.threePartCont.push(children);
          }
          var isBelowJcPrice = cause.querySelector('#isBelowJcPrice');
          var sqPrice = cause.querySelector('#sqPrice');
          var isBelowKsPrice = cause.querySelector('#isBelowKsPrice');
          var ksPrice = cause.querySelector('#ksPrice');
          if (isBelowJcPrice) {
            radio(isBelowJcPrice);
          }
          if (sqPrice) {
            radio(sqPrice);
          }
          if (isBelowKsPrice) {
            radio(isBelowKsPrice);
          }
          if (ksPrice) {
            canInput(ksPrice);
          }
        } /*-----------分割线-----------*/
        function TotalTF(n1) {
          switch (n1) {
            case 'XTHJG':
              var arr = data.XTHJG.total;
              data.XTHJG.totalTF = false;
              arr.length > 0 && [].forEach.call(arr, function (item, i) {
                if (item != '' && item != '&nbsp;' && item != '	:	') {
                  data.XTHJG.totalTF = true;
                }
              });
              break;
            case 'THJL':
              var arr = data.THJL.total;
              data.THJL.totalTF = false;
              arr.length > 0 && [].forEach.call(arr, function (item, i) {
                if (item != '' && item != '&nbsp;' && item != '	:	') {
                  data.THJL.totalTF = true;
                }
              });
              break;
            case 'KCBJ':
              var arr = data.KCBJ.total;
              data.KCBJ.totalTF = false;
              arr.length > 0 && [].forEach.call(arr, function (item, i) {
                if (item != '' && item != '&nbsp;' && item != '	:	') {
                  data.KCBJ.totalTF = true;
                }
              });
              break;
            case 'ZDJL':
              var arr = data.ZDJL.total;
              data.ZDJL.totalTF = false;
              arr.length > 0 && [].forEach.call(arr, function (item, i) {
                if (item != '' && item != '&nbsp;' && item != '	:	') {
                  data.ZDJL.totalTF = true;
                }
              });
              break;
            case 'QQTHBC':
              var arr = data.QQTHBC.total;
              data.QQTHBC.totalTF = false;
              arr.length > 0 && [].forEach.call(arr, function (item, i) {
                if (item != '' && item != '&nbsp;' && item != '	:	') {
                  data.QQTHBC.totalTF = true;
                }
              });
              break;
            default:
              var arr = data.total;
              data.totalTF = false;
              arr.length > 0 && [].forEach.call(arr, function (item, i) {
                if (item != '' && item != '&nbsp;' && item != '	:	') {
                  data.totalTF = true;
                }
              });
              break;
          }
        }
        data.totalTF = false;
        if (data.total.length > 0) {
          TotalTF(1);
        } else {
          if (data.XTHJG) {
            TotalTF('XTHJG');
          }
          if (data.THJL) {
            TotalTF('THJL');
          }
          if (data.KCBJ) {
            TotalTF('KCBJ');
          }
          if (data.ZDJL) {
            TotalTF('ZDJL');
          }
          if (data.QQTHBC) {
            TotalTF('QQTHBC');
          }
        }
        return data;
      }
    },
    doAction_uiControl22_QmOw34: function (data, elem) {
      if (data.eventType == 'change') {
        var d = data.dataCustom;
        if (d[0] == 'ysp-agree') {
          var key = elem.contentWindow.document.querySelectorAll('#approval	.nui-form-table textarea')[0];
          key.value = d[1];
          var $v = $(key);
          $v.trigger('change');
        } else if (d[0] == 'ysp-can-input') {
          var _input = elem.contentWindow.document.querySelector('' + '#' + d[2] + '>span>input');
          _input.dispatchEvent(new Event("focus"));
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'ysp-spinner field') {
          var _input = elem.contentWindow.document.querySelector("#form2	.mini-spinner	span input");
          _input.dispatchEvent(new Event("focus"));
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'ysp-receive-time') {
          var endT = elem.contentWindow.document.querySelector("#receiveTime").querySelectorAll("input")[0];
          endT.dispatchEvent(new Event("focus"));
          endT.dispatchEvent(new Event("mousedown"));
          endT.value = d[1];
          endT.dispatchEvent(new Event("change"));
          endT.dispatchEvent(new Event("mouseout"));
        } else if (d[0] == 'ysp-datepicker-time') {
          var endT = elem.contentWindow.document.querySelector(".mini-datepicker").querySelectorAll("input")[0];
          endT.dispatchEvent(new Event("focus"));
          endT.dispatchEvent(new Event("mousedown"));
          endT.value = d[1];
          endT.dispatchEvent(new Event("change"));
          endT.dispatchEvent(new Event("mouseout"));
          endT.dispatchEvent(new Event("blur"));
        } else if (d[0] == 'ysp-backDate') {
          if (d[2] == 'form1') {
            var _input = elem.contentWindow.document.querySelectorAll('#form1	#backDate	.mini-buttonedit-input')[0];
            var _btn = elem.contentWindow.document.querySelectorAll('#form1	#onChangeArchiveId')[0];
            _input.focus();
            _input.value = d[1];
            _input.dispatchEvent(new Event("change"));
            _btn.click();
          }
        } else if (d[0] == 'ysp-returnDate') {
          var _input = elem.contentWindow.document.querySelectorAll('#form1	#returnDate	.mini-buttonedit-input')[0];
          _input.focus();
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'ysp-sealDate') {
          var _input = elem.contentWindow.document.querySelectorAll('#form1	#contractSealDate	.mini-buttonedit-input')[0];
          _input.focus();
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'field') {
          if (d[2] == 'form1') {
            var _input = elem.contentWindow.document.querySelectorAll('#form1	#backStatus	.mini-buttonedit-input')[0];
            _input.dispatchEvent(new Event("focus"));
            _input.click();
            setTimeout(function () {
              var _btn = elem.contentWindow.document.querySelectorAll('#mini-75	tr')[d[1]].querySelectorAll('td')[1];
              _btn.dispatchEvent(new Event("focus"));
              _btn.click();
            }, 50);
          }
        } else if (d[0] == 'ysp-can-textarea') {
          var _input = elem.contentWindow.document.querySelector('' + '#' + d[2] + '	.mini-textbox-input'); // window._input = _input;
          _input.value = d[1]; // var e = document.createEvent("change"); 
          _input.dispatchEvent(new Event("change")); //     var ev = new Event("change");
          //     _input.dispatchEvent(ev);
        } else if (d[0] == 'ysp-Quota') {}
      } else if (data.eventType == 'click') {
        var d = data.dataCustom;
        switch (d[0]) {
          case 'btn btn-xs btn-primary btn-hollow detail':
            //************按钮
            if (d[2] != null && d[2].indexOf("icon") == -1) {
              var _btn = elem.contentWindow.document.querySelector('' + '#' + d[2] + ''); /******************************************PC有ID的按钮（包括制度流程中的查看按钮）**********************************************/
            } else if (d[2] != null && d[2].indexOf("icon") !== -1) {
              var _btn = elem.contentWindow.document.querySelector('' + '.' + d[2] + '');
            } else if (d[6] != null) {
              var _btn = elem.contentWindow.document.querySelectorAll('' + '#' + d[6] + '	.mini-button' + '')[d[1]];
            } else {
              var _btn = elem.contentWindow.document.querySelector("#report").querySelectorAll("a")[1];
            }
            _btn.click();
            if (_btn.getAttribute("id") == "btbSummary") {
              ysp.customHelper.forceMatchModels("Summary");
            } else if (_btn.getAttribute("id") == 'btbAddr') {
              ysp.customHelper.forceMatchModels("Address");
            } else if (_btn.getAttribute("id") == 'credit') {
              ysp.customHelper.forceMatchModels("saleCredit");
            }
            break;
          case 'btn btn-xs btn-primary btn-hollow ysp-detail':
            var _btn = elem.contentWindow.document.querySelectorAll('' + '.' + d[2] + '')[d[1]];
            _btn.click();
            break;
          case 'ysp-mask':
            var _icon = elem.contentWindow.document.querySelector('#receiveType	.mini-buttonedit-icon');
            _icon.dispatchEvent(new Event("focus"));
            _icon.click();
            break;
          case 'ysp-receive-type-cont':
            var _input = elem.contentWindow.document.querySelector('#receiveType>span>input');
            _input.dispatchEvent(new Event("focus"));
            _input.click();
            break;
          case 'ysp-dialog-cont':
            var _icon = elem.contentWindow.document.querySelectorAll('#mini-38	.mini-listbox-items	tr')[d[1]];
            _icon.dispatchEvent(new Event("focus"));
            _icon.click();
            break;
          case 'ysp-Download-Attachment':
            var _btn = elem.contentWindow.document.querySelectorAll("#Filelist	a")[d[1]];
            var url = _btn.href;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.onreadystatechange = function () {
              if (xhr.status == 200 && xhr.readyState == 4) {
                if (ysp.appMain.isIOS()) {
                  top.EAPI.openWindow(url + '&_ysp_filepreview=1');
                } else if (ysp.appMain.isAndroid()) {
                  top.location.href = url;
                }
              } else {
                elem.ownerDocument.defaultView.open(url, '404 - found');
              }
            };
            xhr.send();
            break;
          case 'ysp-Enclosure-Delete':
            if (d[2] == 'dataform1') {
              var _btn = elem.contentWindow.document.querySelectorAll('#dataform1>table>tbody>tr>td	a')[d[1]];
              _btn.click();
            } else if (d[2] == 'form1') {
              var _btn = elem.contentWindow.document.querySelectorAll("#form1>table>tbody>tr>td	a[href='javascript:;']")[d[1]];
              _btn.click();
            }
            break;
          case 'ysp-radio':
            if (d[2] == 'form1' && d[3] == 'contractSealStatus') {
              var _btn = elem.contentWindow.document.querySelectorAll("#form1	#contractSealStatus	input")[d[1]];
              _btn.click();
            }
            break;
          case 'ysp-shenpiMoney':
            var _icon = elem.contentWindow.document.querySelector('' + '#' + d[5] + '	.mini-buttonedit-input' + '');
            var id = '#' + d[4] + '	tr';
            _icon.focus();
            _icon.click();
            setTimeout(function () {
              var _btn = elem.contentWindow.document.querySelectorAll('.mini-popup	tr')[d[1]].querySelectorAll('td')[1];
              _btn.focus();
              _btn.click();
            }, 50);
            _icon.dispatchEvent(new Event("change"));
            break;
          case 'ysp-belowKsPeice':
            var _btn = elem.contentWindow.document.querySelectorAll('' + '#' + d[2] + '	input' + '');
            _btn[d[1]].click();
            break;
          case 'ysp-ReturnGoods':
            var _btn = elem.contentWindow.document.querySelector('' + '#' + d[2] + '	a' + '');
            var url = _btn.href;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.onreadystatechange = function () {
              if (xhr.status == 200 && xhr.readyState == 4) {
                if (ysp.appMain.isIOS()) {
                  top.EAPI.openWindow(url + '&_ysp_filepreview=1');
                } else if (ysp.appMain.isAndroid()) {
                  top.location.href = url;
                }
              } else {
                elem.ownerDocument.defaultView.open(url, '404 - found');
              }
            };
            xhr.send();
            break;
          case 'ysp-cause':
            var _btn = elem.contentWindow.document.querySelectorAll('' + '#' + d[2] + '	.mini-radiobuttonlist-item' + '')[d[1]].querySelector('input');
            _btn.click();
            break;
          case 'btn btn-xs btn-primary btn-hollow ysp-check':
            var _btn = elem.contentWindow.document.querySelector('' + '#' + d[2] + '').nextElementSibling;
            _btn.click();
            break;
          case 'ysp-inputRadio':
            var _btn = elem.contentWindow.document.querySelector('' + '#' + d[2] + '').querySelectorAll("input")[d[1]];
            _btn.click();
            break;
          case 'ysp-checkboxes':
            var _btn = elem.contentWindow.document.querySelector('' + '#' + d[2] + '').querySelector("input");
            _btn.click();
            break;
        }
      } else if (data.eventType == 'blur') {
        var d = data.dataCustom;
        if (d[0] == 'ysp-advance field') {
          var _input = elem.contentWindow.document.querySelector('#advanceBalance	.mini-buttonedit-input');
          _input.focus();
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'ysp-otherInput field') {
          var _input = elem.contentWindow.document.querySelector('' + '#' + d[2] + '	.mini-textbox-input');
          _input.focus();
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'ysp-storageModel field') {
          var _input = elem.contentWindow.document.querySelector('#storageModel	.mini-textbox-input');
          _input.focus();
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'ysp-storageModelNumber field') {
          var _input = elem.contentWindow.document.querySelector('#storageModelNumber	.mini-textbox-input');
          _input.focus();
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'ysp-required field') {
          var _input = elem.contentWindow.document.querySelector(".mini-required	input[name=" + '' + d[2] + '' + "]");
          _input.focus();
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        } else if (d[0] == 'ysp-spinner field') {
          var _input = elem.contentWindow.document.querySelector("#form2	.mini-spinner	span input");
          _input.dispatchEvent(new Event("focus"));
          _input.dispatchEvent(new Event("mousedown"));
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
          _input.dispatchEvent(new Event("mouseout"));
          _input.dispatchEvent(new Event("blur")); //     _input.focus();
          //     _input.value = d[1];
          //     _input.dispatchEvent(new Event("change"));
          //     _input.dispatchEvent(new Event("blur"));
        } else if (d[0] == 'ysp-can-input') {
          var _input = elem.contentWindow.document.querySelector('' + '#' + d[3] + '>span>input');
          _input.focus();
          _input.value = d[1];
          _input.dispatchEvent(new Event("change"));
        }
      } else if (data.eventType == "detailBlur") {
        var d = data.dataCustom;
        var num = parseInt(d[2]) + 1;
        var _num = parseInt(d[3]) + 1;
        var _input1 = elem.contentWindow.document.querySelectorAll('#datagridsub	.mini-panel-viewport	.mini-panel-body	.mini-grid-rows-view	.mini-grid-table	tr')[num].querySelectorAll('td')[_num].children[0];
        window._input1 = _input1;
        if (d[0] == 'ysp-detailed-field field') {
          var ev = new Event("mousedown");
          ev.initEvent();
          window._input1.dispatchEvent(ev);
          var eva = new Event("mouseup");
          eva.initEvent();
          window._input1.dispatchEvent(eva);
          window._input1.click();
          var eidtWrap = elem.contentWindow.document.querySelector(".mini-grid-editwrap");
          if (eidtWrap) {
            eidtWrap.querySelectorAll("input")[0].style.display = "block"; //eidtWrap.querySelectorAll("input")[0].value = d[1].trim();
            eidtWrap.querySelectorAll("input")[0].value = d[1];
            eidtWrap.querySelectorAll("input")[0].dispatchEvent(new Event("change"));
            eidtWrap.ownerDocument.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: eidtWrap.ownerDocument.defaultView }));
            eidtWrap.querySelectorAll("input")[0].style.display = "none";
          }
        }
      } else if (data.eventType == "focus") {
        var d = data.dataCustom;
        if (d[0] == 'ysp-detailed-field field') {
          var num = parseInt(d[2]) + 1;
          var _num = parseInt(d[3]) + 1;
          if (elem.contentWindow.document.querySelector('#datagrid2')) {
            var _input1 = elem.contentWindow.document.querySelectorAll('#datagrid2	.mini-panel-viewport	.mini-panel-body	.mini-grid-rows-view	.mini-grid-table	tr')[num].querySelectorAll('td')[_num].children[0];
          } else {
            var _input1 = elem.contentWindow.document.querySelectorAll('#datagridsub	.mini-panel-viewport	.mini-panel-body	.mini-grid-rows-view	.mini-grid-table	tr')[num].querySelectorAll('td')[_num].children[0];
          }
          window._input1 = _input1;
          window._input1.ownerDocument.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window._input1.ownerDocument.defaultView }));
          window._input1.focus();
          window._input1.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window._input1.ownerDocument.defaultView }));
          window._input1.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window._input1.ownerDocument.defaultView }));
          window._input1.click();
        }
      } else if (data.eventType == 'changeSO') {
        var d = data.dataCustom;
        if (d[0] == 'ysp-spinner field') {
          var _input = elem.contentWindow.document.querySelector("#form2	.mini-spinner	span input"); //     _input.focus();
          //     _input.value = d[1];
          //     _input.dispatchEvent(new Event("change"));
          //     _input.dispatchEvent(new Event("blur"));
          window._input = _input;
          window._input.dispatchEvent(new Event("focus"));
          window._input.dispatchEvent(new Event("mousedown"));
          window._input.value = d[1];
          window._input.dispatchEvent(new Event("change"));
          window._input.dispatchEvent(new Event("mouseout"));
          window._input.dispatchEvent(new Event("change")); //     _input.dispatchEvent(new Event("blur"));
        }
      } else if (data.eventType == 'numblur') {
        var d = data.dataCustom;
        var _input = elem.contentWindow.document.querySelector('' + '#' + d[2] + '>span>input');
        _input.dispatchEvent(new Event("focus"));
        _input.value = d[1];
        _input.dispatchEvent(new Event("change"));
      } else if (data.eventType == 'addNumblur') {
        var d = data.dataCustom;
        var _input = elem.contentWindow.document.querySelector('' + '#' + d[2] + '>span>input');
        _input.dispatchEvent(new Event("focus"));
        _input.value = d[1];
        _input.dispatchEvent(new Event("change"));
      } else if (data.eventType == 'moreOnClick') {
        var d = data.dataCustom;
        if (d == "svpCfo") {
          /*公司收文里的选择高级副总裁或财务总监*/
          var _input = elem.contentWindow.document.querySelector("#svpCfo .mini-buttonedit-buttons .mini-buttonedit-button");
          window._input = _input;
          window._input.focus();
          window._input.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window._input.ownerDocument.defaultView }));
          window._input.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window._input.ownerDocument.defaultView }));
          window._input.click();
        } else if (d == "deptHead") {
          /*公司收文里的选择部門負責人*/
          var _input = elem.contentWindow.document.querySelector("#deptHead .mini-buttonedit-buttons .mini-buttonedit-button");
          window._input = _input;
          window._input.focus();
          window._input.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window._input.ownerDocument.defaultView }));
          window._input.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window._input.ownerDocument.defaultView }));
          window._input.click();
        } else if (d == "deptApprover") {
          /*公司收文里的选择部門負責人*/
          var _input = elem.contentWindow.document.querySelector("#deptApprover .mini-buttonedit-buttons .mini-buttonedit-button");
          window._input = _input;
          window._input.focus();
          window._input.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window._input.ownerDocument.defaultView }));
          window._input.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window._input.ownerDocument.defaultView }));
          window._input.click();
        }
      } else if (data.eventType == 'clear') {
        var d = data.dataCustom;
        if (d == "svpCfo") {
          var _input = elem.contentWindow.document.querySelector("#svpCfo .mini-buttonedit-buttons .mini-buttonedit-close");
          _input.click();
        } else if (d == "deptHead") {
          var _input = elem.contentWindow.document.querySelector("#deptHead .mini-buttonedit-buttons .mini-buttonedit-close");
          _input.click();
        } else if (d == "deptApprover") {
          var _input = elem.contentWindow.document.querySelector("#deptApprover .mini-buttonedit-buttons .mini-buttonedit-close");
          _input.click();
        }
      } else if (data.eventType == "oneClick") {
        var d = data.dataCustom;
        if (d == "isFinish") {
          var _input = elem.contentWindow.document.querySelector("#isFinish input");
          _input.click();
        }
      } else if (data.eventType == "companyBlur") {
        var cw = elem.contentWindow.document.querySelector("#cw");
        var d = data.dataCustom;
        var imprestBalance = cw.querySelector("input[type='text'][id*='imprestBalance']");
        imprestBalance.value = d[1];
        imprestBalance.dispatchEvent(new Event("change"));
      } else if (data.eventType == "otherBlur") {
        var cw = elem.contentWindow.document.querySelector("#cw");
        var d = data.dataCustom;
        var otherReason = cw.querySelector("input[type='text'][name='otherReason']");
        otherReason.value = d[1];
        otherReason.dispatchEvent(new Event("change"));
      } else if (data.eventType == "timeBlur") {
        var d = data.dataCustom;
        var num = parseInt(d[2]) + 1;
        var _num = parseInt(d[3]) + 1;
        var number = parseInt(d[3]);
        if (elem.contentWindow.document.querySelector('#datagrid2')) {
          var _input1 = elem.contentWindow.document.querySelectorAll('#datagrid2	.mini-panel-viewport	.mini-panel-body	.mini-grid-rows-view	.mini-grid-table	tr')[num].querySelectorAll('td')[_num].children[0];
          var bank = ["", "CCB", "BOC", "CEB", "BCM", "CMB", 'BOB', "HXB", "SPD", "ICBC", "ABOC", "CITIC"];
          var datagrid = _input1.ownerDocument.defaultView.nui.get('datagrid2');
          var dataItem = _input1.ownerDocument.defaultView.nui.get('datagrid2').getData(true, false)[parseInt(d[2])];
          if (number == 1) {
            dataItem.datePay = d[1];
          } else if (number == 2) {
            dataItem.modePay = d[4];
            dataItem.modePay_name = d[1];
          } else if (number == 3) {
            dataItem.bankPay = bank[d[4]];
            dataItem.bankPay_name = d[1];
          } else if (number == 4) {
            dataItem.moneyPay_name = parseInt(d[1].replace(/[^0-9]/g, "").trim());
            dataItem.moneyPay = parseInt(d[1].replace(/[^0-9]/g, "").trim());
          }
          datagrid.doUpdateRows();
        } else {
          var _input1 = elem.contentWindow.document.querySelectorAll('#datagridsub	.mini-panel-viewport	.mini-panel-body	.mini-grid-rows-view	.mini-grid-table	tr')[num].querySelectorAll('td')[_num].children[0];
          var datagrid = _input1.ownerDocument.defaultView.nui.get('datagridsub');
          var dataItem = _input1.ownerDocument.defaultView.nui.get('datagridsub').getData(true, false)[parseInt(d[2])];
          if (number == 1) {
            dataItem.actualByDate = d[1];
          } else if (number == 2) {
            dataItem.paymentMethod = d[1];
          } else if (number == 3) {
            dataItem.paymentBank = d[1];
          } else if (number == 4) {
            dataItem.actualPayamount = d[1].replace(/[^0-9]/g, "").trim();
          }
          datagrid.doUpdateRows();
        }
      }
    },
    getTemplate_uiControl22_QmOw34: function () {
      var selfTemplate = 'export\tdefault\tclass\textends\tReact.Component{\n  componentWillUpdate=(e)=>{\n    var yspList=this.refs.yspList;\n    if(yspList){\n      var bs=yspList.ownerDocument.querySelectorAll("b.ysp-detailed-field");\n      for(var i=0;i<bs.length;i++){\n       bs[i].setAttribute("name","")\n      }\n    }\n    \n  }\n  \n  Change=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:[e.target.className,e.target.selectedIndex,e.target.dataset.key],\n         eventType:\'change\'                         \n       })\n     }\n  }\n  oneClick=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n        data:e.target.dataset.key,\n        eventType:"oneClick"\n      })\n    }\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n  \n     if(handler) {                                    \n       handler({\n         data:[e.target.className,parseInt(e.target.dataset.id),e.target.dataset.key,e.target.dataset.son,e.target.dataset.sign,e.target.dataset.goal,e.target.dataset.title,e.target.value],\n         eventType:\'click\'                         \n       })\n     }\n  }\n  clear=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(\thandler\t){\n       handler({\n         data:target.dataset.key,\n         eventType:\'clear\'\n       })\n    }\n  }\n  moreOnClick=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.dataset.key,\n        eventType:\'moreOnClick\'\n      })\n    }\n  }\n  onchangeSO=(e)=>{\n    var target=e.target;\n    var reg = /[^0-9\\.]/g;\n    target.value=target.value.replace( reg, "" );\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:[target.className,target.value.replace( reg, "" ),target.dataset.key],\n        eventType:\'changeSO\'\n      })\n    }\n  }\n  onChange=(e)=>{\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value,e.target.dataset.key], \n        eventType: \'change\' \n      })\n    }\n  }\n  detailBlur=(e)=>{\n    var handler=this.props.customHandler;\n    var target=e.target;\n    var reg\t=\t/[^0-9]/g;\n    target.value=target.value.replace( reg, "" );\n    if(\ttarget.value==\'\'\t){\n       target.value=target.dataset.old;\n    }\n    if(\thandler\t){\n      handler({\n        data:[target.className,target.value,target.dataset.id,target.dataset.key],\n      \teventType:\'detailBlur\'\n      }) \n    }\n  }\n  timeBlur=(e)=>{\n    var handler=this.props.customHandler;\n    var target=e.target;\n    var reg=/[^0-9]/g;\n    if(reg.test(target.value)&&target.dataset.key==4){\n \xA0 \xA0 \xA0// var div=target.ownerDocument.createElement("div");\n \xA0 \xA0 \xA0// div.className="alertNum";\n \xA0 \xA0 \xA0// div.textContent="\u53EA\u80FD\u586B\u5199\u6570\u5B57";\n \xA0 \xA0 \xA0// target.ownerDocument.documentElement.appendChild(div);\n      target.value=target.value.replace( reg, "" );\n    }\n    if(\thandler\t){\n      handler({\n        data:[target.className,target.value,target.dataset.id,target.dataset.key,target.selectedIndex],\n      \teventType:\'timeBlur\'\n      }) \n    }\n  }\n  addNumBlur=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    var reg = /[^0-9\\.]/g;\n    //var reg\t=\t /(^[1-9]([0-9]+)?(\\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\\.[0-9]([0-9])?$)/g;\n    target.value=target.value.replace( reg, \'\' );\n    if(\ttarget.value==\'\'\t){\n       target.value=target.dataset.old;\n    }\n    if( target.value=="undefined" ){\n      target.value="";\n    }\n    if(handler){\n      handler({\n        data:[target.className,target.value,target.dataset.id,target.dataset.key],\n        eventType: \'addNumblur\' \n      })\n    }\n  }\n\tnumBlur=(e)=>{\n    var target=e.target;\n    var handler=this.props.customHandler;\n    var reg\t=\t /[^0-9\\.]/g;\n    target.value=target.value.replace( reg, "" );\n    if(\ttarget.value==""\t){\n       target.value=target.dataset.old;\n    }\n    if( target.value == "undefined" ){\n      target.value = "";\n    }\n    if(handler){\n      handler({\n        data:[target.className,target.value,target.dataset.id,target.dataset.key],\n        eventType: \'numblur\' \n      })\n    }\n  }\n  onBlur=(e)=>{\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value,e.target.dataset.id,e.target.dataset.key],\n        eventType: \'blur\' \n      })\n    }\n  }\n  onFocus=(e)=>{\n    var handler=this.props.customHandler;\n    \n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value,e.target.dataset.id,e.target.dataset.key],\n        eventType: \'focus\' \n      })\n    }\n  }\n  numberClick=(e)=>{\n    var handler=this.props.customHandler;\n    var target=e.target;\n    \n    var bs=target.ownerDocument.querySelectorAll("b.ysp-detailed-field");\n      for(var i=0;i<bs.length;i++){\n       bs[i].setAttribute("name","")\n      }\n    target.setAttribute("name","ysp_listCheckRow")\n    if(handler){\n      handler({\n        data:[e.target.className,"",e.target.dataset.id,e.target.dataset.key],\n        eventType: \'focus\' \n      })\n    }\n  }\n  paymentBlur=(e)=>{\n    var handler=this.props.customHandler;\n    var target=e.target;\n    \n    if(\thandler\t){\n      handler({\n        data:[target.className,target.value,target.dataset.id,target.dataset.key],\n      \teventType:\'paymentBlur\'\n      }) \n    }\n  }\n  companyBlur=(e)=>{\n    var handler=this.props.customHandler;\n    var target=e.target;\n    \n    if(\thandler\t){\n      handler({\n        data:[target.className,target.value],\n      \teventType:\'companyBlur\'\n      }) \n    }\n  }\n  otherBlur=(e)=>{\n    var handler=this.props.customHandler;\n    var target=e.target;\n    \n    if(\thandler\t){\n      handler({\n        data:[target.className,target.value],\n      \teventType:\'otherBlur\'\n      }) \n    }\n  }\n  render(){\n    var data = this.props.customData || [];\n    var _this=this;\n    return (\n      <div\tclassName=\'ysp-flowsheet ysp-datafrom2\' ref="yspList">\n        <EssentialInformation\tPassedCustomData={data} click={_this.onClick.bind(_this)}\t\tonChange={_this.Change.bind(_this)}\tchange={_this.onChange.bind(_this) } blur={_this.onBlur.bind(_this)}\tonchangeSO={_this.onchangeSO.bind(_this)}\tmoreOnClick={_this.moreOnClick.bind(_this)} clear={_this.clear.bind(_this)} oneClick={_this.oneClick.bind(_this)}/>\n        <PaymentOff\tPassedCustomData={data}\tblur={_this.onBlur.bind(_this)} focus={_this.onFocus.bind(_this)}\tdetailBlur={_this.detailBlur.bind(_this)} timeBlur={_this.timeBlur.bind(_this)}\tnumberClick={_this.numberClick.bind(_this)} paymentBlur={_this.paymentBlur.bind(_this)}/>\n        <Total PassedCustomData={data}\t/>\n        <ListInformation\tPassedCustomData={data}\tblur={_this.onBlur.bind(_this)} focus={_this.onFocus.bind(_this)}\tdetailBlur={_this.detailBlur.bind(_this)} timeBlur={_this.timeBlur.bind(_this)}\tnumberClick={_this.numberClick.bind(_this)} paymentBlur={_this.paymentBlur.bind(_this)}/>\n        \n        <XTHJG\tPassedCustomData={data}\t/>\n        <RejectsStatus\tPassedCustomData={data}\tblur={_this.onBlur.bind(_this)}\tclick={_this.onClick.bind(_this)}/>\n        <Dataform\tPassedCustomData={data}\tblur={_this.onBlur.bind(_this)}\tonChange={_this.onChange.bind(_this)}\tclick={_this.onClick.bind(_this)}\tnumBlur={_this.numBlur.bind(_this)}\taddNumBlur={_this.addNumBlur.bind(_this)}/>\n        <UnderTable PassedCustomData={data} companyBlur={_this.companyBlur.bind(_this)} otherBlur={_this.otherBlur.bind(_this)}/>\n        <Agree PassedCustomData={data}\tonChange={_this.onChange.bind(_this)}/>\n      </div>\n    )\n  }\n}\nclass XTHJG extends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n  \tif(data\t&&data.XTHJG&&data.XTHJG.total&&data.XTHJG.total.length\t&& data.XTHJG.total.length>0\t&&\tdata.XTHJG.totalTF==true&&data.XTHJG.cont\t&&\tdata.XTHJG.cont.length>0\t){\n    \tvar XTHJGtotal=[];\n      if(\tdata.XTHJG.DetailTitle\t&&\tdata.XTHJG.DetailTitle.length\t&&\tdata.XTHJG.DetailTitle.length>0\t)\t{\n         XTHJGtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t{\tdata.XTHJG.DetailTitle[0]\t}\t\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.XTHJG.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.XTHJG.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n      }else{\n       XTHJGtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t\u603B\u8BA1\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.XTHJG.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'\t&& item!=\' \uFF1A\'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.XTHJG.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t); \n      }\n    }else{\n      var XTHJGtotal=[];\n     \tXTHJGtotal.push(<div style={{display:\'none\'}}></div>)\n    }\n\tif(\tdata.XTHJG&&data.XTHJG.cont&&data.XTHJG.cont.length\t&&\tdata.XTHJG.cont.length>0\t){\n    var XTHJGcontinues=[];\n      {\tdata\t&&\tdata.XTHJG.cont.map(function(item,i){\n        XTHJGcontinues.push(\n          \t<div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n            \t{\titem\t&&\titem.map(function(value,index){\n                if(index==0){\n                  return(\n                  \t<p className=\'ysp-twoPart-cardTit\'>\n                    \t<span>\n                      \t<b></b>\n                        {value}\n                      </span>\n                    </p>\n                  \t)\n              \t}else{\n                  \treturn(\n                \t\t\t<div>\n            \t\t\t\t\t\t{data.XTHJG.title[index].key\t?\t\n                  \t\t\t<span>\n                    \t\t\t{data.XTHJG.title[index].title}:&nbsp;\n                    \t\t\t<span className=\'ysp-star\'>*</span>\n                \t\t\t\t</span>\t:\t\n                  \t\t\t<span>\n                  \t\t\t\t{data.XTHJG.title[index].title}:\n                \t\t\t\t</span>\n              \t\t\t\t}\n              \t\t\t<label>{value}</label>\n            \t\t\t</div>\n                \t)\t\n                }\n            \t})\n            }\n            </div>\n        )\n      })}\n    }else{\n      var XTHJGcontinues=[];\n      XTHJGcontinues.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(data&&data.THJL&&\tdata.THJL.total\t&&\tdata.THJL.total.length\t&& data.THJL.total.length>0\t&&\tdata.THJL.totalTF==true&&data.THJL.cont&&\tdata.THJL.cont.length>0\t){\n    \tvar THJLtotal=[];\n      if(\tdata.THJL.DetailTitle\t&&\tdata.THJL.DetailTitle.length\t&&\tdata.THJL.DetailTitle.length>0\t)\t{\n         THJLtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t{\tdata.THJL.DetailTitle[0]\t}\t\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.THJL.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.THJL.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n      }else{\n       THJLtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t\u603B\u8BA1\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.THJL.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'\t&& item!=\' \uFF1A\'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.THJL.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t); \n      }\n    }else{\n      var THJLtotal=[];\n      THJLtotal.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(data&&data.THJL&&data.THJL.cont&&data.THJL.cont.length\t&&\tdata.THJL.cont.length>0\t){\n    \tvar THJLcontinues=[];\n      {\tdata\t&&\tdata.THJL.cont.map(function(item,i){\n        THJLcontinues.push(\n          \t<div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n            \t{\titem\t&&\titem.map(function(value,index){\n                if(index==0){\n                  return(\n                  \t<p className=\'ysp-twoPart-cardTit\'>\n                    \t<span>\n                      \t<b></b>\n                        {value}\n                      </span>\n                    </p>\n                  \t)\n              \t}else{\n                  \treturn(\n                \t\t\t<div>\n            \t\t\t\t\t\t{data.THJL.title[index].key\t?\t\n                  \t\t\t<span>\n                    \t\t\t{data.THJL.title[index].title}:&nbsp;\n                    \t\t\t<span className=\'ysp-star\'>*</span>\n                \t\t\t\t</span>\t:\t\n                  \t\t\t<span>\n                  \t\t\t\t{data.THJL.title[index].title}:\n                \t\t\t\t</span>\n              \t\t\t\t}\n              \t\t\t<label>{value}</label>\n            \t\t\t</div>\n                \t)\t\n                }\n            \t})\n            }\n            </div>\n        )\n      })}\n    }else{\n      var THJLcontinues=[];\n      THJLcontinues.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(data&&\tdata.KCBJ&&\tdata.KCBJ.total\t&&\tdata.KCBJ.total.length\t&& data.KCBJ.total.length>0\t&&\tdata.KCBJ.totalTF==true&&\tdata.KCBJ.cont\t&&\tdata.KCBJ.cont.length>0\t){\n    \tvar KCBJtotal=[];\n      if(\tdata.KCBJ.DetailTitle\t&&\tdata.KCBJ.DetailTitle.length\t&&\tdata.KCBJ.DetailTitle.length>0\t)\t{\n         KCBJtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t{\tdata.KCBJ.DetailTitle[0]\t}\t\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.KCBJ.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.KCBJ.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n      }else{\n       KCBJtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t\u603B\u8BA1\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.KCBJ.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'\t&& item!=\' \uFF1A\'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.KCBJ.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t); \n      }\n    }else{\n      var KCBJtotal=[];\n      KCBJtotal.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(\tdata&&data.KCBJ&&data.KCBJ.cont&&data.KCBJ.cont.length&&\tdata.KCBJ.cont\t&&\tdata.KCBJ.cont.length>0\t){\n    \tvar KCBJcontinues=[];\n      {\tdata\t&&\tdata.KCBJ.cont.map(function(item,i){\n        KCBJcontinues.push(\n          \t<div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n            \t{\titem\t&&\titem.map(function(value,index){\n                if(index==0){\n                  return(\n                  \t<p className=\'ysp-twoPart-cardTit\'>\n                    \t<span>\n                      \t<b></b>\n                        {value}\n                      </span>\n                    </p>\n                  \t)\n              \t}else{\n                  \treturn(\n                \t\t\t<div>\n            \t\t\t\t\t\t{data.KCBJ.title[index].key\t?\t\n                  \t\t\t<span>\n                    \t\t\t{data.KCBJ.title[index].title}:&nbsp;\n                    \t\t\t<span className=\'ysp-star\'>*</span>\n                \t\t\t\t</span>\t:\t\n                  \t\t\t<span>\n                  \t\t\t\t{data.KCBJ.title[index].title}:\n                \t\t\t\t</span>\n              \t\t\t\t}\n              \t\t\t<label>{value}</label>\n            \t\t\t</div>\n                \t)\t\n                }\n            \t})\n            }\n            </div>\n        )\n      })}\n    }else{\n      var KCBJcontinues=[];\n      KCBJcontinues.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(data&&\tdata.ZDJL&&\tdata.ZDJL.total\t&&\tdata.ZDJL.total.length\t&& data.ZDJL.total.length>0\t&&\tdata.ZDJL.totalTF==true&&\tdata.ZDJL.cont\t&&\tdata.ZDJL.cont.length>0\t){\n    \tvar ZDJLtotal=[];\n      if(\tdata.ZDJL.DetailTitle\t&&\tdata.ZDJL.DetailTitle.length>0\t)\t{\n         ZDJLtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t{\tdata.ZDJL.DetailTitle[0]\t}\t\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.ZDJL.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.ZDJL.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n      }else{\n       ZDJLtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t\u603B\u8BA1\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.ZDJL.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'\t&& item!=\' \uFF1A\'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.ZDJL.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t); \n      }\n    }else{\n      var ZDJLtotal=[];\n      ZDJLtotal.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(data&&\tdata.ZDJL&&\tdata.ZDJL.cont&&\tdata.ZDJL.cont.length\t&&\tdata.ZDJL.cont.length>0\t){\n    \tvar ZDJLcontinues=[];\n      {\tdata\t&&\tdata.ZDJL.cont.map(function(item,i){\n        ZDJLcontinues.push(\n          \t<div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n            \t{\titem\t&&\titem.map(function(value,index){\n                if(index==0){\n                  return(\n                  \t<p className=\'ysp-twoPart-cardTit\'>\n                    \t<span>\n                      \t<b></b>\n                        {value}\n                      </span>\n                    </p>\n                  \t)\n              \t}else{\n                  \treturn(\n                \t\t\t<div>\n            \t\t\t\t\t\t{data.ZDJL.title[index].key\t?\t\n                  \t\t\t<span>\n                    \t\t\t{data.ZDJL.title[index].title}:&nbsp;\n                    \t\t\t<span className=\'ysp-star\'>*</span>\n                \t\t\t\t</span>\t:\t\n                  \t\t\t<span>\n                  \t\t\t\t{data.ZDJL.title[index].title}:\n                \t\t\t\t</span>\n              \t\t\t\t}\n              \t\t\t<label>{value}</label>\n            \t\t\t</div>\n                \t)\t\n                }\n            \t})\n            }\n            </div>\n        )\n      })}\n    }else{\n      var ZDJLcontinues=[];\n      ZDJLcontinues.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(data&&\tdata.QQTHBC&&\tdata.QQTHBC.total\t&&\tdata.QQTHBC.total.length\t&& data.QQTHBC.total.length>0\t&&\tdata.QQTHBC.totalTF==true&&\tdata.QQTHBC.cont\t&&\tdata.QQTHBC.cont.length>0\t){\n    \tvar QQTHBCtotal=[];\n      if(\tdata.QQTHBC.DetailTitle\t&&\tdata.QQTHBC.DetailTitle.length\t&&\tdata.QQTHBC.DetailTitle.length>0\t)\t{\n         QQTHBCtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t{\tdata.QQTHBC.DetailTitle[0]\t}\t\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.QQTHBC.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.QQTHBC.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n      }else{\n       QQTHBCtotal.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t\u603B\u8BA1\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.QQTHBC.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'\t&& item!=\' \uFF1A\'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.QQTHBC.title[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t); \n      }\n    }else{\n      var QQTHBCtotal=[];\n      QQTHBCtotal.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(data&&\tdata.QQTHBC&&\tdata.QQTHBC.cont&&\tdata.QQTHBC.cont.length\t&&\tdata.QQTHBC.cont.length>0\t){\n    \tvar QQTHBCcontinues=[];\n      {\tdata\t&&\tdata.QQTHBC.cont.map(function(item,i){\n        QQTHBCcontinues.push(\n          \t<div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n            \t{\titem\t&&\titem.map(function(value,index){\n                if(index==0){\n                  return(\n                  \t<p className=\'ysp-twoPart-cardTit\'>\n                    \t<span>\n                      \t<b></b>\n                        {value}\n                      </span>\n                    </p>\n                  \t)\n              \t}else{\n                  \treturn(\n                \t\t\t<div>\n            \t\t\t\t\t\t{data.QQTHBC.title[index].key\t?\t\n                  \t\t\t<span>\n                    \t\t\t{data.QQTHBC.title[index].title}:&nbsp;\n                    \t\t\t<span className=\'ysp-star\'>*</span>\n                \t\t\t\t</span>\t:\t\n                  \t\t\t<span>\n                  \t\t\t\t{data.QQTHBC.title[index].title}:\n                \t\t\t\t</span>\n              \t\t\t\t}\n              \t\t\t<label>{value}</label>\n            \t\t\t</div>\n                \t)\t\n                }\n            \t})\n            }\n            </div>\n        )\n      })}\n    }else{\n      var QQTHBCcontinues=[];\n      QQTHBCcontinues.push(<div style={{display:\'none\'}}></div>)\n    }\n    return (\n      <div>\n        <div>\n          <div>{XTHJGtotal}</div>\n          <div className=\'ysp-flowsheet-twoPart\'>{XTHJGcontinues}</div>\n        </div>\n        <div>\n          <div>{THJLtotal}</div>\n          <div className=\'ysp-flowsheet-twoPart\'>{THJLcontinues}</div>\n        </div>\n        <div>\n          <div>{KCBJtotal}</div>\n          <div className=\'ysp-flowsheet-twoPart\'>{KCBJcontinues}</div>\n        </div>\n        <div>\n          <div>{ZDJLtotal}</div>\n          <div className=\'ysp-flowsheet-twoPart\'>{ZDJLcontinues}</div>\n        </div>\n        <div>\n          <div>{QQTHBCtotal}</div>\n          <div className=\'ysp-flowsheet-twoPart\'>{QQTHBCcontinues}</div>\n        </div>\n      </div> \n    )\n  }\n}\nclass Dataform extends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n    var _this=this;\n    if(\tdata\t&&\tdata.threePartCont\t&&\tdata.threePartCont.length\t&& \tdata.threePartCont.length>0\t){\n      var PartTwoCard=[];\n      PartTwoCard.push(\n        <div className=\'ysp-flowsheet-onePart\tysp-dataform2\'>\n      \t\t{\tdata\t&&\tdata.threePartTitle.map(function(item,index){\n        \t\tvar PartOneTitle=[];\n          \tvar PartOneCont=[];\n            var PartOneErr=[];\n            if(data.threePartCont[index]\t&&\tdata.threePartCont[index].err!=null){\n            \tif(\tdata.threePartCont[index].err\t==\tfalse\t){\n              \tPartOneErr.push(<span></span>)   \n            \t}else{\n             \t\tPartOneErr.push(<span className=\'ysp_user_errorIcon\'></span>)\n              }\n            }\n            if(\titem.key\t){\n          \t\tPartOneTitle.push(\n            \t\t<span className=\'ysp-dataform2-title\'>{item.title}:\t\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n              \t</span>\n            \t)\n          \t}else{\n              PartOneTitle.push(\n              \t<span\tclassName=\'ysp-dataform2-title\'>{item.title}:</span>\n              )\n            }\n            if(\tdata.threePartCont[index]\t&&\tdata.threePartCont[index].attr\t&&\tdata.threePartCont[index].attr==\'INPUT\'\t){\n            PartOneCont.push(\n            \t<label>{data.threePartCont[index].cont}</label>\n           \t\t)\n            }else if(\tdata.threePartCont[index]\t&&\tdata.threePartCont[index].attr\t&&\tdata.threePartCont[index].attr==\'CANINPUTADDNUM\'\t){\n              PartOneCont.push(\n            \t\t\t<label className=\'ysp-Quota\'>\n              \t\t\t<AInput value={ data.threePartCont[index].cont }\ttype=\'text\'\tonBlur={_this.props.addNumBlur}\tclassName=\'ysp-can-input\' data-id={data.threePartCont[index].parenID}\t/>\n\t\t\t\t\t\t\t\t\t</label>\n           \t\t\t)\n          \t}else if(\tdata.threePartCont[index]\t&&\tdata.threePartCont[index].attr\t&&\tdata.threePartCont[index].attr==\'CANINPUTNUM\'\t){\n              PartOneCont.push(\n            \t\t\t<label className=\'ysp-Quota\'>\n              \t\t\t<AInput value={data.threePartCont[index].cont[0]}\ttype=\'text\'\tonBlur={_this.props.numBlur}\tclassName=\'ysp-can-input\' data-id={data.threePartCont[index].parenID}\t/>\n\t\t\t\t\t\t\t\t\t</label>\n           \t\t\t)\n          \t}else if(\tdata.threePartCont[index]\t&&\tdata.threePartCont[index].attr\t&&\tdata.threePartCont[index].attr==\'CANINPUT\'\t){\n              if(data.threePartCont[index].cont.length==2){\n              \tPartOneCont.push(\n            \t\t<label className=\'ysp-Quota\'>\n              \t\t<AInput value={data.threePartCont[index].cont[0]}\ttype=\'text\'\tonBlur={_this.props.blur}\tclassName=\'ysp-can-input\' data-id={data.threePartCont[index].parenID}/>\n                  {data.threePartCont[index].cont[1]}\n\t\t\t\t\t\t\t\t</label>\n           \t\t\t)     \t \n              }else{\n                PartOneCont.push(\n            \t\t\t<label className=\'ysp-Quota\'>\n              \t\t\t<AInput value={data.threePartCont[index].cont[0]}\ttype=\'text\'\tonBlur={_this.props.blur}\tclassName=\'ysp-can-input\' data-id={data.threePartCont[index].parenID}\t/>\n\t\t\t\t\t\t\t\t\t</label>\n           \t\t\t)     \n              }\n                \n            }else if(\tdata.threePartCont[index]\t&&\tdata.threePartCont[index].attr\t&&\tdata.threePartCont[index].attr==\'TEXTAREA\'\t){\n              PartOneCont.push(<ATextarea\tvalue={data.threePartCont[index].cont[0]}\tdisabled\t></ATextarea>)   \n            }else if(\tdata.threePartCont[index]\t&&\tdata.threePartCont[index].attr\t&&\tdata.threePartCont[index].attr==\'CANTEXTAREA\'\t){\n              PartOneCont.push(<ATextarea\tvalue={data.threePartCont[index].cont[0]}\t onChange={_this.props.onChange}\tclassName=\'ysp-can-textarea\'\tdata-key={data.threePartCont[index].parenID}></ATextarea>)   \n            }else if(\tdata.threePartCont[index]\t&&\tdata.threePartCont[index].attr\t&&\tdata.threePartCont[index].attr==\'RADIO\'\t){\n              PartOneCont.push(\n              \t<AMUI.List>\n              \t\t{\tdata.threePartCont[index].cont.map((it,idx)=>{\n                    return(\n                    \t<AMUI.List.Item nested="radio" >\n            \t\t\t\t\t\t<AMUI.Field label={it} type="radio" name={data.threePartCont[index].parenID} checked={data.threePartCont[index].checked[idx]}\tclassName=\'ysp-cause\' data-key={data.threePartCont[index].parenID}\tdata-id={idx}\tonClick={_this.props.click}\t/>\n        \t\t\t\t\t\t\t</AMUI.List.Item>\n                    \t)\n              \t\t\t})\n                \t} \n              \t</AMUI.List>\n              )\n}\n            if(\t\tdata.threePartCont[index]\t&&\tdata.threePartCont[index].attr\t&&\tdata.threePartCont[index].attr\t!=\'HIDDEN\'\t\t){\n               \treturn (\n            \t\t\t<div>\n              \t\t\t{PartOneTitle}\n              \t\t\t{PartOneCont}\n                   \t{PartOneErr}\n            \t\t\t</div>\n         \t \t\t\t)\n            \t} \n        \t})\n           \n        }\n      \t</div>\n      )      \t\n    }else{\n      var PartTwoCard=[];\n      PartTwoCard.push(\n      <div\tstyle={{display:\'none\'}}></div>\n      )\n    }\n    return(\n      <div>\n        {PartTwoCard}\n      </div>\n    )\n  }\n}\nclass RejectsStatus extends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n    var _this=this;\n    if(\tdata&&\tdata.rejectsStatus&&\tdata.rejectsStatus.Recont\t&&\tdata.rejectsStatus.Recont.length\t&&\tdata.rejectsStatus.Recont.length>0\t){\n     \tvar container=[];\n      container.push(\n        <div className=\'ysp-rejectsStatus\'>\n          {data.rejectsStatus.Retit.map((item,i)=>{\n            return(\n            \t<div>\n            \t\t{item.key\t?\t\n                \t<span>\n                  \t{item.title}:\n                \t\t&nbsp;<span className=\'ysp-star\'>*</span>\n                \t</span>\t:\t<span>\n                  \t{item.title}:\n                \t</span>\n              \t}\n              \t<AMUI.List>\n              \t\t{\tdata.rejectsStatus.attr==\'radio\'\t&&\tdata.rejectsStatus.Recont[i]\t&&\tdata.rejectsStatus.Recont[i].cont.map((it,idx)=>{\n                    return(\n                    \t<AMUI.List.Item nested="radio" >\n            \t\t\t\t\t\t<AMUI.Field label={it} type="radio" name="radio-list-1" checked={data.rejectsStatus.Recont[i].checked[idx]} data-key={idx}\tdisabled/>\n        \t\t\t\t\t\t\t</AMUI.List.Item>\n                    \t)\n              \t\t\t})\n                \t}\n                  {\tdata.rejectsStatus.attr==\'canRadio\'\t&&\tdata.rejectsStatus.Recont[i]\t&&\tdata.rejectsStatus.Recont[i].cont.map((it,idx)=>{\n                    return(\n                    \t<AMUI.List.Item nested="radio" >\n            \t\t\t\t\t\t<AMUI.Field label={it} className=\'ysp-belowKsPeice\' type="radio" name="radio-list-1" checked={data.rejectsStatus.Recont[i].checked[idx]} data-id={idx}\tdata-key={data.rejectsStatus.id}\tonClick={_this.props.click}\t/>\n        \t\t\t\t\t\t\t</AMUI.List.Item>\n                    \t)\n              \t\t\t})\n                \t}\n              \t</AMUI.List>\n            \t</div>\n            \t)\n          \t})}\n        </div>\n      )\n    }\n    if(\tdata&&\tdata.belowKsPeice&&\tdata.belowKsPeice.Recont\t&&\tdata.belowKsPeice.Recont.length\t&&\tdata.belowKsPeice.Recont.length>0\t){\n      var container1=[];\n      container1.push(\n      \t<div\tclassName=\'ysp-rejectsStatus\'>\n        \t{\tdata\t&&\tdata.belowKsPeice.Retit.map(function(\titem,i\t){\n         \t\tvar tit=[];\n            var cont=[];\n            if(\tdata.belowKsPeice.Recont[i].err\t&&\tdata.belowKsPeice.Recont[i].err==true\t){\n               if(item.key){\n                tit.push(\n            \t\t\t<span>\n                \t\t{item.title}:\n                \t\t&nbsp;<span className=\'ysp-star\'>*</span>\n                    <b className=\'ysp_user_errorIcon\'></b>\n                \t</span>\n            \t\t\t)\n              \t}else{\n                \ttit.push(\n              \t\t\t<span>\n                \t\t\t{item.title}:\n                      <b\tclassName=\'ysp_user_errorIcon\'></b>\n                \t\t</span>\n              \t\t)\n            \t\t}\t\n            }else{\n              if(item.key){\n                tit.push(\n            \t\t\t<span>\n                \t\t{item.title}:\n                \t\t&nbsp;<span className=\'ysp-star\'>*</span>\n                \t</span>\n            \t\t\t)\n              \t}else{\n                \ttit.push(\n              \t\t\t<span>\n                \t\t\t{item.title}:\n                \t\t</span>\n              \t\t)\n            \t\t}\t\t\n            \t}\n            \n            if(\tdata.belowKsPeice.Recont[i].attr\t&&\tdata.belowKsPeice.Recont[i].attr==\'radio\'\t){\n              data.belowKsPeice.Recont[i].change\t?\t\n               cont.push(\n               \t<AMUI.List>\n              \t\t{\tdata.belowKsPeice.Recont[i].cont.map((it,idx)=>{\n                    return(\n                    \t<AMUI.List.Item nested="radio" >\n            \t\t\t\t\t\t<AMUI.Field label={it}\tclassName=\'ysp-belowKsPeice\' data-key={data.belowKsPeice.Recont[i].id}\ttype="radio" name="radio-list-2"\tonClick={_this.props.click} checked={data.belowKsPeice.Recont[i].checked[idx]}\tdata-id={idx}/>\n        \t\t\t\t\t\t\t</AMUI.List.Item>\n                    \t)\n              \t\t\t})\n                \t} \n              \t</AMUI.List>\n               )\t:\n              cont.push(\n               \t<AMUI.List>\n              \t\t{\tdata.belowKsPeice.Recont[i].cont.map((it,idx)=>{\n                    return(\n                    \t<AMUI.List.Item nested="radio" >\n            \t\t\t\t\t\t<AMUI.Field label={it} type="radio"\t name="radio-list-2" checked={data.belowKsPeice.Recont[i].checked[idx]}/>\n        \t\t\t\t\t\t\t</AMUI.List.Item>\n                    \t)\n              \t\t\t})\n                \t} \n              \t</AMUI.List>\n               )\n            }else if(\tdata.belowKsPeice.Recont[i].attr\t&&\tdata.belowKsPeice.Recont[i].attr==\'input\'\t){\n              data.belowKsPeice.Recont[i].change\t?\t\n              cont.push(\n              \t<AMUI.Field\ttype=\'text\'\tvalue={data.belowKsPeice.Recont[i].cont[0]}\tonBlur={_this.props.blur}\tclassName=\'ysp-otherInput\'\tdata-id={data.belowKsPeice.Recont[i].id}/>\n              ) :\n              cont.push(\n              \t<input\ttype=\'text\'\tvalue={data.belowKsPeice.Recont[i].cont[0]}\tdisabled\t/>\n              )\n            }\n            return(\n              <div>\n                {tit}\n                {cont}\n              </div>\n            )\n        \t})}\n        </div>\n    \t)\n    }\n    return(\n      <div>\n        {container}\n        {container1}\n      </div>\n    )\n  }\n}\nclass Agree extends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n    var _this=this;\n    if(data&&\tdata.Agree  &&\tdata.Agree.length>0){\n      var agree=[];\n      agree.push(\n      <div className=\'ysp-Approval-opinions\'>\n        <span>{data.Agree[0]}</span>\n      \t<ATextarea defaultValue={data.Agree[1]} onBlur={_this.props.onChange} className=\'ysp-agree\'/>\n      </div>\n      );\n    }else{\n      var agreen=[];\n      agreen.push(<div style={{display:\'none\'}}></div>)\n    }\n    return(<div>{agree}</div>)\n  }\n}\nclass Total\textends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n    if(data&&\tdata.twoPartCont\t&&\tdata.twoPartCont.length&& data.total\t&& data.total.length>0\t&&\tdata.totalTF==true\t&&\tdata.twoPartCont.length>0\t){\n    \tvar total=[];\n      if(\tdata.totalTitle&&data.totalTitle.length>0\t)\t{\n      \tif(\tdata.twoPart.checked==false\t){\n         total.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t{\tdata.totalTitle[0]\t}\t\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.twoPartTitle[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n      \t}else\tif(\tdata.twoPart.checked==true\t){\t\n          total.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t{\tdata.totalTitle[0]\t}\t\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'\t&& item!=\' \uFF1A\'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.twoPartTitle[i-2].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n        }\t   \n      }else{\n        if(\tdata.twoPart.checked==false\t){\n         total.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t\u603B\u8BA1\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'\t&& item!=\' \uFF1A\'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.twoPartTitle[i-1].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n      \t}else\tif(\tdata.twoPart.checked==true\t){\t\n          total.push(\n      \t\t<div className=\'ysp-total\'>\n        \t\t<h1>\n          \t\t\u603B\u8BA1\n          \t</h1>\n        \t\t<ul>\n            \t{\tdata\t&&\tdata.total.map((item,i)=>{\n          \t\tif(item!=\'&nbsp;\'\t&& i>1\t&&\titem!=\'\u603B\u8BA1\'\t&&\titem!=" "\t&&\titem!=\' : \'\t&& item!=\' \uFF1A\'){\n            \t\treturn(\n              \t\t<li>\n              \t\t\t<span>{data.twoPartTitle[i-2].title}</span>\n                \t\t<label>{item}</label>\n              \t\t</li>\n             \t\t)   \n          \t\t}\n          \t})}  \n            </ul>\n        \t</div>\n       \t\t);\n        }\n      }\n      \n    }else\tif(\tdata&&\tdata.totalTitle\t&&\tdata.totalTitle.length\t&& data.totalTitle.length>0\t&&\tdata.totalTF==false&&\tdata.twoPartCont\t&&\tdata.twoPartCont.length>0\t){\n    \tvar total=[];\n      total.push(\n      \t\t<div className=\'ysp-total\'>\n          \t<h1>\n          \t\t{\tdata.totalTitle[0]\t}\t\n          \t</h1>\n          </div>\n      \t)\n    }else{\n      var total=[];\n      total.push(<div style={{display:\'none\'}}></div>)\n    }\n    return(\n      <div>{total}</div>\n    )\n  }\n}\nclass ListInformation\textends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n    var _this=this;\n    if( data&&\tdata.twoPartCont\t&&\tdata.twoPartCont.length && data.twoPartCont.length>0\t){\n      var container=[];\n      if(\tdata.twoPart&& data.twoPart.title\t&&\tdata.twoPart.title==\'MultipleHeader\'&&\tdata.twoPart.titleNum\t&&\tdata.twoPart.titleNum.length==3\t&&\tdata.twoPart.titleNum[0]==4\t\t&&\tdata.twoPart.titleNum[1]==2\t&&\tdata.twoPart.titleNum[2]==2\t){\n        {\tdata\t&&\tdata.twoPartCont.map(function(item,i){\n          container.push(\n        \t<div className=\'ysp-flowsheet-twoPart-card\'>\n            <p className=\'ysp-twoPart-cardTit\'>\n            \t<span>\n              \t<b></b>\n                {item[0]}\n              </span>\n            </p>\n            <h1>\n              {data.twoPart.titleCont[0]}\n            </h1>\n            <div>\n            \t{data.twoPartTitle[1].key\t?\t\n              \t<span>\n                  {data.twoPartTitle[1].title}:\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n                </span>\t:\t<span>\n                  {data.twoPartTitle[1].title}:\n                </span>\n              }\n              <label>{item[1]}</label>\n            </div>\n            <div>\n            \t{data.twoPartTitle[2].key\t?\t\n              \t<span>\n                  {data.twoPartTitle[2].title}:\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n                </span>\t:\t<span>\n                  {data.twoPartTitle[2].title}:\n                </span>\n              }\n              <label>{item[2]}</label>\n            </div>\n            <div>\n            \t{data.twoPartTitle[3].key\t?\t\n                <span>\n                  {data.twoPartTitle[3].title}:\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n                </span>\t:\t<span>\n                  {data.twoPartTitle[3].title}:\n                </span>\n              }\n              <label>{item[3]}</label>\n            </div>\n            <h1>{data.twoPart.titleCont[1]}</h1>\n            <div>\n            \t{data.twoPartTitle[4].key\t?\t\n                <span>\n                  {data.twoPartTitle[4].title}:\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n                </span>\t:\t<span>\n                  {data.twoPartTitle[4].title}:\n                </span>\n              }\n              <label>{item[4]}</label>\n            </div>\n            <div>\n            \t{data.twoPartTitle[5].key\t?\t\n                <span>\n                  {data.twoPartTitle[5].title}:\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n                </span>\t:\t<span>\n                  {data.twoPartTitle[5].title}:\n                </span>\n              }\n              <label>{item[5]}</label>\n            </div>\n            <h1>{data.twoPart.titleCont[2]}</h1>\n            <div>\n            \t{data.twoPartTitle[6].key\t?\t\n                <span>\n                  {data.twoPartTitle[6].title}:\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n                </span>\t:\t<span>\n                  {data.twoPartTitle[6].title}:\n                </span>\n              }\n              <label>{item[6]}</label>\n            </div>\n            <div>\n            \t{data.twoPartTitle[7].key\t?\t\n                <span>\n                  {data.twoPartTitle[7].title}:\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n                </span>\t:\t<span>\n                  {data.twoPartTitle[7].title}:\n                </span>\n              }\n              <label>{item[7]}</label>\n            </div>\n          </div>\n         )\n        })}\n      }else if(\tdata&&data.twoPart&&data.twoPart.title&&\tdata.twoPart.oneTitle\t&&\tdata.twoPart.oneTitle.length\t&&\tdata.twoPart.title==\'ThreeStageHeader\'\t&&\tdata.twoPart.oneTitle.length==3\t){\n        {\tdata\t&&\tdata.twoPartCont.map(function(item,i){\n          container.push(\n        \t\t<div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n            \t<p className=\'ysp-twoPart-cardTit\'>\n              \t<span>\n              \t\t<b></b>\n                \t{\titem[0]\t}\n            \t\t</span>\n            \t</p>\n              <h1>\n              \t{data.twoPart.oneTitle[0]}\n            \t</h1>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[1].title}:\n                </span>\n              \t<label>{item[1]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[2].title}:\n                </span>\n              \t<label>{item[2]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[3].title}:\n                </span>\n              \t<label>{item[3]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[4].title}:\n                </span>\n              \t<label>{item[4]}</label>\n            \t</div>\n              <h1>{data.twoPart.oneTitle[1]}({data.twoPart.twoTitle[0]})</h1>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[5].title}:\n                </span>\n              \t<label>{item[5]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[6].title}:\n                </span>\n              \t<label>{item[6]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[7].title}:\n                </span>\n              \t<label>{item[7]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[8].title}:\n                </span>\n              \t<label>{item[8]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[9].title}:\n                </span>\n              \t<label>{item[9]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[10].title}:\n                </span>\n              \t<label>{item[10]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[11].title}:\n                </span>\n              \t<label>{item[11]}</label>\n            \t</div>\n              <h1>\n              \t{data.twoPart.oneTitle[2]}\n            \t</h1>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[12].title}:\n                </span>\n              \t<label>{item[12]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[13].title}:\n                </span>\n              \t<label>{item[13]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[14].title}:\n                </span>\n              \t<label>{item[14]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[15].title}:\n                </span>\n              \t<label>{item[15]}</label>\n            \t</div>\n              <div>\n            \t\t<span>\n                  {data.twoPartTitle[16].title}:\n                </span>\n              \t<label>{item[16]}</label>\n            \t</div>\n          \t</div>\n        \t\t)\n        \t})\n      \t}\n      }else\tif(\tdata\t&&\tdata.twoPartContCanInput\t&&\tdata.twoPartContCanInput==true\t){\n        {\tdata\t&&\tdata.twoPartCont.map(function(item,i){\n        \tcontainer.push(\n          \t<div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n            \t{\titem\t&&\titem.map(function(value,index){\n                if(index==0){\n                  return(\n                  \t<p className=\'ysp-twoPart-cardTit\'>\n                    \t<span>\n                      \t<b></b>\n                        {value}\n                      </span>\n                    </p>\n                  \t)\n                \t}else if(\tindex>11\t){\n                  \treturn(\n                \t\t\t<div className=\'ysp-detailed-input\'>\n            \t\t\t\t\t\t{data.twoPartTitle[index].key\t?\t\n                  \t\t\t<span>\n                    \t\t\t{data.twoPartTitle[index].title}:&nbsp;\n                    \t\t\t<span className=\'ysp-star\'>*</span>\n                \t\t\t\t</span>\t:\t\n                  \t\t\t<span>\n                  \t\t\t\t{data.twoPartTitle[index].title}:\n                \t\t\t\t</span>\n              \t\t\t\t\t}\t\n              \t\t\t\t\t<label>\n                        \t<AMUI.Field className=\'ysp-detailed-field\' value={value}\ttype=\'text\' onClick={_this.props.focus} data-asdasdasd="asdasd"\tonBlur={_this.props.detailBlur}\tdata-id={i} data-key={index} data-old={value} />\n\n                        </label>\n            \t\t\t\t\t</div>\n                \t\t)\n                  }else{\n                   return(\n                \t\t\t<div>\n            \t\t\t\t\t\t{data.twoPartTitle[index].key\t?\t\n                  \t\t\t<span>\n                    \t\t\t{data.twoPartTitle[index].title}:&nbsp;\n                    \t\t\t<span className=\'ysp-star\'>*</span>\n                \t\t\t\t</span>\t:\t\n                  \t\t\t<span>\n                  \t\t\t\t{data.twoPartTitle[index].title}:\n                \t\t\t\t</span>\n              \t\t\t\t\t}\t\n              \t\t\t\t\t<label>{value}</label>\n            \t\t\t\t\t</div>\n                \t\t) \n                  }\n              })\t\n          \t}\n          </div>\t\n          )   \t\n      \t})}\n    \t}else if(data&&\tdata.twoPartCont\t&&\tdata.twoPartCont.length\t&&\tdata.twoPartCont.length>0\t&&data.type=="payOffDetail"){\n        data.twoPartCont.map(function(item,i){\n          if(item[5]=="payOffDetail"){\n            container.push(\n              <div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n                {\titem\t&&\titem.map(function(value,index){\n                  if(index==0){\n                    return(\n                      <p className=\'ysp-twoPart-cardTit\'>\n                        <span>\n                          <b className=\'ysp-detailed-field field\' onClick={_this.props.numberClick}  data-id={i} data-key={index} data-val={value} name=""></b>\n                          {value}\n                        </span>\n                      </p>\n                      )\n                    }else if(index==1){\n                      return(\n                        <div>\n                          {data.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.twoPartTitle[index].title}:\n                            </span>\n                          }\n                          <label>\n                            <AInput className=\'ysp-detailed-field field\' value={value}\ttype=\'date\' onBlur={_this.props.timeBlur}\tdata-id={i} data-key={index}/>\n                          </label>\n                        </div>\n                      )\t\n                    }else if(index==2){\n                      var peymentMethod=["","\u7535\u6C47","\u94F6\u884C\u627F\u5151\u6C47\u7968","\u56FD\u5185\u4FE1\u7528\u8BC1","\u4FDD\u51FD","\u8F6C\u8D26\u652F\u7968","\u73B0\u91D1\u652F\u7968","\u73B0\u91D1"]\n                      return(\n                        <div>\n                          {data.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.twoPartTitle[index].title}:\n                            </span>\n                          }\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<select className=\'ysp-detailed-field field\'  onChange={_this.props.timeBlur} data-id={i} data-key={index}>\n                            {peymentMethod.map(function(val,ind){\n                              return(<option selected={val==value? true:false}>{val}</option>)\n                            })}\n                            \n                          </select>\n                        </div>\n                      )\t\n                    }else if(index==3){\n                      var peymentBank=["","\u4E2D\u56FD\u94F6\u884C","\u5EFA\u8BBE\u94F6\u884C","\u5149\u5927\u94F6\u884C","\u4EA4\u901A\u94F6\u884C","\u62DB\u5546\u94F6\u884C","\u5317\u4EAC\u94F6\u884C","\u534E\u590F\u94F6\u884C","\u6D66\u53D1\u94F6\u884C","\u5DE5\u5546\u94F6\u884C","\u519C\u4E1A\u94F6\u884C","\u4E2D\u4FE1\u94F6\u884C"]\n                      return(\n                        <div>\n                          {data.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.twoPartTitle[index].title}:\n                            </span>\n                          }\n                          <select className=\'ysp-detailed-field field\' data-paymentList="asdasd"  onChange={_this.props.timeBlur} data-id={i} data-key={index}>\n                            {peymentBank.map(function(val,ind){\n                              return(<option selected={val==value? true:false}>{val}</option>)\n                            })}\n                          </select>\n                        </div>\n                      )\t\n                    }else if(index==4){\n                      return(                        <div>\n                          {data.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.twoPartTitle[index].title}:\n                            </span>\n                          }\n                          <label><AMUI.Field className=\'ysp-detailed-field\' value={value}\ttype=\'text\' onBlur={_this.props.timeBlur} \tdata-id={i} data-key={index}/></label>\n                        </div>\n                      )\t\n                    }\n                  })\t\n                }\n            </div>\t\n            )\n          }else{\n            container.push(\n              <div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n                {\titem\t&&\titem.map(function(value,index){\n                  if(index<5){\n                    return(\n                      <div>\n                          {data.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.twoPartTitle[index].title}:\n                            </span>\n                          }\n                          <label>{value}</label>\n                        </div>\n                      )\n                    }\n                 \t\t\t\n                  })\t\n                }\n            </div>\t\n            )\n          }\n\n        })\n      }else{\n      \t{\tdata&&\tdata.twoPartCont\t&&\tdata.twoPartCont.length\t&&\tdata.twoPartCont.length>0\t&&\tdata.twoPartCont.map(function(item,i){\n        \tcontainer.push(\n          \t<div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n            \t{\titem\t&&\titem.map(function(value,index){\n                if(index==0){\n                  return(\n                  \t<p className=\'ysp-twoPart-cardTit\'>\n                    \t<span>\n                      \t<b></b>\n                        {value}\n                      </span>\n                    </p>\n                  \t)\n                \t}else{\n                  \treturn(\n                \t\t\t<div>\n            \t\t\t\t\t\t{data.twoPartTitle[index].key\t?\t\n                  \t\t\t<span>\n                    \t\t\t{data.twoPartTitle[index].title}:&nbsp;\n                    \t\t\t<span className=\'ysp-star\'>*</span>\n                \t\t\t\t</span>\t:\t\n                  \t\t\t<span>\n                  \t\t\t\t{data.twoPartTitle[index].title}:\n                \t\t\t\t</span>\n              \t\t\t\t}\n              \t\t\t<label>{value}</label>\n            \t\t\t</div>\n                \t)\t\n                \t}\n              \t})\t\n              }\n          </div>\t\n          )   \t\n      \t})}\t  \t\t   \n  \t\t}\n  \t}else{\n      var container=[];\n      container.push(<div style={{display:\'none\'}}></div>)\n    }\n    return(\n      <div className=\'ysp-flowsheet-twoPart\'>{container}</div>\n    ) \n  }\n}\nclass EssentialInformation extends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n    var _this=this;\n    if(\tdata&&\tdata.onePartTitle\t&&\tdata.onePartTitle.length\t&& \tdata.onePartTitle.length>0\t){\n      var PartTwoCard=[];\n      PartTwoCard.push(\n        <div className=\'ysp-flowsheet-onePart\'>\n      \t\t{\tdata\t&&\tdata.onePartTitle.map(function(item,index){\n        \t\tvar PartOneTitle=[];\n          \tvar PartOneCont=[];\n            var PartOneErr=[];\n            if(data.onePartCont[index]\t&&\tdata.onePartCont[index].err!=null){\n            \t if(\tdata.onePartCont[index].err\t==\tfalse\t){\n              \t\tPartOneErr.push(<span></span>)   \n            \t\t}else{\n             \t\t\tPartOneErr.push(<span className=\'ysp_user_errorIcon\'></span>)\n            \t}; \n            } \n            if( typeof item.key\t!=\'undefined\'\t&&\titem.key &&\titem.title!=\'\'){\n          \t\tPartOneTitle.push(\n            \t\t<span>{item.title}:\t\n                \t&nbsp;<span className=\'ysp-star\'>*</span>\n              \t</span>\n            \t)\n          \t}else if(item.title==\'\u5408\u540C\u53CA\u5BA1\u6279\u5355\u586B\u62A5\u6CE8\u610F\u4E8B\u9879\'){\n              PartOneTitle.push(\n            \t<span style={{width:\'60%\'}}>\n            \t\t{item.title}:\t\n            \t</span>\n           \t )\n          \t}else if(item.title==\'\u5408\u540C\u9644\u4EF6\'){\n            \tPartOneTitle.push(\n            \t<span className=\'ysp-appendices\'>\n            \t\t{item.title}:\t\n            \t</span>\n           \t )\n          \t}else if(item.title==\'\u5F52\u6863\u65E5\u671F\'){\n              PartOneTitle.push(\n              <span className=\'ysp-BackDate\'>\n              \t{item.title}:\n              </span>\n              )\n            }else if(item.title==\'\u5408\u540C\u76D6\u7AE0\u65E5\u671F\'){\n              PartOneTitle.push(\n              <span\tclassName=\'ysp-SealDate\'>\n              \t{item.title}:\n              </span>\n              )\n            }else if(item.title==\'\u9000\u6B3E\u7406\u7531\u6CE8\u610F\u4E8B\u9879\'){\n              PartOneTitle.push(\n              <span\tstyle={{color:\'red\'}}>\n              \t{item.title}:\n              </span>)\n          \t}else if(item.title==\'\u76D6\u7AE0\u6216\u5F52\u6863\'){\n              PartOneTitle.push(\n              <span\tclassName=\'ysp-SealDate\'>\n              \t{item.title}:\n              </span>)\n          \t}else if(item.title!=\'\'){\n              PartOneTitle.push(\n            \t<span>\n            \t\t{item.title}:\t\n            \t</span>\n           \t )\n            }\n            if( data.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'TEXTAREA\'){\n          \t\tPartOneCont.push(\n            \t\t<textarea value={data.onePartCont[index].cont[0]}>\n              \t</textarea>\n            \t)\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'TIME\'\t){\n              if(\tdata.onePartCont[index].cont[0]==""\t&&\tdata.onePartCont[index].cont[1]==""\t){\n                PartOneCont.push(\n                \t<label></label>\n                )\n              }else{\n               PartOneCont.push(\n                \t<label>\n                \t\t<span>{data.onePartCont[index].cont[0]}</span>\n                 \t \t\u2014\u2014\n                  \t<span>{data.onePartCont[index].cont[1]}</span>\n                \t</label>\n              \t)   \n              }   \n           \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'THREE\'\t){\n              if(data.onePartCont[index].cont\t&&\tdata.onePartCont[index].cont.length==1){\n              \tPartOneCont.push(\n              \t\t<label>\n                \t\t{data.onePartCont[index].cont[0]}\n                \t</label>\n              \t)   \n              }else if(data.onePartCont[index].cont\t&&\tdata.onePartCont[index].cont.length==2){\n               \tPartOneCont.push(\n                \t<label>\n                  \t<span>{data.onePartCont[index].cont[0]}</span>\n                    -\n                    <span>{data.onePartCont[index].cont[1]}</span>\n                  </label>\n                )        \n              }else if(\tdata.onePartCont[index].cont\t&&\tdata.onePartCont[index].cont.length==3){\n              \tPartOneCont.push(\n                \t<label>\n                  \t<span>{data.onePartCont[index].cont[0]}</span>\n                    <span>{data.onePartCont[index].cont[1]}</span>\n                    <span>{data.onePartCont[index].cont[2]}</span>\n                  </label>\n                )                \n              }      \n            }else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'A\'){\n              if(\tdata.onePartCont[index].cont.length>0\t){\n              \tPartOneCont.push(\n              \t\t<label\tclassName=\'ysp-download\'>\n                  {\tdata.onePartCont[index].cont\t&&\tdata.onePartCont[index].cont.map(function(val,i){\n                  \tif(\tdata.onePartCont[index].delete\t){\n                      return(\n                        <div\tclassName=\'ysp-download-Most-De\'>\n                          <span>{data.onePartCont[index].memory[i]}</span>\n                          <div className=\'ysp-Download-Attachment\'\tonClick={_this.props.click}\tdata-id={i}>{val}</div>\n                        </div>\n                      )   \n                    }else{\n                      return(\n                        <div\tclassName=\'ysp-download-Most-NoDe\'>\n                          <span>{data.onePartCont[index].memory[i]}</span>\n                          <div\tclassName=\'ysp-Download-Attachment\'\tonClick={_this.props.click}\tdata-id={i}>{val}</div>\n                        </div>\n                      )\n                    }\n                  })\t\n                }\n                </label>)\n              }\n            }else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'REMARKS\'\t){\n              PartOneCont.push(\n              \t<label className=\'ysp-remarks\' dangerouslySetInnerHTML={{__html:data.onePartCont[index].cont[0]}}></label>\n              )       \n            }else\tif(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'RECEIVETYPE\'\t){\n              \tPartOneCont.push(\n                \t<div\tclassName=\'ysp-receive-type\'>\n                  \t<div className=\'ysp-receive-type-cont\'\tonClick={_this.props.click}\t>\n                      {data.onePartCont[index].cont[0]}\n                      <i\tonClick={_this.props.click}\t></i>\n                    </div>\n                    <div\tstyle={{\tdisplay:\tdata.receiveType.length>0\t?\t\'block\'\t:\t\'none\'\t}}\tclassName="ysp-receive-cont">\n                    \t<div\tclassName=\'ysp-mask\'\tonClick={_this.props.click}\t>\n                      </div>\n                    \t<div\tclassName=\'ysp-dialog\'>\n                      \t{\tdata.receiveType&&data.receiveType.length\t&&\tdata.receiveType.length>0\t&&\tdata.receiveType.map(function(val,index){\n                        \treturn(\n                            <div\tclassName=\'ysp-dialog-cont\'\tonClick={_this.props.click}\tdata-id={index}\t>{val}</div>\n                          )\n                        })\t\n                      }\n                      </div>\n                    </div>\n                  \t\n                  </div>\n              )\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'RECEIVETIME\'\t){\n              PartOneCont.push(<input\ttype=\'date\'\tdefaultValue={data.onePartCont[index].cont[0]}\tonChange={_this.props.change}\t\tclassName=\'ysp-receive-time\'\t/>)\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'DATEPICKER\'\t){\n              PartOneCont.push(<input\ttype=\'date\'\tvalue={data.onePartCont[index].cont[0]}\tonChange={_this.props.change}\t\tclassName=\'ysp-datepicker-time\'\t/>)\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'BACKDATE\'\t){\n              PartOneCont.push(<input\ttype=\'date\'\tdefaultValue={data.onePartCont[index].cont[0]}\tonChange={_this.props.change}\tdata-key={data.onePartCont[index].parent}\tclassName=\'ysp-backDate\' disabled/>)\n            }else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'SEALDATE\'\t){\n              PartOneCont.push(<AInput\ttype=\'date\' value={data.onePartCont[index].cont[0]}\t\tonBlur={_this.props.change}\tdata-key={data.onePartCont[index].parent}\tclassName=\'ysp-sealDate\'/>)       \n            }else if(data.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'returnDate\'){\n              PartOneCont.push(\n                <AInput\ttype=\'date\'\tvalue={data.onePartCont[index].cont[0]}\tonBlur={_this.props.change}\tdata-key="returnDate"\tclassName=\'ysp-returnDate\'/>\n              ) \n            }else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'RADIO\'){\n             PartOneCont.push(\n             \t<div className=\'ysp-radio-container\'>\n              \t{\tdata.onePartCont[index].cont.map((val,i)=>{\n                 \treturn(\n                  \t<label>\n                     <input onClick={_this.props.click} className=\'ysp-radio\'\tname="Fruit"\ttype=\'radio\'\tdata-key={data.onePartCont[index].parent} data-id={i}\tdata-son={data.onePartCont[index].son}\tchecked={\tdata.onePartCont[index].checked[i]\t}\tdisabled\t/>\t\t\t\t\t\t\t\t\t\t\t\t{val}\n                   \t</label>\n                  )  \n                 }\n                )\t}\n              </div>\n             ) \n            }else if(data.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'BACKSTATUS\'){\n              PartOneCont.push(\n              \t<AMUI.Field type="select" defaultValue={data.onePartCont[index].cont[0]} onChange={_this.props.onChange}\tdata-key={data.onePartCont[index].parent} disabled>\n        \t\t\t\t\t<option value="">\u8BF7\u9009\u62E9...</option>\n        \t\t\t\t\t<option value="\u76D6\u7AE0">\u76D6\u7AE0</option>\n        \t\t\t\t\t<option value="\u76D6\u7AE0\u53CA\u5F52\u6863">\u76D6\u7AE0\u53CA\u5F52\u6863</option>\n      \t\t\t\t\t</AMUI.Field>\n              )\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'CONTRACTSIGNSTATUS\'\t){\n              PartOneCont.push(\n              \t<AMUI.Field type="select" defaultValue={data.onePartCont[index].cont[0]} onChange={_this.props.onChange}\tdata-key={data.onePartCont[index].parent}\tdisabled>\n        \t\t\t\t\t<option value="">{data.onePartCont[index].cont[0]}</option>\n      \t\t\t\t\t</AMUI.Field>\n              )\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'SHENPIMONEY\'\t){\n             \tPartOneCont.push(\n              <AMUI.List>\n        \t\t\t\t<AMUI.List.Item nested="radio" >\n          \t\t\t\t<AMUI.Field label="\u662F" type="radio"  name="radio-list-1" data-key={data.onePartCont[index].parent}\tdata-id=\'0\'\tonClick={_this.props.click}\tdata-sign={data.onePartCont[index].id}\tdata-goal={data.onePartCont[index].sign}\tchecked={data.onePartCont[index].cont[0]==\'\u662F\'\t?\t\'true\'\t:\tnull}\tclassName=\'ysp-shenpiMoney\'/>\n        \t\t\t\t</AMUI.List.Item>\n        \t\t\t\t<AMUI.List.Item nested="radio" >\n          \t\t\t\t<AMUI.Field label="\u5426" type="radio"\tchecked={data.onePartCont[index].cont[0]==\'\u5426\'\t?\t\'true\'\t:\tnull} name="radio-list-1" data-key={data.onePartCont[index].parent}\tdata-id=\'1\'\tonClick={_this.props.click}\tdata-sign={data.onePartCont[index].id}\tclassName=\'ysp-shenpiMoney\'\tdata-goal={data.onePartCont[index].sign}/>\n        \t\t\t\t</AMUI.List.Item>\n      \t\t\t\t</AMUI.List>\n              ) \n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'ADVANCE\'\t){\n              PartOneCont.push(\n              \t<label className=\'ysp-advanceBalance\'>\n                \t<AMUI.Field  value={data.onePartCont[index].cont[0]}\ttype=\'text\'\tonBlur={_this.props.blur}\tclassName=\'ysp-advance\'/>\n              \t\t<b>{data.onePartCont[index].cont[1]}</b>  \n                </label>\n              )\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'RED\'\t){\n              PartOneCont.push(\n              \t<label\tclassName=\'ysp-RedTips\'>\n                  {\tdata.onePartCont[index].cont[0]\t}\n                </label>\n              )\n          \t}else\tif(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'STORAGEMODEL\'\t){\n              PartOneCont.push(\n              \t<label\tclassName=\'ysp-storage\'>\n                  <div>\n                  \t<span>{\tdata.onePartCont[index].cont[2]\t}</span>\n                    <label>\n                    \t<AMUI.Field\tvalue={data.onePartCont[index].cont[3]}\ttype=\'text\'\tclassName=\'ysp-storageModelNumber\'\tonBlur={_this.props.blur}/>\n                    </label>\n                  </div>\n                  <div>\n                  \t<span>{\tdata.onePartCont[index].cont[0]\t}</span>\n                    <label>\n                    \t<AMUI.Field\tvalue={data.onePartCont[index].cont[1]}\ttype=\'text\'\tclassName=\'ysp-storageModel\'\tonBlur={_this.props.blur}\t/>\n                    </label>\n                  </div>\n                </label>\n              )\n          \t}else\tif(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'OTHER\'\t){\n              PartOneCont.push(\n              \t<label\tclassName=\'ysp-other\'>\n                \t<AMUI.Field\tvalue={data.onePartCont[index].cont[0]}\ttype=\'text\'\tclassName=\'ysp-otherInput\'\tonBlur={_this.props.blur}\tdata-id={data.onePartCont[index].id}/>\n                </label>\n              )\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'TWO\'){\n               PartOneCont.push(\n               \t<label>\n                \t{data.onePartCont[index].cont[0]}\n                   &nbsp;\n                  {data.onePartCont[index].cont[1]}\n                </label>\n               )       \n            }else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'RETURN\'){\n              PartOneCont.push(\n               \t<label className=\'ysp-ReturnGoods\'\tonClick={_this.props.click}\tdata-key={data.onePartCont[index].parent}>\n                \t{data.onePartCont[index].cont[0]}\n                </label>\n               )    \n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'BADSALE\'){\n            \tif(data.onePartCont[index].number==0){\n              \tPartOneCont.push(\n                \t<label>{data.onePartCont[index].cont[0]}</label>\n                )\n            \t}else if(data.onePartCont[index].number==1){\n                PartOneCont.push(\n                \t<label>\n                \t\t<span>{data.onePartCont[index].cont[0]},</span>&nbsp;\n\t\t\t\t\t\t\t\t\t\t<span>{data.onePartCont[index].cont[1]}{data.onePartCont[index].cont[2]}</span>\t                  \n                </label>  \t\n                )    \n              }      \n            }else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'USEDAMOUNT\'\t){\n              PartOneCont.push(\n              \t<label className=\'ysp-use-damount\'>\n                \t<span>\n                    {data.onePartCont[index].cont[0]}\n                  </span>\n                  <AMUI.Button hollow amStyle=\'primary\' amSize=\'xs\' onClick={_this.props.click}\tclassName=\'ysp-check\'\tdata-key={data.onePartCont[index].id}>\n                    \u67E5\u770B\n                  </AMUI.Button>\n                </label>\n              )\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'REQUIRED\'\t){\n              PartOneCont.push(\n              <label>\n              \t<AMUI.Field\tvalue={data.onePartCont[index].cont[0]}\ttype=\'text\'\tclassName=\'ysp-required\'\tonBlur={_this.props.blur}\tdata-id={data.onePartCont[index].name}/>\n\t\t\t\t\t\t\t</label>)\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'POlICY\'\t){\n            \tif(\tdata.onePartCont[index].cont.length==1\t){\n                 PartOneCont.push(\n                 \t<label style={{width:\'50%\'}}>\n                  \t<i className=\'ysp-checkboxes\'\t></i>\n                     { data.onePartCont[index].cont[0] }\n                  </label>\n                 )\n              }else{\n            \t\tPartOneCont.push(\n                \t<div\tclassName=\'ysp-policy-type\'\t>\n                \t\t{\tdata.onePartCont[index].cont.map(function(it,idx){\n                 \t\t\treturn(\n                      \t<div>\n                      \t\t<i className=\'ysp-checkboxes\'\t></i>\n                        \t{ it\t}\n                      \t</div>\n                    \t\t)\n                \t\t\t})\t\n            \t\t\t\t}\n                \t</div> \n              \t) \n              }\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'PAYMENT\'\t){\n            PartOneCont.push(\n              <label>\n              \t<AMUI.Field\tvalue={data.onePartCont[index].cont[0]}\ttype=\'text\'\tclassName=\'ysp-required\'\tonBlur={_this.props.blur}\tdata-id={data.onePartCont[index].name}/>\n\t\t\t\t\t\t\t</label>)\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'SVPCFO\'\t){\n             PartOneCont.push(\n              <label className="ysp-svpcfo" >\n            \t\t<div className="ysp-input"  >{data.onePartCont[index].cont[0]}</div>\n                <i onClick={ _this.props.clear } data-key={ data.onePartCont[index].id } ></i>\n                <b onClick={ _this.props.moreOnClick } data-key={ data.onePartCont[index].id } >\u25CF\u25CF\u25CF</b>\n        \t\t\t</label>\n             )\n          \t}else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'radio\'\t&& data.onePartCont[index].change\t){\n               PartOneCont.push(\n               \t<AMUI.List>\n              \t\t{\tdata.onePartCont[index].cont.map((it,idx)=>{\n                    return(\n                    \t<AMUI.List.Item nested="radio" >\n            \t\t\t\t\t\t<AMUI.Field label={it}\tclassName=\'ysp-belowKsPeice\' data-key={data.onePartCont[index].id}\ttype="radio" name="radio-list-2"\tonClick={_this.props.click} checked={data.onePartCont[index].checked[idx]}\tdata-id={idx}/>\n        \t\t\t\t\t\t\t</AMUI.List.Item>\n                    \t)\n              \t\t\t})\n                \t} \n              \t</AMUI.List>\n               )\n            }else if(data.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'isFinish\'){\n              PartOneCont.push(\n                <label className="ysp-isFinish" >\n                \t<span className={\tdata.onePartCont[index].checked[0]==false ?\t"ysp-unchecked"\t:\t"ysp-checkboxes"\t}  data-key="isFinish" onClick={_this.props.oneClick}></span>\n                  {data.onePartCont[index].cont}\n                </label>\n              ) \n            }else if(data.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'isReturn\'){\n              PartOneCont.push(\n                <AMUI.List>\n                  <AMUI.List.Item nested="checkbox" >\n                    <AMUI.Field className="ysp-checkboxes" name="checkbox-list-1" label="\u662F" type="checkbox"  data-key="isReturn" onClick={_this.props.click} data-key="isReturn" checked={data.onePartCont[index].check} disabled={data.onePartCont[index].disable}/>\n                  </AMUI.List.Item>\n                </AMUI.List>\n              ) \n            }else if(data.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'inputRadio\'){\n              if(data.onePartCont[index].disabled=="disabled"){\n                PartOneCont.push(\n                  <label className="ysp-inputRadio">  \n                    <span>{data.onePartCont[index].cont}</span>\n                  </label>\n                ) \n              }else{\n                PartOneCont.push(\n                  <AMUI.List >\n                    {data.onePartCont[index].cont.map((d,i)=>{\n                      return(\n                        <AMUI.List.Item nested="radio" >\n                          <AMUI.Field label={d}\tclassName=\'ysp-inputRadio\' checked={data.onePartCont[index].checked[i]} \ttype="radio" name="radio-list-3" onClick={_this.props.click}\t data-id={i} data-key={data.onePartCont[index].id}/>\n                        </AMUI.List.Item>\n                      )\n                    })}\n                  </AMUI.List>\n                ) \n              }\n              \n            }else if(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr==\'SPINNER\'\t){\n             PartOneCont.push(\n              <label>\n              \t<AMUI.Field\tvalue={data.onePartCont[index].cont[0]}\ttype=\'text\'\tclassName=\'ysp-spinner\' onBlur={_this.props.onchangeSO}\tdata-key={data.onePartCont[index].class}\t/>\n\t\t\t\t\t\t\t</label>) \n          \t}else\tif(\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr!=\'HIDDEN\'){\n            \tPartOneCont.push(\n            \t\t<label>\n                  {data.onePartCont[index].cont}\n                </label>\n           \t\t)\n          \t}\n            if(\t\tdata.onePartCont[index]\t&&\tdata.onePartCont[index].attr\t&&\tdata.onePartCont[index].attr\t!=\'HIDDEN\'&&data.onePartTitle[index].title!==""\t\t){\n               \treturn (\n            \t\t\t<div>\n              \t\t\t{PartOneTitle}\n              \t\t\t{PartOneCont}\n                   \t{PartOneErr}\n            \t\t\t</div>\n         \t \t\t\t)\n            \t} \n      \t\t})}\n         </div> \n      );\n    }else{\n      var PartTwoCard=[];\n      PartTwoCard.push(<div style={{display:\'none\'}}></div>)\n    }\n    if(\tdata&&\tdata.tishi&&\tdata.tishi.title\t&&\tdata.tishi.title.length\t&&\tdata.tishi.title.length>0\t){\n       var tishiCont=[];\n      tishiCont.push(\n        <div className=\'ysp-Prompt\'>\n          <div>\n          \t<span\tdangerouslySetInnerHTML={{__html:data.tishi.title[0]}}></span>\n          \t<label\tdangerouslySetInnerHTML={{__html:data.tishi.cont[0]}}></label>\n          </div>\n        </div>\n      )\n    }\n    if(data&&\tdata.btns&&\tdata.btns.btn\t&&\tdata.btns.btn.length && data.btns.btn.length>0\t&&\tdata.btns.class){\n      var btnCont=[];\n      btnCont.push(\n      \t<div className=\'ysp-Previous-details\'>\n          {data\t&&\tdata.btns.btn.map((item,i)=><AMUI.Button hollow amStyle=\'primary\' amSize=\'xs\' onClick={_this.props.click} className=\'ysp-detail\'\tdata-key={data.btns.btnID[i]}\tdata-id={i}>{item}</AMUI.Button>)}\n        </div>\n      )\n    }else if(data\t&&\tdata.btns&&\tdata.btns.btn&&\tdata.btns.btn.length && data.btns.btn.length>0){\n      var btnCont=[];\n      btnCont.push(\n      \t<div className=\'ysp-Previous-details\'>\n          {data\t&&\tdata.btns.btn.map((item,i)=><AMUI.Button hollow amStyle=\'primary\' amSize=\'xs\' onClick={_this.props.click} className=\'detail\'\tdata-key={data.btns.btnID[i]}\tdata-id={i}\tdata-title={data.btns.title}>{item}</AMUI.Button>)}\n        </div>\n      )\n  \t}else{\n      var btnCont=[];\n      btnCont.push(\n      \t<div style={{display:\'none\'}}></div>\n      )\n    }\n    return(\n      <div>\n        {PartTwoCard}\n        {tishiCont}\n        {btnCont}\n      </div>\n    )\n  }\n}\nclass UnderTable extends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n    var _this=this;\n    var secondPart=[];\n    if(data&&data.FGSCGFK&&data.FGSCGFK.title&&data.FGSCGFK.title.length>0){\n      var firstPart=data.FGSCGFK.title.map(function(d,i){\n        return(\n        \t<div>\n            <span>{d.replace(/:/g,"")}:</span>\n            <label>{data.FGSCGFK.cont[i]}</label>\n          </div>\n        )\n      })\n    }\n    if(data&&data.FGSCGFK&&data.FGSCGFK.second&&data.FGSCGFK.second.cont&&data.FGSCGFK.second.cont.length>0){\n      var d=data.FGSCGFK.second;\n      if(d.disable==true){\n        secondPart.push(\n          <div>\n          \t<span>{d.title}</span>\n            <label style={{width:"100%"}}>\n              {d.cont.map(function(dd,ii){\n                return(\n                \t<div style={{textAlign:\'left\',width:"80%"}}>{dd}</div>\n                )  \n              })}\n            </label>\n          </div>\n        \t\n        )\n      }else{\n        secondPart.push(\n          <div>\n          \t<span>{d.title}</span>\n            <label style={{width:"100%"}}>\n              { <div style={{textAlign:\'left\',width:"100%"}}>\n                  <span>{d.cont[0].title}</span>\n                  {d.cont[0].err? <span className=\'ysp_zyt_errorIcon\'></span>:""}\n                  <AInput value={d.cont[0].cont} className="companyIpt" onBlur={_this.props.companyBlur}/>\n                  <span>\u5143</span>\n                </div> }{\n                <div style={{textAlign:\'left\',width:"100%"}}>\n                  <span>{d.cont[1].title}</span>\n                  {d.cont[1].err? <span className=\'ysp_zyt_errorIcon\'></span>:""}\n                </div>\n              }\n            </label>\n          </div>\n        \t\n        )\n      }\n    }\n    return(\n    \t<div>\n        {data&&data.FGSCGFK&&data.FGSCGFK.title&&data.FGSCGFK.title.length>0&&data.FGSCGFK.second? \n        <div className="ysp-flowsheet-onePart">\n          {firstPart}\n          {secondPart}\n          {data&&data.FGSCGFK&&data.FGSCGFK.second&&data.FGSCGFK.second.cont&&data.FGSCGFK.second.cont.length>0&&data.FGSCGFK.second.disable==false? <textarea defaultValue={data.FGSCGFK.second.cont[1].cont} onChange={_this.props.otherBlur} className="companyTxt"></textarea>:""}\n        </div>:""}\n      </div>\n    )\n  }\n}\nclass PaymentOff extends React.Component{\n  render(){\n    var\tdata=this.props.PassedCustomData || [];\n    var _this=this;\n    var container=[];\n    if(data&&data.FGSCGFK&&\tdata.FGSCGFK.twoPartCont\t&&\tdata.FGSCGFK.twoPartCont.length\t&&\tdata.FGSCGFK.twoPartCont.length>0\t&&data.FGSCGFK.type=="payOffDetail"){\n        data.FGSCGFK.twoPartCont.map(function(item,i){\n          if(item[5]=="payOffDetail"){\n            container.push(\n              <div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n                {\titem\t&&\titem.map(function(value,index){\n                  if(index==0){\n                    return(\n                      <p className=\'ysp-twoPart-cardTit\'>\n                        <span>\n                          <b className=\'ysp-detailed-field field\' onClick={_this.props.numberClick}  data-id={i} data-key={index} data-val={value} name=""></b>\n                          {value}\n                        </span>\n                      </p>\n                      )\n                    }else if(index==1){\n                      return(\n                        <div>\n                          {data.FGSCGFK.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:\n                            </span>\n                          }\n                          <label>\n                            <AInput className=\'ysp-detailed-field field\' value={value}\ttype=\'date\' onBlur={_this.props.timeBlur}\tdata-id={i} data-key={index}/>\n                          </label>\n                        </div>\n                      )\t\n                    }else if(index==2){\n                      var peymentMethod=["","\u7535\u6C47","\u94F6\u884C\u627F\u5151\u6C47\u7968","\u56FD\u5185\u4FE1\u7528\u8BC1","\u4FDD\u51FD","\u8F6C\u8D26\u652F\u7968","\u73B0\u91D1\u652F\u7968","\u73B0\u91D1"]\n                      return(\n                        <div>\n                          {data.FGSCGFK.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:\n                            </span>\n                          }\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<select className=\'ysp-detailed-field field\'  onChange={_this.props.timeBlur} data-id={i} data-key={index}>\n                            {peymentMethod.map(function(val,ind){\n                              return(<option selected={val==value? true:false} data-num={ind}>{val}</option>)\n                            })}\n                            \n                          </select>\n                        </div>\n                      )\t\n                    }else if(index==3){\n                      var peymentBank=["","\u5EFA\u8BBE\u94F6\u884C","\u4E2D\u56FD\u94F6\u884C","\u5149\u5927\u94F6\u884C","\u4EA4\u901A\u94F6\u884C","\u62DB\u5546\u94F6\u884C","\u5317\u4EAC\u94F6\u884C","\u534E\u590F\u94F6\u884C","\u6D66\u53D1\u94F6\u884C","\u5DE5\u5546\u94F6\u884C","\u519C\u4E1A\u94F6\u884C","\u4E2D\u4FE1\u94F6\u884C"]\n                      return(\n                        <div>\n                          {data.FGSCGFK.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:\n                            </span>\n                          }\n                          <select className=\'ysp-detailed-field field\' data-paymentList="asdasd"  onChange={_this.props.timeBlur} data-id={i} data-key={index}>\n                            {peymentBank.map(function(val,ind){\n                              return(<option selected={val==value? true:false} data-num={ind}>{val}</option>)\n                            })}\n                          </select>\n                        </div>\n                      )\t\n                    }else if(index==4){\n                      return(                        \n                        <div>\n                          {data.FGSCGFK.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:\n                            </span>\n                          }\n                          <label><AMUI.Field className=\'ysp-detailed-field\' value={value}\ttype=\'text\' onBlur={_this.props.timeBlur} \tdata-id={i} data-key={index}/></label>\n                        </div>\n                      )\t\n                    }\n                  })\t\n                }\n            </div>\t\n            )\n          }else{\n            container.push(\n              <div\tclassName=\'ysp-flowsheet-twoPart-card\'>\n                {\titem\t&&\titem.map(function(value,index){\n                  if(index<5){\n                    return(\n                      <div>\n                          {data.FGSCGFK.twoPartTitle[index].key\t?\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:&nbsp;\n                              <span className=\'ysp-star\'>*</span>\n                            </span>\t:\t\n                            <span>\n                              {data.FGSCGFK.twoPartTitle[index].title}:\n                            </span>\n                          }\n                          <label>{value}</label>\n                        </div>\n                      )\n                    }\n                 \t\t\t\n                  })\t\n                }\n            </div>\t\n            )\n          }\n\n        })\n      }\n    return(\n      <div className="ysp-flowsheet-twoPart">\n        {container}\n      </div>\n    )\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.componentWillUpdate = function (e) {\n      var yspList = _this2.refs.yspList;\n      if (yspList) {\n        var bs = yspList.ownerDocument.querySelectorAll("b.ysp-detailed-field");\n        for (var i = 0; i < bs.length; i++) {\n          bs[i].setAttribute("name", "");\n        }\n      }\n    }, _this2.Change = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.selectedIndex, e.target.dataset.key],\n          eventType: \'change\'\n        });\n      }\n    }, _this2.oneClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.dataset.key,\n          eventType: "oneClick"\n        });\n      }\n    }, _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n\n      if (handler) {\n        handler({\n          data: [e.target.className, parseInt(e.target.dataset.id), e.target.dataset.key, e.target.dataset.son, e.target.dataset.sign, e.target.dataset.goal, e.target.dataset.title, e.target.value],\n          eventType: \'click\'\n        });\n      }\n    }, _this2.clear = function (e) {\n      var target = e.target;\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.dataset.key,\n          eventType: \'clear\'\n        });\n      }\n    }, _this2.moreOnClick = function (e) {\n      var target = e.target;\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.dataset.key,\n          eventType: \'moreOnClick\'\n        });\n      }\n    }, _this2.onchangeSO = function (e) {\n      var target = e.target;\n      var reg = /[^0-9\\.]/g;\n      target.value = target.value.replace(reg, "");\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: [target.className, target.value.replace(reg, ""), target.dataset.key],\n          eventType: \'changeSO\'\n        });\n      }\n    }, _this2.onChange = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value, e.target.dataset.key],\n          eventType: \'change\'\n        });\n      }\n    }, _this2.detailBlur = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n      var reg = /[^0-9]/g;\n      target.value = target.value.replace(reg, "");\n      if (target.value == \'\') {\n        target.value = target.dataset.old;\n      }\n      if (handler) {\n        handler({\n          data: [target.className, target.value, target.dataset.id, target.dataset.key],\n          eventType: \'detailBlur\'\n        });\n      }\n    }, _this2.timeBlur = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n      var reg = /[^0-9]/g;\n      if (reg.test(target.value) && target.dataset.key == 4) {\n        // var div=target.ownerDocument.createElement("div");\n        // div.className="alertNum";\n        // div.textContent="\u53EA\u80FD\u586B\u5199\u6570\u5B57";\n        // target.ownerDocument.documentElement.appendChild(div);\n        target.value = target.value.replace(reg, "");\n      }\n      if (handler) {\n        handler({\n          data: [target.className, target.value, target.dataset.id, target.dataset.key, target.selectedIndex],\n          eventType: \'timeBlur\'\n        });\n      }\n    }, _this2.addNumBlur = function (e) {\n      var target = e.target;\n      var handler = _this2.props.customHandler;\n      var reg = /[^0-9\\.]/g;\n      //var reg\t=\t /(^[1-9]([0-9]+)?(\\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\\.[0-9]([0-9])?$)/g;\n      target.value = target.value.replace(reg, \'\');\n      if (target.value == \'\') {\n        target.value = target.dataset.old;\n      }\n      if (target.value == "undefined") {\n        target.value = "";\n      }\n      if (handler) {\n        handler({\n          data: [target.className, target.value, target.dataset.id, target.dataset.key],\n          eventType: \'addNumblur\'\n        });\n      }\n    }, _this2.numBlur = function (e) {\n      var target = e.target;\n      var handler = _this2.props.customHandler;\n      var reg = /[^0-9\\.]/g;\n      target.value = target.value.replace(reg, "");\n      if (target.value == "") {\n        target.value = target.dataset.old;\n      }\n      if (target.value == "undefined") {\n        target.value = "";\n      }\n      if (handler) {\n        handler({\n          data: [target.className, target.value, target.dataset.id, target.dataset.key],\n          eventType: \'numblur\'\n        });\n      }\n    }, _this2.onBlur = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value, e.target.dataset.id, e.target.dataset.key],\n          eventType: \'blur\'\n        });\n      }\n    }, _this2.onFocus = function (e) {\n      var handler = _this2.props.customHandler;\n\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value, e.target.dataset.id, e.target.dataset.key],\n          eventType: \'focus\'\n        });\n      }\n    }, _this2.numberClick = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n\n      var bs = target.ownerDocument.querySelectorAll("b.ysp-detailed-field");\n      for (var i = 0; i < bs.length; i++) {\n        bs[i].setAttribute("name", "");\n      }\n      target.setAttribute("name", "ysp_listCheckRow");\n      if (handler) {\n        handler({\n          data: [e.target.className, "", e.target.dataset.id, e.target.dataset.key],\n          eventType: \'focus\'\n        });\n      }\n    }, _this2.paymentBlur = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n\n      if (handler) {\n        handler({\n          data: [target.className, target.value, target.dataset.id, target.dataset.key],\n          eventType: \'paymentBlur\'\n        });\n      }\n    }, _this2.companyBlur = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n\n      if (handler) {\n        handler({\n          data: [target.className, target.value],\n          eventType: \'companyBlur\'\n        });\n      }\n    }, _this2.otherBlur = function (e) {\n      var handler = _this2.props.customHandler;\n      var target = e.target;\n\n      if (handler) {\n        handler({\n          data: [target.className, target.value],\n          eventType: \'otherBlur\'\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      return React.createElement(\n        "div",\n        { className: "ysp-flowsheet ysp-datafrom2", ref: "yspList" },\n        React.createElement(EssentialInformation, { PassedCustomData: data, click: _this.onClick.bind(_this), onChange: _this.Change.bind(_this), change: _this.onChange.bind(_this), blur: _this.onBlur.bind(_this), onchangeSO: _this.onchangeSO.bind(_this), moreOnClick: _this.moreOnClick.bind(_this), clear: _this.clear.bind(_this), oneClick: _this.oneClick.bind(_this) }),\n        React.createElement(PaymentOff, { PassedCustomData: data, blur: _this.onBlur.bind(_this), focus: _this.onFocus.bind(_this), detailBlur: _this.detailBlur.bind(_this), timeBlur: _this.timeBlur.bind(_this), numberClick: _this.numberClick.bind(_this), paymentBlur: _this.paymentBlur.bind(_this) }),\n        React.createElement(Total, { PassedCustomData: data }),\n        React.createElement(ListInformation, { PassedCustomData: data, blur: _this.onBlur.bind(_this), focus: _this.onFocus.bind(_this), detailBlur: _this.detailBlur.bind(_this), timeBlur: _this.timeBlur.bind(_this), numberClick: _this.numberClick.bind(_this), paymentBlur: _this.paymentBlur.bind(_this) }),\n        React.createElement(XTHJG, { PassedCustomData: data }),\n        React.createElement(RejectsStatus, { PassedCustomData: data, blur: _this.onBlur.bind(_this), click: _this.onClick.bind(_this) }),\n        React.createElement(Dataform, { PassedCustomData: data, blur: _this.onBlur.bind(_this), onChange: _this.onChange.bind(_this), click: _this.onClick.bind(_this), numBlur: _this.numBlur.bind(_this), addNumBlur: _this.addNumBlur.bind(_this) }),\n        React.createElement(UnderTable, { PassedCustomData: data, companyBlur: _this.companyBlur.bind(_this), otherBlur: _this.otherBlur.bind(_this) }),\n        React.createElement(Agree, { PassedCustomData: data, onChange: _this.onChange.bind(_this) })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n\nvar XTHJG = function (_React$Component2) {\n  _inherits(XTHJG, _React$Component2);\n\n  function XTHJG() {\n    _classCallCheck(this, XTHJG);\n\n    return _possibleConstructorReturn(this, (XTHJG.__proto__ || Object.getPrototypeOf(XTHJG)).apply(this, arguments));\n  }\n\n  _createClass(XTHJG, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      if (data && data.XTHJG && data.XTHJG.total && data.XTHJG.total.length && data.XTHJG.total.length > 0 && data.XTHJG.totalTF == true && data.XTHJG.cont && data.XTHJG.cont.length > 0) {\n        var XTHJGtotal = [];\n        if (data.XTHJG.DetailTitle && data.XTHJG.DetailTitle.length && data.XTHJG.DetailTitle.length > 0) {\n          XTHJGtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              data.XTHJG.DetailTitle[0]\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.XTHJG.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.XTHJG.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        } else {\n          XTHJGtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              "\\u603B\\u8BA1"\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.XTHJG.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \' && item != \' \uFF1A\') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.XTHJG.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        }\n      } else {\n        var XTHJGtotal = [];\n        XTHJGtotal.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data.XTHJG && data.XTHJG.cont && data.XTHJG.cont.length && data.XTHJG.cont.length > 0) {\n        var XTHJGcontinues = [];\n        {\n          data && data.XTHJG.cont.map(function (item, i) {\n            XTHJGcontinues.push(React.createElement(\n              "div",\n              { className: "ysp-flowsheet-twoPart-card" },\n              item && item.map(function (value, index) {\n                if (index == 0) {\n                  return React.createElement(\n                    "p",\n                    { className: "ysp-twoPart-cardTit" },\n                    React.createElement(\n                      "span",\n                      null,\n                      React.createElement("b", null),\n                      value\n                    )\n                  );\n                } else {\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.XTHJG.title[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.XTHJG.title[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.XTHJG.title[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      value\n                    )\n                  );\n                }\n              })\n            ));\n          });\n        }\n      } else {\n        var XTHJGcontinues = [];\n        XTHJGcontinues.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.THJL && data.THJL.total && data.THJL.total.length && data.THJL.total.length > 0 && data.THJL.totalTF == true && data.THJL.cont && data.THJL.cont.length > 0) {\n        var THJLtotal = [];\n        if (data.THJL.DetailTitle && data.THJL.DetailTitle.length && data.THJL.DetailTitle.length > 0) {\n          THJLtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              data.THJL.DetailTitle[0]\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.THJL.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.THJL.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        } else {\n          THJLtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              "\\u603B\\u8BA1"\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.THJL.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \' && item != \' \uFF1A\') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.THJL.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        }\n      } else {\n        var THJLtotal = [];\n        THJLtotal.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.THJL && data.THJL.cont && data.THJL.cont.length && data.THJL.cont.length > 0) {\n        var THJLcontinues = [];\n        {\n          data && data.THJL.cont.map(function (item, i) {\n            THJLcontinues.push(React.createElement(\n              "div",\n              { className: "ysp-flowsheet-twoPart-card" },\n              item && item.map(function (value, index) {\n                if (index == 0) {\n                  return React.createElement(\n                    "p",\n                    { className: "ysp-twoPart-cardTit" },\n                    React.createElement(\n                      "span",\n                      null,\n                      React.createElement("b", null),\n                      value\n                    )\n                  );\n                } else {\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.THJL.title[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.THJL.title[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.THJL.title[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      value\n                    )\n                  );\n                }\n              })\n            ));\n          });\n        }\n      } else {\n        var THJLcontinues = [];\n        THJLcontinues.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.KCBJ && data.KCBJ.total && data.KCBJ.total.length && data.KCBJ.total.length > 0 && data.KCBJ.totalTF == true && data.KCBJ.cont && data.KCBJ.cont.length > 0) {\n        var KCBJtotal = [];\n        if (data.KCBJ.DetailTitle && data.KCBJ.DetailTitle.length && data.KCBJ.DetailTitle.length > 0) {\n          KCBJtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              data.KCBJ.DetailTitle[0]\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.KCBJ.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.KCBJ.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        } else {\n          KCBJtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              "\\u603B\\u8BA1"\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.KCBJ.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \' && item != \' \uFF1A\') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.KCBJ.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        }\n      } else {\n        var KCBJtotal = [];\n        KCBJtotal.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.KCBJ && data.KCBJ.cont && data.KCBJ.cont.length && data.KCBJ.cont && data.KCBJ.cont.length > 0) {\n        var KCBJcontinues = [];\n        {\n          data && data.KCBJ.cont.map(function (item, i) {\n            KCBJcontinues.push(React.createElement(\n              "div",\n              { className: "ysp-flowsheet-twoPart-card" },\n              item && item.map(function (value, index) {\n                if (index == 0) {\n                  return React.createElement(\n                    "p",\n                    { className: "ysp-twoPart-cardTit" },\n                    React.createElement(\n                      "span",\n                      null,\n                      React.createElement("b", null),\n                      value\n                    )\n                  );\n                } else {\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.KCBJ.title[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.KCBJ.title[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.KCBJ.title[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      value\n                    )\n                  );\n                }\n              })\n            ));\n          });\n        }\n      } else {\n        var KCBJcontinues = [];\n        KCBJcontinues.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.ZDJL && data.ZDJL.total && data.ZDJL.total.length && data.ZDJL.total.length > 0 && data.ZDJL.totalTF == true && data.ZDJL.cont && data.ZDJL.cont.length > 0) {\n        var ZDJLtotal = [];\n        if (data.ZDJL.DetailTitle && data.ZDJL.DetailTitle.length > 0) {\n          ZDJLtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              data.ZDJL.DetailTitle[0]\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.ZDJL.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.ZDJL.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        } else {\n          ZDJLtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              "\\u603B\\u8BA1"\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.ZDJL.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \' && item != \' \uFF1A\') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.ZDJL.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        }\n      } else {\n        var ZDJLtotal = [];\n        ZDJLtotal.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.ZDJL && data.ZDJL.cont && data.ZDJL.cont.length && data.ZDJL.cont.length > 0) {\n        var ZDJLcontinues = [];\n        {\n          data && data.ZDJL.cont.map(function (item, i) {\n            ZDJLcontinues.push(React.createElement(\n              "div",\n              { className: "ysp-flowsheet-twoPart-card" },\n              item && item.map(function (value, index) {\n                if (index == 0) {\n                  return React.createElement(\n                    "p",\n                    { className: "ysp-twoPart-cardTit" },\n                    React.createElement(\n                      "span",\n                      null,\n                      React.createElement("b", null),\n                      value\n                    )\n                  );\n                } else {\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.ZDJL.title[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.ZDJL.title[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.ZDJL.title[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      value\n                    )\n                  );\n                }\n              })\n            ));\n          });\n        }\n      } else {\n        var ZDJLcontinues = [];\n        ZDJLcontinues.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.QQTHBC && data.QQTHBC.total && data.QQTHBC.total.length && data.QQTHBC.total.length > 0 && data.QQTHBC.totalTF == true && data.QQTHBC.cont && data.QQTHBC.cont.length > 0) {\n        var QQTHBCtotal = [];\n        if (data.QQTHBC.DetailTitle && data.QQTHBC.DetailTitle.length && data.QQTHBC.DetailTitle.length > 0) {\n          QQTHBCtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              data.QQTHBC.DetailTitle[0]\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.QQTHBC.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.QQTHBC.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        } else {\n          QQTHBCtotal.push(React.createElement(\n            "div",\n            { className: "ysp-total" },\n            React.createElement(\n              "h1",\n              null,\n              "\\u603B\\u8BA1"\n            ),\n            React.createElement(\n              "ul",\n              null,\n              data && data.QQTHBC.total.map(function (item, i) {\n                if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \' && item != \' \uFF1A\') {\n                  return React.createElement(\n                    "li",\n                    null,\n                    React.createElement(\n                      "span",\n                      null,\n                      data.QQTHBC.title[i - 1].title\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      item\n                    )\n                  );\n                }\n              })\n            )\n          ));\n        }\n      } else {\n        var QQTHBCtotal = [];\n        QQTHBCtotal.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.QQTHBC && data.QQTHBC.cont && data.QQTHBC.cont.length && data.QQTHBC.cont.length > 0) {\n        var QQTHBCcontinues = [];\n        {\n          data && data.QQTHBC.cont.map(function (item, i) {\n            QQTHBCcontinues.push(React.createElement(\n              "div",\n              { className: "ysp-flowsheet-twoPart-card" },\n              item && item.map(function (value, index) {\n                if (index == 0) {\n                  return React.createElement(\n                    "p",\n                    { className: "ysp-twoPart-cardTit" },\n                    React.createElement(\n                      "span",\n                      null,\n                      React.createElement("b", null),\n                      value\n                    )\n                  );\n                } else {\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.QQTHBC.title[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.QQTHBC.title[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.QQTHBC.title[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      value\n                    )\n                  );\n                }\n              })\n            ));\n          });\n        }\n      } else {\n        var QQTHBCcontinues = [];\n        QQTHBCcontinues.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      return React.createElement(\n        "div",\n        null,\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "div",\n            null,\n            XTHJGtotal\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-flowsheet-twoPart" },\n            XTHJGcontinues\n          )\n        ),\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "div",\n            null,\n            THJLtotal\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-flowsheet-twoPart" },\n            THJLcontinues\n          )\n        ),\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "div",\n            null,\n            KCBJtotal\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-flowsheet-twoPart" },\n            KCBJcontinues\n          )\n        ),\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "div",\n            null,\n            ZDJLtotal\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-flowsheet-twoPart" },\n            ZDJLcontinues\n          )\n        ),\n        React.createElement(\n          "div",\n          null,\n          React.createElement(\n            "div",\n            null,\n            QQTHBCtotal\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-flowsheet-twoPart" },\n            QQTHBCcontinues\n          )\n        )\n      );\n    }\n  }]);\n\n  return XTHJG;\n}(React.Component);\n\nvar Dataform = function (_React$Component3) {\n  _inherits(Dataform, _React$Component3);\n\n  function Dataform() {\n    _classCallCheck(this, Dataform);\n\n    return _possibleConstructorReturn(this, (Dataform.__proto__ || Object.getPrototypeOf(Dataform)).apply(this, arguments));\n  }\n\n  _createClass(Dataform, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      if (data && data.threePartCont && data.threePartCont.length && data.threePartCont.length > 0) {\n        var PartTwoCard = [];\n        PartTwoCard.push(React.createElement(\n          "div",\n          { className: "ysp-flowsheet-onePart\\tysp-dataform2" },\n          data && data.threePartTitle.map(function (item, index) {\n            var PartOneTitle = [];\n            var PartOneCont = [];\n            var PartOneErr = [];\n            if (data.threePartCont[index] && data.threePartCont[index].err != null) {\n              if (data.threePartCont[index].err == false) {\n                PartOneErr.push(React.createElement("span", null));\n              } else {\n                PartOneErr.push(React.createElement("span", { className: "ysp_user_errorIcon" }));\n              }\n            }\n            if (item.key) {\n              PartOneTitle.push(React.createElement(\n                "span",\n                { className: "ysp-dataform2-title" },\n                item.title,\n                ": \\xA0",\n                React.createElement(\n                  "span",\n                  { className: "ysp-star" },\n                  "*"\n                )\n              ));\n            } else {\n              PartOneTitle.push(React.createElement(\n                "span",\n                { className: "ysp-dataform2-title" },\n                item.title,\n                ":"\n              ));\n            }\n            if (data.threePartCont[index] && data.threePartCont[index].attr && data.threePartCont[index].attr == \'INPUT\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                null,\n                data.threePartCont[index].cont\n              ));\n            } else if (data.threePartCont[index] && data.threePartCont[index].attr && data.threePartCont[index].attr == \'CANINPUTADDNUM\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-Quota" },\n                React.createElement(AInput, { value: data.threePartCont[index].cont, type: "text", onBlur: _this.props.addNumBlur, className: "ysp-can-input", "data-id": data.threePartCont[index].parenID })\n              ));\n            } else if (data.threePartCont[index] && data.threePartCont[index].attr && data.threePartCont[index].attr == \'CANINPUTNUM\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-Quota" },\n                React.createElement(AInput, { value: data.threePartCont[index].cont[0], type: "text", onBlur: _this.props.numBlur, className: "ysp-can-input", "data-id": data.threePartCont[index].parenID })\n              ));\n            } else if (data.threePartCont[index] && data.threePartCont[index].attr && data.threePartCont[index].attr == \'CANINPUT\') {\n              if (data.threePartCont[index].cont.length == 2) {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  { className: "ysp-Quota" },\n                  React.createElement(AInput, { value: data.threePartCont[index].cont[0], type: "text", onBlur: _this.props.blur, className: "ysp-can-input", "data-id": data.threePartCont[index].parenID }),\n                  data.threePartCont[index].cont[1]\n                ));\n              } else {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  { className: "ysp-Quota" },\n                  React.createElement(AInput, { value: data.threePartCont[index].cont[0], type: "text", onBlur: _this.props.blur, className: "ysp-can-input", "data-id": data.threePartCont[index].parenID })\n                ));\n              }\n            } else if (data.threePartCont[index] && data.threePartCont[index].attr && data.threePartCont[index].attr == \'TEXTAREA\') {\n              PartOneCont.push(React.createElement(ATextarea, { value: data.threePartCont[index].cont[0], disabled: true }));\n            } else if (data.threePartCont[index] && data.threePartCont[index].attr && data.threePartCont[index].attr == \'CANTEXTAREA\') {\n              PartOneCont.push(React.createElement(ATextarea, { value: data.threePartCont[index].cont[0], onChange: _this.props.onChange, className: "ysp-can-textarea", "data-key": data.threePartCont[index].parenID }));\n            } else if (data.threePartCont[index] && data.threePartCont[index].attr && data.threePartCont[index].attr == \'RADIO\') {\n              PartOneCont.push(React.createElement(\n                AMUI.List,\n                null,\n                data.threePartCont[index].cont.map(function (it, idx) {\n                  return React.createElement(\n                    AMUI.List.Item,\n                    { nested: "radio" },\n                    React.createElement(AMUI.Field, { label: it, type: "radio", name: data.threePartCont[index].parenID, checked: data.threePartCont[index].checked[idx], className: "ysp-cause", "data-key": data.threePartCont[index].parenID, "data-id": idx, onClick: _this.props.click })\n                  );\n                })\n              ));\n            }\n            if (data.threePartCont[index] && data.threePartCont[index].attr && data.threePartCont[index].attr != \'HIDDEN\') {\n              return React.createElement(\n                "div",\n                null,\n                PartOneTitle,\n                PartOneCont,\n                PartOneErr\n              );\n            }\n          })\n        ));\n      } else {\n        var PartTwoCard = [];\n        PartTwoCard.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      return React.createElement(\n        "div",\n        null,\n        PartTwoCard\n      );\n    }\n  }]);\n\n  return Dataform;\n}(React.Component);\n\nvar RejectsStatus = function (_React$Component4) {\n  _inherits(RejectsStatus, _React$Component4);\n\n  function RejectsStatus() {\n    _classCallCheck(this, RejectsStatus);\n\n    return _possibleConstructorReturn(this, (RejectsStatus.__proto__ || Object.getPrototypeOf(RejectsStatus)).apply(this, arguments));\n  }\n\n  _createClass(RejectsStatus, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      if (data && data.rejectsStatus && data.rejectsStatus.Recont && data.rejectsStatus.Recont.length && data.rejectsStatus.Recont.length > 0) {\n        var container = [];\n        container.push(React.createElement(\n          "div",\n          { className: "ysp-rejectsStatus" },\n          data.rejectsStatus.Retit.map(function (item, i) {\n            return React.createElement(\n              "div",\n              null,\n              item.key ? React.createElement(\n                "span",\n                null,\n                item.title,\n                ": \\xA0",\n                React.createElement(\n                  "span",\n                  { className: "ysp-star" },\n                  "*"\n                )\n              ) : React.createElement(\n                "span",\n                null,\n                item.title,\n                ":"\n              ),\n              React.createElement(\n                AMUI.List,\n                null,\n                data.rejectsStatus.attr == \'radio\' && data.rejectsStatus.Recont[i] && data.rejectsStatus.Recont[i].cont.map(function (it, idx) {\n                  return React.createElement(\n                    AMUI.List.Item,\n                    { nested: "radio" },\n                    React.createElement(AMUI.Field, { label: it, type: "radio", name: "radio-list-1", checked: data.rejectsStatus.Recont[i].checked[idx], "data-key": idx, disabled: true })\n                  );\n                }),\n                data.rejectsStatus.attr == \'canRadio\' && data.rejectsStatus.Recont[i] && data.rejectsStatus.Recont[i].cont.map(function (it, idx) {\n                  return React.createElement(\n                    AMUI.List.Item,\n                    { nested: "radio" },\n                    React.createElement(AMUI.Field, { label: it, className: "ysp-belowKsPeice", type: "radio", name: "radio-list-1", checked: data.rejectsStatus.Recont[i].checked[idx], "data-id": idx, "data-key": data.rejectsStatus.id, onClick: _this.props.click })\n                  );\n                })\n              )\n            );\n          })\n        ));\n      }\n      if (data && data.belowKsPeice && data.belowKsPeice.Recont && data.belowKsPeice.Recont.length && data.belowKsPeice.Recont.length > 0) {\n        var container1 = [];\n        container1.push(React.createElement(\n          "div",\n          { className: "ysp-rejectsStatus" },\n          data && data.belowKsPeice.Retit.map(function (item, i) {\n            var tit = [];\n            var cont = [];\n            if (data.belowKsPeice.Recont[i].err && data.belowKsPeice.Recont[i].err == true) {\n              if (item.key) {\n                tit.push(React.createElement(\n                  "span",\n                  null,\n                  item.title,\n                  ": \\xA0",\n                  React.createElement(\n                    "span",\n                    { className: "ysp-star" },\n                    "*"\n                  ),\n                  React.createElement("b", { className: "ysp_user_errorIcon" })\n                ));\n              } else {\n                tit.push(React.createElement(\n                  "span",\n                  null,\n                  item.title,\n                  ":",\n                  React.createElement("b", { className: "ysp_user_errorIcon" })\n                ));\n              }\n            } else {\n              if (item.key) {\n                tit.push(React.createElement(\n                  "span",\n                  null,\n                  item.title,\n                  ": \\xA0",\n                  React.createElement(\n                    "span",\n                    { className: "ysp-star" },\n                    "*"\n                  )\n                ));\n              } else {\n                tit.push(React.createElement(\n                  "span",\n                  null,\n                  item.title,\n                  ":"\n                ));\n              }\n            }\n\n            if (data.belowKsPeice.Recont[i].attr && data.belowKsPeice.Recont[i].attr == \'radio\') {\n              data.belowKsPeice.Recont[i].change ? cont.push(React.createElement(\n                AMUI.List,\n                null,\n                data.belowKsPeice.Recont[i].cont.map(function (it, idx) {\n                  return React.createElement(\n                    AMUI.List.Item,\n                    { nested: "radio" },\n                    React.createElement(AMUI.Field, { label: it, className: "ysp-belowKsPeice", "data-key": data.belowKsPeice.Recont[i].id, type: "radio", name: "radio-list-2", onClick: _this.props.click, checked: data.belowKsPeice.Recont[i].checked[idx], "data-id": idx })\n                  );\n                })\n              )) : cont.push(React.createElement(\n                AMUI.List,\n                null,\n                data.belowKsPeice.Recont[i].cont.map(function (it, idx) {\n                  return React.createElement(\n                    AMUI.List.Item,\n                    { nested: "radio" },\n                    React.createElement(AMUI.Field, { label: it, type: "radio", name: "radio-list-2", checked: data.belowKsPeice.Recont[i].checked[idx] })\n                  );\n                })\n              ));\n            } else if (data.belowKsPeice.Recont[i].attr && data.belowKsPeice.Recont[i].attr == \'input\') {\n              data.belowKsPeice.Recont[i].change ? cont.push(React.createElement(AMUI.Field, { type: "text", value: data.belowKsPeice.Recont[i].cont[0], onBlur: _this.props.blur, className: "ysp-otherInput", "data-id": data.belowKsPeice.Recont[i].id })) : cont.push(React.createElement("input", { type: "text", value: data.belowKsPeice.Recont[i].cont[0], disabled: true }));\n            }\n            return React.createElement(\n              "div",\n              null,\n              tit,\n              cont\n            );\n          })\n        ));\n      }\n      return React.createElement(\n        "div",\n        null,\n        container,\n        container1\n      );\n    }\n  }]);\n\n  return RejectsStatus;\n}(React.Component);\n\nvar Agree = function (_React$Component5) {\n  _inherits(Agree, _React$Component5);\n\n  function Agree() {\n    _classCallCheck(this, Agree);\n\n    return _possibleConstructorReturn(this, (Agree.__proto__ || Object.getPrototypeOf(Agree)).apply(this, arguments));\n  }\n\n  _createClass(Agree, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      if (data && data.Agree && data.Agree.length > 0) {\n        var agree = [];\n        agree.push(React.createElement(\n          "div",\n          { className: "ysp-Approval-opinions" },\n          React.createElement(\n            "span",\n            null,\n            data.Agree[0]\n          ),\n          React.createElement(ATextarea, { defaultValue: data.Agree[1], onBlur: _this.props.onChange, className: "ysp-agree" })\n        ));\n      } else {\n        var agreen = [];\n        agreen.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      return React.createElement(\n        "div",\n        null,\n        agree\n      );\n    }\n  }]);\n\n  return Agree;\n}(React.Component);\n\nvar Total = function (_React$Component6) {\n  _inherits(Total, _React$Component6);\n\n  function Total() {\n    _classCallCheck(this, Total);\n\n    return _possibleConstructorReturn(this, (Total.__proto__ || Object.getPrototypeOf(Total)).apply(this, arguments));\n  }\n\n  _createClass(Total, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      if (data && data.twoPartCont && data.twoPartCont.length && data.total && data.total.length > 0 && data.totalTF == true && data.twoPartCont.length > 0) {\n        var total = [];\n        if (data.totalTitle && data.totalTitle.length > 0) {\n          if (data.twoPart.checked == false) {\n            total.push(React.createElement(\n              "div",\n              { className: "ysp-total" },\n              React.createElement(\n                "h1",\n                null,\n                data.totalTitle[0]\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data && data.total.map(function (item, i) {\n                  if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \') {\n                    return React.createElement(\n                      "li",\n                      null,\n                      React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[i - 1].title\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        item\n                      )\n                    );\n                  }\n                })\n              )\n            ));\n          } else if (data.twoPart.checked == true) {\n            total.push(React.createElement(\n              "div",\n              { className: "ysp-total" },\n              React.createElement(\n                "h1",\n                null,\n                data.totalTitle[0]\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data && data.total.map(function (item, i) {\n                  if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \' && item != \' \uFF1A\') {\n                    return React.createElement(\n                      "li",\n                      null,\n                      React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[i - 2].title\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        item\n                      )\n                    );\n                  }\n                })\n              )\n            ));\n          }\n        } else {\n          if (data.twoPart.checked == false) {\n            total.push(React.createElement(\n              "div",\n              { className: "ysp-total" },\n              React.createElement(\n                "h1",\n                null,\n                "\\u603B\\u8BA1"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data && data.total.map(function (item, i) {\n                  if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \' && item != \' \uFF1A\') {\n                    return React.createElement(\n                      "li",\n                      null,\n                      React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[i - 1].title\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        item\n                      )\n                    );\n                  }\n                })\n              )\n            ));\n          } else if (data.twoPart.checked == true) {\n            total.push(React.createElement(\n              "div",\n              { className: "ysp-total" },\n              React.createElement(\n                "h1",\n                null,\n                "\\u603B\\u8BA1"\n              ),\n              React.createElement(\n                "ul",\n                null,\n                data && data.total.map(function (item, i) {\n                  if (item != \'&nbsp;\' && i > 1 && item != \'\u603B\u8BA1\' && item != " " && item != \' : \' && item != \' \uFF1A\') {\n                    return React.createElement(\n                      "li",\n                      null,\n                      React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[i - 2].title\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        item\n                      )\n                    );\n                  }\n                })\n              )\n            ));\n          }\n        }\n      } else if (data && data.totalTitle && data.totalTitle.length && data.totalTitle.length > 0 && data.totalTF == false && data.twoPartCont && data.twoPartCont.length > 0) {\n        var total = [];\n        total.push(React.createElement(\n          "div",\n          { className: "ysp-total" },\n          React.createElement(\n            "h1",\n            null,\n            data.totalTitle[0]\n          )\n        ));\n      } else {\n        var total = [];\n        total.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      return React.createElement(\n        "div",\n        null,\n        total\n      );\n    }\n  }]);\n\n  return Total;\n}(React.Component);\n\nvar ListInformation = function (_React$Component7) {\n  _inherits(ListInformation, _React$Component7);\n\n  function ListInformation() {\n    _classCallCheck(this, ListInformation);\n\n    return _possibleConstructorReturn(this, (ListInformation.__proto__ || Object.getPrototypeOf(ListInformation)).apply(this, arguments));\n  }\n\n  _createClass(ListInformation, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      if (data && data.twoPartCont && data.twoPartCont.length && data.twoPartCont.length > 0) {\n        var container = [];\n        if (data.twoPart && data.twoPart.title && data.twoPart.title == \'MultipleHeader\' && data.twoPart.titleNum && data.twoPart.titleNum.length == 3 && data.twoPart.titleNum[0] == 4 && data.twoPart.titleNum[1] == 2 && data.twoPart.titleNum[2] == 2) {\n          {\n            data && data.twoPartCont.map(function (item, i) {\n              container.push(React.createElement(\n                "div",\n                { className: "ysp-flowsheet-twoPart-card" },\n                React.createElement(\n                  "p",\n                  { className: "ysp-twoPart-cardTit" },\n                  React.createElement(\n                    "span",\n                    null,\n                    React.createElement("b", null),\n                    item[0]\n                  )\n                ),\n                React.createElement(\n                  "h1",\n                  null,\n                  data.twoPart.titleCont[0]\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  data.twoPartTitle[1].key ? React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[1].title,\n                    ": \\xA0",\n                    React.createElement(\n                      "span",\n                      { className: "ysp-star" },\n                      "*"\n                    )\n                  ) : React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[1].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[1]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  data.twoPartTitle[2].key ? React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[2].title,\n                    ": \\xA0",\n                    React.createElement(\n                      "span",\n                      { className: "ysp-star" },\n                      "*"\n                    )\n                  ) : React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[2].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[2]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  data.twoPartTitle[3].key ? React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[3].title,\n                    ": \\xA0",\n                    React.createElement(\n                      "span",\n                      { className: "ysp-star" },\n                      "*"\n                    )\n                  ) : React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[3].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[3]\n                  )\n                ),\n                React.createElement(\n                  "h1",\n                  null,\n                  data.twoPart.titleCont[1]\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  data.twoPartTitle[4].key ? React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[4].title,\n                    ": \\xA0",\n                    React.createElement(\n                      "span",\n                      { className: "ysp-star" },\n                      "*"\n                    )\n                  ) : React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[4].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[4]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  data.twoPartTitle[5].key ? React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[5].title,\n                    ": \\xA0",\n                    React.createElement(\n                      "span",\n                      { className: "ysp-star" },\n                      "*"\n                    )\n                  ) : React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[5].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[5]\n                  )\n                ),\n                React.createElement(\n                  "h1",\n                  null,\n                  data.twoPart.titleCont[2]\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  data.twoPartTitle[6].key ? React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[6].title,\n                    ": \\xA0",\n                    React.createElement(\n                      "span",\n                      { className: "ysp-star" },\n                      "*"\n                    )\n                  ) : React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[6].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[6]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  data.twoPartTitle[7].key ? React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[7].title,\n                    ": \\xA0",\n                    React.createElement(\n                      "span",\n                      { className: "ysp-star" },\n                      "*"\n                    )\n                  ) : React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[7].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[7]\n                  )\n                )\n              ));\n            });\n          }\n        } else if (data && data.twoPart && data.twoPart.title && data.twoPart.oneTitle && data.twoPart.oneTitle.length && data.twoPart.title == \'ThreeStageHeader\' && data.twoPart.oneTitle.length == 3) {\n          {\n            data && data.twoPartCont.map(function (item, i) {\n              container.push(React.createElement(\n                "div",\n                { className: "ysp-flowsheet-twoPart-card" },\n                React.createElement(\n                  "p",\n                  { className: "ysp-twoPart-cardTit" },\n                  React.createElement(\n                    "span",\n                    null,\n                    React.createElement("b", null),\n                    item[0]\n                  )\n                ),\n                React.createElement(\n                  "h1",\n                  null,\n                  data.twoPart.oneTitle[0]\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[1].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[1]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[2].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[2]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[3].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[3]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[4].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[4]\n                  )\n                ),\n                React.createElement(\n                  "h1",\n                  null,\n                  data.twoPart.oneTitle[1],\n                  "(",\n                  data.twoPart.twoTitle[0],\n                  ")"\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[5].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[5]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[6].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[6]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[7].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[7]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[8].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[8]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[9].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[9]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[10].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[10]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[11].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[11]\n                  )\n                ),\n                React.createElement(\n                  "h1",\n                  null,\n                  data.twoPart.oneTitle[2]\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[12].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[12]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[13].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[13]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[14].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[14]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[15].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[15]\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.twoPartTitle[16].title,\n                    ":"\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    item[16]\n                  )\n                )\n              ));\n            });\n          }\n        } else if (data && data.twoPartContCanInput && data.twoPartContCanInput == true) {\n          {\n            data && data.twoPartCont.map(function (item, i) {\n              container.push(React.createElement(\n                "div",\n                { className: "ysp-flowsheet-twoPart-card" },\n                item && item.map(function (value, index) {\n                  if (index == 0) {\n                    return React.createElement(\n                      "p",\n                      { className: "ysp-twoPart-cardTit" },\n                      React.createElement(\n                        "span",\n                        null,\n                        React.createElement("b", null),\n                        value\n                      )\n                    );\n                  } else if (index > 11) {\n                    return React.createElement(\n                      "div",\n                      { className: "ysp-detailed-input" },\n                      data.twoPartTitle[index].key ? React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":\\xA0",\n                        React.createElement(\n                          "span",\n                          { className: "ysp-star" },\n                          "*"\n                        )\n                      ) : React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":"\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        React.createElement(AMUI.Field, { className: "ysp-detailed-field", value: value, type: "text", onClick: _this.props.focus, "data-asdasdasd": "asdasd", onBlur: _this.props.detailBlur, "data-id": i, "data-key": index, "data-old": value })\n                      )\n                    );\n                  } else {\n                    return React.createElement(\n                      "div",\n                      null,\n                      data.twoPartTitle[index].key ? React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":\\xA0",\n                        React.createElement(\n                          "span",\n                          { className: "ysp-star" },\n                          "*"\n                        )\n                      ) : React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":"\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        value\n                      )\n                    );\n                  }\n                })\n              ));\n            });\n          }\n        } else if (data && data.twoPartCont && data.twoPartCont.length && data.twoPartCont.length > 0 && data.type == "payOffDetail") {\n          data.twoPartCont.map(function (item, i) {\n            if (item[5] == "payOffDetail") {\n              container.push(React.createElement(\n                "div",\n                { className: "ysp-flowsheet-twoPart-card" },\n                item && item.map(function (value, index) {\n                  if (index == 0) {\n                    return React.createElement(\n                      "p",\n                      { className: "ysp-twoPart-cardTit" },\n                      React.createElement(\n                        "span",\n                        null,\n                        React.createElement("b", { className: "ysp-detailed-field field", onClick: _this.props.numberClick, "data-id": i, "data-key": index, "data-val": value, name: "" }),\n                        value\n                      )\n                    );\n                  } else if (index == 1) {\n                    return React.createElement(\n                      "div",\n                      null,\n                      data.twoPartTitle[index].key ? React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":\\xA0",\n                        React.createElement(\n                          "span",\n                          { className: "ysp-star" },\n                          "*"\n                        )\n                      ) : React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":"\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        React.createElement(AInput, { className: "ysp-detailed-field field", value: value, type: "date", onBlur: _this.props.timeBlur, "data-id": i, "data-key": index })\n                      )\n                    );\n                  } else if (index == 2) {\n                    var peymentMethod = ["", "\u7535\u6C47", "\u94F6\u884C\u627F\u5151\u6C47\u7968", "\u56FD\u5185\u4FE1\u7528\u8BC1", "\u4FDD\u51FD", "\u8F6C\u8D26\u652F\u7968", "\u73B0\u91D1\u652F\u7968", "\u73B0\u91D1"];\n                    return React.createElement(\n                      "div",\n                      null,\n                      data.twoPartTitle[index].key ? React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":\\xA0",\n                        React.createElement(\n                          "span",\n                          { className: "ysp-star" },\n                          "*"\n                        )\n                      ) : React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":"\n                      ),\n                      "\\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0",\n                      React.createElement(\n                        "select",\n                        { className: "ysp-detailed-field field", onChange: _this.props.timeBlur, "data-id": i, "data-key": index },\n                        peymentMethod.map(function (val, ind) {\n                          return React.createElement(\n                            "option",\n                            { selected: val == value ? true : false },\n                            val\n                          );\n                        })\n                      )\n                    );\n                  } else if (index == 3) {\n                    var peymentBank = ["", "\u4E2D\u56FD\u94F6\u884C", "\u5EFA\u8BBE\u94F6\u884C", "\u5149\u5927\u94F6\u884C", "\u4EA4\u901A\u94F6\u884C", "\u62DB\u5546\u94F6\u884C", "\u5317\u4EAC\u94F6\u884C", "\u534E\u590F\u94F6\u884C", "\u6D66\u53D1\u94F6\u884C", "\u5DE5\u5546\u94F6\u884C", "\u519C\u4E1A\u94F6\u884C", "\u4E2D\u4FE1\u94F6\u884C"];\n                    return React.createElement(\n                      "div",\n                      null,\n                      data.twoPartTitle[index].key ? React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":\\xA0",\n                        React.createElement(\n                          "span",\n                          { className: "ysp-star" },\n                          "*"\n                        )\n                      ) : React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":"\n                      ),\n                      React.createElement(\n                        "select",\n                        { className: "ysp-detailed-field field", "data-paymentList": "asdasd", onChange: _this.props.timeBlur, "data-id": i, "data-key": index },\n                        peymentBank.map(function (val, ind) {\n                          return React.createElement(\n                            "option",\n                            { selected: val == value ? true : false },\n                            val\n                          );\n                        })\n                      )\n                    );\n                  } else if (index == 4) {\n                    return React.createElement(\n                      "div",\n                      null,\n                      data.twoPartTitle[index].key ? React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":\\xA0",\n                        React.createElement(\n                          "span",\n                          { className: "ysp-star" },\n                          "*"\n                        )\n                      ) : React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":"\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        React.createElement(AMUI.Field, { className: "ysp-detailed-field", value: value, type: "text", onBlur: _this.props.timeBlur, "data-id": i, "data-key": index })\n                      )\n                    );\n                  }\n                })\n              ));\n            } else {\n              container.push(React.createElement(\n                "div",\n                { className: "ysp-flowsheet-twoPart-card" },\n                item && item.map(function (value, index) {\n                  if (index < 5) {\n                    return React.createElement(\n                      "div",\n                      null,\n                      data.twoPartTitle[index].key ? React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":\\xA0",\n                        React.createElement(\n                          "span",\n                          { className: "ysp-star" },\n                          "*"\n                        )\n                      ) : React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":"\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        value\n                      )\n                    );\n                  }\n                })\n              ));\n            }\n          });\n        } else {\n          {\n            data && data.twoPartCont && data.twoPartCont.length && data.twoPartCont.length > 0 && data.twoPartCont.map(function (item, i) {\n              container.push(React.createElement(\n                "div",\n                { className: "ysp-flowsheet-twoPart-card" },\n                item && item.map(function (value, index) {\n                  if (index == 0) {\n                    return React.createElement(\n                      "p",\n                      { className: "ysp-twoPart-cardTit" },\n                      React.createElement(\n                        "span",\n                        null,\n                        React.createElement("b", null),\n                        value\n                      )\n                    );\n                  } else {\n                    return React.createElement(\n                      "div",\n                      null,\n                      data.twoPartTitle[index].key ? React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":\\xA0",\n                        React.createElement(\n                          "span",\n                          { className: "ysp-star" },\n                          "*"\n                        )\n                      ) : React.createElement(\n                        "span",\n                        null,\n                        data.twoPartTitle[index].title,\n                        ":"\n                      ),\n                      React.createElement(\n                        "label",\n                        null,\n                        value\n                      )\n                    );\n                  }\n                })\n              ));\n            });\n          }\n        }\n      } else {\n        var container = [];\n        container.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      return React.createElement(\n        "div",\n        { className: "ysp-flowsheet-twoPart" },\n        container\n      );\n    }\n  }]);\n\n  return ListInformation;\n}(React.Component);\n\nvar EssentialInformation = function (_React$Component8) {\n  _inherits(EssentialInformation, _React$Component8);\n\n  function EssentialInformation() {\n    _classCallCheck(this, EssentialInformation);\n\n    return _possibleConstructorReturn(this, (EssentialInformation.__proto__ || Object.getPrototypeOf(EssentialInformation)).apply(this, arguments));\n  }\n\n  _createClass(EssentialInformation, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      if (data && data.onePartTitle && data.onePartTitle.length && data.onePartTitle.length > 0) {\n        var PartTwoCard = [];\n        PartTwoCard.push(React.createElement(\n          "div",\n          { className: "ysp-flowsheet-onePart" },\n          data && data.onePartTitle.map(function (item, index) {\n            var PartOneTitle = [];\n            var PartOneCont = [];\n            var PartOneErr = [];\n            if (data.onePartCont[index] && data.onePartCont[index].err != null) {\n              if (data.onePartCont[index].err == false) {\n                PartOneErr.push(React.createElement("span", null));\n              } else {\n                PartOneErr.push(React.createElement("span", { className: "ysp_user_errorIcon" }));\n              };\n            }\n            if (typeof item.key != \'undefined\' && item.key && item.title != \'\') {\n              PartOneTitle.push(React.createElement(\n                "span",\n                null,\n                item.title,\n                ": \\xA0",\n                React.createElement(\n                  "span",\n                  { className: "ysp-star" },\n                  "*"\n                )\n              ));\n            } else if (item.title == \'\u5408\u540C\u53CA\u5BA1\u6279\u5355\u586B\u62A5\u6CE8\u610F\u4E8B\u9879\') {\n              PartOneTitle.push(React.createElement(\n                "span",\n                { style: { width: \'60%\' } },\n                item.title,\n                ":"\n              ));\n            } else if (item.title == \'\u5408\u540C\u9644\u4EF6\') {\n              PartOneTitle.push(React.createElement(\n                "span",\n                { className: "ysp-appendices" },\n                item.title,\n                ":"\n              ));\n            } else if (item.title == \'\u5F52\u6863\u65E5\u671F\') {\n              PartOneTitle.push(React.createElement(\n                "span",\n                { className: "ysp-BackDate" },\n                item.title,\n                ":"\n              ));\n            } else if (item.title == \'\u5408\u540C\u76D6\u7AE0\u65E5\u671F\') {\n              PartOneTitle.push(React.createElement(\n                "span",\n                { className: "ysp-SealDate" },\n                item.title,\n                ":"\n              ));\n            } else if (item.title == \'\u9000\u6B3E\u7406\u7531\u6CE8\u610F\u4E8B\u9879\') {\n              PartOneTitle.push(React.createElement(\n                "span",\n                { style: { color: \'red\' } },\n                item.title,\n                ":"\n              ));\n            } else if (item.title == \'\u76D6\u7AE0\u6216\u5F52\u6863\') {\n              PartOneTitle.push(React.createElement(\n                "span",\n                { className: "ysp-SealDate" },\n                item.title,\n                ":"\n              ));\n            } else if (item.title != \'\') {\n              PartOneTitle.push(React.createElement(\n                "span",\n                null,\n                item.title,\n                ":"\n              ));\n            }\n            if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'TEXTAREA\') {\n              PartOneCont.push(React.createElement("textarea", { value: data.onePartCont[index].cont[0] }));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'TIME\') {\n              if (data.onePartCont[index].cont[0] == "" && data.onePartCont[index].cont[1] == "") {\n                PartOneCont.push(React.createElement("label", null));\n              } else {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[0]\n                  ),\n                  "\\u2014\\u2014",\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[1]\n                  )\n                ));\n              }\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'THREE\') {\n              if (data.onePartCont[index].cont && data.onePartCont[index].cont.length == 1) {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  null,\n                  data.onePartCont[index].cont[0]\n                ));\n              } else if (data.onePartCont[index].cont && data.onePartCont[index].cont.length == 2) {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[0]\n                  ),\n                  "-",\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[1]\n                  )\n                ));\n              } else if (data.onePartCont[index].cont && data.onePartCont[index].cont.length == 3) {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[0]\n                  ),\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[1]\n                  ),\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[2]\n                  )\n                ));\n              }\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'A\') {\n              if (data.onePartCont[index].cont.length > 0) {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  { className: "ysp-download" },\n                  data.onePartCont[index].cont && data.onePartCont[index].cont.map(function (val, i) {\n                    if (data.onePartCont[index].delete) {\n                      return React.createElement(\n                        "div",\n                        { className: "ysp-download-Most-De" },\n                        React.createElement(\n                          "span",\n                          null,\n                          data.onePartCont[index].memory[i]\n                        ),\n                        React.createElement(\n                          "div",\n                          { className: "ysp-Download-Attachment", onClick: _this.props.click, "data-id": i },\n                          val\n                        )\n                      );\n                    } else {\n                      return React.createElement(\n                        "div",\n                        { className: "ysp-download-Most-NoDe" },\n                        React.createElement(\n                          "span",\n                          null,\n                          data.onePartCont[index].memory[i]\n                        ),\n                        React.createElement(\n                          "div",\n                          { className: "ysp-Download-Attachment", onClick: _this.props.click, "data-id": i },\n                          val\n                        )\n                      );\n                    }\n                  })\n                ));\n              }\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'REMARKS\') {\n              PartOneCont.push(React.createElement("label", { className: "ysp-remarks", dangerouslySetInnerHTML: { __html: data.onePartCont[index].cont[0] } }));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'RECEIVETYPE\') {\n              PartOneCont.push(React.createElement(\n                "div",\n                { className: "ysp-receive-type" },\n                React.createElement(\n                  "div",\n                  { className: "ysp-receive-type-cont", onClick: _this.props.click },\n                  data.onePartCont[index].cont[0],\n                  React.createElement("i", { onClick: _this.props.click })\n                ),\n                React.createElement(\n                  "div",\n                  { style: { display: data.receiveType.length > 0 ? \'block\' : \'none\' }, className: "ysp-receive-cont" },\n                  React.createElement("div", { className: "ysp-mask", onClick: _this.props.click }),\n                  React.createElement(\n                    "div",\n                    { className: "ysp-dialog" },\n                    data.receiveType && data.receiveType.length && data.receiveType.length > 0 && data.receiveType.map(function (val, index) {\n                      return React.createElement(\n                        "div",\n                        { className: "ysp-dialog-cont", onClick: _this.props.click, "data-id": index },\n                        val\n                      );\n                    })\n                  )\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'RECEIVETIME\') {\n              PartOneCont.push(React.createElement("input", { type: "date", defaultValue: data.onePartCont[index].cont[0], onChange: _this.props.change, className: "ysp-receive-time" }));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'DATEPICKER\') {\n              PartOneCont.push(React.createElement("input", { type: "date", value: data.onePartCont[index].cont[0], onChange: _this.props.change, className: "ysp-datepicker-time" }));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'BACKDATE\') {\n              PartOneCont.push(React.createElement("input", { type: "date", defaultValue: data.onePartCont[index].cont[0], onChange: _this.props.change, "data-key": data.onePartCont[index].parent, className: "ysp-backDate", disabled: true }));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'SEALDATE\') {\n              PartOneCont.push(React.createElement(AInput, { type: "date", value: data.onePartCont[index].cont[0], onBlur: _this.props.change, "data-key": data.onePartCont[index].parent, className: "ysp-sealDate" }));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'returnDate\') {\n              PartOneCont.push(React.createElement(AInput, { type: "date", value: data.onePartCont[index].cont[0], onBlur: _this.props.change, "data-key": "returnDate", className: "ysp-returnDate" }));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'RADIO\') {\n              PartOneCont.push(React.createElement(\n                "div",\n                { className: "ysp-radio-container" },\n                data.onePartCont[index].cont.map(function (val, i) {\n                  return React.createElement(\n                    "label",\n                    null,\n                    React.createElement("input", { onClick: _this.props.click, className: "ysp-radio", name: "Fruit", type: "radio", "data-key": data.onePartCont[index].parent, "data-id": i, "data-son": data.onePartCont[index].son, checked: data.onePartCont[index].checked[i], disabled: true }),\n                    "            ",\n                    val\n                  );\n                })\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'BACKSTATUS\') {\n              PartOneCont.push(React.createElement(\n                AMUI.Field,\n                { type: "select", defaultValue: data.onePartCont[index].cont[0], onChange: _this.props.onChange, "data-key": data.onePartCont[index].parent, disabled: true },\n                React.createElement(\n                  "option",\n                  { value: "" },\n                  "\\u8BF7\\u9009\\u62E9..."\n                ),\n                React.createElement(\n                  "option",\n                  { value: "\\u76D6\\u7AE0" },\n                  "\\u76D6\\u7AE0"\n                ),\n                React.createElement(\n                  "option",\n                  { value: "\\u76D6\\u7AE0\\u53CA\\u5F52\\u6863" },\n                  "\\u76D6\\u7AE0\\u53CA\\u5F52\\u6863"\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'CONTRACTSIGNSTATUS\') {\n              PartOneCont.push(React.createElement(\n                AMUI.Field,\n                { type: "select", defaultValue: data.onePartCont[index].cont[0], onChange: _this.props.onChange, "data-key": data.onePartCont[index].parent, disabled: true },\n                React.createElement(\n                  "option",\n                  { value: "" },\n                  data.onePartCont[index].cont[0]\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'SHENPIMONEY\') {\n              PartOneCont.push(React.createElement(\n                AMUI.List,\n                null,\n                React.createElement(\n                  AMUI.List.Item,\n                  { nested: "radio" },\n                  React.createElement(AMUI.Field, { label: "\\u662F", type: "radio", name: "radio-list-1", "data-key": data.onePartCont[index].parent, "data-id": "0", onClick: _this.props.click, "data-sign": data.onePartCont[index].id, "data-goal": data.onePartCont[index].sign, checked: data.onePartCont[index].cont[0] == \'\u662F\' ? \'true\' : null, className: "ysp-shenpiMoney" })\n                ),\n                React.createElement(\n                  AMUI.List.Item,\n                  { nested: "radio" },\n                  React.createElement(AMUI.Field, { label: "\\u5426", type: "radio", checked: data.onePartCont[index].cont[0] == \'\u5426\' ? \'true\' : null, name: "radio-list-1", "data-key": data.onePartCont[index].parent, "data-id": "1", onClick: _this.props.click, "data-sign": data.onePartCont[index].id, className: "ysp-shenpiMoney", "data-goal": data.onePartCont[index].sign })\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'ADVANCE\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-advanceBalance" },\n                React.createElement(AMUI.Field, { value: data.onePartCont[index].cont[0], type: "text", onBlur: _this.props.blur, className: "ysp-advance" }),\n                React.createElement(\n                  "b",\n                  null,\n                  data.onePartCont[index].cont[1]\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'RED\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-RedTips" },\n                data.onePartCont[index].cont[0]\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'STORAGEMODEL\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-storage" },\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[2]\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    React.createElement(AMUI.Field, { value: data.onePartCont[index].cont[3], type: "text", className: "ysp-storageModelNumber", onBlur: _this.props.blur })\n                  )\n                ),\n                React.createElement(\n                  "div",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[0]\n                  ),\n                  React.createElement(\n                    "label",\n                    null,\n                    React.createElement(AMUI.Field, { value: data.onePartCont[index].cont[1], type: "text", className: "ysp-storageModel", onBlur: _this.props.blur })\n                  )\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'OTHER\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-other" },\n                React.createElement(AMUI.Field, { value: data.onePartCont[index].cont[0], type: "text", className: "ysp-otherInput", onBlur: _this.props.blur, "data-id": data.onePartCont[index].id })\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'TWO\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                null,\n                data.onePartCont[index].cont[0],\n                "\\xA0",\n                data.onePartCont[index].cont[1]\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'RETURN\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-ReturnGoods", onClick: _this.props.click, "data-key": data.onePartCont[index].parent },\n                data.onePartCont[index].cont[0]\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'BADSALE\') {\n              if (data.onePartCont[index].number == 0) {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  null,\n                  data.onePartCont[index].cont[0]\n                ));\n              } else if (data.onePartCont[index].number == 1) {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  null,\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[0],\n                    ","\n                  ),\n                  "\\xA0",\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont[1],\n                    data.onePartCont[index].cont[2]\n                  )\n                ));\n              }\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'USEDAMOUNT\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-use-damount" },\n                React.createElement(\n                  "span",\n                  null,\n                  data.onePartCont[index].cont[0]\n                ),\n                React.createElement(\n                  AMUI.Button,\n                  { hollow: true, amStyle: "primary", amSize: "xs", onClick: _this.props.click, className: "ysp-check", "data-key": data.onePartCont[index].id },\n                  "\\u67E5\\u770B"\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'REQUIRED\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                null,\n                React.createElement(AMUI.Field, { value: data.onePartCont[index].cont[0], type: "text", className: "ysp-required", onBlur: _this.props.blur, "data-id": data.onePartCont[index].name })\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'POlICY\') {\n              if (data.onePartCont[index].cont.length == 1) {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  { style: { width: \'50%\' } },\n                  React.createElement("i", { className: "ysp-checkboxes" }),\n                  data.onePartCont[index].cont[0]\n                ));\n              } else {\n                PartOneCont.push(React.createElement(\n                  "div",\n                  { className: "ysp-policy-type" },\n                  data.onePartCont[index].cont.map(function (it, idx) {\n                    return React.createElement(\n                      "div",\n                      null,\n                      React.createElement("i", { className: "ysp-checkboxes" }),\n                      it\n                    );\n                  })\n                ));\n              }\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'PAYMENT\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                null,\n                React.createElement(AMUI.Field, { value: data.onePartCont[index].cont[0], type: "text", className: "ysp-required", onBlur: _this.props.blur, "data-id": data.onePartCont[index].name })\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'SVPCFO\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-svpcfo" },\n                React.createElement(\n                  "div",\n                  { className: "ysp-input" },\n                  data.onePartCont[index].cont[0]\n                ),\n                React.createElement("i", { onClick: _this.props.clear, "data-key": data.onePartCont[index].id }),\n                React.createElement(\n                  "b",\n                  { onClick: _this.props.moreOnClick, "data-key": data.onePartCont[index].id },\n                  "\\u25CF\\u25CF\\u25CF"\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'radio\' && data.onePartCont[index].change) {\n              PartOneCont.push(React.createElement(\n                AMUI.List,\n                null,\n                data.onePartCont[index].cont.map(function (it, idx) {\n                  return React.createElement(\n                    AMUI.List.Item,\n                    { nested: "radio" },\n                    React.createElement(AMUI.Field, { label: it, className: "ysp-belowKsPeice", "data-key": data.onePartCont[index].id, type: "radio", name: "radio-list-2", onClick: _this.props.click, checked: data.onePartCont[index].checked[idx], "data-id": idx })\n                  );\n                })\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'isFinish\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                { className: "ysp-isFinish" },\n                React.createElement("span", { className: data.onePartCont[index].checked[0] == false ? "ysp-unchecked" : "ysp-checkboxes", "data-key": "isFinish", onClick: _this.props.oneClick }),\n                data.onePartCont[index].cont\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'isReturn\') {\n              var _React$createElement;\n\n              PartOneCont.push(React.createElement(\n                AMUI.List,\n                null,\n                React.createElement(\n                  AMUI.List.Item,\n                  { nested: "checkbox" },\n                  React.createElement(AMUI.Field, (_React$createElement = { className: "ysp-checkboxes", name: "checkbox-list-1", label: "\\u662F", type: "checkbox", "data-key": "isReturn", onClick: _this.props.click }, _defineProperty(_React$createElement, "data-key", "isReturn"), _defineProperty(_React$createElement, "checked", data.onePartCont[index].check), _defineProperty(_React$createElement, "disabled", data.onePartCont[index].disable), _React$createElement))\n                )\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'inputRadio\') {\n              if (data.onePartCont[index].disabled == "disabled") {\n                PartOneCont.push(React.createElement(\n                  "label",\n                  { className: "ysp-inputRadio" },\n                  React.createElement(\n                    "span",\n                    null,\n                    data.onePartCont[index].cont\n                  )\n                ));\n              } else {\n                PartOneCont.push(React.createElement(\n                  AMUI.List,\n                  null,\n                  data.onePartCont[index].cont.map(function (d, i) {\n                    return React.createElement(\n                      AMUI.List.Item,\n                      { nested: "radio" },\n                      React.createElement(AMUI.Field, { label: d, className: "ysp-inputRadio", checked: data.onePartCont[index].checked[i], type: "radio", name: "radio-list-3", onClick: _this.props.click, "data-id": i, "data-key": data.onePartCont[index].id })\n                    );\n                  })\n                ));\n              }\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr == \'SPINNER\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                null,\n                React.createElement(AMUI.Field, { value: data.onePartCont[index].cont[0], type: "text", className: "ysp-spinner", onBlur: _this.props.onchangeSO, "data-key": data.onePartCont[index].class })\n              ));\n            } else if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr != \'HIDDEN\') {\n              PartOneCont.push(React.createElement(\n                "label",\n                null,\n                data.onePartCont[index].cont\n              ));\n            }\n            if (data.onePartCont[index] && data.onePartCont[index].attr && data.onePartCont[index].attr != \'HIDDEN\' && data.onePartTitle[index].title !== "") {\n              return React.createElement(\n                "div",\n                null,\n                PartOneTitle,\n                PartOneCont,\n                PartOneErr\n              );\n            }\n          })\n        ));\n      } else {\n        var PartTwoCard = [];\n        PartTwoCard.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      if (data && data.tishi && data.tishi.title && data.tishi.title.length && data.tishi.title.length > 0) {\n        var tishiCont = [];\n        tishiCont.push(React.createElement(\n          "div",\n          { className: "ysp-Prompt" },\n          React.createElement(\n            "div",\n            null,\n            React.createElement("span", { dangerouslySetInnerHTML: { __html: data.tishi.title[0] } }),\n            React.createElement("label", { dangerouslySetInnerHTML: { __html: data.tishi.cont[0] } })\n          )\n        ));\n      }\n      if (data && data.btns && data.btns.btn && data.btns.btn.length && data.btns.btn.length > 0 && data.btns.class) {\n        var btnCont = [];\n        btnCont.push(React.createElement(\n          "div",\n          { className: "ysp-Previous-details" },\n          data && data.btns.btn.map(function (item, i) {\n            return React.createElement(\n              AMUI.Button,\n              { hollow: true, amStyle: "primary", amSize: "xs", onClick: _this.props.click, className: "ysp-detail", "data-key": data.btns.btnID[i], "data-id": i },\n              item\n            );\n          })\n        ));\n      } else if (data && data.btns && data.btns.btn && data.btns.btn.length && data.btns.btn.length > 0) {\n        var btnCont = [];\n        btnCont.push(React.createElement(\n          "div",\n          { className: "ysp-Previous-details" },\n          data && data.btns.btn.map(function (item, i) {\n            return React.createElement(\n              AMUI.Button,\n              { hollow: true, amStyle: "primary", amSize: "xs", onClick: _this.props.click, className: "detail", "data-key": data.btns.btnID[i], "data-id": i, "data-title": data.btns.title },\n              item\n            );\n          })\n        ));\n      } else {\n        var btnCont = [];\n        btnCont.push(React.createElement("div", { style: { display: \'none\' } }));\n      }\n      return React.createElement(\n        "div",\n        null,\n        PartTwoCard,\n        tishiCont,\n        btnCont\n      );\n    }\n  }]);\n\n  return EssentialInformation;\n}(React.Component);\n\nvar UnderTable = function (_React$Component9) {\n  _inherits(UnderTable, _React$Component9);\n\n  function UnderTable() {\n    _classCallCheck(this, UnderTable);\n\n    return _possibleConstructorReturn(this, (UnderTable.__proto__ || Object.getPrototypeOf(UnderTable)).apply(this, arguments));\n  }\n\n  _createClass(UnderTable, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      var secondPart = [];\n      if (data && data.FGSCGFK && data.FGSCGFK.title && data.FGSCGFK.title.length > 0) {\n        var firstPart = data.FGSCGFK.title.map(function (d, i) {\n          return React.createElement(\n            "div",\n            null,\n            React.createElement(\n              "span",\n              null,\n              d.replace(/:/g, ""),\n              ":"\n            ),\n            React.createElement(\n              "label",\n              null,\n              data.FGSCGFK.cont[i]\n            )\n          );\n        });\n      }\n      if (data && data.FGSCGFK && data.FGSCGFK.second && data.FGSCGFK.second.cont && data.FGSCGFK.second.cont.length > 0) {\n        var d = data.FGSCGFK.second;\n        if (d.disable == true) {\n          secondPart.push(React.createElement(\n            "div",\n            null,\n            React.createElement(\n              "span",\n              null,\n              d.title\n            ),\n            React.createElement(\n              "label",\n              { style: { width: "100%" } },\n              d.cont.map(function (dd, ii) {\n                return React.createElement(\n                  "div",\n                  { style: { textAlign: \'left\', width: "80%" } },\n                  dd\n                );\n              })\n            )\n          ));\n        } else {\n          secondPart.push(React.createElement(\n            "div",\n            null,\n            React.createElement(\n              "span",\n              null,\n              d.title\n            ),\n            React.createElement(\n              "label",\n              { style: { width: "100%" } },\n              React.createElement(\n                "div",\n                { style: { textAlign: \'left\', width: "100%" } },\n                React.createElement(\n                  "span",\n                  null,\n                  d.cont[0].title\n                ),\n                d.cont[0].err ? React.createElement("span", { className: "ysp_zyt_errorIcon" }) : "",\n                React.createElement(AInput, { value: d.cont[0].cont, className: "companyIpt", onBlur: _this.props.companyBlur }),\n                React.createElement(\n                  "span",\n                  null,\n                  "\\u5143"\n                )\n              ),\n              React.createElement(\n                "div",\n                { style: { textAlign: \'left\', width: "100%" } },\n                React.createElement(\n                  "span",\n                  null,\n                  d.cont[1].title\n                ),\n                d.cont[1].err ? React.createElement("span", { className: "ysp_zyt_errorIcon" }) : ""\n              )\n            )\n          ));\n        }\n      }\n      return React.createElement(\n        "div",\n        null,\n        data && data.FGSCGFK && data.FGSCGFK.title && data.FGSCGFK.title.length > 0 && data.FGSCGFK.second ? React.createElement(\n          "div",\n          { className: "ysp-flowsheet-onePart" },\n          firstPart,\n          secondPart,\n          data && data.FGSCGFK && data.FGSCGFK.second && data.FGSCGFK.second.cont && data.FGSCGFK.second.cont.length > 0 && data.FGSCGFK.second.disable == false ? React.createElement("textarea", { defaultValue: data.FGSCGFK.second.cont[1].cont, onChange: _this.props.otherBlur, className: "companyTxt" }) : ""\n        ) : ""\n      );\n    }\n  }]);\n\n  return UnderTable;\n}(React.Component);\n\nvar PaymentOff = function (_React$Component10) {\n  _inherits(PaymentOff, _React$Component10);\n\n  function PaymentOff() {\n    _classCallCheck(this, PaymentOff);\n\n    return _possibleConstructorReturn(this, (PaymentOff.__proto__ || Object.getPrototypeOf(PaymentOff)).apply(this, arguments));\n  }\n\n  _createClass(PaymentOff, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      var container = [];\n      if (data && data.FGSCGFK && data.FGSCGFK.twoPartCont && data.FGSCGFK.twoPartCont.length && data.FGSCGFK.twoPartCont.length > 0 && data.FGSCGFK.type == "payOffDetail") {\n        data.FGSCGFK.twoPartCont.map(function (item, i) {\n          if (item[5] == "payOffDetail") {\n            container.push(React.createElement(\n              "div",\n              { className: "ysp-flowsheet-twoPart-card" },\n              item && item.map(function (value, index) {\n                if (index == 0) {\n                  return React.createElement(\n                    "p",\n                    { className: "ysp-twoPart-cardTit" },\n                    React.createElement(\n                      "span",\n                      null,\n                      React.createElement("b", { className: "ysp-detailed-field field", onClick: _this.props.numberClick, "data-id": i, "data-key": index, "data-val": value, name: "" }),\n                      value\n                    )\n                  );\n                } else if (index == 1) {\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.FGSCGFK.twoPartTitle[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      React.createElement(AInput, { className: "ysp-detailed-field field", value: value, type: "date", onBlur: _this.props.timeBlur, "data-id": i, "data-key": index })\n                    )\n                  );\n                } else if (index == 2) {\n                  var peymentMethod = ["", "\u7535\u6C47", "\u94F6\u884C\u627F\u5151\u6C47\u7968", "\u56FD\u5185\u4FE1\u7528\u8BC1", "\u4FDD\u51FD", "\u8F6C\u8D26\u652F\u7968", "\u73B0\u91D1\u652F\u7968", "\u73B0\u91D1"];\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.FGSCGFK.twoPartTitle[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":"\n                    ),\n                    "\\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0",\n                    React.createElement(\n                      "select",\n                      { className: "ysp-detailed-field field", onChange: _this.props.timeBlur, "data-id": i, "data-key": index },\n                      peymentMethod.map(function (val, ind) {\n                        return React.createElement(\n                          "option",\n                          { selected: val == value ? true : false, "data-num": ind },\n                          val\n                        );\n                      })\n                    )\n                  );\n                } else if (index == 3) {\n                  var peymentBank = ["", "\u5EFA\u8BBE\u94F6\u884C", "\u4E2D\u56FD\u94F6\u884C", "\u5149\u5927\u94F6\u884C", "\u4EA4\u901A\u94F6\u884C", "\u62DB\u5546\u94F6\u884C", "\u5317\u4EAC\u94F6\u884C", "\u534E\u590F\u94F6\u884C", "\u6D66\u53D1\u94F6\u884C", "\u5DE5\u5546\u94F6\u884C", "\u519C\u4E1A\u94F6\u884C", "\u4E2D\u4FE1\u94F6\u884C"];\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.FGSCGFK.twoPartTitle[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "select",\n                      { className: "ysp-detailed-field field", "data-paymentList": "asdasd", onChange: _this.props.timeBlur, "data-id": i, "data-key": index },\n                      peymentBank.map(function (val, ind) {\n                        return React.createElement(\n                          "option",\n                          { selected: val == value ? true : false, "data-num": ind },\n                          val\n                        );\n                      })\n                    )\n                  );\n                } else if (index == 4) {\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.FGSCGFK.twoPartTitle[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      React.createElement(AMUI.Field, { className: "ysp-detailed-field", value: value, type: "text", onBlur: _this.props.timeBlur, "data-id": i, "data-key": index })\n                    )\n                  );\n                }\n              })\n            ));\n          } else {\n            container.push(React.createElement(\n              "div",\n              { className: "ysp-flowsheet-twoPart-card" },\n              item && item.map(function (value, index) {\n                if (index < 5) {\n                  return React.createElement(\n                    "div",\n                    null,\n                    data.FGSCGFK.twoPartTitle[index].key ? React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":\\xA0",\n                      React.createElement(\n                        "span",\n                        { className: "ysp-star" },\n                        "*"\n                      )\n                    ) : React.createElement(\n                      "span",\n                      null,\n                      data.FGSCGFK.twoPartTitle[index].title,\n                      ":"\n                    ),\n                    React.createElement(\n                      "label",\n                      null,\n                      value\n                    )\n                  );\n                }\n              })\n            ));\n          }\n        });\n      }\n      return React.createElement(\n        "div",\n        { className: "ysp-flowsheet-twoPart" },\n        container\n      );\n    }\n  }]);\n\n  return PaymentOff;\n}(React.Component);';
    },

    getData_control14_FFDGZx: function (elem) {},
    doAction_uiControl15_lbT8K8: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;
        if (d == 'btn btn-primary ysp-Receive') {
          var _click = elem.querySelector('#td_0_2 a');
          _click.click();
        }
      } else if (data.eventType == 'back') {
        var url = 'http://192.168.2.40:8000/ptsoa/skins/default/index.jsp#';
        elem.ownerDocument.location.href = url;
      }
    },

    getTemplate_uiControl15_lbT8K8: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:e.target.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render() {\n    let _this = this;\n    let data=this.props.customData\t||\t[];\n    return (\n      <Header amStyle="primary" title="\u5DE5\u4F5C\u9879\u6267\u884C">\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n            }}>\n            <span className=\'icon icon-left-nav\'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={_this.onClick} className=\'ysp-Receive\'>{data}</AMUI.Button>\t: <div style={{display:\'none\'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n}';
      return '';
    },

    getData_control36_hBTqBA: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = [];var btns = elem.contentWindow && elem.contentWindow.document.querySelector('#btn');var receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2');var _receive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_2	a');var noReceive = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_3');var td_0_1 = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_1');var td_0_0 = elem.contentWindow && elem.contentWindow.document.querySelector('#td_0_0');if (btns && btns.style.display != 'none' && receive && _receive.style.display != 'none') {
          data.push(receive.textContent);
        } else if (btns && btns.style.display != 'none' && noReceive) {
          data.push(noReceive.textContent);
        } else if (btns && btns.style.display != 'none' && td_0_1 && td_0_1.textContent.indexOf('领取') !== -1) {
          data.push(btns && btns.style.display != 'none' && td_0_1.textContent.trim());
        } else if (btns && btns.style.display != 'none' && td_0_0 && td_0_0.textContent.indexOf('领取') !== -1) {
          data.push(td_0_0.textContent.trim());
        }return data;
      }
    },
    doAction_uiControl37_FOWagD: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (d == '领取') {
          var td_0_1 = elem.contentWindow.document.querySelector('#td_0_1');if (td_0_1.textContent.trim() == '领取') {
            var _click = elem.contentWindow.document.querySelector('#td_0_1').querySelector("a");
          } else {
            var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");
          }_click.click();
        } else if (d == '取消领取') {
          var _click = elem.contentWindow.document.querySelector('#td_0_3'); //红色提示
          var newRow = elem.contentDocument.querySelectorAll("iframe")[0].contentDocument.querySelectorAll(".mini-grid-rowstable")[1];var reg = /\s/;if (newRow && reg.test(newRow.textContent)) {
            if (_click) {
              var _icon = _click.querySelector('a');_icon.click();
            } else {
              var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();
            }
          } else {
            if (_click) {
              var _icon = _click.querySelector('a');var _innerHTML = _click.querySelector('span').textContent;_innerHTML == '取消领取' && _icon.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            } else {
              var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");var _innerHTML = _click.querySelector('span').textContent;_click.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }
          }
        } else {
          var _click = elem.contentWindow.document.querySelector('#td_0_2').querySelector("a");_click.click();var json = { time: new Date().getTime() };ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
        }
      } else if (data.eventType == 'back') {
        if (!top.EAPI.isAndroid()) {
          var btns = elem.contentDocument.querySelector("#btn");if (btns && btns.style.display != "none") {
            if (btns.querySelector("#recover") && btns.querySelector("#recover").textContent == "追回") {
              var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (btn) {
                btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
              }
            } else {
              var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (btn) {
                btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
              }
            }
          } else {
            var json = { time: new Date().getTime() };var btn = elem.ownerDocument.querySelectorAll('.mini-tools-close')[1];if (btn) {
              btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
            }
          }
        } else {
          ysp.customHelper.AndroidBackFn();
        }
      } else if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidBackModel = 'PendingTask';ysp.customHelper.AndroidBackFlag = 'destination';
      }
    },
    getTemplate_uiControl37_FOWagD: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  componentDidMount(){\n    var _this = this;\n    ysp.customHelper.AndroidBackFlag = 'PageClose';\n    ysp.customHelper.AndroidBackModel='PendingTask';\n    const {customHandler} = _this.props;\n    customHandler({eventType:'AndroidBack'});\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\'ysp-interior-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: \'click\'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      ysp.customHelper.AndroidBackFlag = \'PageClose\';\n      ysp.customHelper.AndroidBackModel = \'PendingTask\';\n      var customHandler = _this.props.customHandler;\n\n      customHandler({ eventType: \'AndroidBack\' });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: \'primary\', title: \'\\u5DE5\\u4F5C\\u9879\\u6267\\u884C\', className: \'ysp-flex-top\' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: \'back\'\n                    });\n                  }\n                } },\n              React.createElement(\'span\', { className: \'icon icon-left-nav\' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: \'primary\', style: { margin: 0 }, className: \'ysp-Receive\', onClick: _this.onClick },\n              data\n            ) : React.createElement(\'div\', { style: { display: \'none\' } })\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control4_TiKwZC: function (elem) {
      if (!elem) {
        return;
      }
      if (elem && elem.contentWindow && elem.contentWindow.document) {
        var data = [];
        var btns = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#btn')[0]; // data.push(btns.textContent)
        var btnOne = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#td_0_0');
        var btnTwo = elem.contentWindow && elem.contentWindow.document.querySelectorAll('#td_0_1');
        if (btns && btns.style.display != "none" && btnOne && btnOne.length > 0) {
          data.push(btnOne[0].textContent);
        }
        if (btns && btns.style.display != "none" && btnTwo && btnTwo.length > 0) {
          data.push(btnTwo[0].textContent);
        }
        return data;
      }
    },
    doAction_uiControl5_yflben: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom.classNames;
        if (d == 'btn ysp-btn-one') {
          var _btnTwo = elem.contentWindow.document.querySelector('#td_0_1').querySelector(".mini-button");
          setTimeout(function () {
            _btnTwo.click();
          }, 10);
        } else if (d == 'btn ysp-btn-two') {
          var btnTwo = elem.contentWindow.document.querySelector('#td_0_0').querySelector("a");
          if (data.dataCustom.text == "执行") {
            btnTwo.click();
          } else {
            var formTable = elem.contentWindow.document.querySelector("iframe") && elem.contentWindow.document.querySelector("iframe").contentDocument && elem.contentWindow.document.querySelector("iframe").contentDocument.querySelectorAll('.nui-form-table')[0]; //盖章及归档
            if (formTable) {
              var sealTr0 = $($(formTable).children("tbody").children("tr[id]").eq(0))[0];
              if (sealTr0) {
                var seal = sealTr0.querySelectorAll("input")[0];
              } //合同盖章
              var sealTr1 = $($(formTable).children("tbody").children("tr[id]").eq(1))[0];
              if (sealTr1) {
                var contractSignStatus = sealTr1.querySelector("#contractSignStatus") && sealTr1.querySelector("#contractSignStatus").querySelectorAll("input")[0]; //合同盖章时间
                var contractSealDate = sealTr1.querySelector("#contractSealDate") && sealTr1.querySelector("#contractSealDate").querySelectorAll("input")[0];
              } //合同归档时间
              var sealTr2 = $($(formTable).children("tbody").children("tr[id]").eq(2))[0];
              if (sealTr2) {
                var backDate = sealTr2.querySelector("#backDate") && sealTr2.querySelector("#backDate").querySelectorAll("input")[0];
              }
            }
            if (sealTr0 && sealTr0.style.display != "none" && seal && seal.value == "") {
              console.log("盖章及归档未填写");
              btnTwo.click();
            } else if (sealTr1 && sealTr1.style.display != "none" && contractSignStatus && contractSignStatus.value == "") {
              console.log("合同盖章未填写");
              btnTwo.click();
            } else if (sealTr1 && sealTr1.style.display != "none" && contractSealDate && contractSealDate.value == "") {
              console.log("合同盖章时间未填写");
              btnTwo.click();
            } else if (sealTr2 && sealTr2.style.display != "none" && backDate && backDate.value == "") {
              console.log("合同归档时间未填写");
              btnTwo.click();
            } else {
              console.log("提交成功");
              btnTwo.click();
              var json = { time: new Date().getTime() };
              setTimeout(function () {
                ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp");
              }, 10);
            }
          }
        }
      };
    },
    getTemplate_uiControl5_yflben: function () {
      var selfTemplate = 'import {Button} from \'ysp-custom-components\'\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:\'click\'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector(\'.ysp-btn\');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+"px";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    // if(\tdata\t&& data.length>0\t){\n    // \treturn(\n    // \t<Button  PassedCustomData={data} btnClick={this.click.bind(this)} />\n    // )\n    // } else{\n    //   return(<div style={{display:\'none\'}}></div>)\n    // } \n    return(<div id="test1"></div>)\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: \'click\'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector(\'.ysp-btn\');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+"px";\n    //   },500)\n    // }\n\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      // if(\tdata\t&& data.length>0\t){\n      // \treturn(\n      // \t<Button  PassedCustomData={data} btnClick={this.click.bind(this)} />\n      // )\n      // } else{\n      //   return(<div style={{display:\'none\'}}></div>)\n      // } \n      return React.createElement(\'div\', { id: \'test1\' });\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },

    getData_control35_gNPFoX: function (elem) {
      //提示
      if (!elem) {
        return;
      }
      if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl32_XxUHn7: function (data, elem) {},
    getTemplate_uiControl32_XxUHn7: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends React.Component{\n  \n// componentWillMount(){\n//     var toastWord=this.refs.yspToast; \n//     if(toastWord){\n//       setTimeout(function(){\n//     \t\t\ttoastWord.style.display="none";\n//       },20)\n//     }\n    \n//   }\n  // componentDidUpdate(props){\n  //   var data=this.props.customData;\n  //   var toastWord=this.refs.yspToast;\n  //   setTimeout(function(){\n  //     toastWord.style.display="none";\n  //   },2000)\n  // }\nrender() {\n    var data=this.props.customData||[]\n    return (\n      <div className="ysp_alert_tips" ref="yspToast" onClick={(e)=>{e.target.style.display="none"}}>\n        {data==""? "":<div className="ysp_alert_words"><span style={{height:"40px"}}>{data}</span></div>}\n      </div>\n    )\n  }\n};';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n\n\n    // componentWillMount(){\n    //     var toastWord=this.refs.yspToast; \n    //     if(toastWord){\n    //       setTimeout(function(){\n    //     \t\t\ttoastWord.style.display="none";\n    //       },20)\n    //     }\n\n    //   }\n    // componentDidUpdate(props){\n    //   var data=this.props.customData;\n    //   var toastWord=this.refs.yspToast;\n    //   setTimeout(function(){\n    //     toastWord.style.display="none";\n    //   },2000)\n    // }\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        "div",\n        { className: "ysp_alert_tips", ref: "yspToast", onClick: function onClick(e) {\n            e.target.style.display = "none";\n          } },\n        data == "" ? "" : React.createElement(\n          "div",\n          { className: "ysp_alert_words" },\n          React.createElement(\n            "span",\n            { style: { height: "40px" } },\n            data\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;';
    },
    getData_control42_dc43cW: function (elem) {
      if (!elem) {
        return;
      }
      if (elem && elem.contentWindow && elem.contentWindow.document) {
        var data = [];
        var sheep = elem.contentWindow.document.querySelectorAll('.mini-messagebox-buttons a	span');
        sheep.length > 0 && [].map.call(sheep, function (item) {
          data.push(item.innerHTML);
        });
        var info = elem.contentWindow.document.querySelector('.mini-messagebox-content-text');
        info && data.push(info.textContent.trim());
        return data;
      }
    },
    doAction_uiControl1_tp4u7I: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;
        if (d == 'btn ysp-confirm') {
          var _click = elem.contentWindow.document.querySelectorAll('.mini-messagebox-buttons a')[0];
          _click.click();
        } else if (d == 'btn ysp-cancel') {
          var _click = elem.contentWindow.document.querySelectorAll('.mini-messagebox-buttons a')[1];
          _click.click();
        } else if (d == 'btn ysp-last-confirm') {
          var _click = elem.contentWindow.document.querySelectorAll('.mini-messagebox-buttons a')[0];
          _click.click();
        }
      }
    },
    getTemplate_uiControl1_tp4u7I: function () {
      var selfTemplate = 'import {Deletehints} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport default class extends React.Component {\n  DeleteClick=(e)=>{\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render() {\n    var data = this.props.customData || [];\n      return(\n      <Deletehints\tDeleteClick={this.DeleteClick.bind(this)}\tPassedCustomData={data}/>\n      )\n  }\n}\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.DeleteClick = function (e) {\n      var _this = _this2;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: \'click\'\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(_yspCustomComponents.Deletehints, { DeleteClick: this.DeleteClick.bind(this), PassedCustomData: data });\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control49_PTRE8T: function (elem) {
      //红色提示
      if (!elem) {
        return;
      }
      if (elem && elem.contentWindow && elem.contentWindow.document) {
        if (elem.contentWindow.document.querySelector(".mini-tips-danger")) {
          return elem.contentWindow.document.querySelector(".mini-tips-danger").innerHTML;
        }
      }
    },
    doAction_uiControl48_9tAoWb: function (data, elem) {},
    getTemplate_uiControl48_9tAoWb: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data=this.props.customData||[]\n    return (\n      <div className="ysp_alert_tips">\n        {data==""? <div></div>:<div className="ysp_alert_words"><span\tdangerouslySetInnerHTML={{__html:data}}></span></div>}\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      "div",\n      { className: "ysp_alert_tips" },\n      data == "" ? React.createElement("div", null) : React.createElement(\n        "div",\n        { className: "ysp_alert_words" },\n        React.createElement("span", { dangerouslySetInnerHTML: { __html: data } })\n      )\n    );\n  }\n});';
    },
    getData_control41_0ETlac: function (elem) {
      if (!elem) {
        return;
      } // if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
      //   return elem.querySelector("#toast").textContent;
      // }
      if (elem) {
        var data = { button: [], tip: "" };
        var windowDrag = elem.querySelector(".mini-window-drag");
        if (windowDrag) {
          var iframeOuter = elem.querySelector(".mini-window-drag").querySelector("iframe");
          if (iframeOuter) {
            var btns = iframeOuter.contentDocument.querySelector("#btn");
            var agreeBtn = iframeOuter.contentDocument.querySelector('#td_0_0');
            var disagreeBtn = iframeOuter.contentDocument.querySelector('#td_0_1');
            if (btns && btns.style.display != "none" && agreeBtn && agreeBtn.textContent.indexOf("领取") == -1) {
              data.button.push(agreeBtn.textContent);
            }
            if (btns && btns.style.display != "none" && disagreeBtn && disagreeBtn.textContent.indexOf("领取") == -1) {
              data.button.push(disagreeBtn.textContent);
            }
          } // if (elem.contentWindow.document.querySelector(".mini-tips-danger")) {
          // return elem.contentWindow.document.querySelector(".mini-tips-danger").innerHTML;
          // }
          //有黑色提示框出现
          //   var tip = elem.querySelector("#toast");
          //   if (tip) {
          //     data.tip = tip.textContent;
          //   }
        }
        return data;
      }
    },
    doAction_uiControl33_sIcNwa: function (data, elem) {
      if (data.eventType == 'click') {

        var d = data.dataCustom.classNames;
        if (d == 'btn ysp-btn-one') {
          var _btnTwo = elem.querySelector(".mini-window-drag").querySelectorAll("iframe")[0].contentDocument.querySelectorAll('#td_0_1')[0].querySelector(".mini-button");
          _btnTwo.click();
          var redTip = elem.querySelector(".mini-window-drag").querySelector('iframe').contentWindow.document.querySelector('#tab iframe').contentWindow.document.querySelector('.mini-tips-danger');
          if (!redTip) {
            setTimeout(function () {
              var tip = elem.querySelectorAll(".mini-window-drag");
              if (tip.length == 1) {
                //_btnTwo.click(); 
                var json = { time: new Date().getTime() };
                setTimeout(function () {
                  ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp");
                }, 20);
              }
            }, 10);
          }
        } else if (d == 'btn ysp-btn-two') {
          var btnTwo = elem.querySelector(".mini-window-drag").querySelectorAll("iframe")[0].contentDocument.querySelectorAll('#td_0_0')[0].querySelector("a");
          if (data.dataCustom.text == "执行") {
            btnTwo.click();
          } else if (data.dataCustom.text == "追回") {
            btnTwo.click();
            var json = { time: new Date().getTime() };
            setTimeout(function () {
              ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp");
            }, 10);
          } else {
            //有黑色提示框出现
            var tip = elem.querySelector("#toast");
            if (tip) {
              data.tip = tip.textContent;
            } //**如果流程iframe存在就留在当页，如果不存在就点击同意后回到待办里***//
            btnTwo.click();
            var timer = setInterval(function () {
              var redTip = elem.querySelector(".mini-window-drag"); //.querySelectorAll("iframe")[0].contentDocument.querySelector("#tab").querySelectorAll("iframe")[0].contentDocument.querySelector(".mini-tips-danger");
              if (!redTip) {
                var json = { time: new Date().getTime() };
                setTimeout(function () {
                  ysp.appMain.getActiveWindow().history.replaceState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp");
                }, 10);
                clearInterval(timer);
              }
            }, 10);
          }
        }
      };
    },
    getTemplate_uiControl33_sIcNwa: function () {
      var selfTemplate = 'import {Button} from \'ysp-custom-components\'\nimport {Component} from \'react\';\nexport default class extends React.Component{\n  // constructor(){\n  //   super();\n  //   this.flag=false\n  // }\n  click(e){\n//     if(!this.flag){\n     \n//     this.flag=true;\n      var handler=this.props.customHandler;\n    var e=e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n      \n     if(handler) {                                    \n       handler({\n         data:{classNames:e.className,text:e.textContent},\n         eventType:\'click\'                         \n       })\n     }\n    // }\n  \t\n  }\n  // componentDidMount(){\n  //   var windowH=document.documentElement.clientHeight;\n  //   this.setState({\n  //   \twindowH:windowH,\n  //   })\n  //   console.log(windowH)\n  //   var btn=window.document.querySelector(\'.ysp-btn\');\n  //   setTimeout(function(){\n  //     btn.style.top=(windowH-100)+"px";\n  //   },500)\n  // }\n  render(){\n    var data=this.props.customData\t||\t[];\n    var btns=data.button||[]\n    if(\tbtns\t&& btns.length>0\t){\n    \treturn(\n    \t<Button  PassedCustomData={btns} btnClick={this.click.bind(this)} />\n   \t )\n    } else{\n      return(<div style={{display:\'none\'}}></div>)\n    } \n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n\n    // constructor(){\n    //   super();\n    //   this.flag=false\n    // }\n    value: function click(e) {\n      //     if(!this.flag){\n\n      //     this.flag=true;\n      var handler = this.props.customHandler;\n      var e = e.target;\n      //alert("\u70B9\u51FB\u4E86\u6309\u94AE")\n\n      if (handler) {\n        handler({\n          data: { classNames: e.className, text: e.textContent },\n          eventType: \'click\'\n        });\n      }\n      // }\n    }\n    // componentDidMount(){\n    //   var windowH=document.documentElement.clientHeight;\n    //   this.setState({\n    //   \twindowH:windowH,\n    //   })\n    //   console.log(windowH)\n    //   var btn=window.document.querySelector(\'.ysp-btn\');\n    //   setTimeout(function(){\n    //     btn.style.top=(windowH-100)+"px";\n    //   },500)\n    // }\n\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var btns = data.button || [];\n      if (btns && btns.length > 0) {\n        return React.createElement(_yspCustomComponents.Button, { PassedCustomData: btns, btnClick: this.click.bind(this) });\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },

    getData_control61_S2UifR: function (elem) {},
    doAction_uiControl58_J9dV1F: function (data, elem) {},
    getTemplate_uiControl58_J9dV1F: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div ref="qwer">\n      </div>\n    )\n  },\n  componentDidMount() {\n    setTimeout(() => {\n      var aa = this.refs.qwer.ownerDocument.querySelectorAll(\'[data-asdasdasd]\');\n      var clickFun = function(index) {\n        aa[index].click();\n        aa[index].dispatchEvent(new Event(\'blur\'));\n        if (index) {\n          setTimeout(() => {\n            clickFun(index-1);\n          }, 100);\n        }\n      }\n      clickFun(aa.length - 1);\n    }, 2000);\n  }\n});\n';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    return React.createElement(\'div\', { ref: \'qwer\' });\n  },\n  componentDidMount: function componentDidMount() {\n    var _this = this;\n\n    setTimeout(function () {\n      var aa = _this.refs.qwer.ownerDocument.querySelectorAll(\'[data-asdasdasd]\');\n      var clickFun = function clickFun(index) {\n        aa[index].click();\n        aa[index].dispatchEvent(new Event(\'blur\'));\n        if (index) {\n          setTimeout(function () {\n            clickFun(index - 1);\n          }, 100);\n        }\n      };\n      clickFun(aa.length - 1);\n    }, 2000);\n  }\n});';
    },
    getData_control63_Pt9BN8: function (elem) {
      //loading 加载。
      if (!elem) {
        return;
      }
      if (elem && elem.contentWindow && elem.contentWindow.document) {
        var loading = elem.contentWindow.document.querySelector('.mini-mask');
        if (loading) {
          var _loading = loading.querySelector('.mini-mask-loading');
          if (_loading && _loading.style.display == 'block' && _loading.textContent.trim() == '加载中...') {
            return [true];
          } else {
            return;
          }
        }
      }
    },
    doAction_uiControl51_4TV3Hv: function (data, elem) {},
    getTemplate_uiControl51_4TV3Hv: function () {
      var selfTemplate = 'export default class extends React.Component{\n  render(){\n    var data = this.props.customData || [];\n    if(data\t&&\tdata[0]==true){\n    \treturn(\n        <div className="ysp-loadEffect-background">\n          <div className="ysp-loadEffect">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>  \n    \t)  \n    }else{\n      return(\n \xA0 \xA0  \t<div></div> \n      )\n    }\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data[0] == true) {\n        return React.createElement(\n          "div",\n          { className: "ysp-loadEffect-background" },\n          React.createElement(\n            "div",\n            { className: "ysp-loadEffect" },\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null)\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control168_3Cu2Vn: function (elem) {
      if (!elem) {
        return;
      }
      var iframe = elem && elem.ownerDocument.defaultView.frameElement;
      if (elem && elem.textContent.indexOf("回退方式") !== -1) {
        var data = [];
        var signOne = elem.querySelectorAll('.form-label')[0];
        var signTwo = elem.querySelector('.mini-buttonedit-input');
        var signThree = elem.querySelectorAll('.form-label')[2]; //var signFour = elem.querySelectorAll('.mini-textbox-input')[0];
        signOne && data.push(signOne.textContent);
        signTwo && data.push(signTwo.value);
        signThree && data.push(signThree.textContent.trim()); //signFour && data.push(signFour.value);
        return data;
      }
    },
    doAction_uiControl161_GJsvcQ: function (data, elem) {
      if (data.eventType == 'change') {
        var d = data.dataCustom;
        var signFour = elem.querySelectorAll('.mini-textbox-input')[0];
        signFour.focus();
        signFour.value = d;
        signFour.dispatchEvent(new Event("change"));
      } else if (data.eventType == 'click') {
        var d = data.dataCustom;
        if (d == 'btn ysp-sure') {
          // var signOne = elem.ownerDocument.querySelectorAll('#cancel')[0];
          //   signOne.click();
          var signOne = elem.ownerDocument.querySelectorAll('#save')[0];
          signOne.click();
          var _fk = elem.ownerDocument.defaultView.parent.document.querySelector('.mini-window-drag').querySelector('iframe').contentWindow.document.querySelector('iframe').contentWindow.document.querySelector('.mini-tips-danger');
          if (_fk) {
            signOne.click();
          } else {
            var json = { time: new Date().getTime() }; // @可选的url：浏览器不会检查url是否存在，只改变url，url必须同域，不能跨域
            var btn = elem.ownerDocument.querySelector('.mini-tools-close');
            if (btn) {
              ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
            }
          }
        } else if (d == 'btn ysp-miss') {
          var signOne = elem.ownerDocument.querySelectorAll('#cancel')[0];
          signOne.click();
        }
      }
    },
    getTemplate_uiControl161_GJsvcQ: function () {
      var selfTemplate = 'export default class extends React.Component{\n  change(e){\n    var handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.value,\n         eventType:\'change\'                         \n       })\n     }\n  }\n  onClick(e){\n    var handler=this.props.customHandler\t;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render(){\n    var\tdata=this.props.customData\t|| [];\n    if(data && data.length>0){\n   \treturn(\n      <div className=\'ysp-fallbackStrategy\'>\n      \t<div className="ysp-fallbackStrategy-cont">\n          <div style={{textAlign:\'center\',width:\'100%\'}}>\u56DE\u9000\u7B56\u7565</div>\n        \t<div>\n          \t<span>{data[0]}</span>\n            <label>{data[1]}</label>\n          </div>\n          <div>\n          \t<span className="yesOrno">{data[2]}</span>\n            {/*<textarea defaultValue={data[3]} onBlur={this.change.bind(this)}></textarea>*/}\n          </div>\n          <div>\n          \t<AMUI.Button className="ysp-sure" onClick={this.onClick.bind(this)}>\u786E\u5B9A</AMUI.Button>\n            <AMUI.Button className="ysp-miss" onClick={this.onClick.bind(this)}>\u53D6\u6D88</AMUI.Button>\n          </div>\n        </div>\n      </div>\n    ) }else {\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'change\',\n    value: function change(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.value,\n          eventType: \'change\'\n        });\n      }\n    }\n  }, {\n    key: \'onClick\',\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.className,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data.length > 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-fallbackStrategy\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-fallbackStrategy-cont\' },\n            React.createElement(\n              \'div\',\n              { style: { textAlign: \'center\', width: \'100%\' } },\n              \'\\u56DE\\u9000\\u7B56\\u7565\'\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                data[0]\n              ),\n              React.createElement(\n                \'label\',\n                null,\n                data[1]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                { className: \'yesOrno\' },\n                data[2]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                AMUI.Button,\n                { className: \'ysp-sure\', onClick: this.onClick.bind(this) },\n                \'\\u786E\\u5B9A\'\n              ),\n              React.createElement(\n                AMUI.Button,\n                { className: \'ysp-miss\', onClick: this.onClick.bind(this) },\n                \'\\u53D6\\u6D88\'\n              )\n            )\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }

  }, "processForm");
})(window, ysp);