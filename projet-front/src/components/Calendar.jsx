import React, {useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./components.css"


function Calendrier() {
    const notify = () => toast("Merci, votre question sera traité dans les plus brefs délais !")
    const [daySelected, setDaySelected] = useState(new Date());
    const [emailQuestion, setEmailQuestion] = useState({
        email: '',
        question:'',
    })
    function onChange(e) {
        setEmailQuestion({
            ...emailQuestion,
            [e.target.name]: e.target.value,
        });
    }
    function submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(emailQuestion),
        }
        const url = "http://localhost:3500/dispo"
        fetch(url,config).then((res)=> res.json())
        .then((res)=> {
            console.log(res)
            if(res.error) {
                alert(res.error)
            } else {
                console.log("c'est ok")
            }
        })
        .catch((e) => {
            console.error(e);
            alert("c'est la merde bradley")
        })
    }
    return (
        <div className="calendarRow">
            <h3 className='dispo'>calendrier</h3>
                <div className='calendarFlex'>
                    <form className="divInput" onSubmit={submitForm}>
                        <label for="email"><span>Email :</span></label>
                        <input type="email"  name="email" onChange={onChange} placeholder="Email" value={emailQuestion.email} />
                        <label for="msg" ><span>Questions :</span></label>
                        <textarea type="text" maxLength="500" 
                                  name="question" placeholder="Posez votre question ici" onChange={onChange} value={emailQuestion.question} />
                        <input type="submit" className="question" value="Submit" onClick={notify}/>
                        <ToastContainer
                            position="top-center"
                            autoClose={6000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            />
                            
                    </form>
                <div className="divCalendrier">
                    <Calendar
                        onChange={setDaySelected}
                        value={daySelected}
                        tileDisabled={({activeStartDate, date, view }) => {
                            const invalidDates = [
                                new Date('2020-12-25').toDateString(),
                                new Date('2021-07-23').toDateString(),
                            ];
                            return invalidDates.find((invalidDate) => invalidDate === date.toDateString()) != null;
                        }}
                    />
                </div>
                </div>
        </div>
    )
}

export default Calendrier;
