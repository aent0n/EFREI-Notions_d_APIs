// When clicking the button, a function inverts the color order of the gradient of both the button and the body
document.getElementById("button1").addEventListener("click", function() {
    console.log("button clicked");

    let body = document.querySelector("body");
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");

    let BodyColors1 = "#ff7e5f, #feb47b, #86a8e7, #91eae4";
    let ButtonColors1 = "#91eae4, #86a8e7, #feb47b, #ff7e5f";
    let BodyColors2 = "#91eae4, #86a8e7, #feb47b, #ff7e5f";
    let ButtonColors2 = "#ff7e5f, #feb47b, #86a8e7, #91eae4";

    let isBodyColors1 = body.dataset.isBodyColors1 === "true";

    if (isBodyColors1) {
        console.log("bg colors 1");

        body.style.background = "linear-gradient(270deg, " + BodyColors2 + ")";
        body.style.backgroundSize = "800% 800%";
        body.style.animation = "gradientAnimation 15s ease infinite";

        button1.style.background = "linear-gradient(270deg, " + ButtonColors2 + ")";
        button1.style.backgroundSize = "800% 800%";
        button1.style.animation = "buttonAnimation 15s ease infinite";
        button2.style.background = "linear-gradient(270deg, " + ButtonColors2 + ")";
        button2.style.backgroundSize = "800% 800%";
        button2.style.animation = "buttonAnimation 15s ease infinite";
        button3.style.background = "linear-gradient(270deg, " + ButtonColors2 + ")";
        button3.style.backgroundSize = "800% 800%";
        button3.style.animation = "buttonAnimation 15s ease infinite";
    } else {
        console.log("bg colors 2");

        body.style.background = "linear-gradient(270deg, " + BodyColors1 + ")";
        body.style.backgroundSize = "800% 800%";
        body.style.animation = "gradientAnimation 15s ease infinite";

        button1.style.background = "linear-gradient(270deg, " + ButtonColors1 + ")";
        button1.style.backgroundSize = "800% 800%";
        button1.style.animation = "buttonAnimation 15s ease infinite";
        button2.style.background = "linear-gradient(270deg, " + ButtonColors1 + ")";
        button2.style.backgroundSize = "800% 800%";
        button2.style.animation = "buttonAnimation 15s ease infinite";
        button3.style.background = "linear-gradient(270deg, " + ButtonColors1 + ")";
        button3.style.backgroundSize = "800% 800%";
        button3.style.animation = "buttonAnimation 15s ease infinite";
    }

    body.dataset.isBodyColors1 = !isBodyColors1;
});
