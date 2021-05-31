export const rootReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case 'DO_NOTHING':
      return state;
    default:
      return state;
  }
};
