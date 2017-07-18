$(function () {
  $("#datepickerFrom").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());;
   $("#datepickerTO").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());;
});
