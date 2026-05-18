import {useRef,useEffect } from 'react'
  export   function useAutoScroll(deps) {
        const containerRef =useRef(null);
          useEffect(() => {
            // console.log(  containerRef.current);
            const containerElm = containerRef.current;
            if (containerElm) {
              containerElm.scrollTop = containerElm.scrollHeight;
            }
          // eslint-disable-next-line react-hooks/exhaustive-deps
          },deps);
        return containerRef
        }