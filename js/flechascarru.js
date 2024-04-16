$(document).ready(function() {
  // Detectar el color de fondo del carrusel y agregar la clase correspondiente
  var $carousel = $('#myCarousel');
  var backgroundColor = $carousel.css('background-color');
  if (isDarkColor(backgroundColor)) {
    $carousel.addClass('dark-background');
  }
});

// Función para determinar si un color es oscuro o claro
function isDarkColor(color) {
  // Convertir el color de RGB a HSL para determinar la luminosidad
  var r, g, b;
  if (color.match(/^rgb/)) {
    var rgbValues = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    r = rgbValues[1];
    g = rgbValues[2];
    b = rgbValues[3];
  } else {
    var hex = color.match(/^#(\w{2})(\w{2})(\w{2})/);
    r = parseInt(hex[1], 16);
    g = parseInt(hex[2], 16);
    b = parseInt(hex[3], 16);
  }
  // Convertir a luminosidad relativa
  var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  // Si la luminosidad es menor que 0.5, el color se considera oscuro
  return luminance < 0.5;
}




