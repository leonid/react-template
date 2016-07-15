import React, {PropTypes} from 'react';

import Dropdown from 'components/Dropdown';

const SendPrizeForm = ( props ) => (
  <section>
    { props.winner ?
      (
        <form onSubmit={props.handleSubmit}>
          <div>
            <label className="b-label">Winner is {props.winner.name}
              <input type="hidden" value={props.winner.id}/>
            </label>
          </div>
          <div style={{width: '300px'}}>
            <label className="b-label">Choose prize</label>
            <Dropdown items={props.prizes}
                      name="type"
                      filter={(item) => {return true}}
                      value={props.prize.title}
                      onSelectItem={props.selectPrize}
                      placeholder="Type"/>
          </div>
          { props.hasToBeDelivered ?
            (<div style={{width: '300px'}}><label className="b-label">Choose
              delivery</label><Dropdown items={['address','postamat','self-pickup']}
                                        name="type"
                                        filter={(item) => {return true}}
                                        value={props.delivery}
                                        onSelectItem={props.selectDelivery}
                                        placeholder="Type"/></div>)
            : <div><label className="b-label">Send to</label><input className="b-input" type="email"
                                                                    value={props.winner.email}/>
          </div>
          }

          {props.delivery === 'address' ?
            <div><label className="b-label">Address</label><input className="b-input" type="text"
                                                                  value={props.winner.address}/>
            </div> : ''}
          {props.delivery === 'postamat' ?
            <div style={{width: '300px'}}><label className="b-label">Choose
              postamat</label><Dropdown items={props.postamats}
                                        name="type"
                                        filter={(item) => {return true}}
                                        onSelectItem={props.selectPostamat}
                                        placeholder="Postamat"/></div> : ''}

          <button type="submit" disabled={props.formFullfiled}>Send</button>
        </form>
      )
      : <h2>Choose winner</h2>
    }
  </section>
);

SendPrizeForm.defaultProps = {
  prize: {}
};

SendPrizeForm.propTypes = {
  winner: PropTypes.object,
  prize: PropTypes.object,
  prizes: PropTypes.array,
  delivery: PropTypes.string,
  postamats: PropTypes.array,
  hasToBeDelivered: PropTypes.bool,
  formFullfiled: PropTypes.bool,
  selectPrize: PropTypes.func,
  selectDelivery: PropTypes.func,
  handleSubmit: PropTypes.func,
  selectPostamat: PropTypes.func
};

export default SendPrizeForm;
