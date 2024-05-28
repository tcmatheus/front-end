import './App.css';
import FormLogin from './components/formLogin';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div>
      {/* <h1>Hello World!</h1> */}
      <LoginPage tipoLogin={"Fornecedor"}/>
      <FormLogin texto={"Clica ni mim caraio"}/>

    </div>
  );
}

export default App;
