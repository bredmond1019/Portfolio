import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    mutateAuth(email: $email, password: $password) {
      accessToken
      refreshToken
      userId
      profileId
    }
  }
`;

export const REFRESH = gql`
  mutation Refresh($refreshToken: String!) {
    refresh(refreshToken: $refreshToken) {
      newToken
    }
  }
`;
