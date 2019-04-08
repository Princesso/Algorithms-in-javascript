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

//alternatively, find an api that contains various domain names and implement this, look out for performance

export const searchResults = (searchInput, DB) => {
  const matches = DB.filter((domainName) => {
    return domainName.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0,5) : matches
}

// console.log(searchResults('daddy', websitesArray))
