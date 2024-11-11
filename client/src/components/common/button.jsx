import * as React from 'react';
import PropTypes from 'prop-types';

import { mergeClasses } from '../../lib/utils';

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={mergeClasses(
        'inline-flex items-center justify-center rounded-3xl bg-gray-900 px-4 py-2 sm:px-4 sm:pt-1.5 sm:pb-2 sm:text-sm text-gray-50 transition-colors ease-in-out duration-200 hover:bg-grey-600 active:bg-gray-800',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
