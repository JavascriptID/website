import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReactSVG from 'react-svg';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = theme => ({
  shareComp: {
    display: 'flex',
    width: '100%',
    margin: '.5em 0 0',
    flexDirection: 'column',
    alignContent: 'center',
    '& a': {
      borderBottom: 'none !important',
    }
  },
  shareIcons: {
    flexGrow: '1 1 100%',
    marginTop: '2em',
    display: 'flex',
    padding: '1em 2em',
    alignItems: 'center',
    background: '#eee',
    flexWrap: 'wrap',
  },
  text: {
    width: 'auto !important',
    margin: '0 1em 0 0 !important',
  },
  button: {
    transition: 'all .3s ease',
    margin: '1.1em',
    '&:hover': {
      '& svg': {
        fill: '#7B1FA2',
      },
    },
  },
  svg: {
    width: 16,
    height: 16,
    margin: '0 !important',
    boxShadow: 'none !important',
    backgroundColor: 'transparent !important',
  }
});

const Share = ({ classes, title }) => {
  return (
    <div className={classes.shareComp}>
      <div className={classes.shareIcons}>
        <Typography type="body1" className={classes.text}>
          Share socially:
        </Typography>
        <a
          href={`https://t.me/share/url?url=https://thedevs.network/blog/${title}`} 
          target="_blank" 
          className={classes.button}
        >
          <ReactSVG path="/static/img/share/telegram.svg" className={classes.svg} />
        </a>
        <a 
          href={`https://twitter.com/home?status=https://thedevs.network/blog/${title}`} 
          target="_blank" 
          className={classes.button}
        >
          <ReactSVG path="/static/img/share/twitter.svg" className={classes.svg} />
        </a>
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=https://thedevs.network/blog/${title}`} 
          target="_blank" 
          className={classes.button}
        >
          <ReactSVG path="/static/img/share/facebook.svg" className={classes.svg} />
        </a>
        <a 
          href={`https://plus.google.com/share?url=https://thedevs.network/blog/${title}`} 
          target="_blank" 
          className={classes.button}
        >
          <ReactSVG path="/static/img/share/googleplus.svg" className={classes.svg} />
        </a>
        <a 
          href={`http://vk.com/share.php?url=https://thedevs.network/blog/${title}`} 
          target="_blank" 
          className={classes.button}
        >
          <ReactSVG path="/static/img/share/vk.svg" className={classes.svg} />
        </a>
        <a 
          href={`https://www.linkedin.com/shareArticle?mini=true&url=https://thedevs.network/blog/${title}`} 
          target="_blank" 
          className={classes.button}
        >
          <ReactSVG path="/static/img/share/linkedin.svg" className={classes.svg} />
        </a>
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);