// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import ThemeToggle from './components/ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';  // Import RootState from your store

function App() {
  // Use RootState to type the 'state' parameter in useSelector
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
