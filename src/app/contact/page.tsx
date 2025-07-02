
export default function AboutPage() {
    return (
        <div>

            <div className="form-card1">
                <div className="form-card2">
                    <form action="https://formsubmit.co/2e725f6230466d3c0b246217003191d6" method="POST" className="form">
                        <p className="form-heading">Get In Touch</p>
                        <div className="form-field">
                            <input required placeholder="Name" className="input-field" type="text"  name="name"/>
                        </div>
                        <div className="form-field">
                            <input
                                required
                                placeholder="Email"
                                className="input-field"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="form-field">
                            <input
                                required
                                placeholder="Number"
                                className="input-field"
                                type="number"
                                name="number"
                            />
                        </div>
                        <div className="form-field">
                            <textarea
                                required
                                placeholder="Message"
                                cols={30}
                                rows={3}
                                className="input-field"
                                name="subject"
                            ></textarea>
                        </div>
                        <button 
                        type={"submit"}
                        value={"Send"}
                        className="sendMessage-btn">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
}