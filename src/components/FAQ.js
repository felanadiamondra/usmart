import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase";

const Faq = () => {

    const [faqs, setFaqs] = useState("");

    const addFaq = async () => {

        console.log('Hello there!');

        const col = collection(db, "faqs");

        const newFaqs = await addDoc(col, {
            faqs: faqs
        });

        console.log(newFaqs.id);
    }

    return(
        <div>
            <input value={faqs} onChange={(e) => setFaqs(e.target.value)} type="text" placeholder="Test à ajouter"/>
            <button onClick={addFaq}>Ajouter</button>
        </div>
    );
}

export default Faq;