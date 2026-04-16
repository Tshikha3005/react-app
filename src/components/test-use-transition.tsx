import React, { FC, useTransition } from "react";

export const TestUseTransition: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = React.useState(0);

  const handleClick = async () => {
    startTransition(async () => {
      // Simulate an async operation (like API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCount((prev) => prev + 1);
    });
  };

  console.log("TestUseTransition rendered", isPending);

  return (
    <div>
      <h2>Test Use Transition</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Pending..." : "Increment"}
      </button>
    </div>
  );
};

// 💀 Q1: Why not just use useState instead of useTransition?

// 👉 Because useState treats ALL updates as urgent

// setQuery(value);
// setList(filtered); // blocks UI

// 👉 useTransition lowers priority:

// setQuery(value); // urgent
// startTransition(() => setList(filtered)); // non-urgent

// ✅ UI stays responsive

// 💀 Q2: Does useTransition make code faster?

// 👉 ❌ NO
// 👉 ✅ It makes UI feel faster

// 🧠 Key line:

// “It improves perceived performance, not actual computation speed.”

// 💀 Q3: Can useTransition replace debounce?

// 👉 ❌ NO — completely different problems

// debounce → limits frequency
// transition → prioritizes rendering
// 💀 Q4: What happens if multiple transitions fire?

// 👉 React:

// Interrupts previous one
// Runs latest one

// 🧠 This is called:
// ➡️ Interruptible rendering

// 💀 Q5: Can you use async inside startTransition?

// 👉 ❌ WRONG

// startTransition(async () => {
//   await fetch(); ❌
// });

// 👉 ✅ Correct:

// const data = await fetch();

// startTransition(() => {
//   setData(data);
// });
// 💀 Q6: When will isPending be true?

// 👉 While React is rendering the transition update

// NOT during:

// API call
// async fetch
// 💀 Q7: What problem does it solve internally?

// 👉 Prevents main thread blocking

// 🔥 1. useTransition

// 👉 Controls render priority

// startTransition(() => setList(filtered));

// ✔ Keeps UI smooth
// ❌ Doesn’t reduce API calls

// 🔥 2. Debounce

// 👉 Waits before firing

// setTimeout(() => search(), 300);

// ✔ Reduces API calls
// ✔ Used in search inputs

// 🔥 3. Throttle

// 👉 Limits execution rate

// run every 200ms

// ✔ Good for scroll/resize

// 🧠 REAL DIFFERENCE (Remember This)
// Feature	useTransition	Debounce	Throttle
// Purpose	UI priority	Delay calls	Limit rate
// Solves lag?	✅	❌	❌
// Reduces API calls?	❌	✅	✅
// Used for	rendering	input	scroll
// 💀 Interview Trick Question

// 👉 “Which is better for search?”

// ✅ Correct Answer:

// “Debounce for API calls + useTransition for rendering results”

// 🧪 PART 3: Build High-Performance Search (REAL PROJECT)

// We’ll design like a senior engineer 👇
