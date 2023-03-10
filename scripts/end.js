const userInitials = document.getElementById('userInitials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 10;

finalScore.innerText = mostRecentScore;

userInitials.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !userInitials.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: userInitials.value
    };

    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score);

    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/pages/leaderboard.html')
}

