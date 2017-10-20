// 显示当前日期
$(function () {
    today = new Date();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
        var t_date = today.getFullYear() + '-' + month;
        var now_time = today.getFullYear() + '-' + month + '-' + date;
    }
    $('.now_time').val(now_time);
});

var configType = $("#configType").html();

// 定义
// 全国地图数据
var showAllMap;
var mapChinaBranchData = [];  // [ { name: "province", value: "amt" }, {} ]
var mapChinaBranchQtyMap = {};  // { province: qty }
var mapChinaBranchAmtMap = {};  // { province: amt }
var mapChinaBranchMaxAmt = 10000;

// 省地图数据
var showProvinceMap;
var provinceName;

// 月度趋势图
var tendencyDate = new Array(), tendencyQty = new Array(), tendencyAmt = new Array();

// 双环形图
var annularName = []; // [ "", "", ""]
var annularQty = []; // [ {value: qty, name: name}, {}]
var annularAmt = []; // [ {value: amt, name: name}, {}]

// 环比同比
var monthQty2, monthAmt2, preMonthQty, preMonthAmt, preYearMonthQty, preYearMonthAmt;

$.ajax({
    url: "/ptDataShow/echarts/homeData?type=" + encodeURIComponent($("#type").html()) + "&userId=" + encodeURIComponent($("#userId").html())
    + "&filter_department=" + encodeURIComponent($("#filter_department").html())
    + "&filter_branchName=" + encodeURIComponent($("#filter_branchName").html()) + "&filter_projectName=" + encodeURIComponent($("#filter_projectName").html())
    + "&filter_officeName=" + encodeURIComponent($("#filter_officeName").html()) + "&filter_salesman_id=" + encodeURIComponent($("#filter_salesman_id").html()),
    async: false,
    success: function (response) {

        // 环比和同比图形
        // 当月的销量和销售额
        monthQty2 = response.monthSum.allSaleQty;
        monthAmt2 = response.monthSum.allSaleAmt;
        // 上月的销量和销售额
        preMonthQty = response.preMonthSum.allSaleQty;
        preMonthAmt = response.preMonthSum.allSaleAmt;
        // 去年这月的销量和销售额
        preYearMonthQty = response.preYearMonthSum.allSaleQty;
        preYearMonthAmt = response.preYearMonthSum.allSaleAmt;

        // 今日销量和销售额
        $("#todayQty").html(response.todaySum.allSaleQty);
        $("#todayAmt").html(response.todaySum.allSaleAmt);
        // 当月销量和销售额
        $("#monthQty").html(response.monthSum.allSaleQty);
        $("#monthAmt").html(response.monthSum.allSaleAmt);
        // 当年销量和销售额
        $("#yearQty").html(response.yearSum.allSaleQty);
        $("#yearAmt").html(response.yearSum.allSaleAmt);

        // 客户拜访数据
        $("#clientCount").html(response.clientCount);
        $("#vistClientCount").html(response.clientVistCount);
        $("#storeCount").html(response.storeCount);
        $("#vistStoreCount").html(response.storeVistCount);

        // 业务人员
        $("#saleManCount").html(response.saleManCount);

        // 全国地图
        showAllMap = response.showAllMap;
        var branchInfos = response.branchInfo.vos;
        if (branchInfos && showAllMap) {
            $("#mapTitle").html("全国销售数据展示图");
            mapChinaBranchMaxAmt = response.branchInfo.maxAmt;
            for (var i = 0; i < branchInfos.length; i++) {
                var tmpName = branchInfos[i].alias;
                mapChinaBranchData[i] = {name: branchInfos[i].alias, value: branchInfos[i].amt};   // 用来显示全国地图的色块
                mapChinaBranchQtyMap[tmpName] = branchInfos[i].qty;    // 用于提示块
                mapChinaBranchAmtMap[tmpName] = branchInfos[i].amt;    // 用于提示块
            }
        }

        // 省地图
        showProvinceMap = response.showProvinceMap;
        if (showProvinceMap) {
            $("#mapTitle").html(response.provinceName + "销售数据展示图");
            provinceName = response.provinceName;
        }

        // 当前月度销售趋势图
        var tendencyInfos = response.monthInfos.vos;
        if (tendencyInfos) {
            for (var i = 0; i < tendencyInfos.length; i++) {
                tendencyDate[i] = tendencyInfos[i].name;
                tendencyQty[i] = tendencyInfos[i].qty;
                tendencyAmt[i] = tendencyInfos[i].amt;
            }
        }

        // 双环图
        var projectOrBizUnitInfo = response.projectOrBizUnitInfo.vos;
        if (projectOrBizUnitInfo) {
            $("#annularTitle").html(response.annularTitle);
            for (var i = 0; i < projectOrBizUnitInfo.length; i++) {
                annularName[i] = projectOrBizUnitInfo[i].name;
                annularQty[i] = {name: projectOrBizUnitInfo[i].name, value: projectOrBizUnitInfo[i].qty};
                annularAmt[i] = {name: projectOrBizUnitInfo[i].name, value: projectOrBizUnitInfo[i].amt};
            }
        }

        // 表格信息
        var tableInfo = response.tableInfo;
        $("#tableTile").html(response.tableTile);
        $("#tableTile2").html(response.tableTile2);
        if (tableInfo) {
            var preBranch = '';
            for (var i = 0; i < tableInfo.length; i++) {
                if (preBranch == tableInfo[i].name) {
                    continue;
                }
                var tr = "<tr><td>" + tableInfo[i].name + "</td><td>" + tableInfo[i].qty + "</td><td>" + tableInfo[i].amt + "</td></tr>";
                $("#branchTable").append(tr);
                preBranch = tableInfo[i].name;
            }
        }

    },
    error: function () {
        console.log("Error:获取后台数据失败！");
    }
});

// 销售趋势图表
if(configType!="02") {
var tendencyChart = echarts.init(document.getElementById("tendencyChart")),
    tendencyOption = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['销量', '销售额']
        },
        toolbox: {
            show: false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        grid: {
            width: '80%',
            height: 240,
            x: '10%'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: tendencyDate
            }
        ],
        yAxis: [
            {
                type: 'value',
            },
            {
                type: 'value',
            }
        ],
        series: [
            {
                name: '销量',
                type: 'line',
                data: tendencyQty,
            }, {
                name: '销售额',
                type: 'line',
                data: tendencyAmt,
                yAxisIndex: 1
            }
        ]
    };

tendencyChart.setOption(tendencyOption), $(window).resize(tendencyChart.resize);
}
// 双环形占比图
if(configType!="02") {
    var bizUnitChart = echarts.init(document.getElementById("bizUnitChart")),
        bizUnitChartOption = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: annularName
            },
            calculable: false,
            series: [
                {
                    name: '销量',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, 70],
                    // for funnel
                    x: '20%',
                    width: '40%',
                    funnelAlign: 'right',
                    max: 1548,

                    itemStyle: {
                        normal: {
                            label: {
                                position: 'inner'
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: annularQty
                },
                {
                    name: '销售额',
                    type: 'pie',
                    radius: [100, 140],

                    // for funnel
                    x: '60%',
                    width: '35%',
                    funnelAlign: 'left',
                    max: 1048,
                    data: annularAmt
                }
            ]
        };

    bizUnitChart.setOption(bizUnitChartOption), window.onresize = bizUnitChart.resize;
}
// 销量大地图
var provinceToBranchName = {
    "吉林省": "长春分公司",
    "湖南省": "长沙分公司",
    "陕西省": "西安分公司",
    "天津市": "天津分公司",
    "海南省": "南宁分公司",
    "浙江省": "杭州太力",
    "安徽省": "合肥分公司",
    "北京市": "北京分公司",
    "福建省": "厦门分公司",
    "四川省": "成都分公司",
    "广东省": "广州分公司",
    "贵州省": "贵阳分公司",
    "黑龙江省": "哈尔滨分公司",
    "内蒙古自治区": "内蒙古分公司",
    "山东省": "济南分公司",
    "辽宁省": "沈阳分公司",
    "江西省": "南昌分公司",
    "广西壮族自治区": "南宁分公司",
    "云南省": "昆明分公司",
    "西藏自治区": "成都分公司",
    "甘肃省": "兰州分公司",
    "湖北省": "武汉分公司",
    "上海市": "上海普天",
    "河北省": "石家庄分公司",
    "新疆维吾尔自治区": "新疆分公司",
    "江苏省": "南京分公司",
    "宁夏回族自治区": "兰州分公司",
    "河南省": "郑州分公司",
    "青海省": "兰州分公司",
    "山西省": "太原分公司",
    "重庆市": "重庆分公司",
    "吉林": "长春分公司",
    "湖南": "长沙分公司",
    "陕西": "西安分公司",
    "天津": "天津分公司",
    "海南": "南宁分公司",
    "浙江": "杭州太力",
    "安徽": "合肥分公司",
    "北京": "北京分公司",
    "福建": "厦门分公司",
    "四川": "成都分公司",
    "广东": "广州分公司",
    "贵州": "贵阳分公司",
    "黑龙江": "哈尔滨分公司",
    "内蒙古": "内蒙古分公司",
    "山东": "济南分公司",
    "辽宁": "沈阳分公司",
    "江西": "南昌分公司",
    "广西": "南宁分公司",
    "云南": "昆明分公司",
    "甘肃": "兰州分公司",
    "湖北": "武汉分公司",
    "上海": "上海普天",
    "河北": "石家庄分公司",
    "新疆": "新疆分公司",
    "江苏": "南京分公司",
    "宁夏": "兰州分公司",
    "河南": "郑州分公司",
    "青海": "兰州分公司",
    "山西": "太原分公司",
    "重庆": "重庆分公司"
};

if (showAllMap && configType!="02") {
    var t = echarts.init(document.getElementById("mapChart")),
        n = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    var branchName = provinceToBranchName[params.name];
                    if (branchName) {
                        var qty = mapChinaBranchQtyMap[params.name];
                        var amt = mapChinaBranchAmtMap[params.name];
                        var res = branchName + '<br/>销量 : ' + qty + '</br>销售额 : ' + amt + '</br>';
                        return res;
                    }
                    return "";
                }
            },
            dataRange: {
                min: 0,
                max: mapChinaBranchMaxAmt,
                orient: 'vertical',
                x: 'right',
                y: 'top',
                text:['高','低'],           // 文本，默认为数值文本
                calculable : true,
            },
            series : [
                {
                    name: ['销售额'],
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data: mapChinaBranchData
                }

            ]
        };
    t.setOption(n), window.onresize = t.resize;
}

if (showProvinceMap && configType!="02") {
    var t = echarts.init(document.getElementById("mapChart")),
        n = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return "";
                }
            },
            dataRange: {
                min: 0,
                max: mapChinaBranchMaxAmt,
                orient: 'vertical',
                x: 'right',
                y: 'top',
                text:['高','低'],           // 文本，默认为数值文本
                calculable : true,
            },
            series : [
                {
                    name: ['销售额'],
                    type: 'map',
                    mapType: provinceName,
                    roam: false,
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data: mapChinaBranchData
                }

            ]
        };
    t.setOption(n), window.onresize = t.resize;
}



// 环比和同比图形

// 销售同比
if(configType!="02") {

    var a = echarts.init(document.getElementById("chart_a")),
        option_a = {
            color: ['#bbc2d2', '#3398DB'],
            title: {
                text: '销量同比增长',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontSize: "16px"
                }
            },
            grid: {
                x: 20,
                x2: 0,
                y: 30,
                containLabel: false,
                width: 80,
                height: 100,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' '],
                    axisTick: {
                        alignWithLabel: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: 20,
                    data: [preYearMonthQty]
                },
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: 20,
                    data: [monthQty2]
                }
            ]
        };
    a.setOption(option_a), $(window).resize(a.resize);
// 销量环比
    var b = echarts.init(document.getElementById("chart_b")),
        option_b = {
            color: ['#bbc2d2', '#3bc5d0'],
            title: {
                text: '销量环比增长',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontSize: "16px"
                }
            },
            grid: {
                x: 20,
                x2: 0,
                y: 30,
                containLabel: false,
                width: 80,
                height: 100,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' '],
                    axisTick: {
                        alignWithLabel: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: 20,
                    data: [preMonthQty]
                },
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: 20,
                    data: [monthQty2]
                }
            ]
        };
    b.setOption(option_b), $(window).resize(b.resize);

// 销售额同比

    var c = echarts.init(document.getElementById("chart_c")),
        option_c = {
            color: ['#bbc2d2', '#ed952a'],
            title: {
                text: '销售额同比增长',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontSize: "16px"
                }
            },
            grid: {
                x: 20,
                x2: 0,
                y: 30,
                containLabel: false,
                width: 80,
                height: 100,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' '],
                    axisTick: {
                        alignWithLabel: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: 20,
                    data: [preYearMonthAmt]
                },
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: 20,
                    data: [monthAmt2]
                }
            ]
        };
    c.setOption(option_c), $(window).resize(c.resize);

// 销售额环比
    var d = echarts.init(document.getElementById("chart_d")),
        option_d = {
            color: ['#bbc2d2', '#ed694f'],
            title: {
                text: '销售额环比增长',
                x: 'center',
                y: 'bottom',
                textStyle: {
                    fontSize: "16px"
                }
            },
            grid: {
                x: 20,
                x2: 0,
                y: 30,
                containLabel: false,
                width: 80,
                height: 100,
                borderWidth: 0
            },
            xAxis: [
                {
                    type: 'category',
                    data: [' '],
                    axisTick: {
                        alignWithLabel: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: 20,
                    data: [preMonthAmt]
                },
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: 20,
                    data: [monthAmt2]
                }
            ]
        };
    d.setOption(option_d), $(window).resize(d.resize);

}





