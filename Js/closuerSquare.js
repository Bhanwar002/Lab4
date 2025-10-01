// Closure for squaring numbers
function squareClosure() {
    return function(num) {
        return num * num;
    };
}

// Create instance of closure
const square = squareClosure();

// Event listener for button
document.getElementById("btn").addEventListener("click", function() {
    let number = document.getElementById("num").value;
    let resultDiv = document.getElementById("result");

    if (number === "") {
        resultDiv.innerHTML = "⚠ Please enter a number!";
    } else {
        let sq = square(number); // closure used here
        resultDiv.innerHTML = "Square of " + number + " is " + sq;
    }
});
