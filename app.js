const container = document.querySelector('#container')
let sessionArray = [...four, ...five]
const trainingOptions = [1, 3, 5, 10, 15, 25, 50, 100, 150, 200, sessionArray.length]
let answers = []
let answer
let session
let pressedButton
let amount = 0
let start

function mainMenu() {
	amount = 0
	removeTrash()
	let menuContainer = document.createElement('div')
	menuContainer.id = 'menu'
	container.append(menuContainer)

	let amountDescription = document.createElement('p')
	amountDescription.classList = 'description'
	amountDescription.innerHTML = 'Choose amount of questions'
	menuContainer.append(amountDescription)

	let testOptionsBox = document.createElement('div')
	testOptionsBox.classList = 'testoptions'
	menuContainer.append(testOptionsBox)
	for (let item of trainingOptions) {
		let option = document.createElement('button')
		option.innerHTML = item
		option.classList = 'amount'
		testOptionsBox.append(option)
	}

	let levelDescription = document.createElement('p')
	levelDescription.classList = 'description'
	levelDescription.innerHTML = 'Choose level of kanji'
	menuContainer.append(levelDescription)

	let levelOptionsBox = document.createElement('div')
	levelOptionsBox.classList = 'testoptions'
	menuContainer.append(levelOptionsBox)
	for (let i = 5; i >= 4; i--) {
		let option = document.createElement('button')
		option.innerHTML = 'N' + i
		option.classList = 'testoption'
		option.disabled = true
		levelOptionsBox.append(option)
	}

	menuContainer.append(document.createElement('hr'))

	let startButton = document.createElement('button')
	startButton.classList = 'start description'
	startButton.innerHTML = 'Start'
	menuContainer.append(startButton)
}

function newCard(type, arr = undefined) {

	function addCardAnswers(typeInput, amountOfAnswers = 4) {
		options = [arr[typeInput]]
		while (options.length < amountOfAnswers) {
			let random = Math.floor(Math.random() * sessionArray.length)
			let currentOption = sessionArray[random][typeInput]
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
	}

	function addCardOptions(typeInput, amountOfOptions = 8) {
		let options = arr[typeInput].split('')
		// while amount of option buttons less than needed, add more
		while (options.length < amountOfOptions) {
			let random = Math.floor(Math.random() * sessionArray.length)
			let currentKanji = sessionArray[random][typeInput].slice(0, 1)
			if (!options.includes(currentKanji)) options.push(currentKanji)
		}
		// shuffle options twice
		for (let i = 0; i < options.length - 1; i++) {
			if (Math.round(Math.random())) [options[i], options[i + 1]] = [options[i + 1], options[i]]
		}
		for (let i = 0; i < options.length / 2; i++) {
			if (Math.round(Math.random())) [options[i], options[options.length - i - 1]] = [options[options.length - i - 1], options[i]]
		}
		for (let i = 0; i < options.length; i++) {
			let option = document.createElement('button')
			option.classList = 'option'
			option.value = i
			option.innerHTML = [...options][i]
			div.append(option)
		}
	}

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
			word.remove()
			description.classList = 'title'
			let quizCount = 0, quizRight = 0, quizWrong = 0
			
			let quizInfo = document.createElement('div')
			quizInfo.classList = 'info'
			
			let againButton = document.createElement('button')
			againButton.innerHTML = '↺ Again'
			againButton.classList = 'again option'
			
			let menuButton = document.createElement('button')
			menuButton.innerHTML = '≡ Menu '
			menuButton.classList = 'menu option'

			let buttonsContainer = document.createElement('div')
			buttonsContainer.classList = 'buttonscontainer'

			description.after(buttonsContainer)
			buttonsContainer.after(quizInfo)
			buttonsContainer.after(document.createElement('hr'))
			quizInfo.after(document.createElement('hr'))

			buttonsContainer.append(menuButton)
			buttonsContainer.append(againButton)
			card.append(div)
			
			for (let item of answers) {
				let answer = document.createElement('p')
				quizCount++
				answer.innerHTML = quizCount + '. ' + item[0]
				answer.classList.toggle(item[1] ? 'right' : 'wrong')
				answer.classList.add('result')
				div.append(answer)
				item[1] ? quizRight++ : quizWrong++
			}

			let percentage = Math.floor(+(quizRight / quizCount).toFixed(2) * 100)
			let time = Date.now() - start
			if (percentage == NaN) percentage = 0
			description.innerHTML = 'Well done! Your result is <u>' + percentage + '%</u>'
			quizInfo.innerHTML += '<p>amount of cards: ' + quizCount + '</p>'
			quizInfo.innerHTML += '<p class="result right">right: ' + quizRight + '</p>'
			quizInfo.innerHTML += '<p class="result wrong">wrong: ' + quizWrong + '</p>'
			quizInfo.innerHTML += '<p>time: ' + (time / 1000).toFixed(1) + ' s</p>'

			break
		case 1:
			description.innerHTML = 'Type the word in <u>hiragana</u>'
			word.innerHTML = arr[0]
			card.append(input)

			div.classList = 'cardoptions'
			card.append(div)

			addCardOptions(1)
			document.addEventListener('keyup', check)
			break
		case 2:
			description.innerHTML = 'Type the word in <u>kanji</u>'
			word.innerHTML = arr[1]
			card.append(input)

			div.classList = 'cardoptions'
			card.append(div)

			addCardOptions(0)
			document.addEventListener('keyup', check)
			break
		case 3:
			word.innerHTML = arr[0]
			card.append(div)
			addCardAnswers(1)
			break
		case 4:
			word.innerHTML = arr[1]
			card.append(div)
			addCardAnswers(0)
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
	document.removeEventListener('keyup', check)
	answers.push([input.innerHTML || input.value, result == 'right', word, answer])
	disableButtons()
	sessionArray.shift()
	setTimeout(changeCard, 1000)
}

function newSession(number) {
	answers = []
	start = Date.now()
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
	removeTrash()
	if (session > 0) {
		newCard(Math.floor(Math.random() * 4) + 1, sessionArray[0])
		session--
	} else {
		newCard(0)
	}
}

function removeTrash() {
	let trash = document.querySelector('#menu') || document.querySelector('#card') 
	if (!!trash) trash.remove()
}

// create main menu
mainMenu()

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

	if (event.target.className.includes('amount')) {
		if (event.target.className.includes('pressed')) {
			event.target.classList.remove('pressed')
			amount = 0
		} else {
			amount = +event.target.innerHTML
			document.querySelectorAll('.amount').forEach(elem => elem.classList.remove('pressed'))
			event.target.classList.add('pressed')
		}
		// newSession(amount)
	}

	if (event.target.className.includes('again') || event.target.className.includes('start')) {
		if (!!amount) newSession(amount)
	}

	if (event.target.className.includes('menu')) {
		mainMenu()
	}
})




