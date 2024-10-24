
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, firedB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate
    const navigate = useNavigate();

    // User Signup State
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });

    /**========================================================================
     *                          User Signup Function
     *========================================================================**/

    const userSignupFunction = async () => {
        // validation
        if (
            userSignup.name === "" ||
            userSignup.email === "" ||
            userSignup.password === ""
        ) {
            toast.error("Todos los campos son obligatorios");
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(
                auth,
                userSignup.email,
                userSignup.password,
            );

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }),
            };

            // create user Refrence
            const userRefrence = collection(firedB, "user");

            // Add User Detail
            addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: "",
            });

            toast.success("Registro exitoso");

            setLoading(false);
            navigate("/login");
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <div className="flex justify-center items-center h-screen">
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-red-50 px-8 py-6 border border-red-100 rounded-xl shadow-md">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-red-500 ">
                        Crear Cuenta
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Nombre Completo"
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value,
                            });
                        }}
                        className="bg-red-50 border border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-red-200"
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value,
                            });
                        }}
                        className="bg-red-50 border border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-red-200"
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value,
                            });
                        }}
                        className="bg-red-50 border border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-red-200"
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type="button"
                        onClick={userSignupFunction}
                        className="bg-red-500 hover:bg-red-600 w-full text-white text-center py-2 font-bold rounded-md "
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className="text-black">
                        Tienes una cuenta{" "}
                        <Link
                            className=" text-red-500 font-bold"
                            to={"/login"}
                        >
                            Iniciar Sesión
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Signup;
