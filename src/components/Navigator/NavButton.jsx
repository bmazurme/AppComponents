function NavButton({handleToggle, isOpen}) {
  return (
    <button
      onClick={handleToggle}
      type="button"
      className={`button navigator__button
      ${isOpen ? 'navigator__button_open' : ''}`}
    >
      <span className="label_off">toggle</span>
  </button>
  );
}

export default NavButton;