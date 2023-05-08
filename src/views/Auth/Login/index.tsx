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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "../../../layouts/AuthLayout";
import CustomInput from "../../../components/CustomInput";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../../services/axios";
import useAuth from "../../../hooks/useAuth";
import { setToLocal } from "../../../utils/storageInstance";
import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
const LOGIN_URL = "/accounts/login";

// Validation schema
// const loginSchema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().required(),
// });

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { register, handleSubmit } = useForm();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(loginSchema),
  // });

  const submitForm = async (data: any, e: any) => {
    console.log("testSubmitForm");
    e.preventDefault();
    console.log({ data });
    try {
      setLoading(true);
      const response = await axios.post(LOGIN_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response?.data?.data;
      const accessToken = result?.token;
      setToLocal("user", JSON.stringify(result));
      setAuth(result);
      setLoading(false);
      toast.success(response.data.message);
      navigate(from, { replace: true });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        toast.error("No server response");
      } else if (err.response?.status === 400) {
        toast.error(err.response?.data?.message);
      } else if (err.response?.status === 401) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error("Login failed");
      }
    }
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
              name="username"
              placeholder="e.g yourmail@mail.com"
              register={register}
            />
            <PasswordInput
              label="Password"
              name="password"
              placeholder="Password"
              register={register}
            />

            <Button name="Login" isBusy={loading} type="submit" />
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
