import './App.css';
import Button from './components/Button';

const keys = ['C', 'DEL', '÷', 'x', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.']

function App() {
  return (
    <div className='container'>
      <div className='result'>result</div>
      {keys.map(key => (
        <Button key={key} value={key}></Button>
      ))}
    </div>
  );
}

export default App;
