import { useState } from "react";
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    };
    const signInWithGoogle = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    };

    return (
        <div>
            <input placeholder="Type your Email"
                onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}
