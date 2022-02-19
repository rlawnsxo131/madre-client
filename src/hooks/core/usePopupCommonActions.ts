import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';
import { setPopupCommon } from '../../redux/core';

interface PopupCommonShowParams {
  title?: string;
  message?: string;
}

export default function usePopupCommonActions() {
  const dispatch = useDispatch<AppDispatch>();
  return useMemo(
    () => ({
      onShow({ title = '', message = '' }: PopupCommonShowParams) {
        dispatch(
          setPopupCommon({
            visible: true,
            title,
            message,
          }),
        );
      },
      onClose() {
        dispatch(
          setPopupCommon({
            visible: false,
            title: '',
            message: '',
          }),
        );
      },
    }),
    [dispatch],
  );
}
