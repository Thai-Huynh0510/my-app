import './App.css';
import Header from './Components/Header'
function App() {
    const name = 'brad'
    const x = false 
  return (
    <div className="container">
          <h1> Hello {name} </h1>
          <h2> hello {x ? 'yes' : 'No'} </h2>
          <Header />
    </div>
  );
}

export default App;
