(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control64_IDGL0K: function (elem) {
      if (!elem) {
        return;
      }var data = {};if (elem.querySelector('#Tree_treeView_0') && elem.querySelector('#Tree_treeView_0').querySelector('div')) {
        var firstLevel = $(elem.querySelector('#Tree_treeView_0')).children('div');var levelId = 'Tree_treeView_0';var currLevel = [];var currLevelStatus = [];var nextLevel = [];for (var i = 0; i < firstLevel.length; i++) {
          var tds = firstLevel[i].querySelector('table').querySelectorAll('td');var tdLength = tds.length;currLevel.push(tds[tdLength - 1].textContent.trim()); //遍历一级数据
          if (firstLevel[i].querySelector('div')) {
            //存在下级
            if (firstLevel[i].querySelector('div').style.display !== 'none') {
              currLevelStatus.push('open'); //遍历二级数据
              var secondLevel = $(firstLevel[i].querySelector('div')).children('div');var secondLevelSngle = {};var secondLevelContent = [];var secondLevelStatus = [];var secNextLevel = [];for (var j = 0; j < secondLevel.length; j++) {
                var secondTds = secondLevel[j].querySelector('table').querySelectorAll('td');var secondLength = secondTds.length;secondLevelContent.push(secondTds[secondLength - 1].textContent.trim());if (secondLevel[j].querySelector('div')) {
                  //存在下级
                  if (secondLevel[j].querySelector('div').style.display !== 'none') {
                    secondLevelStatus.push('open'); // 遍历三级数据
                    var thirdLevel = $(secondLevel[j].querySelector('div')).children('div');var thirdLevelSngle = {};var thirdLevelContent = [];var thirdLevelStatus = [];var thirdNextLevel = [];for (var k = 0; k < thirdLevel.length; k++) {
                      var thirdTds = thirdLevel[k].querySelector('table').querySelectorAll('td');var thirdLength = thirdTds.length;thirdLevelContent.push(thirdTds[thirdLength - 1].textContent.trim());if (thirdLevel[k].querySelector('div')) {
                        //存在下级
                        if (thirdLevel[k].querySelector('div').style.display !== 'none') {
                          thirdLevelStatus.push('open');
                        } else {
                          thirdLevelStatus.push('close');
                        }thirdLevelSngle.nextLevel = [];
                      }
                    }thirdLevelSngle.levelId = secondLevel[j].querySelector('div').getAttribute('id');thirdLevelSngle.currLevel = thirdLevelContent;thirdLevelSngle.currLevelStatus = thirdLevelStatus;secNextLevel.push(thirdLevelSngle);
                  } else {
                    secondLevelStatus.push('close');
                  }secondLevelSngle.nextLevel = secNextLevel;
                }
              }secondLevelSngle.levelId = firstLevel[i].querySelector('div').getAttribute('id');secondLevelSngle.currLevel = secondLevelContent;secondLevelSngle.currLevelStatus = secondLevelStatus;nextLevel.push(secondLevelSngle);
            } else {
              currLevelStatus.push('colse');
            }data.nextLevel = nextLevel;
          }
        }data.levelId = levelId;data.currLevel = currLevel;data.currLevelStatus = currLevelStatus;
      }return data;
    },
    doAction_uiControl41_VEx2r6: function (data, elem) {}, getTemplate_uiControl41_VEx2r6: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  \n  render(){\n    var data = this.props.customData;\n  \tvar currLevel =  data.currLevel || [];\n    var nextLevel = data.nextLevel || [];\n    var currLevelStatus =  data.currLevelStatus || [];\n    return (\n    <div>\n      <div data-id={data.levelId}>\n      {currLevel.map((item,index)=>{\n          return <div  data-index={index} data-status={currLevelStatus[index]}>{item}</div>\n        })}\n      </div>\n    </div>);\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      var currLevel = data.currLevel || [];\n      var nextLevel = data.nextLevel || [];\n      var currLevelStatus = data.currLevelStatus || [];\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(\n          \'div\',\n          { \'data-id\': data.levelId },\n          currLevel.map(function (item, index) {\n            return React.createElement(\n              \'div\',\n              { \'data-index\': index, \'data-status\': currLevelStatus[index] },\n              item\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);