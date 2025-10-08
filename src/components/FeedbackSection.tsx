import styled from 'styled-components'
import Button from "./Button/Button.tsx";
import {useState} from "react";
import StateVsRef from "./StateVsRef.tsx";

const FeedbackForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5em;
    margin: 1em;
`

type FormState = {
    name?: string;
    hasError?: boolean;
    reason?: string;
}

function FeedbackSection() {
    const [form, setForm] = useState<FormState>({
        name: '',
        hasError: true,
        reason: 'question'
    });

    function handleName(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.value;

        setForm({name: name, hasError: name.trim().length < 3, reason: form.reason});
    }

    // function toggleError() {
    //     setForm((prev) => ({...prev, hasError: !prev.hasError}))
    // }

    return (
        <section className="feedback-section">
            <h2>Обратная связь</h2>
            {/*<Button onClick={toggleError}>Toggle Error</Button>*/}

            <FeedbackForm className="feedback-form">
                <label htmlFor={'name'}>Имя:</label>
                <input type="text" id={'name'}
                       className={'control'}
                       autoFocus={true}
                       value={form.name}
                       onChange={(e) => handleName(e)}
                       style={{
                           border: form.hasError ? '1px solid red' : '',
                       }}
                />
                <label htmlFor={'reason'}>Причина:</label>
                <select id={'reason'} className={'control'} value={form.reason}
                        onChange={(e) => setForm((prev) => ({ ...prev, reason: e.target.value}))}>
                    <option value="question">Вопрос</option>
                    <option value="suggestion">Предложение</option>
                    <option value="complaint">Жалоба</option>
                </select>

                <label htmlFor={'message'}>Сообщение:</label>
                <textarea id={'message'} className={'control'} rows={4}></textarea>
                <Button type='submit' disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </FeedbackForm>

            <hr/>
            <StateVsRef/>
        </section>
    )
}

export default FeedbackSection