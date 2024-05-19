import React from 'react';

function WhyChooseUs() {
  return (
    <section id="blog">
    <div className="section__container">
        <h2 className="section__title">WHY KEPULAUAN RIAU?</h2>
        <div className="display__grid">
            <div className="display__card">
                <i className="ri-roller-coaster-line"></i>
                <h4>Atraksi Menyenangkan</h4>
                <p>Wilayah yang cantik dengan panorama indah serta banyak pantai dan atraksi yang menarik</p>
            </div>
            <div className="display__card">
                <i className=""></i>
                <h4>Makanan Enak</h4>
                <p>Terdapat banyak makanan enak khas kepulauan riau yang pastinya tidak mungkin anda lewatkan</p>
            </div>
            <div className="display__card">
                <i className="ri-shield-user-line"></i>
                <h4>Aman dan Bersih</h4>
                <p>Tempat pariwisata yang aman serta terjaga kebersihannya membuatmu semakin nyaman untuk menikmati liburanmu</p>
            </div>
        </div>
    </div>
</section>
  );
}

export default WhyChooseUs;
