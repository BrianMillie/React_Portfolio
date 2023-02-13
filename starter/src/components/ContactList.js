import { useState } from "react"
import CVDownload from "./CVDownload"

const styles = {
    longButton: {
        width: '100%',
        display: 'flex',
        marginTop: '3%',
        marginBottom: '7%',
        textAlign: 'center'
    },
    success: {
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '7%',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.856)'
    }

}

function ContactList(props) {
    const [success, setSuccess] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: '768890a2-5b57-4e66-bb0c-417cd8996993'
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value

        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const accessKey = '768890a2-5b57-4e66-bb0c-417cd8996993'
        const data = JSON.stringify(formData);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data
        }).then(res => res.json())
            .then(data => console.log(data))
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000)
            .catch(err => console.log(err))
    }

    return (
        <section>
            <h2>Contact Me: </h2>

            <h2> By Phone:  07787129699</h2>

            <h2> Ask a question!</h2>

            <form>

                <input name="name" onChange={handleChange} type="text" placeholder="Enter Your Name" />
                <input name="email" onChange={handleChange} type="text" placeholder="Your Email Address" />
                <textarea name="message" onChange={handleChange} placeholder="Enter Your Message....." cols="30" rows="10"></textarea>
                <button onClick={handleSubmit} style={styles.longButton}>Submit</button>

            </form>

            {success && <p style={styles.success}>Form Submitted Successfully</p>}

            <nav>
                <a href="https://github.com/BrianMillie" >Github Link</a>
                <a href="https://linkedin.com/in/daniel-james-shipp-958388232">My LinkedIn</a>
            </nav>

            <h2>My CV</h2>

            <CVDownload />

        </section>

    )
}

export default ContactList;