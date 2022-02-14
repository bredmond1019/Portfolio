import { gql } from "@apollo/client";

export const PROFILE_INFO = gql`
  query GetProfileData($profileId: Int) {
    profiles(id: $profileId) {
      firstName
      lastName
      preferredStyleClimbing
      skills {
        name
      }
    }
  }
`;
