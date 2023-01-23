import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";


function MainPage() {
    

  return (
    <>
      <div className="container">

        <div className="heading">
          <h1 className="nameStyle">Portfolio</h1>
        </div>

        

<nav className="rightmenu">
<Link className="menu" to='/'> Home </Link>
<Link className="menu" to='/about'> About </Link>
<Link className="menu" to='/education'> Education </Link>
<Link className="menu" to='/work'> Work Experience </Link>
<Link className="menu" to='/projects'> Projects </Link>
<Link className="menu" to='/resume'> Resume/Certificate </Link>
<Link className="menu" to='/contact'> Contact </Link>
</nav>


      </div>
      
    </>
  );
}

export default MainPage;
