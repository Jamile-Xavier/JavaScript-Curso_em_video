
function gerar() {
  var numero = document.getElementById('number')
  var resposta = document.getElementById('select')

  if (numero.value.length == 0) {
    alert('Por favor, digite um número!')
  } else {
    var n = Number(numero.value)
    var c = 1
    resposta.innerHTML = ''
    while (c <= 10) {
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `resposta${c}`
      resposta.appendChild(item)
      c++
    }
  }
}
