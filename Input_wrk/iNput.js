let arrQuotes = [];

// Default quote to display
function showQuotes() {
    // If there are no quotes, display a default message
    let divQuotelist = document.getElementById("divQuotelist");
    arrQuotes.sort();
    divQuotelist.innerHTML = arrQuotes.join("<BR>");
}

// Function to add a new quote
function addQuote() {
    // Get the value from the input field, trim whitespace, and capitalize the first letter
    let txtquote = document.getElementById("txtquote");
    let newQuote = txtquote.value.trim();

    // Check if the input is not empty
    if (newQuote) {
        // Ensure the first letter is capitalized and add the quote to the array
        newQuote = newQuote.charAt(0).toUpperCase() + newQuote.slice(1);
        arrQuotes.push(newQuote);
        txtquote.value = "";
        showQuotes();

        // Replace header title with the new quote
        document.getElementById("topquote").innerText = newQuote;
    }
}
// Function to reset the quote list
function resetQuoteList() {
    // Clear the input field
    arrQuotes = [];
    showQuotes();

    // Reset the header to the default quote
    document.getElementById("topquote").innerText = "Laughter is the closest distance between two people.";
}
// Add this at the end of your file or after DOM is loaded
document.getElementById("txtquote").addEventListener("keydown", function(event) {
    // if pressed Enter key then add quote accordingly
    if (event.key === "Enter") {
        addQuote();
    }
});
