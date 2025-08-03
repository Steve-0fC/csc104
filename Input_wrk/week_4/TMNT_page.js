function processPFtInfo(){
    // get first input
    let txtCharter = document.getElementById("txtCharter");
    // get second input
    let txtWepn = document.getElementById("txtWepn");
    // get third input
    let txtTcolor = document.getElementById("txtTcolor");
    // get forth input
    let txtGaurd = document.getElementById("txtGaurd");

    //
    let divOutput = document.getElementById("divOutput");

    let divEachOne = document.getElementById("divEachOne");
    // Displays on page
    divEachOne.innerHTML = "So your favorite TMNT character is " + txtCharter.value +
    "! Nice, me too!!<br>And he uses a " + txtWepn.value +
    " isn't that peculiar?<br>They mainly wear " + txtTcolor.value +
    " as their primary color huh.<br>And " + txtGaurd.value +
    " must be their guardian/master.<br> Awesome! Thank you for sharing!";
    // change display
    divOutput.style.display = "block";
    // clears the input fields
    txtCharter.value = "";
    txtWepn.value = "";
    txtTcolor.value = "";
    txtGaurd.value = "";

    // dont let form submit
    return false;
}