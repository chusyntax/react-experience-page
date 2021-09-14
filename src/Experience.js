import React, { useState, useEffect} from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import data from "./database.json";
import styles from "./Experience.module.css";

function App() {

  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    setJobs(data)
  }, [])
 
 
  const { company, dates, duties, title } = data[value];
  return (



    <section className={styles.section}>
      <div className={styles.title}>
        <h2>experience</h2>
      </div>
      <div className={styles.jobs_center}>
        {/* btn container */}
        <div className={styles.btn_container}>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`${styles.job_btn} ${index === value && `${styles.active_btn}` }`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className={styles.job_info}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className={styles.job_date}>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className={styles.job_desc}>
                <FaAngleDoubleRight className={styles.job_icon}></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })};
        </article>
      </div>
    </section>
  )
}

export default App
