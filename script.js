//task 2
let pageTitle = document.querySelector("h1");
pageTitle.textContent = "ვენეცია";

let pageParagraph = document.querySelector("p");
pageParagraph.textContent = "ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.";

// task 3
pageTitle.className = "pageTitle";
pageParagraph.className = "pageParagraph";

pageParagraph.style.fontSize = "20px";
pageParagraph.style.color = "#ffff00";

// task 4
let box = document.querySelector(".box");
let circle = document.createElement("div");

box.appendChild(circle);

circle.className = "circle";
circle.style.background = "yellow";

circle.addEventListener("mouseover", () => {
    circle.style.background = "red"
});

circle.addEventListener("mouseout", () => {
    circle.style.background = "yellow"
});

// task 5
let button = document.createElement("button");

box.appendChild(button);
// radgan erti button aris marto class agar mivutite da pirdapir gavstile:)

button.textContent = "DELETE CIRCLE";

button.addEventListener("click", () => {
    if(button.textContent == "DELETE CIRCLE"){
        button.textContent = "RETURN CIRCLE";
        circle.style.display = "none";
        button.style.marginTop = "400px"; // es button rom igive adgilze darches da zemot ar avardes:)
    }else{
        button.textContent = "DELETE CIRCLE";
        circle.style.display = "block";
        button.style.marginTop = "0";
    }
});
