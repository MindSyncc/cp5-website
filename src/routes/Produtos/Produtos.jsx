
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../routes/Produtos/ProdutosStyle'
import Carro1 from '../../assets/carro1.jpg'
import Carro2 from '../../assets/carro2.webp'
import Carro3 from '../../assets/carro3.jfif'
import Carro4 from '../../assets/carro4.jpg'
import Carro5 from '../../assets/carro5.webp'
import Carro6 from '../../assets/carro6.webp'
import { ProdutosStyle } from '../../routes/Produtos/ProdutosStyle';



const Produtos = () => {
    return (
    
    <ProdutosStyle>
    <section className="container">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro1} />
    <Card.Body>
        <Card.Title>BYD Dolphin</Card.Title>
        <Card.Text>
        Destaque no mercado global de EVs
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro2} />
    <Card.Body>
        <Card.Title>Kia EV4 Concept</Card.Title>
        <Card.Text>
   Se destaca como símbolo de inovação, inspirado no pilar "Power to Progress"
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro3} />
    <Card.Body>
        <Card.Title>Toyota bZ4X</Card.Title>
        <Card.Text>
        A primeira aposta 100% elétrica da Toyota
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
   
    </ProdutosStyle>
    );
    
}

export default Produtos;