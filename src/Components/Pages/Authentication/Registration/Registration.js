import React, { useContext } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Root/Context/AuthProvider";

const Registration = () => {
  const { createUser, signInWithGoogle, updateUserProfile, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const registrationData = { name, email, password, confirmPassword };
    console.log(registrationData);

    try {
      createUser(email, password)
        .then((result) => {
          const user = result.user;

          if(!user.emailVerified){
            verifyEmail().then((result) => {
              alert('verify your email and login to your accunt')
              navigate('/login')
            }).catch((error) => {
              // Handle error here
              console.error(error);
            });

          }
          
          
          // if (user.uid) {
          //   updateUserProfile(name).then((result) => {
          //     form.reset()
          //   });
          // }

        })
        .catch((error) => {
          const errorMessage = error.message;
        });

    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  // GOOGLE REGISTRATION
 //  ====================================================
 const handleGoogle = () => {
  try {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      
      .catch(error => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Create an Account
          </h2>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  {/* YOUR FULL NAME  */}
                  <div>
                    <label
                      htmlFor="f-name"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="text"
                        name="fullName"
                        id="f-name"
                        placeholder="Enter your Full Name"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="email"
                        name="email"
                        id="emailAddress"
                        placeholder="Enter email Address"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="text-base font-medium text-gray-900"
                    >
                      Confirm Password{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Enter Your Password Again"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Log in
                    </button>
                  </div>

                  <button onClick={handleGoogle} className="bg-black text-white p-2 w-full">Loign with Google</button>

                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        title=""
                        className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                      >
                        Please Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
