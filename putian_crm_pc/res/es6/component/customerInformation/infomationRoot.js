import * as Constant from '../../constant/constant.js';
import * as informartionEntry from './informationEntry/moudle/informartionEntry.js';
import * as informationPSI from './informationPSI/moudle/informationPSI.js';
import * as informationPSIEnter from './informationPSI/moudle/informationPSIEnter.js';


$(document).ready(function(){
    informartionEntry.load();
    informationPSI.PSIload();
    informationPSIEnter.PSIEnterload();
})