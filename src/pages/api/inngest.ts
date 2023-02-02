import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import sendWelcomeEmail from "@/inngest/sendWelcomeEmail";
import onboardingDripCampaign from "@/inngest/onboardingDripCampaign";
import dynamicDripCampaign from "@/inngest/dynamicDripCampaign";
import runAuction from "@/inngest/runAuction";

// Any function here will be be available for Inngest to run
export default serve(inngest, [
  sendWelcomeEmail,
  onboardingDripCampaign,
  dynamicDripCampaign,
  runAuction,
]);
