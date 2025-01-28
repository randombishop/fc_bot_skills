import { IAgentRuntime, Action, Memory } from "@elizaos/core";

const mostActiveUsersAction: Action = {
    name: "MostActiveUsers",
    similes: [],
    description: "Get the most active users in a channel",
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        // Validation logic
        return true;
    },
    handler: async (runtime: IAgentRuntime, message: Memory) => {
        return "Most active users are: 1. @randombishop 2. @dwr.eth 3. @jason0bourne. Last 10 days chart url: https:/xxx.datascience.art/charts/sadsasdsa.jpg"
    },
    examples: [],
};

export default mostActiveUsersAction;