import './App.css';
import Form from './components/form-input/Form.component';
import FormSubmit from './components/form-submit/FormSubmit.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>localStorage</span>
      </header>
      <div className='app-content'>
        <Form />
        <FormSubmit />
      </div>
    </div>
  );
}

export default App;
