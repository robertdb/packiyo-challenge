import { ServerError } from '@/lib/type';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const useToast = (errors?: ServerError[], successMessage?: string) => {
  useEffect(() => {
    if (errors?.length) {
      errors.forEach((err: ServerError) => {
        toast.error(err.title, {
          description: err.detail,
        });
      });
    }
  }, [errors]);

  useEffect(() => {
    if (successMessage) {
      console.log({ successMesage: successMessage });
      toast.success(successMessage);
    }
  }, [successMessage]);
};
