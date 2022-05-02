

// viewFile.addEventListener("click",function(){
//     if(isOpen == false){ 
//         document.querySelector("#fileMenu").style.display="inline-block";
//         isOpen = true;
//     }else{ 
//         document.querySelector("#fileMenu").style.display="none";
//         isOpen = false;
//     }
// })

// viewEdit.addEventListener("click",function(){
//     if(isOpen == false){ 
//         document.querySelector("#editMenu").style.display="inline-block";
//         isOpen = true;
//     }else{ 
//         document.querySelector("#editMenu").style.display="none";
//         isOpen = false;
//     }
// })


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

// $('#file').click(function(){
//     let $inside = (this).next().css('display');
//     if($inside == 'none'){
//         $('#fileMenu').slideDown();
//     }else{
//         $('#fileMenu').slideUp();
//     }
// })

$('.menuBtns').click(function(){
    let inside = $(this).siblings('.insideMenus').css('display');
    if(inside == 'none'){
        $('.insideMenus').slideUp(300);
        $(this).siblings('.insideMenus').slideDown(300);
    }else{
        $('.insideMenus').slideUp(300);
        // $(this).siblings('.insideMenus').slideDown();
    }

    return false;
})