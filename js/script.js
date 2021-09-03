import 'regenerator-runtime/runtime';
import ApolloClient, { gql } from "apollo-boost";

const getData = async () => {
  const client = new ApolloClient({
    uri: "https://noroff-wf2-ma3.herokuapp.com/graphql"
  });

  const response = await client.query({
    query: gql`
      {
        users(id: 5) {
          posts {
            title
            body
          }
        }
      }
    `,
  });

  console.log(response.data.users);

  for (let i = 0; i < response.data.users[0].posts.length; i++) {
    console.log(response.data.users[0].posts[i].title);
  }
};

getData();
