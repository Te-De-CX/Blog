
const ContactForm = () => {

    return (
        <>
            <section>
                <div>
                    get in touch with ai podcasts
                </div>
                <div>
                    <div>
                        <label htmlFor="firstName">first name</label>
                        <input 
                            type="text"
                            name="firstName"
                            placeholder="enter first name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">last name</label>
                        <input 
                            type="text"
                            name="lastName"
                            placeholder="enter last name"
                        />
                    </div>
                    <div>
                        <label htmlFor="emailName">email name</label>
                        <input 
                            type="text"
                            name="emailName"
                            placeholder="enter email name"
                        />
                    </div>
                    <div>
                        <label htmlFor="phonenumber">phone number</label>
                        <input 
                            type="text"
                            name="phonenumber"
                            placeholder="enter phone number"
                        />
                    </div>
                    <div>
                        <p>
                            message
                        </p>
                        <textarea name="" id="">

                        </textarea>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" />
                            <p>i agree with terms of use and privacy policy</p>
                        </div>
                        <button>send</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm;