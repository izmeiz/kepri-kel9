import React, { useEffect, useState } from 'react';

const TimezoneData = () => {
  const [data, setData] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('http://worldtimeapi.org/api/timezone/Asia/Jakarta'))
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const parsedData = JSON.parse(data.contents);
        setData(parsedData);
        setCurrentTime(new Date(parsedData.datetime));
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (currentTime) {
      const interval = setInterval(() => {
        setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentTime]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data && (
        <div>
          <p>Time: {currentTime.toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div className="nav__logo"><a href="#">KEPULAUAN RIAU</a></div>
      <TimezoneData />
      <div className={`hamburger ${active ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav__links ${active ? 'active' : ''}`} id="navLinks">
        <li className="link"><a className="Nav_word" href="#home">Home</a></li>
        <li className="link"><a className="Nav_word" href="#blog">Why</a></li>
        <li className="link"><a className="Nav_word" href="#offers">Top</a></li>
        <li className="link"><a className="Nav_word" href="#services">Explore</a></li>
        <li className="link"><a className="Nav_word" href="#contacts">About Us</a></li>
      </ul>
    </nav>
  );
};

const App = () => (
  <div>
    <Navbar />
  </div>
);

export default App;
