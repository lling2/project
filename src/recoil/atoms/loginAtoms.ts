import {atom} from 'recoil';
import {initLogin} from '@models/loginInfo';

// atom不能对值进行修改
export const loginState = atom({
    key:"LoginState",
    default:initLogin()
})