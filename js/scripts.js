$(document).ready(function(){
  $(".numbers").submit(function(event) {
    event.preventDefault();
    var firstnumber = $("input#firstnumber").val();
    var secondnumber = $("input#secondnumber").val();

    if ((secondnumber < 0) || (0 > firstnumber)) {
      $("#output").append("negative numbers");
    } else if (secondnumber < firstnumber){
      $("#output").append("count by number is larger than the count to numbers");
    } else if (/[^0-9]/g) {
      $("#output").append("Not a number");
    } else {
      for (var total = 1; total <= firstnumber/secondnumber; total += 1) {
        number = total * secondnumber;
        $("#output").append(number + " ");
      }
    }

    // for (var number = secondnumber; number <= firstnumber; number += secondnumber) {
    //   number = total * secondnumber;
    //   $("#output").append(number + " ");
    // }

    $(".output").show();
    $(".numbers").hide();
  })
})
