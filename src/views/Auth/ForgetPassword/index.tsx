import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import CustomInput from "../../../components/CustomInput";
import AuthLayout from "../../../layouts/AuthLayout";
import {
  AuthContainer,
  AuthForm,
  FormBody,
  FormHeader,
  FormLink,
  Subtitle,
  Title,
} from "../styles";

const ForgetPassword = () => {
  const [loading, setLoading] = useState();
  return (
    <AuthLayout>
      <AuthContainer>
        <AuthForm>
          <FormHeader>
            <Title>Forget Password</Title>
            <Subtitle>
              Provide Credentials below to reset to your account
            </Subtitle>
          </FormHeader>
          <FormBody>
            <CustomInput
              label="Email Address"
              type="email"
              name="username"
              placeholder="e.g yourmail@mail.com"
            />

            <Button name="Reset Password" isBusy={loading} type="submit" />
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

export default ForgetPassword;
