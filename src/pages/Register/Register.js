import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  Field,
  ErrorMessage,
  Select,
  Option,
  Button,
  FormWrapper,
  FormSuccessMessage,
} from "../../utils/style/generalStyles";
import { registerUser } from "../../api/users";

const Register = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  return (
    <>
      <Header isSecondary />
      <main>
        <Section title="Register">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordRepeat: "",
              githubUsername: "",
              zeplinUsername: "",
              activeFacultyYear: "",
              isAdmin: false,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              email: Yup.string().email("Invalid email address").required(),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters long")
                .required("Password is required"),
              passwordRepeat: Yup.string().test(
                "passwords-match",
                "Passwords must match",
                function (value) {
                  return this.parent.password === value;
                }
              ),
              githubUsername: Yup.string().required(
                "GitHub username is required"
              ),
              zeplinUsername: Yup.string().required(
                "Zeplin username is required"
              ),
              activeFacultyYear: Yup.string().required(
                "Active faculty year is required"
              ),
            })}
            onSubmit={(values, actions) => {
              const data = {
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                password: values.password,
                github_username: values.githubUsername,
                zeplin_username: values.zeplinUsername,
                active_faculty_year:
                  Number(values.activeFacultyYear) === 0
                    ? null
                    : Number(values.activeFacultyYear),
                is_admin: false,
              };

              registerUser(data)
                .then((res) => {
                  actions.resetForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    passwordRepeat: "",
                    githubUsername: "",
                    zeplinUsername: "",
                    activeFacultyYear: "",
                  });

                  setTimeout(() => {
                    setSuccessMessage(null);
                  }, 3000);

                  setSuccessMessage({
                    error: false,
                    message: "User is registered successfully",
                  });
                })
                .catch((res) => {
                  setSuccessMessage({
                    error: true,
                    message: "There was an error with registration",
                  });
                })
                .finally(() => {
                  actions.setSubmitting(false);
                });
            }}
          >
            {(formik) => (
              <FormWrapper>
                <Form>
                  {successMessage && (
                    <FormRow>
                      <FormSuccessMessage isError={successMessage.error}>
                        {successMessage.message}
                      </FormSuccessMessage>
                    </FormRow>
                  )}
                  <FormRow>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First name..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="firstName" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="lastName" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="email" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="password" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="password"
                      name="passwordRepeat"
                      placeholder="Password repeat..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="passwordRepeat" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="githubUsername"
                      placeholder="GitHub username..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="githubUsername" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="zeplinUsername"
                      placeholder="Zeplin username..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="zeplinUsername" />
                  </FormRow>
                  <FormRow>
                    <Select
                      id="activeFacultyYear"
                      {...formik.getFieldProps("activeFacultyYear")}
                    >
                      <Option value="" disabled hidden>
                        Choose an Active faculty year
                      </Option>
                      <Option value="0">Not a student</Option>
                      <Option value="1">1st faculty year</Option>
                      <Option value="2">2nd faculty year</Option>
                      <Option value="3">3rd faculty year</Option>
                      <Option value="4">4th faculty year</Option>
                      <Option value="5">5th faculty year</Option>
                    </Select>
                    <ErrorMessage component="div" name="activeFacultyYear" />
                  </FormRow>
                  <FormRow>
                    <Button type="submit" isSecondary>
                      Register
                    </Button>
                  </FormRow>
                </Form>
              </FormWrapper>
            )}
          </Formik>
        </Section>
      </main>
    </>
  );
};

export default Register;
