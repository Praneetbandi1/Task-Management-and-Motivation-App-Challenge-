import TaskList from './components/TaskGenerator';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <TaskList />
        <br /><br />
        <section className="footer">
          Thank you for visiting my To-Do List page!
          <p>© Praneet Bandi 2024</p>
        </section>
    </div>
  );
}

export default App;
