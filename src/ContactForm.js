import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ContactForm = () => {
    const [showContact, setShowContact] = useState(false);

    const contactClose = () => setShowContact(false);

    const contactShow = () => setShowContact(true);

    return (
        <>
            <Modal show={showContact} onHide={contactClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={contactClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
            <Button variant="primary" onClick={contactShow}>
                Contact Now
            </Button>
        </>
    )
}

export default ContactForm;
