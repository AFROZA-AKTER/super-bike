import React from 'react';
import './Reviews.css'

const Reviews = () => {
    return (
        <section id="reviews" className="testimonials">
            <h5 style={{ color: "#1BA370" }} className="text-center mt-5">What Our Clients Says</h5>
            <h1 style={{ color: "#3B3B3B" }} className="text-center">Happy Clients</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-5 ">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/hDVFRMh/review1.png" class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">HANET AGUILAR</h5>
                            <p class="card-text">Cras eget mattis neque. Nulla tempus tortus elit, vitae phaetr sit amet, consectetur adipisicing elit. </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/NVcvNQk/review2.png" class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">BEVERLY WEST</h5>
                            <p class="card-text">Services are awesome.tempus tortus elit, vitae phaetr sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/xjqM4HM/review3.png" class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">ROGER OBRIEN</h5>
                            <p class="card-text">Great experience . this is just amazing. really satisfying.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;