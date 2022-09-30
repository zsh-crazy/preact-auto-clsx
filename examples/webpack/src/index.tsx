import { render } from 'preact';
import './index.css';

export default function App() {
  return (
    <div className={['box',{box1:true}]}></div>
  );
}

render(
  <App />,
  document.querySelector('#root'),
);
