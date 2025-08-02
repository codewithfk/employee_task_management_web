import { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const {token} = useAppSelector(state=>state?.userReducer) // example condition
  return token ? children : <Navigate to="/login" replace />;
}