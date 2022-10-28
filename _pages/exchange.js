
let btn = document.getElementById("btn");

btn.addEventListener("click",function() {
    let naria = document.getElementById("naria").value;
    let ringgit = document.getElementById("ringgit");
    let dollar = document.getElementById("dollar");
    ringgit.value = naria / 100;
    dollar.value = naria / 413
});