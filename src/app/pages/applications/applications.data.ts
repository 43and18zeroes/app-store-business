export interface SectionItem {
  productId: string;
  productName: string;
  productDescription: string;
  productDescription2: string;
  productLogoFilename: string;
  productLogoAltText: string;
  productPreviewsPath: string;
}

export const PRODUCT_PATH = 'applications';

export const SECTION_BASIC_APPS: SectionItem[] = [
  {
    productId: 'card-grid',
    productName: 'Card Grit App',
    productDescription:
      'Our innovative Card Grid application offers a streamlined interface designed for the effortless management and visualization of business resources. By presenting data in a clean, structured layout, users can quickly gain a high-level overview of essential assets at a single glance.',
    productDescription2:
      'The app features integrated search and advanced filtering capabilities to ensure that the right information is always just a few clicks away. These powerful navigation tools eliminate data clutter, significantly boosting productivity and decision-making speed across your organization.',
    productLogoFilename: 'logo-card-grid-01.webp',
    productLogoAltText: 'Card Grit App',
    productPreviewsPath: 'card-grid',
  },
];

export const SECTION_COMPLEX_APPS: SectionItem[] = [
  {
    productId: 'talent-management',
    productName: 'Talent Management App',
    productDescription:
      'This Talent Management application empowers managers to streamline internal growth by easily posting new job opportunities directly within the organization. It creates a transparent marketplace for talent, ensuring that every open position is visible to the right people at the right time.',
    productDescription2:
      'Employees can explore these career paths and submit their applications through a simplified, user-friendly interface. By fostering internal mobility, the app helps retain top talent while aligning individual career goals with the company’s evolving needs.',
    productLogoFilename: 'logo-talent-management-00.webp',
    productLogoAltText: 'Talent Management App',
    productPreviewsPath: 'talent-management',
  },
];
