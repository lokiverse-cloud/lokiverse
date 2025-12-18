const quotes = [
  {
    text: "Hard work never fails.",
    author: "A. P. J. Abdul Kalam"
  },
  {
    text: "Believe in yourself.",
    author: "Swami Vivekananda"
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Consistency is the key to success.",
    author: "Anonymous"
  }
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText =
    "“" + quotes[randomIndex].text + "”";

  document.getElementById("author").innerText =
    "— " + quotes[randomIndex].author;
}

// Show quote on page load
newQuote();
