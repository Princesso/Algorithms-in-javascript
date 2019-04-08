import { searchResults } from '../basicSearch';

const mockDB = [
  'xyz.com',
  'abc.com',
  'paystack.ng',
  'google.com',
  'alert.com',
  'fire.com',
  'alarm.com',
]

test('basicSearch', () => {
    expect(searchResults('bube', mockDB)).toEqual([])
})

test('basicSearch returns 5 results ', () => {
  expect(searchResults('.com', mockDB).length).toEqual(5)
})

test('basicSearch returns 5 results ', () => {
  expect(searchResults(undefined, mockDB)).toEqual([])
  expect(searchResults(null, mockDB)).toEqual([])

})