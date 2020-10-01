function sort() {
  var quantity = document.getElementById('quantity');
  quantity = quantity.value;
  var initialSort = document.getElementById('initial');
  initialSort = initialSort.value;
  var finalSort = document.getElementById('final');
  finalSort = finalSort.value;

  var numeros = [];
  var cont = 0;

  while (cont < quantity) {
    var sorteia = Math.round(Math.random() * finalSort);
    if (sorteia != numeros[cont - 1] && sorteia > initialSort) {
      var adicionar = numeros.push(sorteia);
      cont++;
    } else {
      cont = cont;
    }
  }
  numeros.sort(function (a, b) {
    return a - b;
  });
  var generate = document.createElement('ul');
  var numerosSort = document.createElement('li');
  var container = document.getElementById('container');
  container.appendChild(generate);
  for (var i = 0; i <= numeros.length - 1; i++) {
    if (i == numeros.length - 1) {
      var numbers = document.createTextNode(numeros[i]);
      numerosSort.appendChild(numbers);
      generate.appendChild(numerosSort);
    } else {
      var numbers = document.createTextNode(numeros[i] + '-');
      numerosSort.appendChild(numbers);
      generate.appendChild(numerosSort);
    }
  }
}
