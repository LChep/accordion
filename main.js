
var accordionContainer = document.querySelectorAll(".accordion-container");

accordionContainer.forEach ((item, index) => {
    let title = item.querySelector(".title");

    title.addEventListener("click", () => {
        item.classList.toggle("open");

        let paragraph = item.querySelector(".para");
        let icon = item.querySelector("i");
        if (item.classList.contains("open")){
            paragraph.style.maxHeight = `${paragraph.scrollHeight}px`;
            icon.classList.replace("fa-plus", "fa-minus")
        } else {
            paragraph.style.maxHeight = "0px";
            icon.classList.replace("fa-minus", "fa-plus")
        }
        
        close(index);
    })
})
function close(index1){
    accordionContainer.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let para = item2.querySelector(".para");
            let icon = item2.querySelector("i");
            para.addEventListener("click", () => {
                para.style.maxHeight = "0px";
                icon.classList.replace("fa-minus", "fa-plus")

            })    
        }
    })
}