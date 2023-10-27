import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState({});
  const [quote, setquote] = useState(
    "I didn’t fail the test. I just found 100 ways to do it wrong."
  );
  const [author, setauthor] = useState("Benjamin Franklin");
  const [theme, settheme] = useState("#27ae60");
  let colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  // Handleclick Method
  function getQuote() {
    const { quote, author } = getRandomQuote();
    const theme = getRandomColor();
    console.log(theme);
    settheme(theme);
    setauthor(author);
    setquote(quote);
  }

  // function for getting Random quote
  function getRandomQuote() {
    return data[Math.floor(Math.random() * data.length)];
  }

  // function for getting a Random color
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // fetching data
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");

        return response.json();
      })
      .then((data) => setdata(data.quotes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="wrapper" style={{ backgroundColor: theme, color: theme }}>
      <div id="quote-box">
        <div className="quote-text" style={{ opacity: 1 }}>
          <i className="fa fa-quote-left"> </i>
          <span id="text">{quote}</span>
        </div>
        <div className="quote-author" style={{ opacity: 1 }}>
          - <span id="author">{author}</span>
        </div>
        <div className="buttons">
          <div className="link">
            <a
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22I%20didn%E2%80%99t%20fail%20the%20test.%20I%20just%20found%20100%20ways%20to%20do%20it%20wrong.%22%20Benjamin%20Franklin"
              style={{ backgroundColor: theme }}
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Benjamin%20Franklin&amp;content=I%20didn%E2%80%99t%20fail%20the%20test.%20I%20just%20found%20100%20ways%20to%20do%20it%20wrong.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
              rel="noreferrer"
              style={{ backgroundColor: theme }}
            >
              <i className="fa fa-tumblr"></i>
            </a>
          </div>
          <button
            className="button"
            id="new-quote"
            onClick={getQuote}
            style={{ backgroundColor: theme }}
          >
            New quote
          </button>
        </div>
      </div>
      <div className="footer">
        by <a href="https://codepen.io/hezag/">Goru</a>
      </div>
    </div>
  );
}

export default App;
