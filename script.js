
$( document ).ready(function() {
   $('#word-result-box').hide();
});

$("#search-btn").click(function(event)
           {
            event.preventDefault();
            dictionaryApi();
            $('#word-result-box').show();
           });



function dictionaryApi(){
    //get the word
    let seachVal = document.getElementById("inputWord").value;

    $.ajax({
     type: "POST",
     url: "curl-function.php",
     data: { 'api_url': "https://api.dictionaryapi.dev/api/v2/entries/en/",
             'word' : seachVal,
           }, // serializes the form's elements.
     success: function(data)
     {
         let jsonData = JSON.parse(data);
         console.log(jsonData);
         $('#word-searched').text(jsonData[0].word);
         $('#word-definition').text(jsonData[0].meanings[0].definitions[0].definition);

     }
   });
}
