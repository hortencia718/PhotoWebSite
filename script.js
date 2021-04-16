require("dotenv").config();

// get the form by its id , stable elements here 
const myForm = document.querySelector("#contact-form");
console.log(myForm)
 const name= document.querySelector("#name");
// // console.log (name)

 const email= document.querySelector("#email");
// console.log (Email)
const message=document.querySelector('message')



// add event listener, its the input of submit, no button
// const formEvent= 
// form, submit, evt.preventDefault
// should be going to form, submit, value

myForm.addEventListener("submit", (evt) => {
// console.log("hello i submitted")
    evt.preventDefault();
    console.log(process.env.FORM_SPREE_API_URL )

    let email = new FormData(myForm)
    fetch("https://formspree.io/f/mqkwzgoy",{
           method: "POST",
           headers:{
               'Content-Type': 'application/json',
               'Response': 'application/json'
           },
           body: email
    })
          .then(res => res.json())
         .then((formObj) => {
            console.log(formObj)
        })

    })

    


// let email = new FormData(form)
// forma data object(form from line 4)
// a collection of key/value paris, matches the name and its value & email
    

//   const  SendMessage= (mail) =>{
    //   fetch("https://formspree.io/f/mqkwzgoy"){
        //   method: "POST",
        //   body: formData

    //   }).then(function (response)=>{
        //   return response.json(text)();
    //   }).then function (text){
        // console.log(text)
    // }
//   };
// })
   
   
   
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




// delegation
// find a stable element
// add an event listener
// add an if statment, checking to see what the children have in common
// do whatever you want evt.target

// form.addEventListener("submit", function(evt){
    // if(evt.target.tagName === "id"){
// console.log("you submitted an id")
    // }
//  console.log(evt.target)
// })