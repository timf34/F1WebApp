// const button = document.getElementById("computation_button");

function doComputation(){
    let num_1 = document.getElementById("num1").value;
    console.log("Here is num1:");
    console.log(num_1);

    let num_2 = document.getElementById("num2").value;
    console.log("Here is num2");
    console.log(num_2);

    let secret_computation_value = Number(num_1) + Number(num_2);

    let output_para = document.getElementById("secret_computation_output");
    output_para.innerHTML = String(secret_computation_value);  // Need to use .innerHTML, not .value!
}