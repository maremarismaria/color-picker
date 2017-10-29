
function getValue(elementId){
    return document.getElementById(elementId).value;
}

function getColor(){

    var r = getValue("red");
    var g = getValue("green");
    var b = getValue("blue");

    var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
    var hexColor = rgbToHex(r, g, b);

    var color = {
        rgb: rgbColor,
        hex: hexColor,
        elements: {r: r, g: g, b: b}
    };

    return color;
}

function setText(elementId, text){
    document.getElementById(elementId).innerHTML = text;
}

function setColor(elementId, color){
    document.getElementById(elementId).style.color = color;
}

function setBgcolor(elementId, color){
    document.getElementById(elementId).style.backgroundColor = color;
}

function setboxShadowColor(elementId, color){
    document.getElementById(elementId).style.boxShadow = "5px 5px " + color;
}

function decToHex(num){
    var num = parseInt(num);
    num = num.toString(16);
    num.toString().length == 1 ? num = "0" + num : '';
    return num;
}

function rgbToHex(r, g, b){
    var color = "#" + decToHex(r) + decToHex(g) + decToHex(b);
    color = color.toUpperCase();
    return color;
}


function addListeners(){
    document.getElementById("slider-r").addEventListener("input", main);
    document.getElementById("slider-g").addEventListener("input", main);
    document.getElementById("slider-b").addEventListener("input", main);
}

function main(){

    var color = getColor();
    
    //Updates color
    setBgcolor("color",     color.rgb);
    setText("show-txt-rgb", color.rgb);
    setText("show-txt-hex", color.hex);

    if(color.elements.r < 110){
        setColor("show-txt-rgb", "white");
        setColor("show-txt-hex", "white");
    }else{
        setColor("show-txt-rgb", "black");
        setColor("show-txt-hex", "black");
    }

    //Updates inputs-range 
    setText("r-value", color.elements.r);
    setText("g-value", color.elements.g);
    setText("b-value", color.elements.b);

    setboxShadowColor("slider-r", "rgb(" + color.elements.r + ",0,0)");
    setboxShadowColor("slider-g", "rgb(0," + color.elements.g + ",0)");
    setboxShadowColor("slider-b", "rgb(0,0," + color.elements.b + ")");

    addListeners();

}

main();