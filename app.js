body {
	background-color: #121212;
	color: #FFFFFF;
	-webkit-tap-highlight-color: transparent;
}

*:focus {
    outline: 0 !important;
}

#container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

#menu {
	width: 50vw;
	height: 50vh;
	padding: 5%;
	box-sizing: border-box;
	outline: 1px solid red; 
}

#testoptions {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(1, 1fr);
	grid-gap: 5px;
	outline: 1px solid green;
}

#testoptions button {
	border: none;
	padding: 20px;
	background-color: rgba(255, 255, 255, .07);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	cursor: pointer;
}

#card {
	background-color: rgba(255, 255, 255, .07);
	border-radius: 10px;
	padding: 50px;
	margin: 10px;
	width: 395px;
	user-select: none;
}

#card p {
	margin: 0;
	font-size: 2em;
}

#card input, #card button {
	font-size: 2em;
	border: none;
	width: 100%;
	margin: 5px 0;
	border-radius: 5px;
}

#card input:focus {
	outline: none;
}

.option {
	cursor: pointer;
	background-color: #BB86FC;
	color: #121212;
}

.description {
	font-size: 1.5em !important;
}

.kanji {
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-gap: 5px;
}

.right {
	background-color: #89ee89;
	color: #016601;
}

.wrong {
	background-color: #ee8989;
	color: #660101;
}

#card .result {
	border-radius: 5px;
	margin-top: 5px;
}
