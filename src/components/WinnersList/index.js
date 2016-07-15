import React, {PropTypes} from 'react';

const WinnersList = (props) => (
  <table className="b-table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
    </thead>
    <tbody>
    {props.winners.map((winner)=>{
      return (<tr style={{cursor:'pointer'}} key={winner.id+'_winner'} onClick={props.selectWinner.bind(this, winner.id)}>
        <td>{winner.name}</td>
        <td>{winner.email}</td>
        <td>{winner.address}</td>
      </tr>)
    })}
    </tbody>
  </table>
);

WinnersList.propTypes = {
  winners: PropTypes.array,
  selectWinner: PropTypes.func
};

export default WinnersList;
