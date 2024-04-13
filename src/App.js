import React, { useEffect } from 'react'
import webgazer from 'webgazer'

function App() {
  useEffect(() => {
    window.saveDataAcrossSessions = true;

    // Webgazer script
    webgazer.setGazeListener((data, timeStamp) => {
      console.log(data, timeStamp);
    }).begin();

    // Clean up function if necessary
    return () => {
      // Clean up code here if needed
    };
  }, []); // Empty dependency array to run effect only once
  const handleImportClick = () => {
    alert('Import cv...')
  }

  return (
    <div className="App">
      <h1>Import Button Example</h1>
      <button onClick={handleImportClick}>Import cv</button>
    </div>
  )
}

export default App
