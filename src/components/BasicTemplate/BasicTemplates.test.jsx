import { render, screen } from '@testing-library/react';

import BasicTemplates from './BasicTemplates';

describe('BasicTemplates', () => {
  const basicTemplates = [
    {
      id: 1,
      title: '인삿말 배우기',
      englishSentence: 'Hey -! How are you?',
      koreanSentence: '안녕 무슨 일이야?',
      youtubeUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/L9Ijl9fDcZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />,
      description: '가장 기초적인 인삿말이다. how are you가 조금 더 보편적으로 오랜 친구를 보거나 친구를 보고 인사할때 사용하기 좋다.what is up 은 무슨일이야? 라는 의미에 조금 더 가까우므로 친구들에게 뭐하냐는 의미의 연락을 취할때 사용하기 좋은 표현이다.그외로는 … … 같은 표현 등이 있다.',
    },
    {
      id: 2,
      title: '일상에서 자기 소개하는 법 배우기',
      englishSentence: 'Hi -! My name is Jimin. It is good to see you!',
      koreanSentence: '안녕 나는 지민이라고 해! 널 만나게 되어서 반가워!',
      youtubeUrl: <iframe width="560" height="315" src="https://www.youtube.com/embed/L9Ijl9fDcZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />,
      description: '지민같은 표현 등이 있다.',
    },
  ];

  const index = [1, 2];

  it('renders studies', () => {
    render((
      <BasicTemplates
        basicTemplates={basicTemplates}
        index={index}
      />
    ));

    screen.getByText(/인삿말 배우기/);
    screen.getByText(/Hey -! How are you?/);
    screen.getByText(/안녕 무슨 일이야?/);

    screen.getByText(/일상에서 자기 소개하는 법 배우기/);
    screen.getByText(/Hi -! My name is Jimin. It is good to see you!/);
    screen.getByText(/안녕 나는 지민이라고 해! 널 만나게 되어서 반가워!/);
  });
});
