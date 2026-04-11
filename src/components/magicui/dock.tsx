'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import React, { PropsWithChildren, useMemo, useRef } from 'react';

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

type DockContextValue = {
  mousex: MotionValue<number>;
  magnification: number;
  distance: number;
};

const DockContext = React.createContext<DockContextValue | null>(null);

const dockVariants = cva(
  'mx-auto w-max h-full p-2 flex items-end rounded-full border',
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref,
  ) => {
    const mousex = useMotionValue(Infinity);

    const contextValue = useMemo(
      () => ({ mousex, magnification, distance }),
      [mousex, magnification, distance],
    );

    return (
      <DockContext.Provider value={contextValue}>
        <motion.div
          ref={ref}
          onMouseMove={(e) => mousex.set(e.pageX)}
          onMouseLeave={() => mousex.set(Infinity)}
          {...props}
          className={cn(dockVariants({ className }))}
        >
          {children}
        </motion.div>
      </DockContext.Provider>
    );
  },
);

Dock.displayName = 'Dock';

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mousex?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  magnification: magnificationProp = DEFAULT_MAGNIFICATION,
  distance: distanceProp = DEFAULT_DISTANCE,
  mousex: mousexProp,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ctx = React.useContext(DockContext);
  const fallbackMousex = useMotionValue(Infinity);
  const mousex = ctx?.mousex ?? mousexProp ?? fallbackMousex;
  const magnification = ctx?.magnification ?? magnificationProp;
  const distance = ctx?.distance ?? distanceProp;

  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        'flex aspect-square min-w-10 cursor-pointer items-center justify-center rounded-full',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = 'DockIcon';

export { Dock, DockIcon, dockVariants };
