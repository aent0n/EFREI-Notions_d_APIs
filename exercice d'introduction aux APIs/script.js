// When clicking the button, a function inverts the color order of the gradient of both the button and the body
document.getElementById("button1").addEventListener("click", function() {
    console.log("button clicked");

    let body = document.querySelector("body");
    let button = document.getElementById("button1");

    let BodyColors1 = "#ff7e5f, #feb47b, #86a8e7, #91eae4";
    let ButtonColors1 = "#91eae4, #86a8e7, #feb47b, #ff7e5f";
    let BodyColors2 = "#91eae4, #86a8e7, #feb47b, #ff7e5f";
    let ButtonColors2 = "#ff7e5f, #feb47b, #86a8e7, #91eae4";

    // Variable to track the current state
    let isBodyColors1 = body.dataset.isBodyColors1 === "true";

    if (isBodyColors1) {
        console.log("bg colors 1");

        body.style.background = "linear-gradient(270deg, " + BodyColors2 + ")";
        body.style.backgroundSize = "800% 800%";
        body.style.animation = "gradientAnimation 15s ease infinite";

        button.style.background = "linear-gradient(270deg, " + ButtonColors2 + ")";
        button.style.backgroundSize = "800% 800%";
        button.style.animation = "buttonAnimation 15s ease infinite";
    } else {
        console.log("bg colors 2");

        body.style.background = "linear-gradient(270deg, " + BodyColors1 + ")";
        body.style.backgroundSize = "800% 800%";
        body.style.animation = "gradientAnimation 15s ease infinite";

        button.style.background = "linear-gradient(270deg, " + ButtonColors1 + ")";
        button.style.backgroundSize = "800% 800%";
        button.style.animation = "buttonAnimation 15s ease infinite";
    }

    // Toggle the state
    body.dataset.isBodyColors1 = !isBodyColors1;
});
