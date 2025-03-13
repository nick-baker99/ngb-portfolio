import { useState } from "react";
import styled from "styled-components"
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";


const Contact = () => {
  const captchaRef = useRef();
  const [formStatus, setFormStatus] = useState(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
    setValue,
    trigger
  } = useForm();

  // register the reCAPTCHA token as required
  useEffect(() => {
    register("recaptchaToken", { required: "Please complete the reCAPTCHA" });
  }, [register]);

  // initialize emailjs
  useEffect(() => emailjs.init(import.meta.env.VITE_EMAILJS_KEY), []);

  const onSubmit = async (data) => {
    
    try {
      // send reCAPTCHA token to backend to be verified
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "recaptchaToken": data.recaptchaToken })
      });

      if (response.ok) {
        // attempt to send email via EmailJS (move this to the backend)
        try {
          await emailjs.send(
            "service_mk537os",
            "template_ctw418b",
            data,
          );
  
          setFormStatus("success");
          reset();
          captchaRef.current.reset();
          // update form success message
        } catch (error) {
          console.error("Emailjs error: ", error);
          // set form failure message
          setFormStatus("error");
        }
      } else {
        alert("Failed to verify token");
        // set form failure message
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // set form failure message
      setFormStatus("error");
    }
  };

  return (
    <ContactStyles>
      <h2 className="sub-title">Contact</h2>
      <h1 className="title">Get in Touch</h1>
      <div className="wrapper">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            name="name"
            placeholder="Enter your name..."
            label="Name"
            required="true"
            register={register("name", {
              required: "Name is required",
              maxLength: 150
            })}
            error={errors.name}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your email..."
            label="Email"
            register={register("email", {
              required: "Email address is required",
              maxLength: 150,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format"
              }
            })}
            error={errors.email}
          />
          <FormInput
            type="textarea"
            name="message"
            placeholder="Enter your message..."
            label="Message"
            register={register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters"
              }
            })}
            error={errors.message}
          />
          {/* reCAPTCHA checkbox */}
          <ReCAPTCHA 
            ref={captchaRef} 
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} 
            onChange={(token) => {
              setValue("recaptchaToken", token, { shouldValidate: true });
              trigger("recaptchaToken");
            }}
          />
          {errors.recaptchaToken && <p className="error-msg">Please complete the reCAPTCHA</p>}
          <div className="submit-btn">
            <button type="submit" title="send message" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {formStatus === "success" && <p className="form-status success">Message sent successfully</p>}
            {formStatus === "error" && <p className="form-status error">Something went wrong. Please try again</p>}
          </div>
        </form>
      </div>
    </ContactStyles>
  )
}

const ContactStyles = styled.section`
  background-color: var(--paleBlue);
  padding: 4rem 0;
  text-align: center;

  .wrapper {
    background-color: #fff;
    max-width: 750px;
    margin: 2rem auto;
    padding: 2.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    
    @media (max-width: 768px) {
      padding: 2rem 0;
    }
  }
  .contact-form {
    width: 90%;
    margin: 0 auto;
    text-align: left;
  }
  .submit-btn button {
    background-color: var(--mainBlue);
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 16px 20px;
    border-radius: 5px;
    width: 175px;
    margin-left: auto;
    display: block;
    transition: background 0.3s ease;

    &:disabled {
      background-color: grey;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 14px 18px;
      width: 150px;
    }
  }
  .submit-btn button:hover {
    background-color: var(--darkBlue);
  }

  .form-status {
    text-align: right;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }

  .error-msg {
    margin: 0.5rem 0;
    color: var(--errorRed);
    font-size: 0.8rem;
  }
`;

export default Contact