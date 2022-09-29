/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CHANGE_LOCALE,
} from './constants';
import {
  DEFAULT_LOCALE,
} from '../App/constants'; // eslint-disable-line

// Import i18n messages
import { translationMessages } from '../../i18n';

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action) {
  const messages = translationMessages;
  let locale = ''
  if (localStorage.getItem('currentLanguage') === 'English') {
    locale = 'en';
  } else {
    locale = 'vi';
  }
  switch (action.type) {
    case CHANGE_LOCALE:
      locale = ''
      return state.set('messages', messages[locale || action.locale])
    default:
      return state.set('messages', messages[locale || action.locale])
  }
}

export default languageProviderReducer;
