import React, { useEffect, useState } from "react";
import { Button } from "../../utils/style/generalStyles";
import CourseCard from "../../components/CourseCard/CourseCard";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Section/Section";
import Testimonial from "../../components/Testimonial/Testimonial";
import { courses, testimonials } from "../../utils/data";
import TestimonialImg from "../../assets/images/testimonial.jpg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { courses as data } from "../../utils/data";

const Home = () => {
  const navigate = useNavigate();

  const [courses, SetCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      SetCourses(data);
    }, 2000);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section
          helperText={"Learn Something New"}
          title={"Open new possibilities"}
          button={
            <Button isOutline onClick={() => navigate("/courses")}>
              More Course
            </Button>
          }
        >
          {courses ? (
            <Grid>
              {courses.slice(0, 4).map((course) => (
                <CourseCard
                  key={course.id}
                  imgSrc={course.img.src}
                  imgAlt={course.img.alt}
                  title={course.title}
                  subtitle={course.subtitle}
                  url={course.id}
                />
              ))}
            </Grid>
          ) : (
            <Loader />
          )}
        </Section>
        <Section isSecondary>
          <Testimonial imgSrc={TestimonialImg} imgAlt="Testimonial">
            At the academy, I learned how to apply technology in practice.
            Frontend education was demanding, it required a lot of time. Upon
            completion, I got my first job as a developer.
          </Testimonial>
        </Section>
      </main>
    </>
  );
};

export default Home;
