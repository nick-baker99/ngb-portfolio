import { useContext, useState } from "react";
import styled from "styled-components"
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const captchaRef = useRef();
  const [formStatus, setFormStatus] = useState(null);
  const [intersectionRef, isVisible] = useIntersectionObserver();

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

  const onSubmit = async (data) => {
    try {
      // send reCAPTCHA token to backend to be verified
      const response = await fetch(`${API_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        setFormStatus("error");
        return;
      }

      // message has been sent successfully
      setFormStatus("success");
      // reset form values
      reset();
      // reset recaptcha
      captchaRef.current.reset();
    } catch (error) {
      // set form failure message
      setFormStatus("error");
    }
  };

  return (
    <ContactStyles name="contact">
      <div className={`wrapper scale-up ${isVisible ? "show" : ''}`} ref={intersectionRef}>
        <h2 className="sub-title">Contact</h2>
        <h1 className="title">Get in Touch</h1>
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
              },
              maxLength: {
                value: 1000,
                message: "Message must be less than 1,000 characters"
              }
            })}
            error={errors.message}
          />
          {/* reCAPTCHA checkbox */}
          <div className="recaptcha-container">
            <ReCAPTCHA 
              key={theme} /* this will force re-mount when theme is updated */
              ref={captchaRef} 
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} 
              onChange={(token) => {
                setValue("recaptchaToken", token, { shouldValidate: true });
                trigger("recaptchaToken");
              }}
              theme={theme}
            />
          </div>
          {errors.recaptchaToken && <p className="error-msg">Please complete the reCAPTCHA</p>}
          <div className="submit-btn">
            <button type="submit" title="send message" disabled={isSubmitting} onClick={() => setFormStatus(null)}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {formStatus === "success" && <p className="form-status success">Your message has been sent!</p>}
            {formStatus === "error" && <p className="form-status error">Something went wrong. Please try again</p>}
          </div>
        </form>
      </div>
    </ContactStyles>
  )
}

const ContactStyles = styled.section`
  background-color: var(--secondaryBg);
  padding: 4rem 0;
  text-align: center;

  .wrapper {
    max-width: 750px;
    margin: 0 auto;
    padding: 0;
  }

  form {
    background-color: var(--mainBg);
    margin: 2rem auto;
    padding: 2.5rem 7%;
    box-shadow: var(--boxShadow);
    border-radius: 8px;
    text-align: left;
    
    @media (max-width: 768px) {
      padding: 2rem 5%;
    }
  }
  .submit-btn button {
    background-color: var(--buttonBg);
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 16px 20px;
    border-radius: 5px;
    width: 175px;
    margin-left: auto;
    margin-top: 1rem;
    display: block;
    transition: background 0.3s ease;

    &:disabled {
      background-color: grey;
      cursor: not-allowed;
    }

    &:hover {
      background-color: var(--buttonHoverBg);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 14px 18px;
      width: 150px;
    }
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
  /* reCAPTCHA responsiveness */
  .recaptcha-container {
    display: flex;
    justify-content: flex-start;
    transform-origin: left;

    @media (max-width: 768px) {
      transform: scale(0.85);
    }

    @media (max-width: 400px) {
      transform: scale(0.75);
    }

    @media (max-width: 300px) {
      transform: scale(0.65);
    }
  }
`;

export default Contact