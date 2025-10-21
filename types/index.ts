export interface Article {
  id: string;
  title: string;
  description: string | null;
  cover_image: string | null;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Project {
  title: string;
  description: string;
  logo?: string; // Optional if not always used
  link: string;
  slug: string;
  image: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string | null;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}