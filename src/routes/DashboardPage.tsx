import React from 'react';
import Layout from '../components/shared/Layout';

const mockData = [
  {
    name: 'CatPics',
    url: 'https://catpics.com',
    downFor: null
  },
  {
    name: 'PuppyPics',
    url: 'https://puppypics.com',
    downFor: null
  },
  {
    name: 'CatPicsOnCheapServer',
    url: 'https://catpics.com',
    downFor: 60
  },
  {
    name: 'CatPicsFTP',
    url: 'ftp://catpics.com',
    downFor: null
  }
];

const DashboardPage: React.FC = () => {
  const downCount = mockData.filter(item => item.downFor !== null).length;

  return <Layout>{downCount}</Layout>;
};

export default DashboardPage;
