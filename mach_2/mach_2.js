// TODO: will probably want to create a JS class/ object for the sliders here.

let slider = document.getElementById("myRange1");
let output = document.getElementById("demo1");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}
