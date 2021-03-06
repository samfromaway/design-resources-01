import React from 'react';
import { ResourcesProvider } from './context/ResourcesContext';
import ResourcesInput from './components/ResourcesInput';
import ResourcesList from './components/ResourcesList';
import Header from './components/Header';
import UIGraphics from './resources/UIGraphics';
import Fonts from './resources/Fonts';
import Colors from './resources/Colors';
import Icons from './resources/Icons';
import Favicons from './resources/Favicons';
import IconFonts from './resources/IconFonts';
import StockPhoto from './resources/StockPhoto';
import StockVideo from './resources/StockVideo';
import StockMusicSFX from './resources/StockMusicSFX';
import VectorClipart from './resources/VectorClipart';
import ProductImgMockups from './resources/ProductImgMockups';
import HtmlCssTemplates from './resources/HtmlCssTemplates';
import CssFrameworks from './resources/CssFrameworks';
import CssAnimations from './resources/CssAnimations';
import JsAnimations from './resources/JsAnimations';
import UIComponentKits from './resources/UIComponentKits';
import ReactUILibraries from './resources/ReactUILibraries';
import VueUILibraries from './resources/VueUILibraries';
import AngularUILibraries from './resources/AngularUILibraries';
import SvelteUILibraries from './resources/SvelteUILibraries';
import DesignSystems from './resources/DesignSystems';
import OnlineDesignTools from './resources/OnlineDesignTools';
import DesignSoftware from './resources/DesignSoftware';
import DesignInspiration from './resources/DesignInspiration';
import ImgCompression from './resources/ImgCompression';
import Others from './resources/Others';

import { KeyboardArrowUp } from '@material-ui/icons';
import './index.css';

const resources = [
  ...UIGraphics,
  ...Fonts,
  ...Colors,
  ...Icons,
  ...Favicons,
  ...IconFonts,
  ...StockPhoto,
  ...StockVideo,
  ...StockMusicSFX,
  ...VectorClipart,
  ...ProductImgMockups,
  ...HtmlCssTemplates,
  ...CssFrameworks,
  ...CssAnimations,
  ...JsAnimations,
  ...UIComponentKits,
  ...ReactUILibraries,
  ...VueUILibraries,
  ...AngularUILibraries,
  ...SvelteUILibraries,
  ...DesignSystems,
  ...OnlineDesignTools,
  ...DesignSoftware,
  ...DesignInspiration,
  ...ImgCompression,
  ...Others,
];

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='App'>
      <ResourcesProvider resources={resources}>
        <Header />
        <ResourcesInput resources={resources} />
        <ResourcesList resources={resources} />
        <KeyboardArrowUp
          className='to-top'
          style={{ fontSize: 45 }}
          onClick={scrollToTop}
        />
      </ResourcesProvider>
    </div>
  );
};

export default App;
