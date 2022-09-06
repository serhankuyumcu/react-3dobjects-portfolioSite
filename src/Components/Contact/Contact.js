import React, { useRef , useState} from 'react'
import style from "./style/contact.module.css";
import { bodyTags } from "../../Helpers/HelperItems";
import { useForm } from 'react-hook-form'
import ContactCanvas from "./ContactCanvas";
import { HiOutlineMailOpen } from "react-icons/hi";
import emailjs from 'emailjs-com'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'

const Contact = () => {
  const form = useRef();
  const [isSuccessful, setIsSuccessful,isMessage] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_zzn6jgm', 'template_he1hhri',form.current, 'mfe_P39oyBjA_U4gI')
      .then((result) => {
          console.log(result.text)
          window.location.reload()
      }, (error) => {
          console.log(error.text)
      })
      e.target.reset()
    }
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });
  const { register , formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
   
  return (
    <section className={style.contactMain}>
      <div className="container">
        <span className={style.tags}>{bodyTags.body}</span>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className={style.contactWrapper}>
              <span className={style.tags}>{bodyTags.h1}</span>
              <h1 className={style.contactTitle}>
                <span className={style.letterAnimation}>C</span>
                <span className={style.letterAnimation}>o</span>
                <span className={style.letterAnimation}>n</span>
                <span className={style.letterAnimation}>t</span>
                <span className={style.letterAnimation}>a</span>
                <span className={style.letterAnimation}>c</span>
                <span className={style.letterAnimation}>t</span>
                <span className={style.letterAnimation}> </span>
                <span className={style.nameLetter}>M</span>
                <span className={style.nameLetter}>e</span>
              </h1>
              <span className={style.tags}>{bodyTags.h1Close}</span>

              <p translate="no" className={style.contactText}>
                If you like my projects and you think you have a good idea to desire
                with me, contact without waiting any longer!
              </p>

              <span className={style.tags}>{bodyTags.form}</span>

              <form ref={form} onSubmit={sendEmail} >
                <div className="row justify-content-center align-items-center g-3">
                  <div className="col-md-6">
                    <input
                      name="name"
                      type="text"
                      className={`${style.contactInput} ${
                        errors.name  && style.errorInput
                      }`}
                      placeholder="Name"
                      { ...register('name')}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="email"
                      type="text"
                      className={`${style.contactInput} ${
                        errors.email && style.errorInput
                      }`}
                      placeholder="Email"
                      { ...register('email')}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      name="subject"
                      type="text"
                      className={`${style.contactInput} ${
                        errors.subject  && style.errorInput
                      }`}
                      placeholder="Subject"
                      { ...register('subject')}
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      rows="4"
                      cols="50"
                      wrap="soft"
                      name="message"
                      className={`${style.contactInput} ${
                        errors.message  && style.errorInput
                      }`}
                      placeholder="Message"
                      { ...register('message')}
                    ></textarea>
                  </div>
                </div>
                <span className={style.tags}>{bodyTags.formClose}</span>
                <div className={style.contactButtonWrapper}>
                  <div className={style.contactButton}>
                    <button
                      type="submit"
                      onClick={sendEmail}
                      className={style.sendButton}
                    >
                      Send
                    </button>
                  </div>
                  <div className="d-flex mt-1 align-items-center">
                    <HiOutlineMailOpen className={style.mailIcon} />
                    <button
                      onClick={() =>
                        (window.location = "mailto:serhankuyumcu7@gmail.com")
                      }
                      className={style.email}
                    >
                      serhankuyumcu7@gmail.com
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <ContactCanvas />
          </div>
        </div>
        <span className={style.tags}>{bodyTags.bodyClose}</span>
      </div>
      {isMessage && (
        <div translate="no" className={style.messageSuccess}>Message sent successfully!</div>
      )}
    </section>
  );
};

export default Contact;
