import { extend, configure, setInteractionMode } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

import i18n from '@/translation/i18n';

const regExp = {
  name: new RegExp(/^[A-ZĄĆĘŚŁŃÓŻŹ\s-–'’]*$/, 'i'),
  regularField: new RegExp(/^[A-ZĄĆĘŚŁŃÓŻŹ0-9\s!@#$%^&*+_:;?"~/,[\]()–'.-]*$/, 'i'),
};

const config = {
  bails: true,
  skipOptional: true,
  mode: 'eager',
  useConstraintAttrs: true,
  defaultMessage: (field, values) => {
    if (i18n.t(`validations.${values._rule_}`, values)) {
      return i18n.t(`validations.${values._rule_}`, values);
    }
  },
};

extend('required', {
  ...required,
  message: i18n.t('validations.required'),
});

extend('email', {
  ...email,
  message: i18n.t('validations.email'),
});

extend('name', {
  message: i18n.t('validations.name'),
  validate: (value) => value.match(regExp.name),
});

extend('regularField', {
  message: i18n.t('validations.regularField'),
  validate: (value) => value.match(regExp.regularField),
});

configure(config);

setInteractionMode('eager');
