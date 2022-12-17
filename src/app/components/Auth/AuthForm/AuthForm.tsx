import React from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { useAppDispatch } from "../../../hooks";
import { signup } from "../../../store/actions/auth";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  inputProps: {
    color: "#000000",
  },
});

const AuthForm: React.FC = () => {
  const { handleSubmit, control } = useForm<FormValues>({});
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const onSubmit = (data: FormValues) => {
    dispatch(signup(data));
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              name="username"
              type="username"
              className={classes.root}
              label="username"
              variant="outlined"
              helperText={error?.message}
              onChange={onChange}
              inputProps={{
                className: classes.inputProps,
                classes: {
                  focused: { borderRadius: "1px solid red" },
                },
              }}
            />
          )}
          rules={{
            required: "Please enter a new userName",
            minLength: {
              message: "the username must have at least 5 characters",
              value: 5,
            },
          }}
        />
      </Box>
      <Box>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              helperText={error?.message}
              onChange={onChange}
            />
          )}
          rules={{
            required: "Please enter a valid Email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          }}
        />
      </Box>
      <Box>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              name="password"
              label="Password"
              type="password"
              helperText={error?.message}
              onChange={onChange}
            />
          )}
          rules={{
            required: "Please enter a valid password",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "Password should include uppercase, lowercase and number",
            },
            minLength: {
              message: "the password must have at least 8 characters",
              value: 8,
            },
          }}
        />
      </Box>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AuthForm;
