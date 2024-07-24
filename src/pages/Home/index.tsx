export function Home() {
    return (
        <div>
            <form action="">
                <label htmlFor="task">Vou trabalhar em</label>
                <input id="task" type="text" />

                <label htmlFor="minutesAmount"></label>
                <input id="minutesAmount" type="number" />

                <span>minutos.</span>
            </form>
        </div>
    )
}