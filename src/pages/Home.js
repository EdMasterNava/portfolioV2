import * as React from 'react';
import InfiniteBG from './modules/components/InfiniteBG';
import GridTiles from './modules/components/GridTiles';
import { addHomeElements } from './modules/components/addElements/AddHomeElements';

function Home() {
  return (
    <>
      <InfiniteBG />
      <GridTiles addElements={addHomeElements} pageHeight={2750}/>
    </>
  );
}

export default Home;