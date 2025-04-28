export interface AnswersProps {
  [key: string]: string
}

export interface QuestionProps {
    id: string,
    questionText: string,
    type: string,
    options?: string[],
    nextMapping: any,
    index: number,
    totalLength: number
}

export type Tuition = {
  cash: number;
  credit_card: number;
  payment_url: string;
};

export type CourseData = {
  career: {
    name: string;
    tuition: {
      default: Tuition;
      discount: Tuition;
    };
  };
  careerFullSupport: {
    name: string;
    tuition: {
      default: Tuition;
      discount: Tuition;
    };
  };
  careerVip: {
    name: string;
    tuition: {
      default: Tuition;
      discount: Tuition;
    };
  };
  basic: {
    name: string;
    tuition: {
      default: Tuition;
      discount: Tuition;
    };
  };
};
