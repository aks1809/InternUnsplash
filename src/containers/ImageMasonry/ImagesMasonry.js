import React, { useEffect, useState } from "react";
import "./ImagesMasonry.css";
import Card from "antd/lib/card";
import { LikeTwoTone } from "@ant-design/icons";
import { FaTwitter } from "react-icons/fa";
import Loader from "../Loader/Loader";
import InstagramModal from "../InstagramModal/InstagramModal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Pagination from "antd/lib/pagination";
import unsplashActions from "../../redux/unsplash/actions";
import { useDispatch, useSelector } from "react-redux";

const { Meta } = Card;
const { fetchPictures } = unsplashActions;

const ImagesMasonry = ({ search }) => {
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);
  const [totalRes, setTotalRes] = useState(0);
  const [onPage, setOnPage] = useState(1);
  const [key, setKey] = useState(-1);
  const dispatch = useDispatch();
  const { imageList } = useSelector((state) => state.unsplashReducer);

  useEffect(() => {
    dispatch(fetchPictures(search, onPage));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch, search, onPage]);

  useEffect(() => {
    if (imageList) {
      setImages(imageList.results);
      setTotalRes(imageList.total);
    }
  }, [imageList]);

  return (
    <div style={{ height: "100%" }}>
      {!imageList ? (
        <Loader />
      ) : (
        <div>
          <h1 className="search-text">
            Showing results for: <span>{search}</span>
          </h1>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 650: 2, 900: 3 }}
          >
            <Masonry>
              {images.map((image, index) => {
                return (
                  <div className="card-container" key={index}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img src={image.urls.regular} alt={image} />}
                      onClick={() => {
                        setVisible(true);
                        setKey(index);
                      }}
                    >
                      <Meta
                        title={image.user.name}
                        description={
                          <div className="user-details">
                            <div className="likes">
                              <LikeTwoTone twoToneColor="red" />
                              &nbsp;
                              <span>{image.likes}</span>
                            </div>
                            {image.user.twitter_username !== "" ? (
                              <div className="twitter">
                                <FaTwitter color="#00acee" />
                                &nbsp;
                                <span>{image.user.twitter_username}</span>
                              </div>
                            ) : null}
                          </div>
                        }
                      />
                    </Card>
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
          <div className="pagination">
            <Pagination
              total={totalRes}
              current={onPage}
              pageSize={20}
              onChange={(e) => setOnPage(e)}
            />
          </div>
        </div>
      )}
      <InstagramModal
        visible={visible}
        onCancel={() => setVisible(false)}
        image={key === -1 ? null : images[key]}
      />
    </div>
  );
};

export default ImagesMasonry;
