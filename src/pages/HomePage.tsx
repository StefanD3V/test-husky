export default function HomePage() {
  const appEnv = import.meta.env.VITE_APP_ENV;

  return (
    <div>
      <h1>Hello Aviana test breee hej hej hej</h1>
      <p>Environment: {appEnv}</p>
    </div>
  );
}
