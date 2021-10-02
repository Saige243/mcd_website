import React from 'react'
import Navbar from '../Components/Navbar'
import Layout from '../Components/Layout'

export default function contact() {
    return (
        <div>
            <Layout>
                <h1 className="chat">Let's Chat!</h1>
                <div className="formcontainer">
                    <form className="form" method="post" action="https://getform.io/f/b8dba008-25b5-4bdc-9295-0f3d6b0f0ab4">
                        <label>
                            Name
                            <input type="text" name="name" id="name" />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" id="email" />
                        </label>
                        <label>
                            Subject
                            <input type="text" name="subject" id="subject" />
                        </label>
                        <label>
                            Message
                            <textarea name="message" id="message" rows="5" />
                        </label>
                        <button id="send" type="submit">Send</button>
                        <input id="clear" type="reset" value="Clear" />
                        </form>
                    </div>
            </Layout>
        </div>
    )
}
