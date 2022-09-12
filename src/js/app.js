import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import FooterBlock from '../blocks/modules/footer/footer.js';
import TextBlock from '../blocks/modules/text_page/text_page.js';
import MapBlock from '../blocks/modules/map_block/map_block.js';
import AboutBlock from '../blocks/modules/about_block/about_block.js';
import RevBlock from '../blocks/modules/rev_block/rev_block.js';
import WorkBlock from '../blocks/modules/work_slider/work_slider.js';
import PrevBlock from '../blocks/modules/prev_block/prev_block.js';


$(function () {
    const footerBlock = new FooterBlock();
    const textBlock = new TextBlock();
    const mapBlock = new MapBlock();
    const aboutBlock = new AboutBlock();
    const revBlock = new RevBlock();
    const workBlock = new WorkBlock();
    const prevBlock = new PrevBlock();

    mapBlock.init();
    footerBlock.init();
    textBlock.init();
    aboutBlock.init();
    revBlock.init();
    workBlock.init();
    prevBlock.init();
})