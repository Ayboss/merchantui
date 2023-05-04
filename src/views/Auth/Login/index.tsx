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
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../../services/axios";
import { TEMP_KEY } from "./constant";
import useAuth from "../../../hooks/useAuth";

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
      const response = await axios.post(LOGIN_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.data);
      const accessToken = response?.data?.data?.token;
      setAuth({ data, accessToken });
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        console.log("No server response");
      } else if (err.response?.status === 400) {
        console.log("Invalid credentials");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login failed");
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

            {/* <input
              style={{ border: "1px solid black" }}
              {...register("username")}
            />
            <input
              style={{ border: "1px solid black" }}
              {...register("password")}
            /> */}

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
