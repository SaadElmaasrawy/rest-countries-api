const url = 'https://restcountries.com/v3.1/all'

let countries = document.getElementById("countries");
let opions = document.getElementById("region-select");
let input = document.getElementById("input");
let page = document.getElementById("page");
let main = document.getElementById("main");

opions.onchange = function(){
    countries.innerHTML = '';
    fetch(url)
    .then(res => res.json())
    .then(data => {

        for(let x=0 ; x <256 ; x++){
            if(data[x].region == opions.value){
                countries.innerHTML += `
                <div class="country" id="country">
                    <div style="background-image: url(${data[x].flags.png})" class="flag" onclick="countryDiv('${data[x].name.common}')">
                    </div>
                    <div class="country-text">
                        <h3>${data[x].name.common}</h3>
                        </br>
                        <h5>Population : ${data[x].population}</h5>
                        <h5>Region : ${data[x].region}</h5>                
                        <h5>Capital : ${data[x].capital}</h5>
                    </div>
                </div>
                `
            }
            if(opions.value == "all"){
                displayCountry();
            }
        
        }
    }


    )
}

displayCountry();

input.oninput =function(){
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then(res => res.json())
    .then(data => {
        countries.innerHTML ='';
        
        if(input.value == ''){
            displayCountry();
        }else{
            for(let i = 0 ; i < 256 ; i++){
                countries.innerHTML += `
                <div class="country" id="country" onclick="countryDiv('${data[i].name.common}')">
                    <div style="background-image: url(${data[i].flags.png})" class="flag">
                    </div>
                    <div class="country-text">
                        <h3>${data[i].name.common}</h3>
                        </br>
                        <h5>Population : ${data[i].population}</h5>
                        <h5>Region : ${data[i].region}</h5>                
                        <h5>Capital : ${data[i].capital}</h5>
                    </div>
                </div>
                `
            }
        }
    })
}

function displayCountry(){
    fetch(url)
            .then(res => res.json())
            .then(data => 
                // console.log(data)

                {
                for(let i = 0 ; i < 256 ; i++){
                    countries.innerHTML += `
                    <div class="country" id="country" value="${i}" onclick="countryDiv('${data[i].name.common}')">
                        <div style="background-image: url(${data[i].flags.png})" class="flag">
                        </div>
                        <div class="country-text">
                            <h3>${data[i].name.common}</h3>
                            </br>
                            <h5>Population : ${data[i].population}</h5>
                            <h5>Region : ${data[i].region}</h5>                
                            <h5>Capital : ${data[i].capital}</h5>
                        </div>
                    </div>
                    `
                }

            } 
            )
}

function countryDiv(name){
    main.classList.add('hide');
    page.classList.remove('hide');
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => 
        {
            let obj1 = data[0].currencies;
            let obj2 = data[0].languages;
            console.log(data[0]);
            page.innerHTML = `
            <button id="back" onclick="back()"><i class="fa-solid fa-arrow-left"></i>&emsp;&emsp;back</button>
            <div class="page-con">
                <div class="left">
                    <img src="${data[0].flags.png}">
                </div>
                <div class="right">
                    <h1>${data[0].name.common}</h1>
                    <div class="r-right">
                        <div class="l-left">
                        <h3>Official Name : <span>${data[0].name.official}</span></h3>
                        <h3>Population : <span>${data[0].population}</span></h3>
                        <h3>Region : <span>${data[0].region}</span></h3>
                        <h3>Sub Region : <span>${data[0].subregion}</span></h3>
                        <h3>Capital : <span>${data[0].capital}</span></h3>
                    </div>
                    <div class="l-right">
                        <h3>Top Level Domain : <span>${data[0].tld[0]}</span></h3>
                        <h3>Currencies : <span>${Object.values(obj1)[0].name}</span></h3>
                        <h3>Languages : <span>${Object.values(obj2)[0]}</span></h3>
                    </div>
                    </div>
                </div>
            </div>
            `
        }
        )
}


function back(){
    page.classList.add('hide');
    main.classList.remove('hide');
}

let countryA = document.getElementsByClassName("country");
let navBar = document.getElementById("nav");
let bdy = document.getElementById("body");
function darkMode(){

    if(body.classList == 'vsc-initialized'){
        body.classList.add("bright");
    }else{
        body.classList.remove("bright");
    }
    if(navBar.classList == 'nav'){
        navBar.classList.add("bright");
    }else{
        navBar.classList.remove("bright");
    }
    for(i = 0 ; i<256;i++){
        if(countryA[i].classList == 'country'){
            countryA[i].classList.add("bright");
        }else{
            countryA[i].classList.remove("bright");
        }
    };

}