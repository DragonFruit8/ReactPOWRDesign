import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css';
import ReactAudioPlayer from 'react-audio-player';
import chillBday from './Chill_Bday.mp3';

function AudioModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    audio.pause();}
  const showAudio = () => setShow(true);
  const [volume, setVolume] = useState(0.3);

  const audio = new Audio(chillBday);


  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ReactAudioPlayer
          src={chillBday}
          volume={volume}
          autoPlay
          controls
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="primary" onClick={showAudio}>
        Listen To Mix
      </Button>
    </>
  );
}

export default AudioModal;