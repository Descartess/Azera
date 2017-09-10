import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const ReceiptCard = (props) => (
  <Card>
    <Image src={props.imageUrl}/>
    <Card.Content>
        <Icon className="right floated close red circular icon" title="Reject"/>
        <Icon className="right floated check green circular icon" title="Approve"/>
        <Icon className="right floated eye circular icon" title="Approve"/>
      <Card.Header>{props.catergory}</Card.Header>
      <Card.Meta>{props.createdAt}</Card.Meta>
      <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="hashtag" />
        {props.tags}
      </a>
    </Card.Content>
  </Card>
);

export default ReceiptCard;
