$("h1").addClass("big-title margin-50")
$("h1").text("chandu")
$("h1").html("<em>chandu</em>")
$("a").attr("href","https://www.yahoo.com")
$("h1").click(function(){
  $("h1").css("color","brown")
})
function alertt(){
  alert("hello chandu");
}

// $("button").click("color",function(){
//   $("h1").css("color","purple")
// })
//
// $(document).keypress(function(event){
//   $("h1").text(event.key)
// })

$("h1").on("keypress",function(event){
  $("h1").css("color","purple")
})
$(document).on("mouseover",function(event){
  $("h1").css("color","purple")
})

$("h1").before("<button>new</button>")
$("h1").after("<button class='hello'>new1</button>")
$("h1").prepend("<button>new2</button>")
$("h1").append("<button>new3</button>")

$(".hello").remove();
$("button").on("click",function(){
  // $("h1").fadeToggle();
  // $("h1").slideToggle();
  // $("h1").toggle();
  $("h1").sildeUp().slideDown().animate({opacity:0.5});
})
// $("h1").show();
