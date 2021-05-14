const rows = document.querySelectorAll('.row')
let products_wrapper = document.querySelector('.product-list')
const product = document.querySelectorAll('.product')

const one_star = document.querySelectorAll('.one_star')
const two_stars = document.querySelectorAll('.two_stars')
const three_stars = document.querySelectorAll('.three_stars')
const four_stars = document.querySelectorAll('.four_stars')
const five_stars = document.querySelectorAll('.five_stars')

const one_star_btn = document.querySelector('.one_stars_btn')
const two_stars_btn = document.querySelector('.two_stars_btn')
const three_stars_btn = document.querySelector('.three_stars_btn')
const four_stars_btn = document.querySelector('.four_stars_btn')
const five_stars_btn = document.querySelector('.five_stars_btn')
const all_stars_btn = document.querySelector('.all_btn')

const grid_btn = document.getElementById("grid-btn")
const list_btn = document.getElementById("list-btn")

const filtred = (list)=>{
    while (products_wrapper.firstChild) {
        products_wrapper.removeChild(products_wrapper.firstChild);
    }
    list.forEach(categorie =>{
        categorie.forEach(child =>{
            products_wrapper.appendChild(child)
        })
    })
}  

all_stars_btn.addEventListener('click', ()=>{
    while (products_wrapper.firstChild) {
        products_wrapper.removeChild(products_wrapper.firstChild);
    }
    product.forEach(element =>{
        products_wrapper.appendChild(element)
    })
})

one_star_btn.addEventListener('click', () =>{
    let product_list = [one_star]
    filtred(product_list)
})

two_stars_btn.addEventListener('click', () =>{
    let product_list = [two_stars, three_stars, four_stars, five_stars]
    filtred(product_list)
})

three_stars_btn.addEventListener('click', () =>{
    let product_list = [three_stars, four_stars, five_stars]
    filtred(product_list)
})

four_stars_btn.addEventListener('click', () =>{
    let product_list = [four_stars, five_stars]
    filtred(product_list)
})

five_stars_btn.addEventListener('click', () =>{
    let product_list = [five_stars]
    filtred(product_list)
})

grid_btn.addEventListener('click', ()=>{
    products_wrapper.classList.remove('list')

})

list_btn.addEventListener('click', ()=>{
    products_wrapper.classList.add('list')
    product.forEach(element =>{
        element.classList.add('space')
    })
})