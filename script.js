function verificar() {
  let data = new Date()
  let anoAtual = data.getFullYear()
  let formAno = document.getElementById('txtNas')
  let result = document.querySelector('div#result')

  if (formAno.value.length == 0 || Number(formAno.value) > anoAtual) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let formSex = document.getElementsByName('radSex')
    let idade = anoAtual - Number(formAno.value)
    let genero = ''
    let img = document.createElement('img')
    img.getAttribute('id', 'foto')

    if (formSex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 12) {
        //criança
        img.setAttribute('src', 'menino-crianca.png')
      } else if (idade < 18) {
        //jovem
        img.setAttribute('src', 'menino-jovem.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'homem-adulto.png')
      } else {
        //idoso
        img.setAttribute('src', 'homem-velho.png')
      }
    } else if (formSex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 12) {
        //criança
        img.setAttribute('src', 'menina-crianca.png')
      } else if (idade < 18) {
        //jovem
        img.setAttribute('src', 'menina-jovem.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'mulher-adulta.png')
      } else {
        //idoso
        img.setAttribute('src', 'mulher-velha.png')
      }
    }
    result.style.textAlign = 'center'
    result.innerHTML = `Verificado: ${genero} com ${idade} anos.<br>`
    result.appendChild(img)
    img.style.paddingTop = '1.3rem'
  }
}
