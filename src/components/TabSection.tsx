import Button from "./Button/Button.tsx";

export type TabType = 'main' | 'feedback' | 'effect';

type TabSectionProps = {
    active: TabType,
    onChange: (tab: TabType) => void
}

function TabSection({active, onChange}: TabSectionProps) {
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
            <Button
                isActive={active == 'effect'}
                onClick={() => onChange('effect')}>
                Эффекты
            </Button>
        </section>
    )
}

export default TabSection