import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const AcceptReceipt = (props) => (
    <div>
        <Modal id="accept-receipt" size="small" open={props.showAccept}>
            <Modal.Header>
                Accept Receipt
            </Modal.Header>
            <Modal.Content>
                <div className="row">
                    <p>
                        Are you sure you want to accept this receipt?
                    </p>
                </div>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={props.handleAcceptClose}>
                    Close
                </Button>
                <Button className="ui violet button" onClick={props.confirmAccept}>
                    Confirm
                </Button>
            </Modal.Actions>
        </Modal>
    </div>
);

export default AcceptReceipt;