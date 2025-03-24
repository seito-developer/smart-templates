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
        questionText: "お客様のお名前を入力してください。",
        type: "text",
        nextMapping: "q1",
        index: 0,
        totalLength: 2
    }, {
        id: "q1",
        questionText: "受講生様IDを入力してください。",
        type: "text",
        nextMapping: null,
        index: 1,
        totalLength: 2
    },
]