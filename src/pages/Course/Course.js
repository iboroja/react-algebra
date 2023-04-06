import React from "react";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import { courses } from "../../utils/data";
import CourseCard from "../../components/CourseCard/CourseCard";
import Section from "../../components/Section/Section";
import { Button } from "../../utils/style/generalStyles";
import SingleCourse from "../../components/SignleCourse/SingleCourse";
import CourseImg from "../../assets/images/lecture-3.jpg";
import { useNavigate, useParams } from "react-router-dom";

//rafce skeleton bez propova

const Course = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const course = courses.find((course) => course.id === Number(id));

  console.log(id);
  return (
    <>
      <Header isSecondary></Header>
      <main>
        <Section
          helperText={course.subtitle}
          title={course.title}
          button={
            <Button isOutline onClick={() => navigate(-1)}>
              Back
            </Button>
          }
        >
          <SingleCourse imgSrc={course.img.src} imgAlt={course.img.alt}>
            {course.content}
          </SingleCourse>
        </Section>
      </main>
    </>
  );
};

export default Course;
