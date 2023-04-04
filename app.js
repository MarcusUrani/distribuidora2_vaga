const branches = [
  { id: "1", name: "SP", invoicing: 67836.43, percents: 0 },
  { id: "2", name: "RJ", invoicing: 36678.66, percents: 0 },
  { id: "3", name: "MG", invoicing: 29229.88, percents: 0 },
  { id: "4", name: "ES", invoicing: 27165.48, percents: 0 },
  { id: "5", name: "Outros", invoicing: 19849.53, percents: 0 },
];

function getTotalValue(data) {
  let totalValue = 0;
  for (let i = 0; i < data.length; i++) {
    totalValue += data[i].invoicing;
  }
  calcPercents(totalValue, data);
}

function calcPercents(value, data) {
  for (let i = 0; i < data.length; i++) {
    data[i].percents = (data[i].invoicing / value) * 100;
  }
}

getTotalValue(branches);
