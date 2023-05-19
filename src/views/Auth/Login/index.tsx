import React, { useContext, useState } from "react";
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
import AuthLayout from "../../../layouts/AuthLayout";
import CustomInput from "../../../components/CustomInput";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { setToLocal } from "../../../utils/storageInstance";
import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
import {
  LoginRequestPayloadType,
  useLoginMuation,
} from "../../../services/hooks/useLoginMutation";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();

  const { isLoading, mutateAsync } = useLoginMuation();

  const onSubmit = (values: unknown) => {
    mutateAsync(values as LoginRequestPayloadType)
      .then((data) => {
        setToLocal("user", JSON.stringify(data?.data));
        setAuth(data?.data);
        toast.success(data?.message);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <AuthLayout>
      <AuthContainer>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
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
              {...register("username")}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              {...register("password")}
            />

            <Button name="Login" isBusy={isLoading} type="submit" />
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
