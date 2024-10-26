import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/Global.styled';

import Main from './Main/Main';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
