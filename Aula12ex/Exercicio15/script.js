function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.lenght === 0 || Number(fano.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './assets/bebe_masculino.png')
      } else if (idade < 21) {
        img.setAttribute('src', './assets/jovem_masculino.png')
      } else if (idade < 50) {
        img.setAttribute('src', './assets/adulto_masculino.png')
      } else {
        img.setAttribute('src', './assets/idoso_masculino.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './assets/bebe_feminino.png')
      } else if (idade < 21) {
        img.setAttribute('src', './assets/jovem_feminino.png')
      } else if (idade < 50) {
        img.setAttribute('src', './assets/adulto_feminino.png')
      } else {
        img.setAttribute('src', './assets/idoso_feminino.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}