import { SYMBOLS } from "@/constants/data"
import { SELL_METHOD } from "@/constants/sellMethods"

export interface QuestionProps {
    id: string,
    questionText: string,
    description?: string,
    example?: string,
    type: string,
    options?: string[],
    nextMapping: any,
    index: number,
    totalLength: number
}

// id: string
//   name: string
//   fee: number
//   terms: string
//   sellMethod: SellMethodEnum
//   isNotForSale: boolean
//   resaleCondition: number
//   isMemberInfoRequired: boolean
//   isShippingAddressRequired: boolean
//   iPHolderLoyaltyRate: number

export const itemGroupQuestions: QuestionProps[] = [
    {
        id: "item_group_q0",
        questionText: "アイテムグループを新規に作りますか？",
        description: "新規にグループも作るなら「はい」、既存のグループに所属させるなら「いいえ」",
        type: "choice",
        options: ['はい', 'いいえ'],
        nextMapping: {
            'はい': 'item_group_q1',
            'いいえ': 'item_item_type'
        },
        index: 0,
        totalLength: 1
    }, 
    {
        id: "item_group_q1",
        questionText: "IDを入力してください。",
        description: "既存のアイテムグループのIDと重複しないよう一意の値にしてください。また連番になるようにしてください。",
        example: "32",
        type: "number",
        nextMapping: "item_group_q2",
        index: 0,
        totalLength: 1
    },  
    {
        id: "item_group_q2",
        questionText: "アイテムグループ名を入力してください。",
        description: "",
        example: "2025/01/01テスト用グループ",
        type: "text",
        nextMapping: "item_group_q3",
        index: 0,
        totalLength: 1
    },  
    {
        id: "item_group_q3",
        questionText: "0~100の値で手数料を設定してください。",
        description: "アイテムが購入されたときにSNFTに支払われる手数料",
        example: "10",
        type: "number",
        nextMapping: "item_group_q4",
        index: 0,
        totalLength: 1
    },  
    {
        id: "item_group_q4",
        questionText: "利用規約の文言を入力してください。",
        description: "アイテムが購入されたときに表示される利用規約",
        example: "【テストの利用規約文言】このアイテムは2025/01/01まで有効です。",
        type: "text",
        nextMapping: "item_group_q5",
        index: 0,
        totalLength: 1
    }, {
        id: "item_group_q5",
        questionText: "SellMethodを選択してください。",
        description: "アイテムが購入されたときに表示される利用規約",
        example: "【テストの利用規約文言】このアイテムは2025/01/01まで有効です。",
        type: "choice",
        options: [
            SELL_METHOD.UNSPECIFIED.label,
            SELL_METHOD.REGULAR.label,
            SELL_METHOD.LOTTERY.label,
            SELL_METHOD.DIRECT.label,
            SELL_METHOD.INDIRECT.label,
            SELL_METHOD.STEP_LOTTERY.label,
            SELL_METHOD.AUCTION.label,
            SELL_METHOD.FREE.label,
            SELL_METHOD.CONDITIONAL.label
        ],
        nextMapping: null,
        index: 0,
        totalLength: 1
    }
]