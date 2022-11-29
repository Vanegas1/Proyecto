import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../../src/Components/AuthForms/LoginForm/LoginForm';
import { useUserContext } from '../../src/contexts/UserContext';
import NotFound from '../../src/routes/NotFound';

import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';

const AuthView = () => {
  const navigate = useNavigate();
  const { login, user } = useUserContext();

  const onLoginHandler = async (identifier, password) => {
    //Ejecutar el servicio de login <- User context
    await login(identifier, password);

  }

  useEffect(() => {
    if (user) {
      navigate("/auth/signin/whoiam");
    }
  }, [user])

  return (

      <div>
        <div>
          <Routes>
            <Route path="signin" element={<Login onLogin={onLoginHandler} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    
  )
}

export default AuthView;