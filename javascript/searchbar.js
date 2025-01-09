document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-box input");
    const suggestionsBox = document.querySelector(".search-box .suggestions");

    const products = [
        { name: "Accessories", link: "ACCESORIST.html", image: "Charger N PowerBank Charge Up Blue/COVER.jpg" },
        { name: "Liquid Freebase", link: "liquid.html" },
        { name: "Atomizer", link: "atomizer.html" },
        { name: "Device", link: "device.html" },
        { name: "Minikopi", link: "minikopi.html" },
        { name: "product", link: "produk.html" },
        { name: "Batrai Kdest Merah Putih 2400mah 40A", link: "(ACC)Batrai Kdest Merah Putih 2400mah 40A.html" },
        { name: "case r233", link: "(ACC)case r233.html" },
    ];

    // Function to display suggestions
    const showSuggestions = (query) => {
        const filteredSuggestions = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );

        suggestionsBox.innerHTML = filteredSuggestions
            .map(product => `<div class="suggestion-item" data-link="${product.link}">${product.name}</div>`)
            .join("");

        suggestionsBox.style.display = filteredSuggestions.length ? "block" : "none";
    };

    // Function to handle search
    const handleSearch = (query) => {
        const matchedProduct = products.find(product =>
            product.name.toLowerCase() === query.toLowerCase()
        );

        if (matchedProduct) {
            // Redirect to the product's link
            window.location.href = matchedProduct.link;
        } else {
            alert("Product not found!"); // Optional feedback for unmatched search
        }
    };

    // Event listener for input changes
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        if (query) {
            showSuggestions(query);
        } else {
            suggestionsBox.style.display = "none";
        }
    });

    // Event listener for suggestion click
    suggestionsBox.addEventListener("click", (e) => {
        if (e.target.classList.contains("suggestion-item")) {
            const link = e.target.getAttribute("data-link");
            window.location.href = link; // Redirect to the product's link
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-box")) {
            suggestionsBox.style.display = "none";
        }
    });

    // Search on pressing Enter
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const query = searchInput.value.trim();
            handleSearch(query); // Redirect to the matched product or show alert
        }
    });
});
