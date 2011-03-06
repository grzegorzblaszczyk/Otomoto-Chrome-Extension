function startsWithAnyOf(string, prefixes) {
  for (var i in prefixes) {
    if (string.match("^" + prefixes[i])) {
      return true;
    }
  }
}

// ##################################################

//Unwanted makes (for testing purposes it is hardcoded now):

var unwantedMakes = [
"Citroen","Citroën",
"Fiat", 
"Peugeot",
"Renault",
"Skoda", "Škoda"
];

var adverts = $("div#mainRightOM div.boxOM");
adverts.each(function(i, advert){
	$=jQuery;
	carMake = new String($("a.otoLink span", advert)[0].innerText);
  
  if (startsWithAnyOf(carMake, unwantedMakes)) {
    adverts[i].innerHTML = '<div class="boxHeadOM">car make ' + carMake.split(" ", 1) + ' has been disabled :D</div>';
  }
});
