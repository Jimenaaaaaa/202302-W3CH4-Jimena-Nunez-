import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';
import { TaskStructure } from '../../models/task';
import { TASK } from '../../mocks/tasks';

describe('Given Card component', () => {
  const deleteMock = jest.fn();
  const updateMock = jest.fn();
  const mockTask: TaskStructure = TASK[0];
  let element: Card;

  beforeEach(() => {
    document.body.innerHTML = '<ul></ul>';
    element = new Card('ul', mockTask, deleteMock, updateMock);
  });

  test('It should be in the document', () => {
    // Mocks: da una funcion a medida
    // spies: te doy una funcion pero la envuelvo para espiarte.
    // stubs: mocks / spies;

    expect(element).toBeInstanceOf(Card);
  });

  test('It renders the card in the document', () => {
    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();
    const span = screen.getByText(mockTask.name);
    expect(span).toBeInTheDocument();
  });

  test('User can click checkbox', () => {
    const check = screen.getByRole('checkbox');
    fireEvent.change(check);
    expect(updateMock).toHaveBeenCalled();
  });

  test('User can click the button and delete', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(deleteMock).toHaveBeenCalled();
  });
});
