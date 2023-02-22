// import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
// import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      {/* <nav>
        <Logo />
      </nav> */}
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            The ultimate solution for your job searching. Where you can search,tracking your application.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        {/* <img src={main} alt='job hunt' className='img main-img' /> */}
      </div>
    </Wrapper>
  );
};

export default Landing;
