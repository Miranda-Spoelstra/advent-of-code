let intcode = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,9,19,23,1,6,23,27,2,27,9,31,2,6,31,35,1,5,35,39,1,10,39,43,1,43,13,47,1,47,9,51,1,51,9,55,1,55,9,59,2,9,59,63,2,9,63,67,1,5,67,71,2,13,71,75,1,6,75,79,1,10,79,83,2,6,83,87,1,87,5,91,1,91,9,95,1,95,10,99,2,9,99,103,1,5,103,107,1,5,107,111,2,111,10,115,1,6,115,119,2,10,119,123,1,6,123,127,1,127,5,131,2,9,131,135,1,5,135,139,1,139,10,143,1,143,2,147,1,147,5,0,99,2,0,14,0];
// 1: 12, 2: 2 for the first part of the excersize

function processIntcode(input) {
	let i = 0;
    while(i < input.length) {
      	if (input[i] === 1) {
            // addition of the next two numbers
            let loc1 = input[i+1];
            let loc2 = input[i+2];
            let locResult = input[i+3];
            input[locResult] = input[loc1] + input[loc2];
            i += 4;
		} else if (input[i] === 2) {
            // multiplication of the next two numbers
            let loc1 = input[i+1];
            let loc2 = input[i+2];
            let locResult = input[i+3];
            input[locResult] = input[loc1] * input[loc2];
            i += 4;
    	} else if (input[i] === 99) {
		    break;
		}
    }
	return input;
}

// not working??
function findOutput(num, sequence) {
    let max = sequence.length;
    for (let i = 0; i < max; i++) {
        sequence[1] = i;
        for (let j = 0; j < max; j++) {
            sequence[2] = j;
            let result = processIntcode(sequence);
            if (result === num) {
                return (100 * i + j);
            }
        }
    }
}

// console.log(processIntcode([1,9,10,3,2,3,11,0,99,30,40,50]));
// console.log(processIntcode(intcode));
console.log(findOutput(19690720, intcode));
