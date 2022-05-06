let menuBtns = document.querySelectorAll('.menuBtns');
let insideMenus = document.querySelectorAll('.insideMenus')
let isOpen = false;


for(let i=0; i<menuBtns.length; i++){
    menuBtns[i].addEventListener("click", function(){
        if(isOpen==false){
            for(let j=0; j<insideMenus.length; j++){
                insideMenus[j].style.display = "none"
            }
            insideMenus[i].style.display = "block"
            isOpen=true;
        }else{
            if(insideMenus[i].style.display=="block"){
                for(let j=0; j<insideMenus.length; j++){
                    insideMenus[j].style.display = "none"
                }
                isOpen=false;
            }else{
                for(let j=0; j<insideMenus.length; j++){
                    insideMenus[j].style.display = "none"
                }
                insideMenus[i].style.display="block"
                isOpen=true;
            }  
        }
    })
}       

document.addEventListener("click",function(e){
    if(e.target.className != "menuBtns"){
        for(let i=0; i<insideMenus.length; i++){
            insideMenus[i].style.display = "none"
        }     
        isOpen = false;
    }
})

    