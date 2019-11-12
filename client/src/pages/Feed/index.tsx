import React, { Fragment, useState } from "react";
import Layout from "../../components/Layout";
import {
  TitleText,
  DescriptionText,
  BodyTitleText,
  BodyText
} from "../../components/Typography";
import Button from "../../components/Button";
import { ReactComponent as Plus } from "../../static/svg/plus.svg";
import {
  FeedHeadContainer,
  FeaturedPosts,
  ModalHeaderContainer,
  ModalImage,
  ModalHeaderTextWrapper
} from "./style";
import { BigCard, SkeletonCard } from "../../components/Cards";
import { usePostsContext } from "../../contexts/Posts";
import Modal from "../../components/Modal";
import { Post, PostsDocument } from "../../generated/graphql";
import { Divider } from "../../components/MobileMenu/style";
import { Tooltip } from "../../components/Tooltip";
import ModalPurchaseForm from "../../components/ModalPurchaseForm";

interface ModalState extends Post {}

const Feed = () => {
  const { posts, isLoading } = usePostsContext();
  const [isOpen, setOpen] = useState(false);
  const [modalPost, setModalPost] = useState<ModalState>(PostsDocument);

  return (
    <Fragment>
      <Tooltip />
      <Modal title="Purchase" isOpen={isOpen} setOpen={setOpen}>
        <ModalHeaderContainer>
          <ModalImage
            src={modalPost.imageUrl}
            draggable={false}
            alt={`image of ${modalPost.name}`}
          />
          <ModalHeaderTextWrapper>
            <BodyTitleText style={{ fontWeight: "bold", marginBottom: 5 }}>
              {modalPost.name}
            </BodyTitleText>
            <BodyText style={{ fontWeight: 600 }}>
              {modalPost.description}
            </BodyText>
          </ModalHeaderTextWrapper>
        </ModalHeaderContainer>
        <Divider style={{ margin: "15px 0" }} />
        <ModalPurchaseForm />
      </Modal>
      <Layout title="Feed">
        <FeedHeadContainer>
          <div>
            <TitleText>Your Feed</TitleText>
            <DescriptionText style={{ margin: "15px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </DescriptionText>
          </div>
          <Button data-tip="Create a new post">
            New Post
            <Plus className="icon" />
          </Button>
        </FeedHeadContainer>
        <FeaturedPosts>
          {isLoading ? (
            <SkeletonCards />
          ) : (
            posts.map(post => {
              return (
                <BigCard
                  post={post}
                  key={post.id}
                  onClick={() => {
                    setOpen(true);
                    setModalPost(post);
                  }}
                />
              );
            })
          )}
        </FeaturedPosts>
      </Layout>
    </Fragment>
  );
};

export default Feed;

const SkeletonCards = () => {
  return (
    <Fragment>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </Fragment>
  );
};
