import * as Constant from '../../../constant/constant.js';
import * as iframeUtils from '../../../utils/iframeUtils.js';
import * as visitDetails from './moudle/visitDetails.js'
$(document).ready(function () {
    window.receiveMsg = function (data) {
        iframeUtils.showSecondIframe();
        visitDetails.load(data);
    }
    $('#Close').on('click',function(){
        iframeUtils.hideSecondIframe();
    }); 
   
});