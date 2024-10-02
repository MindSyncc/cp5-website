import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProdutosStyle.jsx'
import Carro1 from '../../assets/carro1.jpg'



const Produtos = () => {
    return (
    
    
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
    <Card.Img variant="top" src={Carro1} />
    <Card.Body>
        <Card.Title>Carro 2</Card.Title>
        <Card.Text>
        Melhor Carro de corrida de rua do mundo das ruas Velozes e Furiosis
        </Card.Text>
        <Button variant="primary">Saiba Mais...</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Carro1} />
    <Card.Body>
        <Card.Title>Carro 3</Card.Title>
        <Card.Text>
        Melhor Carro de corrida de rua do mundo das ruas Velozes e Furiosis
        </Card.Text>
        <Button variant="primary">Saiba Mais...</Button>
    </Card.Body>
    </Card>
    </section>
   
    );
    
}

export default Produtos;