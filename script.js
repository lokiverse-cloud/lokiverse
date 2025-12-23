let lastQuote = null;

const quotes = [
  // Motivation
  { text: "Believe in yourself.", author: "Swami Vivekananda", category: "Motivation" },
  { text: "Hard work never fails.", author: "A. P. J. Abdul Kalam", category: "Motivation" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { text: "Success is the sum of small efforts repeated daily.", author: "Robert Collier", category: "Motivation" },
  { text: "Push yourself, because no one else will.", author: "Unknown", category: "Motivation" },

  // Education
  { text: "Education is the most powerful weapon.", author: "Nelson Mandela", category: "Education" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci", category: "Education" },
  { text: "Education is not preparation for life; education is life itself.", author: "John Dewey", category: "Education" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", category: "Education" },
  { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle", category: "Education" },

  // Life
  { text: "Life is what happens when you’re busy making plans.", author: "John Lennon", category: "Life" },
  { text: "Live as if you were to die tomorrow.", author: "Mahatma Gandhi", category: "Life" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", category: "Life" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "Life" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", category: "Life" },

  // Love
  { text: "Hands that offer love are often left empty, while hands that receive rarely reach back.", author: "Loki", category: "Love" },
  { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle", category: "Love" },
  { text: "Where there is love there is life.", author: "Mahatma Gandhi", category: "Love" },
  { text: "Love all, trust a few.", author: "William Shakespeare", category: "Love" },
  { text: "Love is not what you say, love is what you do.", author: "Unknown", category: "Love" }
];

let currentQuotes = [...quotes];

function displayQuote(q) {
  document.getElementById("quote").innerText = `"${q.text}"`;
  document.getElementById("author").innerText = `— ${q.author}`;
}

function newQuote() {
  if (currentQuotes.length === 0) return;

  let randomQuote;
  do {
    randomQuote = currentQuotes[Math.floor(Math.random() * currentQuotes.length)];
  } while (randomQuote === lastQuote && currentQuotes.length > 1);

  lastQuote = randomQuote;
  displayQuote(randomQuote);
}

function filterByCategory() {
  const selected = document.getElementById("categorySelect").value;

  currentQuotes =
    selected === "All"
      ? [...quotes]
      : quotes.filter(q => q.category === selected);

  newQuote();
}

function searchQuotes() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  currentQuotes = quotes.filter(q =>
    q.text.toLowerCase().includes(input) ||
    q.author.toLowerCase().includes(input)
  );

  newQuote();
}

// Load first quote automatically
document.addEventListener("DOMContentLoaded", () => {
  filterByCategory();
});
