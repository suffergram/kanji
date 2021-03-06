const container = document.querySelector('#container')
const answers = []
let answer
let sessionArray = [...five]
let session = 4

function newCard(type, arr = undefined) {
	let card = document.createElement('div')
	card.id = 'card'
	card.setAttribute('typeid', type)
	container.append(card)

	let description = document.createElement('p')
	description.classList = 'description'

	let word = document.createElement('p')
	word.classList = 'word'

	let input = document.createElement('input')
	input.innerHTML = ''
	input.type = 'text'
	input.name = 'input'

	description.innerHTML = 'Choose the right answer'
	card.append(description)
	card.append(word)

	let options
	let div = document.createElement('div')

	switch (type) {
		case 0:
			description.innerHTML = 'Your result:'
			word.remove()
			card.append(div)
			console.log(answers)
			for (let item of answers) {
				let answer = document.createElement('p')
				answer.innerHTML = item[0]
				answer.classList.toggle(item[1] ? 'right' : 'wrong')
				answer.classList.add('result')
				div.append(answer)
			}
			break
		case 1:
			description.innerHTML = 'Type the word in <u>hiragana</u>'
			word.innerHTML = arr[0]
			card.append(input)
			document.addEventListener('keyup', check)
			break
		case 2:
			description.innerHTML = 'Type the word in <u>kanji</u>'
			word.innerHTML = arr[1]
			card.append(input)

			div.classList = 'kanji'
			card.append(div)

			let kanjis = arr[0].split('')
			while (kanjis.length < 8) {
				let random = Math.floor(Math.random() * five.length)
				let currentKanji = five[random][0].slice(0, 1)
				if (!kanjis.includes(currentKanji)) kanjis.push(currentKanji)
			}

			// shuffle kanjis twice
			for (let i = 0; i < kanjis.length - 1; i++) {
				if (Math.round(Math.random())) [kanjis[i], kanjis[i + 1]] = [kanjis[i + 1], kanjis[i]]
			}
			for (let i = 0; i < kanjis.length / 2; i++) {
				if (Math.round(Math.random())) [kanjis[i], kanjis[kanjis.length - i - 1]] = [kanjis[kanjis.length - i - 1], kanjis[i]]
			}

			for (let i = 0; i < kanjis.length; i++) {
				let option = document.createElement('button')
				option.classList = 'option'
				option.value = i
				option.innerHTML = [...kanjis][i]
				div.append(option)
			}
			document.addEventListener('keyup', check)
			break
		case 3:
			word.innerHTML = arr[0]
			card.append(div)

			options = [arr[1]]
			while (options.length < 4) {
				let random = Math.floor(Math.random() * five.length)
				let currentOption = five[random][1]
				if (!options.includes(currentOption)) options.push(currentOption)
			}
			for (let i = 0; i < options.length - 1; i++) {
				if (Math.round(Math.random())) [options[i], options[i + 1]] = [options[i + 1], options[i]]
			}
			for (let i = 0; i < options.length; i++) {
				let option = document.createElement('button')
				option.classList = 'option'
				option.value = i
				option.innerHTML = options[i]
				div.append(option)
			}
			break
		case 4:
			word.innerHTML = arr[1]
			card.append(div)

			options = [arr[0]]
			while (options.length < 4) {
				let random = Math.floor(Math.random() * five.length)
				let currentOption = five[random][0]
				if (!options.includes(currentOption)) options.push(currentOption)
			}
			for (let i = 0; i < options.length - 1; i++) {
				if (Math.round(Math.random())) [options[i], options[i + 1]] = [options[i + 1], options[i]]
			}
			for (let i = 0; i < options.length; i++) {
				let option = document.createElement('button')
				option.classList = 'option'
				option.value = i
				option.innerHTML = options[i]
				div.append(option)
			}
			break
	}
}

function disableButtons() {
	let buttons = container.querySelectorAll('.option')
	for (let item of buttons) {
		item.disabled = true
	}
}

function check(event) {
	let input = container.querySelector('input')
	let current, currentWord, currentAnswer

	let currentCardTypeId = +document.querySelector('#card').getAttribute('typeid')
	switch (currentCardTypeId) {
		case 1:
		case 3:
			current = five.filter(item => item[0] == document.querySelector('.word').innerHTML)[0]
			currentWord = current[0]
			currentAnswer = current[1]
			break
		case 2:
		case 4:
			current = five.filter(item => item[1] == document.querySelector('.word').innerHTML)[0]
			currentWord = current[1]
			currentAnswer = current[0]
			break

	}

	if (input.value == currentAnswer) {
		input.classList.toggle('right')
		input.readOnly = true
		console.log('card type id: ' + currentCardTypeId + ' | input: ' + input.value + ' | right answer: ' + currentAnswer + ' (' + currentWord + ')')
		document.removeEventListener('keyup', check)
		answers.push([input.value, true, currentWord, currentAnswer])
		disableButtons()
		setTimeout(changeCard, 1000)
	} else try {
		if (event.key == 'Enter') {
			input.classList.toggle('wrong')
			input.readOnly = true
			console.log('card type id: ' + currentCardTypeId + ' | input: ' + input.value + ' | right answer: ' + currentAnswer + ' (' + currentWord + ')')
			document.removeEventListener('keyup', check)
			answers.push([input.value, false, currentWord, currentAnswer])
			disableButtons()
			setTimeout(changeCard, 1000)
		}
	} catch (error) {}
}

function newSession() {
	for (let x = 0; x < sessionArray.length; x++) {
		for (let i = 0; i < sessionArray.length - 1; i++) {
			if (Math.round(Math.random())) {
				[sessionArray[i], sessionArray[i + 1]] = [sessionArray[i + 1], sessionArray[i]]
			}
		}
	}

	changeCard()
}

function changeCard() {
	let oldCard = document.querySelector('#card')
	if (!!oldCard) oldCard.remove()
	if (session > 0) {
		newCard(Math.floor(Math.random() * 4) + 1, sessionArray[0])
		sessionArray.shift()
		session--
	} else {
		newCard(0)
	}
}

// newCard(1, five[10])
// newCard(2, five[19])
newCard(3, five[55])
// newCard(4, five[38])
// newCard(0)

// newSession()

// newCard(five[Math.floor(Math.random() * five.length)], Math.floor(Math.random() * 4) + 1)

container.addEventListener('click', function() {
	if (event.target.className == 'option') {
		let input = container.querySelector('input')
		if (!!input) input.value += event.target.innerHTML
		check()
		event.target.blur()
		// if (!!input) {
		// 	input.value += event.target.innerHTML
		// 	// checkAnswer()
		// } 
		// else {
		// 	checkAnswer(event.target)
		// }
	}
})




