import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormValues {
  name: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

type popupState = 'NONE' | 'CONFIRM_DELETE' | 'DELETE_COMPLETE';

export const useUserSettingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      name: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const newPassword = watch('newPassword');
  const confirmNewPassword = watch('confirmNewPassword');

  const [popupState, setPopupState] = useState<popupState>('NONE');

  const onSubmit = (data: FormValues) => {
    console.log('Submitted User Settings:', data);
  };

  const handleDeleteClick = () => setPopupState('CONFIRM_DELETE');
  const handlePopupClose = () => setPopupState('NONE');
  const handleDeleteConfirm = () => setPopupState('DELETE_COMPLETE');

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    onSubmit,
    newPassword,
    confirmNewPassword,
    popupState,
    handleDeleteClick,
    handlePopupClose,
    handleDeleteConfirm,
  };
};
