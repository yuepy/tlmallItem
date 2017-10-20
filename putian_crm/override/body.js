var YSPCustom = YSPCustom || {};
YSPCustom.getTop = function() {
  var testedFrame = window;
  try {
    while (testedFrame.parent != null) {
      try {
        if (testedFrame.frameElement && testedFrame.frameElement.dataset.browser) {
          break;
        } else {
          testedFrame = testedFrame.parent;
        }
      } catch (ex1) {}
    }
  } catch (ex2) {}
  return testedFrame;
}
var formObj = document.forms["RedirectForHostClone"];
if(formObj){
   formObj.SWEHo.value=YSPCustom.getTop().location.hostname;
   formObj.submit();
}
