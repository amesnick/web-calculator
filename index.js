function addNumbers() {
    var numberOne = document.getElementById("numberone").value
    var numberTwo = document.getElementById("numbertwo").value

    var results = parseInt(numberOne) + parseInt(numberTwo)
    document.getElementById("answer").value = results
}