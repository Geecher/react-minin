import {ways} from "../data.ts";
import WayToTeach from "./WayToTeach.tsx";

function TeachingSection() {
    return (
        <section>
            <h1>Обучение в Result University!</h1>
            <ul>
                {
                    ways.map((way, index) => (
                        <WayToTeach key={index} {...way}/>
                    ))
                }
            </ul>
        </section>
    )
}

export default TeachingSection