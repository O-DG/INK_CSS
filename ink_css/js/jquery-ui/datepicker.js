// datepicker calendar
$(document).ready(function() {
	$(".datepicker").datepicker({
		closeText: "초기화",
		prevText: "이전달",
		nextText: "다음달",
		currentText: "오늘",
		monthNames: ["1월(JAN)","2월(FEB)","3월(MAR)","4월(APR)","5월(MAY)","6월(JUN)", "7월(JUL)","8월(AUG)","9월(SEP)","10월(OCT)","11월(NOV)","12월(DEC)"],
		monthNamesShort: ["1월","2월","3월","4월","5월","6월", "7월","8월","9월","10월","11월","12월"],
		dayNames: ["일","월","화","수","목","금","토"],
		dayNamesShort: ["일","월","화","수","목","금","토"],
		dayNamesMin: ["일","월","화","수","목","금","토"],
		changeMonth: true, // month 셀렉트박스 사용
		changeYear: true, // year 셀렉트박스 사용
		weekHeader: "Wk",
		dateFormat: "yy-mm-dd",
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "",
		showButtonPanel: true,
		// 취소시 초기화
		onClose: function (dateText, inst) {
			if ($(window.event.srcElement).hasClass('ui-datepicker-close')){
				document.getElementById(this.id).value = '';
			}
		},
	});
});
// 오늘 일자 선택
$.datepicker._gotoToday = function(id) {
	$(id).datepicker('setDate', new Date()).datepicker('hide').blur();
};
