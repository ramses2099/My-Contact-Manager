const defaultState = {
    contacts:[]
}

export default function contact_reducer(state = defaultState, action){
  switch (action.type) {
      case 'FETCH_CONTACTS':
          return{
              ...state,
              contacts:action.playload
          }
      default:
          return state;
  }

}