const quotes = [
  {
    text: "Believe in yourself.",
    author: "Swami Vivekananda"
  },
  {
    text: "Hard work never fails.",
    author: "A. P. J. Abdul Kalam"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Success is the sum of small efforts repeated daily.",
    author: "Robert Collier"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Consistency is the key to success.",
    author: "Anonymous"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Anonymous"
  },
  {
    text: "Your future is created by what you do today.",
    author: "Anonymous"
  },
  {
    text: "Arise, awake and stop not till the goal is reached.",
    author: "Swami Vivekananda"
  },

  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Hands that offer love are often left empty,while hands that receive rarely reach back",
    author: "Loki"
  }
  
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  // Remove old animation
  quoteEl.classList.remove("fade");
  authorEl.classList.remove("fade");

  // Change text
  quoteEl.innerText = "“" + quotes[randomIndex].text + "”";
  authorEl.innerText = "— " + quotes[randomIndex].author;

  // Re-add animation
  void quoteEl.offsetWidth; // trick to restart animation
  quoteEl.classList.add("fade");
  authorEl.classList.add("fade");
}
window.onload = newQuote;
