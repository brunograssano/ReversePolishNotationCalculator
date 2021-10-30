export interface DoNothingAction {
  type: 'DO_NOTHING';
}

export const doNothing = (): DoNothingAction => ({
  type: 'DO_NOTHING',
});
