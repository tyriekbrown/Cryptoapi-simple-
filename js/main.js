// user can input

// user clicks button search api for photo of user date

  // $("button").on("click", function(){
  //   var date = $("#date").val();
  //   var source = "https://api.nasa.gov/planetary/apod?api_key=G1HURmLK4MdyhAPtU0Cze9d9asWjfNuTy2WRpYsW&date=" + date;
  //   // alert(mez);
  //   $.get(source, function(res){
  //     $("img").attr("src",res.hdurl);
  //   });
  // });


$(document).ready(function(){

  $("form").on("submit", function(e){
    e.preventDefault();
    var coin = $('#coin').val()
    var apiURL = "https://api.cryptonator.com/api/ticker/" + coin + "-usd";


    $.ajax({
      url: apiURL,
      // Work with the response
      success: function(response) {
        // console.log( response ); // server response
        $('#choosenCoin').text(coin)
        $('#origin').text(response.ticker.price)
        console.log(response.ticker.price)
          // console.log(i.facility)
      },
      error: function(r){
        console.log(r)
      }
    });
  });




});

// $('ul').append('<li>'+i.facility + (", ") + i.city + (", ") + i.state +'</li>')
