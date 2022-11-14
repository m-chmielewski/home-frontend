import React from "react";

import "./ContactForm.css";

import { useForm } from "../CommonElements/Hooks/useForm";
import { postToBackend } from "../CommonElements/Utils/postToBackend";
import SubmitSection from "../CommonElements/SubmitSection";

const ContactForm = () => {
 const [formState, handleInputChange, handleSubmit] = useForm(
  {
   data: {
    from: "",
    subject: "",
    messageBody: "",
   },
  },
  postToBackend,
  `${process.env.REACT_APP_BACKEND_URL}/contactMe/`
 );

 return (
  <form
   className="contact-form"
   onSubmit={event => handleSubmit(event)}
  >
   <fieldset>
    <legend>
     <h2>Contact form</h2>
    </legend>
    <label htmlFor="email">Your email address</label>
    <input
     id="email"
     type="email"
     name="from"
     value={formState?.data?.from || ""}
     onChange={event => handleInputChange(event)}
    />
    <label htmlFor="subject">Subject</label>
    <input
     id="subject"
     type="text"
     name="subject"
     value={formState?.data?.subject || ""}
     onChange={event => handleInputChange(event)}
    />
    <label htmlFor="message-body">Message</label>
    <textarea
     id="message-body"
     name="messageBody"
     className="message-body"
     rows={10}
     value={formState?.data?.messageBody || ""}
     onChange={event => handleInputChange(event)}
    />
   </fieldset>
   <SubmitSection formState={formState} />
  </form>
 );
};

export default ContactForm;
