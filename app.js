const container = document.querySelector('#container')
const trainingOptions = [1, 3, 5, 10, 15, 25, 50, 100, 150, 200]
let sessionArray
let answers = []
let answer
let session
let pressedButton
let amount = 0
let kanji = ''
let start
let changeCardTimer = 2000

// initializing global object
window.database = {
	n5kanji: n5kanji,
	n4kanji: n4kanji,
	n3kanji: n3kanji,
	n2kanji: n2kanji,
	// n1kanji: n1kanji,
	n5vocab: n5vocab,
	n4vocab: n4vocab,
	n3vocab: n3vocab,
	n2vocab: n2vocab,
	// n1vocab: n1vocab,
}

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
	testOptionsBox.classList = 'options'
	testOptionsBox.id = 'amount'
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
	levelOptionsBox.classList = 'options'
	levelOptionsBox.id = 'kanji'
	menuContainer.append(levelOptionsBox)

	let setDescription = document.createElement('p')
	setDescription.classList = 'description'
	setDescription.innerHTML = 'Choose level of vocabulary'
	menuContainer.append(setDescription)

	let setOptionsBox = document.createElement('div')
	setOptionsBox.classList = 'options'
	setOptionsBox.id = 'vocabulary'
	menuContainer.append(setOptionsBox)

	for (let i = 5; i >= 2; i--) {
		let option = document.createElement('button')
		option.innerHTML = 'N' + i
		option.id = 'n' + i + 'kanji'
		option.classList = 'testoption'
		levelOptionsBox.append(option)
	}

	for (let i = 5; i >= 2; i--) {
		let option = document.createElement('button')
		option.innerHTML = 'N' + i
		option.id = 'n' + i + 'vocab'
		option.classList = 'testoption'
		setOptionsBox.append(option)
	}

	menuContainer.append(document.createElement('hr'))

	let startButton = document.createElement('button')
	startButton.classList = 'start description'
	startButton.innerHTML = 'Start'
	menuContainer.append(startButton)
}

function newCard(type, arr = undefined) {
	function addCardAnswers(typeInput, amountOfAnswers = 4) {
		let options = new Set([arr[typeInput]])
		while (options.size < amountOfAnswers) {
			let random = Math.floor(Math.random() * sessionArray.length)
			let currentOption = sessionArray[random][typeInput]
			options.add(currentOption)
		}
		options = Array.from(options)

		// shuffle options
		shuffleOptions(options)

		for (let i = 0; i < options.length; i++) {
			let option = document.createElement('button')
			option.classList = 'option'
			option.value = i
			option.innerHTML = options[i]
			div.append(option)
		}
	}

	function addCardOptions(typeInput, amountOfOptions = 8) {
		let options = new Set(arr[typeInput].split(''))
		// while amount of option buttons less than needed, add more
		while (options.size < amountOfOptions) {
			let random = Math.floor(Math.random() * sessionArray.length)
			let currentKanji = sessionArray[random][typeInput].slice(0, 1)
			options.add(currentKanji)
		}
		options = Array.from(options)
		
		// shuffle options
		shuffleOptions(options)

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

	let description = document.createElement('p')
	description.classList = 'description'
	description.innerHTML = 'Choose the right answer'

	let word = document.createElement('p')
	word.classList = 'word'

	let input = document.createElement('input')
	input.innerHTML = ''
	input.type = 'text'
	input.name = 'input'

	let backspace = document.createElement('button')
	backspace.innerHTML = '⟵'
	backspace.classList = 'backspace'

	let inputsection = document.createElement('div')
	inputsection.id = 'inputsection'

	let translation = document.createElement('p')
	translation.classList = 'translation description'
	translation.style.opacity = 0

	let div = document.createElement('div')

	container.append(card)
	card.append(description)
	card.append(word)
	card.append(translation)

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
			div.classList = 'answers'
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
			card.append(inputsection)
			inputsection.append(input, backspace)

			div.classList = 'cardoptions'
			card.append(div)

			addCardOptions(2)
			document.addEventListener('keyup', check)
			break
		case 2:
			description.innerHTML = 'Type the word in <u>kanji</u>'
			word.innerHTML = arr[2]
			card.append(inputsection)
			inputsection.append(input, backspace)

			div.classList = 'cardoptions'
			card.append(div)

			addCardOptions(0)
			document.addEventListener('keyup', check)
			break
		case 3:
			word.innerHTML = arr[0]
			card.append(div)
			addCardAnswers(2)
			break
		case 4:
			word.innerHTML = arr[2]
			card.append(div)
			addCardAnswers(0)
			break
	}
}

function shuffleOptions(arr) {
	for (let shuffle = 0; shuffle < arr.length * 2; shuffle++) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (Math.random() < .6) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
		}
		for (let i = 0; i < arr.length / 2; i++) {
			if (Math.random() < .6) [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
		}
	}
	return arr
}

function disableButtons() {
	let buttons = container.querySelectorAll('button')
	for (let item of buttons) {
		item.disabled = true
	}
}

function check(event) {
	function validate(input, result) {
		input.classList.toggle(result)
		input.readOnly = true
		document.removeEventListener('keyup', check)
		answers.push([input.innerHTML || input.value, result == 'right', currentWord, currentAnswer])
		disableButtons()
		for (let item of current[1].split('; ')) {
			currentTranslation.innerHTML += '<p>- ' + item + '</p>'
		}
		currentTranslation.style.opacity = 1
		sessionArray.shift()
		setTimeout(changeCard, changeCardTimer)
	}

	let input = container.querySelector('input')
	let current, currentWord
	let currentAnswer = []

	let currentCardTypeId = +document.querySelector('#card').getAttribute('typeid')
	let currentCheck = currentCardTypeId < 3 ? input.value : pressedButton.innerHTML
	let currentTranslation = document.querySelector('.translation')

	switch (currentCardTypeId) {
		case 1:
		case 3:
			current = sessionArray.filter(item => item[0] == document.querySelector('.word').innerHTML)[0]
			currentWord = current[0]
			for (let i = 2; i < current.length; i++) currentAnswer.push(current[i])
			break
		case 2:
		case 4:
			current = sessionArray.filter(item => item[2] == document.querySelector('.word').innerHTML)[0]
			currentWord = current[2]
			currentAnswer.push(current[0])
			break
	}

	if (currentAnswer.includes(currentCheck)) {
		validate(currentCardTypeId < 3 ? input : pressedButton, 'right')
	} else if (!input || event.key == 'Enter') {
		validate(currentCardTypeId < 3 ? input : pressedButton, 'wrong')
	}
}

function newSession() {
	answers = []
	start = Date.now()
	shuffleOptions(sessionArray)
	session = amount
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

function setSessionSettings() {
	let sessionAmount = document.querySelector('#amount > .pressed')
	amount = sessionAmount == undefined ? 0 : +sessionAmount.innerHTML

	let sessionKanji = document.querySelectorAll('#kanji > .pressed')
	kanji = ''
	for (let item of sessionKanji) {
		kanji += database[item.id]
	}

	let sessionVocabulary = document.querySelectorAll('#vocabulary > .pressed')
	let temporaryArray = []
	for (let item of sessionVocabulary) temporaryArray.push(...database[item.id])

	// create set of words for training
	sessionArray = []
	if (!!!temporaryArray.length) temporaryArray = [...n5vocab, ...n4vocab]
	if (kanji != '') {
		for (let item of temporaryArray) {
			let temporary = item[0]
			for (let letter of temporary) {
				if (kanji.includes(letter) || hiragana.includes(letter)) temporary = temporary.slice(1)
			}
			if (temporary == '') sessionArray.push(item)
		}
	} else {
		sessionArray = temporaryArray
	}
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
		} else {
			document.querySelectorAll('.amount').forEach(elem => elem.classList.remove('pressed'))
			event.target.classList.add('pressed')
		}
	}

	if (event.target.className.includes('testoption')) {
		event.target.classList.toggle('pressed')
	}

	if (event.target.className.includes('start')) {
		setSessionSettings()
		if (!!amount) newSession()
	}

	if (event.target.className.includes('again')) {
		newSession()
	}

	if (event.target.className.includes('menu')) {
		mainMenu()
	}

	if (event.target.className.includes('backspace')) {
		let input = container.querySelector('input')
		if (!!input.value) {
			input.value = input.value.slice(0, -1)
		}
	}
})


