import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
  query GetTopics($topico: String!) {
    topic(name: $topico) {
      name
      id
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
        stargazers(first: 10) {
          totalCount
        }
      }
    }
  }
`;
