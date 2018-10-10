// © COPYRIGHT GEORGE EDMONDS 2018

var contentWidth = 1024;
var contentHeight = 640;

function scaler() {
  var availableWidth = $( window ).width();
  var availableHeight = $( window ).height();

  var scale = Math.min(
    availableWidth / contentWidth,
    availableHeight / contentHeight
  );

  var gapscale = availableWidth / contentWidth,

  fontscale = Math.max(Math.min(scale, 1.5), 0.5);
  linescale = Math.max(Math.min(scale, 1.5), 1.3);
  scale = Math.max(Math.min(scale, 1.6), 0.35);

   $("h3").css("fontSize", 20*fontscale + "px");
   $("h2").css("fontSize", 20*fontscale + "px");
   $("h1").css("fontSize", 48*fontscale + "px");
   $("h4").css("fontSize", 25*fontscale + "px");
   $("h5").css("fontSize", 15*fontscale + "px");
   $("h6").css("fontSize", 15*fontscale + "px");
   $("h7").css("fontSize", 15*fontscale + "px");

   $("#number").css("margin-top", 3.5*fontscale + "px");
   $("#number").css("margin-left", 30*fontscale + "px");

   $("h5").css("line-height", 1 * linescale + "px");

   $("#word-container1").css("margin-bottom", 30*fontscale + "px");
   $("#word-container2").css("margin-bottom", 30*fontscale + "px");
   $("#word-container3").css("margin-bottom", 30*fontscale + "px");

   $("#source").css("margin-top", 20*fontscale + "px");
   $("#headline").css("margin-top", 12.5*fontscale + "px");
   $("#dateandtime").css("margin-top", 12.5*fontscale + "px");


    $("#word-container1").css("border-bottom", 3*fontscale + "px" + " solid" + " black");
    $("#word-container2").css("border-bottom", 6*fontscale + "px" + " solid" + " black");
    $("#word-container3").css("border-bottom", 10*fontscale + "px" + " solid" + " black");
    $("#word-container4").css("border-bottom", 13*fontscale + "px" + " solid" + " black");

    $("#word-container1").css("padding-bottom", 15*fontscale + "px");
    $("#word-container2").css("padding-bottom", 15*fontscale + "px");
    $("#word-container3").css("padding-bottom", 15*fontscale + "px");
    $("#word-container4").css("padding-bottom", 15*fontscale + "px");

   $(".grid-container").css("margin", 76*scale + "px");
   $(".grid-container").css("grid-template-columns", 410*scale + "px " + 315*scale + "px");
   $(".grid-container").css("grid-gap", 127*scale + "px " + 150*gapscale + "px");

   $("#news_icon").css("width", 60*fontscale + "px");
   $("#reload_icon").css("width", 30*fontscale + "px");

   var reloadmargin = 30*fontscale

   $("#reload_icon").css("margin-top", reloadmargin + "px");

   var infomargin = $("#words").height() - $("#info-container").height() - $("#reload_icon").height() - reloadmargin;
   $("#info-container").css("margin-top", infomargin + "px");

   $('#loading-animation').width(100*fontscale);
   $('#loading-animatione').height(100*fontscale);

}

$(window).on('load', function () {
  scaler();
  console.log($("#reload_icon").height())
});

$( window ).resize(function() {
  scaler();
});
