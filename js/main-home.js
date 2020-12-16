import { headerData } from './components/data/headerData.js';
import { testimonialData } from './components/data/testimonialsData.js';
import { renderHeader } from './components/header/renderHeader.js';
// TESTIMONIALS
import { Testimonials } from './components/testimonials/Testimonials.js';

// EXECUTION

// header
renderHeader('nav', headerData);

// testimonials

const homeTestimonials = new Testimonials({
    selctor:'#testimonials_block',
    data: testimonialData,
    isArrowControlsVisible: true,
    maxItems: 7,
    isDotControlsVisible: true,
    cloneCount: 2,
    visibilityStrategy:'last',
});

// homeTestimonials.render();