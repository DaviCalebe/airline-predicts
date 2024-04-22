function atualizarImagemGrafico() {

  var airline = document.querySelector('.Airline select').value;
  var flight = document.querySelector('.Flight select').value;
  var airportFrom = document.querySelector('.AirportFrom select').value;
  var airportTo = document.querySelector('.AirportTo select').value;
  var dayOfWeek = document.querySelector('.DayOfWeek select').value;
  var time = document.querySelector('.Time select').value;
  
  var imagemSrc = '';
  var imagemSrc2 = '';
  var imagemSrc3 = '';
  var imagemSrc4 = '';

  // Verificar as condições para exibir cada gráfico
  if ((airline === 'opcao1' && flight === 'opcao2') || (airline === 'opcao1' && airportFrom === 'opcao2') || (airline === 'opcao1' && airportTo === 'opcao2') ||
  (airline === 'opcao1' && dayOfWeek === 'opcao2') || (airline === 'opcao1' && time === 'opcao2')) {     
      imagemSrc = './imgs/grafico1.png'; imagemSrc2 = './imgs/grafico2.png'; imagemSrc3 = './imgs/grafico3.png'; imagemSrc4 = './imgs/grafico4.png';

  } else if ((flight === 'opcao1' && airline === 'opcao2') || (flight === 'opcao1' && airportFrom === 'opcao2') || (flight === 'opcao1' && airportTo === 'opcao2') ||
  (flight === 'opcao1' && dayOfWeek === 'opcao2') || (flight === 'opcao1' && time === 'opcao2')) {
      imagemSrc = './imgs/grafico2.png'; imagemSrc2 = './imgs/grafico3.png'; imagemSrc3 = './imgs/grafico4.png'; imagemSrc4 = './imgs/grafico5.png';

  } else if ((airportFrom === 'opcao1' && airline === 'opcao2') || (airportFrom === 'opcao1' && flight === 'opcao2') || (airportFrom === 'opcao1' && airportTo === 'opcao2') ||
  (airportFrom === 'opcao1' && dayOfWeek === 'opcao2') || (airportFrom === 'opcao1' && time === 'opcao2')) { 
    imagemSrc = './imgs/grafico3.png'; imagemSrc2 = './imgs/grafico4.png'; imagemSrc3 = './imgs/grafico5.png'; imagemSrc4 = './imgs/grafico6.png';

  } else if ((airportTo === 'opcao1' && airline === 'opcao2') || (airportTo === 'opcao1' && flight === 'opcao2') || (airportTo  === 'opcao1' && airportFrom === 'opcao2') ||
  (airportTo === 'opcao1' && dayOfWeek === 'opcao2') || (airportTo === 'opcao1' && time === 'opcao2')) {
      imagemSrc = './imgs/grafico4.png'; imagemSrc2 = './imgs/grafico5.png'; imagemSrc3 = './imgs/grafico6.png'; imagemSrc4 = './imgs/grafico7.png';

  } else if ((dayOfWeek === 'opcao1' && airline === 'opcao2') || (dayOfWeek === 'opcao1' && flight === 'opcao2') || (dayOfWeek  === 'opcao1' && airportFrom === 'opcao2') ||
  ( dayOfWeek === 'opcao1' && airportTo === 'opcao2') || (dayOfWeek === 'opcao1' && time === 'opcao2')) {
      imagemSrc = './imgs/grafico5.png'; imagemSrc2 = './imgs/grafico6.png'; imagemSrc3 = './imgs/grafico7.png'; imagemSrc4 = './imgs/grafico8.png';

  } else if ((time === 'opcao1' && airline === 'opcao2') || (time === 'opcao1' && flight === 'opcao2') || (time === 'opcao1' && airportFrom === 'opcao2') ||
  ( time === 'opcao1' && airportTo === 'opcao2') || ( time === 'opcao1' && dayOfWeek === 'opcao2')) {
      imagemSrc = './imgs/grafico6.png'; imagemSrc2 = './imgs/grafico7.png'; imagemSrc3 = './imgs/grafico8.png'; imagemSrc4 = './imgs/grafico1.png'; 

  } else if ((airline === 'opcao1') || (time === 'opcao1') || (flight === 'opcao1') || (airportFrom === 'opcao1') || ( airportTo === 'opcao1') || (dayOfWeek === 'opcao1')) {
      imagemSrc = './imgs/grafico7.png'; imagemSrc2 = './imgs/grafico8.png'; imagemSrc3 = './imgs/grafico1.png'; imagemSrc4 = './imgs/grafico2.png';

  } else if ((airline === 'opcao2') || (time === 'opcao2') || (flight === 'opcao2') || (airportFrom === 'opcao2') || ( airportTo === 'opcao2') || (dayOfWeek === 'opcao2')) {
    imagemSrc = './imgs/grafico8.png'; imagemSrc2 = './imgs/grafico1.png'; imagemSrc3 = './imgs/grafico2.png'; imagemSrc4 = './imgs/grafico3.png';

  } else {
    imagemSrc = './imgs/aviaoFiltro.png'; imagemSrc2 = './imgs/aviaoFiltro.png'; imagemSrc3 = './imgs/aviaoFiltro.png'; imagemSrc4 = './imgs/aviaoFiltro.png';
  }
  // Atualizar a src da imagem do gráfico
  document.getElementById('imagemGrafico').src = imagemSrc;
  document.getElementById('imagemGrafico2').src = imagemSrc2;
  document.getElementById('imagemGrafico3').src = imagemSrc3;
  document.getElementById('imagemGrafico4').src = imagemSrc4;
}

// Adicionar event listener para os selects
var selects = document.querySelectorAll('select');
selects.forEach(function(select) {
  select.addEventListener('change', function() {
      // Chamar a função para atualizar o gráfico
      atualizarImagemGrafico();
  });
});
atualizarImagemGrafico();


function resetarSelecoes() {
  var selects = document.querySelectorAll('select');
  selects.forEach(function(select) {
      select.value = 'opcao0';
  });
  atualizarImagemGrafico();
}
document.getElementById('botaoResete').addEventListener('click', function() {
  resetarSelecoes();
});