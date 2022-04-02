import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCamps, reset } from '../features/camps/campSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import Camp from './Camp';

function Camps() {
  const { camps, isLoading, isSuccess } = useSelector((state) => state.camps);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getCamps());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url='/' />
      <h1>Camp Site Info</h1>
      <div className='camp-desc'>
        <ul>
          {camps.map((camp) => (
            <Camp key={camp._id} {...camp} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Camps;
