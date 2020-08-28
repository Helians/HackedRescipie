import React, { Component } from 'react';
import Card from './card';
import './App.css';
import pizza from './assets/Illustration3.png';
import cheese from './assets/Illustration4.png'

class App extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  //const [recipe, setRecipe] = useState([]);
  
  componentDidMount() {
    fetch("http://starlord.hackerearth.com/recipe")
    .then(res => res.json())
    .then(rec => 
      this.setState({data:rec})
    );
  }

  render(){
    return (
      <div>
        <img className="bgImage pizza" src={pizza} />
        <img className="bgImage cheese" src={cheese} />
        <div className="App">
          <h1 className="app-title">Hacked Recipes</h1>
          <div className="recipe-list">
            {this.state.data.map(rec=>(
              <Card recipe = {rec} key={rec.id.toString()} />
            ))}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
