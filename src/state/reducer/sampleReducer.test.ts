import { changeSample } from 'state/actions';
import { sampleReducer } from './sampleReducer';

describe('sampleReducer', function () {
  it('initial state', () => {
    const initialState = sampleReducer(undefined, { type: undefined as any });
    expect(initialState).toEqual({
      message: 'Hello world',
    });
  });

  it('replaces message on sample action', () => {
    const next = sampleReducer({ message: 'WRONG MESSAGE' }, changeSample());
    expect(next).toEqual({ message: 'Sample' });
  });
});
