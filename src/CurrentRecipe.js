import React from 'react';
import InstructionStep from './InstructionStep';
import { connect } from 'react-redux';
import { Grid, List, Modal, Header, Image, Label } from 'semantic-ui-react';
import DOMPurify from 'dompurify';

class CurrentRecipe extends React.Component {
  state = {
    modalOpen: false
  };

  componentDidMount() {
    if (this.props.currentRecipe.error) {
      this.setState({
        modalOpen: true
      });
    }
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    return (
      <Grid width={14} centered celled="internally" columns="equal">
        {this.props.currentRecipe.error ? (
          <Modal
            open={this.state.modalOpen}
            onClose={() => this.closeModal()}
            closeIcon={true}
            header='Sorry'
            content={this.props.currentRecipe.error}
            closeOnDimmerClick={true}
            size='small'
          />
        ) : (
          <>
            <Grid.Row>
              <Grid.Column width={7} verticalAlign='middle'>
                <Image src={this.props.currentRecipe.image} size='large' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={7} verticalAlign='middle'>
                <Header as='h1'>{this.props.currentRecipe.title}</Header>
                <Header as='h3'>Serves: {this.props.currentRecipe.servings}</Header>
                <Header as='h3'>Ready in {this.props.currentRecipe.readyInMinutes} Minutes</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column width={4}>
                <Header as='h3'>At a Glance:</Header>
                {this.props.currentRecipe.vegetarian ? <Label>Vegetarian</Label> : null}
                {this.props.currentRecipe.vegan ? <Label>Vegan</Label> : null}
                {this.props.currentRecipe.glutenFree ? <Label>Gluten Free</Label> : null}
                {this.props.currentRecipe.veryHealthy ? <Label>Healthy</Label> : null}
                {this.props.currentRecipe.cheap ? <Label>Cheap</Label> : null}
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h3'>Dish summary:</Header>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.currentRecipe.summary) }}></div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column width={6}>
                <Header as='h3'>Ingredients</Header>
                <List bulleted size='large' style={{ textAlign: 'left' }}>
                  {this.props.currentRecipe.extendedIngredients.map((ing, index) => (
                    <List.Item key={index}>{ing.original}</List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={6}>
                <Header as='h3'>Instructions</Header>
                <List ordered divided size='large' style={{ textAlign: 'left' }}>
                  {this.props.currentRecipe.analyzedInstructions[0].steps.map((step, index) => (
                    <InstructionStep key={index} step={step} />
                  ))}
                </List>
              </Grid.Column>
            </Grid.Row>
          </>
        )}
      </Grid>
    );
  }
}

export default connect(state => ({ currentRecipe: state.currentRecipe }))(CurrentRecipe);
