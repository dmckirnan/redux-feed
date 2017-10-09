export default function subs(state = [], action) {
  switch (action.type) {
    case 'ADD_SUB':
      return [
        ...state, action.id,
      ];
    case 'REMOVE_SUB':
      return state.filter(sub => sub !== action.id)
    default:
      return state;
  }
}
