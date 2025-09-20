import './Button.css'

export default function Button({children, onClick, isActive = false}: { children: React.ReactNode, onClick: () => void, isActive: boolean }) {
    return (
        <button className={`button ${isActive}`} onClick={onClick}>{children}</button>
    )
}