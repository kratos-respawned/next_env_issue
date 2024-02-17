"use client";
/** Add your relevant code here for the issue to reproduce */
export default function Client() {
  return (
    <div>
      <h1>{process.env.SECRET}</h1>
      <h1>{process.env.NEXT_PUBLIC_DATA}</h1>
    </div>
  );
}
