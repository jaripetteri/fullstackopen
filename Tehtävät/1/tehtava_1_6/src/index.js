import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        huono: 0,
        neutraali: 0,
        hyva: 0
      }
    }
    
    klikHuono = () => {
      this.setState({
        huono: this.state.huono + 1,
      })
    }
  
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1,
      })
    }

    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1,
      })
    }
      
    render() {
      const otsikko = "Anna palautetta"
      const alaotsikko = "Statistiikka"
      const Palaute = () => {
        return (
          <div>
            <p>Hyvä {this.state.hyva}</p>
            <p>Neutraali {this.state.neutraali}</p>
            <p>Huono {this.state.huono}</p>
          </div>
        )
      }
      
      return (
        <div>
          <h1>{otsikko}</h1>
          <button onClick={this.klikHuono}>Huono</button>
          <button onClick={this.klikNeutraali}>Neutraali</button>
          <button onClick={this.klikHyva}>Hyvä</button>
          <h1>{alaotsikko}</h1>
          <Palaute />
        </div>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
