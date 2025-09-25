import Button from "./Button/Button.tsx";

export type TabType = 'main' | 'feedback'

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
        </section>
    )
}

export default TabSection