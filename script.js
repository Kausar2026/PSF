function openMenu() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
    document.getElementById("sidebar").style.left = "-280px";
    document.getElementById("overlay").style.display = "none";
}

// Overlay click
document.getElementById("overlay").onclick = closeMenu;

// ESC key
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeMenu();
    }
});