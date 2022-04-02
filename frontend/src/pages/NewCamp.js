import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { createFormData, reset } from '../features/camps/campSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

// to fix buffer error
window.Buffer = window.Buffer || require('buffer').Buffer;

const NewCamp = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.camps
  );
  const [campName, setCampName] = useState('');
  const [reservation, setReservation] = useState('');
  const [description, setDescription] = useState('');
  const [camptype, setCampType] = useState('');
  const [homePageUrl, setHomePageUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [campstatus, setCampStatus] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate('/new-camp');
    }
    // eslint-disable-next-line
  }, [dispatch, isError, isSuccess, navigate]);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imageFile', imageFile);
    formData.append('campName', campName);
    formData.append('description', description);
    formData.append('reservation', reservation);
    formData.append('camptype', camptype);
    formData.append('homePageUrl', homePageUrl);
    formData.append('imageUrl', imageUrl);
    formData.append('campstatus', campstatus);
    dispatch(createFormData(formData));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <BackButton url='/' />
      <section className='heading'>
        <h1>Create New Camp</h1>
        <p>Please fill out the form below</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='campName'>Camp PIC Name</label>
            <input
              name='campName'
              type='text'
              className='form-control'
              id='campName'
              value={campName}
              onChange={(e) => setCampName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='reservation'>Camp Reservation</label>
            <input
              type='text'
              className='form-control'
              name='reservation'
              id='reservation'
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
              }}
            />
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
            <label htmlFor='imageFile'>Upload Images</label>
            <input
              type='file'
              name='imageFile'
              id='imageFile'
              className='form-control'
              accept='image/jpeg, image/jp, image/png'
              onChange={handleImage}
            />
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
