const defaultState = {
    contacts:[],
    loading:false,
    error:{}
}

export default function contact_reducer(state = defaultState, action){
  switch (action.type) {
      case 'FETCH_CONTACTS':{
          return{
              ...state,
              contacts:action.playload
          }
        }
      case 'NEW_CONTACT':{
          return{
              ...state,
              contacts:action.playload
          }
        }
      case 'SAVE_CONTACT_PENDING':{
          return{
              ...state,
              loading:true
          }
        }
      case 'SAVE_CONTACT_FULLFILLED':{
          return{
              ...state,
              contacts:[...state, action.playload],
              errors:{},
              loading:true
          }
        }
      case 'SAVE_CONTACT_REJECTED':{
          const data = action.playload.response;          
          const { "FirstName": FirstName, "LastName":LastName, phone, email} = data.errors;
          const errors = {global:data.message, "FirstName": FirstName, "LastName":LastName, phone, email};

          return{
              ...state,
              errors: errors,
              loading: false
          }
        }
      default:
          return state;
  }

}