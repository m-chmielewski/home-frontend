import { useState } from "react";

export const useForm = (initialFormState, postToBackend, backendURL) => {
 const [formState, setFormState] = useState(initialFormState);

 const handleInputChange = event => {
  setFormState(current => {
   return {
    ...current,
    data: {
     ...current?.data,
     [event.target.name]: event.target.value,
    },
   };
  });
 };

 const handleSubmit = event => {
  event.preventDefault();

  let valuesMissing = false;

  Object.values(formState.data).forEach(value => {
   valuesMissing = valuesMissing || !value;
  });

  setFormState(current => {
   return {
    ...current,
    submitting: true,
    valuesMissing: valuesMissing,
   };
  });

  if (!valuesMissing) {
   postToBackend(backendURL, formState.data).then(result => {
    if (result === 200) {
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
      setFormState(current => {
       return {
        ...current,
        data: initialFormState.data,
       };
      });
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

 return [formState, handleInputChange, handleSubmit];
};
