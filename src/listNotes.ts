import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export default async function listNotes(): Promise<
    Record<string, unknown>[] | undefined
> {
    console.log("NOTES TABLE PARAM", process.env.NOTES_TABLE)
    const params = {
        TableName: process.env.NOTES_TABLE as string || "wm-dev-graphql-apollo-Notes",
    };

    const data = await dynamoDb.scan(params).promise();

    return data.Items;
}