import { message } from "antd";
import React, { useActionState } from "react";

export const TestUseActionState = () => {
  const submitFn = async (
    previousData: undefined | any,
    formData: FormData,
  ) => {
    let name = formData.get("username");
    let password = formData.get("password");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted with", name, password);
    if (name && password) {
      return {
        message: `Form submitted with username: ${name} and password: ${password}`,
      };
    } else {
      return { error: "Username and password are required" };
    }
  };
  const [data, action, pending] = useActionState(submitFn, undefined);
  console.log("Data:", data, "Pending:", pending);
  return (
    <form action={action}>
      <input type="text" name="username" />
      <br />
      <br />
      <input type="password" name="password" />
      <br />
      <br />
      <button type="submit">{pending ? "Submitting..." : "Submit"}</button>
      {data?.message && <p style={{ color: "green" }}>{data.message}</p>}
      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
    </form>
  );
};
