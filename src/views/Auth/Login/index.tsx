import React, { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  FormHeader,
  Title,
  Subtitle,
  FormBody,
  FormLink,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "../../../layouts/AuthLayout";
import CustomInput from "../../../components/CustomInput";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
    console.log(data);
  };

  return (
    <AuthLayout>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit(submitForm)}>
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
              name="email"
              ref={register}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              name="password"
              ref={register}
            />
            <Button name="Login" isBusy={loading} onClick={() => {}} />
            <FormLink>
              Don’t have an account ?{" "}
              <span className="font-bold">Sign Up now !</span>{" "}
            </FormLink>
          </FormBody>
        </LoginForm>
      </LoginContainer>
    </AuthLayout>
  );
};

export default Login;
