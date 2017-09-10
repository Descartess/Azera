import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const RejectReceipt = (props) => (
    <div>
        <Modal id="accept-receipt" size="small" open={props.showReject}>
            <Modal.Header>
                Reject Receipt
            </Modal.Header>
            <Modal.Content>
                <div className="row">
                    <p>
                        Are you sure you want to reject this receipt?
                    </p>
                </div>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={props.handleRejectClose}>
                    Close
                </Button>
                <Button className="ui violet button" onClick={props.confirmRejection}>
                    Confirm
                </Button>
            </Modal.Actions>
        </Modal>
    </div>
);

export default RejectReceipt;