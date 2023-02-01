import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../lib/users";
import { inngest } from "../../inngest/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ user_id: string }>
) {
  const user = await createUser(req.body);
  // Send an event to Inngest
  await inngest.send({
    name: "app/user.signup",
    data: {
      email: user.email,
      user_id: user.id,
    },
  });
  // Carry on with the rest of the code
  res.status(200).json({ user_id: user.id });
}
