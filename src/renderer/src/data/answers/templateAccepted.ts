import { courseData } from "@/constants/courseData";
import { add365Days } from "@/lib/date";
import { convertFee } from "@/lib/utils";

const templateAccepted = (
    {
        name,
        time,
        sheet_url,
        course,
        start_date,
        isReskill
      }: {
        name: string,
        time: string,
        sheet_url: string,
        course: string, // "career" or "careerFullSupport" or "careerVIP" or "basic"
        start_date: string,
        isReskill: string // "有" or "無"
    }
) => {
    // 戦略シートの有無
    const sheet = sheet_url ? [
        ``,
        `${time}のシートのURLはこちらよりアクセス＆ダウンロード可能です。`,
        `${sheet_url}`].join('\n') : ``;

    // お申込み方法
    const how_to_apply = (course) => {
        const applying_texts = [
            ``,
            `▶2.お申し込みのプラン・費用・支払い形式に関しまして`,
            `プラン：${courseData[course].name}`,
            `A. お支払い方法と費用＜銀行振込ご一括の場合＞`,
            `${convertFee(courseData[course].tuition.discount.cash)}を下記の弊社口座にお振込み下さいませ。`,
            `※早期お申し込み割引5%適応済み価格となります。`,
            ``,
            `銀行名　　：楽天銀行`,
            `支店名　　：第四営業支店`,
            `支店番号　：254`,
            `科目　　　：普通`,
            `口座番号　：7130068`,
            `口座名　　：合同会社BugFix`,
            ``,
            `B. お支払い方法と費用＜クレジットカード払いの場合＞`,
            `※クレジットカードでの分割払いの場合手数料が+5%発生いたしますが、早期申し込みの5%割引と相殺させていただきます。`,
            `${convertFee(courseData[course].tuition.discount.credit_card)} を下記URLから決済をお願いいたします。分割回数に関しては任意の回数をご指定ください。`,
            ``,
            `${courseData[course].tuition.discount.payment_url}`,
        ].join('\n');
        return applying_texts
    }

    // リスキル給付金の有無
    const reskill = (isReskill === "有") ? [
        ``,
        `▶※リスキル講座給付金ご利用の場合`,
        `申請＆相談はお近くのハローワークの窓口でご受講開始日前に行う必要がございます。`,
        `下記資料を参考にくださいませ。`,
        ``,
        `動画説明）https://drive.google.com/file/d/16xHw7Mn3C10Fi_AfEo95Yyql-XNXR7FY/view?usp=drive_link`,
        `資料）https://drive.google.com/file/d/1HS8WXcpo2k66GVWMp8q9wsCDhOT2XlWM/view?usp=drive_link`,
        `窓口でお申し込みされる際は弊社の講座指定番号「1312047-2420011-0」をお伝えくださいませ。`].join('\n') : ``;
  
    const texts = [
    `${name}さま`,
    ``,
    `お世話になっております。SiiD運営チームです。`,
    `${time}は個別コンサルへのご参加おつかれさまでした！`,
    sheet,
    ``,
    `またSiiDへのお申し込みを決めていただき誠にありがとうございます！`,
    `ご受講の手続きをさせていただきますので、下記の内容でご案内させていただきます。`,
    ``,
    `==================`,
    `▶1.お申込み書`,
    `Docusignという電子署名サービス上で実施させていただきたく思います。`,
    `先ほど「SiiDお申込書・契約書 by Docusign」というタイトルでメールを送信させていただきました。`,
    `そちらにお名前・ご住所・ご署名をし、返送くださいませ。（お名前は漢字フルネームでお願いいたします）`,
    `もし操作方法についてご不明な点があればご質問ください。`,
    `${how_to_apply(course)}`,
    ``,
    `▶3.ご受講期間について`,
    `基本的には毎月1日 or 15日での開始とさせていただいておりますので、一旦仮で＜${start_date}〜${add365Days(start_date)}＞とさせていただきました。`,
    `ご要望があれば変更も可能ですのでご相談下さい。`,
    `${reskill}`,
    `==================`,
    ``,
    `1,2を完了いただければお申し込み完了＆教材の手配などに移らせていただきますので、ご対応いただけたらご一報くださいませ！`,
    `何卒よろしくお願いいたします。`
  ].join('\n')

  return texts
}
export { templateAccepted }
