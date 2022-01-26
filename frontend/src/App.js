/* LIBRAIRIES */
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

/* COMPONENTS */
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList'; 

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<CreateEmployee />} />
                  <Route path="/employee-list" element={<EmployeeList />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
