import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='flex flex-col text-white' ref={form} onSubmit={sendEmail}>
        <label className='title text-2xl py-4'>Send us a message</label>
      <input className="input w-full max-w-xs mx-auto" type="text" name="user_name" placeholder='Name'/>
      <input className="input w-full max-w-xs  mx-auto" type="email" name="user_email" placeholder='Email'/>
      <textarea name="message" className="textarea textarea-lg w-full max-w-xs py-0 mx-auto" placeholder='Message'/>
      <input className="btn rounded-none w-full max-w-xs  mx-auto" type="submit" value="Send" />
    </form>
  );
};