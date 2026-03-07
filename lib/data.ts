import configData from '@/data/config.json';
import servicesData from '@/data/services.json';
import imagesData from '@/data/images_data.json';

export const config = configData;
export const services = servicesData;
export const images = imagesData.images;

export type Service = typeof servicesData.services[0];
export type SocialMediaLink = typeof configData.socialMedia[0];
export type Feature = typeof configData.features[0];
export type ImageData = typeof imagesData.images;
