import { toast } from 'react-toastify';

const notify = (message, type = 'info') => {
  toast(message, { type });
};

export default notify;
