import emailjs from "emailjs-com";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };
  return (
    <section className="py-16 bg-base-100" id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-sky-500 mb-10 underline">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* --- Left Side --- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-sky-500 text-xl" />
              <a
                href="mailto:nahidkhanniloy31@gmail.com"
                className="hover:underline text-lg underline">
                nahidkhanniloy31@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-sky-500 text-xl" />
              <p className="text-lg">Dhaka, Bangladesh</p>
            </div>

            <div className="flex gap-5 mt-4">
              <a href="mailto:nahidkhanniloy31@gmail.com">
                <FaEnvelope size={25} className="text-2xl text-red-500 hover:scale-110 transition" />
              </a>

              <Link to="https://www.linkedin.com/in/nahid-khan-niloy-77b1b2261/">
                <FaLinkedin size={25} className="text-2xl text-sky-600 hover:scale-110 transition" />
              </Link>

              <Link to="https://github.com/nahidkhan31">
                <FaGithub size={25} className="text-2xl hover:scale-110 transition" />
              </Link>

              <Link to="https://web.facebook.com/nahidkhan.niloy.1">
                <FaFacebook size={25} className="text-2xl text-blue-600 hover:scale-110 transition" />
              </Link>

              <Link to="https://www.instagram.com/niloynahidkhan/?hl=en">
                <FaInstagram size={25} className="text-red-500 hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* --- Right Side (Form) --- */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 bg-base-200 p-6 rounded-xl shadow-md">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                  {...register("from_name", {
                    required: "Name is required",
                  })}
                />
                {errors.from_name && (
                  <p className="text-error text-sm mt-1">
                    {errors.from_name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="input input-bordered w-full"
                  {...register("from_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.from_email && (
                  <p className="text-error text-sm mt-1">
                    {errors.from_email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject of your message"
                className="input input-bordered w-full"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className="text-error text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Write your message here..."
                className="textarea textarea-bordered w-full h-32"
                {...register("message", {
                  required: "Message is required",
                })}></textarea>
              {errors.message && (
                <p className="text-error text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
