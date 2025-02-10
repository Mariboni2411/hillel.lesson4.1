import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form } from "react-final-form";
import { Button, MenuItem, Select, TextField, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../actions";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);

  const onSubmit = (values) => {
    dispatch(fetchHotels(values));
    navigate("/hotels");
  };

  return (
    <Container>
      <h1>Booking App</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="destination">
              {({ input }) => (
                <Select {...input} fullWidth>
                  {destinations.map((dest) => (
                    <MenuItem key={dest.id} value={dest.value}>
                      {dest.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </Field>

            <Field name="guests">
              {({ input }) => (
                <TextField {...input} fullWidth label="Number of Guests" />
              )}
            </Field>

            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        )}
      />
    </Container>
  );
};

export default Main;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Стили

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);