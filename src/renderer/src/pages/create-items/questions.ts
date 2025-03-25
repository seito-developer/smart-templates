import { SYMBOLS } from "@/constants/data"

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

export const questions: QuestionProps[] = [
    {
        id: "q0",
        questionText: "アイテム名を入力してください。",
        description: "",
        example: "",
        type: "text",
        nextMapping: "q1",
        index: 0,
        totalLength: 1
    }, {
        id: "q1",
        questionText: "シンボル名を入れてください。",
        description: "",
        example: "",
        type: "choice",
        options: SYMBOLS,
        nextMapping: "q2",
        index: 0,
        totalLength: 1
    }, {
        id: "q2",
        questionText: "何番目のアイテムかを入力してください。",
        description: "",
        example: "",
        type: "number",
        nextMapping: "q3",
        index: 0,
        totalLength: 1
    },  {
        id: "q3",
        questionText: "在庫数を入力してください。",
        description: "",
        example: "",
        type: "number",
        nextMapping: null,
        index: 0,
        totalLength: 1
    }, 
]