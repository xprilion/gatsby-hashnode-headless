import React from 'react'
import '../styles/signup-form.css'

export const SignupForm = () => {
    const handleSubmit = () => {
        window.open(
            'https://newsletter.xprilion.com/subscription/form',
            'popupwindow',
            'scrollbars=yes,width=800,height=600'
        )
        return true
    }

    return (
        <form
            action={'https://newsletter.xprilion.com/subscription/form'}
            method="post"
            target="popupwindow"
            onSubmit={handleSubmit}
            className="SignupForm"
        >
            <h3>Subscribe to my newsletter</h3>
            <i>I often write about my experiences, sometimes tech, sometimes life</i>
            <br />
            <div className="flex flex-col md:flex-row overflow-hidden">
                <input
                    className={"mb-2 md:m-0"}
                    aria-label="Email address"
                    placeholder="john@example.com"
                    name="email"
                    type="email"
                    required
                    id="tlemail"
                />
                <input
                    className={"mb-2 md:ml-2 md:mb-0 md:mr-2"}
                    aria-label="Your name"
                    placeholder="John Doe"
                    name="name"
                    type="text"
                    required
                    id="tlname"
                />
                <input
                    id="l-uuid"
                    type="hidden"
                    name="l"
                    value="uuid"
                />
                <button type="submit">Subscribe</button>
            </div>
        </form>
    )
}