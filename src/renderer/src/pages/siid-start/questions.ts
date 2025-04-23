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
        totalLength: 3
    }, {
        id: "q1",
        questionText: "受講生様IDを入力してください。",
        type: "text",
        nextMapping: "q2",
        index: 1,
        totalLength: 3
    },{
        id: "q2",
        questionText: "早期割引は適応しますか？",
        type: "choice",
        options: [
            "有", "無"
        ],
        nextMapping: {
            "有": null,
            "無": null
        },
        index: 2,
        totalLength: 3
    },
]