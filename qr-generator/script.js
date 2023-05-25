const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
genBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

genBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    genBtn.innerHTML = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;    
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        genBtn.innerHTML = "Generate QR code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active");
    }
});