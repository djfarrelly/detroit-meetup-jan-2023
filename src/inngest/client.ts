import { Inngest } from "inngest";

type AppUserSignup = {
  name: "app/user.signup";
  data: {
    email: string;
    user_id: string;
  };
};

type AppAuctionCreated = {
  name: "app/auction.created";
  data: {
    user_id: string;
    auction_id: string;
    start_time: number; // ts
    end_time: number; // ts
  };
};

type InngestEvents = {
  "app/user.signup": AppUserSignup;
  "app/auction.created": AppAuctionCreated;
};

export const inngest = new Inngest<InngestEvents>({ name: "Detroit Meetup" });
