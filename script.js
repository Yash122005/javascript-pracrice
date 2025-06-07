var rec = document.querySelector("#center");

rec.addEventListener("mousemove", function(event) {
   var x = event.clientX;
   var y = event.clientY;
    var rect = rec.getBoundingClientRect();
    var offsetX = x - rect.left;
    var offsetY = y - rect.top;
    var width = rect.width;
    var ratio = offsetX / width;
    var rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

    if (offsetX < width / 2) {
        rec.style.backgroundColor = rgb(Math.floor(255 * ratio), 0, 0);
    }else {
        rec.style.backgroundColor = rgb(0, 0, Math.floor(255 * (1 - ratio)));
    }
});
