 function filterCards(category) {
            const cards = document.querySelectorAll(".artikel .col-md-4");
            let cardCount = 0;

            cards.forEach((card) => {
                const badge = card.querySelector(".badge");
                if (category === "semua" || (category === "berita" && badge.getAttribute("id") === "badge2") || (category === "pengumuman" && badge.getAttribute("id") === "badge1")) {
                    card.style.display = "block";
                    cardCount++;
                } else {
                    card.style.display = "none";
                }
            });

            document.getElementById("cardCount").textContent = cardCount;
        }

        document.querySelectorAll(".nav-filter .nav-link").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const category = event.target.textContent.toLowerCase(); // Using link text as category
                filterCards(category);
            });
        });

        filterCards("semua");

        





