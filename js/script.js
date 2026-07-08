// Smooth scrolling for menu links

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});



// Join Now Button

const joinButton = document.querySelector(".hero button");

if(joinButton){

    joinButton.addEventListener("click",()=>{

        document
        .getElementById("courses")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}



// Login Button

const loginButton = document.querySelector("#login button");


if(loginButton){

    loginButton.addEventListener("click",()=>{

        alert(
        "Student login system will be connected soon."
        );

    });

}



// Payment Button

const paymentButton = document.querySelector("#payment button");


if(paymentButton){

    paymentButton.addEventListener("click",()=>{

        alert(
        "Payment gateway will be added soon."
        );

    });

}
