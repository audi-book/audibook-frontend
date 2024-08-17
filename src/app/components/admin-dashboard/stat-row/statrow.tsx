import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StatCard from '../stat-card/statcard';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ApprovalIcon from '@mui/icons-material/Approval';
import UpcomingIcon from '@mui/icons-material/Upcoming';

const StatsRow: React.FC<{ organizationId: number }> = ({ organizationId }) => {
  

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<PendingActionsIcon style={{ fontSize: '3rem' }} />}
            stat={"20"}
            label="Pending Events"
            color="green"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<ApprovalIcon style={{ fontSize: '3rem' }} />}
            stat={"50"}
            label="Approved Events"
            color="blue"
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <StatCard
            icon={<UpcomingIcon style={{ fontSize: '3rem' }} />}
            stat={"40"}
            label="Upcoming Events"
            color="purple"
          />
        </Col>
        
      </Row>
    </Container>
  );
};

export default StatsRow;
