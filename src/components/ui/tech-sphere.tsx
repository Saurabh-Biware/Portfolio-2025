import React, { useEffect, useMemo, useState, memo } from 'react';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';
import type { SimpleIcon } from 'react-icon-cloud';

interface IconData {
  simpleIcons: Record<string, SimpleIcon>;
  [key: string]: unknown;
}

const techIcons = [
  'react',
  'nextdotjs',
  'typescript',
  'javascript',
  'tailwindcss',
  'nodedotjs',
  'express',
  'mongodb',
  'docker',
  'git',
  'amazonwebservices',
  'azure',
  'redux',
  'html5',
  'css3',
  'figma',
  'fastapi',
  'linux',
];

const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      transform: 'scale(0.9)',
    },
  },
  options: {
    reverse: true,
    depth: 0.8,
    wheelZoom: false,
    imageScale: 1.4,
    activeCursor: 'default',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
    radiusX: 0.95,
    radiusY: 0.95,
    radiusZ: 0.95,
  },
};

const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 28,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  });
};

const TechSphereComponent = () => {
  const [data, setData] = useState<IconData | null>(null);
  const [loading, setLoading] = useState(true);
  const theme = 'dark';

  useEffect(() => {
    const iconSlugs = [...new Set(techIcons)];
    if (iconSlugs.length > 0) {
      setLoading(true);
      fetchSimpleIcons({ slugs: iconSlugs })
        .then(result => {
          setData(result);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching icons:', error);
          setLoading(false);
        });
    }
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon: SimpleIcon) => renderCustomIcon(icon, theme));
  }, [data, theme]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {renderedIcons && (
        <Cloud {...cloudProps}>
          <>{renderedIcons}</>
        </Cloud>
      )}
    </div>
  );
};

const TechSphere = memo(TechSphereComponent);

export { TechSphere };
