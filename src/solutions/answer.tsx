import React, { ReactElement } from "react";
import { renderToString } from 'react-dom/server';

interface AnswerProps {
    answer: string;
    color: string;
}

export class AnswerField extends React.Component<AnswerProps> {
    render() {
        return (
            <p style={{
                color: this.props.color,
                fontWeight: "bold"
            }}>
                {this.props.answer}
            </p>
        );
    }
}

export function renderComponentToString(component: ReactElement): string{
    return renderToString(component);
}
