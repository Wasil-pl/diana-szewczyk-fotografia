import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import { checkUserSession } from './redux/users/userThunks';
import { resetUserState } from './redux/users/userActions';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import NewBornSection from './components/features/NewBornSection/NewBornSection';
import Gallery from './components/pages/Gallery/Gallery';
import { Register } from './components/features/Register/index';
import { AllUsers } from './components/features/AllUsers/index';
import { SingleUser } from './components/features/SingleUser';
import { AddPictures } from './components/features/AddPictures/index';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(resetUserState());
  }, [dispatch]);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sesja-noworodkowa" element={<NewBornSection />} />
        <Route path="/galeria/:category" element={<Gallery />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wszyscy-uzytkownicy" element={<AllUsers />} />
        <Route path="/uzytkownik/:id" element={<SingleUser />} />
        <Route path="/dodaj-zdjecia/:id" element={<AddPictures />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
