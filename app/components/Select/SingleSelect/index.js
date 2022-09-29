import React from 'react';
import Select from 'react-select';
import { Creatable } from 'react-select';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

library.add(faListAlt);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 40,
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    left: 2,
    bottom: 6,
    fontSize: 16,
    color: '#FFF',
    fontWeight: '700',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}));

const NoOptionsMessage = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.noOptionsMessage}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

const inputComponent = ({ inputRef, ...props }) => <div ref={inputRef} {...props} />;

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

const Control = props => {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
};

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
};

const Option = props => (
  <MenuItem
    ref={props.innerRef}
    selected={props.isFocused}
    component="div"
    style={{
      fontWeight: props.isSelected ? 500 : 400,
    }}
    {...props.innerProps}
  >
    {props.children}
  </MenuItem>
);

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

const Placeholder = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.placeholder}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

const SingleValue = props => (
  <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
    {props.children}
  </Typography>
);

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

const ValueContainer = props => <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};

const Menu = props => (
  <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
    {props.children}
  </Paper>
);

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
};

const FontIcon = <FontAwesomeIcon icon="user" />;

const components = {
  Control,
  FontIcon,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

export default function SingleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);
  const { onChangeInput = () => {} } = props;
  const handleChangeSingle = value => {
    setSingle(value);
    onChangeInput(value);
  };

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  const {
    value = [],
    suggestions = [],
    singleSelectLabel = '',
    placeholderText = null,
    isCreatableSelect = false,
    showIcon = false,
    showDisplayStyle = false,
  } = props;
  const SelectComponent = isCreatableSelect ? Creatable : Select;
  const suggestionsMap = suggestions.map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
  }));
  const singleSelectClassNames = classNames({ 'SingleSelect': showDisplayStyle });

  return (
    <div className={classes.root}>
      <NoSsr>
        <div className={singleSelectClassNames}>
          { showIcon && <FontAwesomeIcon className="SingleSelect-icon" icon="list-alt" /> }
          <SelectComponent
            classes={classes}
            styles={selectStyles}
            inputId="react-select-single"
            TextFieldProps={{
              label: singleSelectLabel,
              InputLabelProps: {
                htmlFor: 'react-select-single',
                shrink: true,
              },
              placeholder: 'Searfadsfdfads',
            }}
            placeholder={placeholderText}
            options={suggestionsMap}
            components={components}
            value={single || value}
            onChange={handleChangeSingle}
          />
          <div className={classes.divider} />
        </div>
      </NoSsr>
    </div>
  );
}

SingleSelect.propTypes = {
  singleSelectLabel: PropTypes.string,
  placeholderText: PropTypes.string,
  isCreatableSelect: PropTypes.bool,
  suggestions: PropTypes.array,
  value: PropTypes.array,
  onChangeInput: PropTypes.func,
  showIcon: PropTypes.bool,
  showDisplayStyle: PropTypes.bool,
};
