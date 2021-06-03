import React from 'react';
import DownServicesAlert from '../components/dashboard/DownServicesAlert';
import Layout from '../components/shared/Layout';
import { DashboardService } from '../interfaces/DashboardService';

const mockData: DashboardService[] = [
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
  return (
    <Layout>
      <DownServicesAlert services={mockData} />
    </Layout>
  );
};

export default DashboardPage;
