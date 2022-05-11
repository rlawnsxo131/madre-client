import { UserProfile } from '../domain/auth.types';

export interface GetAuthResponse {
  user_profile: UserProfile | null;
}

export interface PostAuthGoogleCheckParams {
  access_token: string;
}

export interface PostAuthGoogleCheckResponse {
  exist: boolean;
}

export interface PostAuthGoogleSignInParams {
  access_token: string;
}

export interface PostAuthGoogleSigninResponse {
  user_profile: UserProfile;
}

export interface PostAuthGoogleSignUpParams {
  access_token: string;
  username: string;
}

export interface PostAuthGoogleSignUpResponse {
  user_profile: UserProfile;
}
