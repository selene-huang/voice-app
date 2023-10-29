import { Auth, Hub } from 'aws-amplify';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

export type AuthDispatch = React.Dispatch<AuthContextAction>;

type AuthState = {
  user: any;
  userSignUpData: any;
  isLoading: boolean;
  dispatch: AuthDispatch;
  errorMessage: string | null;
  successMessage: string | null;
};

type AuthContextAction =
  | { type: 'RESTORE_USER'; user: any | null }
  | { type: 'SET_USER_SIGN_UP_DATA'; data: any }
  | { type: 'SIGN_IN'; user: any }
  | { type: 'SIGN_OUT' }
  | { type: 'SET_ERROR_MESSAGE'; errorMessage: string }
  | { type: 'SET_SUCCESS_MESSAGE'; successMessage: string };

const useAuthReducer = () =>
  useReducer(
    (prevState: AuthState, action: AuthContextAction) => {
      switch (action.type) {
        case 'RESTORE_USER':
          return {
            ...prevState,
            isLoading: false,
            user: action.user,
            errorMessage: null,
            successMessage: null,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isLoading: false,
            user: action.user,
            errorMessage: null,
            successMessage: null,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isLoading: false,
            user: null,
            errorMessage: null,
          };
        case 'SET_SUCCESS_MESSAGE':
          return {
            ...prevState,
            successMessage: action.successMessage,
          };
        case 'SET_ERROR_MESSAGE':
          return {
            ...prevState,
            errorMessage: action.errorMessage,
          };
        case 'SET_USER_SIGN_UP_DATA':
          return {
            ...prevState,
            userSignUpData: action.data,
          };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      user: null,
      userSignUpData: null,
      dispatch: () => null,
      errorMessage: null,
      successMessage: null,
    }
  );

const AuthContext = createContext<AuthState>({} as AuthState);

AuthContext.displayName = 'AuthContext';

export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, dispatch] = useAuthReducer();

  // Subscribe to auth state changes and restore the user if they're already signed in
  useEffect(() => {
    console.log('Help');
    Hub.listen('auth', ({ payload }) => {
      console.log('Hi');
      const { event } = payload;
      if (event === 'autoSignIn') {
        const user = payload.data;
        console.log('h');
        dispatch({ type: 'RESTORE_USER', user });
      } else {
        console.log('e');
        dispatch({ type: 'RESTORE_USER', user: null });
      }
    });
    console.log('done');
  }, [dispatch]);

  const authContextValue = useMemo(
    () => ({
      ...authState,
      dispatch,
    }),
    [authState, dispatch]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
