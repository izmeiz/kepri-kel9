import React from 'react';
import YouTubeVideo from './YouTubeVideo';

const PopularCity = () => {
    return (
        <section id="history" style={{backgroundColor: 'white'}}>
            <div className="section__container">
                <h2 className="section__tittle">3 Popular City</h2>
                <div className="grid">
                    <div className="card">
                        <h4>Batam</h4>
                        <p>
                        Batam adalah kota terbesar di Kepulauan Riau, Indonesia. Sebagai pusat ekonomi utama di wilayah tersebut, Batam dikenal dengan industri, perdagangan, dan pariwisatanya. Beberapa daya tarik di Batam antara lain Jembatan Barelang yang ikonik, Pantai Nongsa yang indah, Ocarina Park untuk rekreasi, serta pusat perbelanjaan seperti Nagoya Hill Mall. 
                        </p>
                    </div>
                    <div className="video_container" id="youtube_video_2">
                    <YouTubeVideo videoId='QYYrj7IcfAE' />
                    </div>
                    <div className="card">
                        <h4>Tanjung Pinang</h4>
                        <p>
                        Tanjung Pinang, ibu kota provinsi Kepulauan Riau, memukau dengan kekayaan budaya dan sejarahnya yang unik. Kota ini menawarkan berbagai daya tarik, seperti Pulau Penyengat yang penuh dengan sejarah, Vihara Avalokitesvara Graha yang megah, dan pesona Kota Lama yang memikat. Keindahan alam dan warisan budaya yang dimiliki Tanjung Pinang menjadikannya destinasi wisata yang menarik untuk dieksplorasi.
                        </p>
                    </div>
                    <div className="video_container" id="youtube_video_3">
                    <YouTubeVideo videoId='bTJer8kos1I' />
                    </div>
                    <div className="card">
                        <h4>Bintan</h4>
                        <p>
                        Bintan adalah pulau terbesar di Kepulauan Riau yang terkenal dengan resor pantai mewah dan pemandangan alam yang menakjubkan. Pulau ini memiliki daya tarik seperti Lagoi Bay, yang menawarkan pengalaman liburan yang menyenangkan dengan pantai berpasir putihnya dan fasilitas rekreasi yang lengkap. Selain itu, Trikora Beach menjadi destinasi populer bagi wisatawan yang mencari keindahan pantai yang masih alami dan tenang. Gunung Bintan juga menjadi daya tarik tersendiri dengan pemandangan alam yang memukau serta trekking yang menantang bagi para petualang.  
                        </p>
                    </div>
                    <div className="video_container" id="youtube_video_4">
                    <YouTubeVideo videoId='XKU7iinfIV8' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularCity;
