// TODO: will probably want to create a JS class/ object for the sliders here.

// let slider = document.getElementById("myRange1");
// let output = document.getElementById("demo1");
// output.innerHTML = slider.value; // Display the default slider value
//
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }


// TODO: I could definitely use some sort of inheritance here! But ah well, will finish this off as is
// TODO: going to move onto implementing the JSON put together + AWS integration, before coming back to clean this up.
// class Sliders {
//     _sliders = [];
//     _slider_values;
//
//     // No idea if this is good practice... maybe pass an array of names and demo names... is there a function like `zip()` in JS?
//     constructor(slider_names, demo_names){
//         slider_names.forEach((slider_name, index) => {
//             const demo_name = demo_names[index];
//             console.log(slider_name, demo_name);
//             let __slider = new Slider(slider_name, demo_name);
//             this._sliders.push(__slider);
//         })
//     }
//
//     get_slider_json(){
//         for (const slider of this._sliders){
//             console.log("slider value:", slider.value);
//             _slider_values.push(slider.value);  // Will need to reset this to zero at the end of the function.
//
//             // TODO: am I overcomplicating thing here unneccessarily at an early stage!? I think so... but primarily just
//             //  because I can't move onto AWS right now
//             //  RESULT -> Stop working on this! Just comment it out - create a Json object from the other sliders!
//             //  Look for a while loop that acts every 5 seconds - will need to do so asynchronously though too I guess.
//         }
//     }
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

mqtt_json = {
    "slider_1": 0,
    "slider_2": 0,
    "slider_3": 0,
    "slider_4": 0
}

const slider_1 = new Slider("myRange1", "demo1");
// This just doesn't seem like the best way to be doing this, but it should do for now
// TODO: note down, using `.onchange` instead - this will only run once an element "loses focus" i.e. once we are done
//  with the slider. This is very useful for us as it makes it easier for us to send JSON files
slider_1._slider.onchange = function(){
    slider_1.update_output();
    mqtt_json["slider_1"] = slider_1._slider.value;
}


// TODO: I could probably initialize all of these sliders in a for loop!
const slider_2 = new Slider("myRange2", "demo2");
slider_2._slider.onchange = function(){
    slider_2.update_output();
    mqtt_json["slider_2"] = slider_2._slider.value;
}

const slider_3 = new Slider("myRange3", "demo3");
slider_3._slider.onchange = function(){
    slider_3.update_output();
    mqtt_json["slider_3"] = slider_3._slider.value;
}

const slider_4 = new Slider("myRange4", "demo4");
slider_4._slider.onchange = function(){
    slider_4.update_output();
    mqtt_json["slider_4"] = slider_4._slider.value;
}


// A while loop that sleeps for 5 seconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
    while (true) {
        console.log("JSON object:", mqtt_json);
        await sleep(5000);
    }
}

loop();








