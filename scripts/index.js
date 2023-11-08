"use strict";

window.onload = init;

const jokesContainer = document.getElementById("jokesContainer");

function init(){
    const showMeTheJokesBtn = document.getElementById("showMeTheJokesBtn")
    showMeTheJokesBtn.onclick = showMeTheJokesBtnClicked

    populateCategoriesDropdown();


}

function populateCategoriesDropdown(){
// populate categories dropdown with distinct categories from the jokes array
    let categories = getCategoriesArray();

    for(let category of categories){
        const categoriesSelect = document.getElementById("categoriesSelect");
        let newOption = new Option(category, category);
        categoriesSelect.appendChild(newOption);

    }

}

function getCategoriesArray(){
    let categories = [];
    for( let dadJoke of jokes.dadJokes){
       // console.log(dadJoke);
        if(categories.includes(dadJoke.category) != true) {
            categories.push(dadJoke.category);

        }
    }

    categories.sort(categories);
    console.log(categories);

    return categories;
}

function addJokeToContainer(joke){
    let accordionItemDiv = document.getElementById("div");
    accordionItemDiv.className = "accordion-item";

    jokesContainer.appendChild(accordionItemDiv);

    let accordionHeader = document.createElement("h2");
    accordionHeader,className = "accordion-header";

    accordionItemDiv.appendChild(accordionHeader);

    let btn = document.createElement("button");
    btn.className = "accordion-button collapsed";
    btn.type = "button";
    btn.setAttribute("data-bs-toggle", "collapse")

    let targetId = "flsuh-collapes" + joke.id;

    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);

    let btnTextNode = document.createTextNode(joke.setup);
    btn.appendChild(btnTextNode);

    accordionHeader.appendChild(btn);

    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId
    flushCollapseDiv.className = "accordion-collapse collapse"
    flushCollapseDiv.setAttribute("data-bs-parent", "#jokesContainer");

    let accordionBody = document.createElement("div")
    accordionBody.className = "accordion-body";

    let accordionBodyTextNode = document.createTextNode(joke.punchline);

    accordionBody.appendChild(accordionBodyTextNode);



    flushCollapseDiv.appendChild(accordionBody);

    
}


function showMeTheJokesBtnClicked(){
    //identify the selected category and loop through and show those jokes
}