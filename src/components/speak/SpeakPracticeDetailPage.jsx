/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSpeakPracticeCommentsStore from '../../hooks/useSpeakPracticeCommentsStore';
import useSpeakPracticesStore from '../../hooks/useSpeakPracticesStore';
import Input from '../common/Input';
import NormalButton from '../common/NormalButton';
import CommentsOnSpeakPractice from './CommentsOnSpeakPractice';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const CommentBox = styled.div`
  border: 1px #d9d9d9 solid;
  border-radius: 0.5rem;
  padding-inline: 1em;
  padding-block: 0.5em;
`;

export default function SpeakPracticeDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = location.state;

  const speakPracticesStore = useSpeakPracticesStore();
  const speakPracticeCommentsStore = useSpeakPracticeCommentsStore();

  useEffect(() => {
    speakPracticesStore.fetchPractice(id);
    speakPracticeCommentsStore.fetchCommentsByPracticeId(id);
  }, []);

  const { practice } = speakPracticesStore;

  const { comments } = speakPracticeCommentsStore;

  const accessInformation = JSON.parse(localStorage.getItem('accessInformation'));

  const { accessToken } = accessInformation;

  const { name } = accessInformation;

  const handleClickCreateComment = async () => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    await speakPracticeCommentsStore.createComment(id, accessToken);

    await speakPracticeCommentsStore.fetchCommentsByPracticeId(id);
  };

  return (
    <Container>
      <h1>{practice.title}</h1>
      <p>
        μμ±μ:
        {' '}
        {practice.userName}
      </p>
      <p>π 1. μν©μ€λͺ</p>
      <p>{practice.situation}</p>
      <p>βπ» 2. μμ΄λ‘ μ¨λ³΄κΈ°</p>
      <p>{practice.englishScript}</p>
      <p>3.νκΈλ‘ μν©μ€λͺ ν΄λ³΄κΈ°.</p>
      <p>{practice.koreanScript}</p>
      <p>π λΉμ νμΌ</p>
      <figure>
        <figcaption />
        <audio
          controls
          src={practice.recordUrl}
        >
          <a href={practice.recordUrl}>
            Download audio
          </a>
        </audio>
      </figure>
      <CommentsOnSpeakPractice
        comments={comments}
      />
      <CommentBox>
        {accessToken
          ? (
            <p>
              {name}
              λ, μκ²¬μ λ¨κ²¨λ³΄μΈμ!
            </p>
          ) : <p>λ‘κ·ΈμΈ νμλ©΄ λκΈμ λ¨κΈΈ μ μμ΄μ!</p>}
        <label htmlFor="input-comment">
          π­
        </label>
        <Input
          id="input-comment"
          type="text"
          value={speakPracticeCommentsStore.comment}
          onChange={(e) => speakPracticeCommentsStore.changeComment(e.target.value)}
        />
        <p />
        <NormalButton
          type="button"
          onClick={handleClickCreateComment}
        >
          λ΅λ³λ±λ‘
        </NormalButton>
      </CommentBox>
    </Container>
  );
}
