import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Make sure '#root' matches the id of your root element

function TopAttractions() {
  const [showMap, setShowMap] = useState(false);

  const attractions = [
    { name: 'Pulau Ranoh', position: [0.5576270263312619, 104.23235698412067], rating: 4.6, imageUrl: 'https://www.hariankepri.com/wp-content/uploads/2024/02/IMG-20240211-WA0038.jpg' },
    { name: 'Jembatan Berelang Batam', position: [1.0431192199363777, 104.08249449352515], rating: 4.5, imageUrl: 'https://i.pinimg.com/564x/64/3c/85/643c856e277f71b55e8af9663217e9f1.jpg' },
    { name: 'Gurun Pasir Bintan', position: [1.0137979209446222, 104.32214581215368], rating: 4.7, imageUrl: 'https://atourin.obs.ap-southeast-3.myhuaweicloud.com/images/destination/bintan/gurun-pasir-busung-profile1695020231.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim' },
  ];

  const handleSeeAllClick = (event) => {
    event.preventDefault();
    setShowMap(true);
  };

  const handleLocationClick = (position) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`, '_blank');
  };

  return (
    <section id="offers">
      <div className="blog_container">
        <div className="blog_title">TOP ATTRACTIONS</div>
        <div className="blog_attractions">
          {attractions.map((attraction, index) => (
            <div key={index} className="blog_attraction">
              <img src={attraction.imageUrl} alt={attraction.name} onClick={() => handleLocationClick(attraction.position)} />
              <div className="place_rating" onClick={() => handleLocationClick(attraction.position)}>{attraction.rating} ⭐</div>
              <div className="blog_description" onClick={() => handleLocationClick(attraction.position)}>{attraction.name}</div>
            </div>
          ))}
        </div>
        <a href="#" onClick={handleSeeAllClick} className="blog_button">See Maps</a>
      </div>
      <Modal
        isOpen={showMap}
        onRequestClose={() => setShowMap(false)}
        contentLabel="Map Modal"
        style={{
          content: {
            width: '80%',
            height: '80%',
            margin: 'auto',
          },
        }}
      >
        <MapContainer center={attractions[0].position} zoom={7} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {attractions.map((attraction, index) => (
            <Marker key={index} position={attraction.position}>
              <Popup>{attraction.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Modal>
    </section>
  );
}

export default TopAttractions;
