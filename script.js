$(document).ready(function(){

    $("#myCarousel").carousel();
      

    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
    $(".item5").click(function(){
      $("#myCarousel").carousel(4);
    });



  });