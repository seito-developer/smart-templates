import { AnswerField } from '@/components/AnswerField';
import { CatSidebar } from '@/components/CatSidebar'
import Headline from '@/components/Headline';
import TextContentArea from '@/components/MailTexts';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar'
import { templateDenied } from '@/data/answers/siidSales';
import { cats } from '@/data/cats'
import { inits } from '@/data/questions/siidSales';
import { useKeyContol } from '@/hooks/useKeyContol';
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
    let nextId = null;
    if (currentQuestion.type === "choice") {
      const selectedValue = answers[currentQuestion.id];
      nextId = currentQuestion.nextMapping[selectedValue];
    } else if (currentQuestion.type === "text") {
      nextId = currentQuestion.nextMapping;
    }
    if (!nextId) {
      setCurrentQuestionId(null);
    } else {
      setCurrentQuestionId(nextId);
    }
  };

  useKeyContol({
    rightEvent: handleNext,
    leftEvent: () => {
      console.log('← (ArrowLeft) が押されました');
    },
  });

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
    <main className="p-4">
      <Headline>初回お礼メール</Headline>

      <div className='my-5'>
        <AnswerField question={currentQuestion} answers={answers} handleAnswerChange={handleAnswer} />
      </div>

      <Button variant="outline" onClick={handleNext}>次へ</Button>
    </main>
    </SidebarProvider>
  )
}
