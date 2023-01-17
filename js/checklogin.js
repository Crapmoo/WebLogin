checklogin()
function checklogin(){
    var username = localStorage.getItem("username")
    if(!username){
        window.location = "index.html"
    }
    else{
        document.getElementById("name").innerHTML = username
    }
}