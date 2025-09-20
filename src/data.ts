export const ways: { title: string, description: string }[] = [
    {title: 'React ', description: 'Изучайте современную библиотеку для создания пользовательских интерфейсов.'},
    {title: 'TypeScript ', description: 'Добавьте строгую типизацию в ваш JavaScript-код.'},
    {title: 'Git ', description: 'Управляйте версиями вашего проекта и работайте в команде.'},
    {title: 'CSS ', description: 'Стилизуйте ваши приложения и делайте их красивыми.'},
];

// TODO Replace Enum to type file
export enum ReasonKey {
    way = 'way',
    easy = 'easy',
    program = 'program',
}

export const reasons: { [key: string]: string } = {
    way: 'Наш подход к обучению основан на практических заданиях и реальных проектах, что позволяет быстро применять полученные знания.',
    easy: 'Мы делаем обучение доступным для всех, предлагая гибкие графики и разнообразные форматы обучения.',
    program: 'Наша программа обучения сфокусирована на ключевых навыках, которые востребованы на рынке труда, чтобы вы могли быстро найти работу в IT-сфере.',
};