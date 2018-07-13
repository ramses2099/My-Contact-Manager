//import {contacts} from '../contact-data';
import { client } from '../backend/client'

const url = 'api/People';
const urlPost = 'api/People';


/*--
export function fetchConstacts(){
    return dispatch =>{
      dispatch({
          type:'FETCH_CONTACTS',
          playload: contacts
         
      })
  }
}


export function fetchConstacts(){
    return dispatch =>{      
        axios.get('http://localhost/WebApi/api/Contacts')
        .then(function(res){
            return dispatch({
                type:'FETCH_CONTACTS',                
                playload: res.data
            })      
        });
  }
}
--*/
export function fetchConstacts() {
    return dispatch => {
        client.get(url)
            .then(function (res) {
                return dispatch({
                    type: 'FETCH_CONTACTS',
                    playload: res.data
                })
            });
    }
}
//
export function newContact() {
    return dispatch => {
        dispatch({
            type: 'NEW_CONTACT'
        })
    }
}
//
export function saveContact(contact) {
    return dispatch => {
        client.post(urlPost, contact)
            .then(function (res) {
                return dispatch({
                    type: 'SAVE_CONTACT',
                    playload: res.data
                })
            });
    }
}
//
