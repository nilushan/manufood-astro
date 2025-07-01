/**
 * Social links utility functions
 * Centralizes social link generation and icon management
 */

import type { PersonalInfo, SocialLinks } from '@/types/portfolio';

// Social platform configurations
export const SOCIAL_PLATFORMS = {
  github: {
    name: 'GitHub',
    baseUrl: 'https://github.com',
    icon: 'github',
    ariaLabel: 'GitHub Profile'
  },
  linkedin: {
    name: 'LinkedIn', 
    baseUrl: 'https://linkedin.com/in',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn Profile'
  },
  twitter: {
    name: 'Twitter',
    baseUrl: 'https://twitter.com',
    icon: 'twitter',
    ariaLabel: 'Twitter Profile'
  },
  email: {
    name: 'Email',
    baseUrl: 'mailto:',
    icon: 'email',
    ariaLabel: 'Send Email'
  }
} as const;

export type SocialPlatform = keyof typeof SOCIAL_PLATFORMS;

// Generate social link URLs
export function generateSocialLinks(personal: PersonalInfo) {
  const links: Record<string, string> = {};

  // Handle both old format (personal.github/linkedin) and new format (personal.social.*)
  const social = personal.social || {};
  
  // GitHub
  const githubHandle = social.github || personal.github;
  if (githubHandle) {
    links.github = `${SOCIAL_PLATFORMS.github.baseUrl}/${githubHandle}`;
  }

  // LinkedIn
  const linkedinHandle = social.linkedin || personal.linkedin;
  if (linkedinHandle) {
    links.linkedin = `${SOCIAL_PLATFORMS.linkedin.baseUrl}/${linkedinHandle}`;
  }

  // Twitter
  if (social.twitter) {
    links.twitter = `${SOCIAL_PLATFORMS.twitter.baseUrl}/${social.twitter}`;
  }

  // Email
  if (personal.email) {
    links.email = `${SOCIAL_PLATFORMS.email.baseUrl}${personal.email}`;
  }

  // Website
  if (social.website) {
    links.website = social.website;
  }

  // Blog
  if (social.blog) {
    links.blog = social.blog;
  }

  return links;
}

// Get social platform configuration
export function getSocialPlatformConfig(platform: SocialPlatform) {
  return SOCIAL_PLATFORMS[platform];
}

// Generate a complete social link object with metadata
export function createSocialLink(platform: SocialPlatform, handle: string, customLabel?: string) {
  const config = SOCIAL_PLATFORMS[platform];
  const url = platform === 'email' 
    ? `${config.baseUrl}${handle}`
    : `${config.baseUrl}/${handle}`;

  return {
    platform,
    name: config.name,
    url,
    handle,
    icon: config.icon,
    ariaLabel: customLabel || config.ariaLabel,
    external: platform !== 'email'
  };
}

// SVG Icons for social platforms
export const SOCIAL_ICONS = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>`,
  
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>`,
  
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>`,
  
  email: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
  </svg>`,

  website: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9zm0 0a8.997 8.997 0 004.716-6.747M12 21a8.997 8.997 0 01-4.716-6.747m0 0A17.764 17.764 0 0112 3.25c2.319 0 4.445.16 6.716 1.003a17.764 17.764 0 01-6.716 16.747 17.764 17.764 0 01-6.716-16.747z"/>
  </svg>`,

  blog: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h6.375"/>
  </svg>`
} as const;

// Helper function to get social icon SVG
export function getSocialIcon(platform: string): string {
  return SOCIAL_ICONS[platform as keyof typeof SOCIAL_ICONS] || SOCIAL_ICONS.website;
}

// Generate social links with full metadata for components
export function generateSocialLinksWithMetadata(personal: PersonalInfo) {
  const socialLinks = [];
  const generatedLinks = generateSocialLinks(personal);

  // Add GitHub
  if (generatedLinks.github) {
    socialLinks.push(createSocialLink('github', personal.social?.github || personal.github || ''));
  }

  // Add LinkedIn
  if (generatedLinks.linkedin) {
    socialLinks.push(createSocialLink('linkedin', personal.social?.linkedin || personal.linkedin || ''));
  }

  // Add Twitter
  if (generatedLinks.twitter) {
    socialLinks.push(createSocialLink('twitter', personal.social?.twitter || ''));
  }

  // Add Email
  if (generatedLinks.email) {
    socialLinks.push(createSocialLink('email', personal.email));
  }

  return socialLinks;
}