window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorbox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPicker = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorbox, rgb, colorPicker);
}

function setColorPickerEventListeners(ColorBox, rgb, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen ; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = rgb.red.value;
            let green = rgb.green.value;
            let blue = rgb.blue.value;
            setElementBGColor(element, red, green, blue);
            setDisplayValues(red, green, blue);
        });
    }
}

function setElementBGColor(bgElement, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    bgElement.style.backgroundColor = "rgb(" + rgbVal +")";
}

function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal")

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}