var popupbox=document.querySelector(".container")
var popup=document.querySelector(".booktitled")
var tot=document.querySelector(".tot")
var addpopup=document.querySelector(".addpopup")
var newpopupcont=document.querySelector(".newpopupcont")
var newpopup=document.querySelector(".newpopup")

function showit(){
    popup.style.display="block"
    
}
function closeit() {
    this.parentElement.style.display = "none";
}
function addpop(){
    newpopupcont.style.display="block"
    newpopup.style.display="block"
}
function cancel(event){
    event.preventDefault()
    newpopupcont.style.display="none"
    newpopup.style.display="none"
}
function add(event) {
    event.preventDefault();
    var newtitle = document.getElementById("title").value;
    var newauthorname = document.getElementById("authorname").value;
    var newdescription = document.getElementById("description").value;

    var div = document.createElement("div");
    div.setAttribute("class", "booktitled");
    div.style.display="block"
    div.innerHTML = `
        <h2>${newtitle}</h2>
        <h3>${newauthorname}</h3>
        <p>${newdescription}</p>
        <button onclick="closeit.call(this)" class="close">Delete</button>`
    popupbox.append(div)    
    newpopupcont.style.display = "none";
    newpopup.style.display = "none";
}