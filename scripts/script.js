const emailEl = document.getElementById("email");
const tooltip = document.getElementById("tooltip");
const email = ["medeiros.luizhenrique", "yahoo.com.br"].join("@")

emailEl.value = email;

emailEl.addEventListener('click', () => {
    emailEl.select();
    emailEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(emailEl.value);

    tooltip.innerText = "Copied email!";
});

emailEl.addEventListener('mouseout', () => {
    emailEl.blur();
    window.getSelection().removeAllRanges();

    tooltip.innerText = "Click to copy";
});