import React from "react";
import "./Skills.css";
import { 
  FaChalkboardTeacher, FaUserTie, FaUsers, FaLightbulb, FaHeartbeat, FaUniversity, 
  FaBriefcase, FaGlobe, FaMicrophone, FaUserGraduate, FaGraduationCap, FaBook, FaHandsHelping, FaCogs,  FaBuilding, FaShoppingCart 
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: <FaChalkboardTeacher />,
      title: "English Language",
      points: [
        "Vocabulary Building",
        "Parts of Speech",
        "Tenses",
        "Reading Comprehension",
        "Writing Skills",
      ],
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Soft Skills",
      points: [
        "Effective Communication",
        "Team Building",
        "Time Management",
        "Presentation Skills",
        "Resume Building",
      ],
    },
    {
      id: 3,
      icon: <FaUniversity />,
      title: "Faculty Development",
      points: [
        "Enhanced Communication",
        "Empathy & Sensitivity",
        "Leadership Skills",
        "Teamwork & Collaboration",
        "Professional Etiquette",
      ],
    },
    {
      id: 4,
      icon: <FaBriefcase />,
      title: "Business Coach",
      points: [
        "Strategic Thinking",
        "Marketing & Branding",
        "Financial Literacy",
        "Sales & Negotiation",
        "Innovation & Problem Solving",
      ],
    },
    {
      id: 5,
      icon: <FaHeartbeat />,
      title: "Life Coach",
      points: [
        "Self-Awareness",
        "Goal Setting & Vision",
        "Mindset Mastery",
        "Confidence & Self-Esteem",
        "Stress Management",
      ],
    },
    {
      id: 6,
      icon: <FaChalkboardTeacher />,
      title: "Train the Trainer",
      points: [
        "Training Needs Analysis",
        "Instructional Design",
        "Training Delivery Skills",
        "Assessment & Evaluation",
        "Training Tools & Technology",
      ],
    },
    {
      id: 7,
      icon: <FaUserTie />,
      title: "Campus to Corporate",
      points: [
        "Business Communication",
        "Workplace Readiness",
        "Resume & Interview Skills",
        "Professional Etiquette",
        "Time Management",
      ],
    },
    {
      id: 8,
      icon: <FaUserGraduate />,
      title: "Career Guidance",
      points: [
        "Self-Discovery",
        "Career Planning",
        "Hard vs Soft Skills",
        "Mock Interviews",
        "Corporate Etiquette",
      ],
    },
    {
      id: 9,
      icon: <FaLightbulb />,
      title: "Motivational Session",
      points: [
        "Positive Thinking",
        "Overcoming Challenges",
        "Finding Purpose",
        "Goal Achievement",
        "Leadership & Influence",
      ],
    },
    {
      id: 10,
      icon: <FaMicrophone />,
      title: "Public Speaking",
      points: [
        "Overcoming Stage Fear",
        "Speech Structure",
        "Vocal Control",
        "Audience Engagement",
        "Body Language",
      ],
    },
    {
      id: 11,
      icon: <FaGraduationCap />,
      title: "Freshers’ Orientation",
      points: [
        "Welcome to Campus",
        "Study Skills",
        "Soft Skills Foundation",
        "Ethics & Values",
        "Industry Readiness",
      ],
    },
    {
      id: 12,
      icon: <FaGlobe />,
      title: "Entrepreneurship Development",
      points: [
        "Entrepreneurial Mindset",
        "Business Planning",
        "Market Research",
        "Financial Planning",
        "Innovation & Technology",
      ],
    },
    {
      id: 13,
      icon: <FaBuilding />,
      title: "BFSI Training",
      points: [
        "Banking & Financial Overview",
        "Insurance Fundamentals",
        "Digital Banking",
        "Customer Relationship",
        "Career in BFSI",
      ],
    },
    {
      id: 14,
      icon: <FaShoppingCart />,
      title: "E-Commerce Training",
      points: [
        "E-Commerce Models",
        "Online Store Setup",
        "Digital Payments",
        "E-Marketing",
        "Customer Relationship",
      ],
    },
    {
      id: 15,
      icon: <FaBook />,
      title: "Personality Development",
      points: [
        "Self-Awareness",
        "Communication Skills",
        "Professional Etiquette",
        "Stress Management",
        "Leadership Skills",
      ],
    },
    {
      id: 16,
      icon: <FaCogs />,
      title: "Manager Development",
      points: [
        "Strategic Thinking",
        "Team Motivation",
        "Performance Management",
        "Conflict Resolution",
        "Change Management",
      ],
    },
    {
      id: 17,
      icon: <FaUserTie />,
      title: "Personal Interview Skills",
      points: [
        "Self-Introduction",
        "Answering Common Questions",
        "Non-Verbal Communication",
        "Mock Interviews",
        "Handling Difficult Questions",
      ],
    },
    {
      id: 18,
      icon: <FaHandsHelping />,
      title: "Employee Onboarding",
      points: [
        "Company Introduction",
        "Workplace Policies",
        "Job Roles & Expectations",
        "Training Roadmap",
        "Team Integration",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h1 className="skills-title">AREA OF EXPERTISE</h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="flip-card" key={skill.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">{skill.icon}</div>
                <h2>{skill.title}</h2>
              </div>
              <div className="flip-card-back">
                <ul>
                  {skill.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
