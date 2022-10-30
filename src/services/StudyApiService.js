/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class StudyApiService {
  async fetchStudies() {
    const url = `${baseUrl}/studies`;

    const { data } = await axios.get(url);

    const { studies, pageNumber } = data;

    return { studies, pageNumber };
  }

  async changePageNumber(number) {
    const url = `${baseUrl}/studies`;

    const { data } = await axios.get(url, {
      params: {
        page: number,
      },
    });

    return data.studies;
  }
}

export const studyApiService = new StudyApiService();
