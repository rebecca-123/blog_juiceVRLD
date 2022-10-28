
let btn = document.getElementById("btn");

btn.addEventListener("click",function() {
    let dollar = document.getElementById("dollar").value;
    let pound = document.getElementById("pound");
    let rupee = document.getElementById("rupee");
    pound.value = dollar * 0.86;
    rupee.value = dollar * 82.33;

});