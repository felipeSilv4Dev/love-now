import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/Global.styled';

import Main from './components/Main/Main';
import Register from './components/Register/Register';
import { useState } from 'react';
import Form from './components/Form/Form';
import Page from './components/Page/Page';
import Error from './components/Error/Error';

declare global {
  interface Inputs {
    name: string;
    photos: File[];
    message: string;
    quality: string[];
  }
}
function App() {
  const [data, setData] = useState<Inputs[]>([]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Main />} />
        <Route
          path="register"
          element={
            <Register>
              <Form />
            </Register>
          }
        />

        <Route path="/:slug/:id" element={<Page />} />
        <Route path="*" element={<Error message="página não encontrada!" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
