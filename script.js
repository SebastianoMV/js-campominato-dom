document.querySelector('#start').addEventListener('click',init);
const NumeroBombe = 16;
const container = document.querySelector('.smv-container');
const main = document.querySelector('main');
let Bombe =[];
let c = 0;

function init(){
  container.innerHTML = '';
  const difficolta = document.getElementById('difficolta').value;
  createGame(difficolta);
  
}

function createGame(difficolta){
   Bombe = generateBombe(difficolta);
   console.log(Bombe);
   for(let i = 0; i < difficolta; i++){
     const sq = createSquare(container,difficolta)
     sq.innerHTML = `<span>${i}</span>`;
     sq.numero = i;
     sq.addEventListener('click', ClickedFun);
   }
}

function createSquare( target , difficolta ){
    const sq = document.createElement('div');
    sq.className = 'square square'+ difficolta;
    target.append(sq);
    return sq;
}

function generateBombe(difficolta){
   const GeneraBombe=[];
   while (GeneraBombe.length < NumeroBombe){
     const bombe = random(1,difficolta)
     
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
   
   console.log('numero' + this.numero);
   
   if (Bombe.includes(this.numero)){
      this.classList.add('bomba');
      document.querySelector('h2').innerHTML = 'Hai perso!'
   }else{
       this.classList.add('clicked');
       c++;
       document.querySelector('h3').innerHTML = `Punteggio:${c} `
   }

}

function endGame(difficolta){
   
}