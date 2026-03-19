type User = {
  name: string;
};

const user: User = {
  name: 123,
};

export default function App() {
  return <div>{user.name}</div>;
}
