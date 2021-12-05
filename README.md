# AWS CDK - Apollo - Dynamo w/ Serverless-Stack

> Serverless stack is a set of higher-level functions that make working with CDK even easier than it already is. You coud just as well remove it and most of this would work. You can read more about Serverless Stack [here](serverless-stack.com). You can read more about AWS CDK [here](https://aws.amazon.com/cdk/).

This is an extension of a base tutorial located [**here**](https://serverless-stack.com/examples/how-to-create-an-apollo-graphql-api-with-serverless.html)

## Getting Started

Install the example.

```bash
$ npm i
# Or with Yarn
$ yarn
```

## Commands

### `npm run start`

Starts the local Lambda development environment.

### `npm run build`

Build your app and synthesize your stacks.

Generates a `.build/` directory with the compiled files and a `.build/cdk.out/` directory with the synthesized CloudFormation stacks.

### `npm run deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy a specific stack.

### `npm run remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally remove a specific stack.

### `npm run test`

Runs your tests using Jest. Takes all the [Jest CLI options](https://jestjs.io/docs/en/cli).

## Documentation

Learn more about the Serverless Stack.

- [Docs](https://docs.serverless-stack.com)
- [@serverless-stack/cli](https://docs.serverless-stack.com/packages/cli)
- [@serverless-stack/resources](https://docs.serverless-stack.com/packages/resources)
