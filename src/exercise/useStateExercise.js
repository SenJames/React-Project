import React, {useState} from 'react';
import {celebrants} from './data';
import '../exerciseCss/useState.css'

const BirthdayReminder = () => {
    const [person, setPerson] = useState(celebrants)
    let total = person.length;
    const updateOne = (id) => {
        let newPeople = person.filter((indv) => indv.id !== id)
        total = newPeople.length;
        setPerson(newPeople)
    }
    return (
        <React.Fragment>
            <section>
                <h5>{total} birthday{ total > 1?'s':''} today</h5>
                <article>
        {
            person.map((celeb)=> {
                    // console.log(celeb)
                    const {pic, name, age, id} = celeb
                    return(
                            <section key={id}>
                                <div className="round">
                                    <img src={pic} className="" alt=""/>
                                </div>
                                <div>
                                    <h3>{name}</h3>
                                    <h5>{age}</h5>
                                </div>
                                <button type="button" className="btn" onClick={()=>updateOne(id)}>X</button>
                            </section>
                    )
                })
                // console.log(celebrants) 
            }
            <button type="button" className="btn" onClick={()=>setPerson([])}>Clear Items</button>
            </article>
            </section>
        </React.Fragment>
    )
}

export default BirthdayReminder
