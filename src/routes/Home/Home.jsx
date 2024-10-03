import { HomeStyle } from '../../routes/Home/HomeStyle';
import Carousel from 'react-bootstrap/Carousel';

import Figura1 from '../../assets/figura1.jpeg';
import Figura2 from '../../assets/figura2.jpg';
import Figura3 from '../../assets/figura3.jpg';
import Figura4 from '../../assets/figura4.jpg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../routes/Produtos/ProdutosStyle'
import Carro1 from '../../assets/carro1.jpg'
import Carro2 from '../../assets/carro2.webp'
import Carro3 from '../../assets/carro3.jfif'
import Carro4 from '../../assets/carro4.jpg'
import Carro5 from '../../assets/carro5.webp'
import Carro6 from '../../assets/carro6.webp'

// Componente Slideshow
const Slideshow = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Figura4}
                    alt="Primeiro slide"
                />
                <Carousel.Caption>
                    {/* Adicione texto ou outros elementos aqui, se desejar */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Figura3}
                    alt="Segundo slide"
                />
                <Carousel.Caption>
                    {/* Adicione texto ou outros elementos aqui, se desejar */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Figura2}
                    alt="Terceiro slide"
                />
                <Carousel.Caption>
                    {/* Adicione texto ou outros elementos aqui, se desejar */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

// Componente Home
const Home = () => {
    return (
        <HomeStyle>
            <Slideshow /> {/* Carrossel agora está aqui, antes do jumbotron */}
            <div className="jumbotron">
                <h1 className="display-4">Seja Bem-Vindo</h1>
                <p className="lead">A VoltsDrive é a maior loja de carros elétricos do Brasil</p>
                <hr className="my-4" />
                <p>
                    Junte-se à revolução verde e faça parte da mudança! Escolha um carro elétrico e contribua para um planeta mais limpo e sustentável. Venha explorar, aprender e escolher seu próximo veículo com a gente!
                </p>
                <a className="btn btn-primary btn-lg" href="/sobre" role="button">Saiba mais</a>
            </div>

            <section className="container">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro1} />
    <Card.Body>
        <Card.Title>BYD Dolphin</Card.Title>
        <Card.Text>
        Destaque no mercado global de EVs.
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro2} />
    <Card.Body>
        <Card.Title>Kia EV4 Concept</Card.Title>
        <Card.Text>
   Se destaca como símbolo de inovação, inspirado no pilar "Power to Progress".
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro3} />
    <Card.Body>
        <Card.Title>Toyota bZ4X</Card.Title>
        <Card.Text>
        A primeira aposta 100% elétrica da Toyota.
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro4} />
    <Card.Body>
        <Card.Title>BYD Seal</Card.Title>
        <Card.Text>
        Apresenta a tecnologia avançada Cell-to- Body (CTB) para melhorar a segurança dos passageiros, com uma carroçaria reforçada que proporciona uma rigidez torsional comparável à de um superdesportivo.
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro5} />
    <Card.Body>
        <Card.Title>BYD Yuan Pro</Card.Title>
        <Card.Text>
        O veículo possui uma aparência mais larga, conferindo uma presença visual imponente. Um SUV espaçoso e confortável com cinco lugares.
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro6} />
    <Card.Body>
        <Card.Title>BYD Tan EV</Card.Title>
        <Card.Text>
        Conta com um altíssimo padrão de segurança, para acompanhar toda a performance que o carro é capaz de entregar e garantir máxima proteção à sua família.
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>
    </section>
   
        </HomeStyle>
    );
}

export default Home;
