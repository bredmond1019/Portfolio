import { gql } from "@apollo/client";

export const PROFILE_INFO = gql`
  query GetProfileData($profileId: Int!) {
    profiles(id: $profileId) {
      __typename
      ... on ProfileObject {
        firstName
        lastName
        preferredStyleClimbing
        skills {
          name
        }
      }
      ... on AuthInfoField {
        message
      }
    }
  }
`;
