import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/Global.styled';

import Main from './components/Main/Main';
import Register from './components/Register/Register';

import Form from './components/Form/Form';
import Page from './components/Page/Page';
import Error from './components/Error/Error';
import DeletePage from './components/DeletePage/DeletePage';
import Email from './components/Email/Email';
import Footer from './components/Footer/Footer';

declare global {
  interface Inputs {
    name: string;
    photos: File[];
    message: string;
    quality: string[];
  }
}
function App() {
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
        <Route path="/delete-page/:id" element={<DeletePage />} />
        <Route path="/send-email/:id" element={<Email />} />
        <Route path="*" element={<Error message="página não encontrada!" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
