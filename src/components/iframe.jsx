import React, { useRef } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { IFrame } from './iframe.styled';

export const LazyIframe = ({ url, title }) => {
  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting) {
      lockRef.current = true
  }
  return (
    <div ref={containerRef}>
      {lockRef.current && (
        <IFrame
          title={title}
          src={url}
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></IFrame>
      )}
    </div>
  )
};
