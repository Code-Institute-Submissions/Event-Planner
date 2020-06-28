DB<input type = "text" value = "notes" id ="txtDB">
<button id ="BtnCreateDB">Search</button>

function creatDB() {
    const dbName = document.getElementById("textDB").value
    const request = indexedDB.open("dbName")

    //on upgrade needed
    request.onupgradeneeded = e => {
        alert("Upgrade has been requested");
    }
    //on success
    request.onsuccess = e => {
        alert("Success!");
    }
    //onerror
    request.onerror = e => {
        alert("Error!")
    }
}
