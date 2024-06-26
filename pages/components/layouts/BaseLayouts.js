import Header from '../shared/Header';
import { Container, Row, Col } from 'reactstrap';

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;
  return (
    <div className="layout-container">
      <Header user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <div className="MainFooter">
        <Container>
          <Row>
            <Col>
              <h2 className="contactTitle">Contact:</h2>
            </Col>

            <Col>
              <p className="contactInfo">
              Real Estate Salesperson
Coldwell Banker Solano Pacific
CalRE #: 01126204
              </p>
              <p className="contactInfo">Business: (707) 749-6329</p>
              <p className="contactInfo">Mobile: (707) 853-8610</p>
              <p className="contactInfo">rick.crisostomo@coldwellbanker.com</p>
              <p  className="contactInfo"> CalRE #: 01126204</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BaseLayout;
