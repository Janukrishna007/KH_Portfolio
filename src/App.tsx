import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Home from './pages/Home';
import About from './pages/About';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
