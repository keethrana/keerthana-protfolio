// Scroll Animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach((section)=>{

    observer.observe(section);

});


// Button Animation

const button = document.querySelector(".btn");

button.addEventListener("mouseenter",()=>{

    button.style.transform="scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

    button.style.transform="scale(1)";

});


// Typing Animation

const title=document.querySelector("header h1");

const text=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

    if(i<text.length){

        title.innerHTML+=text.charAt(i);

        i++;

        setTimeout(typing,120);

    }

}

typing();


// Floating Cards

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",()=>{

        card.style.transform="translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});