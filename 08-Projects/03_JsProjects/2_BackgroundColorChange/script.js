const parent = document.getElementById("color-container");

parent.addEventListener('click',(e)=>{
    const body = document.querySelector('body');

    if (e.target.id === "reset") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = e.target.id;
    }
});