import './App.css';
import HomePage from './page/homePage';
import ListPage from './page/listPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/lists" element={<ListPage/>} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
