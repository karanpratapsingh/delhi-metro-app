/**
 * Typography:
 * This contains all the typography config for the application
 * #Note: color and font size are defaulted as they can be overridden
 *        as required.
 */

type TypographyType = {
  heading: object,
  subHeading: object,
  body: object,
  caption: object
};

const Typography: TypographyType = {
  heading: {
    fontSize: 28,
    fontFamily: 'AirbnbCereal-Bold',
    color: '#000',
  },
  subHeading: {
    fontSize: 20,
    fontFamily: 'AirbnbCereal-Medium',
    color: '#000',
  },
  body: {
    fontSize: 16,
    fontFamily: 'AirbnbCereal-Light',
    color: '#000',
  },
  caption: {
    fontSize: 12,
    fontFamily: 'AirbnbCereal-Light',
    color: '#000',
  },
};

export default Typography;
