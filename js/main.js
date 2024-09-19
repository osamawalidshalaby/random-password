const Boxvalue = document.getElementById("password");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let digitCase = "0123456789";
let special = "!@#$"

let all = upperCase + lowerCase + digitCase + special;

let len = 12;

function createRandom(){
    let password = "";
    while(len > password.length){
        password+=all[Math.floor(Math.random() * all.length)]
    }
    Boxvalue.value = password
}

function copy(){
    Boxvalue.select()
    document.execCommand("copy")
}