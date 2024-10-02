import { SobreStyle } from '../../routes/Sobre/SobreStyle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import equipeImage from '../../assets/equipe.png'; // Substitua pelo caminho da sua imagem

const About = () => {
    return (
        <SobreStyle>
            <Container className="mt-5">
                <h1 className="text-center mb-4">Sobre Nós</h1>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Nossa Missão</Card.Title>
                                <Card.Text>
                                    Nossa missão é proporcionar uma experiência excepcional no setor automotivo, com um foco em sustentabilidade e inovação. 
                                    Acreditamos que a mobilidade elétrica é o futuro e estamos comprometidos em ajudar nossos clientes a fazer essa transição.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Nossa Visão</Card.Title>
                                <Card.Text>
                                    Ser reconhecido como a principal empresa de veículos elétricos do país, oferecendo produtos de alta qualidade e um atendimento ao cliente incomparável.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4 align-items-center"> {/* Alinhando verticalmente */}
                    <Col md={6}>
                        <h2 className="text-center">Nossa Equipe</h2>
                    </Col>
                    <Col md={6}>
                        <img src={equipeImage} alt="Nossa Equipe" className="img-fluid" /> {/* Imagem ao lado */}
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="path/to/equipe1.jpg" />
                            <Card.Body>
                                <Card.Title>Fernando Carlos</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="path/to/equipe2.jpg" />
                            <Card.Body>
                                <Card.Title>Heloísa Fleury</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="path/to/equipe3.jpg" />
                            <Card.Body>
                                <Card.Title>Juan Fuentes</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="path/to/equipe4.jpg" />
                            <Card.Body>
                                <Card.Title>Julia Carolina</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="path/to/equipe5.jpg" />
                            <Card.Body>
                                <Card.Title>Pedro Henrique Batista</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </SobreStyle>
    );
}

export default About;
