import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';

//      Import brand icons
import { fab } from '@fortawesome/free-brands-svg-icons';

//      Import regular icons
import { far } from '@fortawesome/free-regular-svg-icons';

//      Import solid icons
import { fas } from '@fortawesome/free-solid-svg-icons';

//      Dont import css since its already done above
config.autoAddCss = false;

//      Add to library
library.add(
        fab,
        far,
        fas
);