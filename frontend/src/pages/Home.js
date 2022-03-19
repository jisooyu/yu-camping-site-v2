import { FaPencilAlt, FaListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='heading'>
        <h1>What to you need help with?</h1>
        <p>Please choose an option from below</p>
      </section>
      <Link to='/new-camp' className='btn btn-block'>
        <FaPencilAlt />
        Add New Camp Site
      </Link>
      <Link to='/tickets' className='btn btn-block'>
        <FaListAlt />
        View Camp Sites
      </Link>
    </>
  );
};

export default Home;
