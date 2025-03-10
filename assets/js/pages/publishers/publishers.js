// Подключаем все функции из отдельных файлов для большой гибкости 
import { popUpVideo, tutorialVideosToggler } from "./blocks/section_video_tutorials.js";
import { reviewsSlider } from "./blocks/section_reviews.js";
import { seeAllItems } from "./blocks/section_key_features.js";
import { blogToSlider } from "./blocks/section_blog.js";
import  {seeAllBenefits } from "./blocks/section_benefits.js";
import  { seeAllFAQ } from "./blocks/section_faq.js";
import { initAffiliateProgrammTabs, initAffiliateProgrammSliders} from "./blocks/section_affiliate_programm.js";
import { auidenceForm } from "./blocks/section_audience_form.js"
// Определяем слайдер для его работы
const sliderConfig = {
    sliderSelector: ".programm_slider",
    navigationSelector: ".steps__navigation",
    paginationSelector: ".steps_pagination",
    stepContentSelector: ".steps__content",
  };
// Сами функции
popUpVideo();
tutorialVideosToggler();
reviewsSlider();
blogToSlider();
seeAllFAQ();
initAffiliateProgrammTabs();
initAffiliateProgrammSliders(sliderConfig); 
seeAllItems()
seeAllBenefits();
auidenceForm()

