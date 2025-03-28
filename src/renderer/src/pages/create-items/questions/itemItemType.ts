import { SYMBOLS } from "@/constants/data"

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
    }, 
    {
        id: "item_item_type_q1",
        questionText: "シンボル名を入れてください。",
        description: "シンボル＝ストアなどで使われている名称",
        example: "",
        type: "choice",
        options: SYMBOLS,
        nextMapping: null,
        index: 0,
        totalLength: 1
    },
    //  {
    //     id: "q2",
    //     questionText: "何番目のアイテムかを入力してください。",
    //     description: "例えばシートを確認し、30までグループがある場合、31と入力",
    //     example: "",
    //     type: "number",
    //     nextMapping: "q3",
    //     index: 0,
    //     totalLength: 1
    // },  {
    //     id: "q3",
    //     questionText: "在庫数を入力してください。",
    //     description: "",
    //     example: "",
    //     type: "number",
    //     nextMapping: null,
    //     index: 0,
    //     totalLength: 1
    // }, 
]