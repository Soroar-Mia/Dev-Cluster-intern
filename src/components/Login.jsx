import app from "../firebase/firebase.init";
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handelGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser);
            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <div className=" flex items-center justify-center ">
            <div className="bg-white p-8 mt-4 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                {!user ? (
                    <div>
                        <button
                            onClick={handelGoogleSignin}
                            className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-red-600">
                            Sign in with Google
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <h3 className="text-xl mb-4">Welcome, {user.displayName}</h3>
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <p className="mb-4">{user.email}</p>
                        <button
                            onClick={() => setUser(null)}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;