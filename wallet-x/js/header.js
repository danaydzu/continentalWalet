
    const list = document.querySelector(".header__list");
    


    header.style.opacity = '1'
    header.style.height = 'auto'


    list.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            document
                .querySelector(".header__item a.active-header")
                .classList.remove("active-header");
            document.getElementById("checkbox-menu").checked =
                document.getElementById("checkbox-menu").checked === false;
            e.target.className = "active-header";

        }
    });
    let lastScroll = 0;
    const defaultOffset = 50;

    const scrollPosition = () =>
        window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains("hide-header");
    window.addEventListener("scroll", () => {
        if (document.getElementById("checkbox-menu").checked) {
            document.getElementById("checkbox-menu").checked = false;
        }

        if (scrollPosition() > lastScroll && !containHide()) {
            //scroll down
            header.classList.add("hide-header");

            // document.getElementById("checkbox-menu").checked =
            // document.getElementById("checkbox-menu").checked === true;
        } else if (scrollPosition() < lastScroll && containHide()) {
            //scroll Up
            header.classList.remove("hide-header");
        }
        lastScroll = scrollPosition();
    });

