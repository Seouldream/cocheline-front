import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Categories from '../../components/practicalTemplate/Categories';

import usePraciticalTemplatesStore from '../../hooks/usePracticalTemplatesStore';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const Header = styled.div`

padding-block: 2em 2em;
border-bottom: solid 1px #D9D9D9;

p {
  line-height: 1.8em;
}
 ;

  span {
    color :#00C641;
    font-size: 1.5em;
    font-weight: bold;
  }

p {
  background-color: #ECF7EE;
  width:fit-content;
  padding: 0.3em;
}
`;

export default function PracticalTemplatesPage() {
  const navigate = useNavigate();
  const practicalTemplatesStore = usePraciticalTemplatesStore();
  const { practicalTemplateCategories } = practicalTemplatesStore;

  const [searchParams] = useSearchParams();

  console.log(searchParams);

  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    practicalTemplatesStore.fetchPracticalTemplateCategories(page);
  }, [page]);

  const navigateToCategoryDetails = (id) => {
    navigate(`/practicalTemplates/categories/${id}`, { state: { id } });
  };

  return (
    <Container>
      <Header>
        <span>STEP3</span>
        <h1>π₯ μΈμμ μ€μ μ΄μΌ κ·μΌλ₯μ΄μΌ</h1>
        <p>
          <strong>
            μ λ²μ¨ μ€μ μ΄μμ!
          </strong>
          <br />
          μΈμ΄λ μ΅λν μ½κ³  κ°λ¨νκ² λ°°μμ λ°λ‘λ°λ‘ μ¨λ¨Ήμλ μ€λ ₯μ΄ κ°μ₯ μμ§ μμΉνλ΅λλ€.
        </p>
      </Header>
      <h3>π μλ μΉ΄νκ³ λ¦¬μμ μν©λ³ μμμ ν΄λ³΄κ³  μμ΄λ‘ λ§ν΄λ³΄μμ!</h3>
      <Categories
        categories={practicalTemplateCategories}
        navigateToCategoryDetails={navigateToCategoryDetails}
        totalPages={practicalTemplatesStore.totalPages}
      />
    </Container>
  );
}
