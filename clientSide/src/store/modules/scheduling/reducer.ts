const INITIAL_STATE = {
  scheduling: [],
};

function scheduling(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@scheduling/ALL": {
    }
    default:
      return state;
  }
}

export default scheduling;
