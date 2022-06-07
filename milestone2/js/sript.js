// generate box
const numbersContainer = document.querySelector('.numbers-container')

for(let i = 0; i <= 1000; i++){
	let treeFive;
	if(i % 3 === 0 && i % 5 === 0){		
			treeFive = 'fizzbuzz'
	} else if(i % 5 === 0) {
			 treeFive = 'buzz'
			
	} else if (i % 3 === 0){
			treeFive = 'fizz'
			
	} else {
			 treeFive = i
		
	}
	
	const newBox = `<div class="box">${treeFive}</div>`;
	
	numbersContainer.innerHTML += newBox;
}