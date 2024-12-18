import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { InputBox } from "../../components";
import { signInSchema } from "../../utils/Schema";
import { useNavigate } from "react-router-dom";
import PATHS from "../../routes/path";
import Logo from "../../assets/images/jobyzlogo.png";
import Swal from "sweetalert2";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = async (values) => {
    console.log("🚀 ~ handleSignIn ~ values:", values)
    const { email, password } = values;

    // Check hardcoded credentials
    if (email !== "admin@gmail.com" || password !== "Admin@123") {
      Swal.fire({
        title: "Error",
        text: "Invalid email or password",
        icon: "error",
      });
      return;
    }

    // Call API if credentials are correct
    try {
      const response = await axios.post("https://api.jobyz.ch/api/auth/login", {
        email,
        password,
      });
      console.log("🚀 ~ handleSignIn ~ response:", response)

      // Handle success
      if (response.status === 200) {
        const { token } = response.data;
        Swal.fire({
          title: "Login Successful",
          text: "Redirecting to home page...",
          icon: "success",
          timer:2000
        });
        // Store token in localStorage/sessionStorage for authenticated routes
        localStorage.setItem("token", token);
        navigate(PATHS.home);
      }
    } catch (error) {
      // Handle error
      Swal.fire({
        title: "Login Failed",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    }
  };
  return (
    <div className="bg-black">
      <section className="bg-banner">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img className="w-28 md:w-40 mr-2" src={Logo} alt="brandLogo" />
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#1967D2] md:text-2xl">
                Sign in to your account
              </h1>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={signInSchema}
                onSubmit={handleSignIn}
              >
                {({ errors, touched }) => (
                  <Form className="space-y-4 md:space-y-3">
                    <Field
                      as={InputBox}
                      id="email"
                      type="email"
                      placeholder="Enter Email"
                      label="Email Address"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                    <Field
                      as={InputBox}
                      id="password"
                      type="password"
                      placeholder="Enter Password"
                      label="Password"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                    <button
                      type="submit"
                      className="w-full text-white bg-[#1967D2] focus:ring-4 focus:outline-none focus:ring-[#1967D2] font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-55 disabled:cursor-not-allowed"
                    >
                      Sign in
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
