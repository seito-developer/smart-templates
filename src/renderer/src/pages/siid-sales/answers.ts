export const templateDenied = ({
  name,
  time
}: {
  name: string
  time: string
}) => {
  const texts = [
    `${name}様`,
    ``,      
    `お世話になっております。SiiD運営チームです。`,
    `${time}は個別説明会へのご参加ありがとうございました!`,
    `今回は残念でしたが、またの機会にご参加いただければ幸いです。`,
    ``,
    `何卒よろしくお願い致します。`
  ].join('\n')
  return texts
}

export const templateConsidered = ({
  name,
  time,
  discount_limitation,
}: {
  name: string
  time: string
  discount_limitation: string
  isReskill: string // "有" or "無"
}) => {

  const texts = [
    `${name}さま`,
    ``,
    `お世話になっております。SiiD運営チームです。`,
    `${time}はSiiD個別説明会にお越しいただきありがとうございました！`,
    `${discount_limitation}までのお申し込みで早期お申し込み限定特典をつけさせていただきます。`,
    ``,
    `一度ご検討くださいませ！`,
    ``,
    `========================`,
    `▶ お申し込みについて`,
    `受講をご希望の場合は、このメールに下記1~3を返信ください。`,
    `その後、お申し込み書とご入金先についてご案内いたします。`,
    `1.受講希望日（毎月1日 or 15日でご案内させていただいております）`,
    `2.プラン： ＜Basic＞ or ＜Careerコース　通常／Full Support／VIP＞`,
    `3.リスキル給付金の使用の有無`,
    ``,
    `▶本日の資料`,
    `https://docs.google.com/presentation/d/18jGkUX4S488jV0WFsyJL0qIJ3gWowBOzD-WB3NhWrvw/edit?usp=sharing`,
    `==================`,
    ``,
    `もしご不明な点などございましたらこちらのメールにお気軽に聞いていただけたらと思います。`,
    `何卒よろしくお願い致します。`
  ].join('\n')

  return texts
}
