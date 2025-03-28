import { SELL_METHOD } from "@/constants/sellMethods"
import { QuestionProps } from "@/pages/create-items/questions/questions"

export const itemGroupQuestions: QuestionProps[] = [
    {
        id: "item_group_q0",
        questionText: "アイテムグループを新規に作りますか？",
        description: "新規にグループも作るなら「はい」、既存のグループに所属させるなら「いいえ」",
        type: "choice",
        options: ['はい', 'いいえ'],
        nextMapping: {
            'はい': 'item_group_q1',
            'いいえ': null //'item_item_type_q0'
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
        type: "textarea",
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
        nextMapping: {
            [SELL_METHOD.UNSPECIFIED.label]: null,
            [SELL_METHOD.REGULAR.label]: null,
            [SELL_METHOD.LOTTERY.label]: null,
            [SELL_METHOD.DIRECT.label]: null,
            [SELL_METHOD.INDIRECT.label]: null,
            [SELL_METHOD.STEP_LOTTERY.label]: null,
            [SELL_METHOD.AUCTION.label]: null,
            [SELL_METHOD.FREE.label]: null,
            [SELL_METHOD.CONDITIONAL.label]: null
        },
        index: 0,
        totalLength: 1
    }, {
        id: "item_group_q6",
        questionText: "ResaleConditionの有無を選択してください。",
        description: "",
        example: "",
        type: "choice",
        options: [
            "TRUE",
            "FALSE",
        ],
        nextMapping: {
            "TRUE": "item_group_q7",
            "FALSE": "item_group_q7"
        },
        index: 0,
        totalLength: 1
    }, {
        id: "item_group_q7",
        questionText: "IsMemberInfoRequiredの有無を選択してください。",
        description: "",
        example: "",
        type: "choice",
        options: [
            "TRUE",
            "FALSE",
        ],
        nextMapping: {
            "TRUE": "item_group_q8",
            "FALSE": "item_group_q8"
        },
        index: 0,
        totalLength: 1
    }, {
        id: "item_group_q8",
        questionText: "IsShippingAddressRequiredの有無を選択してください。",
        description: "",
        example: "",
        type: "choice",
        options: [
            "TRUE",
            "FALSE",
        ],
        nextMapping: {
            "TRUE": "item_group_q9",
            "FALSE": "item_group_q9"
        },
        index: 0,
        totalLength: 1
    }, {
        id: "item_group_q9",
        questionText: "続けてアイテムを作成しますか？",
        description: "",
        example: "",
        type: "choice",
        options: [
            "YES",
            "NO",
        ],
        nextMapping: {
            "YES": "item_item_type_q0",
            "NO": null
        },
        index: 0,
        totalLength: 1
    }
]