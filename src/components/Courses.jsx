import React from 'react';
import styles from './Courses.module.css';
import { FaBookOpen, FaChalkboardTeacher, FaHeadphones, FaComments, FaPenFancy, FaClipboardList } from 'react-icons/fa';

const coursesData = [
  {
    title: 'IELTS Academic (Full)',
    price: '₹9,500',
    duration: '8 Weeks',
    icon: <FaBookOpen />,
    features: [
      'Complete Academic Modules',
      'Live Interactive Classes',
      'Weekly Mock Tests',
      'Individual Feedback',
      'Comprehensive Study Material'
    ]
  },
  {
    title: 'IELTS General Training',
    price: '₹8,500',
    duration: '6 Weeks',
    icon: <FaChalkboardTeacher />,
    features: [
      'Focus on Work/Immigration Needs',
      'Targeted Listening & Reading',
      'Speaking & Writing Workshops',
      'Practice Tests Every Week'
    ]
  },
  {
    title: 'Speaking Masterclass',
    price: '₹4,500',
    duration: '4 Weeks',
    icon: <FaComments />,
    features: [
      'One-on-One Speaking Practice',
      'Accent & Pronunciation Training',
      'Fluency Boost Activities',
      'Real Exam Simulation'
    ]
  },
  {
    title: 'Writing Workshop',
    price: '₹3,500',
    duration: '3 Weeks',
    icon: <FaPenFancy />,
    features: [
      'Task 1 & Task 2 Writing Mastery',
      'Templates for High Band Scores',
      'Personal Feedback on Essays',
      'Grammar & Cohesion Guidance'
    ]
  },
  {
    title: 'Listening Booster',
    price: '₹2,500',
    duration: '2 Weeks',
    icon: <FaHeadphones />,
    features: [
      'Daily Listening Drills',
      'British & Australian Accents',
      'Real IELTS Listening Tests',
      'Error Analysis & Tips'
    ]
  },
  {
    title: 'Reading Strategies',
    price: '₹2,500',
    duration: '2 Weeks',
    icon: <FaClipboardList />,
    features: [
      'Skimming & Scanning Techniques',
      'Time Management Skills',
      'True/False/Not Given Mastery',
      'Cambridge IELTS Practice Sets'
    ]
  }
];

const Courses = () => {
  return (
    <section className={styles.coursesSection}>
      <h2 className={styles.heading}>Our IELTS Courses</h2>
      <p className={styles.subheading}>Scroll through our courses — hover to pause and select</p>
      
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollContent}>
          {coursesData.map((course, index) => (
            <div className={styles.courseCard} key={index}>
              <div className={styles.icon}>{course.icon}</div>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p className={styles.price}>{course.price}</p>
              <p className={styles.duration}>{course.duration}</p>
              <ul className={styles.features}>
                {course.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={styles.enrollBtn}>Enroll Now</button>
            </div>
          ))}
          {/* duplicate the cards for seamless looping */}
          {coursesData.map((course, index) => (
            <div className={styles.courseCard} key={'dup-' + index}>
              <div className={styles.icon}>{course.icon}</div>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p className={styles.price}>{course.price}</p>
              <p className={styles.duration}>{course.duration}</p>
              <ul className={styles.features}>
                {course.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={styles.enrollBtn}>Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
