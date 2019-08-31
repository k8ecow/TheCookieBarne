// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import withInstagramFeed from 'origen-react-instagram-feed';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import compose from 'recompose/compose';
import Carousel from 'react-bootstrap/Carousel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  wrapper: {},
  image: {
    height: '300px'
  },
  imageDiv: {
    height: '300px',
    width: '300px',
    overflow: 'hidden'
  }
});

export type Props = {
  media?: Array<{
    displayImage: string,
    id?: string,
    postLink?: string,
    accessibilityCaption?: string
  }>,
  account: string,
  classes: { [$Keys<$Call<typeof styles>>]: string },
  status: 'completed' | 'loading' | 'failed'
};

const InstaGrid = ({ classes, media, account, status }: Props) => {
  return (
    <div className={classes.root}>
      <Carousel>
        {media &&
          status === 'completed' &&
          media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
            <Carousel.Item
              key={id || displayImage}
              cols={1}
              className="imageDiv"
            >
              <ButtonBase
                href={postLink || `https://www.instagram.com/${account}/`}
              >
                <img
                  src={displayImage}
                  alt={accessibilityCaption || 'Instagram picture'}
                  className={classes.image}
                />
              </ButtonBase>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

InstaGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withInstagramFeed,
  withStyles(styles)
)(InstaGrid);
