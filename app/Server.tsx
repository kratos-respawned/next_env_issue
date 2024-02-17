/** Add your relevant code here for the issue to reproduce */
export default function Server() {
  return (
    <div>
      <h1>Server Var :: {process.env.SECRET}</h1>
      <h1>Client Var :: {process.env.NEXT_PUBLIC_DATA}</h1>
    </div>
  );
}
