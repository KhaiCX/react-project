import logo from './logo.svg';
import './App.css';
const member = ['HueNTT', 'HongPT4', 'KhaiCX', 'HauND11'];
function App(props) {
  return (
    <table>
      <tr>
        <th>{props.member}</th>
      </tr>
      <tr>
        <th>
          {props.member}
        </th>
      </tr>
      <tr>
        <th>
          {props.member}
        </th>
      </tr>
      <tr>
        <th>
          {props.member}
        </th>
      </tr>
    </table>
  );
}

export default App;
