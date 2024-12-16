import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/Global.styled';

import Main from './components/Main/Main';
import Register from './components/Register/Register';
import Form from './components/Form/Form';
import Page from './components/Page/Page';
import Error from './components/Error/Error';
import DeletePage from './components/DeletePage/DeletePage';
import Footer from './components/Footer/Footer';
import Check from './components/Check/Check';
import Preview from './components/Page/Preview';
import { useState } from 'react';

declare global {
  interface Inputs {
    name: string;
    photos: File[];
    message: string;
    quality: string[];
  }

  interface User {
    id: string;
    name: string;
    photos: Array<string>;
    quality: Array<string>;
    message: string;
    slug: string;
  }
}

const defaultData: User = {
  id: 'asdas123asdashasdj12312',
  name: 'primeiro segundo',
  photos: [
    '../../utils/photo-preview.png',
    '../../utils/photo-preview.png',
    '../../utils/photo-preview.png',
  ],
  message: 'escreva alguma coisa do seu coração.',
  quality: ['meiga', 'linda', 'gata'],
  slug: 'nome-aqui',
};

function App() {
  const [data, setData] = useState<User>(defaultData);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Main />} />
        <Route
          path="register"
          element={
            <Register>
              <Form setData={setData} />
              <Preview data={data} />
            </Register>
          }
        />

        <Route path="/:slug/:id" element={<Page />} />
        <Route path="/delete-page/:id" element={<DeletePage />} />
        <Route path="/check-copy/:id" element={<Check />} />
        <Route path="*" element={<Error message="página não encontrada!" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
