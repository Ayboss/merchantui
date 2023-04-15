import React, { useState } from "react";
import {
  AuthContainer,
  AuthForm,
  FormHeader,
  Title,
  Subtitle,
  FormBody,
  FormLink,
  FormGroup,
} from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "../../../layouts/AuthLayout";
import CustomInput from "../../../components/CustomInput";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";
import CheckboxInput from "../../../components/CheckboxInput";
import { Link } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const signUpSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const submitForm = async (data: any) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <AuthContainer className="min-h-screen">
        <AuthForm onSubmit={handleSubmit(submitForm)}>
          <FormHeader>
            <Title>Create an account</Title>
            <Subtitle>Provide information below to create an account</Subtitle>
          </FormHeader>
          <FormBody>
            <CustomInput
              label="Business Name"
              type="text"
              placeholder="Enter business name"
              {...register("businessName")}
            />
            <FormGroup>
              <CustomInput
                label="First Name"
                type="text"
                placeholder="Enter first name"
                {...register("firstName")}
              />
              <CustomInput
                label="Last Name"
                type="text"
                placeholder="Enter last name"
                {...register("lastName")}
              />
            </FormGroup>
            <CustomInput
              label="Work Email Address"
              type="email"
              placeholder="Enter business email address"
              {...register("email")}
            />
            <CustomInput
              label="Phone Number"
              type="text"
              placeholder="enter phone number"
              {...register("phoneNumber")}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              {...register("password")}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="confirm password"
              {...register("confrimPassword")}
            />
            <CheckboxInput />
            <Button name="Create account" isBusy={loading} onClick={() => {}} />
            <FormLink>
              Already have an account ?{" "}
              <Link to="/login" className="font-bold">
                Sign In
              </Link>
            </FormLink>
          </FormBody>
        </AuthForm>
      </AuthContainer>
    </AuthLayout>
  );
};

export default Signup;
