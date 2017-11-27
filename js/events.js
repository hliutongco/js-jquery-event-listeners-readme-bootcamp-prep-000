function getIt(){
  $("p").on("click", function(){
    alert("Hey!");
  })
}

function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty")
  })
}

function pressIt(){
  $("form").on("keydown", function(){
    if($('input').val()===71){
      alert("You are the G in OG");
    }
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
});
