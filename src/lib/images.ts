// Auto-generated image imports
import heroFood from '@images/hero-food.jpeg';
import weeklyMenu20022025 from '@images/weekly-menu-20022025.jpg';
import weeklyMenu20022025_2 from '@images/weekly-menu-20022025-2.jpg';

// February 15, 2025 gallery
import chicken_15022025 from '@images/15022025/chicken.jpg';
import fish_15022025 from '@images/15022025/fish.jpg';
import prawns_15022025 from '@images/15022025/prawns.jpg';
import brinjol_15022025 from '@images/15022025/brinjol.jpg';
import noodles_15022025 from '@images/15022025/noodles.jpeg';
import pittu_15022025 from '@images/15022025/pittu.jpg';

// February 22, 2025 gallery
import pork_deviled_22022025 from '@images/22022025/pork_deviled.jpg';
import friedfish_deviled_22022025 from '@images/22022025/friedfish_deviled.jpg';
import beef_curry_22022025 from '@images/22022025/beef_curry.jpg';
import okra_tempura_22022025 from '@images/22022025/okra_tempura.jpg';
import kottu_beef_22022025 from '@images/22022025/kottu_beef.jpg';
import kottu_chicken_22022025 from '@images/22022025/kottu_chicken.jpg';
import kottu_beef_chicken_22022025 from '@images/22022025/kottu_beef_chicken.jpg';
import kottu_prep_22022025 from '@images/22022025/kottu_prep.jpg';
import bananaflower_curry_22022025 from '@images/22022025/bananaflower_curry.jpg';
import breadfruit_mallum_22022025 from '@images/22022025/breadfruit_mallum.jpg';
import snakegourde_mallum_22022025 from '@images/22022025/snakegourde_mallum.jpg';

// June 21, 2025 gallery
import chicken_biriyani_21062025 from '@images/21062025/Chicken biriyani with raita.JPG';
import beef_potato_stir_fry_21062025 from '@images/21062025/beef and potato stir fry.JPG';
import black_pork_curry_21062025 from '@images/21062025/black pork curry.jpg';
import wadde_coconut_sauce_21062025 from '@images/21062025/wadde with coconut sauce.jpg';

// June 28, 2025 gallery
import beef_cabbage_curry_28062025 from '@images/28062025/beef with cabbage curry.jpg';
import chicken_lumprice_28062025 from '@images/28062025/chicken lumprice.jpeg';
import dried_fish_curry_28062025 from '@images/28062025/dried fish curry.jpeg';
import eggplant_ash_plantain_curry_28062025 from '@images/28062025/eggplant and ash plantain curry.jpg';
import pork_devilled_28062025 from '@images/28062025/pork devilled.jpeg';
import spiny_gourd_curry_28062025 from '@images/28062025/spiny gourd curry.jpg';

export const images = {
  // Hero and main images
  'hero-food': heroFood,
  'weekly-menu-20022025': weeklyMenu20022025,
  'weekly-menu-20022025-2': weeklyMenu20022025_2,
  
  // February 15, 2025 gallery
  '15022025/chicken': chicken_15022025,
  '15022025/fish': fish_15022025,
  '15022025/prawns': prawns_15022025,
  '15022025/brinjol': brinjol_15022025,
  '15022025/noodles': noodles_15022025,
  '15022025/pittu': pittu_15022025,
  
  // February 22, 2025 gallery
  '22022025/pork_deviled': pork_deviled_22022025,
  '22022025/friedfish_deviled': friedfish_deviled_22022025,
  '22022025/beef_curry': beef_curry_22022025,
  '22022025/okra_tempura': okra_tempura_22022025,
  '22022025/kottu_beef': kottu_beef_22022025,
  '22022025/kottu_chicken': kottu_chicken_22022025,
  '22022025/kottu_beef_chicken': kottu_beef_chicken_22022025,
  '22022025/kottu_prep': kottu_prep_22022025,
  '22022025/bananaflower_curry': bananaflower_curry_22022025,
  '22022025/breadfruit_mallum': breadfruit_mallum_22022025,
  '22022025/snakegourde_mallum': snakegourde_mallum_22022025,

  // June 21, 2025 gallery
  '21062025/chicken biriyani with raita': chicken_biriyani_21062025,
  '21062025/beef and potato stir fry': beef_potato_stir_fry_21062025,
  '21062025/black pork curry': black_pork_curry_21062025,
  '21062025/wadde with coconut sauce': wadde_coconut_sauce_21062025,

  // June 28, 2025 gallery
  '28062025/beef with cabbage curry': beef_cabbage_curry_28062025,
  '28062025/chicken lumprice': chicken_lumprice_28062025,
  '28062025/dried fish curry': dried_fish_curry_28062025,
  '28062025/eggplant and ash plantain curry': eggplant_ash_plantain_curry_28062025,
  '28062025/pork devilled': pork_devilled_28062025,
  '28062025/spiny gourd curry': spiny_gourd_curry_28062025,
};

export const getImage = (imagePath: string) => {
  // Convert @images/path to key format
  const key = imagePath.replace('@images/', '').replace(/\.[^.]+$/, '');
  return images[key];
};

export type ImageKey = keyof typeof images;