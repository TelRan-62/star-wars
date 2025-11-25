import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 grid grid-cols-3 gap-1.5  border rounded-b-3xl mt-2 ml-2">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {friends.map((f, i) => <Friend friend={f} key={i} pos={i + 1}/>)}
        </section>
    );
};

export default DreamTeam;