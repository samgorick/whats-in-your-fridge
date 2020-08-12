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
    const {
      error,
      image,
      title,
      servings,
      readyInMinutes,
      vegetarian,
      vegan,
      glutenFree,
      veryHealthy,
      cheap,
      summary,
      extendedIngredients,
      analyzedInstructions
    } = this.props.currentRecipe;

    return (
      <Grid width={10} style={{borderColor: 'black', borderWidth: '1px'}} centered celled='internally' columns='equal'>
        {error ? (
          <Modal
            open={this.state.modalOpen}
            onClose={() => this.closeModal()}
            closeIcon={true}
            header='Sorry'
            content={error}
            closeOnDimmerClick={true}
            size='small'
          />
        ) : (
          <>
            <Grid.Row>
              <Grid.Column width={5} verticalAlign='middle'>
                <Image src={image} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5} verticalAlign='middle'>
                <Header as='h1'>{title}</Header>
                <Header as='h3'>Serves: {servings}</Header>
                <Header as='h3'>Ready in {readyInMinutes} Minutes</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <Header as='h3'>At a Glance:</Header>
                {vegetarian ? <Label>Vegetarian</Label> : null}
                {vegan ? <Label>Vegan</Label> : null}
                {glutenFree ? <Label>Gluten Free</Label> : null}
                {veryHealthy ? <Label>Healthy</Label> : null}
                {cheap ? <Label>Cheap</Label> : null}
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h3'>Dish summary:</Header>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(summary) }}></div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column width={5}>
                <Header as='h3'>Ingredients</Header>
                <List bulleted size='large' style={{ textAlign: 'left' }}>
                  {extendedIngredients.map((ing, index) => (
                    <List.Item key={index}>{ing.original}</List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h3'>Instructions</Header>
                <List ordered divided size='large' style={{ textAlign: 'left' }}>
                  {analyzedInstructions[0].steps.map((step, index) => (
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
