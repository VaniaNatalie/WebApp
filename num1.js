// Promise is an object that gives and return the result 
// (whether successful or failure) of an async operation

var text = document.getElementById('text1');


// async and await go together. async makes a function return a Promise, while await makes a function
// waits for a Promise
async function login() {
    let session = 1;
    let p = new Promise((resolve) => {
        if (session == 1) {
            resolve("Successfuly logged in");
        }
    });
    // await must be inside async func
    text.innerHTML = await p;  
}