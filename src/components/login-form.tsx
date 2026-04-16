import React from "react";
import { useFormStatus } from "react-dom";

export const LoginForm: React.FC = () => {
  const { pending } = useFormStatus();
  const addUser = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
    console.log("handleSubmit called");
  };
  console.log("LoginForm rendered", pending);
  return (
    <form
      action={addUser}
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   const username = (
      //     document.getElementById("username") as HTMLInputElement
      //   ).value;
      //   const password = (
      //     document.getElementById("password") as HTMLInputElement
      //   ).value;
      //   alert(`Username: ${username}, Password: ${password}`);
      // }}
    >
      <h2>Login Form</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter username"
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter password"
      />
      <br />
      <button>{pending ? "Submitting" : "Login"}</button>
    </form>
  );
};

// React 19 expects:
// <form action={serverAction}>
// Ant Design does:
// <Form onFinish={handleSubmit}>

// 👉 That means:

// ❌ No native form submission
// ❌ No action={fn}
// ❌ useFormStatus has NO idea what’s happening
// 🚫 So does useFormStatus work with AntD / MUI?

// 👉 Out of the box → NO

// Because:

// It depends on native form submission lifecycle
// UI libraries bypass that
// ✅ You have 3 REAL options (this is what seniors do)
// ✅ OPTION 1: Stick to Library Pattern (MOST COMMON)

// 👉 Use AntD/MUI normally

// const [loading, setLoading] = useState(false);

// <Form
//   onFinish={async (values) => {
//     setLoading(true);
//     await apiCall(values);
//     setLoading(false);
//   }}
// >
//   <Button loading={loading}>Submit</Button>
// </Form>

// ✔ Works perfectly
// ❌ No React 19 benefits

// ✅ OPTION 2: Use Native <form> + Style It

// 👉 Use React 19 properly

// <form action={serverAction}>
//   <input name="email" />
// </form>

// ✔ Full React 19 power
// ❌ Lose AntD form features

// ✅ OPTION 3 (🔥 ADVANCED / BEST HYBRID)

// 👉 Use AntD UI but wrap with native form

// <form action={serverAction}>
//   <Form.Item name="email">
//     <input name="email" />
//   </Form.Item>

//   <SubmitButton />
// </form>

// ⚠️ BUT:

// You lose onFinish
// You must rely on name attributes
// Validation becomes tricky
// 💀 Hidden Problem (VERY IMPORTANT)

// AntD uses controlled fields:

// <Form.Item name="email">
//   <Input />
// </Form.Item>

// 👉 This does NOT guarantee:

// <input name="email" />

// So:

// 👉 FormData may be EMPTY ❌

// 🧠 Real Senior Insight

// 👉 React 19 forms are designed more for:

// Server Components
// Frameworks like Next.js
// Simpler forms

// 👉 UI libraries are built for:

// Complex validation
// Controlled inputs
// Rich UX
// 🔥 Recommendation (REAL WORLD)
// If you're building:
// 🟢 Enterprise dashboard (like your work)

// 👉 Use:

// Ant Design + Zustand
// Traditional onFinish
// 🟢 Modern fullstack app (Next.js style)

// 👉 Use:

// Native forms + Server Actions
// useFormStatus
// ⚔️ Interview Answer

// "useFormStatus relies on native form submission via the action prop, while libraries like Ant Design and Material UI abstract form handling using JavaScript. Because of this, useFormStatus does not work out of the box with them unless we fall back to native form behavior."

// 🚀 What You Should Do (Based on YOU)

// You’re working with:

// Ant Design
// Dynamic forms
// Zustand
// Permissions

// 👉 DO NOT force React 19 forms there

// It will:

// Break validation
// Complicate logic
// Reduce control
