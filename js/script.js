window.onload = ()=>{
    /* olhada no carrosel do bootstrap  */
    /* carrosel Step Next */
    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3")

    function itemFirst(){
       
            item1.classList.remove("d-none");
            item1.classList.add("active");
            item2.classList.add("d-none");
            item2.classList.remove("active");
            item3.classList.add("d-none");
            item3.classList.remove("active");
    }
    function secondContent(){  
       
            item2.classList.remove("d-none");
            item2.classList.add("active");
            item1.classList.add("d-none");
            item1.classList.remove("active");
            item3.classList.add("d-none");
            item3.classList.remove("active");
    }
    console.log("item3")
    function itemThird(){
            item3.classList.remove("d-none");
            item3.classList.add("active");
            item1.classList.add("d-none");
            item3.classList.remove("active");
            item2.classList.add("d-none");
            item3.classList.remove("active");
    }

    let n1 = document.getElementById("n1");
    n1.addEventListener("click", (e)=>{
        e.preventDefault();
        itemFirst();
        
    });
    let n2 = document.getElementById("n2");
    n2.addEventListener("click", (e)=>{
        e.preventDefault()
        secondContent();
    })
    let n3 = document.getElementById("n3");
    n3.addEventListener("click",(e)=>{
        e.preventDefault();
        itemThird();
    });


}
