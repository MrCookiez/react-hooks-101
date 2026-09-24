export type User = {
  id: string;
  firstname: string;
  lastname: string;
  job_title: string;
  location: string;
  date_of_birth: string;
  accepted: boolean;
}

export interface UserState {
  users: User[];
  acceptedUsers: User[];
  isLoading: boolean;
  error: string | null;
}

export type UserAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: User[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'ACCEPT_USER'; payload: string }
  | { type: 'REMOVE_FROM_ACCEPTED'; payload: string }
  | { type: 'DELETE_USER'; payload: string };
