/* Variável que armazena os dados da distribuidora */
const branches = [
  { id: "1", name: "SP", invoicing: 67836.43, percents: 0 },
  { id: "2", name: "RJ", invoicing: 36678.66, percents: 0 },
  { id: "3", name: "MG", invoicing: 29229.88, percents: 0 },
  { id: "4", name: "ES", invoicing: 27165.48, percents: 0 },
  { id: "5", name: "Outros", invoicing: 19849.53, percents: 0 },
];
/* Variável que busca a seção que os resultados serão exibidos */
const resultSection = document.querySelector(".main__container__results");

/* Função que calcula a soma total das distribuidoras */
function getTotalValue(data) {
  /* Variável que armazena o valor total */
  let totalValue = 0;
  /* Laço de repetição que soma o valor da receita de cada 
  distribuidora e soma com o valor já armazenado em valor total */
  for (let i = 0; i < data.length; i++) {
    totalValue += data[i].invoicing;
  }
  /* Chama a função de calcular a porcentagem enviando o valor total e os dados
  das distribuidoras */
  calcPercents(totalValue, data);
}

function calcPercents(value, data) {
  for (let i = 0; i < data.length; i++) {
    data[i].percents = (data[i].invoicing / value) * 100;
  }
  showDataOnScreen();
}

function showDataOnScreen() {
  resultSection.innerHTML = branches
    .map(
      (item) =>
        `<article key="${item.id}" class="main__container__results_item">
          <h2 class="main__container__results__item__title">Resultado da distribuidora: ${
            item.name
          }</h2>
          <p class="main__container__results__item__percents">
           R$ ${item.invoicing} - ${item.percents.toFixed(2)}%
          </p>
          </article>
         `
    )
    .join("");
}

getTotalValue(branches);
