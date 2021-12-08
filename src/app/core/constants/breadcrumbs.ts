// breadcrumbs must follow routes

import { IBreadcrumb } from '../interfaces/ibreadcrumb';

// just set the direct parent into "parents"
export const BREADCRUMBS: IBreadcrumb[] = [
  { link: 'home', label: 'Home' },
  { link: 'settings', label: 'Settings' },
  { link: 'tips', label: 'Tips', parents: [{ link: 'home', label: 'Home' }] },
  {
    link: 'datatable',
    label: 'Datatable',
    parents: [{ link: 'home', label: 'Home' }],
  },
  { link: 'planning', label: 'Planning' },
  { link: 'documents', label: 'Documents' },
  { link: 'users/field_assistant', label: 'Field Assistant' },
  { link: 'users/admins', label: 'Admins' },
  {
    link: 'documents/reports',
    label: 'Reports',
    parents: [{ link: 'documents', label: 'Documents' }],
  },
  { link: 'map', label: 'Map' },
  { link: 'profile', label: 'Profile' },
  { link: 'visualisation/barchart', label: 'Barchart' },
  { link: 'visualisation/bubblemap', label: 'Bubblemap' },
  { link: 'visualisation/path-edge-bunding', label: 'Path Edge Bunding' },
  { link: 'visualisation/choropleth', label: 'Choropleth' },
  { link: 'visualisation/crossfilter', label: 'Crossfilter' },
  { link: 'visualisation/date-time-heatmap', label: 'Date Time Heatmap' },
  { link: 'visualisation/sankey', label: 'Sankey' },
  { link: 'visualisation/event-drops', label: 'Event Drops' },
];
