import ApolloClient, { gql } from "apollo-boost";

    const getData = async () => {
        const client = new ApolloClient({
            uri: "https://noroff-wf2-ma3.herokuapp.com/graphql"
        });

        const response = await client.query({
            query: gql`
                {
                    posts(id: 5) {
                        title
                        body
                    }
                }
            `,
        });

        console.log(response.data.posts);
    };

    getData();

    for (let i = 0; i < response.length; i++) {
        console.log(response[i]);
    }