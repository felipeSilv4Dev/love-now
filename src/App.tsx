import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/Global.styled';

import Main from './components/Main/Main';
import Register from './components/Register/Register';
import { useState } from 'react';
import Form from './components/Form/Form';
import Page from './components/Page/Page';

declare global {
  interface Inputs {
    name: string;
    photo: File[];
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
        <Route path="/" element={<Main />} />
        <Route
          path="register"
          element={
            <Register>
              <Form setData={setData} />
            </Register>
          }
        />

        <Route path="/:id" element={<Page data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
