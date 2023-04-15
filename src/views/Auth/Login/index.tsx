import React, { useState } from "react";
import {
  AuthContainer,
  AuthForm,
  FormHeader,
  Title,
  Subtitle,
  FormBody,
  FormLink,
} from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "../../../layouts/AuthLayout";
import CustomInput from "../../../components/CustomInput";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = async (data: any) => {
    console.log("LOGIN FORM", data);
  };

  return (
    <AuthLayout>
      <AuthContainer>
        <AuthForm onSubmit={handleSubmit(submitForm)}>
          <FormHeader>
            <Title>Log in</Title>
            <Subtitle>
              Provide Credentials below to login to your account
            </Subtitle>
          </FormHeader>
          <FormBody>
            <CustomInput
              label="Email Address"
              type="email"
              placeholder="e.g yourmail@mail.com"
              {...register("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              {...register("password")}
            />
            <Button name="Login" isBusy={loading} onClick={() => {}} />
            <FormLink>
              Don’t have an account ?{" "}
              <Link to="/signup" className="font-bold">
                Sign Up now !
              </Link>{" "}
            </FormLink>
          </FormBody>
        </AuthForm>
      </AuthContainer>
    </AuthLayout>
  );
};

export default Login;
