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
                                {/* Add your list items here */}
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Why</h3>
                            <ul>
                                {/* Add your list items here */}
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Top</h3>
                            <ul>
                                {/* Add your list items here */}
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
                    <div className="col">
                        <p>Source Gambar yang Kami gunakan:</p>
                        <ul>
                            <li><a href="https://bit.ly/3OkXRoN" target="_blank" rel="noopener noreferrer">https://bit.ly/3OkXRoN</a></li>
                            <li><a href="https://bit.ly/3MwHY7C" target="_blank" rel="noopener noreferrer">https://bit.ly/3MwHY7C</a></li>
                            <li><a href="https://bit.ly/45k8Npj" target="_blank" rel="noopener noreferrer">https://bit.ly/45k8Npj</a></li>
                            <li><a href="https://bit.ly/3KZkS7Q" target="_blank" rel="noopener noreferrer">https://bit.ly/3KZkS7Q</a></li>
                            <li><a href="https://bit.ly/3O9m2h3" target="_blank" rel="noopener noreferrer">https://bit.ly/3O9m2h3</a></li>
                            <li><a href="https://bit.ly/3WqRWlF" target="_blank" rel="noopener noreferrer">https://bit.ly/3WqRWlF</a></li>
                        </ul>
                    </div>
                    <div className="col">
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
