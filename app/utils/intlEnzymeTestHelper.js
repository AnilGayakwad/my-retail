/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */
import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';


// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({ locale: 'en' }, {});
const { intl } = intlProvider.getChildContext();

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node) {
  return React.cloneElement(node, { intl });
}

export function shallowWithIntl(node, { context, disableLifecycleMethods = false } = {}) {
  return shallow(
    nodeWithIntlProp(node),
    {
      disableLifecycleMethods,
      context: Object.assign({}, context, { intl }),
    }
  );
}
