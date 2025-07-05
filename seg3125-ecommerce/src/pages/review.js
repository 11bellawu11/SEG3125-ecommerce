import React, { useState } from 'react';
import './review.css';
import {Button}
from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function Review() {
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Comments:", comments);
    setSubmitted(true);
  };

  return (
    <div className='review-body'>
        <h4>Your order has been submitted successfully!</h4>
        <div className="review-container">

        {submitted ? (
            <div className="thank-you">
                <h3>Thank you for your review!</h3>
                <p>Your feedback helps us improve the experience for all gamers.</p>
                <Button variant="secondary" onClick={() => navigate("/")}>
                    ← Continue Shopping
                </Button>
            </div>
        ) : (
            <form onSubmit={handleSubmit}>
                <h2>We value your feedback!</h2>
            <label>
                How would you rate your experience?
                <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                <option value="">Select a rating</option>
                <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                <option value="4">⭐⭐⭐⭐ - Good</option>
                <option value="3">⭐⭐⭐ - Average</option>
                <option value="2">⭐⭐ - Poor</option>
                <option value="1">⭐ - Terrible</option>
                </select>
            </label>

            <label>
                What did you like or what could we improve?
                <textarea
                rows="5"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Your comments..."
                />
            </label>

            <button type="submit">Submit Review</button>
            </form>
        )}
        </div>
    </div>
    );
}
