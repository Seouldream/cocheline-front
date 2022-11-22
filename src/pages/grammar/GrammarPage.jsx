import { useState, useEffect } from 'react';
import useGrammarStore from '../../hooks/useGrammarStore';

export default function GrammarPage() {
  const grammarStore = useGrammarStore();

  useEffect(() => {
    grammarStore.fetchGrammar();
  }, []);

  // ToDo 백엔드 생성후 오픈
  // const { grammar } = grammarStore;

  const grammar = {
    id: 1,
    introduction: '영어를 말하기 위해서 가장 기초적인 문법들만 모아놓았어요! 더 이상의 문법은 담지 않았어요. 나머지는 직접 쓰고 활용하면서 조금 더 익혀보도록 해요!',
    content: '1형식',
  };

  return (
    <>
      {' '}
      {grammar
        ? (
          <>
            <h1>스텝1! 이태원에서 바로 먹히는 영어 회화 실전 문법!</h1>
            <p>{grammar.introduction}</p>
            <p>{grammar.content}</p>
          </>
        )
        : <p>조금만 기다려주세요!</p>}
    </>
  );
}
