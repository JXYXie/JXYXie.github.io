// Concatenates the input into the output text
function set(operator) {
    var out_textbox = document.getElementById("output");
    out_textbox.value += operator;
}

// Main calculation
function equals() {
    var out_textbox = document.getElementById("output");
    var expressions = out_textbox.value;
    var result;
    try {
        result = eval(expressions);
    } catch (err) {
        if (err instanceof SyntaxError) {
            result = "ERROR";
        }
    }
    out_textbox.value = result;
}

function clearscreen() {
    var out_textbox = document.getElementById("output");
    out_textbox.value = "";
}

function backspace() {
    var out_textbox = document.getElementById("output");
    var length = (out_textbox.value).length;
    length--;
    var last_element = (out_textbox.value).substr(0, length);
    out_textbox.value = last_element;
}
