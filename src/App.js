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

  return (
    <div className="App">
      <button onClick={handleClick}>Get Cookies</button>
      <div>{cookies}</div>
    </div>
  );
}

export default App;
