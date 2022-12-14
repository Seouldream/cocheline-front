import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CategoriesAdmin from '../../components/practicalTemplate/CategoriesAdmin';

import usePraciticalTemplatesStore from '../../hooks/usePracticalTemplatesStore';

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  margin: 1em 0.5em;
`;

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

export default function PracticalTemplatesAdminPage() {
  const navigate = useNavigate();
  const practicalTemplatesStore = usePraciticalTemplatesStore();

  const { practicalTemplateCategories } = practicalTemplatesStore;

  useEffect(() => {
    practicalTemplatesStore.fetchPracticalTemplateCategories();
  }, []);

  const navigateToCategoryDetails = (id) => {
    navigate(`/practicalTemplates/admin/categories/${id}`, { state: { id } });
  };

  const handleClickNavigateToPracticalTemplateFormPage = () => {
    navigate('/practicalTemplates/admin/new');
  };

  const handleFetchCategories = () => {
    practicalTemplatesStore.fetchPracticalTemplateCategories();
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
      <CategoriesAdmin
        categories={practicalTemplateCategories}
        navigateToCategoryDetails={navigateToCategoryDetails}
        handleFetchCategories={handleFetchCategories}
      />
      <AdminButton
        type="button"
        onClick={handleClickNavigateToPracticalTemplateFormPage}
      >
        μ μ€μ ννλ¦Ώ λ§λ€κΈ°
      </AdminButton>
    </Container>
  );
}
