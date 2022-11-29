const numb = document.getElementById("number");
const but1 = document.getElementById("add");
const but2 = document.getElementById("change_color");

but1.addEventListener("click" , event=> {

    let a = Number(numb.innerText);
    a = a+1;
    numb.innerText=a; 

})

but2.addEventListener("click", event2 =>
{
    let x = numb.style.color;
    if (x=="red")
    {
        numb.style.color='black';
    }
    else 
    {
        numb.style.color='red';
    }
})