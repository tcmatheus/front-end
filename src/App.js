import './styles/App.css';
import FormLogin from './components/formLogin';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div className="backgroundPage">
      <LoginPage tipoLogin={"Fornecedor"}/>
      <FormLogin />
    </div>
  );
}

export default App;
