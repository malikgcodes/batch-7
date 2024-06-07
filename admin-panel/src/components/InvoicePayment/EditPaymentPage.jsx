import React from 'react';
import EditPayment from './EditPayment';

const samplePayment = {
  invoiceNumber: 'INV-001',
  issueDate: '2023-05-01',
  dueDate: '2023-06-01',
  customer: 'Customer A',
  total: 500,
  paymentStatus: 'paid',
};

const EditPaymentPage = () => {
  return (
    <div>
      <EditPayment payment={samplePayment} />
    </div>
  );
};

export default EditPaymentPage;
