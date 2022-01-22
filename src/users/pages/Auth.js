import React, { Fragment, useContext, useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Util/validators";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./Auth.css";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

const Auth = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const loginFormSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(formState.inputs);

    if (isLoggedIn) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        authCtx.login(responseData.userId, responseData.token);
        navigate("/");
      } catch (error) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("name", formState.inputs.name.value);
        formData.append("image", formState.inputs.image.value);
        formData.append("email", formState.inputs.email.value);
        formData.append("password", formState.inputs.password.value);

        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/signup",
          "POST",
          formData
        );

        authCtx.login(responseData.userId, responseData.token);
        navigate("/");
      } catch (error) {}
    }
  };

  const switchModeHandler = () => {
    if (!isLoggedIn) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoggedIn((prevValue) => !prevValue);
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="authentication_header">Login Required</h2>
        <hr />
        <form onSubmit={loginFormSubmitHandler}>
          {!isLoggedIn && (
            <Input
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE]}
              errorText="Please enter a valid name"
              onInput={inputHandler}
            />
          )}
          {!isLoggedIn && (
            <ImageUpload center id="image" onInput={inputHandler} />
          )}
          <Input
            id="email"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email"
            onInput={inputHandler}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password (min. 6 characters)"
            onInput={inputHandler}
          />
          <Button disabled={!formState.isValid}>
            {isLoggedIn ? "Login" : "Sign Up"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          Switch to {isLoggedIn ? "Sign Up" : "Login"}
        </Button>
      </Card>
    </Fragment>
  );
};

export default Auth;
