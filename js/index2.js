let rowData = document.getElementById("rowData");
let searchContainer = document.getElementById("searchContainer");
let buton;

 $(document).ready(() => {
    //  searchByName("").then(() => {
        $(".loading").fadeOut(500)
        $("body").css("overflow", "visible")

    //  })
 })

// function openSideNav() {
//     $(".side-nav-menu").animate({
//         left: 0
//     }, 500)


//     $(".open-close-icon").removeClass("fa-align-justify");
//     $(".open-close-icon").addClass("fa-x");


//     for (let i = 0; i < 5; i++) {
//         $(".links li").eq(i).animate({
//             top: 0
//         }, (i + 5) * 100)
//     }
// }

function closeSideNav() {
    let boxWidth = $(".side-nav-menu .nav-tab").outerWidth()
    $(".side-nav-menu").animate({
        left: -boxWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
}
closeSideNav() 
// closeSideNav()
// $(".side-nav-menu i.open-close-icon").click(() => {
//     if ($(".side-nav-menu").css("left") == "0px") {
//         closeSideNav()
//     } else {
//         openSideNav()
//     }
// })


$(".side-nav-menu i.open-close-icon ").click(()=>{
    
    let barWidth = $(".side-nav-menu .nav-tab ").outerWidth()
    if($(".side-nav-menu").css("left")=="0px"){
        $(".side-nav-menu").animate({left:-barWidth},500)
        $(".open-close-icon").addClass("fa-align-justify")
        $(".open-close-icon").removeClass("fa-x")
        $(".links li").animate({top:300},500)
    }else{
        $(".side-nav-menu").animate({left:"0px"},500)
        $(".open-close-icon").removeClass("fa-align-justify")
        $(".open-close-icon").addClass("fa-x")
        
        for (let i=0;i<5;i++){
            $(".links li").eq(i).animate({top:0},(i+5)*100)
        }
       
    }
        
  
})

// search

async function getSearch(term){
    searchContainer.innerHTML = "";
    let response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    finalResult = await response.json()
    // console.log(finalResult.meals);
    displaygetSearch(finalResult.meals)
}

function displaygetSearch(arr){
    let cartoona = ""
    for (let i=0 ; i<arr.length;i++){
     cartoona +=` <div class="col-md-3">
     <div onclick ="getMealsDet('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-3 cursor-pointer">
         <img class="w-100" src="${arr[i].strMealThumb}" alt="">
         <div class="layer position-absolute d-flex align-items-center text-black">
             <h3>${arr[i].strMeal}</h3>
         </div>
     </div>
 </div>`
    }
    rowData.innerHTML= cartoona
}



getSearch("")


// cateogory

async function getCateogory(){
    searchContainer.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    finalResult = await response.json()
    // console.log(finalResult.categories)
    displayCateogory(finalResult.categories)
}

function displayCateogory(arr){
    let cartoona =""
    for (let i = 0 ; i<arr.length ; i++)
    {
        cartoona +=` <div class="col-md-3">
     <div  onclick="getCategDet('${arr[i].strCategory}')" class= "meal position-relative overflow-hidden rounded-3 cursor-pointer">
         <img class="w-100" src="${arr[i].strCategoryThumb}" alt="">
         <div class="layer position-absolute  text-center text-black">
             <h3>${arr[i].strCategory}</h3>
             <p>${arr[i].strCategoryDescription.split(" ").slice(0,25).join(" ")}</p>
         </div>
     </div>
 </div>`
    }
    rowData.innerHTML= cartoona
}


// area

async function getArea(){
    searchContainer.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    finalResult =await response.json()
    console.log(finalResult.meals);
    displayArea(finalResult.meals)

}
function displayArea(arr){
    let cartoona =""
    for (let i = 0 ; i<arr.length ; i++)
    {
        cartoona +=` <div class="col-md-3">
     <div onclick="getAreaDet('${arr[i].strArea}')" class="rounded-3 text-center cursor-pointer">
         <i class="fa-solid fa-drumstick-bite fa-4x"></i>
             <h3>${arr[i].strArea}</h3>
     </div>
 </div>`
    }
    rowData.innerHTML= cartoona
}

// ingredients

async function getIngredients(){
    searchContainer.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    finalResult =await response.json()
    console.log(finalResult.meals);
    displayIngredients(finalResult.meals.slice(0,20))

}


function displayIngredients(arr){
    let cartoona =""
    for (let i = 0 ; i<arr.length ; i++)
    {
        cartoona +=` <div class="col-md-3">
     <div onclick = "getIngredientDet('${arr[i].strIngredient}')" class="rounded-3 text-center cursor-pointer">
          <i class="fa-solid fa-drumstick-bite fa-4x"></i>
             <h3>${arr[i].strIngredient}</h3>
             <p>${arr[i].strDescription.split(" ").slice(0,25).join(" ")}</p>
     </div>
 </div>`
    }
    rowData.innerHTML= cartoona
}

// detailsCategeory

async function getCategDet(cateogory){
    searchContainer.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateogory}`)
    finalResult = await response.json()
    console.log(finalResult)
    displaygetSearch(finalResult.meals)
    // displayCateogory(finalResult.meals)
}

// detailArea

async function getAreaDet(area){
    searchContainer.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    finalResult = await response.json()
    console.log(finalResult)
    displaygetSearch(finalResult.meals)
    
}

// detailIngredient
async function getIngredientDet(ingredients){
    searchContainer.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    finalResult = await response.json()
    console.log(finalResult)
    displaygetSearch(finalResult.meals)
    
}

// detailsMeals2

async function getMealsDet(mealDet){
    searchContainer.innerHTML = "";
    let response =await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDet}`)
    finalResult = await response.json();
    // console.log(finalResult.meals[0]);
    displayMealsDet(finalResult.meals[0])
}


function displayMealsDet(meal){
    let ingredients = ``
    for( let i=1;i<20; i++){
        if(meal[`strIngredient${i}`]){
            ingredients +=`<li class="alert alert-info info m-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
            
        }
    }
    let tags = meal.strTags.split(",")
    if (!tags) tags = []
    let tagsStr = ''
    for(let i=0;i<tags.length;i++){
        tagsStr +=`
        <li class="alert alert-danger m-1"> ${tags[i]}</li>`
    }
    
  let cartoona = `
  <div class="col-md-4">
  <img class="w-100 rounded-2" src="${meal.strMealThumb}" alt="">
  <h2>${meal.strMeal}</h2>
</div>
<div class="col-md-8">
  <h2>Instructions</h2>
  <p>${meal.strInstructions}</p>
  <h3><span class="fw-bold">Area:</span> ${meal.strArea}</h3>
  <h3><span class="fw-bold">Category:</span>${meal.strCategory}</h3>
  <h3>Recipes :</h3>
  <ul class="list-unstyled d-flex g-3 flex-wrap">
      ${ingredients}
  </ul>
  <h3>Tags :</h3>
  <ul class="list-unstyled d-flex g-3 flex-wrap">
      ${tagsStr}
  </ul>
  <a target =" _blank" href="${meal.strSource}" class="btn btn-success">Source</a>
  <a target =" _blank" href="${meal.strYoutube}" class="btn btn-danger">youtube</a>
</div>`
rowData.innerHTML = cartoona
}


// search
function getShSearch(){
    searchContainer.innerHTML = `
    <div class="row py-5">
        <div class="col-md-6 ">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search by Name">
        </div>
        <div class="col-md-6 ">
            <input onkeyup="searchByLetter(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search by First Letter">
        </div>
    </div>`
    rowData.innerHTML = ""
}
async function searchByName(term){
    let response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    finalResponse = await response.json()
    finalResponse.meals ? displaygetSearch(finalResponse.meals) : displaygetSearch([])
    console.log(finalResponse);
}

// byletter
async function searchByLetter(term){
    let response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
    finalResponse = await response.json()
    finalResponse.meals ? displaygetSearch(finalResponse.meals) : displaygetSearch([])
    console.log(finalResponse);
}

// contact us
function contactUs(){
    rowData.innerHTML = `
    <div class="contact vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-3">
            <div class="col-md-6">
                <input id ="nameIn" onkeyup = "inputValidation()" class="form-control " type="text" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id ="emailIn" onkeyup = "inputValidation()" class="form-control " type="email" placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id ="phoneIn" onkeyup = "inputValidation()"class="form-control " type="text" placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                Enter valid Phone Number
            </div>
            </div>
            <div class="col-md-6">
                <input id ="ageIn" onkeyup = "inputValidation()" class="form-control " type="number" placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id ="passwordIn" onkeyup = "inputValidation()" class="form-control " type="password" placeholder="Enter Your password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                Enter valid password *Minimum eight characters, at least one letter and one number:*
            </div>
            </div>
            <div class="col-md-6">
                <input id ="repasswordIn" onkeyup = "inputValidation()" class="form-control " type="password" placeholder="Enter Your password">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id = "buton" disabled class="btn btn-outline-danger py-2 mt-3">Submit</button>
    </div>
</div> 
`
 buton =document.getElementById("buton")
}


function inputValidation(){
    if (nameValidation()){
     document.getElementById("nameAlert").classList.replace("d-block","d-none")
    }else{
        document.getElementById("nameAlert").classList.replace("d-none","d-block") 
    }
    if (emailValidation()){
     document.getElementById("emailAlert").classList.replace("d-block","d-none")
    }else{
        document.getElementById("emailAlert").classList.replace("d-none","d-block") 
    }
    if (phoneValidation()){
     document.getElementById("phoneAlert").classList.replace("d-block","d-none")
    }else{
        document.getElementById("phoneAlert").classList.replace("d-none","d-block") 
    }
    if (ageValidation()){
     document.getElementById("ageAlert").classList.replace("d-block","d-none")
    }else{
        document.getElementById("ageAlert").classList.replace("d-none","d-block") 
    }
    if (passwordValidation()){
     document.getElementById("passwordAlert").classList.replace("d-block","d-none")
    }else{
        document.getElementById("passwordAlert").classList.replace("d-none","d-block") 
    }
    if (repasswordValidation()){
     document.getElementById("repasswordAlert").classList.replace("d-block","d-none")
    }else{
        document.getElementById("repasswordAlert").classList.replace("d-none","d-block") 
    }




 if   (nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()){
        buton.removeAttribute("disabled")  
    }else{
        buton.setAttribute("disabled",true)  
    } 
}

function nameValidation(){
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameIn").value))
}
function emailValidation(){
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailIn").value))
}
function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneIn").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageIn").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordIn").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordIn").value == document.getElementById("passwordIn").value
}