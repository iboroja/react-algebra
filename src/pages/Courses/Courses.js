import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import { courses as data } from "../../utils/data";
import CourseCard from "../../components/CourseCard/CourseCard";
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Button } from "../../utils/style/generalStyles";
//rafce skeleton bez propova

const Courses = () => {
  const [courses, SetCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      SetCourses(data);
    }, 2000);
  }, []);

  const handleSearch = (e) => {
    const courseTitle = e.target.value.toLowerCase();

    const filteredCourses = data.filter((course) =>
      course.title.toLowerCase().includes(courseTitle)
    );

    SetCourses(filteredCourses);
  };
  // useEffect(() => {
  //   if (courses) {
  //     setTimeout(() => {
  //       SetCourses(null);
  //     }, 2000);
  //   } else {
  //     setTimeout(() => {
  //       SetCourses(data);
  //     }, 2000);
  //   }
  // });

  return (
    <>
      <Header className={"Header"} isSecondary></Header>
      <main>
        <Section
          title={"All courses"}
          button={
            <SearchBar
              placeholder={"Search Courses"}
              handleSearch={handleSearch}
            />
          }
        >
          {courses ? (
            <Grid>
              {courses.map((course) => (
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
      </main>
    </>
  );
};

export default Courses;
