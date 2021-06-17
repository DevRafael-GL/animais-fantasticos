export default function fetchBitcoin(url, target) {
  fetch(url).then((response) => {
    response
      .json()
      .then((json) => {
        const precoBtc = document.querySelector(target);
        precoBtc.innerText = (100 / json.BRL.sell).toFixed(4);
      })
      .catch((erro) => {
        console.log(erro);
      });
  });
}
