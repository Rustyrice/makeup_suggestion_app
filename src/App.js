import React from 'react'

function App() {
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
