// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import withInstagramFeed from 'origen-react-instagram-feed';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonBase from '@material-ui/core/ButtonBase';
import compose from 'recompose/compose';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  wrapper: {
  },
  image: {
    height: '160px',
    width: '160px',
  },
  imageDiv: {    
    height: '160px',
    width: '160px',
    overflow: 'hidden'
    }
});

export type Props = {
  media?: Array<{
    displayImage: string,
    id?: string,
    postLink?: string,
    accessibilityCaption?: string,
  }>,
  account: string,
  classes: { [$Keys<$Call<typeof styles>>]: string },
  status: 'completed' | 'loading' | 'failed',
};

const InstaGrid = ({ classes, media, account, status}: Props) => {
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.wrapper} cols={3}>
        {media && 
        status === 'completed' &&
          media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
          <GridListTile key={id || displayImage} cols={1} className='imageDiv'>
            <ButtonBase href={postLink || `https://www.instagram.com/${account}/`} >
            <img 
              src={displayImage} 
              alt={accessibilityCaption || 'Instagram picture'} 
              className={classes.image}
              />
            </ButtonBase>
          </GridListTile>
        ))}
      {status === 'loading' && <p>loading...</p>}
      {status === 'failed' && <p>Check instagram here</p>}
      </GridList>
    </div>
  );
}
 
 InstaGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withInstagramFeed,
  withStyles(styles),
)(InstaGrid);