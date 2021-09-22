import React, { ReactElement } from "react";
import { renderToString } from 'react-dom/server';

interface AnswerProps {
    answer: string;
    color: string;
    backgroundColor?: string
}

export const answer_class: string = "smash_the_edu_answerfield";

export class AnswerField extends React.Component<AnswerProps> {
    render() {
        let _backgroundColor = this.props.backgroundColor;
        if (_backgroundColor == null) _backgroundColor = "transparent";

        return (
            <p className={answer_class}
                style={{
                    color: this.props.color,
                    backgroundColor: _backgroundColor,
                    fontWeight: "bold"
                }}>
                {this.props.answer}
            </p>
        );
    }
}

export function renderComponentToString(component: ReactElement): string {
    return renderToString(component);
}
