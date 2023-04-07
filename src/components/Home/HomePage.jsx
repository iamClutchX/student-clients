import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className='dashboard'>
      <div className='dashboard__button-strip'>
        <button className='button button--student-form' onClick={() => navigate('/studentform')}>
          Student Form
        </button>
        <button className='button button--student-list' onClick={() => navigate('/studentlist')}>
          Student List
        </button>
      </div>        
    </div>
  );
}

export default HomePage;
