// Grab the userInput, button and result 
const userInput = document.getElementById('userInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const moodPredictor = document.getElementById('moodPredictor');
const moodSpans = moodPredictor.querySelectorAll('span');
const positiveWords = ["happy", "good", "great", "awesome", "love", "amazing", "excellent", "nice"];
const negativeWords = ["sad", "bad", "angry", "hate", "awful", "terrible", "horrible", "worst"];

// Link these three areas together
analyzeBtn.addEventListener('click', () => {
    const text = userInput.value.trim().toLowerCase();
    const words = text.replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean);
    let score = 0;
    words.forEach((word) => {
        if (positiveWords.includes(word)) {
            score++;
        }
        else if (negativeWords.includes(word)) {
            score--;
        }
    })
    const mood = score > 0 ? 'positive' : score < 0 ? 'negative' : 'neutral';
    const moodConfig = mood === 'positive' ? { 
        label: 'Positive', 
        emoji: '🙂', 
        color: '#b7f7c5' 
    } : mood === 'negative' ? { 
        label: 'Negative', 
        emoji: '🙁', 
        color:'#ffb3b3' 
    } : { 
        label: 'Neutral', 
        emoji: '😐', 
        color: '#cfd8dc' 
    };
    document.body.style.backgroundColor = moodConfig.color;
    moodSpans[0].textContent = moodConfig.label;
    moodSpans[1].textContent = moodConfig.emoji;
});

