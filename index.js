function roll(div) 
{
    const element = document.querySelector(div);
    const content = element.querySelector(".content");

    let c = content.classList[0];
    let i = c.charAt(c.length - 1)

    if(content.classList.contains("rolling" + i))
    {
        content.classList.remove("rolling" + i);
        content.classList.add("unrolling" + i);
        return;
    }

    content.classList.add("rolling" + i);
    content.classList.remove("unrolling" + i);
}