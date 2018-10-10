// © COPYRIGHT GEORGE EDMONDS 2018

function loading() {
  $("#page-loading").css("visibility", "visible");
  $("#grid-parent").css("visibility", "hidden");
  loadAPI();
  artPicker();
  getText();
}

var sourcelist = "the-huffington-post,bbc-news,cnn,the-new-york-times,fox-news,nbc-news,the-guardian-uk,the-telegraph,independent,metro,mirror"

function loadAPI () {
  $.getJSON('https://newsapi.org/v2/everything?sources=' + sourcelist + '&language=en&pageSize=100&apiKey=fcfbb627476e4bf39968dbe306b6c333', artPicker);
}

var artSource, artHeadline, artDate, artChosen;

function artPicker(result) {
  if (result) {
    var artNum = Math.floor(Math.random() * ((result.articles.length-1) - 0) + 0);
    artChosen = result.articles[artNum].url;
    if (artChosen == undefined) {
      loading();
    }
    proxyurl = "https://cors-anywhere.herokuapp.com/";
    artUrl = proxyurl + 'http://motyar.info/webscrapemaster/api/?url=' + artChosen + '&xpath=p'
    $.getJSON(artUrl, getText);
    artSource = result.articles[artNum].source.name
    artHeadline = result.articles[artNum].title
    artDate = result.articles[artNum].publishedAt
    artDate = moment(artDate).format('HH:mm:ss – MM/DD');
  }
}

var maxwordlimit = 10;
var minwordlimit = 4;

var firstWord,secondWord,thirdWord,forthWord;

var artWords = '';

function getText(result) {
  if (result) {
    for (var i = result.length - 1; i >= 0; i--) {
      delete result[i].class;
      delete result[i].html;
      result[i].text.replace(/<style.*<\/style>/g, '');
      var tmp = document.createElement("DIV");
      tmp.innerHTML = result[i].text;
      result[i].text = tmp.textContent || tmp.innerText;
      result[i].text = result[i].text.replace(/[^\w- ']/g,'');
      result[i].text = result[i].text.replace(/\d\d(-)/g,'');
      result[i].text = result[i].text.replace(/[0-9]/g, '');
      result[i].text = result[i].text.replace(/\s\s+/g, ' ');
      artWords += result[i].text + ' ';
    }

    artWords = artWords.split(' ')

    if (artWords.length < 52) {
      loading();
    }

    else if (artWords[52-1] != undefined) {
      for (var j = artWords.length - 1; j >= 0; j--) {
        var chars = artWords[j].split('');
        if (chars.length > maxwordlimit || chars.length < minwordlimit ) {
          artWords.splice(j, 1)
        }
      }

      $("#word1").html(artWords[52-1] + '.');
      $("#word2").html(artWords[21-1] + '.');
      $("#word3").html(artWords[45-1] + '.');
      $("#word4").html(artWords[39-1] + '.');

      $("#source").html(artSource);
      $("#headline").html('“ ' + artHeadline + ' ”');
      $("#dateandtime").html(artDate);

      scaler();

      showPage();
    }
  }

}

function showPage() {
  $("#page-loading").css("visibility", "hidden");
  $("#grid-parent").css("visibility", "visible");
}

$(window).on('load', function () {
  loading();
});

$(document).ready(function() {
  $("#news_icon").click(function () {
    window.open(artChosen, '_blank');
  });
  $("#reload_icon").click(function () {
    loading();
  });
});

//$(document).click(function() {
//  loading();
//});

$(document).keypress(function(event){

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		loading();
	}

});
