type User = {
  id: string;
  email: string;
  created_at: Date;
};

export async function createUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> {
  return Promise.resolve({
    id: "123456789",
    email,
    created_at: new Date(),
  });
}

export async function getUser(id: string): Promise<User> {
  return Promise.resolve({
    id: "123456789",
    email: "test@inngest.com",
    created_at: new Date(),
  });
}
