import type { User } from "./user"

export interface ErrorDetail {
  field: string
  message: string
}

export interface ErrorWithMessage {
  error: string
  details?: ErrorDetail[]
}

export interface ErrorData { data: ErrorWithMessage }

export interface LoginResponse {
  message: string
  token: string
  user: User
}

export interface RegisterResponse {
  message: string
  user: User
}