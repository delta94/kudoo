import idx from 'idx';
import { handleActions } from 'redux-actions';
import Types from '../types/profile';
import { ICompanyEntity } from '../types';

export interface IProfileState {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  id: string;
  isLoggedIn: boolean;
  expiresAt: string;
  signedAt: string;
  userId: string;
  selectedCompany: ICompanyEntity;
  joinedCompanies: ICompanyEntity[];
  createdCompanies: ICompanyEntity[];
}

interface IAction {
  payload: any;
  type: string;
}

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  token: '',
  id: '',
  isLoggedIn: false,
  expiresAt: '',
  signedAt: '',
  userId: '',
  selectedCompany: {},
  joinedCompanies: [],
  createdCompanies: [],
};

export default handleActions(
  {
    [Types.SET_USER_DATA]: (state: IProfileState, action: IAction) => ({
      ...state,
      ...action.payload,
    }),
    [Types.RESET_USER_DATA]: (state: IProfileState, action: IAction) => ({
      ...initialState,
    }),
    [Types.SELECT_COMPANY]: (state: IProfileState, action: IAction) => ({
      ...state,
      selectedCompany: action.payload,
    }),
    [Types.SET_ONLY_TOKEN]: (state: IProfileState, action: IAction) => ({
      token: idx(action, _ => _.payload.token),
    }),
    [Types.LOGOUT_USER]: (state: IProfileState, action: IAction) => ({
      ...initialState,
    }),
  },
  initialState
) as IProfileState;
