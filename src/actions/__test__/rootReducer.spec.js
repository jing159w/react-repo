import rootReducer from '../rootReducer';

import InitReducer from '../reducers/init';
import NavbarReducer from '../reducers/navbar';

describe('root reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      init: InitReducer(),
      navbar: NavbarReducer()
    };
    expect(rootReducer()).toEqual(expected);
  });
});
