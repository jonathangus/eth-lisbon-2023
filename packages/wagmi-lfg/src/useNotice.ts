import { useNotifications } from 'reapop';

export const useNotice = () => {
  const { notify } = useNotifications();

  return notify;
};
