type UpdateOtherSampleAction = {
  type: 'UPDATE_OTHER_SAMPLE';
  function: 'INCREMENT' | 'DECREMENT';
};

export const updateOtherSample = (): UpdateOtherSampleAction => ({
  type: 'UPDATE_OTHER_SAMPLE',
  function: 'INCREMENT',
});
