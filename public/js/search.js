const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");

function runSearch() {
    let text = input.value.trim();
    if (text !== "") {
        window.location.href = `/search?query=${text}`;
    }
}

btn.addEventListener("click", runSearch);

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        runSearch();
    }
});
