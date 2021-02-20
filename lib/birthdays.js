import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const birthdayDirectory = path.join(process.cwd(), 'birthdays');

const parseBirthdayInformation = (id) => {
  const fullPath = path.join(birthdayDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = JSON.parse(fileContents);
  return {
    id,
    ...data,
  };
};

export function getSortedBirthdaysData() {
  const fileNames = fs.readdirSync(birthdayDirectory);
  const allBirthdayData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.json$/, '');
    return parseBirthdayInformation(id);
  });
  return allBirthdayData;
}

export function getAllBirthdayIds() {
  const fileNames = fs.readdirSync(birthdayDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ''),
      },
    };
  });
}

export function getBirthdayData(id) {
  return parseBirthdayInformation(id);
}
