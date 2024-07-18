import React from 'react';
import { Modal } from 'antd';

const BassicModal= ({component,title,openModal,onOk,onCancel,width}) => {
  return (
    <>
      <Modal title={title} open={openModal} onOk={onOk} onCancel={onCancel} width={width} footer={null}>
       {component}
      </Modal>
    </>
  );
};

export default BassicModal;