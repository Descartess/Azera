import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import AcceptReceipt from './acceptReceipt';
import RejectReceipt from './rejectReceipt';

const ReceiptCard = (props) => (
    <div>
        <Card>
            <Image src={props.imageUrl}/>
            <Card.Content>
                <Icon className="right floated close red circular icon" onClick={props.handleReject} title="Reject"/>
                <Icon className="right floated check green circular icon" onClick={props.handleAccept} title="Approve"/>
                <Icon className="right floated eye circular icon" title="View Details"/>
                <Card.Header>
                    {props.category}
                </Card.Header>
                <Card.Meta>
                    {new Date(props.createdAt).toDateString()}
                </Card.Meta>
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="hashtag" />
                    {props.tags}
                </a>
            </Card.Content>
        </Card>

        <AcceptReceipt
            handleAcceptClose={props.handleAcceptClose}
            confirmAccept={props.confirmAccept}
            showAccept={props.showAccept}
        />

        <RejectReceipt
            handleRejectClose={props.handleRejectClose}
            confirmRejection={props.confirmRejection}
            showReject={props.showReject}
        />
    </div>
);

export default ReceiptCard;
