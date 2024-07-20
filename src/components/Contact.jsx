import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            password: "",
            passwordconfirm:""
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
      </div>
      <div className='bg-primary flex justify-center items-center pb-10'>
        <div className='mt-40'>
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
          >
          <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[1.5] bg-black-100 p-8 rounded-2xl'
          >
          <h3 className={styles.sectionHeadText}>Login. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Password</span>
            <textarea
              rows={1}
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder='Enter Password'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Password Confirmation</span>
            <textarea
              rows={1}
              name='passwordConfirm'
              value={form.passwordConfirm}
              onChange={handleChange}
              placeholder='Re-Enter Password'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Submiting..." : "Submit"}
            </button>
          </form>
        </motion.div>
        </div><br /><br /><br /><br /><br /><br />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact