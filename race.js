const buton = document.getElementsByTagName("button");
const horse1 = document.querySelector(".horseOne");
const horse2 = document.querySelector(".horseTwo");
const horse3 = document.querySelector(".horseThree");
const textArea = document.querySelector("body");
var finish1 = document.querySelector(".horses").clientWidth;
var finish = finish1 - (finish1 * 15) / 100;

buton[0].addEventListener("click", run1);

function run1(event) {
  if (event.target.className === "strt") {
    var dist1 = 0;
    var dist2 = 0;
    var dist3 = 0;
    var algo = setInterval(() => {
      var random1 = Math.random() * 50;
      var random2 = Math.random() * 50;
      var random3 = Math.random() * 50;
      dist1 = dist1 + random1;
      dist2 = dist2 + random2;
      dist3 = dist3 + random3;
      horse1.style.marginLeft = dist1 + "px";
      horse2.style.marginLeft = dist2 + "px";
      horse3.style.marginLeft = dist3 + "px";
      if (dist1 >= finish) {
        reset("horse1", algo);
      }
      if (dist2 >= finish) {
        reset("horse2", algo);
      }
      if (dist3 >= finish) {
        reset("horse3", algo);
      }
    }, 100);
    function reset(horse, algo) {
      var winnerText = document.createElement("h1");
      winnerText.appendChild(document.createTextNode("winner is:" + horse));
      textArea.appendChild(winnerText);
      buton[0].addEventListener("click", run2);

      function run2(event) {
        if (event.target.className === "strt") {
          winnerText.remove();
        }
      }

      dist1 = 0;
      dist2 = 0;
      dist3 = 0;

      horse1.style.marginLeft = 0;
      horse2.style.marginLeft = 0;
      horse3.style.marginLeft = 0;

      clearInterval(algo);
    }
  }
}
