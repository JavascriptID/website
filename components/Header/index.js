import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Logo from './Logo';
import Titles from './Titles';
import Buttons from './Buttons';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 13,
    paddingBottom: theme.spacing.unit * 13,
    backgroundColor: theme.palette.primary[700],
    boxShadow: theme.shadows[4],
    color: '#f5f5f5',
    zIndex: 999
  }
});

const Header = ({ classes }) => (
  <div className={`${classes.root} row center-xs`} >
    <Logo />
    <Titles />
    <Buttons />
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);