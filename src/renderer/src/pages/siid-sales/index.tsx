import { AnswerField } from '@/components/AnswerField';
import { CatSidebar } from '@/components/CatSidebar'
import TextContentArea from '@/components/MailTexts';
import { SidebarProvider } from '@/components/ui/sidebar'
import { templateDenied } from '@/data/answers/siidSales';
import { cats } from '@/data/cats'
import { inits } from '@/data/questions/siidSales';
import { useState } from 'react';

const getQuestionById = (questions, id) => {
  return questions.find(q => q.id === id);
};

export default function SiidSales() {
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>("q0");
  const [answers, setAnswers] = useState({});
  const currentQuestion = getQuestionById(inits, currentQuestionId);

  const handleNext = () => {
    if (!currentQuestion) return;

    // 既にanswersに保存済みでない場合、ここでバリデーションしてもOK
    // (今回はラジオボタンならcheckedがあるか、テキストなら入力値があるか等)

    let nextId = null;
    if (currentQuestion.type === "choice") {
      const selectedValue = answers[currentQuestion.id];
      if (!selectedValue) {
        alert("回答を選択してください。");
        return;
      }
      // 選択した回答に対応する次のIDを取得
      nextId = currentQuestion.nextMapping[selectedValue];
    } else if (currentQuestion.type === "text") {
      // 入力値をanswersに入れている前提
      nextId = currentQuestion.nextMapping;
    }

    // 次の質問が存在しなければ「アンケート終了画面」へ
    if (!nextId) {
      setCurrentQuestionId(null);
    } else {
      setCurrentQuestionId(nextId);
    }
  };

  if (!currentQuestionId) {
    if(answers["q2"] === "お断り"){
      return (
        <TextContentArea textContent={templateDenied({  
            name: answers["q0"],
            url: answers["q3_denied"],
            time: answers["q1"],
          })}
        />
      )
    }
    return (
      <div style={{ margin: 20 }}>
        <h2>アンケートが終了しました。ご協力ありがとうございました！</h2>
        <p>以下は入力された回答(デバッグ用)</p>
        <pre>{JSON.stringify(answers, null, 2)}</pre>
      </div>
    );
  }

  // 選択肢のクリック・テキスト入力の変更を拾うためのハンドラ
  const handleAnswer = (questionId, value) => {
    // 既存のanswersをコピーして変更
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  return (
  <SidebarProvider>
    <CatSidebar cats={cats} />
    <main className="flex min-h-screen justify-center p-4">
        <h1>初回お礼メール</h1>
        <br />

        <AnswerField question={currentQuestion} answers={answers} handleAnswerChange={handleAnswer} />

        <button onClick={handleNext} style={{ marginTop: 20 }}>次へ</button>
    </main>
    </SidebarProvider>
  )
}
