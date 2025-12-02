import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && ((Date.now() - planets.time) < period_month)) {
            return planets.payload;
        } else {
            return ['wait...']
        }
    });

    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${base_url}/v1/planets`);
            const data = await res.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);
            localStorage.setItem('planets', JSON.stringify({
                payload: planets,
                time: Date.now()
            }));
        }

        if (planets.length === 1){
            getPlanets().then(() => console.log('Planets were loaded'));
        }
    }, [])

    return (
        <form className={`w-4/5 my-0 mx-auto rounded-[5px] bg-[#f2f2f2] p-5`} onSubmit={(e) => {
            e.preventDefault();
        }}>
            <label className={`w-full text-red`}>First Name
                <input className={`text-black border w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                       type="text"
                       name="firstname" placeholder="Your first name..."/>
            </label>
            <label className={`w-full text-red`}>Last Name
                <input className={`text-black border w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                       type="text"
                       name="lastname" placeholder="Your last name..."/>
            </label>
            <label className={`w-full text-red`}>Planet
                <select className={`border w-full text-black p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                        name="planet">{
                    planets.map(item => <option value={item} key={item}>{item}</option>)
                }
                </select>
            </label>
            <label className={`w-full text-red`}>Subject
                <textarea
                    className={`text-black border h-52 w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                    name="subject" placeholder="Write something..."/>
            </label>
            <button
                className={`bg-[#4CAF50] text-white py-3 px-5 border-none rounded-[4px] cursor-pointer hover:bg-[#45a049]`}
                type="submit">Submit
            </button>
        </form>
    )
}

export default Contact;