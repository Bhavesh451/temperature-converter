function convertTemperature() {
    let temp = document.getElementById("inputTemp").value;
    temp = Number(temp);
    let result = (temp * 9/5) + 32;

    document.getElementById("result").innerText = "Temperature in fahrenheit: " + result;
}