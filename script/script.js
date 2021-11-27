// When the user clicks on the button, 
// toggle between hiding and showing the dropdown content 

myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = (e) => {
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}
let img1 = document.querySelector('#img-1').getAttribute("src");
let img2 = document.querySelector('#img-2').getAttribute("src");
let img3 = document.querySelector('#img-3').getAttribute("src");
let img4 = document.querySelector('#img-4').getAttribute("src");
let img5 = document.querySelector('#img-5').getAttribute("src");
let img6 = document.querySelector('#img-6').getAttribute("src");
let img8 = document.querySelector('#img-8').getAttribute("src");

// change main img attr to selected img
onHover = () => {
    document.querySelector('#main-img').setAttribute('src', img1);
    document.querySelector('#grey').textContent = 'Grey';

}
onHover2 = () => {
    document.querySelector('#main-img').setAttribute('src', img2);
}
onHover3 = () => {
    document.querySelector('#main-img').setAttribute('src', img3);
}
onHover4 = () => {
    document.querySelector('#main-img').setAttribute('src', img4);
}
onHover5 = () => {
    document.querySelector('#main-img').setAttribute('src', img5);
}
onHover6 = () => {
    document.querySelector('#main-img').setAttribute('src', img6);
}
onHover8 = () => {
    document.querySelector('#main-img').setAttribute('src', img8);
    document.querySelector('#grey').textContent = 'Tan';
}
// add to cart 
let cartQty = document.querySelector('.cart-p');
document.querySelector('.inc-btn').addEventListener('click', () => {
    cartQty.textContent++;
})

document.querySelector('.dec-btn').addEventListener('click', () => {
    if (+cartQty === 0) {
        cartQty.textContent--;

    } else {
        cartQty.textContent = 0;
    }
})



