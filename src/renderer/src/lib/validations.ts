import { SYMBOL } from "@/constants/symbols"

export const validateSymbolTokenId = (answers, userAnswer) => {
    if(!userAnswer[0] && !userAnswer[1]) return
    const symbolName = answers['item_item_type_q1']
    const prevTokenId = SYMBOL[symbolName].tokenNumber.toString()
    const currentTokenId = userAnswer[0].toString() + userAnswer[1].toString()
    if(prevTokenId !== currentTokenId) {
        return `SymbolとtokenIdが一致しません。入力されたシンボル${symbolName}に対するtokenIdは${prevTokenId}です。`
    }
}