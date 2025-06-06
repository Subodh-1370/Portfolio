import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer","Frontend Learner" ];
  const period = 2000;
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffffff,
          backgroundColor: 0x0d0d0d,
          points: 15.00,
          maxDistance: 25.00,
          spacing: 20.00
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section 
      className="banner" 
      id="home" 
      style={{ 
        position: "relative", 
        height: "100vh", 
        overflow: "hidden" 
      }}
    >
      <div 
        ref={vantaRef} 
        className="vanta-background"
      />
      <Container 
        className="banner-content"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px"
        }}
      >
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    display: "inline-block",
                    marginBottom: "20px"
                  }}>
                    🚀 Welcome to My Portfolio
                  </span>

                  <h1>
                    {`Hi! I'm Subodh`}{" "}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer","Frontend Learner" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="intro-text">
                    I'm passionate about building modern, responsive, and user-friendly web applications. This portfolio showcases a variety of projects I've developed—from sleek landing pages to fully functional web apps—each designed with a strong focus on aesthetics and performance.
                    <br /><br />
                    Dive in to explore my journey, skills, and creations. Whether you're here to collaborate, get inspired, or just curious—I'm glad you're visiting!
                  </p>
                  <button onClick={() => console.log('connect')} className="connect-button">
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="profile-circle-wrapper">
                    <img
                      src="profile.jpg" // Updated path to circular image
                      alt="Subodh Profile"
                      className="profile-circle-photo"
                    />
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
