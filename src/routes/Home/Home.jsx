import { HomeStyle } from '../../routes/Home/HomeStyle'

const Home=()=> {
  return (
    <HomeStyle>
        
    <div className="jumbotron">
    <h1 className="display-4">Seja Bem-Vindo</h1>
    <p className="lead">A VoltsDrive é a maior loja de carros elétricos do Brasil</p>
    <hr className="my-4"/>
    <p>
    Junte-se à revolução verde e faça parte da mudança! Escolha um carro elétrico e contribua para um planeta mais limpo e sustentável. Venha explorar, aprender e escolher seu próximo veículo com a gente!    </p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Saiba mais</a>
    </div>
    </HomeStyle>
  );
}

export default Home;