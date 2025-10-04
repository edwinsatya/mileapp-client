import type { ErrorWithMessage } from "~/types/auth";

export function useGetErrorMessage(data: ErrorWithMessage): string {
  const errDetails = data?.details
  const errMessage = Array.isArray(errDetails)
    ? errDetails.map((d: { field: string; message: string }) => `${d.field}: ${d.message}`).join('\n')
    : data.error || 'An error occurred'
  return errMessage
}