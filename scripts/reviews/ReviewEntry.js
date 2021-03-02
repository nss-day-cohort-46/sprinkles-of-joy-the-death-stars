
 export const ReviewEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
           <p class="entry__product">${entry.product.id}</p>
           <p class=entry__review">${entry.review}</p>
           <p class="entry__body">${entry.body}</p>
           <p class="entry__rating">${entry.rating}</p>
            
        </section>
    `
}