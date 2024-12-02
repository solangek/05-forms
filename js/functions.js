document.addEventListener("DOMContentLoaded", () => {
    const search_string = document.getElementById("search_string");

    document.getElementById("search_form").addEventListener("submit", function (event) {

        if (search_string.value.trim().length === 0) {
            search_string.nextElementSibling.innerHTML = "Please enter some non empty search string";
            event.preventDefault();
        } else {
            // prepare an ajax call (we will see this later)
        }

    });

})