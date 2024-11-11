import PropTypes from 'prop-types';

const LabeledTextInput = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="mb-3">
      <label className="block text-sm font-semibold mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

LabeledTextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default LabeledTextInput;
