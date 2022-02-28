

for (let i = 0; i< 10000; i++) {
  task(i)
}



function task(i) {
  setTimeout(function() {
      playSound();
      // delai de 10 a 100 secondes
  }, Math.floor((Math.random() * 100000) + 10000) * i);
}


function playSound(ping) {
  var ping = new Audio("./assets/discordping.mp3");
  ping.play()
}
