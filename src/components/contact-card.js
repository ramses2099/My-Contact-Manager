import React from 'react';
import PropTypes from 'prop-types';
import {Card, Button, Icon} from 'semantic-ui-react';


export default function ContactCard({contact, deleteContact}){
    return (
      <div>
          <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='user outline'/>{contact.FirstName} {contact.LastName}
                </Card.Header>
                <Card.Description>
                    <p><Icon name='phone'/>{contact.Phones[0].Contact_Phone}</p>
                    <p><Icon name='mail outline'/>{contact.Emails[0].Contact_Email}</p>
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
