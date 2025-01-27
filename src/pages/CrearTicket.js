import React, { useContext, useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";

const { Title, Text } = Typography;

export const CrearTicket = () => {
  const [numero, setNumero] = useState(0);

  useHideMenu(true);
  const { socket } = useContext(SocketContext);

  const nuevoTicket = () => {
    socket.emit("solicitar-ticket", null, (ticket) => {
      console.log(ticket);
      setNumero(ticket.numero);
    });
  };
  
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el botón para un nuevo ticket</Title>

          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={nuevoTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>

      {numero > 0 && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>Su número</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              {numero}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};
