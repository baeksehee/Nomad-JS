const quotes = [
  {
    quote: "Tomorrow hopes we have learned something from yesterday.",
    author: "blank1",
  },
  {
    quote: "I respect faith, but doubt is what gets you an eduction.",
    author: "blank2",
  },
  { quote: "Much learning does not teacth understanding.", author: "blank3" },
  {
    quote: "The endeavor to understand is the first and only basis of virtue.",
    author: "blank4",
  },
  {
    quote: "Do not do to others what angers you if done to you by others.",
    author: "blank5",
  },
  {
    quote: " am not afraid of storms for I am learning how to sail my ship.",
    author: "blank6",
  },
  {
    quote:
      "You cannot have a proud and chivalrous spirit if your conduct is mean and paltry; for whatever a man’s actions are, such must be his spirit.",
    author: "blank7",
  },
  {
    quote: "The merit of an action lies in finishing it to the end.",
    author: "blank8",
  },
  { quote: "He who can, does. He who cannot, teaches.", author: "blank9" },
  {
    quote:
      "Perhaps the most valuable result of all eduncation is the ability to make yourself do the thing you have to do, when it ought to be done, whether you like it or not; it is the first lesson that ought to be learned; and however early a man’s training begins, it is brobably the last lesson that he learns thoroughly.",
    author: "blank10",
  },
];
//object들을 콤마(,)로 구분함.
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
