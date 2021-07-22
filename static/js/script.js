gameElements = ["paper", "rock", "scissors"];

function runGame(userPickupElement) {
    console.log(userPickupElement.id); 
    

    // computer Picks up element
    let elementIndex = Math.floor(Math.random() * gameElements.length);
    computerPickupElement = gameElements[elementIndex];
    console.log(computerPickupElement);
    console.log(elementIndex);

    // removing the exiting elements in div
    for (const element of gameElements) {
        document.getElementById(element).remove();
    }

    
    // create a result div
    let resultDiv = document.createElement('div');
    resultDiv.setAttribute('id', 'displayResult');
    document.getElementById('game-img').appendChild(resultDiv);

    let divId = "displayResult";

    //  game conditions
    if ((computerPickupElement == "paper" && userPickupElement.id == "scissors") ||
    (computerPickupElement == "rock" && userPickupElement.id == "paper") ||
    (computerPickupElement == "scissors" && userPickupElement.id == "rock")) {
        // user is the winner!
        addImgTage(divId, userPickupElement.id, 'userPickupElement');
        addH1Tag(divId, 'You won :)', 'user-is-winner');
        addImgTage(divId, computerPickupElement, 'computerPickupElement');

    }else if (computerPickupElement == userPickupElement.id) {
        // Draw!
        addImgTage(divId, userPickupElement.id, 'userPickupElement');
        addH1Tag(divId, 'Draw!', 'Draw');
        addImgTage(divId, computerPickupElement, 'computerPickupElement');
        
    } else {
        // computer is the winner!
        addImgTage(divId, userPickupElement.id, 'userPickupElement');
        addH1Tag(divId, 'You lost :(', 'user-is-losser');
        addImgTage(divId, computerPickupElement, 'computerPickupElement');
        
    }

    // game reseter!!
    let divButton = document.createElement('div');
    let button = document.createElement('button');
    divButton.setAttribute('id','divButton')
    button.appendChild(document.createTextNode('Try Again'));
    button.setAttribute('onclick', 'reset()');
    button.setAttribute('class', 'btn btn-success');
    divButton.appendChild(button);
    document.getElementById(divId).appendChild(divButton)

}

//  adding image tage
function addImgTage(divId /* string */, elemetImgName /* string */, textId) {
    let img = document.createElement("img");
    img.src = `static/img/${elemetImgName}.png`;
    img.width ="150";
    img.height = img.width;
    img.setAttribute("id", textId);
    img.setAttribute('class', 'resultImg');

    if (gameElements.includes(textId)) {
        img.setAttribute('onclick', 'runGame(this)');
        img.setAttribute('class', 'start-img');   
    }

    document.getElementById(divId).appendChild(img);
}

// create a h1 and div tage
function addH1Tag(divId,textDisplay, h1Id) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let textNode = document.createTextNode(textDisplay);
    h1.appendChild(textNode);
    div.setAttribute('id', h1Id);
    div.appendChild(h1);
    document.getElementById(divId).appendChild(div);
    
}

// reset to begining of the game
function reset() {
    let test = document.getElementById('displayResult').remove();

    for (const element of gameElements) {
        addImgTage('game-img', element, element)
    }
    
}