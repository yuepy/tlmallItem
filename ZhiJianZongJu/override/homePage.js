$(function () {
    $('#messageTable').datagrid({
        height:'300px',title:'待阅消息',
        width:'100%',
        rownumbers: true,
        resizeHandle:'both',
        singleSelect: true,
        pagination: true,
        pageNumber: 1, // 当设置分页属性时，初始化的页码编号。默认从1开始
        pageSize: 10, // 当设置分页属性是，初始化的页面大小。默认10行
        pageList: [10, 20, 50, 100, 200, 300],
        toolbar: '#messageToolbar'
    });
    TableUtils.createDataGrid($('#messageTable'), '',
        'com.itown.ecqs.sysmgr.service.EcqsWebDaiyueService',
        'listAllMessage', [], [[
            {field: 'oid', hidden:true},
            {field: 'readStatus', title: '', width: '2%', formatter: function (val, rec) {
                var str = '';
                if(val==  true){
                    str += mp.formatString('<img src="{0}"/>', '../images/yiyue.png');
                } else {
                    str += mp.formatString('<img src="{0}"/>', '../images/daiyue.png');
                }

                return str;
            }},
            {field: 'title', title: '标题', width: '98%'}
        ]], 'oid');

    $('#sysMessageTable').datagrid({
        height:'300px',title:'通知公告',
        width:'100%',
        rownumbers: true,
        resizeHandle:'both',
        singleSelect: true,
        pagination: true,
        pageNumber: 1, // 当设置分页属性时，初始化的页码编号。默认从1开始
        pageSize: 10, // 当设置分页属性是，初始化的页面大小。默认10行
        pageList: [10, 20, 50, 100, 200, 300],
        toolbar: '#sysMessageTablebar'
    });
    TableUtils.createDataGrid($('#sysMessageTable'), '',
        'com.itown.ecqs.sysmgr.service.EcqsWebSysMessageService',
        'listMyMessages', [], [[
            {field: 'oid', hidden:true},
            {field: 'title', title: '标题', width: '98%'}
        ]], 'oid');
});

function viewMessage(){
    var row = $('#messageTable').datagrid('getSelected');
    if (row == null) {
        MessageBox.message('请选择要查看的消息!');
        return;
    }

    var tabs = parent.$('#mainTabs');
    var src = "../sysmanage/view_message.jsp?oid="+row.oid+"&roid="+row.roid;
  	document.querySelector("#messageToolbar").querySelector('a').setAttribute('data-url',src);
    var opts = {
        id:row.oid,
        title : '待阅消息',
        closable : true,
        content : mp.formatString('<iframe src="{0}" allowTransparency="true" style="border:0;width:100%;height:99%;" frameBorder="0"></iframe>', src),
        border : false,
        fit : true
    };
    if (tabs.tabs('exists', '待阅消息')) {
        var flag = true;
        var existtab = tabs.tabs('tabs');
        $.each(existtab, function(i, entity){
            if(entity[0].id==row.oid){
                flag = false;
            }
        });
        if(flag){
            tabs.tabs('add', opts);
        }else{
            tabs.tabs('select', opts.title);
        }
    } else {
        tabs.tabs('add', opts);
    }
}
function viewSystemMessage(){
    var row = $('#sysMessageTable').datagrid('getSelected');
    if (row == null) {
        MessageBox.message('请选择要查看的消息!');
        return;
    }

    var tabs = parent.$('#mainTabs');
    var src = "../sysmanage/view_sys_message.jsp?oid="+row.oid;
    var opts = {
        id:row.oid,
        title : '通知公告',
        closable : true,
        content : mp.formatString('<iframe src="{0}" allowTransparency="true" style="border:0;width:100%;height:99%;" frameBorder="0"></iframe>', src),
        border : false,
        fit : true
    };
    if (tabs.tabs('exists', '通知公告')) {
        var flag = true;
        var existtab = tabs.tabs('tabs');
        $.each(existtab, function(i, entity){
            if(entity[0].id==row.oid){
                flag = false;
            }
        });
        if(flag){
            tabs.tabs('add', opts);
        }else{
            tabs.tabs('select', opts.title);
        }
    } else {
        tabs.tabs('add', opts);
    }
}