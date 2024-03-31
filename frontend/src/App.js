import './App.css';
import Questionnaire from './Components/ChatbotDashboardComponents/ChatBot';
import LoginPage from './Components/LoginPageComponents/LoginPage';
import AppRouter from './Utilities/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter/> 
      {/* <Questionnaire/> */}
    </div>
  );
}

export default App;
