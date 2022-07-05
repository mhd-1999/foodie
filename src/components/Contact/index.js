import clsx from "clsx";
import styles from "./Contact.module.css";
import { useState } from "react";
import FormInput from "../FormInput";
const items = [{
    id: 1,
    placeholder: "First Name*",
    name: "firstname",
    type: "text",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
},
{
    id: 2,
    placeholder: "Last Name*",
    name: "lastname",
    type: "text",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
},
{
    id: 3,
    placeholder: "E-mail Address*",
    name: "email",
    type: "email",
    required: true,
},
{
    id: 4,
    placeholder: "Phone Number*",
    name: "phone",
    type: "text",
    pattern: "^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$",
    required: true,
},
{
    id: 5,
    placeholder: "Date*",
    name: "date",
    type: "date",
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
    required: true,
}]

const optionList = [
    {
        value: "09:00",
    },
    {
        value: "09:30",
    },
    {
        value: "10:00",
    },
    {
        value: "10:30",
    },
    {
        value: "11:00",
    },
    {
        value: "11:30",
    },
    {
        value: "12:00",
    },
    {
        value: "12:30",
    },
    {
        value: "13:00",
    },
    {
        value: "13:30",
    },
    {
        value: "14:00",
    },
    {
        value: "14:30",
    },
    {
        value: "15:00",
    },
    {
        value: "15:30",
    },
    {
        value: "16:00",
    },
    {
        value: "16:30",
    },
    {
        value: "17:00",
    },
    {
        value: "17:30",
    },
    {
        value: "18:00",
    },
    {
        value: "18:30",
    },
    {
        value: "19:00",
    },
    {
        value: "19:30",
    },
    {
        value: "20:00",
    },
    {
        value: "20:30",
    },

]
function Contact() {
    // const [selectedDate, setSelectedDate] = useState(null)
    // const [firstName, setFirstName] = useState("")
    // const [secondName, setSecondName] = useState("")
    // const [phoneNumber, setPhoneNumber] = useState("")
    // const [email, setEmail] = useState("")
    // const [selected, setSelected] = useState()
    // const [message, setMessage] = useState("")
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        date: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return <div className={clsx(styles.wrapper)} id="Reservation">
        <div className={clsx(styles.group)}>
            <div className={clsx(styles.groupInput)}>
                <div className={clsx(styles.title)}>
                    <h1>Select a Date & Book Now</h1>
                    <div className={clsx(styles.titleS)}>
                        <span>Let's check</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}  >
                    <div className={clsx(styles.input, 'd-flex')}>
                        {items.map(item => (
                            <FormInput
                                key={item.id}
                                {...item}
                                value={values[item.name]}
                                className={clsx(styles.item)}
                                onChange={onChange}

                            />
                        ))}

                        <div className={clsx(styles.item)}>
                            <select name="" id="" placeholder="Time*" required>
                                {optionList.map(option => (
                                    <option key={option.value} value={option.value}>{option.value}</option>
                                ))}
                            </select>
                        </div>
                        <button>book now</button>
                    </div>
                </form>
            </div>
        </div >
    </div >;
}

export default Contact;