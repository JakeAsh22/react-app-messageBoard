import React from 'react';
// import Ticket from './Ticket';

class VotePostControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      count: 0
    };
    this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
    this.handleDownvoteClicked = this.handleDownvoteClicked.bind(this);
  }

  handleUpvoteClicked() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDownvoteClicked() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return(
      <div>

        <button onClick={this.handleUpvoteClicked}> ⬆️</button> <p>{this.state.count}</p> <button onClick={this.handleDownvoteClicked}> ⬇️</button>
        
            
      </div>
    );
  }
}
export default VotePostControl;