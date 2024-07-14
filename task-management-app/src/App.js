import TaskList from './components/TaskGenerator';
import './App.css';
import { FancyText } from './components/FancyText';

function App() {
  return (
    <div className="App">
      <FancyText title={true} text="To-Do List" />
        <TaskList />
        <br /><br />
        <div className="footer">
          Thank you for visiting my To-Do List page!
          <p>© Praneet Bandi 2024</p>
        </div>
    </div>
  );
}

export default App;
