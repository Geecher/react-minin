import Button from "./Button/Button.tsx";

function TabSection({active, onChange}: { active: string, onChange: (tab: string) => void }) {
    return (
        <section>
            <Button
                isActive={active == 'main'}
                onClick={() => onChange('main')}>
                Главная
            </Button>
            <Button
                isActive={active == 'feedback'}
                onClick={() => onChange('feedback')}>
                Обратная связь
            </Button>
        </section>
    )
}

export default TabSection