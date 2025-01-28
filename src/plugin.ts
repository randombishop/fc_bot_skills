import { Plugin } from "@elizaos/core";
import mostActiveUsersAction from "./actions/mostActiveUsers.ts";

export const dsartPlugin: Plugin = {
    name: "fc_bot_skills",
    description: "Pulls data required to answer questions.",
    actions: [mostActiveUsersAction]
};

export default dsartPlugin;