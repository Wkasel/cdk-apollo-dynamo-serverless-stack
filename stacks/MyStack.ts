import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const notesTable = new sst.Table(this, "Notes", {
      fields: {
        id: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "id" },
    });

    // Create the Apollo GraphQL API
    const api = new sst.ApolloApi(this, "ApolloApi", {
      server: "src/lambda.handler",
      defaultFunctionProps: {
        // Pass the table name to the function
        environment: {
          NOTES_TABLE: notesTable.dynamodbTable.tableName,
        },
      },
    });



    api.attachPermissions([notesTable]);

    // Show the API endpoint in output
    this.addOutputs({
      ApiEndpoint: api.url,
      tableName: notesTable.dynamodbTable.tableName
    });
  }
}
