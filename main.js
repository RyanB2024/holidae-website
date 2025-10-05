document.addEventListener("DOMContentLoaded", () => {
    // Back Button
    const backButton = document.querySelector('.back-button');

    if (backButton) {
        backButton.addEventListener('click', () => {
            window.history.back();
        });
    }

    // Back to Top Button
    const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });
});
