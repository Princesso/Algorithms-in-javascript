let websitesArray = [
  'andela.com',
  'laptops.com',
  'godaddy.org',
  'logosschhols.org',
  'updates.ng',
  'paystack.com',
  'payme.com',
  'payga.com', 
]

const searchResults = (searchInput) => {
  const matches = websitesArray.filter((domainName) => {
    return domainName.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0,5) : matches
}

console.log(searchResults('daddy'));