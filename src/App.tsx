import './App.css'
import Header from "./components/Header/Header.tsx";
import TeachingSection from "./components/TeachingSection.tsx";
import DifferencesSection from "./components/DifferencesSection.tsx";
import IntroSection from "./components/IntroSection.tsx";
import TabSection, {type TabType} from "./components/TabSection.tsx";
import FeedbackSection from "./components/FeedbackSection.tsx";
import {useState} from "react";

function App() {
    const [tab, setTab] = useState<TabType>('feedback')

    return (
        <>
            <Header/>
            <main className="App">
                <IntroSection/>
                <TabSection active={tab} onChange={(current) => setTab(current)}/>

                {tab === 'main' && <>
                    <TeachingSection/>
                    <DifferencesSection/>
                </>}

                {tab === 'feedback' && <>
                    <FeedbackSection/>
                </>}
            </main>
        </>
    )
}

export default App
