// generate box
const numbersContainer = document.querySelector('.numbers-container')

for(let i = 0; i <= 1000; i++){
	if(i % 3 === 0 && i % 5 === 0){
		console.log('fizzbuzz')
	} else if(i % 5 === 0) {
		console.log('Buzz')
	} else if (i % 3 === 0){
		console.log('fizz')
	} else {
		console.log(i);
	}
	
	
	// //box created
	// const  newBox = `<div class="box">${i}</div>`;
	// //stamp
	// let treeFiveClassName = 'tree';
	// if(i % 3 === 0){
	// 	 treeFiveClassName = 'tree'
//}
	
	
	//numbersContainer.innerHTML += newBox;
}