import { itemGroupQuestions } from "./itemGroup";
import { itemItemTypeQuestion } from "./itemItemType";

export interface QuestionProps {
    id: string,
    questionText: string,
    description?: string,
    example?: string,
    type: string,
    options?: string[],
    nextMapping: any,
    index: number,
    totalLength: number
}

export const allQuestions = [...itemGroupQuestions, ...itemItemTypeQuestion]