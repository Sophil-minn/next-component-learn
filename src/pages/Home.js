import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => (
    <div>
      首页
      <div>
        <p><Link to='/list'>list</Link></p>
        <p><Link to='/index'>index</Link></p>
      </div>
    </div>
);

export default Home;
