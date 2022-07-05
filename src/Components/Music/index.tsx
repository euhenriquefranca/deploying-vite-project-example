import React from 'react';
import Blues from '../../Assets/Blues.mp3';
import Gif from '../../Assets/giphy.gif';
import { Player, Audio, Controls, PlaybackControl } from '@vime/react';
import StaticGIF from '../../Assets/staticGif.png'

import './Style.scss'


export function Music() {

const [isStaticGIF, setIsStaticGIF] = React.useState(false);

const onClickGIF = () => setIsStaticGIF(!isStaticGIF);
//<img onClick={onClickGIF} src={isStaticGIF ? StaticGIF : Gif} alt="Descrição da imagem" />
return (
  <div className='div-music'>
  
    <Player loop>
      <Audio>
        <source data-src={Blues} type="audio/mp3" />
      </Audio>
      <Controls pin="center">
        <PlaybackControl hideTooltip style={{fontSize: '40px', marginTop: '5px', color: 'White', zIndex: '0'}}/>
      </Controls>
    </Player>

  </div>
);
}