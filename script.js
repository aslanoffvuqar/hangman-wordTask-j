
// const words = ['Aghdam',
//     'Agdash',
//     'Aghjabadi',
//     'Agstafa',
//     'Agsu',
//     'Astara',
//     'Aghdara',
//     'Babek',
//     'Baku',
//     'Balakən',
//     'Barda',
//     'Beylagan',
//     'Bilasuvar',
//     'Dashkasan',
//     'Shabran',
//     'Fuzuli',
//     'Gadabay',
//     'Ganja',
//     'Goranboy',
//     'Goychay',
//     'Goygol',
//     'Hajigabul',
//     'Imishli',
//     'Ismayilli',
//     'Jabrayil',
//     'Julfa',
//     'Kalbajar',
//     'Khachmaz',
//     'Khankendi',
//     'Khojavend',
//     'Khirdalan',
//     'Kurdamir',
//     'Lankaran',
//     'Lerik',
//     'Masally',
//     'Mingachevir',
//     'Nakhchivan',
//     'Naftalan',
//     'Neftchala',
//     'Oghuz',
//     'Ordubad',
//     'Qabala',
//     'Qakh',
//     'Qazakh',
//     'Quba',
//     'Qubadli',
//     'Qusar',
//     'Saatli',
//     'Sabirabad',
//     'Shahbuz',
//     'Shaki',
//     'Shamakhi',
//     'Shamkir',
//     'Sharur',
//     'Shirvan',
//     'Siyazan',
//     'Shusha',
//     'Sumgait',
//     'Tartar',
//     'Tovuz',
//     'Ujar',
//     'Yardimli',
//     'Yevlakh',
//     'Zaqatala',
//     'Zardab',
//     'Zangilan'];
// let chosenWord = '';
// let wordDisplay = [];
// let guessesLeft = 6;
// let lettersGuessed = []
// // Selects a random word from the words array
// function chooseWord() {
//     chosenWord = words[Math.floor(Math.random() * words.length)];
//     wordDisplay = chosenWord.split('').map(letter => '_');
//     updateWordDisplay();
//     updateGuessesLeft();
// console.log(chosenWord);
// }


// // sozu təzəliyir
// function updateWordDisplay() {
//     document.getElementById('word').innerText = wordDisplay.join(' ');
// }

// // qalan can sayi
// function updateGuessesLeft() {
//     document.getElementById('guesses-left').innerText = `Guesses left: ${guessesLeft}`;
// }


// // oyunu basladir
// document.getElementById('restart-btn').addEventListener('click', () => {
//     chosenWord = '';
//     wordDisplay = [];
//     guessesLeft = 6;
//     lettersGuessed = [];
//     chooseWord();
// });


// // Event listener for key presses
// document.addEventListener('keydown', event => {
//     const letter = event.key.toLowerCase();
//     if (/^[a-z]$/.test(letter)) {
//         checkLetter(letter);
//     }
// });
// function checkLetter(letter) {
//     if (chosenWord.includes(letter)) {
//         for (let i = 0; i < chosenWord.length; i++) {
//             if (chosenWord[i] === letter) {
//                 wordDisplay[i] = letter;
//             }
//         }
//         updateWordDisplay();
//         if (!wordDisplay.includes('_')) {
//             alert('You win!');
//         }
//     } else {
//         if (guessesLeft === 0) {
//             alert('Game over!');
//             return;
//         }
//         guessesLeft--;
//         updateGuessesLeft();
//     }
//     lettersGuessed.push(letter);

// }
