//$('#stress').hide();
//alert("hello");


$("#thermo_solution1_1").hide();
function thermo_solution1_1() {
  $("#thermo_solution1_1").fadeToggle("slow");
  if($("#thermo_answer1_1").is(':visible')) {
	  $("#thermo_answer1_1").hide();
  }
}
$("#thermo_answer1_1").hide();
function thermo_answer1_1() {
  $("#thermo_answer1_1").fadeToggle("slow");
  if($("#thermo_solution1_1").is(':visible')) {
	  $("#thermo_solution1_1").hide();
  }
}
