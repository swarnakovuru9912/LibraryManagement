let searchInput = document.getElementById('searchInput')
let searchResults = document.getElementById('searchResults')
let message = document.getElementById("message");
let headingE1 = document.createElement("h1");
let spinner = document.getElementById("spinner");

function appendSearchResults(search_results) {
    if (search_results.length < 1) {
        message.textContent = "No results found";
        searchResults.textContent = "";
        headingE1.textContent = "";
    } else {
        searchResults.textContent = "";
        message.textContent = "";
        headingE1.textContent = "Popular Books"
        searchResults.appendChild(headingE1);
        for (let eachItem of search_results) {
            let title = eachItem.title;
            let image = eachItem.imageLink;
            let author = eachItem.author;
            let imageE1 = document.createElement("img");
            let textE1 = document.createElement("p")
            imageE1.setAttribute("src", image);
            textE1.textContent = author;
            searchResults.appendChild(imageE1);
            searchResults.appendChild(textE1);
            console.log(eachItem);
        }
    }
}
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");

        let searchInputValue = searchInput.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                appendSearchResults(search_results);
                spinner.classList.toggle("d-none");
            })
    }
})