import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
  }

const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props}/>
      </div>
    )
  }

const Osa = (props) => {
    return (
      <div>
        <p>{props.osa.osa.nimi} {props.osa.osa.tehtavia}</p>
      </div>
    )
  }


const Yhteensa = (props) => {
    return (
      <div>
        <p>Yhteensä {props.tehtavat} tehtävää</p>
      </div>
    )
  }

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa={osa1} />
      <Sisalto osa={osa2} />
      <Sisalto osa={osa3} />
      <Yhteensa tehtavat={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
