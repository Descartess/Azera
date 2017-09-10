import React from 'react';
import { Modal, Button, Header, Icon, Image } from 'semantic-ui-react';

const ReceiptDetail = (props) => (
    <div>
        <Modal basic size='small' open={props.showDetails}>
            <Header content='Receipt Details' />
            <Modal.Content>
                <Image src={props.imageUrl} className="ui fluid image"/>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={props.handleDetailsClose}>
                    <Icon name='remove' /> Close
                </Button>
            </Modal.Actions>
        </Modal>
    </div>
);

export default ReceiptDetail;