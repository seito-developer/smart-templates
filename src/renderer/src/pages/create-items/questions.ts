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
        totalLength: 7
    }, {
        id: "q1",
        questionText: "面談の実施時期はいつですか？",
        type: "choice",
        options: [
            "今日", "昨日", "一昨日以前"
        ],
        nextMapping: {
            "今日":"q2", 
            "昨日":"q2", 
            "一昨日以前":"q2"
        },
        index: 1,
        totalLength: 7
    },{
        id: "q2",
        questionText: "戦略シートのURLを記入してください",
        type: "text",
        nextMapping: "q3",
        index: 2,
        totalLength: 7
    },{
        id: "q3",
        questionText: "商談時にお客様からどう返答いただいたかのステータスを選択してください。",
        type: "choice",
        options: [
            "次回打ち合わせ", "お断り", "承諾"
        ],
        nextMapping: {
            "次回打ち合わせ": "q4_continued",
            "お断り": null,
            "承諾": "q4_accepted"
        },
        index: 3,
        totalLength: 7
    },{
        id: "q4_accepted",
        questionText: "コースを選択してください。",
        type: "choice",
        options: [
            "career", "careerFullSupport", "careerVip", "basic"
        ],
        nextMapping: {
            "career": "q5_accepted",
            "careerFullSupport": "q5_accepted",
            "careerVip": "q5_accepted",
            "basic": "q5_accepted",
        },
        index: 4,
        totalLength: 7
    },{
        id: "q4_continued",
        questionText: "次回の面談日を入力してください。",
        type: "date",
        nextMapping: null,
        index: 4,
        totalLength: 5
    }, {
        id: "q5_accepted",
        questionText: "受講開始日を入力してください。",
        type: "date",
        nextMapping: "q6_accepted",
        index: 5,
        totalLength: 7
    },{
        id: "q6_accepted",
        questionText: "リスキル給付金の使用の有無を選択してください。",
        type: "choice",
        options: [
            "有", "無"
        ],
        nextMapping: {
            "有": null,
            "無": null
        },
        index: 6,
        totalLength: 7
    },
]