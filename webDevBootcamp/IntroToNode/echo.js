const newLocal = function(words, x) {
  Number(x);
  for (var i = 0; i < x; i++) {
    console.log(words);
  }
};
const echo = newLocal;

echo("Echo!!!", 10);
echo("Tater Tots", 3);
