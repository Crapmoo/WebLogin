var username = "admin"
var password = "admin"
document.getElementById("data-login").onsubmit = function(e){
    e.preventDefault()
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value
    if(user === username && pass === password){
        localStorage.setItem("username",user)
        window.location = "home.html"
    }else{
        document.getElementById("wrong").innerHTML = "!ummm something went wrong"
        
    }
}