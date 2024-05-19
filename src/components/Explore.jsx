import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ganti '#root' dengan id elemen root aplikasi Anda

function Explore() {
  const [showMap, setShowMap] = useState(false);

  const cities = [
    { name: 'Batam', position: [1.0746717731004478, 104.00390827845062], imageUrl: 'https://i.pinimg.com/564x/ee/42/eb/ee42eb3733bcf2603512f851e30abc5f.jpg' },
    { name: 'Tanjung Pinang', position: [0.9171, 104.4463], imageUrl: 'https://i.pinimg.com/564x/da/eb/4c/daeb4cbb4f9df144aaa4f8c1758fc6a5.jpg' },
    { name: 'Bintan', position: [1.1367, 104.2167], imageUrl: 'https://a.cdn-hotels.com/gdcs/production112/d106/4c32934d-1fd6-43cb-b7b1-97bd9370d494.jpg?impolicy=fcrop&w=800&h=533&q=medium' },
  ];

  const handleSeeAllClick = (event) => {
    event.preventDefault();
    setShowMap(true);
  };

  const handleImageClick = (city) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${city.position[0]},${city.position[1]}`, '_blank');
  };

  return (
    <section id="services">
      <div className="explore_container">
        <img
          loading="lazy"
          srcSet="https://img.freepik.com/premium-photo/natural-view-river-mountain_41085-353.jpg?size=626&ext=jpg"
          className="explore_background-image"
        />
        <div className="explore_content">
          <div className="explore_title">explore Places</div>
          <div className="explore_main">
            <div className="explore_columns">
              <div className="explore_column">
                <div className="explore_text-container">
                  <div className="explore_text">
                    Ini merupakan tiga kota utama yang sangat populer dengan kepulauan riau dan cocok untuk first experience anda yang kami rekomendasikan, beserta maps nya
                  </div>
                  <div className="explore_button-container">
                    <div onClick={handleSeeAllClick} className="explore_button-text">See all</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eeb96d1e4c1df8c2aeac0624fcf91ce73c731e5876c02ef1b9e24d2840fcbf5?"
                      className="explore_button-image"
                    />
                  </div>
                </div>
              </div>
              <div className="explore_column-images">
                <div className="explore_images-container">
                  <div className="explore_images">
                    {cities.map((city, index) => (
                      <div key={index} className="explore_column-image">
                        <div className="explore_image-container">
                          <img
                            loading="lazy"
                            srcSet={city.imageUrl}
                            className="explore_image"
                            onClick={() => handleImageClick(city)}
                          />
                          <div className="explore_image-caption">{city.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <MapContainer center={cities[0].position} zoom={7} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map((city, index) => (
            <Marker key={index} position={city.position}>
              <Popup>{city.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Modal>
    </section>
  );
}

export default Explore;
