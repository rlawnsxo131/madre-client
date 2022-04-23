import { useEffect, useMemo, useTransition } from 'react';
import { useDispatch } from 'react-redux';
import { MADRE_USER_TOKEN_PROFILE } from '../../constants';
import { Storage } from '../../lib/storage';
import { AppDispatch } from '../../store';
import authApi from '../../store/api/authApi';
import user from '../../store/user';

// TODO: 여기 prevUser 처리 필요한지 고민해보기
export default function useUserLoadEffect() {
  const dispatch = useDispatch<AppDispatch>();
  const [isPending, startTransition] = useTransition();
  const { isFetching, data } = authApi.useGetQuery(undefined);

  const isPendingVisible = useMemo(() => {
    return isFetching || isPending;
  }, [isFetching, isPending]);

  useEffect(() => {
    startTransition(() => {
      const userData = Storage.getItem(MADRE_USER_TOKEN_PROFILE);
      if (!userData) return;
      dispatch(
        user.actions.setUser({
          userTokenProfile: userData,
        }),
      );
    });
  }, [dispatch]);

  useEffect(() => {
    if (!data) return;
    if (!data.user_token_profile) return;
    dispatch(
      user.actions.setUser({
        userTokenProfile: data.user_token_profile,
      }),
    );
  }, [dispatch, data]);

  useEffect(() => {
    dispatch(
      user.actions.setIsPending({
        isPending: isPendingVisible,
      }),
    );
  }, [dispatch, isPendingVisible]);
}
