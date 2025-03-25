import { SYMBOLS } from "@/constants/data"

export interface QuestionProps {
    id: string,
    questionText: string,
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
        type: "text",
        nextMapping: "q1",
        index: 0,
        totalLength: 1
    }, {
        id: "q1",
        questionText: "シンボル名を入れてください。",
        type: "choice",
        options: SYMBOLS,
        nextMapping: "q2",
        index: 0,
        totalLength: 1
    }, {
        id: "q2",
        questionText: "何番目のアイテムかを入力してください。",
        type: "number",
        nextMapping: "q3",
        index: 0,
        totalLength: 1
    },  {
        id: "q3",
        questionText: "在庫数を入力してください。",
        type: "number",
        nextMapping: "q4",
        index: 0,
        totalLength: 1
    }, 
]