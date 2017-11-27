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
  $("#typing").on("keydown", function(event){
    if(event.which===71){
      alert("You are the G in OG")
      return
    }
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
});
