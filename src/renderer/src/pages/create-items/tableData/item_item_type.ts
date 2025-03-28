import { SymbolType } from "@/constants/symbols"
import { convertBoolean, getContentData, zeroPadNumber } from "@/lib/utils"

export interface ItemItemTypeReturnProps {
  Exec: string
  Category: string
  Symbol: SymbolType
  TokenType: string
  ItemGroupMasterId: number
  Supply: number
  IdFrom: string
  IdTo: string
  Name: string
  Description: string
  Image: string
  ContentType: string
  ContentUrl: string
  ThreeContentBgColor: string
  Author: string
  ExternalUrl: string
  AnimationUrl: string
  Attributes: string
  Collective: string
}

export　const generateItemItemTypeTable = (answers: any):ItemItemTypeReturnProps => {
  const symbolName = answers['item_item_type_q4']
  const itemType = getContentData(answers['item_item_type_q2'])
  const convertedImage = `https://static.dev-snft.jp/itemtype/${symbolName}/thumbnails/${answers['item_item_type_q2']}.${itemType.extention}`
  const convertedContentUrl = `https://static.dev-snft.jp/itemtype/${symbolName}/contents/${answers['item_item_type_q2']}.png`
  const tokenType = answers['item_item_type_q5'].toString()
  const supply = answers['item_item_type_q6']
  const convertedIdTo = tokenType + zeroPadNumber(supply)

  const convertedAnswer:ItemItemTypeReturnProps = {
    Exec: convertBoolean(true, 0) as string,
    Category: 'Collective',
    Symbol: symbolName,
    TokenType: tokenType,
    ItemGroupMasterId: answers['item_group_q1'],
    Supply: supply,
    IdFrom: tokenType + '00001',
    IdTo: convertedIdTo,
    Name: answers['item_item_type_q0'],
    Description: answers['item_item_type_q1'],
    Image: convertedImage,
    ContentType: itemType.contentType,
    ContentUrl: convertedContentUrl,
    ThreeContentBgColor: answers['item_item_type_q3'] ? answers['item_item_type_q3'] : 'NA',
    Author: answers['item_item_type_q7'] ? answers['item_item_type_q7'] : `@${symbolName}`,
    ExternalUrl: "NA",
    AnimationUrl: "NA",
    Attributes: "NA",
    Collective: "NA",
  }

  return convertedAnswer
}