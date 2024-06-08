function calculateTip(){
  // getting input values
  const bill_amount = parseFloat(document.getElementById('bill-amount').value);
  const tip_percentage = parseFloat(document.getElementById('tip-percentage').value);

  // validate input
  if(isNaN(bill_amount) || isNaN(tip_percentage)){
    alert('Please enter an value!!');
    console.warn('Give an input!!');
  }

  // calculating tip, total amount
  let tip_amount = (bill_amount) * (tip_percentage / 100);
  let total_amount = tip_amount + bill_amount;

  // displaying results
  document.getElementById('tip-amount').innerText = `₹${tip_amount.toFixed(2)}`;
  document.getElementById('total-amount').innerText = `₹${total_amount.toFixed(2)}`;
}