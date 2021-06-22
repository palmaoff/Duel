function number_AI(index, arr) {
	let i = 0
	if (index % 2 === 0) {
		while (arr[i] === 0 && i < 11) {
			i += 1
		}
	} else {
		i = 10
		while (arr[i] === 0 && i >= 0) {
			i -= 1
		}
	}
	arr[i] = 0
	return i + 1
}

function printNumbers(arr) {
	let str = ''
	for (let i = 0; i < 11; i++) {
		if (arr[i] === 1) {
			str += i + 1 + ' ' 
		}
	}
	console.log('possible numbers: ' + str)
}

function main() {
	let AI_arr = new Array(11)
	let PL_arr = new Array(11)
	let AI_score = 0
	let PL_score = 0

	AI_arr.fill(1, 0, 11)
	PL_arr.fill(1, 0, 11)

	printNumbers(AI_arr)
	console.log('Enter your attack number:')

	let i = 0

	process.stdin.on('data', (data) => {
		let n = Number(data)

		// exit
		if (i === 11 || data.toString()[0] === 'q') {
			process.exit()
			if (AI_score > PL_score) {
				console.log('you lose')
			} else {
				console.log('you win')
			}
		}

		// player input
		if (Number.isInteger(n) && n > 0 && n <= 11 && PL_arr[n - 1] === 1) {
			i += 1
			PL_arr[n - 1] = 0

			// AI number
			let n_AI = number_AI(i, AI_arr)
			console.log('AI number: ' + n_AI)

			// score in atack
			if (i % 2 === 1) {
				let r = n - n_AI
				if (r > 0) {
					AI_score += r
				}

				console.log('Your score: ' + PL_score)
				console.log('AI_score: ' + AI_score + '\n')
				printNumbers(PL_arr)

				if (i !== 11) {
					console.log('Enter your defence number:')
				}
			} // score in defence
			else {

				let r = n_AI - n
				if (r > 0) {
					PL_score += r
				}
				// print inf
				console.log('Your score: ' + PL_score)
				console.log('AI_score: ' + AI_score + '\n')
				printNumbers(PL_arr)

				if (i !== 11) {
					console.log('Enter your atack number:')
				}
			}

		} else {
			console.log('Enter anouther number:')
		}
	})
}

main()
