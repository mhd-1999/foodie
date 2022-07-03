import clsx from "clsx";
import styles from "./Contact.module.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import { Select } from "@mui/material";
const items = [{
    id: 1,
    place: "First Name*"
},
{
    id: 2,
    place: "Last Name*"
},
{
    id: 3,
    place: "E-mail Address"
},
{
    id: 4,
    place: "Phone Number"
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
    const [selectedDate, setSelectedDate] = useState(null)
    const [selected, setSelected] = useState()
    return <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.group)}>
            <div className={clsx(styles.groupInput)}>
                <div className={clsx(styles.title)}>
                    <h1>Our Team</h1>
                    <div className={clsx(styles.titleS)}>
                        <span>is the best</span>
                    </div>
                </div>
                <div className={clsx(styles.input, 'd-flex')}>
                    {items.map(item => (
                        <div className={clsx(styles.item)} key={item.id}>
                            <input type="text" placeholder={item.place} />
                        </div>
                    ))}
                    <div className={clsx(styles.item)}>
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat='yyyy/MM/dd'
                            minDate={new Date()}
                            placeholderText="Date*"
                        />
                    </div>
                    <div className={clsx(styles.item)}>
                        <select name="" id="" placeholder="Time*">
                            {optionList.map(option => (
                                <option key={option.value} value={option.value}>{option.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Contact;