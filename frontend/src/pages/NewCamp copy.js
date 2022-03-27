import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createCamp, reset } from '../features/camps/campSlice';
import Spinner from '../components/Spinner';

const NewCamp = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.camps
  );
  const [email] = useState(user.email);
  const [campName, setCampName] = useState('');
  const [reservation, setReservation] = useState('');
  const [description, setDescription] = useState('');
  const [camptype, setCampType] = useState('');
  const [homePageUrl, setHomePageUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [campstatus, setCampStatus] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate('/camps');
    }
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createCamp({
        campName,
        reservation,
        description,
        camptype,
        homePageUrl,
        imageUrl,
        campstatus,
      })
    );
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className='heading'>
        <h1>Create New Camp</h1>
        <p>Please fill out the form below</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Camp Manager Email</label>
            <input
              type='text'
              className='form-control'
              value={email}
              disabled
            />
          </div>
          <div className='form-group'>
            <label htmlFor='campName'>Camp PIC Name</label>
            <input
              type='text'
              className='form-control'
              value={campName}
              onChange={(e) => setCampName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='reservation'>Camp Reservation</label>
            <input
              type='text'
              className='form-control'
              value={reservation}
              onChange={(e) => setReservation(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>캠핑장 소개</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              value={description}
              placeholder='description'
              onChange={(e) => {
                setDescription(e.target.value);
              }}></textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='camptype'>Camping Site Type</label>
            <select
              name='camptype'
              id='camptype'
              value={camptype}
              onChange={(e) => setCampType(e.target.value)}>
              <option value='tentCamping'>텐트캠핑장</option>
              <option value='motorCamping'>오토캠핑장</option>
              <option value='glamping'>글램핑</option>
              <option value='others'>기타</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='homePageUrl'>Home Page URL</label>
            <input
              name='homePageUrl'
              id='homePageUrl'
              className='form-control'
              value={homePageUrl}
              placeholder='homePageUrl'
              onChange={(e) => {
                setHomePageUrl(e.target.value);
              }}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='imageUrl'>Picture URL</label>
            <input
              name='imageUrl'
              id='imageUrl'
              className='form-control'
              value={imageUrl}
              placeholder='imageUrl'
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='campstatus'>캠핑장 상황</label>
            <select
              name='campstatus'
              id='campstatus'
              value={campstatus}
              onChange={(e) => setCampStatus(e.target.value)}>
              <option value='new'>신장</option>
              <option value='open'>개장</option>
              <option value='closed'>휴장</option>
            </select>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewCamp;
