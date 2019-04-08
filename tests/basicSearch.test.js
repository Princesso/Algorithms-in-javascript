import { searchResults } from '../basicSearch';

const mockDB = [
  'xyz.com',
  'abc.com',
  'paystack.ng'
]

test('basicSearch', () => {
    expect(searchResults('bube', mockDB)).toEqual([])
})