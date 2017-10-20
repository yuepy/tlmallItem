(function(win, ysp) {

  var utils = ysp.utils;
  ysp.customHelper = {};
  utils.extend(ysp.customHelper, {
    /* 适配中定制的公共代码放在这里 */

    /*
     // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
     foo: function(){

     }
     */

    // 当目标页面加载完onload时执行
    // 
    
    getFormData: function(elem) {
    
      var data = [];
      var trs = elem.rows || [];
      var typeList = ['input','button', 'textarea', 'a', 'br'];
      var subTitleIndexs = [];
      var titleIndexs = [];

      function parseDate(str) {
        var arr = [];
        arr.push(str.substr(0, 4), str.substr(4, 2), str.substr(6, 2));
        return arr.join('-');
      }

      function getElemType(elem) {
        var obj;
        typeList.forEach(function(type) {
          var elems = elem.querySelectorAll(type);
          _forEach(elems, function(el) {
            if (el.style.display !== 'none' && !(el.tagName === 'INPUT' && (el.getAttribute('readOnly')))) {
              var id = el.id;
              if (!id) {
                id = el.parentNode.id;
              }
              if (id) {
                obj = {
                  type: type,
                  id: id
                };
                if (type === 'input') {
                  obj.value = el.value;
                  if (el.className === 'Wdate') {
                    obj.value = parseDate(el.value);
                    obj.type = 'date';
                  }
                }
              }
              if (type === 'a') {
                obj = obj || {};
                obj.id = obj.id || el.parentNode.parentNode.id;
                obj.type = obj.type || type;
                obj.texts = obj.texts || [];
                obj.texts.push(el.textContent);
                // obj.href = el.href;
                // obj.text = el.textContent;
              }
              if (type === 'br') {
                obj = {
                  type: 'text'
                };

                var label = elem.querySelector('label');
                obj.value = label ? label.textContent : '';
              }
            }
          });
          if (obj) {
            return;
          }
        });
        return obj;
      }

      function getDataObj(tds, index) {
        var temp = getElemType(tds[index+1]);
        if (temp) {
          temp.key = getElemContent(tds[index]);
          data.push(temp);
        } else {
          temp = getElemContent(tds[index]);
          // if (temp) {
          data.push({
            type: 'text',
            key: temp,
            value: getElemContent(tds[index+1])
          });
          // }
        }
      }

      function dealWithSubtitles() {
        function getTitleIndex(sidx) {
          var idx;
          titleIndexs.forEach(function(tidx) {
            if (tidx > sidx) {
              idx = tidx;
              return;
            }
          });
          return idx || data.length;
        }

        subTitleIndexs.forEach(function(sidx) {
          var tidx = getTitleIndex(sidx);
          var temp = [];
          var idx;
          for (idx = 0; idx < tidx - sidx; idx++) {
            if (idx % 2 === 0) {
              temp.push(data[sidx + idx]);
            }
          }
          for (idx = 0; idx < tidx - sidx; idx++) {
            if (idx % 2 !== 0) {
              temp.push(data[sidx + idx]);
            }
          }
          temp.forEach(function(tdata, idx) {
            data[sidx + idx] = tdata;
          });
        });
      }

      _forEach(trs, function(tr) {
        if (tr.style.display !== 'none') {
          var tds = tr.cells || [];
          var len = tds.length;
          var temp;
          switch(len) {
            case 1: {
              //有b标签并且有输入框的情况筛选掉或者有b标签并且有lable也筛选掉，感觉筛选条件不太好
              if(tr.querySelector('b') && tr.querySelector('b').style.display !== 'none' && tr.querySelector('input') && tr.querySelector('input').style.display !== 'none' ) {

              }else if(tr.querySelector('b') && tr.querySelector('b').style.display !== 'none' && tr.querySelector('label') && tr.querySelector('label').style.display !== 'none' && !tr.querySelector('input')){
                temp = getElemType(tds[0]);
                if (temp) {
                  if (temp.type === 'input') {
                    data.push(temp);
                  }
                } else {
                  temp = getElemContent(tds[0]);
                  if (temp) {
                    titleIndexs.push(data.length);
                    data.push({
                      type: 'subTitle',
                      value: temp
                    });
                  }
                }
              }else{
                temp = getElemType(tds[0]);
                if (temp) {
                  if (temp.type === 'input') {
                    data.push(temp);
                  }
                } else {
                  temp = getElemContent(tds[0]);
                  if (temp) {
                    titleIndexs.push(data.length);
                    data.push({
                      type: 'title',
                      value: temp
                    });
                  }
                }
              }
              break;
            }
            case 2: case 3: {
              if (tds[1].className.indexOf('title-r') === -1) {
                getDataObj(tds, 0);
              } else {
                subTitleIndexs.push(data.length);
                data.push({
                  type: 'subTitle',
                  value: getElemContent(tds[0])
                });
                data.push({
                  type: 'subTitle',
                  value: getElemContent(tds[1])
                });
              }
              break;
            }
            case 4: {
              getDataObj(tds, 0);
              getDataObj(tds, 2);
              break;
            }
            case 6: {
              getDataObj(tds, 0);
              getDataObj(tds, 2);
              getDataObj(tds, 4);
              break;
            }
          }
        }
        
      });

      dealWithSubtitles();

      // data.forEach(function(d) {
      //   console.log(JSON.stringify(d));
      // });

      return data;
    },

    getFormTemplate: function() {
      var selfTemplate = "module.exports = React.createClass({ onClick: function(e) { var target = e.target; var id = target.getAttribute('data-id'); var handler = this.props.customHandler; if (target.tagName='A') { var index = target.getAttribute('data-index'); if (id && handler) { handler({ data: { id: id, index: index }, eventType: 'linkClick' }); } } if (id && handler) { handler({ data: { id: id }, eventType: 'click' }); } }, onChange: function(e) { var id = e.target.getAttribute('data-id'); var value = e.target.value; var handler = this.props.customHandler; if (id && handler) { handler({ data: { id: id, value: value }, eventType: 'change' }); } }, render: function() { var data = this.props.data.customData; var self = this; var blocks = []; var items = []; var title = '基本信息'; data.forEach(function(d, idx) { switch (d.type) { case 'input': { items.push(<li key={'li-' + idx}> <span className='span-left span-key'>{d.key}</span> <span className='span-right'><input data-id={d.id} onChange={self.onChange} value={d.value}/></span> </li>); break; } case 'date': { items.push(<li key={'li-' + idx}> <span className='span-left span-key'>{d.key}</span> <span className='span-right'><input data-id={d.id} type='date' onChange={self.onChange} value={d.value}/></span> </li>); break; } case 'a': { var links = d.texts.map(function(text, linkIndex) { return (<a href='#' data-index={linkIndex} data-id={d.id}>{text}</a>); }) items.push(<li key={'li-' + idx} onClick={self.onClick}> <span className='span-key'>{d.key}</span> <span className='span-value custom-many-a'>{links}</span> </li>); break; } case 'button': { items.push(<li key={'li-' + idx}> <span className='span-key'>{d.key}</span> <button data-id={d.id} onClick={self.onClick}>{d.text}</button> </li>); break; } case 'text': { if (!d.value && !d.key) { break; } if ((!d.value || d.value.length <= 30) && (d.key.length + d.key.replace(/\d/g, '').length) <= 16) { items.push(<li key={'li-' + idx}> <span className='span-left span-key'>{d.key}</span> <span className='span-right span-value'>{d.value || ' '}</span> </li>); } else { items.push(<li key={'li-' + idx}> <span className='span-line span-key'>{d.key}</span> <span className='span-line span-value'>{d.value || ' '}</span> </li>); } break; } case 'title': { blocks.push(<div className='div-container' key={'blocks-' + blocks.length}> <span className='span-title'>{title}</span> <ul> {items} </ul> </div>); items = []; title = d.value; break; } case 'subTitle': { items.push(<li key={'li-' + idx}><span className='span-sub-title'>{d.value}</span></li>); } }    }); blocks.push(<div className='div-container' key={'blocks-' + blocks.length}> <span className='span-title'>{title}</span> <ul> {items} </ul> </div>); return (<div className='outer-container'> {blocks} </div>); } });";
      return "'use strict'; module.exports = React.createClass({ displayName: 'exports', onClick: function onClick(e) { var target = e.target; var id = target.getAttribute('data-id'); var handler = this.props.customHandler; if (target.tagName = 'A') { var index = target.getAttribute('data-index'); if (id && handler) { handler({ data: { id: id, index: index }, eventType: 'linkClick' }); } } if (id && handler) { handler({ data: { id: id }, eventType: 'click' }); } }, onChange: function onChange(e) { var id = e.target.getAttribute('data-id'); var value = e.target.value; var handler = this.props.customHandler; if (id && handler) { handler({ data: { id: id, value: value }, eventType: 'change' }); } }, render: function render() { var data = this.props.data.customData; var self = this; var blocks = []; var items = []; var title = '基本信息'; data.forEach(function (d, idx) { switch (d.type) { case 'input': { items.push(React.createElement( 'li', { key: 'li-' + idx }, React.createElement( 'span', { className: 'span-left span-key' }, d.key ), React.createElement( 'span', { className: 'span-right' }, React.createElement('input', { 'data-id': d.id, onChange: self.onChange, value: d.value }) ) )); break; } case 'date': { items.push(React.createElement( 'li', { key: 'li-' + idx }, React.createElement( 'span', { className: 'span-left span-key' }, d.key ), React.createElement( 'span', { className: 'span-right' }, React.createElement('input', { 'data-id': d.id, type: 'date', onChange: self.onChange, value: d.value }) ) )); break; } case 'a': { var links = d.texts.map(function (text, linkIndex) { return React.createElement( 'a', { href: '#', 'data-index': linkIndex, 'data-id': d.id }, text ); }); items.push(React.createElement( 'li', { key: 'li-' + idx, onClick: self.onClick }, React.createElement( 'span', { className: 'span-key' }, d.key ), React.createElement( 'span', { className: 'span-value custom-many-a' }, links ) )); break; } case 'button': { items.push(React.createElement( 'li', { key: 'li-' + idx }, React.createElement( 'span', { className: 'span-key' }, d.key ), React.createElement( 'button', { 'data-id': d.id, onClick: self.onClick }, d.text ) )); break; } case 'text': { if (!d.value && !d.key) { break; } if ((!d.value || d.value.length <= 30) && d.key.length + d.key.replace(/\d/g, '').length <= 16) { items.push(React.createElement( 'li', { key: 'li-' + idx }, React.createElement( 'span', { className: 'span-left span-key' }, d.key ), React.createElement( 'span', { className: 'span-right span-value' }, d.value || ' ' ) )); } else { items.push(React.createElement( 'li', { key: 'li-' + idx }, React.createElement( 'span', { className: 'span-line span-key' }, d.key ), React.createElement( 'span', { className: 'span-line span-value' }, d.value || ' ' ) )); } break; } case 'title': { blocks.push(React.createElement( 'div', { className: 'div-container', key: 'blocks-' + blocks.length }, React.createElement( 'span', { className: 'span-title' }, title ), React.createElement( 'ul', null, items ) )); items = []; title = d.value; break; } case 'subTitle': { items.push(React.createElement( 'li', { key: 'li-' + idx }, React.createElement( 'span', { className: 'span-sub-title' }, d.value ) )); } } }); blocks.push(React.createElement( 'div', { className: 'div-container', key: 'blocks-' + blocks.length }, React.createElement( 'span', { className: 'span-title' }, title ), React.createElement( 'ul', null, items ) )); return React.createElement( 'div', { className: 'outer-container' }, blocks ); } });";
    },

    getTableData: function(elem) {
      var data = {};

      if (!elem) {
        return data;
      }

      var heads = [];
      var body = [];
      var trs = elem.children;
      if (!trs.length) {
        return data;
      }

      var headTds = trs[0].children;
      _forEach(headTds, function(ht) {
        if (ht.style.display !== 'none') {
          heads.push(getElemContent(ht));
        }
      });
      data.heads = heads;

      var bodyTds;
      var cols;
      _forEach(trs, function(tr){
        bodyTds = tr.children;
        cols = [];
        _forEach(bodyTds, function(bt) {
          if (bt.style.display !== 'none') {
            /*cols.push({        
              value: getElemContent(bt),
              type: 'text'
            });*/
            //mcc
            var input = bt.querySelector('input');
            if(input && input.value.length<30) {
              cols.push({        
                value: input.value,
                type: 'text'
              });
            }else {
              cols.push({        
                value: getElemContent(bt),
                type: 'text'
              });
            }
            
            //end mcc
          }
        });
        body.push(cols);
      }, 1);
      data.body = body; 

      return data;
    },

    getTableDataWithThead: function(elem) {
      var data = {};

      if (!elem) {
        return data;
      }

      var heads = [];
      var body = [];

      var headTds = elem.tHead && elem.tHead.children && elem.tHead.children[0] && elem.tHead.children[0].children || [];
      _forEach(headTds, function(ht) {
        if (ht.style.display !== 'none') {
          heads.push(getElemContent(ht));
        }
      });
      data.heads = heads;

      var bodyTds;
      var cols;
      var trs = elem.tBodies && elem.tBodies[0] && elem.tBodies[0].children;

      _forEach(trs, function(tr){
        bodyTds = tr.children;
        cols = [];
        _forEach(bodyTds, function(bt) {
          if (bt.style.display !== 'none') {
            var input = bt.querySelector('input');
            if(input && input.style.display !== 'none') {
              cols.push({        
                value: input.value,
                type: 'text'
              });
            }else {
              cols.push({        
                value: getElemContent(bt),
                type: 'text'
              });
            }
          }
        });
        body.push(cols);
      });
      data.body = body; 

      return data;
    },
    
    onTargetLoad: function(aWin, doc) {
      var top = ysp.runtime.Browser.getMainBrowser().contentWindow;

      utils.extend(aWin.top.Fix, top.Fix);

      aWin.top.Fix = aWin.top.Fix || {};
      aWin.top.Fix.Manager = aWin.top.Fix.Manager || {};
      aWin.top.Fix.Manager.clearError = aWin.top.Fix.Manager.clearError || function() {};
      aWin.top.Fix.Manager.close = function() {
        aWin.close();
        ysp.runtime.engine.reload();
      };
      aWin.top.Fix.Manager.createTabInMainTab = function(obj) {
        var url = obj.url;
        if (url) {
          top.open(url);
        }
      };

      var funcName = doc.querySelector('#funcName');
      if (funcName && funcName.textContent === '付款申请单') {
        aWin.top.Fix.Manager.createDialog = function(obj){
          aWin.open('http://192.168.0.189:8080/ptsoa/'+obj.url);
        };
      }

      aWin.Fix = aWin.Fix || {};

      if (!aWin.Fix.Global || Object.keys(aWin.Fix.Global).length === 0) {
        aWin.Fix.Global = {
            "{@mydysj}": "没有对应数据",
            "{@home}": "主页",
            "{@atasks}": "的待办任务",
            "{@btasks}": "的共享任务",
            "{@mytask}": "待办任务",
            "{@sharetask}": "共享任务",
            "{@taskdone}": "已办任务",
            "{@myinvolved}": "流程追踪",
            "{@priority}": "优先级",
            "{@rwzt}": "任务主题",
            "{@dqbz}": "当前步骤",
            "{@ddsj}": "到达时间",
            "{@wcsj}": "完成时间",
            "{@tjsj}": "提交时间",
            "{@yjzxsj}": "预计执行时间",
            "{@cz}": "操作",
            "{@fqr}": "发起人",
            "{@ckbd}": "查看表单",
            "{@ckzt}": "查看状态",
            "{@zy}": "摘要",
            "{@to}": "至",
            "{@page}": "每页",
            "{@record}": "条",
            "{@total}": "共：",
            "{@totalrecord}": "行",
            "{@search}": "查询",
            "{@clear}": "清空",
            "{@nodata}": "没有对应数据",
            "{@serial}": "序号",
            "{@closeAll}": "关闭全部",
            "{@closeOther}": "关闭其他",
            "{@basic}": "基本信息",
            "{@cost}": "成本信息",
            "{@plan}": "计划信息",
            "{@position}": "库位信息",
            "{@route}": "路线信息",
            "{@detail}": "商品明细",
            "{@workDayDetail}": "日历细则",
            "{@SpecialWorkDay}": "特殊工作日",
            "{@attachment}": "附件",
            "{@remark}": "备注",
            "{@oldPwd}": "原密码",
            "{@newPwd}": "新密码",
            "{@checkPwd}": "确认密码",
            "{@okPwd}": "确定",
            "{@cancelPwd}": "取消",
            "{@pwdTitle}": "修改密码",
            "{@lct}": "流程图",
            "{@ywc}": "已完成",
            "{@clz}": "处理中",
            "{@end_bzmc}": "步骤名称",
            "{@end_clr}": "处理人",
            "{@end_ddsj}": "到达时间",
            "{@end_wcsj}": "完成时间",
            "{@end_yjclsj}": "预计完成时间",
            "{@end_cljg}": "处理结果",
            "{@end_clyj}": "处理意见",
            "{@ing_bzmc}": "步骤名称",
            "{@ing_dqcl}": "当前处理",
            "{@ing_ddsj}": "到达时间",
            "{@ing_yjclsj}": "预计处理时间",
            "{@bxrw}": "并行任务",
            "{@wdrw}": "我的任务",
            "{@gxhccg}": "更新缓存成功",
            "{@gxlcdycg}": "更新流程定义成功",
            "{@outAgent}": "委托授权",
            "{@emptyOldPwd}": "原始密码不能为空",
            "{@emptyNewPwd}": "新密码不能为空",
            "{@emptyCheckPwd}": "确认密码不能为空",
            "{@pwdDiffer}": "新密码两次输入不一致",
            "{@pwdSuccess}": "修改成功，重新登录",
            "{@errorOldPwd}": "原始密码错误",
            "{@unknownError}": "未知错误",
            "{@pwdFail}": "密码修改失败",
            "{@dlrw}": "代理任务",
            "{@gridModel}": "视图模式",
            "{@listModel}": "列表模式",
            "{@saveSuccess}": "保存完成",
            "{@showDetail}": "查看明细",
            "{@hideBtn}": "关闭",
            "{@addBtn}": "添加",
            "{@modifyBtn}": "修改",
            "{@viewBtn}": "浏览",
            "{@deleteBtn}": "删除",
            "{@popUpSearchBtn}": "高级查询",
            "{@exportBtn}": "导出",
            "{@importBtn}": "导入",
            "{@refreshBtn}": "刷新",
            "{@reloadBtn}": "重载",
            "{@resetBtn}": "重置",
            "{@closeBtn}": "关闭",
            "{@clearBtn}": "清空",
            "{@addDailogBtn}": "打开新增窗口",
            "{@modifyDailogBtn}": "修改",
            "{@viewDailogBtn}": "浏览",
            "{@customDailogBtn}": "自定义打开窗口",
            "{@emptyBtn}": "自定义方法",
            "{@saveBtn}": "保存",
            "{@flowStartNewFlowWithFormBtn}": "启动",
            "{@flowSubmitBtn}": "提交",
            "{@flowStartAndSubmitBtn}": "提交",
            "{@flowGraphiBtn}": "流程状态",
            "{@saveDraftBtn}": "保存草稿",
            "{@flowClaimBtn}": "领取",
            "{@flowTransferBtn}": "转发",
            "{@flowUserCmdBtn}": "自定义",
            "{@flowUserExpendBtn}": "用户扩展",
            "{@flowRollBackBtn}": "退回-指定步骤",
            "{@flowRollBackTaskByTaskIdBtn}": "退回-任务",
            "{@flowCountersignBtn}": "会签",
            "{@returnValueBtn}": "返回单值",
            "{@returnMultiValueBtn}": "返回多值",
            "{@noBtnExist}": "按钮类型不存在：",
            "{@confirmDelete}": "确定删除数据？",
            "{@confirmPrint}": "确认打印？",
            "{@deleteSuccess}": "删除成功",
            "{@exportType}": "导出类型",
            "{@exportName}": "导出文件名称",
            "{@sheetName}": "sheet名称",
            "{@exportOldValue}": "导出原始值",
            "{@chooseExportCol}": "选择导出列",
            "{@confirmExport}": "确定导出吗？",
            "{@leastOne}": "请至少选择1列",
            "{@importError}": "导入服务没有配置，无法进行导入",
            "{@importSuccess}": "导入成功",
            "{@chooseImportFile}": "请先选择需要导入的文件",
            "{@downloadTpl}": "下载模板",
            "{@executeBtn}": "执行按钮'",
            "{@emptyBtnError}": "'的脚本代码出错!\n详细信息:",
            "{@confirmSave}": "确定提交？",
            "{@queding}": "确定",
            "{@chuli}": "？",
            "{@chulichenggong}": "操作处理成功",
            "{@claimFlow}": "接收任务?",
            "{@releaseTask}": "释放任务?",
            "{@claimFlowSuccess}": "任务接收成功",
            "{@releaseTaskSuccess}": "任务释放成功",
            "{@chooseStep}": "选择步骤",
            "{@backSuccess}": "退回成功",
            "{@chooseTask}": "选择任务",
            "{@chooseUser}": "选择用户",
            "{@transferSuccess}": "转发成功",
            "{@cuiban}": "催办",
            "{@tongyong}": "通用",
            "{@addFile}": "添加文件",
            "{@hasSelected}": "个已被选",
            "{@removeAll}": "移除所有",
            "{@addAll}": "全部添加",
            "{@Cancel}": "取消"
        };
      }

      var search = doc.querySelector('#label_search');
      var clear = doc.querySelector('#label_clear');

      if (search && clear) {
        search.innerHTML = '查询';
        clear.innerHTML = '清空';
      }
      
      var winHref = aWin.location.href;
      if(winHref.indexOf('UniformMyAllTask')>0) {
        if(doc.getElementById('c_category')) {
          doc.getElementById('c_category').value='Adaptation';
          doc.getElementById('c_category').dispatchEvent(new Event('change'));
        }
      }else if(winHref.indexOf('UniformTaskDone')>0 || winHref.indexOf('UniformMyInvolvedTask')>0) {
        if(doc.getElementById('c_defKey')) {
          doc.getElementById('c_defKey').value='Adaptation';
          doc.getElementById('label_search').click();
        }
      }
    },


    beforeTargetLoad: function(aWin, doc) {
      var top = ysp.runtime.Browser.getMainBrowser().contentWindow;

      top.Fix = top.Fix || {
        Manager: {
            clearError: function() {}
        }
      };

      aWin.parent = top;

      aWin.top.Fix = {
        "Exception": {
          "Const": {
            "FieldsNotSet": "{0}组件,Fields属性没有设置",
            "DataStoreNotSet": "{0}组件,DataStore没有设置",
            "COMNotSet": "{0}组件配置没有设置,无法使用",
            "DataAdapterConfigJSONNotSet": "数据访问组件配置没有设置,无法使用",
            "AjaxConfigNotSet": "{0}组件,Ajax访问属性没有配置,无法使用",
            "TriggerFactory_001": "组件触发器中没有设置tagName属性",
            "TriggerFactory_002": "组件触发器中没有设置content属性",
            "TriggerFactory_101": "组件触发器不支持该tagName值:{0}",
            "AliasAdapter_001": "目标别名没有设置",
            "GetStore_001": "{0}组件,需要做数据访问时既没有找到DataStore属性，又没有找到TreeStore属性，无法继续交互",
            "DataVirtualProxy_001": "没有设置Method属性",
            "DataVirtualProxy_002": "没有设置Param属性",
            "DataAdapter_001": "没有设置BizObj属性",
            "DataAdapter_011": "没有设置Fields属性",
            "DataAdapter_012": "没有设置Filter属性",
            "DataAdapter_021": "没有设置Parent属性",
            "DataAdapter_022": "没有设置Child属性",
            "DataAdapter_023": "没有设置ShowField属性",
            "DataAdapter_024": "没有设置ParentValue属性",
            "fn_calculate_501": "获取数据源字段值表达式不正确:{0},正确的格式应该如下：{1}",
            "Runtime_001": "值不是数字:{0}",
            "Runtime_002": "主键重复,最后重复在{0}行",
            "Runtime_003": "没有找到别名:{0}",
            "FormatIsInvalid": "格式化无效,输入项目如下：{0},{1},{2}。预期格式化字符串格式为:{类型:表达式}，如：{date:yyyy-MM-dd}",
            "VaildationNotFoundTableFields": "表单中没有找到验证中设置的tableFields对应的组件：{0}",
            "VaildationNotFoundControlId": "表单中没有找到验证中设置的controlId对应的组件：{0}",
            "ElementNotFound": "数据默认绑定时没有找到元素:{0}",
            "Start": "开始",
            "Cancel": "取消",
            "Delete": "删除",
            "CMP_JQFileUpload_Error": "错误",
            "CMP_JQFileUpload_ToBig": "文件太大",
            "CMP_JQFileUpload_ToSmall": "文件太小",
            "CMP_JQFileUpload_TypeNotAllowed": "文件类型不允许",
            "CMP_JQFileUpload_MaxFiles": "超出文件最大个数",
            "CMP_JQFileUpload_MaxFileSizeServer": "超出文件最大限制(服务端限制)",
            "CMP_JQFileUpload_MaxFileHTML": "超出文件最大限制(HTML表单限制)",
            "CMP_JQFileUpload_Partially": "文件仅部分上传",
            "CMP_JQFileUpload_NoFile": "没有文件上传",
            "CMP_JQFileUpload_MissingTempFolder": "缺少临时文件",
            "CMP_JQFileUpload_FailedWrite": "写磁盘失败",
            "CMP_JQFileUpload_Stop": "文件上传停止",
            "CMP_JQFileUpload_UploadedBytes": "上传超出最大限制",
            "CMP_JQFileUpload_EmptyResult": "没有文件上传反馈",
            "URL_IS_REQUIRED": "必须设置URL参数",
            "enUS": {
              "Start": "Start",
              "Cancel": "Cancel",
              "Delete": "Delete",
              "CMP_JQFileUpload_Error": "Error",
              "CMP_JQFileUpload_ToBig": "File is too big",
              "CMP_JQFileUpload_ToSmall": "File is too small",
              "CMP_JQFileUpload_TypeNotAllowed": "Filetype not allowed",
              "CMP_JQFileUpload_MaxFiles": "Max number of files exceeded",
              "CMP_JQFileUpload_MaxFileSizeServer": "File exceeds upload_max_filesize(php.ini directive)",
              "CMP_JQFileUpload_MaxFileHTML": "File exceeds MAX_FILE_SIZE(HTML form directive)",
              "CMP_JQFileUpload_Partially": "File was only partially uploaded",
              "CMP_JQFileUpload_NoFile": "No File was uploaded",
              "CMP_JQFileUpload_MissingTempFolder": "Missing a temporary folder",
              "CMP_JQFileUpload_FailedWrite": "Failed to write file to disk",
              "CMP_JQFileUpload_Stop": "File upload stopped by extension",
              "CMP_JQFileUpload_UploadedBytes": "Uploaded bytes exceed file size",
              "CMP_JQFileUpload_EmptyResult": "Empty file upload result"
            }
          }
        },
        "Performance": "low",
        "Flow": {},
        "openMethod": {},
        "Form": {},
        "Util": {"baseHTML": ""},
        "Helper": {"jQy_loading": {"0": {}, "length": 1}, "jQy_progressBar": {"0": {}, "length": 1}, "CurrErrObj": []},
        "Format": {},
        "App": {"PageToken": "7bd98746-4086-d40b-dcc4-1fddb8654dee", "appHost": "/ptsoa/", "appHostFull": ""},
        "Component": {},
        "Manager": {"CurrErrArray": [], "CurrErr": null},
        "Utils": {},
        "Runtime": {"store": {}},
        "Localization": {},
        "Global": {
            "{@mydysj}": "没有对应数据",
            "{@home}": "主页",
            "{@atasks}": "的待办任务",
            "{@btasks}": "的共享任务",
            "{@mytask}": "待办任务",
            "{@sharetask}": "共享任务",
            "{@taskdone}": "已办任务",
            "{@myinvolved}": "流程追踪",
            "{@priority}": "优先级",
            "{@rwzt}": "任务主题",
            "{@dqbz}": "当前步骤",
            "{@ddsj}": "到达时间",
            "{@wcsj}": "完成时间",
            "{@tjsj}": "提交时间",
            "{@yjzxsj}": "预计执行时间",
            "{@cz}": "操作",
            "{@fqr}": "发起人",
            "{@ckbd}": "查看表单",
            "{@ckzt}": "查看状态",
            "{@zy}": "摘要",
            "{@to}": "至",
            "{@page}": "每页",
            "{@record}": "条",
            "{@total}": "共：",
            "{@totalrecord}": "行",
            "{@search}": "查询",
            "{@clear}": "清空",
            "{@nodata}": "没有对应数据",
            "{@serial}": "序号",
            "{@closeAll}": "关闭全部",
            "{@closeOther}": "关闭其他",
            "{@basic}": "基本信息",
            "{@cost}": "成本信息",
            "{@plan}": "计划信息",
            "{@position}": "库位信息",
            "{@route}": "路线信息",
            "{@detail}": "商品明细",
            "{@workDayDetail}": "日历细则",
            "{@SpecialWorkDay}": "特殊工作日",
            "{@attachment}": "附件",
            "{@remark}": "备注",
            "{@oldPwd}": "原密码",
            "{@newPwd}": "新密码",
            "{@checkPwd}": "确认密码",
            "{@okPwd}": "确定",
            "{@cancelPwd}": "取消",
            "{@pwdTitle}": "修改密码",
            "{@lct}": "流程图",
            "{@ywc}": "已完成",
            "{@clz}": "处理中",
            "{@end_bzmc}": "步骤名称",
            "{@end_clr}": "处理人",
            "{@end_ddsj}": "到达时间",
            "{@end_wcsj}": "完成时间",
            "{@end_yjclsj}": "预计完成时间",
            "{@end_cljg}": "处理结果",
            "{@end_clyj}": "处理意见",
            "{@ing_bzmc}": "步骤名称",
            "{@ing_dqcl}": "当前处理",
            "{@ing_ddsj}": "到达时间",
            "{@ing_yjclsj}": "预计处理时间",
            "{@bxrw}": "并行任务",
            "{@wdrw}": "我的任务",
            "{@gxhccg}": "更新缓存成功",
            "{@gxlcdycg}": "更新流程定义成功",
            "{@outAgent}": "委托授权",
            "{@emptyOldPwd}": "原始密码不能为空",
            "{@emptyNewPwd}": "新密码不能为空",
            "{@emptyCheckPwd}": "确认密码不能为空",
            "{@pwdDiffer}": "新密码两次输入不一致",
            "{@pwdSuccess}": "修改成功，重新登录",
            "{@errorOldPwd}": "原始密码错误",
            "{@unknownError}": "未知错误",
            "{@pwdFail}": "密码修改失败",
            "{@dlrw}": "代理任务",
            "{@gridModel}": "视图模式",
            "{@listModel}": "列表模式",
            "{@saveSuccess}": "保存完成",
            "{@showDetail}": "查看明细",
            "{@hideBtn}": "关闭",
            "{@addBtn}": "添加",
            "{@modifyBtn}": "修改",
            "{@viewBtn}": "浏览",
            "{@deleteBtn}": "删除",
            "{@popUpSearchBtn}": "高级查询",
            "{@exportBtn}": "导出",
            "{@importBtn}": "导入",
            "{@refreshBtn}": "刷新",
            "{@reloadBtn}": "重载",
            "{@resetBtn}": "重置",
            "{@closeBtn}": "关闭",
            "{@clearBtn}": "清空",
            "{@addDailogBtn}": "打开新增窗口",
            "{@modifyDailogBtn}": "修改",
            "{@viewDailogBtn}": "浏览",
            "{@customDailogBtn}": "自定义打开窗口",
            "{@emptyBtn}": "自定义方法",
            "{@saveBtn}": "保存",
            "{@flowStartNewFlowWithFormBtn}": "启动",
            "{@flowSubmitBtn}": "提交",
            "{@flowStartAndSubmitBtn}": "提交",
            "{@flowGraphiBtn}": "流程状态",
            "{@saveDraftBtn}": "保存草稿",
            "{@flowClaimBtn}": "领取",
            "{@flowTransferBtn}": "转发",
            "{@flowUserCmdBtn}": "自定义",
            "{@flowUserExpendBtn}": "用户扩展",
            "{@flowRollBackBtn}": "退回-指定步骤",
            "{@flowRollBackTaskByTaskIdBtn}": "退回-任务",
            "{@flowCountersignBtn}": "会签",
            "{@returnValueBtn}": "返回单值",
            "{@returnMultiValueBtn}": "返回多值",
            "{@noBtnExist}": "按钮类型不存在：",
            "{@confirmDelete}": "确定删除数据？",
            "{@confirmPrint}": "确认打印？",
            "{@deleteSuccess}": "删除成功",
            "{@exportType}": "导出类型",
            "{@exportName}": "导出文件名称",
            "{@sheetName}": "sheet名称",
            "{@exportOldValue}": "导出原始值",
            "{@chooseExportCol}": "选择导出列",
            "{@confirmExport}": "确定导出吗？",
            "{@leastOne}": "请至少选择1列",
            "{@importError}": "导入服务没有配置，无法进行导入",
            "{@importSuccess}": "导入成功",
            "{@chooseImportFile}": "请先选择需要导入的文件",
            "{@downloadTpl}": "下载模板",
            "{@executeBtn}": "执行按钮'",
            "{@emptyBtnError}": "'的脚本代码出错!\n详细信息:",
            "{@confirmSave}": "确定提交？",
            "{@queding}": "确定",
            "{@chuli}": "？",
            "{@chulichenggong}": "操作处理成功",
            "{@claimFlow}": "接收任务?",
            "{@releaseTask}": "释放任务?",
            "{@claimFlowSuccess}": "任务接收成功",
            "{@releaseTaskSuccess}": "任务释放成功",
            "{@chooseStep}": "选择步骤",
            "{@backSuccess}": "退回成功",
            "{@chooseTask}": "选择任务",
            "{@chooseUser}": "选择用户",
            "{@transferSuccess}": "转发成功",
            "{@cuiban}": "催办",
            "{@tongyong}": "通用",
            "{@addFile}": "添加文件",
            "{@hasSelected}": "个已被选",
            "{@removeAll}": "移除所有",
            "{@addAll}": "全部添加",
            "{@Cancel}": "取消"
        }
      };

      aWin.top.Fix.Manager.AutoOpen = function(topParams){

        //var topParams = top.Fix.Utils.getURLParams(top.location.href);
        switch(topParams._openMethod){
          case "tab":
            var obj ={};
            obj.name = topParams._title;
            obj.url = decodeURIComponent(topParams._url.substr(1, topParams._url.length - 2));
            obj.id = top.Fix.Utils.newGuid();
            obj.scrolling = "no";

            //elvis 2012-12-18 挂表单的情况下，解决无法保存后自动关闭的问题
            //MainTab.add(obj);
            top.Fix.Manager.createTabInMainTab(obj, function(){}, this);
            break;
          case "dailog":
            var ObjCfg = {
              id: top.Fix.Utils.newGuid(),
              name: topParams._name,
              title: topParams._title,
              url: topParams._url.substr(1, topParams._url.length - 2),
              width: topParams._width,
              height: topParams._height
            };

            top.Fix.Manager.createDialog(ObjCfg, function(instObj){}, window);
            break;
        }
      };

      aWin.top.Fix.Utils.getURLParams = function(url) {
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        var paraObj = {};
        for (var i = 0; j = paraString[i]; i++) {
          var paramVal = j.substring(j.indexOf("=") + 1, j.length);

          paraObj[j.substring(0, j.indexOf("="))] = top.Fix.Utils ? top.Fix.Utils.urlDecode(paramVal) : top.Fix.Util.urlDecode(paramVal);
        }
        return paraObj;
      };

      function param(obj) {
        var ret = [];
        for (var id in obj) {
          if (obj.hasOwnProperty(id)) {
            ret.push(id + '=' + obj[id]);
          }
        }
        return ret.join('&');
      }

      aWin.top.Fix.Utils.appendParams = function(url, params) {
        var newUrl = url;
        var index = url.indexOf("?");
        if (index == -1) {
          newUrl = newUrl + "?";
        }else{
          if(index < newUrl.length -1){
            if(newUrl[newUrl.length -1] !== "&")
              newUrl = newUrl + "&";
          }
        }

        if (typeof params === 'object') {
          newUrl += param(params);
        } else {
          newUrl += params;
        }

        return newUrl;
      };

      aWin.top.Fix.Manager.createTabInMainTab = function(obj) {
        var url = obj.url;
        if (url) {
          top.open(url);
        }
      };
   
    },

    isLoginSuccess: function(doc) {
      var cond1 = doc.title === '普天太力业务流程管理平台';
      var cond2;

      var img = doc.querySelectorAll('img')[1];
      if (img) {
        cond2 = img.src.indexOf('banner') !== -1;
      } else {
        cond2 = false;
      }

      return cond1 && cond2;
    }
  });

  function _forEach(arr, callback, startIndex) {
    if (arr && arr.length) {
        for (var index = startIndex || 0; index < arr.length; index++) {
          callback(arr[index], index);
        }
    }
  }


  function removeTags(str) {
    return str.replace(/\<\/?[^\<\>\/]*\/?\>|\s+/g, '');
  }

  function getElemContent(el) {
    var str = '';
    var nodes = el.childNodes;
    _forEach(nodes, function(n) {
      if (n.nodeName === '#text') {
        str = str.concat(n.nodeValue.trim());
      } else if (n.tagName === 'INPUT' && n.style.display !== 'none') {
        str = str.concat(n.value);
      } else if (n.nodeName !== '#comment' && n.style.display !== 'none') {
        str = str.concat(removeTags(n.innerHTML));
      }
    });
    return str.replace('&nbsp;', ' ').replace('&gt;','>').replace('&lt;','<');
  }
})(window, ysp);

