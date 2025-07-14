// index.js
const billInput = { value: 0 };
const tipInput = { value: 0 };
const totalSpan = { innerText: '' };

function calculateTotal(bill, tip) {
  const totalValue = bill * (1 + tip / 100);
  return totalValue.toFixed(2);
}

// Event listener'ı sadece uygulama çalışırken ekle
if (typeof window !== 'undefined') {
  const btnEl = document.getElementById("calculate");
  const billInputEl = document.getElementById("bill");
  const tipInputEl = document.getElementById("tip");
  const totalSpanEl = document.getElementById("total");

  btnEl.addEventListener("click", () => {
    const billValue = Number(billInputEl.value);
    const tipValue = Number(tipInputEl.value);
    totalSpanEl.innerText = calculateTotal(billValue, tipValue);
  });
}

module.exports = calculateTotal;