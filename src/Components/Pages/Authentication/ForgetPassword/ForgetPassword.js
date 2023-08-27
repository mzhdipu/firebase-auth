import React, { useContext } from 'react';
import { AuthContext } from '../../../../Root/Context/AuthProvider';

const ForgetPassword = () => {
    const {resetPassword} = useContext(AuthContext)

    const handleResetPassword = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        try {
          resetPassword(email)
            .then(result => {
              /*
              */
            })
            .catch(error => {
              // Handle error here
              console.error(error);
            });
        } catch (error) {
          // Handle synchronous error here
          console.error(error);
        }
      };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Forget Password!
                </h2>
            </div>

            <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                <div className="overflow-hidden bg-white rounded-md shadow-md">
                    <div className="px-4 py-6 sm:px-8 sm:py-7">
                    <form action="#" method="POST" onSubmit={handleResetPassword}>
                        <div className="space-y-5">
                            {/* YOUR FULL NAME  */}
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
                                <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                >
                                Send
                                </button>
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

export default ForgetPassword;