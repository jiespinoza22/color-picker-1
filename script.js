window.onload = function () {
    initColorPickeer();
};

function initColorPicker() {
    let colorbox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    setColorPickerEventListeners(colorbox, rgb);
}

function setColorPickerEventListeners(ColorBox, rgb) {
    rgb.red.addEventListener('change', () => {
        console.log("red value:", rgb.red.value);
    });
    rgb.green.addEventListener('change', () => {
        console.log("Green value:", rgb.green.value);
    });
    rgb.blue.addEventListener('change', () => {
        console.log("Blue value:", rgb.blue.value);
    });
}
