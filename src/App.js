import React, { useState, useEffect } from "react";

function App() {
  const [cookies, setCookies] = useState(null);

  useEffect(() => {
    fetch("/api/cookies")
      .then((response) => response.json())
      .then((data) => setCookies(data.cookies));
  }, []);

  const handleClick = () => {
    fetch("/api/cookies")
      .then((response) => response.json())
      .then((data) => setCookies(data.cookies));
  };

  const formatCookies = (str) => {
    let result = "";
    for (let i = 0; i < str?.length; i++) {
      result += str[i];
      if ((i + 1) % 32 === 0) {
        result += "\n";
      }
    }
    return result;
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Get Cookies</button>
      <pre style={{ whiteSpace: "pre-wrap" }}>{formatCookies(cookies)}</pre>
    </div>
  );
}

export default App;
