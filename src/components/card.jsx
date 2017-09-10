import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import AcceptReceipt from './acceptReceipt';
import RejectReceipt from './rejectReceipt';
import ReceiptDetail from './receiptDetail';

const ReceiptCard = (props) => (
    <div>
        <Card>
            <Image src={props.imageUrl} className="ui medium image"/>
            <Card.Content>
                <Icon className="right floated close red circular icon" onClick={props.handleReject} title="Reject"/>
                <Icon className="right floated check green circular icon" onClick={props.handleAccept} title="Approve"/>
                <Icon className="right floated eye circular icon" onClick={props.handleDetails} title="View Details"/>
                <Card.Header>
                    {props.category}
                </Card.Header>
                <Card.Meta>
                    {new Date(props.createdAt).toDateString()}
                </Card.Meta>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="hashtag"/>
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

        <ReceiptDetail
            imageUrl={props.imageUrl}
            handleDetailsClose={props.handleDetailsClose}
            showDetails={props.showDetails}
        />
    </div>
);

export default ReceiptCard;
