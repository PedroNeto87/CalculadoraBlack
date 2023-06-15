function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}

document.querySelector('input[name="porc"]').addEventListener('click', function() {

    var valorAtual = parseFloat(document.querySelector('input[name="text1"]').value);
    var porcentagem = parseFloat(valorAtual) / 100;
    var resultado = porcentagem.toFixed(2);
    
    document.querySelector('input[name="text1"]').value = resultado;
});

function negateNumber() {
    var visor = document.querySelector('input[name="text1"]');
    var valorAtual = parseFloat(visor.value);
    
    var novoValor = -valorAtual;
    visor.value = novoValor;
  }