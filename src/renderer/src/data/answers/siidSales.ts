export const templateDenied = ({
  name,
  url,
  time
}: {
  name: string
  url: string
  time: string
}) => {
  const texts = [
    `${name}様`,
    `お世話になっております。SiiD運営チームです。`,
    `${time}は個別コンサルへのご参加おつかれさまでした!`,
    ``,
    `${time}のシートはこちらよりアクセス＆ダウンロード可能です。`,
    `${url}`,
    ``,
    `何卒よろしくお願い致します。`
  ].join('\n')
  return texts
}

export const templateCOnsidering = (
  name: string,
  url: string,
  time: string,
  date: string
) => `${name}様\n
\n
お世話になっております。SiiD運営チームです。\n
${time}は個別コンサルへのご参加おつかれさまでした！\n
\n
${time}のシートはこちらよりアクセス＆ダウンロード可能です。\n
${url}\n
\n
また次回のSiiD個別説明会を下記で行います。\n
楽しみにしていてください！\n
\n
日時：${date}\n
URL：https://us06web.zoom.us/j/85051956583 \n
\n
何卒よろしくお願い致します。`
