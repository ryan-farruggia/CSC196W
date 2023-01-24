function makeBigger() {
    document.getElementById('ta').style.fontSize = "4em";
}
function makeFancy() {
    let ta = document.getElementById('ta');
    ta.style.fontWeight = "bold";
    ta.style.color = "blue";
    ta.style.textDecoration = "underline";
}
function makeBoring() {
    let ta = document.getElementById('ta');
    ta.style.fontWeight = "400";
    ta.style.color = "black";
    ta.style.textDecoration = "none";
}
function moo() {
    let ta = document.getElementById('ta');
    ta.style.textTransform = "uppercase";
    var lines = ta.value.split("\n");
    for(let i = 0; i < lines.length; i++) {
        lines[i] = lines[i] + "-Moo";
    }
    ta.value = lines.join("\n");
}