import React from "react";
import "./Testimonials.css";

// Import logos
import ict from "../assets/ict.png";
import indus from "../assets/indus.png";
import nirmaan from "../assets/nirmaan.png";
import avn from "../assets/avn.png";
import nrec from "../assets/nrcm.png";
import mru from "../assets/mru.jpg";
import kits from "../assets/kits.png";
import anurag from "../assets/anurag.jpg";
import tkr from "../assets/tkr.jpeg";
import qis from "../assets/qis.jpeg";
import rit from "../assets/rit.jpg";
import ait from "../assets/ait.jpeg";
import mrecw from "../assets/mrecw.png";
import sardarpatel from "../assets/sardarpatel.jpg";
import gitam from "../assets/gitam.jpg";
import cmr from "../assets/cmr.jpeg";
import bvrit from "../assets/bvrit.png";
import mrce from "../assets/mrce.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Nirmal Kumar, Domain Lead",
    company: "ICT ACADEMY,Chennai",
    logo: ict,
    feedback: "Raja DeeRaj, the Soft Skills Trainer, sincerely thanks you for your support in employability skills and Campus-to-Corporate projects, appreciating your expertise."
  },
  {
    id: 2,
    name: "George Mathew, Managing Director",
    company: "Indus Management Consultant Pvt Ltd,Delhi",
    logo: indus,
    feedback: "Raja DeeRaj is a fantastic trainer — friendly, fun, and encouraging, with strong time management and work ethics. He effectively trains on product concepts."
  },
  {
    id: 3,
    name: "Sridhar Neelam, Project Manager",
    company: "Nirmaan Organisation,Hyderabad",
    logo: nirmaan,
    feedback: "Raja DeeRaj, as a Soft Skills Trainer, has the ability to lead enriching discussions with examples and real-time case studies. Many students praised him for helping ."
  },
  {
    id: 4,
    name: "Vishnu, B.tech 4th year CSE",
    company: "AVN College,Hyderabad",
    logo: avn,
    feedback: "Raja DeeRaj sir's training was incredibly engaging and interactive. I learned so much about effective communication and teamwork thanks to his expert guidance.."
  },
  {
    id: 5,
    name: "Srivardan, B.tech 4th year ECE",
    company: "NRCM,Hyderabad",
    logo: nrec,
    feedback: "Raja DeeRaj sir is a positive nature trained us effectively conveys knowledge, fosters interactive learning, connects with real-life situations, and provides valuable feedback, leading to personal and professional growth."
  },
  {
    id: 6,
    name: "Pravallika, B.Tech 4th year AI",
    company: "MRU,Hyderabad",
    logo: mru,
    feedback: "I've learned so much from Raja DeeRaj sir's training about how to be assertive and collaborative. His teaching style makes learning fun and interactive."
  },
  {
    id: 7,
    name: "YASHWANT, B.tech 4th year CSE",
    company: "KITS,Guntur",
    logo: kits,
    feedback: "Raja DeeRaj sir has an exceptional ability to explain complex concepts clearly and concisely. I now feel more confident in my understanding."
  },
  {
    id: 8,
    name: "MOKSHA, B.tech 4th year Data science",
    company: "Anurag University,Hyderabad",
    logo: anurag,
    feedback: "Raja DeeRaj sir has a knack for creating a supportive and encouraging learning environment. I felt comfortable asking questions and participating in class."
  },
  {
    id: 9,
    name: "Sudha, B.tech 4th year CSE",
    company: "TKR,Hyderabad",
    logo: tkr,
    feedback: "I struggled with communication before, but Raja DeeRaj sir's patient and clear explanations gave me the confidence and understanding I needed to speak effectively."
  },
  {
    id: 10,
    name: "Mahesh, B.tech 3rd year CSE",
    company: "QIS,Ongole",
    logo: qis,
    feedback: "Raja DeeRaj sir is a great trainer with a unique ability to make challenging topics easy to understand. He patiently explains until everyone comprehends."
  },
  {
    id: 11,
    name: "Deekshitha, B.tech 3rd year CSE",
    company: "RIT,Maharastra",
    logo: rit,
    feedback: "Raja DeeRaj has a fantastic ability to connect with students and make them feel comfortable. He's always approachable and ready to help."
  },
  {
    id: 12,
    name: "Sangitha B.tech 3rd year CSE",
    company: "AIT,Maharastra",
    logo: ait,
    feedback: "Raja DeeRaj has inspired me to pursue my goals with greater determination. His rich experience and sophisticated training methods have motivated me to aim higher."
  },
  {
    id: 13,
    name: "Nandini B.tech 4th year CSE - AI",
    company: "MRECW,Hyderabad",
    logo: mrecw,
    feedback: "Raja DeeRaj sir is both a trainer and motivator who has sparked in me a love for learning. I'm now excited to pursue new challenges and continue my education."
  },
  {
    id: 14,
    name: "Rishita , Degree 3rd year B.com",
    company: "Sardar Patel Degree College,Secendrabad",
    logo: sardarpatel,
    feedback: "Raja DeeRaj sir's soft skills session created a comfortable learning environment where everyone felt encouraged to participate and share their thoughts."
  },
  {
    id: 15,
    name: "Deepika B.tech 3rd year CSE",
    company: "GITAM University,Vizag",
    logo: gitam,
    feedback: "Raja DeeRaj sir's soft skills session was superb — interactive, engaging, and highly valuable. I loved the energy and clarity of the trainer's explanations."
  },
  {
    id: 16,
    name: "Abhinay B.tech 4th year CSE",
    company: "CMR Technical,Hyderabad",
    logo: cmr,
    feedback: "Raja DeeRaj is a master of soft skills training with an enthusiastic and practical approach. He made every concept come alive, making learning a truly enriching experience."
  },
  {
    id: 17,
    name: "Sirsha B.tech 3rd year CSE",
    company: "BVRIT,Hyderabad",
    logo: bvrit,
    feedback: "The communication workshop with Raja DeeRaj was a game-changer! His approach made complex ideas easy to understand, and his energy was infectious."
  },
  {
    id: 18,
    name: "Aruna B.tech 4th year CSE",
    company: "MRCE,Hyderabad",
    logo: mrce,
    feedback: "Raja DeeRaj's soft skills program was unlike any other I've attended. The practical exercises combined with his enthusiastic and clear guidance."
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">TESTIMONIALS</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <img src={t.logo} alt={t.company} className="testimonial-logo" />
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-company">{t.company}</p>
            <p
  className="testimonial-feedback"
  dangerouslySetInnerHTML={{
    __html: t.feedback.replace(/Raja DeeRaj/g, "<strong>Raja DeeRaj</strong>")
  }}
></p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
