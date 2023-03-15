const booksRow = document.getElementById("booksRow");
const sideChart = document.getElementById("sideChart");
const chartClear = document.getElementById("chart-clear");

let delCard = (card) => card.remove();

chartClear.addEventListener("click", () => {
  localStorage.clear();
  sideChart.innerText = "";
});

function makeBookCard(fetchData) {
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "card");

  let newCardImg = document.createElement("img");
  newCardImg.setAttribute("class", "card-img-top");
  newCardImg.setAttribute("src", fetchData.img);

  let newCardBody = document.createElement("div");
  newCardBody.setAttribute("class", "card-body");

  let newCardTitle = document.createElement("div"); // CREO E DEFINISCO GLI ELEMENTI HTML CHE RIEMPIRO' CON LA FETCH
  newCardTitle.setAttribute("class", "card-title fw-bold");
  newCardTitle.innerText = fetchData.title;

  let newCardText = document.createElement("div");
  newCardText.setAttribute("class", "card-text fw-bold");
  newCardText.innerText = fetchData.price + " € ";

  let newDelCard = document.createElement("button");
  newDelCard.innerText = "SCARTA";
  newDelCard.addEventListener("click", () => {
    newCard.remove();
  });

  let chartBtn = document.createElement("button"); // BOTTONE COMPRA ORA
  chartBtn.innerText = "COMPRA ORA";
  chartBtn.addEventListener("click", () => {
    let spanChart = document.createElement("span");
    let chartBook = { title: fetchData.title, price: fetchData.price };
    spanChart.innerText = chartBook.title + " - " + chartBook.price + "€"; // CREO ED INSERISCO NEL CARRELLO NEL CARRELLO
    localStorage.setItem(`book-${fetchData.asin}`, JSON.stringify(chartBook));
    let removeChartBook = document.createElement("button"); // BOTTONE RIMUOVI DAL CARRELLO
    removeChartBook.innerText = "RIMUOVI";
    removeChartBook.addEventListener("click", () => {
      localStorage.removeItem(`book-${fetchData.asin}`);
      spanChart.remove();
    });
    spanChart.appendChild(removeChartBook);
    sideChart.appendChild(spanChart);
  });

  newCardBody.appendChild(newCardTitle);
  newCardBody.appendChild(newCardText);
  newCardBody.appendChild(newDelCard);
  newCardBody.appendChild(chartBtn);

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardBody);

  booksRow.appendChild(newCard);
}

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    return response.json();
  })
  .then((payload) => {
    payload.forEach((book) => {
      //PER OGNI ELEMENTO DELLA FETCH PARTE L'INSERIMENTO VIA makeBookCard();
      makeBookCard(book);
    });
  })
  .catch((err) => {
    console.log(err);
  });