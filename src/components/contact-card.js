import React from 'react';
import PropTypes from 'prop-types';
import {Card, Button, Icon} from 'semantic-ui-react';

export default function ContactCard({contact, deleteContact}){
    return (
      <div>
          <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name="user outline"/>{contact.FirstName} {contact.LastName}
                </Card.Header>
                <Card.Description>
                    <p><Icon name="phone"/>{contact.Phone}</p>
                    <p><Icon name="envelope outline"/>{contact.Email}</p>
                </Card.Description>
            </Card.Content> 
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button basic color="green">Edit</Button>
                    <Button basic color="red">Delete</Button>
                </div> 
            </Card.Content>             
          </Card>
      </div>
    );  
}

ContactCard.propTypes ={
    contact: PropTypes.object.isRequired
}
