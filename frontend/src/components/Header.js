import {
  AiOutlineUserAdd,
  AiOutlineLogin,
  AiOutlineLogout,
} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className='header'>
      <Link to='/'>Camping Sites</Link>
      <ul>
        {user ? (
          <li>
            <div className='btn' onClick={onLogout}>
              <AiOutlineLogout /> Logout
            </div>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <AiOutlineLogin />
                Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <AiOutlineUserAdd />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
