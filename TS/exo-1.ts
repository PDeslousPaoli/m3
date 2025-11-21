type Coordinates = {
  lat: number;
  lng: number;
}

type Address = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

type Hair = {
  color: string;
  type: string;
}

type Bank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

type Company = {
  department: string;
  name: string;
  title: string;
  address: Address;
}

type Crypto = {
  coin: string;
  wallet: string;
  network: string;
}

type UserRole = "admin" | "user" | "staff" | "manager";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: UserRole;
}

export type FetchUserParams = {
  limit?: number;
  sort?: "asc" | "desc";
  role?: UserRole;
};

export async function fetchUser(params: FetchUserParams = {}): Promise<User[]> {
  const query = new URLSearchParams();

  if (params.limit) query.set("limit", params.limit.toString());
  if (params.sort) query.set("sort", params.sort);
  if (params.role) query.set("role", params.role);

  const url = `https://dummyjson.com/users?${query.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }

  const data = await response.json();
  return data.users as User[];
}
