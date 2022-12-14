import dynamic from 'next/dynamic';
import {Search} from "../components/Search";
import {Filter} from "../components/Filter";
import React, {useEffect, useRef} from "react";
import {Countries} from "../components/Countries";

const DynamicSelect = dynamic(() => import('../components/Select')
  .then(module => module.Select), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <Filter>
        <Search />
        <DynamicSelect />
      </Filter>
      <Countries />
    </>
  )
}