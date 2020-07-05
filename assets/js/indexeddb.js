/*creates inputs for Database*/
DB<input type = "text" value = "notes" id ="txtDB">
/*creates search button*/
<button id ="BtnCreateDB">Search</button>
/*creates database function*/
function createDB() {
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
