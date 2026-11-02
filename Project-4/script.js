        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
        let userGuess = document.querySelector('#guessField');
        let message = document.querySelector('.lowOrHi');
        let Submit = document.querySelector('.guessSubmit');
        let guesses = document.querySelector('.guesses');
        let remaining = document.querySelector('.lastResult');
        const startOver = document.querySelector(".resultParas");
        
        let p = document.createElement('p');
        let numGuess = 1
        let playGame = true;
        let prevGuess = [];
        
        if (playGame) {
            Submit.addEventListener('click', (e) => {
                e.preventDefault();
                const guess = userGuess.value;
                validGuess(guess);
            })
        }
        
        function validGuess(guess){
            if (guess == "" || isNaN(guess)) {
                message.innerHTML = "Enter valid number.";
            } else if (guess > 100 || guess <= 0) {
                message.innerHTML = "Please enter number between 1 to 100";
            } else {
                prevGuess.push(guess) ;
                if (numGuess == 10) {
                    displayGuess(guess);
                    message.innerHTML = "Game Over! Start Again!!";
                    endGame();
                    
                } else{
                    displayGuess(guess);
                    checkGuess(guess);
                }
            }
        }
        
        function checkGuess(guess) {
            if (guess == randomNumber) {
                message.innerHTML = "YOU WIN!!!";
                endGame();
            } else if (guess > randomNumber) {
                message.innerHTML = "Toooo high.";
            } else {
                message.innerHTML = "Toooo low.";
            }
        }

        function displayGuess(guess) {
            userGuess.value = "";
            guesses.innerHTML += `${guess}, `;
            numGuess++ ;
            remaining.innerHTML = `${11 - numGuess}`;
        }
        
        function newGame() {
           let newGameButton = document.querySelector('#newGame')
            newGameButton.addEventListener('click', () => {
                randomNumber = Math.floor(Math.random() * 100) + 1;
                console.log(randomNumber);
                prevGuess = [];
                numGuess = 1;
                guesses.innerHTML ='';
                remaining.innerHTML = "10";
                userGuess.removeAttribute('disabled');
                message.innerHTML = "";
                startOver.removeChild(p);
                playGame = true;
            });
        }
        
        function endGame() {
            userGuess.value = "";
            userGuess.setAttribute('disabled', "");
            p.classList.add('button');
            p.innerHTML = `<buton id = "newGame">Start Game</button>`;
            startOver.appendChild(p);
            playGame = false;
            newGame();
        }

 


        // let randomNumber = parseInt(Math.random() * 100 + 1);
        // const submit = document.querySelector("#subt");
        // const userInput = document.querySelector("#guessField");
        // const userguessSlot = document.querySelector(".guesses");
        // const remaining = document.querySelector(".lastResult");
        // const lowOrHi = document.querySelector(".lowOrHi");
        // const startOver = document.querySelector(".resultParas");

        // const p = document.createElement('p');

        // let prevGuess = [];
        // let numGuess = 1;
        // let playGame = true;

        // if (playGame) {
        //     submit.addEventListener('click', (e) => {
        //         e.preventDefault();
        //         const guess = parseInt(userInput.value)
        //         console.log(guess);
        //         validateGuess(guess);
        //     });
        // }
 
        // function validateGuess(guess) {
        //     //

        //     if (guess === "" || isNaN(guess)) {
        //         alert("Please Enter valid number")
        //         // p.innerHTML = `${guess} is not valid number, please give valid number`;
        //     } else if (guess > 100 || guess <= 0) {
        //         alert("please enter number between 1 to 100 only")
        //         // p.innerHTML = `please give number between 1 to 100 only`;
        //     } else {
        //         prevGuess.push(guess);
        //         if (numGuess == 10) {
        //             displayGuess(guess);
        //             displayMessage(`Game Over! Random number was ${randomNumber}`);
        //             endGame();
        //         } else {
        //             displayGuess(guess);
        //             checkGuess(guess);
        //         }
        //     }
        // }

        // function checkGuess(guess) {
        //     if (guess == randomNumber) {
        //         displayMessage("You Guesses It Right!")
        //         endGame();
        //     } else if (guess > randomNumber) {
        //         displayMessage("Guess lower number")
        //         // endGame();
        //     } else if (guess < randomNumber) {
        //         displayMessage("GUess Higher Number")
        //         // endGame();
        //     }
        // }


        // function displayGuess(guess) {
        //     userInput.value = "";
        //     userguessSlot.innerHTML += `${guess}, `;
        //     numGuess++ ;
        //     remaining.innerHTML = `${11 - numGuess}`;
        // }

        // function displayMessage(message) {
        //     lowOrHi.innerHTML = `<h2>${message}</h2>`
        // }

        // function endGame() {
        //     userInput.value = "";
        //     userInput.setAttribute('disabled', "");
        //     p.classList.add('button');
        //     p.innerHTML = `<h2  id = "newGame">Start Game</h2>`;
        //     startOver.appendChild(p);
        //     playGame = false;
        //     newGame();
        // }

        // function newGame() {
        //     let newGame = document.querySelector('#newGame')
        //     newGame.addEventListener('click', (e) => {
        //         randomNumber = parseInt(Math.random() * 100 + 1);
        //         prevGuess = [];
        //         numGuess = 1;
        //         userguessSlot.innerHTML ='';
        //         remaining.innerHTML = `${11 - numGuess}`;
        //         userInput.removeAttribute('disabled');
        //         startOver.removeChild(p);
        //         playGame = true;
        //     });
        // }
