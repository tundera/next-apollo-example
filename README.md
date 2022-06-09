# Apollo and TypeScript Example

This example shows how to integrate Apollo in Next.js.

## Deploy your own

Deploy the example using
[Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or
preview live with [StackBlitz](https://stackblitz.com/github/tundera/next-apollo-example)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftundera%2Fnext-apollo-example&env=NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,NEXT_PUBLIC_GITHUB_API_TOKEN&envDescription=This%20example%20requires%20configuring%20environment%20variables%20to%20deploy%20successfully.%20See%20here%20for%20more%20details%20on%20how%20to%20get%20set%20up.&envLink=https%3A%2F%2Fgithub.com%2Ftundera%2Fnext-apollo-example%23notes&project-name=next-apollo-example&repo-name=next-apollo-example)

## Notes

This example uses with the [GitHub GraphQL API](https://docs.github.com/en/graphql) which requires
authentication. Make sure to set the environment variable `NEXT_PUBLIC_GRAPHQL_API_ENDPOINT` to the
API endpoint `https://api.github.com/graphql`. In order to make authenticated requests to the API,
you must also [generate a personal access token on GitHub](https://github.com/settings/tokens/new)
and store it in the environment variable `NEXT_PUBLIC_GITHUB_API_TOKEN`.
