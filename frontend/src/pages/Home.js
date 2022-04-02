import { FaPencilAlt, FaListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user ? (
        <>
          <Link to='/new-camp' className='btn btn-block'>
            <FaPencilAlt />
            Add New Camp Site
          </Link>
          <Link to='/camps' className='btn btn-block'>
            <FaListAlt />
            View Camp Sites
          </Link>
          {/* <Link to='/camp/postImage' className='btn btn-block'>
            <FaListAlt />
            Upload Image
          </Link> */}
        </>
      ) : (
        <>
          <section className='heading'>
            <h1>What to you need help with?</h1>
            <p>Please log in first</p>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
