let wins = localStorage.getItem('wins') || 0;
        let losses = localStorage.getItem('losses') || 0;
        let ties = localStorage.getItem('ties') || 0;

        function updateScore() {
            document.getElementById('score').textContent = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            localStorage.setItem('wins', wins);
            localStorage.setItem('losses', losses);
            localStorage.setItem('ties', ties);
        }

        function play(playerChoice) {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            let result;

            if (playerChoice === computerChoice) {
                result = "It's a tie!";
                ties++;
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = "You win!";
                wins++;
            } else {
                result = "You lose!";
                losses++;
            }

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `You <div class="image-container"><img src="img/${playerChoice}-emoji.png" alt="${playerChoice}">`;
            resultDiv.innerHTML += `<div class="image-container"><img src="img/${computerChoice}-emoji.png" alt="${computerChoice}"> Computer`;
            resultDiv.innerHTML += `<p>${result}</p>`;
            updateScore();
        }

        function reset() {
            wins = 0;
            losses = 0;
            ties = 0;
            updateScore();
        }

        updateScore(); // Initialize score display