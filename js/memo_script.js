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


let memoInfo = document.querySelector('#memoInfo');
memoInfo.addEventListener("click",function(){
    alert("up to date 2022-06-09")
})

let today = new Date();
let birth22 = new Date("2022-7-9");
let diffDate = birth22.getTime() - today.getTime();
let result = Math.ceil(diffDate/(1000*60*60*24));

let dDayText = document.createTextNode(result)
document.querySelector("#birthLeft").appendChild(dDayText);

let birthMoney= document.querySelector('#birthMoney');
birthMoney.addEventListener("click",function(){
    alert("카카오뱅크 ")
})

let birthGift = document.querySelector('#birthGift');
