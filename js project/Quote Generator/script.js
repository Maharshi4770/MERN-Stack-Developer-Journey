// document.addEventListener("DOMContentLoaded", function() {
const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function get_quote() {
  const response = await fetch(api_url);
  var data = await response.json();
  // console.log(data);
  let content = data.content;
  let author1 = data.author;
  quote.innerHTML = content;
  author.innerHTML = author1;
  console.log(quote.innerHTML);
}

get_quote();
function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML);
}
