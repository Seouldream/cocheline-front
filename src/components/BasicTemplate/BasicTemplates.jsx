import styled from 'styled-components';
import BasicTemplate from './BasicTemplate';

const TipBox = styled.div`
  border-bottom: solid 1px #D9D9D9;  
  padding-block: 0 2em;
`;

const Tip = styled.div`
  background-color: #ECF7EE;
  width:fit-content;
  padding: 0.6em;
  border-radius: 0.2em;
  word-break: keep-all;
  line-height: 1.5em;
`;

export default function BasicTemplates({
  basicTemplates,
}) {
  return (
    <>
      <ul>
        {basicTemplates.map((basicTemplate, index) => (
          <BasicTemplate
            key={basicTemplate.id}
            basicTemplate={basicTemplate}
            index={index}
          />
        ))}
      </ul>
      <TipBox>
        <Tip>
          <strong>π‘ Tip!</strong>
          <br />
          μ λ§λ‘ κ·Έ μν©μμ μ²ν λ― μ°κΈ°λ₯Ό νμλ©΄ μ€λ ₯μ΄ νμ°ν λμ΄μ!
          κΌ­ λ΄κ° κ·Έ μν©μ μλ€κ³  κ°μ νκ³  μ€μ€λ‘μ λ°μμ΄ μ΄μνκ³  μ€κΈκ±°λ¦¬λλΌλ λμ± μ°κΈ°νλ κ² μ²λΌ κ³Όμ₯λκ² ν΄μ£ΌμΈμ.
          μλλ°©μ΄ μ΄λλλΌμμ μ΄λ€ μ±λ³κ³Ό μ±κ²©μ κ°μ‘μμ§ μμνλ©΄ λμ± μ’μμ!
        </Tip>
      </TipBox>
    </>
  );
}
