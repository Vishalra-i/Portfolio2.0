'use client'

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

function Profile() {
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const ID = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  console.log(ID)

  const fetchGitHubData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<GitHubUser>(`https://api.github.com/users/${ID}`);
      console.log(response)
      setData(response.data);
    } catch (error : any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  },[]);

  return (
    <div className="w-full min-h-screen flex items-center px-10">
      {
      loading && (
        <div className='flex items-center justify-center w-full min-h-screen'>
             <div className="w-10 h-10 p-2 border border-white border-t-4 border-t-black rounded-full animate-spin"></div>
        </div>
      ) }
      { (
        data && (
          <Image
            src={data.avatar_url}
            alt="Profile photo"
            width={350}
            height={350}
            className="rounded-full"
          />
        )
      )}
    </div>
  );
}

export default Profile;
