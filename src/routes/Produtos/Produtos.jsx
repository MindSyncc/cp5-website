
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../routes/Produtos/ProdutosStyle'
import Carro1 from '../../assets/carro1.jpg'
import Carro2 from '../../assets/carro2.webp'
import Carro3 from '../../assets/carro3.jfif'
import Carro4 from '../../assets/carro4.jpeg'
import Carro5 from '../../assets/carro5.webp'
import Carro6 from '../../assets/carro6.jpg'
import { ProdutosStyle } from '../../routes/Produtos/ProdutosStyle';



const Produtos = () => {
    return (
    
    <ProdutosStyle>
    <section className="container">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro1} />
    <Card.Body>
        <Card.Title>Carro 1</Card.Title>
        <Card.Text>
        Melhor Carro de corrida de rua do mundo das ruas Velozes e Furiosis
        </Card.Text>
        <Button variant="primary">Saiba Mais...</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro2} />
    <Card.Body>
        <Card.Title>Carro 2</Card.Title>
        <Card.Text>
        Melhor Carro de corrida de rua do mundo das ruas Velozes e Furiosis
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro3} />
    <Card.Body>
        <Card.Title>Carro 3</Card.Title>
        <Card.Text>
        Melhor Carro de corrida de rua do mundo das ruas Velozes e Furiosis
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro4} />
    <Card.Body>
        <Card.Title>Carro 3</Card.Title>
        <Card.Text>
        Melhor Carro de corrida de rua do mundo das ruas Velozes e Furiosis
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro5} />
    <Card.Body>
        <Card.Title>Carro 3</Card.Title>
        <Card.Text>
        Melhor Carro de corrida de rua do mundo das ruas Velozes e Furiosis
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro6} />
    <Card.Body>
        <Card.Title>Carro 3</Card.Title>
        <Card.Text>
        Melhor Carro de corrida de rua do mundo das ruas Velozes e Furiosis
        </Card.Text>
        <Button variant="primary">Saber mais</Button>
    </Card.Body>
    </Card>
    </section>
   
    </ProdutosStyle>
    );
    
}

export default Produtos;