import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const ReceiptCard = () => (
  <Card>
    <Image src="https://lh6.googleusercontent.com/-nQIcWSJhzGk/AAAAAAAAAAI/AAAAAAAAABU/kIHUGE2clxc/photo.jpg" />
    <Card.Content>
        <Icon className="right floated close red circular icon" title="Reject"/>
        <Icon className="right floated check green circular icon" title="Approve"/>
        <Icon className="right floated eye circular icon" title="Approve"/>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="hashtag" />
        10 Friends
      </a>
    </Card.Content>
  </Card>
);

export default ReceiptCard;
