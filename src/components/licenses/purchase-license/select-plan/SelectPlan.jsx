import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import crownSvg from '../../../../assets/crown.svg'; 
import './select-plan.css';

function FlexContainer({ children }) {
  return (
    <div style={{ display: "flex", height: 300, flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
      {children}
    </div>
  )
}

export default function SelectPlan({ selectedPlan, handleSelectPlan, handleContactUs }) {
  const isPlanEnterprise = !selectedPlan.startsWith("space-cloud-pro") && !selectedPlan.startsWith("space-cloud-open")

  return (
    <Row className="select-plan">
      <Col lg={{ span: 11, offset: 0  }} xl={{ span: 8, offset: 3 }}>
        <Card className="select-plan-card blue-card">
          <FlexContainer>
            <div>
              <h3 className="select-plan-plan blue">PRO</h3>
              <h1 className="select-plan-amount blue">$150</h1>
              <p className="select-plan-time blue">per month</p>
              <Typography.Paragraph style={{ marginBottom: 0 }} ellipsis>2 Clusters</Typography.Paragraph>
              <Typography.Paragraph style={{ marginBottom: 0 }} ellipsis>1 project</Typography.Paragraph>
              <Typography.Paragraph style={{ marginBottom: 0 }} ellipsis>3 databases</Typography.Paragraph>
              <Typography.Paragraph style={{ marginBottom: 0 }} ellipsis>Email support (48 hrs response time)</Typography.Paragraph>
            </div>
            {selectedPlan.startsWith("space-cloud-pro") && <Button size="large" className="select-plan-button selected-button">Current plan</Button>}
            {!selectedPlan.startsWith("space-cloud-pro") && <Button size="large" className="select-plan-button blue-button" onClick={() => handleSelectPlan("space-cloud-pro--monthly")}>Use this plan</Button>}
          </FlexContainer>
        </Card>
      </Col>
      <Col lg={{ span: 11, offset: 1 }} xl={{ span: 8, offset: 1 }}>
        <Card className="select-plan-card purple-card">
          <FlexContainer>
            <div>
              <h3 className="select-plan-plan purple">BUSINESS</h3>
              <img src={crownSvg} height='48px' width='48px' style={{ marginBottom:'48px', marginTop:'24px' }}  />
              <Typography.Paragraph style={{ marginBottom: 0 }} ellipsis>5 clusters</Typography.Paragraph>
              <Typography.Paragraph style={{ marginBottom: 0 }} ellipsis>5 projects</Typography.Paragraph>
              <Typography.Paragraph style={{ marginBottom: 0 }} ellipsis>Unlimited databases</Typography.Paragraph>
              <Typography.Paragraph style={{ marginBottom: 0 }} ellipsis>Email support (48 hrs response time)</Typography.Paragraph>
            </div>
            {isPlanEnterprise && <Button size="large" className="select-plan-button selected-button">Current plan</Button>}
            {!isPlanEnterprise && <Button size="large" className="select-plan-button purple-button" onClick={() => handleContactUs("Purchase Space Cloud Enterprise license")}>Contact us</Button>}
          </FlexContainer>
        </Card>
      </Col>
      <Col lg={{ span: 24 }}>
        <Card className="select-plan-card" style={{ marginTop: "32px" }}>
          <span style={{ fontSize: "14px", marginRight: "24px" }}>Want to partner with us? Or want a premium support package to meet your uptime requirements?</span>
          <Button type="primary" ghost style={{ width: "188px" }} onClick={() => handleContactUs()}>Contact us</Button>
        </Card>
      </Col>
    </Row>
  );
}