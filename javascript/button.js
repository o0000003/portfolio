
    const button = document.querySelector("#myBtn");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 500) {
            button.style.display = "block"
        }else  {
            button.style.display = "none"
        }
    })

