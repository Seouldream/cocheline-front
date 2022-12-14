import styled from 'styled-components';

const Container = styled.div`
    padding-block: 2em 2em;
`;

const ReviewContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding-block: 1em;
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${((props) => props.theme.size.h4)};
  font-weight: bold;
  margin: 0;
`;

const ReviewWrapper = styled.div`
    margin: 0.5em;
    padding: 4em 1.5em;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: rgb(0 0 0) 2px 2px 3px 1px;
    background: url(https://megaptera.kr/images/icons/double-quotation-01.png) 5% 10% / 1em no-repeat, url(https://megaptera.kr/images/icons/double-quotation-02.png) 95% 90% / 1em no-repeat rgb(255, 255, 255);
    text-align: start;
`;

export default function Reviews() {
  return (
    <Container>
      <Title>๐ ์ปค๋ฎค๋ํฐ ํ๊ธฐ</Title>
      <ReviewContainer>
        <ReviewWrapper>
          <h3>
            ๋ฌผ์ ํ์ผ๋ก ์ปค๋ฆฌ์ด๋ฅผ ๊ณ ๋ฏผ์ค์ธ 3๋์ฐจ ์ํน๋ง ์ค๊ตญ ์ ํํ ์ถ์ 
            {' '}
            <span>๋ฏผ์ง๋ฃฝ๋ฃฝ์จ</span>
          </h3>
          <p>
            <span>์  ์์ด ๋๋ฌด ๋ชปํด์ฌ. ๋ ์ด๋ฉํด .. ์ด๊ฑฐ ํ๋ฉด ์ํด์ง๋์?</span>
            <span>
              ์ ๋งํ์ด...์ ์ด๋กํด.. ์ ์ด๋กํด...
              ๋ค!?..์ 28์ด ์๋ค ํ๋ 1์ด ๋ธ ํ๋ ๋ ์  ์๋ง์๋๋ค.
              ์ก์ 1๋ ์ฐจ์ ์ด๋ค ๊ฑธ ๊ณต๋ถํด์ผ ํ ์ง ๋ชจ๋ฅด๋ ๊ฒ ๋ถ๋๋ฝ์ต๋๋ค.
            </span>

          </p>
        </ReviewWrapper>
        <ReviewWrapper>
          <h3>
            60๋๋ ๊ณ ์ก ์ธ์ฐ ์์ด ์ ์น์ ์ถ์ 
            {' '}
            <span>์กฐ์ฝ๋ฉ์จ</span>
          </h3>
          <p>
            <span>์์ด ๊ทธ๊น์ด๊บผ ๋์ถฉ ๊ทธ๋ฅ Hey~ yo~ goํด์ฃผ๋ฉด ๋๋ ์ค ์์์ต๋๋ค.</span>
            <span>
              ์์ธ์์ ์ธ๋์ ์ฌํฌ๋ฆฌ ์์ด ์ด๋ค๊ณ  ์ฟ ์ฌ๋ฆฌ๋ฅผ ๋ฐ์์ ์ด๋ป๊ฒ ํด์ผ ํ ์ง ๋ง๋งํฉ๋๋ค.
              ๋ค์ ์์ด๋ฅผ ๋ฐฐ์ฐ๊ณ  ์ถ์ง๋ง ๋์ด ๋๋ฌธ์ ๋ง๋งํฉ๋๋ค.
              3๋ ์ฐจ์ ์ด๋ค ๊ฑธ ๊ณต๋ถํด์ผ ํ ์ง ๋ชจ๋ฅด๋ ๊ฒ ๋ถ๋๋ฝ์ต๋๋ค.
            </span>

          </p>
        </ReviewWrapper>
        <ReviewWrapper>
          <h3>
            ๋ฐ์์ ๋๋ฌด ๊ตด๋ฆฌ๊ฐ ํ๊ฐ ๊ผฌ์ฌ๋ฒ๋ฆฐ
            {' '}
            <span>ํฉ์ด๋์จ</span>
          </h3>
          <p>
            <span>๋ค!?...์...์์ด์..? ์์ด ์ข์ฃ  ํํ</span>
            <span>
              ์์ด๋ฅผ ์ํ๊ณ ์ถ์๋ฐ ์ค๋งค์ฌ๋ผ๋ ์ฑ ๋ง๋๋๋ผ ๋ฐฉ์ 10๋ ๋ฐํ์์ด์ ์๋ฌด๊ฒ๋ ๋ชปํ์ต๋๋ค.
              ์ฌ๋์ด๋ ๋ํ๋ฅผ ์ด์ฐํ๋์ง๋ ์ ๋ชจ๋ฅด๊ฒ ๋ค์. ํํ...
              ์์ด 10๋ ์ฐจ์ ์ด๋ค ๊ฑธ ๊ณต๋ถํด์ผ ํ ์ง ๋ชจ๋ฅด๋ ๊ฒ ๋ถ๋๋ฝ์ต๋๋ค.
            </span>

          </p>
        </ReviewWrapper>
      </ReviewContainer>
    </Container>
  );
}
