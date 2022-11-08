// TODO: will probably want to create a JS class/ object for the sliders here.

// let slider = document.getElementById("myRange1");
// let output = document.getElementById("demo1");
// output.innerHTML = slider.value; // Display the default slider value
//
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

class Slider {
    _slider;
    _slider_output;

    constructor(slider_name, slider_output_name) {
        this._slider = document.getElementById(slider_name);
        this._slider_output = document.getElementById(slider_output_name);
    }

    // Update the output.innerHTML on slider.oninput
    update_output() {
        this._slider_output.innerHTML = this._slider.value;
    }
}

const slider_1 = new Slider("myRange1", "demo1");
// This just doesn't seem like the best way to be doing this, but it should do for now
// TODO: I need to look into what `.oninput` is doing exactly... can this be contained within the class!?
slider_1._slider.oninput = function(){
    slider_1.update_output();
}


// TODO: I could probably initialize all of these sliders in a for loop!
const slider_2 = new Slider("myRange2", "demo2");
slider_2._slider.oninput = function(){
    slider_2.update_output();
}




