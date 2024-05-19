import React from 'react';

const Footer = () => {
    return (
        <section id="contacts">
            <section className="footer-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 item">
                            <h3>Home</h3>
                            <ul>

                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Why</h3>
                            <ul>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Top</h3>
                            <ul>

                            </ul>
                        </div>
                        <div className="col-md-3 item text">
                            <h3>explore.com</h3>
                        </div>
                        <div className="col-md-3 item text">
                            <h3>About us & feedback</h3>
                        </div>
                        <div className="col item social">
                            <a href="https://www.facebook.com/groups/681379138663472/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/wisatakuriau" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://kepriprov.go.id/laman/tentang-kepri" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-google"></i>
                            </a>
                        </div>
                    </div>
                    <p className="copyright">Copyright © 2024</p>
                </div>
                <div className="row">
                        <div className="col ">
                            <p>Source Gambar yang Kami gunakan:</p>
                            <ul>
                                <li>https://img.freepik.com/premium-photo/natural-view-river-mountain_41085-353.jpg?size=626&ext=jpg</li>
                                <li>https://i.pinimg.com/564x/ee/42/eb/ee42eb3733bcf2603512f851e30abc5f.jpg</li>
                                <li>https://a.cdn-hotels.com/gdcs/production112/d106/4c32934d-1fd6-43cb-b7b1-97bd9370d494.jpg?impolicy=fcrop&w=800&h=533&q=medium</li>
                                <li>https://www.hariankepri.com/wp-content/uploads/2024/02/IMG-20240211-WA0038.jpg</li>
                                <li>https://i.pinimg.com/564x/64/3c/85/643c856e277f71b55e8af9663217e9f1.jpg</li>
                                <li>https://atourin.obs.ap-southeast-3.myhuaweicloud.com/images/destination/bintan/gurun-pasir-busung-profile1695020231.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim</li>
                            </ul>
                        </div>
                        <div className="col ">
                            <p>API yang digunakan:</p>
                            <ul>
                                <li>YouTube</li>
                                <li>OpenWeather</li>
                                <li>Open Street Map</li>
                                <li>WorldTime API</li>
                                <li>Unsplash API</li>
                            </ul>
                        </div>
                    </div>
            </section>
        </section>
    );
};

export default Footer;
