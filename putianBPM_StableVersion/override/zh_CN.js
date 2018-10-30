$(function(){
	nui.bps = nui.bps || {};
	nui.bps.locale="zh_CN";
	if (bps.components.Component) {
		mini.copyTo(bps.components.Component.prototype, {
			get: {
				title: "领取策略",
				success:"领取成功",
				fail:"工作项不是待领取状态。",
				systemFail:"领取出错，请联系管理员。",
				cancelGet:"取消领取",
				cancelError:"取消领取出错，请联系管理员，",
				cancelSuccess:"取消领取成功",
				get:"领取"
			}
		});
	}
});

