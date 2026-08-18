function openPopup() {
    document.getElementById("textModal").style.display = "block";
}

function closePopup() {
    document.getElementById("textModal").style.display = "none";
}
 //gia na kleinei to parathiro otan o xristis kanei click ejw aptoo plaisio
window.onclick = function(event) {
    let modal = document.getElementById("textModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}