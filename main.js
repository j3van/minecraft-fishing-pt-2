// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    //Fish with Steve
    // Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      resultImg.src = "img/Raw-Tropical.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Fish with Alex
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Tropical.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
  // Fish with Villager
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.25) {
    resultImg.src = "img/Raw-cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.5) {
    resultImg.src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.75) {
    resultImg.src = "img/Raw-Tropical.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    resultImg.src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
}

// Event Listener
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);
plus5Btn.addEventListener("click", plus5);

// Event functions
function selectSteve() {}

function selectAlex() {}

function fishOnce() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    //Fish with Steve
    // Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      resultImg.src = "img/Raw-Tropical.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Fish with Alex
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Tropical.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
  // Fish with Villager
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.25) {
    resultImg.src = "img/Raw-cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.5) {
    resultImg.src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.75) {
    resultImg.src = "img/Raw-Tropical.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    resultImg.src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishOnce();
  }
}
