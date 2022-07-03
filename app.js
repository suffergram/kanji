let container = document.querySelector('#container')

function newCard(arr, type) {
	let card = document.createElement('div')
	card.id = 'card'
	card.setAttribute('typeid', type)
	container.append(card)

	let description = document.createElement('p')
	description.classList = 'description'

	let word = document.createElement('p')
	word.classList = 'word'

	let input = document.createElement('input')
	input.type = 'text'
	input.name = 'input'

	switch (type) {
		case 1:
			description.innerHTML = 'Type the word in <u>hiragana</u>'
			card.append(description)
		
			word.innerHTML = arr[0]
			card.append(word)
			card.append(input)
			break
		case 2:
			description.innerHTML = 'Type the word in <u>kanji</u>'
			card.append(description)
		
			word.innerHTML = arr[1]
			card.append(word)
			card.append(input)

			let kanji = document.createElement('div')
			kanji.classList = 'kanji'
			card.append(kanji)

			let kanjis = new Set(arr[0].split(''))
			while (kanjis.size < 8) {
				let random = Math.floor(Math.random() * five.length)
				kanjis.add(five[random][0].slice(0, 1))
			}
			for (let i = 0; i < kanjis.size; i++) {
				let option = document.createElement('button')
				option.classList = 'option'
				option.value = i
				option.innerHTML = [...kanjis][i]
				kanji.append(option)
			}

			break
	}

	
}

newCard(five[0], 1)
newCard(five[0], 2)




