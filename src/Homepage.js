import React from 'react';
// Bootstrap 5

// Custom CSS
import './index.css';
import PolygonEven from './PolygonEven';
import PolygonOdd from './PolygonOdd';
import AudioModal from './AudioModal';
import ContactForm from './ContactForm';



const Homepage = () => {

    return (
        <>
            <section className="hero pb-5">
                <div className="overlay"></div>
                <div className="container-xl">
                    <div className="hero-content">
                        <h1>TAKE BACK YOUR ENERGY</h1>
                        <p>POWR Design LLC is a dynamic and innovative company that provides comprehensive services to
                            entrepreneurs and businesses. Our expertise in web development and notary public services makes us a
                            one-stop-shop for all your business needs.</p>
                        <div id="contactForm">
                            <ContactForm  />
                        </div>
                    </div>
                </div>
            </section>            
            <section id='sectionContainer'>
                <PolygonEven name={'OUR SERVICES'} />
                <div className="text-white py-5 d-flex flex-column justify-content-between">


                    <div id="serviceGroup" className="container card-group py-5 my-5">
                        <div className="card shadow">
                            <img src="https://source.unsplash.com/random/400x300/?" className="card-img-top my-0 rounded"
                                alt="Website Development" />
                            <div className="card-body">
                                <h5 className="card-title">Website Development</h5>
                                <p className="card-text">Craft a captivating website that reflect your unique brand identity and engage your target audience. <br />User-friendly interfaces,e-commerce solutions, and MORE. We bring your digital vision to life.</p>
                                <button
                                    type="button"
                                    href="#" 
                                    className="btn btn-primary">Consult Soon</button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <img src="https://source.unsplash.com/random/400x300/?dj-events" className="card-img-top my-0 rounded"
                                alt="DJ Events" />
                            <div className="card-body">
                                <h5 className="card-title">DJ Events</h5>
                                <p className="card-text">Throw those hands up, shake off some stress and live it up in a moment where memories are created... <br /> Listen to this mix to get a preview of your next event...</p>
                                {/* Open bootstrap react modal */}

                                <AudioModal />
                                {/* AudioModal Button */}

                            </div>
                        </div>
                        <div className="card shadow">
                            <img src="https://source.unsplash.com/random/400x300/?audio-system" className="card-img-top my-0 rounded"
                                alt="Entertainment/Smart Home Setup" />
                            <div className="card-body">
                                <h5 className="card-title">System & Smart Home Setup</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius tincidunt metus, ac posuere odio
                                    pellentesque at.</p>
                                <button
                                    type="button"
                                    className="btn btn-primary">Plan Later</button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <img src="https://source.unsplash.com/random/400x300/?law" className="card-img-top my-0 rounded"
                                alt="Notary Public Services" />
                            <div className="card-body">
                                <h5 className="card-title">Notary Public Services</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius tincidunt metus, ac posuere odio
                                    pellentesque at.</p>
                                <button
                                    type="button"
                                    className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="sectionContainerOdd">
                <PolygonOdd 
                name={'OUR MISSION'}
                 />


                {/* Mission Statement */}
                <div className="container-xl">
                    <div className="row py-5 my-5">
                        <div className="col-md-6">
                            <h2 className="text-start">WHAT WE BELIEVE</h2>
                            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius tincidunt metus, ac posuere odio
                                pellentesque at. Nulla facilisi. Donec euismod, nisl vitae aliquam ultricies, nunc nunc
                                consectetur
                                velit, vitae aliquam nisl nunc vitae nunc. Donec euismod, nisl vitae aliquam ultricies, nunc
                                nunc
                                consectetur velit, vitae aliquam nisl nunc vitae nunc.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Homepage;