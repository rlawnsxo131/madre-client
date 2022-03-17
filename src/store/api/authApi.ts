import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import postAuthGoogleSignin, {
  PostAuthGoogleSigninParams,
  PostAuthGoogleSigninResponse,
} from '../../api/auth/postAuthGoogleSignin';
import {
  PostAuthGoogleSignupParams,
  PostAuthGoogleSignupResponse,
} from '../../api/auth/postAuthGoogleSignup';
import common from '../common';
import popupAuth from '../popupAuth';
import screenSignup from '../screenSignup';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URI}/api/v1/auth`,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    // getAuthCheckGoogle: build.query<string, any>({
    //   query: () => '/google',
    //   async onQueryStarted(_, { queryFulfilled }) {
    //     console.log('started');
    //     await queryFulfilled;
    //     console.log('end');
    //   },
    // }),
    postGoogleSignin: build.mutation<
      PostAuthGoogleSigninResponse,
      PostAuthGoogleSigninParams
    >({
      query: ({ accessToken }) => ({
        url: '/google/check',
        method: 'POST',
        body: {
          access_token: accessToken,
        },
      }),
      async onQueryStarted(
        { accessToken },
        { dispatch, queryFulfilled, getCacheEntry },
      ) {
        try {
          // check google registered
          dispatch(
            common.actions.setLoading({
              visible: true,
            }),
          );
          await queryFulfilled;

          // excute signin or sinup action
          const { data } = getCacheEntry();
          if (data?.exist) {
            const data = await postAuthGoogleSignin({ accessToken });
            console.log(data);
          }
          if (!data?.exist) {
            dispatch(screenSignup.actions.setVisible({ visible: true }));
          }
          dispatch(popupAuth.actions.setVisible({ visible: false }));
          dispatch(
            common.actions.setLoading({
              visible: false,
            }),
          );
        } catch (e) {
          dispatch(
            common.actions.setLoading({
              visible: false,
            }),
          );
          dispatch(popupAuth.actions.setIsError({ isError: true }));
        }
      },
    }),
    postGoogleSignup: build.mutation<
      PostAuthGoogleSignupResponse,
      PostAuthGoogleSignupParams
    >({
      query: ({ accessToken, username }) => ({
        url: '/google/signup',
        method: 'POST',
        body: {
          access_token: accessToken,
          username,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled, getCacheEntry }) {
        dispatch(common.actions.setLoading({ visible: true }));
        await queryFulfilled;

        const { data } = getCacheEntry();
        console.log(data);
      },
    }),
  }),
});

export const { usePostGoogleSigninMutation, usePostGoogleSignupMutation } =
  authApi;

export default authApi;
