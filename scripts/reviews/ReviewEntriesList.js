
 import { savedReviews, getReviews } from "./ReviewProvider.js"
 import { ReviewEntryComponent } from "./ReviewEntry.js"
 
 // DOM reference to where all entries will be rendered
 const entryLog = document.querySelector(".journalContainer")
 export const reviewListComponent = () => {
     let reviewHTMLRepresentation = "";
     // Use the journal entry data from the data provider component
     
  savedReviews().then(() => {
      
      const entries = getReviews()
      
      for (const entry of entries) {
          /*
              Invoke the component that returns an
              HTML representation of a single entry
          */
          reviewHTMLRepresentation += ReviewEntryComponent(entry)
          
         entryLog.innerHTML +=`
          <article class="reviewContainer">
         ${reviewHTMLRepresentation}
      </article> `
      }
  })   
 }
 