import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  CircularProgress,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
} from '@mui/material';

const PaymentMethodSelection = ({ open, onClose, onConfirmPayment, paymentPending, setPaymentMethod }) => {
  const [bankCardDetails, setBankCardDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [easyPaisaDetails, setEasyPaisaDetails] = useState({ phoneNumber: '' });

  const handleProcessPayment = () => {
    onConfirmPayment();
  };

  const handleBankCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankCardDetails({ ...bankCardDetails, [name]: value });
  };

  const handleEasyPaisaDetailsChange = (e) => {
    const { name, value } = e.target;
    setEasyPaisaDetails({ ...easyPaisaDetails, [name]: value });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Payment Method</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">Payment Method</FormLabel>
          <RadioGroup
            aria-label="payment-method"
            name="paymentMethod"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel value="bankCard" control={<Radio />} label="Bank Card" />
            {paymentMethod === 'bankCard' && (
              <>
                <TextField
                  margin="normal"
                  label="Card Number"
                  name="cardNumber"
                  value={bankCardDetails.cardNumber}
                  onChange={handleBankCardDetailsChange}
                />
                <TextField
                  margin="normal"
                  label="Expiry Date"
                  name="expiryDate"
                  value={bankCardDetails.expiryDate}
                  onChange={handleBankCardDetailsChange}
                />
                <TextField
                  margin="normal"
                  label="CVV"
                  name="cvv"
                  value={bankCardDetails.cvv}
                  onChange={handleBankCardDetailsChange}
                />
              </>
            )}
            <FormControlLabel value="easyPaisa" control={<Radio />} label="EasyPaisa" />
            {paymentMethod === 'easyPaisa' && (
              <TextField
                margin="normal"
                label="Phone Number"
                name="phoneNumber"
                value={easyPaisaDetails.phoneNumber}
                onChange={handleEasyPaisaDetailsChange}
              />
            )}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleProcessPayment} color="primary" disabled={paymentPending}>
          {paymentPending ? <CircularProgress size={24} /> : "Confirm Payment"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentMethodSelection;
