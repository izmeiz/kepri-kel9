import React from 'react';
import YouTubeVideo from './YouTubeVideo';

const HistorySection = () => {
    return (
        <section id="history" className="history-section">
            <div className="section__container">
                <h2 className="section__title">History</h2>
                <div className="grid">
                    <div className="card">
                        <h4>Kepulauan Riau</h4>
                        <p>
                            Kepulauan Riau memiliki sejarah perdagangan dan kebudayaan yang kaya. Sejak zaman kuno, wilayah ini telah menjadi pusat perdagangan rempah-rempah dan hasil bumi yang penting. Pada abad ke-16, Kepulauan Riau menjadi bagian dari Kesultanan Johor-Riau yang berpengaruh, memperkuat posisinya sebagai pusat perdagangan di Selat Malaka. Di abad ke-19, wilayah ini menarik minat Belanda dan Inggris karena perannya dalam perdagangan rempah-rempah. Setelah resmi menjadi provinsi Indonesia pada tahun 2004, Kepulauan Riau berkembang pesat, terutama dalam sektor pariwisata dan industri kelautan, menjadikannya salah satu wilayah yang paling dinamis di Indonesia.
                        </p>
                    </div>
                    <div className="video_container" id="youtube_video">
                        <YouTubeVideo videoId='U257fUbIOyY' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
