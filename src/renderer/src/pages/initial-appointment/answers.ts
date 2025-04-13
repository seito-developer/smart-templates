export const templateDenied = ({
  name,
  sheet_url,
  time
}: {
  name: string
  sheet_url: string
  time: string
}) => {
  const texts = [
    `${name}様`,
    ``,      
    `お世話になっております。SiiD運営チームです。`,
    `${time}は個別コンサルへのご参加おつかれさまでした!`,
    ``,
    `${time}のシートはこちらよりアクセス＆ダウンロード可能です。`,
    `${sheet_url}`,
    ``,
    `よろしければXなどでハッシュタグ「#siid」と共に感想を投稿いただけたら嬉しいです！`,
    `何卒よろしくお願い致します。`
  ].join('\n')
  return texts
}

  export const templateContinue = ({
    name,
    sheet_url,
    time,
    date, 
    presenter
  }: {
    name: string
    sheet_url: string
    time: string,
    date: string,
    presenter: string
  }) => {
    const texts = [
      `${name}様`,
      ``,
      `お世話になっております。SiiD運営チームです。`,
      `${time}は個別コンサルへのご参加おつかれさまでした!`,
      ``,
      `${time}のシートはこちらよりアクセス＆ダウンロード可能です。`,
      `${sheet_url}`,
      ``,
      `また次回のSiiD個別説明会を下記で行います。`,
      `楽しみにしていてください！`,
      ``,
      `日時：${date}`,
      `URL：https://us06web.zoom.us/j/9058397792`,
      `担当：${presenter}`,
      ``,
      `何卒よろしくお願い致します。`
    ].join('\n')
    return texts
  }
