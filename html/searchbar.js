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
        { name: "CartridgeHezi0.8", link: "(ACC)CartridgeHezi0.8.html" },
        { name: "CartridgeArgusPodV23ML0.4ohm", link: "(ACC)CartridgeArgusPodV23ML0.4ohm.html" },
        { name: "Charger N PowerBank Charge Up Blue", link: "(ACC)Charger N PowerBank Charge Up Blue.html" },
        { name: "Charger VRK F2 Type C", link: "(ACC)Charger VRK F2 Type C.html" },
        { name: "CoilSuperSonixDeathVomit", link: "(ACC)CoilSuperSonixDeathVomit.html" },
        { name: "COILOxva0.3ohm", link: "(ACC)COILOxva0.3ohm.html" },
        { name: "cotton monster premium", link: "(ACC)cotton monster premium.html" },
        { name: "VRK 3750mah 40A 21700", link: "(ACC)VRK 3750mah 40A 21700.html" },
        { name: "CartridgeArgusPodV23ML0.4ohm", link: "(ACC)CartridgeArgusPodV23ML0.4ohm.html" },
        { name: "Driptip-Monarchy-Cyber-V1-Inner-Black", link: "(ACC)driptip.html" },
        { name: "Inner Button BB Zeza", link: "(ACC)Inner Button BB Zeza.html" },

        { name: "blunanarilla", link: "(LIQUID)Blunanarilla.html" },
        { name: "CentaurusQ200", link: "(DEVICE)CentaurusQ200.html" },
        { name: "DotAio V2 Lite Red ", link: "(DEVICE)DotAio V2 Lite Red SPEK.html" },
        { name: "Dovpo MVP II Coil Gear Sakura Pink", link: "(DEVICE)Dovpo MVP II Coil Gear Sakura Pink SPEK.html" },
        { name: "Pod X Brilliant Gold ", link: "(DEVICE) Pod X Brilliant Gold SPEK.html" },
        { name: "Foom Pod X Bundling Space Gray Icy Menthol", link: "(DEVICE)Foom Pod X Bundling Space Gray Icy Menthol.html" },
        { name: "Pod X Wild Purple", link: "(DEVICE) Pod X Wild Purple SPEK.html" },
        { name: "Gear Box Mod V1 Black ", link: "(DEVICE) Gear Box Mod V1 Black SPEK.html" },
        { name: "Hastur Aio Elegant Black Atom85", link: "(DEVICE) Hastur Aio Elegant Black Atom85.html" },
        { name: "Dovpo MVV 2 Carbon Green", link: "(DEVICE) Dovpo MVV 2 Carbon Green.html" },
        { name: "MOD HEXOHM V3 OFRAME Red", link: "(DEVICE) MOD HEXOHM V3 OFRAME Red.html" },
        { name: "Mod Rhea 200W Retro Brown", link: "(DEVICE) Mod Rhea 200W Retro Brown.html" },
        { name: "Pod Jarvis Pro Kit Amber Red", link: "(DEVICE) Pod Jarvis Pro Kit Amber Red.html" },
        { name: " Rda REQUIEM gold", link: "(ATOMIZER)RdaREQUIEMgold.html" },
        { name: " RDA Remade Projects", link: "(ATOMIZER)RDARemadeProjects.html" },
        { name: " RDA Tot X Dual Coil SS", link: "(ATOMIZER)RDATotXDualCoilSS.html" },
        { name: " RBA TITA", link: "(ATOMIZER)RBATita.html" },
        { name: " RBA Sturdy One Clone", link: "(ATOMIZER)RBASturdtOneClone.html" },
        { name: " RBA Monarchy MS Scepter", link: "(ATOMIZER)RBAMonarchyMSScepter.html" },
        { name: " RTA Gear V2 Rainbow", link: "(ATOMIZER)RTA Gear V2 Rainbow.html" },
        { name: " RTA Neeko Gunmetal", link: "(ATOMIZER) RTA Neeko Gunmetal.html" },
        { name: " RTA Zombie Fummy Authentic", link: "(ATOMIZER)RTA Zombie Fummy Authentic.html" },

        { name: "Idealis Dark Coffee", link: "(MINIKOPI)dark coffee.html" },
        { name: "Creamy Milk Series", link: "(MINIKOPI)creamy milky.html" },
        { name: "Savory Latte Series", link: "(MINIKOPI)savory.html" },
        { name: "Creamy Coffee Milk", link: "(MINIKOPI)creamy coffee.html" },
        { name: "Soda Sparkling", link: "(MINIKOPI)soda.html" },

        


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
