import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  let date = new Date().toLocaleTimeString();

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  useEffect(() => {
    clearInterval(UpdateTime);
  });

  return (
    <div id="main">
      <div className="date-time">{date + " ," + ctime}</div>
    </div>
  );
};

export default App;
