let task = document.querySelector(".tasks");
let add = document.querySelector(".add");
let input = document.querySelector(".input");

add.addEventListener("click", (e) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let btn = document.createElement("button");
    let br = document.createElement("br");
    
    btn.innerHTML = "Delete";
    h3.innerHTML = input.value;

    div.style.cssText = "margin:1rem;display:flex; flex-direction:row; justify-content:space-between; align-items:center; border:solid 1px #ccc; background-color:#fff; padding:1rem"
    btn.style.cssText = "height:2rem;padding-inline:1rem; margin-inline: 3rem;background: linear-gradient(0deg,hsl(0, 98%, 55%) 0%, hwb(0 30% 10%) 100%);box-shadow: rgba(100, 50, 5, .5) 0px -23px 25px 0px inset, rgba(20, 100, 100, 0.15) 0px -36px 30px 0px inset, rgba(20, 100, 100, 0.1) 0px -79px 40px 0px inset, rgb(221, 2, 2) 1px 1px 1px, rgba(250, 5, 5, 0.7) 2px 2px 2px, rgba(250, 8, 8, 0.6) 3px 3px 3px, rgba(250, 10, 10, 0.8) 6px 6px 8px, rgba(10, 10, 10, 0.2) 8px 8px 3px;outline: none;border: none;border-radius: .5rem;color: #fff;font-size: larger;font-weight: bolder;"
    h3.style.cssText = "font-size: 1.5rem;font-weight: 900;font-family:monospace;color: #af0039;text-shadow: white;";

    div.appendChild(h3);
    div.appendChild(btn);
    task.appendChild(div);
    
    btn.addEventListener("click", e => {
        task.removeChild(div);
    });
});
