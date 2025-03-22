interface QuestionProps {
    id: string,
    questionText: string,
    type: string,
    options?: string[],
    nextMapping: any
}

const init: QuestionProps[] = [
    {
        id: "q0",
        questionText: "お客様のお名前を入力してください。",
        type: "text",
        nextMapping: "q2"
    }, {
        id: "q1",
        questionText: "面談の実施時期はいつですか？",
        type: "choice",
        options: [
            "今日", "昨日", "一昨日以前"
        ],
        nextMapping: "q2"
    },{
        id: "q2",
        questionText: "商談時にお客様からどう返答いただいたかのステータスを選択してください。",
        type: "choice",
        options: [
            "承諾", "検討", "お断り", "その他"
        ],
        nextMapping: {
            "承諾": "q3_accepted", 
            "検討": "q3_considering", 
            "お断り": "q3_denied",
            "その他": "q3_other"
        }
    },{
        id: "q3_accepted",
        questionText: "コースを選択してください。",
        type: "choice",
        options: [
            "Basic", "Career(通常)", "Career + Full Support", "Carer"
        ],
        nextMapping: "q4_accepted"
    },{
        id: "q3_considering",
        questionText: "次回の面談日を入力してください。",
        type: "text",
        nextMapping: "q4_considering"
    },{
        id: "q3_denied",
        questionText: "戦略シートのURLを記入してください",
        type: "text",
        nextMapping: null
    },{
        id: "q3_other",
        questionText: "戦略シートのURLを記入してください",
        type: "text",
        nextMapping: null
    },{
        id: "q4_accepted",
        questionText: "受講開始日を入力してください。",
        type: "text",
        nextMapping: "q5_accepted"
    },{
        id: "q4_considering",
        questionText: "戦略シートのURLを記入してください",
        type: "text",
        nextMapping: null
    },{
        id: "q5_accepted",
        questionText: "リスキル給付金の使用の有無を選択してください。",
        type: "choice",
        options: [
            "有", "無"
        ],
        nextMapping: null
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