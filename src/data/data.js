const endpoint =
  'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCCwUFSzuHINh9KGs21oAAHH7Ecf7Ay1FI';

let googleFonts = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => (googleFonts = data.items));
