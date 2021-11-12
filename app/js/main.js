
getData = () => {
    fetch('../data.json')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw Error(alert("Error of HTTP: " + response.status));
            }
        })
        .then(fetchData => {
            getItems = fetchData;
            
            showData();

        })
        .catch(error => {
            console.log(error);
        })
};


getData();

const showData = () => {
    const renderInHtml = getItems.filter(data => data.id >= 0).map(data => {
        return `
        <a class="items-wrapper__card-link" href="">
             <div class="items-wrapper__card">
               <img class="items-wrapper__image" src="${data.img}" alt="">
               <div class="items-wrapper__title pl15">${data.name}</div>
               <div class="items-wrapper__description pl15">${data.description}</div>
               <div class="items-wrapper__price pl15">Цена: ${data.price}грн</div>
             </div>
        </a>`

    }).join("");
    document.querySelector("#cardlist").innerHTML = renderInHtml;
};

const toggleShowHidePassword = document.querySelector('#img');
const passwordInput = document.querySelector('#inputPassword');

toggleShowHidePassword.addEventListener('click', function(event) {
    const inputElement = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', inputElement);
    this.classList.toggle('bi-eye-slash-fill');

});
// function showHidePassword() {
//     const inputElement = document.getElementById('inputPassword');
//     inputElement.type === 'password' ?
//     inputElement.type = 'text' :
//     inputElement.type = 'password'
// }


