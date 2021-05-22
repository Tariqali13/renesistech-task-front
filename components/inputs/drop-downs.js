// @flow
import React from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';

type Props = {
  dropDownOpen: boolean,
  toggleDropDown: boolean,
  children?: any,
  value?: string,
  classes?: string,
  iconDropDown?: boolean,
  dropDownClasses?: string,
  handleChange?: Function,
  isSearchField?: boolean,
  placeHolder?: string,
  style?: any,
  muteTextClass?: string,
  disabled?: boolean,
};

const DropDown = (props: Props) => {
  const {
    dropDownOpen,
    toggleDropDown,
    value,
    children,
    dropDownClasses,
    classes,
    iconDropDown,
    handleChange,
    isSearchField,
    placeHolder,
    style,
    muteTextClass,
    disabled,
  } = props;
  return (
    <Dropdown
      className={`${dropDownClasses} ${dropDownOpen ? 'open' : ''}`}
      isOpen={dropDownOpen}
      toggle={toggleDropDown}
      disabled={disabled}
    >
      {!iconDropDown && (
        <DropdownToggle
          className={`btn btn-block btn-bordered ${muteTextClass}`}
          data-toggle="dropdown"
          aria-haspopup
          aria-expanded="false"
          style={style}
        >
          {!isSearchField && <span> {value || 'Select'} </span>}
          {isSearchField && (
            <input
              onChange={e => handleChange(e)}
              value={value}
              placeholder={placeHolder}
              style={{ width: '100%' }}
            />
          )}
          <i className="icn icn-caret"></i>
        </DropdownToggle>
      )}
      {iconDropDown && (
        <DropdownToggle
          tag="div"
          className={classes}
          data-toggle="dropdown"
          aria-haspopup
          aria-expanded="false"
        >
          {value}
        </DropdownToggle>
      )}
      {children}
    </Dropdown>
  );
};

DropDown.defaultProps = {
  isSearchField: false,
  iconDropDown: false,
  disabled: false,
};

export default DropDown;
