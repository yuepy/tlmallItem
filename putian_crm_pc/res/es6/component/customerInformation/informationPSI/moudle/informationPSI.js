import * as Constant from '../../../../constant/constant.js';
import * as iframeUtils from '../../../../utils/iframeUtils.js';

export var PSIload = function(){
    doAction ();
}
function doAction (){
    $('#messagePSI').html(render());
}
function render(){
    let temp = `
        <div class="messagePSItop">
          <div>
            <a href="./informationEntry.html" class="btn"><i class="messagePSItop-icon"></i></a>
            <span class="messagePSItop-text">信息录入</span>
            <span class="messagePSItop-point"></span>
            <span class="messagePSItop-text">客户PSI采集</span>  
          </div>
          <div>
              <i></i>
              <input type="text" name="search" placeholder="请输入搜索内容"/>
              <button>搜索</button>
          </div>
            
      </div>
      <div class="messagePSIcontent">
          <div class="messagePSIcontentedit">
              <a href="" class="btn"><i class="messagePSIcontentedit-icon"></i><span>编辑</span></a>
          </div>
          <div class="messagePSIcontentborder">
            <div class="messagePSIcontentborder-content">
                <div class="messagePSIcontentborder-content-top">
                    <span class="messagePSIcontentborder-content-top-span">FL234096240534</span>
                    <span class="messagePSIcontentborder-content-top-spanlast">
                        <span>上次更新：</span><span>2017-04-06</span>
                    </span>
                </div>
                <div class="messagePSIcontentborder-content-bottom">
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">客户名称</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">北京分公司</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">客户简称</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">北京办事处</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">分类条目</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">某某某某某</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">分类划分</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">某某某某某</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">是否需要更新</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">李东森</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <a href="customerPSICollectionEnter.html"><span class="messagePSIcontentborder-content-bottom-textspan">录入</span></a>
                    </div>
                </div>
            </div>
            <div class="messagePSIcontentborder-content">
                <div class="messagePSIcontentborder-content-top">
                    <span class="messagePSIcontentborder-content-top-span">FL234096240566</span>
                    <span class="messagePSIcontentborder-content-top-spanlast">
                        <span>上次更新：</span><span>2017-06-06</span>
                    </span>
                </div>
                <div class="messagePSIcontentborder-content-bottom">
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">客户名称</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">上海公司</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">客户简称</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">上海办事处</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">分类条目</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">某某某某某</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">分类划分</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">某某某某某</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <div class="messagePSIcontentborder-content-bottom-text">是否需要更新</div>
                        <div class="messagePSIcontentborder-content-bottom-xm-text">李东森</div>
                    </div>
                    <div class="col-sm-2 col-md-2">
                        <span class="messagePSIcontentborder-content-bottom-textspan">录入</span>
                    </div>
                </div>
            </div>
          </div>
      </div>    
    `
    return temp;
}