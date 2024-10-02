import { HomeStyle } from '../../routes/Home/HomeStyle';
import Carousel from 'react-bootstrap/Carousel';

import Figura1 from '../../assets/figura1.jpeg';
import Figura2 from '../../assets/figura2.jpg';
import Figura3 from '../../assets/figura3.jpg';
import Figura4 from '../../assets/figura4.jpg';

// Componente Slideshow
const Slideshow = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Figura2}
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
                    src={Figura4}
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
                <a className="btn btn-primary btn-lg" href="#" role="button">Saiba mais</a>
            </div>
        </HomeStyle>
    );
}

export default Home;
