import React from 'react';
import {images, data} from "../../constants";
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits you palatte" />
      <h2 className='headtext__cormorant'>Today's Special</h2>
    </div>
    <div className='app__specialMenu-menu'>
      {/* menu */}
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index)=>(
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      
      {/* image */}
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="memu_img" />
      </div>
      
      {/* menu */}
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index)=>(
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* Bottom button */}
    <div style={{maginTop:'15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>

  </div>
);

export default SpecialMenu;
