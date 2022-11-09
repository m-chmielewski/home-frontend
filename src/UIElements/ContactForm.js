import React, { useState } from "react";
import Axios from "axios";

import "./ContactForm.css";

import Button from "../CommonElements/Button";
import FormAlert from "../CommonElements/FormAlert";

const ContactForm = () => {
 const [messageData, setMessageData] = useState();

 const [formState, setFormState] = useState();

 const handleSubmit = event => {
  event.preventDefault();

  setFormState(current => {
   return {
    ...current,
    submitting: true,
    valuesMissing:
     !messageData?.from || !messageData?.subject || !messageData?.body
      ? true
      : false,
   };
  });

  if (messageData?.from && messageData?.subject && messageData?.body) {
   Axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/contactMe/`,
    messageData
   ).then(result => {
    if (result.status === 200) {
     setFormState(current => {
      return {
       ...current,
       submittedSuccessfully: true,
      };
     });

     setTimeout(() => {
      setFormState(current => {
       return {
        ...current,
        submitting: false,
        submittedSuccessfully: null,
       };
      });

      setMessageData(null);
     }, 2000);
    }
   });
  } else {
   setTimeout(() => {
    setFormState(current => {
     return {
      ...current,
      submitting: false,
      valuesMissing: false,
      submittedSuccessfully: null,
     };
    });
   }, 2000);
  }
 };

 return (
  <form
   className="contact-form"
   onSubmit={handleSubmit}
  >
   <fieldset>
    <legend>
     <h2>Contact form</h2>
    </legend>
    <label htmlFor="email">Your email address</label>
    <input
     id="email"
     type="email"
     value={messageData?.from || ""}
     onChange={event => {
      setMessageData(current => {
       return { ...current, from: event.target.value };
      });
     }}
    />
    <label htmlFor="subject">Subject</label>
    <input
     id="subject"
     type="text"
     value={messageData?.subject || ""}
     onChange={event => {
      setMessageData(current => {
       return { ...current, subject: event.target.value };
      });
     }}
    />
    <label htmlFor="message-body">Message</label>
    <textarea
     id="message-body"
     className="message-body"
     rows={10}
     value={messageData?.body || ""}
     onChange={event => {
      setMessageData(current => {
       return { ...current, body: event.target.value };
      });
     }}
    />
   </fieldset>
   <div className="actions-wrapper">
    <Button
     variant="neutral"
     inactive={formState?.submitting}
     type="submit"
    >
     {formState?.submitting && !formState?.valuesMissing
      ? "Submitting..."
      : "Submit"}
    </Button>
    {formState?.valuesMissing || formState?.submittedSuccessfully ? (
     <FormAlert success={formState.submittedSuccessfully}>
      {formState?.valuesMissing && "Please provide all values"}
      {formState?.submittedSuccessfully && "Sent successfully"}
     </FormAlert>
    ) : null}
   </div>
  </form>
 );
};

export default ContactForm;
