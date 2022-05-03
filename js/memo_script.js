// let view = querySelectorAll("")
// let isOpen = false;

// for(let i=0; i<view.length; i++){
//     view[i].addEventListener("click", function(){
//         if(isOpen == false){
//             document.querySelectorAll(".insideMenus")[i].style.display="inline-block";
//              isOpen = true;
//          }else{
//             document.querySelectorAll(".insideMenus")[i].style.display="none";
//              isOpen = false;
//          }
//     });
// }


// $('.menuBtns').click(function(){
//     let inside = $(this).siblings('.insideMenus').css('display');
//     if(inside == 'none'){
//         $('.insideMenus').slideUp(300);
//         $(this).siblings('.insideMenus').slideDown(300);
//     }else{
//         $('.insideMenus').slideUp(300);
//         // $(this).siblings('.insideMenus').slideDown();
//     }

//     return false;
// })

let menuBtns = document.querySelectorAll('.menuBtns');
let insideMenus = document.querySelectorAll('.insideMenus')
let isOpen = false;


if(isOpen==false){
    for(let i=0; i<menuBtns.length; i++){
        menuBtns[i].addEventListener("click", function(){
            for(let j=0; j<insideMenus.length; j++){
                insideMenus[j].style.display = "none"
            }
            insideMenus[i].style.display = "block"
        })
        isOpen = true;
    }
}

document.addEventListener("click",function(e){
    if(e.target.className != "menuBtns"){
        for(let i=0; i<insideMenus.length; i++){
            insideMenus[i].style.display = "none"
        }     
        isOpen = false;
    }
})

