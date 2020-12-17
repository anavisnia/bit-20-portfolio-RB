import { headerData } from './components/data/headerData.js';
import { testimonialsData } from './components/data/testimonialsData.js';
import { renderHeader } from './components/header/renderHeader.js';
// HERO
// STATS
import { Counter } from './components/counter/Counter.js';
import { statsData } from './components/data/statsData.js';
// TESTIMONIALS
import { Testimonials } from './components/testimonials/Testimonials.js';

/* **********
 EXECUTION
*********** */

// header
renderHeader('nav', headerData);
// HERO
// STATS
new Counter ({
    selector: '#stats_counter_block',
    data: statsData,
})
// testimonials

new Testimonials({
    selctor:'#testimonials_block',
    data: testimonialsData,
    isArrowControlsVisible: true,
    maxItems: 7,
    isDotControlsVisible: true,
    cloneCount: 2,
    visibilityStrategy:'last',
});

// homeTestimonials.render();