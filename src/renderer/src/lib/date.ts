export const add365Days = (dateStr:string):string => {
    // "yyyy-mm-dd" の文字列をパースするとき、タイムゾーン問題を避けるため "T00:00:00" を足すことが多い
    const date = new Date(`${dateStr}T00:00:00`);
  
    // 365日を足す
    date.setDate(date.getDate() + 365);
  
    // ゼロ埋めのヘルパー関数
    const pad = (num) => String(num).padStart(2, '0');
  
    // 年・月・日を取り出して "yyyy-mm-dd" に整形
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
  
    return `${y}-${m}-${d}`;
  }
  