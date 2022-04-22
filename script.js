document.querySelector('#start').addEventListener('click',init);
const NumeroBombe = 16;

function init(){
  
  const container = document.querySelector('.smv-container');
  const difficolta = document.getElementById('difficolta').value;
  container.innerHTML = '';

  const Bombe = generateBombe(difficolta);
  let c = 0;
  for(let i = 0; i < difficolta; i++){
     const sq = createSquare(container,difficolta)
     sq.innerHTML = `<span>${i}</span>`;
     sq.addEventListener('click', ClickedFun)
   }
}

function createSquare( target , value ){
    const sq = document.createElement( 'div' );
    sq.className = 'square square'+ value;
    target.append(sq);
    return sq;
}

function generateBombe(difficolta){
   const GeneraBombe=[];
   while (GeneraBombe.length < NumeroBombe){
     const bombe = random(1,difficolta)
     console.log(bombe);
     if(!GeneraBombe.includes(bombe)){
        GeneraBombe.push(bombe)
     }
   }  
   return GeneraBombe;
}

function random(min,max){
   return Math.floor(Math.random() * (max - min) + min);
}

function ClickedFun(){
   this.classList.add('clicked');
}

function endGame(){
   
}