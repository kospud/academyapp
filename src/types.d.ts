declare module '*.webp' {
    const value: string;
    export default value;
  }
  
  declare module '*.png' {
    const value: string;
    export default value;
  }

  declare module '*.jpg' {
    const value: string;
    export default value;
  }

  declare module '*.pdf' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
  
  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;
  
  const src: string;
  export default src;
  }
  
  declare module '*.gif' {
    const value: string;
    export default value;
  }
  
  declare module '*.mp3' {
    const value: string;
    export default value;
  }