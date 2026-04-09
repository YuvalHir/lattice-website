'use client';

import { useState, useEffect } from 'react';

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface ReleaseData {
  tag_name: string;
  assets: ReleaseAsset[];
}

type Platform = 'windows' | 'macos' | 'linux';

function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'windows';
  
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  
  if (userAgent.includes('win') || platform.includes('win')) return 'windows';
  if (userAgent.includes('mac') || platform.includes('mac') || userAgent.includes('darwin')) return 'macos';
  return 'linux';
}

function getAssetUrl(assets: ReleaseAsset[], platform: Platform): string | null {
  const platformPatterns: Record<Platform, RegExp[]> = {
    windows: [/\.exe$/i, /-windows/i, /_windows/i, /msi$/i],
    macos: [/\.dmg$/i, /-macos/i, /_macos/i, /\.app\b/i, /\.pkg$/i],
    linux: [/\.deb$/i, /\.rpm$/i, /\.appimage$/i, /-linux/i, /_linux/i, /\.tar\.gz$/i],
  };

  for (const pattern of platformPatterns[platform]) {
    const asset = assets.find(a => pattern.test(a.name));
    if (asset) return asset.browser_download_url;
  }
  
  return null;
}

export function useReleaseData() {
  const [data, setData] = useState<{
    version: string;
    platform: Platform;
    downloadUrl: string | null;
    allAssets: ReleaseAsset[];
  }>({
    version: '...',
    platform: 'windows',
    downloadUrl: null,
    allAssets: [],
  });

  useEffect(() => {
    async function fetchRelease() {
      try {
        const platform = detectPlatform();
        const res = await fetch('https://api.github.com/repos/YuvalHir/Lattice/releases/latest');
        const json: ReleaseData = await res.json();
        
        const downloadUrl = getAssetUrl(json.assets, platform);
        
        setData({
          version: json.tag_name || 'v0.1.7',
          platform,
          downloadUrl,
          allAssets: json.assets,
        });
      } catch {
        setData(prev => ({ ...prev, version: 'v0.1.7' }));
      }
    }

    fetchRelease();
  }, []);

  return data;
}
