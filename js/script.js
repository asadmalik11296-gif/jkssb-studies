
// Malik AI Studio JavaScript


// Start Creating Button

const startButton = document.querySelector(".hero button");


if(startButton){

    startButton.addEventListener("click",()=>{

        document
        .getElementById("tools")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}





// AI Tool Buttons


const toolButtons = document.querySelectorAll(".card button");


toolButtons.forEach((button)=>{


    button.addEventListener("click",()=>{


        alert(
        "AI Tool is coming soon in Malik AI Studio 🚀"
        );


    });


});






// Simple scroll animation


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


    const position =
    section.getBoundingClientRect().top;


    if(position < window.innerHeight - 100){

        section.style.opacity="1";

        section.style.transform="translateY(0)";

    }


});


});






// Initial animation style


sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s";


});




// Copyright year update


const footer =
document.querySelector("footer p");


if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Malik AI Studio. All Rights Reserved.`;

}
