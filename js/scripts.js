$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var wordInput = $("input#word").val().toLowerCase();
    var word = wordInput.replace(/[^a-z]/g, '');


    // var wordsplit = word.split("");
    // var wordclone = word.split("").reverse();
    //
    // for (index = 0; index < word.length; index += 1) {
    //   if (wordsplit[index] === wordclone[index]) {
    //     $("#result").text(word + " is a palendrome.")
    //   } else {
    //     $("#result").text(word + " is not a palendrome.")
    //   }
    // }



    var wordArray = word.split('');

    var ispalindrome = true;
    for (index = 0; index < wordArray.length; index += 1) {
      if (wordArray[index] !== wordArray[wordArray.length - index - 1]) {
        ispalindrome = false;
        // alert(wordArray[index] + " - " + wordArray[wordArray.length - index - 1]);
      }
    }
    if (ispalindrome) {
      $("#result").text(wordInput + " is a palendrome.")
    } else {
      $("#result").text(wordInput + " is not a palendrome.")
    }


  });
});
