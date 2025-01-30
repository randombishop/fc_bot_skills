import { IAgentRuntime, Action, Memory, HandlerCallback, State, composeContext } from "@elizaos/core";

async function actionValidator(runtime: IAgentRuntime, message: Memory) {
    return true;
}

async function actionHandler(runtime: IAgentRuntime, message: Memory, state?: State, 
                       options?: {[key: string]: unknown;}, 
                       callback?: HandlerCallback) {
    console.log("mostActiveUsersAction.handler");
    const template = "{{recentMessages}}"
    const recentConversation = composeContext({state, template});
    console.log(recentConversation);
    const text = "Most active users are: 1. @randombishop 2. @dwr.eth 3. @jason0bourne. Last 10 days chart url: https:/xxx.datascience.art/charts/sadsasdsa.jpg" ;
    console.log(options);
    if (callback) {
        await callback({text});
        return true;
    } else {
        console.log("There is no callback");
        return false;
    }
}

const actionExamples = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Who is most active in this channel?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "",
                action: "MOST_ACTIVE_USERS",
            },
        },
    ],
] ;

const mostActiveUsersAction: Action = {
    name: "MOST_ACTIVE_USERS",
    similes: [],
    description: "Get the most active users in a channel",
    validate: actionValidator,
    handler: actionHandler,
    examples: actionExamples
};

export default mostActiveUsersAction;