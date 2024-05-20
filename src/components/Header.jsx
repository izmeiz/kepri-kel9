import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Modal from 'react-modal';
import 'leaflet/dist/leaflet.css';

Modal.setAppElement('#root');

function Header() {
  const [weatherData, setWeatherData] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [backgroundImage1, setBackgroundImage1] = useState(null);
  const [backgroundImage2, setBackgroundImage2] = useState(null);
  const [opacity1, setOpacity1] = useState(1);
  const [opacity2, setOpacity2] = useState(0);
  const apiKey = 'N2vxZdo0V9dWW1INvAysc-gefZvVCZt4rtTbH1ORUoM';
  const riauPhotoIds = ['ruwpbWIi-hM', 'twT0WaoMRuA', 'QXpDBgiH_Oo']; 

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const searchUrl = `http://api.openweathermap.org/data/2.5/find?q=Kepulauan%20Riau&appid=e3bc928bf853110937875f042902994b`;
        const response = await fetch(searchUrl);
        const data = await response.json();

        const kepulauanRiauID = data.list[0].id;

        const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${kepulauanRiauID}&appid=e3bc928bf853110937875f042902994b`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        setWeatherData(weatherData);
      } catch (error) {
        console.error(error);
      }
    };

    getWeatherData();
  }, []);

  useEffect(() => {
    let index = 0;
    setInterval(() => {
      const url = `https://api.unsplash.com/photos/${riauPhotoIds[index]}?client_id=${apiKey}`;
      fetch(url)
        .then(response => response.json())
        .then(photo => {
          if (index % 2 === 0) {
            setBackgroundImage1(`url('${photo.urls.regular}')`);
            setOpacity1(1);
            setOpacity2(0);
          } else {
            setBackgroundImage2(`url('${photo.urls.regular}')`);
            setOpacity1(0);
            setOpacity2(1);
          }
        })
        .catch(error => console.error(error));
      index = (index + 1) % riauPhotoIds.length;
    }, 5000); // Interval 5 detik
  }, [riauPhotoIds, apiKey]);

  const position = [1.0, 105.0];  // Koordinat yang lebih umum untuk Kepulauan Riau

  const handleReadMoreClick = () => {
    setShowMap(!showMap);
  };

  return (
    <header id="home">
      <div className="background" style={{ backgroundImage: backgroundImage1, opacity: opacity1 }}></div>
      <div className="background" style={{ backgroundImage: backgroundImage2, opacity: opacity2 }}></div>
      <div className="section__container">
        <div className="header__content">
          <div>
            <h1>KEPULAUAN RIAU</h1>
            <p>
              Kepulauan Riau, atau Kepri, adalah provinsi di Indonesia yang terletak di bagian barat negara ini. Kepulauan Riau dulunya bagian dari wilayah Kesultanan Johor. Pada 24 September 2002, Kepulauan Riau disahkan sebagai provinsi tersendiri. 
              Provinsi ini dikenal dengan budaya Melayu yang kuat dan beragam potensi sumber daya alam, terutama di bidang minyak dan gas, serta maritim.
            </p>
            <button onClick={handleReadMoreClick}>See Maps</button>
          </div>
        </div>
        {weatherData && (
          <div className="weather-info">
            <img src={`http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`} alt="Cuaca Icon" />
            <p><strong>Cuaca:</strong> {weatherData.list[0].weather[0].description}</p>
            <p><strong>Suhu:</strong> {(weatherData.list[0].main.temp - 273.15).toFixed(2)}°C</p>
            <p><strong>Kota:</strong> {weatherData.city.name}</p>
          </div>
        )}
        <Modal
          isOpen={showMap}
          onRequestClose={handleReadMoreClick}
          contentLabel="Map Modal"
          style={{
            content: {
              width: '80%',
              height: '80%',
              margin: 'auto',
            },
          }}
        >
          <MapContainer center={position} zoom={7} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Kepulauan Riau
              </Popup>
            </Marker>
          </MapContainer>
        </Modal>
      </div>
    </header>
  );
}

export default Header;
