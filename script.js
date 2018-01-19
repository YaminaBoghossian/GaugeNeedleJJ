// JavaScript source code


setInterval(function () {
    needleConfig(Number(document.querySelector("#input").value), 100);
}, 50);
function needleConfig(value, value_max) {
    console.log(value);
    let angle = (value / value_max) * 360;
    document.querySelector(".needle").style.transform = "rotate(" + angle % 360 + "deg)";
};