import React from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import SelectHandle from './SelectHandle';

type Props = {
  open: boolean;
  onClose: () => void;
};

const CreatePostModal = ({ open, onClose }: Props) => {
  const closeHandler = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={open}
        onClose={closeHandler}
      >
        <Modal.Header>
          <SelectHandle />
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
