var ysp1;
(function (ysp1) {
    var ext;
    (function (ext) {
        var Utils = (function () {
            function Utils() {
            }
            /**
             * @description 此函数功能：根据表格头和身体标签，过滤信息，规则，是否严格模式来采集数据
             * @param headEl 头标签，规则：1.必须包含thead或者head标签 2.不能超过一个thead或者head标签
             * @type HTMLElement
             * @param tBodyEl 身体标签 规则：1.必须包含tbody标签 2.不能超过一个tbody标签
             * @type HTMLElement
             * @param headFilter html标签数组，可以过滤内部规则
             * @type Array
             * @param isStrict 是否采取严格模式：默认采取非严格模式，当采用严格模式时参数为true，如果当前行没有数据，则不会捕获此数据
             * @type boolean
             * @return container = {
             *               title:headDatas,
             *               content:tbodyData,
             *               rules:ruleDatas
             *           }
             * 样例：
             * ysp.ext.Utils.findTableData(headEl,table,["客户全称","客户简称","拒绝原因"],['a','div'],true);
             * Object {title: Array[3], content: Array[10], rules: Array[10]}
             */
            Utils.findTableData = function (headEl, tBodyEl, headFilter, rules, isStrict) {
                var container;
                var forEach = Array.prototype.forEach;
                if (!tBodyEl || !headEl) {
                    console.error("ysp.ext.Utils.findTableData输入参数有误");
                    return;
                }
                //首先要对headEl进行容错
                if (headEl.tagName.toLowerCase() !== "thead" || headEl.tagName.toLowerCase() !== "head") {
                    var headEls = !!headEl.querySelector('thead') ? headEl.querySelectorAll('thead') : headEl.querySelectorAll('head');
                    if (headEls.length > 1) {
                        console.warn("ysp.ext.Utils.findTableData的头部不止一个head或thead！总长度为： " + headEls.length);
                        return;
                    }
                    if (headEl.tagName.toLowerCase() === 'thead' || headEl.tagName.toLowerCase() === 'head') {
                        headEl = headEl;
                    }
                    else {
                        headEl = headEl.querySelector('thead') || headEl.querySelector('head');
                    }
                }
                if (headEl) {
                    //首先判断是否有head标签
                    if (headFilter && headFilter.length > 0) {
                        var headPositions_1 = new Array(); //表头位置容器
                        //如果有头部过滤信息，那么需要匹配
                        var thEls_1 = !!headEl.querySelector('th') ? headEl.querySelectorAll('th') : headEl.querySelectorAll('td');
                        //匹配正常的逻辑
                        var headDatas_1 = new Array(); //存储头数组信息
                        headFilter.forEach(function (value) {
                            forEach.call(thEls_1, function (thEl, index) {
                                if (Utils.trim(thEl.textContent) == value) {
                                    headPositions_1.push(parseInt(index));
                                    headDatas_1.push(Utils.trim(thEl.textContent));
                                }
                            });
                        });
                        if (headPositions_1.length === 0) {
                            console.warn("ysp.ext.Utils.findTableData的头部匹配为空，请检查您输入的匹配信息是否有误！");
                            return; //@todo 后期考虑，如果匹配没有匹配中，那么就展示全部表格信息
                        }
                        //开始处理tbody体内数据了 
                        var tbodyEls = tBodyEl.querySelectorAll('tbody');
                        if (tbodyEls.length > 1) {
                            console.warn("ysp.ext.Utils.findTableData表格容器不止一个tbody！总长度为： " + tbodyEls.length);
                            return;
                        }
                        if (tBodyEl.tagName.toLowerCase() !== 'tbody') {
                            tBodyEl = tBodyEl.querySelector('tbody');
                        }
                        var trEls = tBodyEl.querySelectorAll('tr');
                        var tbodyData_1 = new Array();
                        var ruleDatas_1 = new Array(); //
                        forEach.call(trEls, function (trEl, index) {
                            var tdEls = trEl.querySelectorAll("td");
                            var tbodyItemData = new Array();
                            var ruleData;
                            if (rules && rules.length > 0) {
                                ruleData = new Array();
                            }
                            forEach.call(tdEls, function (tdEl, subIndex) {
                                var position = parseInt(subIndex);
                                var flag = false;
                                headPositions_1.forEach(function (value, i) {
                                    if (value == position) {
                                        tbodyItemData.push(Utils.trim(tdEl.textContent));
                                        flag = true;
                                    }
                                });
                                if (flag) {
                                    if (rules && rules.length > 0) {
                                        var ruleItemData_1 = {};
                                        rules.forEach(function (value) {
                                            ruleItemData_1[value] = !!tdEl.querySelector(value);
                                        });
                                        ruleData.push(ruleItemData_1);
                                    }
                                }
                            });
                            if (isStrict) {
                                if (Utils.trim(trEl.textContent)) {
                                    ruleDatas_1.push(ruleData);
                                    tbodyData_1.push(tbodyItemData);
                                }
                            }
                            else {
                                ruleDatas_1.push(ruleData);
                                tbodyData_1.push(tbodyItemData);
                            }
                        });
                        return container = {
                            title: headDatas_1,
                            content: tbodyData_1,
                            rules: ruleDatas_1
                        };
                    }
                }
                else {
                    console.error("ysp.ext.Utils.findTableData确保你传入的head元素是否正确");
                }
            };
            Utils.trim = function (str) {
                return str.replace(/(^\s*)|(\s*$)/g, "");
            };
            /**
             * @description 根据position过滤数据，如果position这项为空字符串，则被屏蔽掉
             * @param position 具体数组内数组位置
             * @param datas 数组本身
             * @return 过滤后的新数组
             */
            Utils.filterArray = function (position, datas) {
                var tempDatas = [];
                datas.forEach(function (items, index) {
                    var tempDataItem = [];
                    var flag = false; //标识是否要过滤掉数据
                    items.forEach(function (item, subIndex) {
                        if (position == subIndex && item[subIndex] && item[subIndex].replace(/(^\s*)|(\s*$)/g, "")) {
                            flag = true;
                        }
                        tempDataItem.push(item);
                    });
                    if (flag) {
                        tempDataItem.push(index);
                        tempDatas.push(tempDataItem);
                    }
                });
                return tempDatas;
            };
            Utils.getCurrentData = function () {
                var date = new Date();
                var myyear = date.getFullYear();
                var mymonth = date.getMonth() + 1; //注：月数从0~11为一月到十二月
                mymonth = mymonth > 0 && mymonth < 10 ? "0" + mymonth : mymonth;
                var mydate = date.getDate(); //号
                mydate = mydate > 0 && mydate < 10 ? "0" + mydate : mydate;
                var myday = date.getDay(); //注:0-6对应为星期日到星期六
                var currentWeek = "";
                switch (myday) {
                    case 0:
                        currentWeek = "星期日";
                        break;
                    case 1:
                        currentWeek = "星期一";
                        break;
                    case 2:
                        currentWeek = "星期二";
                        break;
                    case 3:
                        currentWeek = "星期三";
                        break;
                    case 4:
                        currentWeek = "星期四";
                        break;
                    case 5:
                        currentWeek = "星期五";
                        break;
                    case 6:
                        currentWeek = "星期六";
                        break;
                    default: currentWeek = "系统错误！";
                }
                return myyear + "年" + mymonth + "月" + mydate + "日 " + currentWeek;
            };
            return Utils;
        }());
        ext.Utils = Utils;
    })(ext = ysp1.ext || (ysp1.ext = {}));
})(ysp1 || (ysp1 = {}));
//# sourceMappingURL=ysp.ext.js.map
top.ysp1 = ysp1; 