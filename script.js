
document.getElementById("form").addEventListener('submit', function (event) {
    event.preventDefault()

    const user = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    let h1 = document.getElementById("msg");





    if (age < 18) {
        h1.innerText = `sorry ${user} you are not allow `
    }
    else {

        h1.innerText = `you are welcome ${user}   `
    }
})


































































// let name = prompt("enter your name");
// let age = prompt("enter your age");
// function chack(){
//     if(age < 18){
//         console.log("you are not allow")
//     }
//     else if(age >= 18){
//         console.log("you are allow")
//     }
// }

// chack();