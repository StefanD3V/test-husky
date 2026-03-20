export default function HomePage() {
  const appEnv = import.meta.env.VITE_APP_ENV;

  return (
    <div>
      <h1>Hello DImi</h1>
      <p>Environment: {appEnv}</p>
    </div>
  );
}
