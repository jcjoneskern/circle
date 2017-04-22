var circle = document.getElementById('circle');
var text = document.getElementById('text');

function getRad() {
  var value = parseInt(document.getElementById('slider').value);
  var radius = (75*value)/16777215;
  var hex = value.toString(16);

  function areaCalc() {
    var area = Math.PI * radius * radius;

    if(value === 0) {
      text.innerText = "The area of the circle is " + area.toFixed() + " units =(";
      circle.style.border = "none";
    } else if (value === 16777215) {
      text.innerText = "The area of the circle is " + area.toFixed() + " units";
      circle.style.border = "1px solid #000";
    } else {
      text.innerText = "The area of the circle is " + area.toFixed() + " units";
      circle.style.border = "none";
    }
  }

  circle.style.height = radius + "vh";
  circle.style.width = circle.style.height;
  circle.style.backgroundColor = "#" + hex;
  areaCalc();
}


document.onload = getRad();
