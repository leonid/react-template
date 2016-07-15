import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router/es6';

import WinnersList from 'components/WinnersList';
import SendPrizeForm from 'components/SendPrizeForm';

class Prize extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      winners: [],
      prize: {},
      hasToBeDelivered: false,
      formData: {}
    };

    this.selectWinner   = this.selectWinner.bind( this );
    this.selectPrize    = this.selectPrize.bind( this );
    this.selectDelivery = this.selectDelivery.bind( this );
    this.selectPostamat = this.selectPostamat.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  componentDidMount() {
    let promise = new Promise( ( resolve, reject )=> {
      let xhrWinners = this.props.winners;

      resolve( xhrWinners );
    } ).then( ( response )=> {
      this.setState( {winners: response} );
    } ).then( ()=> {
      this.setState( {prizes: this.props.prizes} );
      this.setState( {postamats: this.props.postamats} );

    } );
  }

  selectWinner( winnerId ) {
    let winner = this.state.winners.filter( ( winner ) => {
      return winner.id === winnerId;
    } )[0];

    this.setState( {
      winner: winner,
      formData: {}
    } );
  }

  selectPrize( prizeOuter ) {
    let prize = this.state.prizes.filter( ( prize ) => {
      return prize.id === prizeOuter.id;
    } )[0];

    this.setState( {
      prize: prize,
      formData: {},
      delivery: null,
      address: null,
      postamat: null,
      hasToBeDelivered: prize.type !== 'e'
    } );
  }

  selectDelivery( delivery ) {
    this.setState( {
      delivery: delivery,
      postamat: {}
    } );
  }

  selectPostamat( postamat ) {
    this.setState( {
      postamat: postamat
    } );
  }

  formFullfiled() {
    return !!this.state.formData;
  }

  handleSubmit( e ) {
    e.preventDefault();

    let data = {
      address: this.state.winner.address,
      delivery: this.state.delivery,
      postamat: this.state.postamat
    };

    this.setState( {
      formData: data
    } );
  }

  render() {
    return this.props.children ?
      this.props.children :
      <article className="g-section">
        <WinnersList winners={this.state.winners} selectWinner={this.selectWinner}/>
        <SendPrizeForm
          winner={this.state.winner}
          prizes={this.state.prizes}
          postamats={this.state.postamats}
          selectPrize={this.selectPrize}
          handleSubmit={this.handleSubmit}
          selectDelivery={this.selectDelivery}
          selectPostamat={this.selectPostamat}
          prize={this.state.prize}
          hasToBeDelivered={this.state.hasToBeDelivered}
          delivery={this.state.delivery}
        />
        <div>
          {this.state.formData ?
          <div><pre>{JSON.stringify(this.state.formData , null, 2) }</pre></div>:
          ''}
        </div>

      </article>;
  }
}

Prize.propTypes = {
  children: PropTypes.node,
  winners: PropTypes.array,
  prizes: PropTypes.array,
  postamats: PropTypes.array
};

Prize.defaultProps = {
  winners: [
    {
      id: '1',
      name: 'Пётр',
      email: 'pyotr@email.to',
      address: 'Челябинск, Новаторов, 12к3, кв 16'
    },
    {
      id: '2',
      name: 'Павел',
      email: 'pavel@email.to',
      address: 'Санкт-Петербург, Дворцовая,д.3'
    },
    {
      id: '3',
      name: 'Роман',
      email: 'roman@email.to',
      address: 'Сургут, ул.Серго Ордженикидзе, 3'
    }
  ],
  prizes: [
    {
      id: 1,
      title: 'Prize 1',
      desc: 'Prize description 1',
      value: 'Prize 1',
      type: 'e'
    },
    {
      id: 2,
      title: 'Prize 2',
      desc: 'Prize description 1',
      value: 'Prize 2',
      type: 'e'
    },
    {
      id: 3,
      title: 'Prize 3',
      desc: 'Prize description 1',
      value: 'Prize 3',
      type: 'p'
    }
  ],
  postamats: [
    {
      title: 'Postaamat 1',
      value: 'Postaamat AAA'
    },
    {
      title: 'Postaamat 2',
      value: 'Postaamat BBB'
    }
  ]
};

export default Prize;
