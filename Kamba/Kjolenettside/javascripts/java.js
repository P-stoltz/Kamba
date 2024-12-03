let count = 0;

document.getElementById("counterButton").addEventListener("click", function() {
    count++;
    document.getElementById("countDisplay").innerText = count;
});
 // Hent data fra localStorage
 const id = localStorage.getItem('selectedDress');