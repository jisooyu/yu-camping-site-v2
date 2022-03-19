import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPenFancy } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useSelector를 사용하여 어떠한 global state(e.g. user)도 component로 갖고 올 수 있음.
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };
      // authSlice에 있는 register에 userData를 argument 로 넣어 dispatch함.
      dispatch(register(userData));
    }
    if (isLoading) {
      return <Spinner />;
    }
  };
  return (
    <>
      <section className='heading'>
        <h1>
          <FaPenFancy />
          Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
            <input
              type='email'
              className='form-control'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
            <input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              required
            />
            <input
              type='password'
              className='form-control'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Enter your password2'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
