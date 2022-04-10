import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from './context/context';

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);

reportWebVitals();
