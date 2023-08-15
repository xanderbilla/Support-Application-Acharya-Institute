import React from "react";
import styles from "../styles/Git.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

const TabContent = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.message}
      <div className={styles.docs}>
        <div className={styles.docs__info}>
          {data.docs && data.docs.length !== 0 ? (
            <>
              <strong>Official Docs:</strong>
              {data.docs.map((doc, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={doc.url}
                  className={styles.link}
                  rel="noreferrer"
                >
                  {doc.title}
                  <BsBoxArrowUpRight size={14} />
                </a>
              ))}
            </>
          ) : null}
        </div>
        <div className={styles.docs__info}>
          {data.videos && data.videos.length !== 0 ? (
            <>
              <strong>Video Reference:</strong>
              {data.videos.map((video, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={video.url}
                  className={styles.link}
                  rel="noreferrer"
                >
                  {video.title}
                  <BsBoxArrowUpRight size={14} />
                </a>
              ))}
            </>
          ) : null}
        </div>
        <div className={styles.docs__info}>
          {data.books && data.books.length !== 0 ? (
            <>
              <strong>Reference Books:</strong>
              {data.books.map((book, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={book.url}
                  className={styles.link}
                  rel="noreferrer"
                >
                  {book.title}
                  <AiOutlineDownload size={18} />
                </a>
              ))}
            </>
          ) : null}
        </div>
        <div className={styles.docs__info}>
          {data.course_name && data.course_name.length !== 0 ? (
            <>
              <strong>Download the course:</strong>
              {data.course_name.map((course, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={course.url}
                  className={styles.link}
                  rel="noreferrer"
                >
                  {course.title}
                  <AiOutlineDownload size={18} />
                </a>
              ))}
            </>
          ) : null}
          {data.duration && (
            <p className={styles.duration}>
              <span className={styles.course__text}>Course Duration: </span>
              {data?.duration}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabContent;
