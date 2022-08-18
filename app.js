const container = document.querySelector('#container')
const answers = []
const trainingOptions = [1, 3, 5, 10, 50]
let answer
let sessionArray = [...four, ...five]
let session
let pressedButton

function mainMenu() {
	let menuContainer = document.createElement('div')
	menuContainer.id = 'menu'
	container.append(menuContainer)
	let optionsBox = document.createElement('div')
	optionsBox.id = 'testoptions'
	menuContainer.append(optionsBox)
	for (let item of trainingOptions) {
		let option = document.createElement('button')
		option.innerHTML = item
		option.classList = 'testoption'
		optionsBox.append(option)
	}
}

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
				let random = Math.floor(Math.random() * sessionArray.length)
				let currentKanji = sessionArray[random][0].slice(0, 1)
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
				let random = Math.floor(Math.random() * sessionArray.length)
				let currentOption = sessionArray[random][1]
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
				let random = Math.floor(Math.random() * sessionArray.length)
				let currentOption = sessionArray[random][0]
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
	let currentCheck = currentCardTypeId < 3 ? input.value : pressedButton.innerHTML

	switch (currentCardTypeId) {
		case 1:
		case 3:
			current = sessionArray.filter(item => item[0] == document.querySelector('.word').innerHTML)[0]
			currentWord = current[0]
			currentAnswer = current[1]
			break
		case 2:
		case 4:
			current = sessionArray.filter(item => item[1] == document.querySelector('.word').innerHTML)[0]
			currentWord = current[1]
			currentAnswer = current[0]
			break
	}

	if (currentCheck == currentAnswer) {
		validate(currentCardTypeId < 3 ? input : pressedButton, 'right', currentWord, currentAnswer)
	} else if (!input || event.key == 'Enter') {
		validate(currentCardTypeId < 3 ? input : pressedButton, 'wrong', currentWord, currentAnswer)
	}
}

function validate(input, result, word, answer) {
	input.classList.toggle(result)
	input.readOnly = true
	// console.log('card type id: ' + +document.querySelector('#card').getAttribute('typeid') + ' | input: ' + input.innerHTML || input.value + ' | right answer: ' + answer + ' (' + word + ')')
	document.removeEventListener('keyup', check)
	answers.push([input.innerHTML || input.value, result == 'right', word, answer])
	disableButtons()
	sessionArray.shift()
	setTimeout(changeCard, 1000)
}

function newSession(number) {
	for (let x = 0; x < sessionArray.length; x++) {
		for (let i = 0; i < sessionArray.length - 1; i++) {
			if (Math.round(Math.random())) {
				[sessionArray[i], sessionArray[i + 1]] = [sessionArray[i + 1], sessionArray[i]]
			}
		}
	}
	session = number
	changeCard()
}

function changeCard() {
	let trash = document.querySelector('#menu') || document.querySelector('#card') 
	if (!!trash) trash.remove()
	if (session > 0) {
		newCard(Math.floor(Math.random() * 4) + 1, sessionArray[0])
		session--
	} else {
		newCard(0)
	}
}

// newCard(1, five[10])
// newCard(2, five[19])
// newCard(3, five[55])
// newCard(4, five[38])
// newCard(0)


mainMenu()

// newSession(3)



container.addEventListener('click', function() {
	if (event.target.className == 'option') {
		let input = container.querySelector('input')
		if (!!input) {
			input.value += event.target.innerHTML
			check(container.querySelector('input'))
			event.target.blur()
		} else {
			pressedButton = event.target
			check()
		}
	}

	if (event.target.className == 'testoption') {
		newSession(+event.target.innerHTML)
	}
})



