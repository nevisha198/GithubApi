const search =  require('./action')

test('user can not Enter username , then it return false', () => {
  expect(search("")).toBe(false);
});

test('user enter valid username , then it return true',  () => {
    expect(search('nevisha198')).toBe(true);
});

test('user enter invalid username , then it return false',  () => {
    expect(search('asdf')).toBe(false);
});