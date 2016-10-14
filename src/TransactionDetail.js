import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Incoming from 'material-ui/svg-icons/content/add-circle-outline';
import Outgoing from 'material-ui/svg-icons/content/remove-circle-outline';

const TransactionDetail = ({ transaction }) => {
  const { amount, accountParty } = transaction;
  const formatValue = (val, precision) => val / 10**precision;
  const avatar = (
    <Badge
      badgeContent={
        <IconButton style={{ paddingBottom: 0 }} tooltip={amount.value > 0 ? 'incoming' : 'outgoing' }>
          {amount.value > 0 ? <Incoming/> : <Outgoing/>}
        </IconButton>}
    />
  );

  const title = (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '9px' }}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {(accountParty.partyDescription || accountParty.accountPartyDescription) && (
          <div style={{marginRight: '10px'}}>
            {accountParty.partyDescription || accountParty.accountPartyDescription}
          </div>
        )}
        <div >
          {`${formatValue(amount.value, amount.precision)} ${amount.currency}`}
        </div>
      </div>
      <div>
        {new Date(transaction.valuationDate).toLocaleString()}
      </div>
    </div>
  );
  return (
    <Card style={{ borderRadius: '0 0 2px 0', float: null }}>
      <CardHeader
        title={title}
        subtitle={transaction.description}
        actAsExpander={true}
        avatar={avatar}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <pre>{ JSON.stringify(transaction, null, 4) }</pre>
      </CardText>
    </Card>
  );
};

export default TransactionDetail;
