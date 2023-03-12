import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { HomePage } from 'pages/HomePage';
import { UsersPage } from 'pages/UsersPage';
import { UserDetailsPage } from 'pages/UserDetailsPage';
import { AddUserPage } from 'pages/AddUserPage';

export const App = () => {
  return (
    <BrowserRouter basename="/practice-with-mentor-05">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
          <Route path="users/add" element={<AddUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
