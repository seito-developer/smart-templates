import { SellMethodEnum } from "@/constants/sellMethods"
import { convertBoolean } from "@/lib/utils"

export interface ItemGroupArgsProps {
  id: string
  name: string
  fee: number
  terms: string
  sellMethod: SellMethodEnum
  isNotForSale: boolean
  resaleCondition: number
  isMemberInfoRequired: boolean
  isShippingAddressRequired: boolean
  iPHolderLoyaltyRate: number
}

export interface ItemGroupReturnProps {
  Exec: string
  ID: string
  Name: string
  Fee: number
  Terms: string
  SellMethod: SellMethodEnum
  IsNotForSale: string
  ResaleCondition: number
  IsMemberInfoRequired: string
  IsShippingAddressRequired: string
  IPHolderLoyaltyRate: number
}

const generateTableData = (answers: any):ItemGroupReturnProps => {
  const convertedAnswer:ItemGroupArgsProps = {
    id: answers['item_group_q1'],
    name: answers['item_group_q2'],
    fee: answers['item_group_q3'],
    terms: answers['item_group_q4'],
    sellMethod: answers['item_group_q5'],
    isNotForSale: false,
    resaleCondition: 1,
    isMemberInfoRequired: false,
    isShippingAddressRequired: false,
    iPHolderLoyaltyRate: 0,
  }

  return {
    Exec: convertBoolean(true, 0) as string,
    ID: convertedAnswer.id,
    Name: convertedAnswer.name,
    Fee: convertedAnswer.fee,
    Terms: convertedAnswer.terms,
    SellMethod: convertedAnswer.sellMethod,
    IsNotForSale: convertBoolean(convertedAnswer.isNotForSale, 0) as string,
    ResaleCondition: convertedAnswer.resaleCondition,
    IsMemberInfoRequired: convertBoolean(convertedAnswer.isMemberInfoRequired, 0) as string,
    IsShippingAddressRequired: convertBoolean(convertedAnswer.isShippingAddressRequired, 0) as string,
    IPHolderLoyaltyRate: 100 - convertedAnswer.fee,
  }
}

export { generateTableData }
