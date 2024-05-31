import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

const Contacts = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const submitReview = async () => {
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var badWords = ["bodoh", "bego", "anjing"]; // Kata Kasar yang ingin di filter

        if (!username || !email || !comment || !rating) {
            swal("Oops!", "Harap isi semua field sebelum submit!", "warning");
        } else if (badWords.some(word => comment.includes(word))) {
            swal("Oops!", "Komentar mengandung kata-kata kasar!", "error");
        } else if (email.match(emailPattern)) {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 3000)); // Tunggu selama 3 detik
            setReviews([...reviews, { username, comment, rating }]);
            setUsername('');
            setEmail('');
            setComment('');
            setRating('');
            setLoading(false);
            swal("Berhasil!", "Komentar dan rating Anda sudah ditampilkan!", "success");
        } else {
            swal("Oops!", "Email tidak valid!", "error");
        }
    };

    return (
        <section id="contacts">
            <div id="reviewComponent" style={{ backgroundColor: scrollPosition > 50 ? 'black' : 'transparent' }}>
                <div id="reviewBox">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="comment">Komentar:</label>
                    <textarea id="comment" name="comment" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <label htmlFor="rating">Rating:</label>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <React.Fragment key={star}>
                                <input type="radio" id={`${star}-stars`} name="rating" value={star} checked={rating === star} onChange={() => setRating(star)} />
                                <label htmlFor={`${star}-stars`}></label>
                            </React.Fragment>
                        ))}
                    </div>
                    <button id="submitButton" onClick={submitReview} disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button>
                </div>
                <div id="displayArea">
                    {reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p>Username: {review.username}</p>
                            <p>Komentar: {review.comment}</p>
                            <p>Rating: {"★".repeat(review.rating)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contacts;
