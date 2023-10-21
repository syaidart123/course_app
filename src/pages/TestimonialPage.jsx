import { Container, Row, Col } from 'react-bootstrap';
import { testimonial } from '../data/index';

import Faq from '../components/Faq';
import BtnTop from '../components/BtnTop';

const TestimonialPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', left: 0 });
  };
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Semua Testimonial
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                nisi?
              </p>
            </Col>
            <BtnTop scrollToTop={scrollToTop} />
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map(data => {
              return (
                <Col key={data.id} className="mb-5">
                  <div className="people mb-3">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                  <p className="desc shadow-sm">{data.desc}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Faq />
    </div>
  );
};

export default TestimonialPage;
