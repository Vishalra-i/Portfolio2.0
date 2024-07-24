'use client'

import BuyMeCoffee from '@/components/Buyme';
import SocialBtn from '@/components/SocialBtn';
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
    <section id="home" className="w-full min-h-screen flex items-center justify-between px-10 ">
      {
      loading && (
        <div className='flex items-center justify-center w-full min-h-screen'>
             <div className="w-10 h-10 p-2 border border-white border-t-4 border-t-black rounded-full animate-spin"></div>
        </div>
      ) }
       { 
        data && (
          <div className="flex items-center justify-between w-full animate-slideInFromLeft text-white">
                  <div className="w-1/2">
                  <div className="w-fit h-fit p-1 animate-switch rounded-full">
                     <Image
                       src={data.avatar_url}
                       alt="Profile photo Vishal Rai"
                       width={350}
                       height={350}
                       className="rounded-full shadow-xl shadow-slate-600"
                       />
                  </div>
                  </div>
                 <div className="flex flex-col gap-5  w-1/2">
                   <h1 className="text-4xl font-bold leading-loose">{data.name}</h1>
                   <p className="text-2xl" >{data.bio}</p>
                   <BuyMeCoffee width={150} height={30} id={"coffee"} />
                   <SocialBtn/>
                 </div>
          </div>
      )}
     
    </section>
  );
}

export default Profile;
