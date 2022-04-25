export type SocialAccountProvider = 'GOOGLE';
export interface SocialAccount {
  id: string;
  user_id: string;
  provider: SocialAccountProvider;
  social_id: string;
  created_at: string;
  updated_at: string;
}

export interface UserTokenProfile {
  display_name: string;
  photo_url?: string;
  access_token: string;
}
