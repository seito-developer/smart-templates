export interface QuestionProps {
    id: string,
    questionText: string,
    type: string,
    options?: string[],
    nextMapping: any,
    index: number,
    totalLength: number
}

export const title = {
    accepted: 'SiiDご受講のご案内に関しまして',
    continued: `次回のSiiD個別説明会に関しまして`,
    others: `セイト先生の個別コンサルご参加・おつかれさまでした`
}

export const inits: QuestionProps[] = [
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

// <Name>さま

// お世話になっております。SiiD運営チームです。
// 本日はSiiD個別説明会にお越しいただきありがとうございました！
// ＜XX日中＞のお申し込みで本日限定特典をつけさせていただきます。

// 一度ご検討くださいませ！

// ========================
// ▶ お申し込みについて
// 受講をご希望の場合は、このメールに下記1~3を返信ください。
// その後、お申し込み書とご入金先についてご案内いたします。
// 1.受講希望日（毎月1日 or 15日でご案内させていただいております）
// 2.プラン： ＜Basic＞ or ＜Careerコース　通常／Full Support／VIP＞
// 3.ご入金方法：銀行振込ご一括／クレジット一括 or 分割払い
// ※クレジットカード払いの場合は手数料 5%を上乗せさせていただいております。早期割引5%が適応されればこれは相殺できます。

// ▶本日の資料
// https://docs.google.com/presentation/d/18jGkUX4S488jV0WFsyJL0qIJ3gWowBOzD-WB3NhWrvw/edit?usp=sharing

// ▶※リスキル講座給付金ご利用の場合
// リスキル給付金の申請方法については下記資料でもご説明させていただいております。
// 動画説明）https://drive.google.com/file/d/16xHw7Mn3C10Fi_AfEo95Yyql-XNXR7FY/view?usp=drive_link
// 資料）https://drive.google.com/file/d/1HS8WXcpo2k66GVWMp8q9wsCDhOT2XlWM/view?usp=drive_link
// ==================

// もしご不明な点などございましたらこちらのメールにお気軽に聞いていただけたらと思います。
// 何卒よろしくお願い致します。