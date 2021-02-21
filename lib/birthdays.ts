import fs from 'fs';
import path from 'path';

const birthdayDirectory = path.join(process.cwd(), 'lib/birthdays');

export type BirthdayData = {
  id: string;
  background_url?: string;
  colour?: string;
  name: string;
  message: string[];
  gif_url?: string;
  withEdit: boolean;
};

type BirthdayIds = {
  params: {
    id: string;
  };
};

const parseBirthdayInformation = (id: string) => {
  const fullPath = path.join(birthdayDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = JSON.parse(fileContents);
  return {
    id,
    ...data,
    withEdit: process.env.NODE_ENV !== 'production',
  };
};

export function getSortedBirthdaysData(): BirthdayData[] {
  const fileNames = fs.readdirSync(birthdayDirectory);
  const allBirthdayData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.json$/, '');
    return parseBirthdayInformation(id);
  });
  return allBirthdayData;
}

export function getAllBirthdayIds(): BirthdayIds[] {
  const fileNames = fs.readdirSync(birthdayDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ''),
      },
    };
  });
}

export function getBirthdayData(id: string): BirthdayData {
  return parseBirthdayInformation(id);
}
