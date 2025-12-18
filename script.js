const quotes = [
  "Believe in yourself.",
  "Success needs patience.",
  "Hard work never fails.",
  "Dream big.",
  "Never give up.",
  "Stay positive.",
  "Your future is created today.",
  "Consistency is the key."
];



function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText = quotes[randomIndex];
  document.getElementById("quote").style.color = colors[randomIndex];
}

// Show one quote when page loads
newQuote();