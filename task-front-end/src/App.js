import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />

       </Routes>

       </BrowserRouter>
      
    </div>
  );
}

export default App;
