import styled from 'styled-components'
import Button from "./Button/Button.tsx";

const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

function FeedbackSection() {
    return (
        <section className="feedback-section">
            <h2>Обратная связь</h2>
            <FeedbackForm className="feedback-form">
                <label htmlFor={'name'}>Имя:</label>
                <input type="text" id={'name'} className={'control'} autoFocus={true} />
                <label htmlFor={'reason'}>Причина:</label>
                <select id={'reason'} className={'control'}>
                    <option value="question">Вопрос</option>
                    <option value="suggestion">Предложение</option>
                    <option value="complaint">Жалоба</option>
                </select>
                <label htmlFor={'message'}>Сообщение:</label>
                <textarea id={'message'} className="control" rows={4}></textarea>
                <Button type="submit">Отправить</Button>
            </FeedbackForm>
        </section>
    )
}

export default FeedbackSection