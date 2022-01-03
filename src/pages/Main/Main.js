import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { setAuthenticate } from '../../store/userSlice';
import { auth } from '../../firebase';

const Main = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);

  const signout = async () => {
    signOut(auth);
    dispatch(setAuthenticate(''));
  };

  return (
    <div className='main'>
      Welcome, {email}
      <button onClick={signout}>Sigu Out</button>
    </div>
  );
};

export default Main;