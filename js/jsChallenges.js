function challenge1(){
    if(document.getElementById ("subscribe").checked==true){
    console.log ('this works');
document.querySelector("#emailDiv").style.
display="initial"}
}

function challenge2(element){
    let bill = document. querySelector ("#bill")
    let home = document. querySelector ("#home")
    
    if (element.checked) {
        home.value=bill.value
        home.disabled=true;
    }
    else {home.disabled=false
        home.value = ""
    }

    console.log ("home value is" + home.value)
    console.log ("bill value is" + bill.value)
} 

function challenge3(element){
    
}