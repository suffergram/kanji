const container = document.querySelector('#container')
let input = document.createElement('input')
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
			break
		case 1:
			description.innerHTML = 'Type the word in <u>hiragana</u>'
			word.innerHTML = arr[0]
			card.append(input)
			document.addEventListener('keydown', check)
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
			document.addEventListener('keydown', check)
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

function check(event) {
	if (event.key == 'Enter') {
		checkAnswer()
		let current = document.querySelector('#card').children[2]
		if (!current.classList.contains('right')) {
			current.classList.toggle('wrong')
			answers.push(input.value + ' (' + answer + ')')
			document.removeEventListener('keydown', check)
		} else {
			answers.push(input.value)
			document.removeEventListener('keydown', check)
		}
		if (document.querySelector('input').getAttribute('typeid') == 2) disableButtons()
		setTimeout(changeCard, 1000)
	}
}

function disableButtons() {
	let buttons = container.querySelectorAll('.option')
	for (let item of buttons) {
		item.disabled = true
	}
}

function checkAnswer(input) {
	let currentCard = document.querySelector('#card')
	let id = currentCard.getAttribute('typeid')
	let currentWord = currentCard.children[1].innerHTML
	if (id == 1 || id == 2) input = currentCard.children[2]
	for (let item of five) {
		if (id == 1 || id == 3) {
			if (item[0] == currentWord) answer = item[1]
		} else if (id == 2 || id == 4) {
			if (item[1] == currentWord) answer = item[0]
		}
	}
	
	if ((id == 1 || id == 2) && input.value.trim() == answer) {
		input.classList.toggle('right')
		input.readOnly = true
		if (id == 2) disableButtons()
		answers.push(input.innerHTML)
		setTimeout(changeCard, 1000)
	}
	
	if (id == 3 || id == 4) {
		if (input.innerHTML == answer) {
			input.classList.toggle('right')
			input.readOnly = true
			answers.push(input.innerHTML)
		} else {
			input.classList.toggle('wrong')
			input.readOnly = true
			answers.push(input.innerHTML + ' (' + answer + ')')
		}
		disableButtons()
		setTimeout(changeCard, 1000)
	}
	document.removeEventListener('keydown', check)
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
// newCard(3, five[55])
// newCard(4, five[38])
// newCard(0)

newSession()

// newCard(five[Math.floor(Math.random() * five.length)], Math.floor(Math.random() * 4) + 1)

container.addEventListener('click', function() {
	if (event.target.className == 'option') {
		let input = container.querySelector('input')
		if (!!input) {
			input.value += event.target.innerHTML
			checkAnswer()
		} else {
			checkAnswer(event.target)
		}
	}
})





