document.getElementById("likeButton").addEventListener("click", function(event) {
    console.log("Like button clicked");

    var heart = document.createElement("span");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    heart.style.left = "50%";
    heart.style.top = "50%";

    document.body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    }, 1000);
});
