import React from "react";
import style from "./style/About.module.css";
import { bodyTags } from "../../Helpers/HelperItems";
import { Link } from "react-router-dom";
import AboutCanvas from "./AboutCanvas";
const About = () => {
  return (
    <section className={style.aboutMain}>
      <div className="container">
        <span className={style.tags}> {bodyTags.body}</span>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className={style.aboutMeWrapper}>
              <span className={style.tags}> {bodyTags.h1}</span>
              <h1>
                <span translate="no" className={style.letterAnimation}>
                  A
                </span>
                <span translate="no" className={style.letterAnimation}>
                  b
                </span>
                <span translate="no" className={style.letterAnimation}>
                  o
                </span>
                <span translate="no" className={style.letterAnimation}>
                  u
                </span>
                <span translate="no" className={style.letterAnimation}>
                  t
                </span>
                <span translate="no" className={style.letterAnimation}>-</span>
                <span translate="no" className={style.nameLetter}>
                  M
                </span>
                <span translate="no" className={style.nameLetter}>
                  e
                </span>
              </h1>
              <span className={style.tags}>{bodyTags.h1Close}</span>
              <span className={style.tags}> {bodyTags.paragraph}</span>
              <p translate="no" className={style.aboutMeDescription}>
                A full stack developer who provides backend solutions about 
                E-commerce,Fintech and BlockChain Projects. A vision of all co-operations 
                with clients in order to produce well-based coding skills and produce 
                something usefull.
              </p>
                
              <p translate="no" className={style.aboutMeDescription}>
                A developer who desire that being part of a nice projects.
                Always self-learner and technology addict 
              </p>
              <span translate="no" className={style.aboutMeTitle}>
                Experience
              </span>
              <p translate="no" className={style.aboutMeDescription}>
                I am remote and freelance worker , you can view my{" "}
                <Link translate="no" to="/skills" className={style.attention}>
                  skills
                </Link>{" "}
                and{" "}
                <Link translate="no" to="/projects" className={style.attention}>
                  works.{" "}
                </Link>
              </p>
              <span className={style.tags}> {bodyTags.paragraphClose}</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <AboutCanvas />
          </div>
        </div>
        <span className={style.tags}> {bodyTags.bodyClose}</span>
      </div>
    </section>
  );
};

export default About;
