const userInitials = document.querySelector('#userInitials');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = document.querySelector('#mostRecentScore');

const highScores = JSON.parse(localStorage('highScores')) || [];

const MAX_HIGH_SCORES = 10;

finalScore.innerText = mostRecentScore;

userInitials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !userInitials.value
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: userInitials.value
    }

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/')
}

