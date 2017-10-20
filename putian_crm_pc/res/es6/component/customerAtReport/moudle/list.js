import * as Constant from '../../../constant/constant.js';
import * as iframeUtils from '../../../utils/iframeUtils.js';
import * as moudal from './moudal.js';


export var load = function () {
    doAction();
}
function doAction() {
    $.ajax({
        url: `${Constant.SERVER_ROOT}/pttlCrm/cust/myReport/getMyReportList`,
        dataType: 'json',
        type: 'post',
        success: function (data) {
            $(".m-report").html(render(data.mrList));
            moudal.load();
        },
        error: function (e) {
            console.error(e);
        }        
    });
}

function render(mrList){
    let temp = `${mrList == null ? "" : mrList.map((item) => {
                        return `
                            <div class="m-list">
                                <div class="header">
                                    <i class="icon icon-eye"></i>
                                    <h5 class="title">${item.customerName}</h5>
                                </div>
                                <div class="footer">
                                    <div class="infors">
                                        <div class="lists-one a">
                                            <h6>分公司</h6>
                                            <p>${item.branchCompany}</p>
                                        </div>
                                        <div class="lists-one b">
                                            <h6>办事处</h6>
                                            <p>${item.office}</p>
                                        </div>
                                        <div class="lists-one c">
                                            <h6>业务人员</h6>
                                            <p>${item.lastName}</p>
                                        </div>
                                        <div class="lists-one d">
                                            <h6>填写时间</h6>
                                            <p>${item.todoDueDtStr}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:;" val='${JSON.stringify(item)}' class="btn-check">查看详情</a>
                            </div>
                        
                        `;
     }).join('')}`
     return temp;
}