const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const TOKEN =
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE3NzI0YzFiOWIwMTAwMTM3YmUyMWEiLCJpYXQiOjE2NzkyNTgxODgsImV4cCI6MTY4MDQ2Nzc4OH0.BeYd3VtveDiP4EKTHC6yEWpDYHlPPS0zO_ZHAj9C1ik"

let productId = new URLSearchParams(window.location.search).get("productId");

const getProduct = async function () {
  try {
    let response = await fetch(API_URL + productId, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    });
    if (response.ok) {
      let prod = await response.json();
      console.log(prod);
      let rowRef = document.querySelector("main .row");
      console.log(rowRef);
      rowRef.innerHTML = `<div class="col col-8 mt-5 m-auto">
      <div class="card mb-4 shadow-sm">
      <img src="${prod.imageUrl}" alt="${prod.name} image">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">
            Brand: ${prod.brand}<br>
            Description:${prod.description}<br>
            ID: ${prod._id}
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="./index.html" class="btn btn-outline-dark">Go back</a>
          <a class="btn btn-outline-dark">Add to cart</a>
          </div>
          </div>
        </div>
      </div>
    </div>`;
    } else {
      return new Error("Error while loadig product details");
    }
  } catch (error) {
    console.log(error);
  }
};

getProduct();
