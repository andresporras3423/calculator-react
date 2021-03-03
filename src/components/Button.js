import PropTypes from 'prop-types';

function Button(props) {
  const { name, clickHandler } = props;

  const callUpdateDisplay = e => {
    clickHandler(e.target.textContent);
  };
  return (
    <button className="button" type="submit" onClick={callUpdateDisplay}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: null,
  clickHandler: null,
};

export default Button;
