
import { getProducts, useProducts } from "./../products/ProductProvider.js"


const contentTarget = document.querySelector(".reviewForm")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("showNewReviewForm", customEvent => {
    ReviewForm()
})

const renderForm = (arrayOfProducts) => {
    const stringOfProductOptions = arrayOfProducts.map(product => `<option value="${product.id}">${product.name}</option>`)
    contentTarget.innerHTML = `
    <label for="review-dropdown">Leave a Review for: </label>
    <select id="review--product" class="reviewProduct">
    <option value="0">Please select a product to review</option>
    ${stringOfProductOptions.join("")}
    </select>
    

    
    <label for="review-reviewer">Comments: </label>
    <input type="text" id="review--reviewer">
    
    <label for="review-body">Review: </label>
    <input type="text" id="review--body">
    
    <label for="review-rating">Rating: </label>
    <input type="text" id="review--rating">
    
    <button id="save--review">Leave a Review</button>
    `
}

export const ReviewForm = () => {
    getProducts()
        .then(() => {
            const arrayOfProducts = useProducts()
            
            renderForm(arrayOfProducts)
        })
}

