

// get the form by its id , stable elements here 
const form = document.querySelector("#contact-form");
console.log(form)
const name= document.querySelector("#name");
console.log (name)

const email= document.querySelector("#email");
console.log (Email)

// const submit= document.querySelector("#message");
// console.log (submit)


// add event listener, its the input of submit, no button
// const formEvent= 
form.addEventListener("submit", (event) => {

    console.log("just submitted the message")
    event.preventDefault();
    // debugger
    // let mail = new FormData(form)
    

//   const  SendMessage= (mail) =>{
    //   fetch("https://formspree.io/f/mqkwzgoy"){
        //   method: "POST",
        //   body: mail

    //   }.then((response)=>{
        //   return response.json();
    //   });
//   };
})
   
   
   
   // config.MY_EMAIL
    




//    creting elements on script for html
// example 
// let formForEmail = document.createElement("input")
// console.log("input") it should log the input
// email.id = email
// 

// function sendEmail() {
//     sendEmail.send({
//         Host : "smtp.mailtrap.io",
//         Username : "<Mailtrap username>",
//         Password : "<Mailtrap password>",
//         To : 'recipient@example.com',
//         From : "sender@example.com",
//         Subject : "Test email",
//         Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//     }).then(
//       message => alert(message)
//     );
    
//   }




