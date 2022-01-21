import './App.css';
import FormCheckbox from './components/form-checkbox/FormCheckbox.component';
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
        <FormCheckbox />
      </div>
    </div>
  );
}

export default App;
