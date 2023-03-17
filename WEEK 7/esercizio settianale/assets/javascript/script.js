fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0OGJjY2Y4MWI0MjAwMTM5YjJkMGMiLCJpYXQiOjE2NzkwNjgxMDgsImV4cCI6MTY4MDI3NzcwOH0.S-H2YmWq6xkl2GQR0QI3p7vTzZcHv8m6j9Yjilgr4Co"
    }
})

const myShopping = function () {

    fetch(myApi, {
        method: "GET",
        headers: {
            Authorization: myAuth,
        },
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((ev) => {
            console.log(ev);
            ev.forEach((shopElement) => {
                console.log(shopElement);
                let shop = document.getElementById("shopList");
                shop.innerHTML += `
            <div class="card w-25">
            <img src="${shopElement.imageUrl}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${shopElement.name}</h5>
              <p class="card-text">${shopElement.description}</p>
              <p>${shopElement.price} €</p>
              <a href="details.html" class="btn btn-primary">details</a>
            </div>
          </div>
                `;
            });
            console.log;
        });
};
myShopping();