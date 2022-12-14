import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {
    new SlideMenu(document.getElementById('example-menu'));
    console.log(1);
});
import $ from 'jquery';

import ProdBlock from '../blocks/modules/main_product/main_product.js';
import HeaderBlock from '../blocks/modules/header/header.js';
import FooterBlock from '../blocks/modules/footer/footer.js';
import TextBlock from '../blocks/modules/text_page/text_page.js';
import MapBlock from '../blocks/modules/map_block/map_block.js';
import AboutBlock from '../blocks/modules/about_block/about_block.js';
import RevBlock from '../blocks/modules/rev_block/rev_block.js';
import WorkBlock from '../blocks/modules/work_slider/work_slider.js';
import PrevBlock from '../blocks/modules/prev_block/prev_block.js';
import FirstBlock from '../blocks/modules/first_slider/first_slider.js';
import ContactsBlock from '../blocks/modules/contacts/contacts.js';
import ExpBlock from '../blocks/modules/exp_block/exp_block.js';
import ServBlock from '../blocks/modules/page_service/page_service.js';


$(function () {
    const footerBlock = new FooterBlock();
    const textBlock = new TextBlock();
    const mapBlock = new MapBlock();
    const aboutBlock = new AboutBlock();
    const revBlock = new RevBlock();
    const workBlock = new WorkBlock();
    const prevBlock = new PrevBlock();
    const headerBlock = new HeaderBlock();
    const firstBlock = new FirstBlock();
    const prodBlock = new ProdBlock();
    const contactsBlock = new ContactsBlock();
    const expBlock = new ExpBlock();
    const servBlock = new ServBlock();
    
    headerBlock.init();
    mapBlock.init();
    footerBlock.init();
    textBlock.init();
    aboutBlock.init();
    revBlock.init();
    workBlock.init();
    prevBlock.init();
    firstBlock.init();
    prodBlock.init();
    contactsBlock.init();
    expBlock.init();
    servBlock.init();
})