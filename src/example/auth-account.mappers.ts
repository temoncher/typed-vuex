import { mapState, mapActions, mapGetters } from 'vuex';

import { pick } from '@/helpers/pick';
/**
 * @template T
 * @typedef {import('@/store/types/mapped-state').MappedState<T>} MappedState<T>
 */
/**
 * @template T
 * @typedef {import('@/store/types/mapped-getters').MappedGetters<T>} MappedGetters<T>
 */
/**
 * @typedef {import('./auth-account.actions').AuthAccountActions} AuthAccountActions
 * @typedef {import('./auth-account.state').AuthAccountState} AuthAccountState
 * @typedef {import('./auth-account.getters').AuthAccountGetters} AuthAccountGetters
 */

/** @type {AuthAccountActions} */
const mappedAuthAccountActions = {
  ...mapActions('auth/account', [
    'login',
    'logout',
    'updateUserData',
    'getUserProjects',
  ]),
};

/**
 * @template {keyof typeof mappedAuthAccountActions} A
 * @param {A[]} [actions]
 * @returns {{ [K in A]: (typeof mappedAuthAccountActions)[A]; }}
 */
export const mapAuthAccountActions = (actions) => pick(mappedAuthAccountActions, actions);

/** @type {MappedState<AuthAccountState> & MappedGetters<AuthAccountGetters>} */
const mappedAuthAccountState = {
  ...mapState('auth/account', [
    'status',
    'user',
    'userProjects',
  ]),
  ...mapGetters('auth/account', [
    'isUserAdmin',
    'isUserOfficeDirector',
    'isUserOfficeViewer',
    'isUserEmployee',
    'isUserPV',
  ]),
};

/**
 * @template {keyof typeof mappedAuthAccountState} S
 * @param {S[]} [states]
 * @returns {{ [K in S]: (typeof mappedAuthAccountState)[S]; }}
 */
export const mapAuthAccountState = (states) => pick(mappedAuthAccountState, states);

