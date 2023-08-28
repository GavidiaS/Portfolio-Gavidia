import { usePortfolioContext } from "../Context";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicId = import.meta.env.VITE_PUBLIC_ID;

type InputsType = {
  user_name: string,
  user_email: string,
  message: string,
}

type ErrorsType = Partial<InputsType>

const initialState: InputsType = {
  user_name: "",
  user_email: "",
  message: ""
}

export default function FormContact() {
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement | null>(null);
  const { data } = usePortfolioContext();
  const [inputs, setInputs] = useState<InputsType>(initialState);
  const [errors, setErrors] = useState<ErrorsType>(initialState);
  function validate(inputs: InputsType): ErrorsType {
    const error: ErrorsType = {};
    if (!inputs.user_name) error.user_name = "Name require";
    if (!/^[A-Z].*$/.test(inputs.user_name)) error.user_name = "First capital letter";
    if (!/^.{3,15}$/.test(inputs.user_name)) error.user_name = "Name accepts from 3 to 15 characters";
    if (!/^[a-zA-Z]+$/.test(inputs.user_name)) error.user_name = "Only accept letters";
    if (!inputs.user_email) error.user_email = "Email require";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputs.user_email)) error.user_email = "A valid email is required";
    if (!inputs.message) error.message = "Message require";
    if (!/^.{2,1000}$/.test(inputs.message)) error.message = "Message accepts from 2 to 1000 characters";
    return error;
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    e.preventDefault();
    setInputs({
      ...inputs,
      [name]: value
    });
    setErrors(validate({
      ...inputs,
      [name]: value
    }))
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicId)
        .then(() => {
          setInputs(initialState);
          setErrors(initialState);
          navigate('/');
          Swal.fire({
            title: "New Message",
            text: "Message sent",
            icon: "success",
            confirmButtonText: 'close',
          });
        })
        .catch(() => {
          Swal.fire({
            title: "Error",
            text: "Message not sent",
            icon: "error",
            confirmButtonText: 'close',
          });
        });
    }
  }
  return (
    <form className="form-contact" ref={form} onSubmit={handleSubmit}>
      <label>
        <input className={inputs.user_name ? "empty" : ""} type="text" name="user_name" value={inputs.user_name} onChange={handleChange} />
        <span>{data.iName}</span>
        <p>{errors.user_name}</p>
      </label>
      <label>
        <input className={inputs.user_email ? "empty" : ""} type="text" name="user_email" value={inputs.user_email} onChange={handleChange} />
        <span>{data.iEmail}</span>
        <p>{errors.user_email}</p>
      </label>
      <label>
        <textarea className={inputs.message ? "empty" : ""} name="message" value={inputs.message} onChange={handleChange}></textarea>
        <span>{data.iMessage}</span>
        <p>{errors.message}</p>
      </label>
      <button id="submit" type="submit" disabled={Object.keys(errors).length > 0 ? true : false}>{data.iSend}</button>
    </form>
  );
}