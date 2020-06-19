import { configure, setInteractionMode } from 'vee-validate';

import i18n from '@/translation/i18n';

const config = {
  bails: true,
  skipOptional: true,
  mode: 'eager',
  useConstraintAttrs: true,
  defaultMessage: (field, values) => {
    if (i18n.t(`validation.${values._rule_}`, values)) {
      return i18n.t(`validation.${values._rule_}`, values);
    }
  },
};

configure(config);

setInteractionMode('eager');
