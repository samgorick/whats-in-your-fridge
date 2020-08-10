import React from 'react';
import InstructionStep from './InstructionStep';
import { connect } from 'react-redux';
import { Grid, List, Modal } from 'semantic-ui-react';


class CurrentRecipe extends React.Component {

  state = {
    modalOpen: false
  }

  componentDidMount(){
    if (this.props.currentRecipe.error){
      this.setState({
      modalOpen: true
    })      
    }
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }

  render(){
    return(
      <Grid width={14} centered>
    {console.log(this.props.currentRecipe.error)}
    {this.props.currentRecipe.error ? (
      <Modal
        open={this.state.modalOpen}
        onClose={() => this.closeModal()}
        closeIcon={true}
        header='Sorry'
        content={this.props.currentRecipe.error}
        closeOnDimmerClick={true}
        size="small"
      />
    ) : (
      <>
        <Grid.Column width={7}>Nothing yet</Grid.Column>
        <Grid.Column width={7}>
          <List ordered divided size='large' style={{ textAlign: 'left' }}>
            {this.props.currentRecipe.map((step, index) => (
              <InstructionStep key={index} step={step} />
            ))}
          </List>
        </Grid.Column>
      </>
    )}
  </Grid>
    )
  }
}

export default connect(state => ({ currentRecipe: state.currentRecipe }))(CurrentRecipe);
