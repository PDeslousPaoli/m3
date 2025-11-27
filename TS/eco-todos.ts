listDummy<Todo>("todos")
listDummy<User>("users")
listDummy<Post>("posts")
listDummy<Product>("products")

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
const todos = await listDummy<Todo>("todos");
console.log(todos);

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};
const users = await listDummy<User>("users");
console.log(users);

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
const posts = await listDummy<Post>("posts");


export async function listDummy<T>(route: string): Promise<T[]> {
  const url = `https://dummyjson.com/${route}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Erreur API DummyJSON: ${res.status}`);
  }

  const data = await res.json();
  const key = route as keyof typeof data;

  return data[key] as T[];
}
