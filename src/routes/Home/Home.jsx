import { HomeStyle } from '../../routes/Home/HomeStyle'

const Home=()=> {
  return (
    <HomeStyle>
        
    <div className="jumbotron">
    <h1 className="display-4">Seja Bem Vindo</h1>
    <p className="lead">A VoltsDrive é a maior loja de carros elétricos do Brasil</p>
    <hr className="my-4"/>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim incidunt exercitationem mollitia eaque error accusamus praesentium dolorum ex perspiciatis in quaerat beatae, voluptatum assumenda aliquid qui, illo recusandae! Necessitatibus, nemo!
    </p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Saiba mais</a>
    </div>
    </HomeStyle>
  );
}

export default Home;