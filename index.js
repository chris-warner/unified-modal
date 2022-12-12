const btnExpand = document.getElementById("btn-expand");
const btnCollapse = document.getElementById("btn-collapse");
const redBox = document.getElementById("red-box");
const redTextBox = document.getElementById("red-box-text");
const redTextContent = document.getElementById("red-box-content");
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
btnCollapse.style.display = "block";
btnExpand.style.display = "none";
let expanded = false;
let expandedHeight = 500;
let expandedWidth = 800;

//calculated height and width
let width = redBox.offsetWidth;
let height = redBox.offsetHeight;
redTextBox.classList.remove("transition-delay");
redTextContent.classList.remove("transition-delay");
redBox.classList.add("transition-delay");
btnExpand.style.display = "flex";
btnCollapse.style.display = "none";
function getVwPosition() {
    console.log("getPosition+++++");
    console.log(vw)
    console.log(vw - expandedWidth + "px")
    return (vw/2 - expandedWidth/2) + -35 + "px";
}

function getVhPosition() {
    console.log("getPositionVH+++++");
    console.log(vh)
    console.log(vh - expandedHeight + "px")
    return (vh/2 - expandedHeight/2) + "px";
}

console.log('width: ' + width  + ' height: ' + height);

function expand() {
    console.log("expand");
    redTextBox.style.opacity = "1";
    redBox.style.bottom = getVhPosition();
    redBox.style.right = getVwPosition();
    redBox.style.margin = 0;

    redTextBox.style.marginTop = "0";
    redTextContent.style.marginTop = "0"
    redTextContent.style.opacity = "1"
    redBox.style.width = expandedWidth + "px";
    redBox.style.height = expandedHeight + 'px';
    redTextBox.classList.add("transition-delay");
    redTextContent.classList.add("transition-delay");
    redBox.classList.remove("transition-delay");
    btnExpand.style.display = "none";
    btnCollapse.style.display = "flex";
    expanded = true;
}

function collapse() {
    console.log("collapse");
    redBox.style.margin = '20px';

    redTextBox.style.opacity = "0";
    redTextBox.style.marginTop = "-80px";
    redTextContent.style.marginTop = "500px"
    redTextContent.style.opacity = "0"
    redBox.style.width = "200px";
    redBox.style.height = "20px";
    redBox.style.bottom = "0";
    redBox.style.right = "0";

    redTextBox.classList.remove("transition-delay");
    redTextContent.classList.remove("transition-delay");
    redBox.classList.add("transition-delay");
    btnExpand.style.display = "flex";
    btnCollapse.style.display = "none";
    expanded = false;
}

redBox.addEventListener("click", function () {
    if (expanded === false) {
        expand();
    } else {
        collapse();
    }
    console.log('width: ' + expandedWidth  + ' height: ' + expandedHeight);

    setTimeout(function () {

        let width = redBox.offsetWidth;
        let height = redBox.offsetHeight;
        console.log('width: ' + width  + ' height: ' + height);
    }, 2000)
});

addEventListener("resize", (event) => {
     vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
     vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
});

function resizedw(){
    // Haven't resized in 100ms!
    if (expanded === true) {
        vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        redBox.style.bottom = getVhPosition();
        redBox.style.right = getVwPosition();
    
     }
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 100);
};