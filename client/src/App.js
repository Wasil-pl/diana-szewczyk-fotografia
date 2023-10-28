import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import { checkUserSession } from './redux/users/userThunks';
import { resetUserState } from './redux/users/userActions';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import NewBorn from './components/pages/NewBorn/NewBorn';

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
        <Route path="/sesja-noworodkowa" element={<NewBorn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
