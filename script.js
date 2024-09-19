let uzytkownicy = [
    {
        name: "piotrek",
        img: "./img/piotrek.jpg"
    },
    {
        name: "dziewczynapiorka",
        img: "./img/dziewczynapuitrka.jfif"
    },
    {
        name: "azjatkauwu",
        img: "./img/slodka-azjatka.jpg"
    },
    {
        name: "stuu",
        img: "./img/stuu.jpg"
    },
    {
        name: "fotografd",
        img: "./img/panfotograf.jfif"
    }    
]

function galerry(){
    document.querySelector(".zdjecia").innerHTML = ""
    let x = 0
uzytkownicy.forEach(e => {
    document.querySelector(".zdjecia").innerHTML += `<div class="profil"> tu bedzoe zdjecie nr ${++x} 
    <div class = "zdjecie"><img src="${uzytkownicy[x-1].img}" alt=""></div>
    </div>` 
});
}

document.querySelector(".button").addEventListener("click", ()=>wyszukiwanie())



function wyszukiwanie(){
    let imie = document.querySelector("#imie").value
    if(imie){
        let finduser = uzytkownicy.find((e) => e.name == imie)
        if(finduser){
            document.querySelector(".zdjecia").innerHTML = `<div class="profil"> <h2> ${finduser.name} </h2>
    <div class = "zdjecie"><img src="${finduser.img}" alt="${finduser.name}"></div>
    </div>`
        }else{
            galerry()
        }
    }
}
document.querySelector("body").onload = galerry()