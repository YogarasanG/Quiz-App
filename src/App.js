import './App.css';
import Quiz from './components/Quiz';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">      
      <div className="Header">
        <h2>Quiz App</h2>
      </div>
      <div className="container">
      <Quiz/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
