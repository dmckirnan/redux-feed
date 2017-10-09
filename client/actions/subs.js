export function addSub(id) {
  console.log(id);
  return {
    type: 'ADD_SUB',
    id,
  };
}

export function removeSub(id) {
  console.log(id);
  return {
    type: 'REMOVE_SUB',
    id,
  };
}
