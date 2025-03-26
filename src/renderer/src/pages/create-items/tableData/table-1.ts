const generateTableData = () => {
  const name = ''
  const description = ''
  const number = ''
  const symbol = ''
  const stock = ''
  const itemGroupMasterId = ''
  const idFrom = number.toString() + '00001'
  const idTo = number.toString() + stock.toString()

  return {
    Exec: 'TRUE',
    Category: 'Collective',
    Symbol: symbol,
    TokenType: number,
    ItemGroupMasterId: itemGroupMasterId,
    Supply: stock,
    IdFrom: idFrom,
    IdTo: idTo,
    Name: name,
    Description: description,
    Image: `https://snft/itemtype/${symbol}/thumbnails/${number}.png`,
    ContentType: 'image/png',
    ContentUrl: `https://snft/itemtype/${symbol}/contents/${number}.png`,
    ThreeContentBgColor: 'N/A',
    Author: `@${symbol}`,
    ExternalUrl: 'N/A',
    AnimationUrl: 'N/A',
    Attributes: 'N/A'
  }
}

export { generateTableData }
