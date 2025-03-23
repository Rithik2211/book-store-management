import React, {FC, ReactNode} from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({children}) => {

  const {currentUser} = useAuth();

  if(currentUser){
    return children;
  }

  return <Navigate to={'/login'} replace/>
}

export default PrivateRoute;