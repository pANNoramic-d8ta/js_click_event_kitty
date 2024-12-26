var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

button.addEventListener("click", function () {
    //cat.classList.add("show")

    if (cat.classList.contains("show")) {
        button.classList.add("disappear")
    //console.log("Yes");
    cat.classList.remove("show")
    button.innerText = ("Wait, come back!");
} else {
    //console.log("No");
    cat.classList.add("show")
    button.innerText = ("Shoo,cat!!");
    button.classList.remove("disappear")
}
    });