import React from "react";
import Modal from "antd/lib/modal";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { LikeTwoTone } from "@ant-design/icons";
import { FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BiCalendarEdit } from "react-icons/bi";

const styles = {
  modal: {
    padding: "0px",
  },
  imageDiv: {
    height: "50vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "black",
  },
  textDiv: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: "15px",
    textAlign: "center",
  },
  userDetails: {
    width: "100%",
    padding: "0 10px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  creationDetails: {
    marginTop: "20px",
    textAlign: "right",
    alignSelf: "flex-end",
  },
};

const InstagramModal = ({ visible, onCancel, image }) => {
  return (
    <div>
      {image ? (
        <Modal
          title={null}
          visible={visible}
          onCancel={onCancel}
          footer={null}
          centered
          style={styles.modal}
        >
          <Row gutter={[12]}>
            <Col md={12} span={24}>
              <div
                style={{
                  ...styles.imageDiv,
                  backgroundImage: `url(${image.urls.full})`,
                }}
              ></div>
            </Col>
            <Col md={12} span={24}>
              <div style={styles.textDiv}>
                <h3 style={{ textTransform: "capitalize" }}>
                  {image.description}
                </h3>
                <h4 style={{ textTransform: "capitalize" }}>
                  {image.alt_description}
                </h4>
                <div style={styles.userDetails}>
                  <div className="likes">
                    <LikeTwoTone twoToneColor="red" />
                    &nbsp;
                    <span>{image.likes}</span>
                  </div>

                  <div className="twitter">
                    <FaTwitter color="#00acee" />
                    &nbsp;
                    <span>{image.user.twitter_username}</span>
                  </div>
                </div>
                <div style={styles.creationDetails}>
                  <p>
                    <GoLocation color="blue" /> {image.user.name}
                  </p>
                  <p>
                    <BiCalendarEdit />{" "}
                    {new Date(image.user.updated_at).toDateString()}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Modal>
      ) : null}
    </div>
  );
};

export default InstagramModal;
