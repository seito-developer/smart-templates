import { SYMBOL } from "@/constants/symbols"
import { QuestionProps } from "@/pages/create-items/questions/questions"

export const itemItemTypeQuestion: QuestionProps[] = [
    {
        id: "item_item_type_q0",
        questionText: "アイテム名を入力してください。",
        description: "",
        example: "テスト用アイテム01",
        type: "text",
        nextMapping: "item_item_type_q1",
        index: 0,
        totalLength: 1
    }, {
        id: "item_item_type_q1",
        questionText: "Descriptionを入力してください。",
        description: "アイテムの説明文にあたる文字列",
        example: "【テスト】アイテムの説明文です。",
        type: "textarea",
        nextMapping: 'item_item_type_q2',
        index: 0,
        totalLength: 1
    },
    {
        id: "item_item_type_q2",
        questionText: "アイテムのタイプを選択してください。",
        description: "",
        example: "",
        type: "choice",
        options: [
            'png画像',
            'gif画像',
            'mp4動画',
            '3Dモデル',
        ],
        nextMapping: {
            'png画像': 'item_item_type_q4',
            'gif画像': 'item_item_type_q4',
            'mp4動画': 'item_item_type_q4',
            '3Dモデル': 'item_item_type_q3',
        },
        index: 0,
        totalLength: 1
    }, 
    {
        id: "item_item_type_q3",
        questionText: "背景色を指定してください。空欄でも可。",
        description: "3Dモデルの拡大表示時の背景色。16進数で指定",
        example: "",
        type: "text",
        nextMapping: 'item_item_type_q4',
        index: 0,
        totalLength: 1,
        isNullable: true
    }, 
    {
        id: "item_item_type_q4",
        questionText: "シンボル名を入力してください。",
        description: "シンボル＝ストアなどで使われている名称",
        example: "",
        type: "choice",
        options: Object.keys(SYMBOL),
        nextMapping: {
            'IZMIZUM': 'item_item_type_q5',
            'SWALLOWSBALL': 'item_item_type_q5',
            'FZMZ': 'item_item_type_q5',
            'EKI': 'item_item_type_q5',
            'SSFCNFT': 'item_item_type_q5',
            'BBB2023': 'item_item_type_q5',
            'DEVSTORE': 'item_item_type_q5',
            'TICPOA': 'item_item_type_q5',
            'RRI': 'item_item_type_q5',
            'UXTEST': 'item_item_type_q5',
            'DEVSTORE2': 'item_item_type_q5',
            'DEVMUMBAI1': 'item_item_type_q5',
            'DEVAMOY1': 'item_item_type_q5',
            'LISANFT': 'item_item_type_q5',
            'COCKTAiLPARTY': 'item_item_type_q5',
            'DEVMINATO1': 'item_item_type_q5',
        },
        index: 0,
        totalLength: 1
    },
    {
        id: "item_item_type_q5",
        questionText: "TokenTypeを入力してください。",
        description: "4桁重複しないシンボルに対応するTokenTypeを選択してください。",
        example: "LISANFTは63XX、DEVMINATO1は64XX",
        type: "number",
        nextMapping: 'item_item_type_q6',
        index: 0,
        totalLength: 1
    },
    {
        id: "item_item_type_q6",
        questionText: "Supplyを入力してください。",
        description: "在庫を入力してください。",
        example: "100",
        type: "number",
        nextMapping: 'item_item_type_q7',
        index: 0,
        totalLength: 1
    },{
        id: "item_item_type_q7",
        questionText: "アイテムの著者名を入力してください。空欄でも可。",
        description: "アイテム詳細画面などで表示される著者名。空欄の場合はシンボル名が適応。",
        example: "",
        type: "text",
        nextMapping: null,
        index: 0,
        totalLength: 1,
        isNullable: true
    }
]