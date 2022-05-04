import { LOGIN, REGISTER } from "../actionTypes";

const urlServer = "http://localhost:8080";

export function register(dataUser) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlServer}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data.message;
      }

      return dispatch({ type: REGISTER, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function login(dataUser) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlServer}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("access_token", data.access_token);
      if (!response.ok) {
        throw data.message;
      }
      return dispatch({ type: LOGIN, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}
