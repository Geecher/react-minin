function FeedbackSection() {
    return (
        <section className="feedback-section">
            <h2>Feedback</h2>
            <form className="feedback-form">
                <label htmlFor="feedback">Your Feedback:</label>
                <textarea id="feedback" name="feedback" rows={4} cols={50} placeholder="Enter your feedback here..."></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default FeedbackSection