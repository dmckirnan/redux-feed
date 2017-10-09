export function addSub(id) {
  return {
    type: 'ADD_SUB',
    id,
  };
}

export function removeSub(id) {
  return {
    type: 'REMOVE_SUB',
    id,
  };
}
