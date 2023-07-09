import React, { useState } from 'react';
import './index.css';
import OfferData from './OfferData';
import EducationData from './EducationData';
import PolygonEven from './PolygonEven';

const Promo = () => {

  const [showHide, setShowhide] = useState('');

  const handleshowhide = (e) => {
    setShowhide(e.target.value);
  }

  OfferData.sort((a, b) => (a.title > b.title) ? 1 : -1);

  return (
    <>
      <section className="heroSection pb-5">
        {/* // Hero Section */}
        <div className="overlay"></div>
        <div className="container-xl">
          <div className="hero-content">
            <h1>TAKE ADVANTAGE OF OFFERS/PROMOS</h1>
            <p>As a business that aims to benefit others, honestly, and more equitably: Here are some offers that you could take advantage of TODAY and get a return TOMORROW*</p>
            <br />
            <quote>* Offer may take up to 1-4 weeks to redeem fully, depending on the companies terms and conditions</quote>
          </div>
        </div>
      </section>
      <div>
        <section id="containerHead">
          <PolygonEven
            name='Offers/Promos'
          />
          <div className="container">
            <div className="row justify-content-end py-3">
              <div className="col-8 d-flex">

                <div className="form-group flex-fill">
                  <label for="name">Select Offer Type</label>
                  <select className="form-control" id="name" onChange={(e) => handleshowhide(e)}>
                    <option>Choose...</option>
                    <option value='Cash'>Fast Cash</option>
                    <option value='Credit'>Credit Boosters</option>
                    <option value='Education'>Education Promos</option>
                  </select>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='px-5'>
        <div className="container border py-5 bg-dark">
          {
            showHide === 'Cash' && (
              <div className='d-flex flex-column text-white'>
                <div>
                  {OfferData.map((OfferDetail, index) => {
                    return (
                      <div className="d-flex flex-row p-3 border rounded rounded-light my-2 bg-dark shadow-lg" key={index}>
                        <img src={OfferDetail.image} className="img-fluid rounded w-25 px-3" alt={OfferDetail.alt} />
                        <div className="d-flex flex-column flex-fill justify-content-between">
                          
                            <h5 className="display-5">{OfferDetail.title}</h5>
                            <p className="py-3 m-0">{OfferDetail.message}</p>
                          
                          <div className="d-flex flex-column align-items-stretch">
                            <div className="my-0 py-0 flex-fill ">
                              
                                <a href={OfferDetail.link} target='_blank' type="button" className="btn btn-primary w-100" src={OfferDetail.link}>{OfferDetail.button}</a>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
          {
            showHide === 'Education' && (
              <div className='d-flex flex-column text-white'>
                <div>
                  {EducationData.map((EducationData, index) => {
                    return (
                      <div className="d-flex flex-row p-3 border rounded rounded-light my-2 bg-dark shadow-lg" key={index}>
                        <img src={EducationData.image} className="img-fluid rounded w-25 px-3" alt={EducationData.alt} />
                        <div className="flex-fill">
                          <h5 className="">{EducationData.title}</h5>
                          <p className="">{EducationData.message}</p>
                        </div>
                        <div className="">
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

            )
          }
        </div>
      </section>
    </>
  )
}

export default Promo;