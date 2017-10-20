import * as Constant from '../../../../constant/constant.js';
import * as iframeUtils from '../../../../utils/iframeUtils.js';
export var PSIEnterload = function(){
    doAction();
}
function doAction(){
    $("#collectionPSIenter").html(render());
    $('#stock').focus(function(){
        $('#stock').addClass("stockPSI");
    })
    $('#stock').blur(function(){
        $('#stock').removeClass("stockPSI");
    })

    $('#PSIselect').focus(function(){
        $('#PSIselect').addClass("PSIselect");
    })
    $('#PSIselect').blur(function(){
        $('#PSIselect').removeClass("PSIselect");
    })
}
function render(){
    let temp =`
        <div class="collectionPSIentertop">
          <div>
            <a href="customerPSIcollection.html" class="btn"><i class="collectionPSIentertop-icon"></i></a>
            <span class="collectionPSIentertop-text">客户PSI采集<span>
            <span class="collectionPSIentertop-point"></span>
            <span class="collectionPSIentertop-text">录入</span> 
          </div>
          <div>
              <i></i>
              <input type="text" name="search" placeholder="请输入搜索内容"/>
              <button>搜索</button>
          </div>   
      </div>
      <div class="collectionPSIentercontent">
          <div class="collectionPSIentercontentselectexport">
              <div>
                <span>事业部：</span>
                <span>
                    <select id="PSIselect">
                        <option value='huawei' selected = 'selected'>华为事业部</option>
                        <option value='leshi'>乐视事业部</option>
                        <option value='xiaomi'>小米事业部</option>
                        <option value='fenxiao'>分销事业部</option>
                    </select>
                </span>
              </div>
              <div>
                <a href="" class="btn"><i class="collectionPSIentercontentselectexport-icon"></i><span>导出</span></a>
              </div>
              
          </div>
          <div class="collectionPSIentercontentborder">
              <table class="table collectionPSI-table">
                  <thead>
                      <tr>
                        <th>事业部</th>
                        <th>项目</th>
                        <th>机型</th>
                        <th>物料</th>
                        <th>采集库存</th>
                        <th>是否需要更新</th>
                        <th>频次要求</th>
                        <th>采集日期</th>
                        <th>分类条目</th>
                        <th>分类划分</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="collectionPSIentertdtext">华为业务群</td>
                          <td class="collectionPSIentertdtext">华为mate8青春版FD</td>
                          <td class="collectionPSIentertdtext">华为MATE8 64G</td>
                          <td class="collectionPSIentertdtext">华为mate8 黑色 黑色 黑色 黑色</td>
                          <td>
                            <input type="text" id="stock"/>
                          </td>
                          <td class="collectionPSIentertdtext">是</td>
                          <td class="collectionPSIentertdtext">1</td>
                          <td class="collectionPSIentertdtext">2017-05-06</td>
                          <td class="collectionPSIentertdtext">某某某某某某某某某某某某</td>
                          <td class="collectionPSIentertdtext">某某某某某某某某某某</td>
                      </tr>

                      <tr>
                          <td class="collectionPSIentertdtext">华为业务群</td>
                          <td class="collectionPSIentertdtext">华为mate8青春版FD</td>
                          <td class="collectionPSIentertdtext">华为MATE8 64G</td>
                          <td class="collectionPSIentertdtext">华为mate8 黑色 黑色 黑色 黑色 黑色 黑色 黑色 黑色 黑色 黑色</td>
                          <td>
                              <input type="text"/>
                          </td>
                          <td class="collectionPSIentertdtext">是</td>
                          <td class="collectionPSIentertdtext">2</td>
                          <td class="collectionPSIentertdtext">2017-06-06</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                      </tr>

                      <tr>
                          <td class="collectionPSIentertdtext">华为业务群</td>
                          <td class="collectionPSIentertdtext">华为mate8青春版FD</td>
                          <td class="collectionPSIentertdtext">华为MATE8 64G</td>
                          <td class="collectionPSIentertdtext">华为mate8 黑色 黑色 黑色 黑色</td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td class="collectionPSIentertdtext">是</td>
                          <td class="collectionPSIentertdtext">1</td>
                          <td class="collectionPSIentertdtext">2017-05-06</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                      </tr>

                      <tr>
                          <td class="collectionPSIentertdtext">华为业务群</td>
                          <td class="collectionPSIentertdtext">华为mate8青春版FD</td>
                          <td class="collectionPSIentertdtext">华为MATE8 64G</td>
                          <td class="collectionPSIentertdtext">华为mate8 黑色 黑色 黑色 黑色</td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td class="collectionPSIentertdtext">是</td>
                          <td class="collectionPSIentertdtext">1</td>
                          <td class="collectionPSIentertdtext">2017-05-06</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                      </tr>

                       <tr>
                          <td class="collectionPSIentertdtext">华为业务群</td>
                          <td class="collectionPSIentertdtext">华为mate8青春版FD</td>
                          <td class="collectionPSIentertdtext">华为MATE8 64G</td>
                          <td class="collectionPSIentertdtext">华为mate8 黑色 黑色 黑色 黑色</td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td class="collectionPSIentertdtext">是</td>
                          <td class="collectionPSIentertdtext">1</td>
                          <td class="collectionPSIentertdtext">2017-05-06</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                      </tr>

                      <tr>
                          <td class="collectionPSIentertdtext">华为业务群</td>
                          <td class="collectionPSIentertdtext">华为mate8青春版FD</td>
                          <td class="collectionPSIentertdtext">华为MATE8 64G</td>
                          <td class="collectionPSIentertdtext">华为mate8 黑色 黑色 黑色 黑色</td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td class="collectionPSIentertdtext">是</td>
                          <td class="collectionPSIentertdtext">1</td>
                          <td class="collectionPSIentertdtext">2017-05-06</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                      </tr>

                      <tr>
                          <td class="collectionPSIentertdtext">华为业务群</td>
                          <td class="collectionPSIentertdtext">华为mate8青春版FD</td>
                          <td class="collectionPSIentertdtext">华为MATE8 64G</td>
                          <td class="collectionPSIentertdtext">华为mate8 黑色 黑色 黑色 黑色</td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td class="collectionPSIentertdtext">是</td>
                          <td class="collectionPSIentertdtext">1</td>
                          <td class="collectionPSIentertdtext">2017-05-06</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                      </tr>

                      <tr>
                          <td class="collectionPSIentertdtext">华为业务群</td>
                          <td class="collectionPSIentertdtext">华为mate8青春版FD</td>
                          <td class="collectionPSIentertdtext">华为MATE8 64G</td>
                          <td class="collectionPSIentertdtext">华为mate8 黑色 黑色 黑色 黑色</td>
                          <td>
                            <input type="text"/>
                          </td>
                          <td class="collectionPSIentertdtext">是</td>
                          <td class="collectionPSIentertdtext">1</td>
                          <td class="collectionPSIentertdtext">2017-05-06</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                          <td class="collectionPSIentertdtext">某某某某</td>
                      </tr>
                  </tbody>
              </table>

          </div>

          <div class="collectionPSIentercontentbutton">
            <span>提交</span>
            <span>返回</span>
          </div>
      </div>
    `
    return temp;
}