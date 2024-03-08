import { Component } from 'react';
import './App.css';

// utilise render lorsqu'on utilise un composant de type class
//college et ordinateur sont des enfants, car ce sont des composants qui sont appele dans App
//propriete et valeur : propriete = categorie, valeur = public
class App extends Component {
  state= { informations:[{cat:"prive", lieu:"quebec"},{cat:"public", lieu:"montreal"}]}
  changerCollege = () =>{
    this.setState( 
      { informations:[{cat:"public", lieu:"gaspesie"},{cat:"semi-public", lieu:"saguenay"}]}
    )
  }
  render(){
    return (
      <div className="App"> 
        <h1>Bonjour ! Comment allez-vous</h1> 
        <College categorie = {this.state.informations[0].cat} endroit ={this.state.informations[0].lieu} />
        <button onClick={this.changerCollege}> Changer le college </button>
      </div>
    );
  } 
}

// fonction qui retourne un div sur une page web
// const App = () => {
//   return (
//     <div className="App">
//       <h1>Bonjour ! Comment allez-vous</h1>
//     </div>
//   );
// }


// const College = ({categorie,endroit,children}) => {
//   return (
//     <div> Je suis un college de formation continue. <br/>
//       Je suis un college de type {categorie}.<br/>
//       Je suis dans la ville de {endroit}.<br/>
//       {children}
//        </div>
    
//   )
// }

const College = (props) => {
  return (
    <div> Je suis un college de formation continue. <br/>
      Je suis un college de type {props.categorie}.<br/>
      Je suis dans la ville de {props.endroit}.<br/>
      {props.children}
       </div>)
}

const Ordinateur = () => {
  return (
    <div> Je suis un ordinateur de bureau </div>
  )
}

export default App;
