var cel = document.querySelector(".celsious input");
var far = document.querySelector(".fahrenheit input");
var kel = document.querySelector(".kelvin input");

var btn = document.querySelector(".btn");

//rounding the value upto 2 decimal places
function roundNumber (number) {
    return Math.round(number * 100) / 100;
}

// cel to far and kel
cel.addEventListener('input', function () {
    //converting the celcious i/p from string to float
    var celValue = parseFloat(cel.value);

    var farValue = (celValue * 9 / 5) + 32;
    var kelValue =  celValue + 273;

    far.value = roundNumber(farValue);
    kel.value = roundNumber(kelValue);
})

// far to cel and kel
far.addEventListener('input', function () {
    //converting the fahrenheit i/p from string to float
    var farValue = parseFloat(far.value);

    var celValue = (farValue - 32) * 5 / 9;
    var kelValue =  (farValue - 32) * 5 / 9 + 273;

    cel.value = roundNumber(celValue);
    kel.value = roundNumber(kelValue);
})

// kel to cel and far
kel.addEventListener("input", function () {
    //converting the celcious i/p from string to float
    var kelValue = parseFloat(kel.value);

    var celValue =  kelValue - 273;
    var farValue = ((kelValue - 273) * 9 / 5) + 32;

    cel.value = roundNumber(celValue);
    far.value = roundNumber(farValue);
})



btn.addEventListener("click", function() {
    cel.value = "";
    far.value = "";
    kel.value = "";
})