import styled from "styled-components";
import Modal from "./modal";
import { HiMiniUser } from "react-icons/hi2";

const Form = styled.form`
  padding: 2.4rem 4rem;

  /* Box */
  background-color: gray;
  border: 1px solid #f3f4f6;
  border-radius: 7px;
  overflow: hidden;
  font-size: 1.4rem;
`;
const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function App() {
  return (
    <Modal>
      <Modal.Open opens="form">
        <button>
          <HiMiniUser />
        </button>
      </Modal.Open>
      <Modal.Window name="form">
        <Form>
          <StyledFormRow>modal windows</StyledFormRow>
        </Form>
      </Modal.Window>
    </Modal>
  );
}

export default App;
