import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Foods } from '../../models/foods';
import Input from '../Input';
import Modal from '../Modal';
import { Form } from './styles';


type ModalAddFoodParams = {
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (value: Foods) => void
}



function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodParams) {
  const formRef = createRef<any>();

  const handleSubmit = async (data: Foods) => {
    handleAddFood(data);
    setIsOpen();
  };



  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );

};

export default ModalAddFood;
