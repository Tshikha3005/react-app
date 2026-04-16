// Before React 19 wrap once wither with export or export default

// import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

// interface TestForwardRefComponentProps
//   extends InputHTMLAttributes<HTMLInputElement> {
//   label: string;
// }
// export const TestForwardRefComponent = forwardRef<
//   HTMLInputElement,
//   TestForwardRefComponentProps
// >(({ label, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <input ref={ref} type="text" />
//     </div>
//   );
// });

// // export default forwardRef(TestForwardRefComponent);

// After React 19 : just export the component without wrapping with forwardRef and forward ref is deprecated and we can use simple like props.ref

import React, { FC, InputHTMLAttributes } from "react";

interface TestForwardRefComponentProps {
  ref: React.Ref<HTMLInputElement>;
  label: string;
}

export const TestForwardRefComponent: FC<TestForwardRefComponentProps> = ({
  label,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} type="text" />
    </div>
  );
};
