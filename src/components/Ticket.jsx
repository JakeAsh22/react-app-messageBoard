import React from 'react';
import PropTypes from 'prop-types';
import VotePostControl from './VotePostControl';

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p>   <style global jsx>{`
        p {
          color: red;
        }
      `}</style><em>{props.issue}</em></p>
      <VotePostControl />
      <hr/>
    </div>
  );
}
// propTypes is declaring a propTypes property on our Ticket componenent
// PropTypes is referring to the PropTypes class we import at the top

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  handleUpvoteClicked: PropTypes.func,
  handleDownvoteClicked: PropTypes.func
};

export default Ticket;


/*
/MyExampleComponent.propTypes = {
  exampleArray: PropTypes.array,
  exampleBoolean: PropTypes.bool,
  exampleFunction: PropTypes.func,
  exampleNumber: PropTypes.number,
  exampleObject: PropTypes.object,
  exampleString: PropTypes.string,
  exampleSymbol: PropTypes.symbol,
  exampleReactElement: PropTypes.element,

  exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
  exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),

  exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),

  optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),
}
*/
