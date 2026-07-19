
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
});



document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll(
        ".number-row, .alphabet-row, .greet-row, .emotion-row, .word-row, .conv-row, .people-row, .learn-row"
    );

    items.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
    });

    function showOnScroll() {
        items.forEach((el) => {
            let pos = el.getBoundingClientRect().top;

            if (pos < window.innerHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});



document.addEventListener("DOMContentLoaded", function () {

    const practicePanels = document.querySelectorAll(".practice-panel");

    practicePanels.forEach(panel => {

        let btn = document.createElement("button");
        btn.innerText = "Reset Answers";
        btn.style.marginTop = "20px";
        btn.style.padding = "14px 25px";
        btn.style.background = "black";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "6px";
        btn.style.cursor = "pointer";

        btn.onclick = () => {
            location.reload();
        };

        panel.appendChild(btn);
    });
});