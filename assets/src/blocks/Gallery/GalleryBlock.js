import { GalleryEditor } from './GalleryEditor';
import { frontendRendered } from '../frontendRendered';
import { getStyleLabel } from '../../functions/getStyleLabel';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const BLOCK_NAME = 'planet4-blocks/gallery';

const attributes = {
  gallery_block_style: { // Needed for existing blocks conversion
    type: 'integer',
    default: 0
  },
  gallery_block_title: {
    type: 'string',
    default: '',
  },
  gallery_block_description: {
    type: 'string',
    default: '',
  },
  multiple_image: {
    type: 'string',
    default: '',
  },
  gallery_block_focus_points: {
    type: 'string',
    default: '',
  },
  image_data: {
    type: 'array',
    default: []
  },
};

export const registerGalleryBlock = () => {
  registerBlockType(BLOCK_NAME, {
    title: 'Gallery',
    icon: 'format-gallery',
    category: 'planet4-blocks',
    attributes,
    supports: {
      html: false, // Disable "Edit as HTMl" block option.
    },
    edit: GalleryEditor,
    save: frontendRendered(BLOCK_NAME),
    // Add our custom styles
    styles: [
      {
        name: 'slider',
        label: getStyleLabel(
          'Slider',
          __('The slider is a carousel of images. For more than 5 images, consider using a grid.', 'planet4-blocks-backend'),
        ),
        isDefault: true
      },
      {
        name: 'three-columns',
        label: getStyleLabel(
          '3 Columns',
          __('The 3 columns image display is great for accentuating text, and telling a visual story.', 'planet4-blocks-backend'),
        ),
      },
      {
        name: 'grid',
        label: getStyleLabel(
          'Grid',
          __('The grid shows thumbnails of lots of images. Good to use when showing lots of activity.', 'planet4-blocks-backend'),
        ),
      }
    ],
    deprecated: [
      {
        attributes,
        save() {
          return null;
        }
      }
    ],
  });
};
