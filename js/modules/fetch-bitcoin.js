export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => {
  response.json()
  .then(json => {
    const precoBtc = document.querySelector('.btc-preco')
    precoBtc.innerText = (100 / json.BRL.sell).toFixed(4)
  }).catch(erro => {
    console.log(erro);
  })
})
}


