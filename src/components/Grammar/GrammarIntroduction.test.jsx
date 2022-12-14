import { fireEvent, render, screen } from '@testing-library/react';
import { useState as useStateMock } from 'react';

import GrammarIntroduction from './GrammarIntroduction';

const context = describe;

const introduction = '그래머 인트로덕션입니다.';
const handleChangeIntroduction = jest.fn();
const handleClickEditIntroduction = jest.fn();
const handleClickCancelEditIntroduction = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('@ckeditor/ckeditor5-react', () => ({
  CKEditor: jest.fn(),
}));

jest.mock('@ckeditor/ckeditor5-build-classic', () => '');

describe('GrammarIntroduction', () => {
  function renderGrammarIntroduction() {
    render(<GrammarIntroduction
      introduction={introduction}
      onChangeIntroduction={handleChangeIntroduction}
      onClickEditIntroduction={handleClickEditIntroduction}
      handleClickCancelEditIntroduction={handleClickCancelEditIntroduction}
    />);
  }

  const setIsOpen = jest.fn();

  const toggleModal = setIsOpen;

  context('renders GrammarIntroduction', () => {
    useStateMock.mockImplementation((isOpen) => [isOpen, setIsOpen]);
    it('shows grammars\'introduction in textarea box.', () => {
      renderGrammarIntroduction();

      screen.getByText('수정 완료');

      fireEvent.click(screen.getByText('수정 완료'));

      expect(toggleModal).toBeCalled();
    });

    it('proves introduction edit button working.', () => {
      renderGrammarIntroduction();

      screen.getByText('수정 완료');

      fireEvent.click(screen.getByText('수정 완료'));

      expect(toggleModal).toBeCalled();
    });
  });
});
