import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={handleImportClick}
          >
            Import cv
          </button>
          <div className="mt-4">
            <p>This is where you can import your CV.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
